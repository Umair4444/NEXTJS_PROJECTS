from fastapi import FastAPI, Request, HTTPException
from agents import Agent, Runner, AsyncOpenAI, OpenAIChatCompletionsModel, RunConfig
from dotenv import load_dotenv
import os
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from typing import List, Dict

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://chatbotagent-sooty.vercel.app"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

gemini_api_key = os.getenv("GEMINI_API_KEY")
if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY is not set. Please ensure it is defined in your .env file.")

external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-1.5-flash",  # Updated to a valid model name
    openai_client=external_client
)

config = RunConfig(
    model=model,
    tracing_disabled=True
)

# Initialize agent once
agent = Agent(
    name="Agent",
    instructions="You are a helpful assistant that remembers previous context.",
    model=model,
)

# In-memory storage (replace with database for production)
saved_messages: Dict[str, List[Dict]] = {}  # Keyed by user_id

@app.post("/api/chat")
async def chat(request: Request):
    try:
        body = await request.json()
        user_input = body.get("input")
        user_id = body.get("user_id", "default")  # Add user_id for multi-user support
        if not user_input:
            raise HTTPException(status_code=400, detail="Missing 'input'")

        # Get user-specific history
        user_messages = saved_messages.get(user_id, [])
        history = "\n".join([f"User: {m['user']}\nAgent: {m['agent']}" for m in user_messages[-5:]])  # Limit to last 5 messages
        context = f"{history}\nUser: {user_input}" if history else f"User: {user_input}"

        response = await Runner.run(agent, input=context, run_config=config)
        final_output = response.final_output

        # Save user and agent response
        user_messages.append({"user": user_input, "agent": final_output})
        saved_messages[user_id] = user_messages

        return {"response": final_output}
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid JSON")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get("/api/messages")
async def get_saved_messages(user_id: str = "default"):
    return {"messages": saved_messages.get(user_id, [])}

handler = Mangum(app)