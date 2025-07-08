"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";

export default function CustomSignIn() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"start" | "verify">("start");
  const [error, setError] = useState("");

  const handleStart = async () => {
    if (!isLoaded || !signIn) return;

    try {
      const result = await signIn.create({
        identifier: email,
        strategy: "email_code", // ✅ required
      });

      console.log("📨 Sign-in created:", result);

      if (process.env.NODE_ENV === "development") {
        console.log(
          "📟 Dev Code (dashboard):",
          result?.firstFactorVerification
        );
      }

      if (result.status === "needs_first_factor") {
        setStep("verify");
      }
    } catch (err: any) {
      console.error("❌ Sign-in error:", err);
      setError(err.errors?.[0]?.message || "Error starting sign-in");
    }
  };

  const handleVerify = async () => {
    if (!isLoaded || !signIn) return;

    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        window.location.href = "/"; // redirect to homepage
      } else {
        setError("Invalid or incomplete code");
      }
    } catch (err: any) {
      console.error("❌ Verification error:", err);
      setError(err.errors?.[0]?.message || "Error verifying code");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Sign In with Email Code</h2>

      {step === "start" ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border mb-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white p-2 rounded"
            onClick={handleStart}
          >
            Send Code
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter 6-digit code"
            className="w-full p-2 border mb-2 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            className="w-full bg-green-600 text-white p-2 rounded"
            onClick={handleVerify}
          >
            Verify
          </button>
        </>
      )}

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
