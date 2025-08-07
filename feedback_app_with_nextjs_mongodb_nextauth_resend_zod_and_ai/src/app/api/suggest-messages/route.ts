// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';
// import { NextRequest, NextResponse } from 'next/server';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const runtime = 'edge';

// export async function POST(req: NextRequest) {
//   try {
//     const prompt =
//       "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

//     const response = await openai.completions.create({
//       model: 'gpt-3.5-turbo-instruct',
//       max_tokens: 400,
//       stream: true,
//       prompt,
//     });

//     const stream = OpenAIStream(response);

//     return new StreamingTextResponse(stream);
//   } catch (error) {
//     if (error instanceof OpenAI.APIError) {
//       // OpenAI API error handling
//       const { name, status, headers, message } = error;
//       return NextResponse.json({ name, status, headers, message }, { status });
//     } else {
//       // General error handling
//       console.error('An unexpected error occurred:', error);
//       throw error;
//     }
//   }
// }

// import { google } from "@ai-sdk/google";
// import { generateText, streamText } from "ai";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const prompt =
//       "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

//     const { text } = await generateText({
//       model: google("gemini-2.5-flash"),
//       prompt: "Write a vegetarian lasagna recipe for 4 people.",
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// import { google } from "@ai-sdk/google";
// import { streamText } from "ai";
// import { NextRequest, NextResponse } from "next/server";

// const model = google("gemini-2.5-flash");

// export async function POST(req: NextRequest) {
//   const { prompt } = await req.json();
//   const { textStream } = streamText({ model, prompt });
//   return new NextResponse(textStream, {
//     headers: { "Content-Type": "text/plain; charset=utf-8" },
//   });
// }


// import { google } from '@ai-sdk/google';
// import { generateText } from 'ai';

// const { text } = await generateText({
//   model: google('gemini-2.5-flash'),
//   prompt: 'Write a vegetarian lasagna recipe for 4 people.',
// });