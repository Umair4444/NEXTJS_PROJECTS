"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GoogleLogo from "@/components/GoogleLogo";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function GoogleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"email" | "password">("email");
  const router = useRouter();

  const handleEmailNext = () => {
    if (email.trim()) {
      setStep("password");
    }
  };

  const handleLogin = () => {
    // Mock login logic
    if (password.trim()) {
      localStorage.setItem("google_user", JSON.stringify({ email }));
      router.push("/google-result/result");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (step === "email") {
        handleEmailNext();
      } else {
        handleLogin();
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[448px]">
        {/* Google Logo */}
        <div className="text-center mb-12">
          <GoogleLogo size="medium" />
        </div>

        {/* Login Form */}
        <div className="border border-[#dadce0] rounded-lg px-10 py-12 bg-white">
          {step === "email" ? (
            <>
              {/* Email Step */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-normal text-[#202124] mb-2">
                  Sign in
                </h1>
                <p className="text-[#5f6368] text-base">
                  to continue to Google
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Email or phone"
                    className="w-full h-14 px-4 text-base border border-[#dadce0] rounded-[4px] focus:border-[#1a73e8] focus:outline-none transition-colors"
                  />
                </div>

                <div className="text-sm">
                  <Link
                    href="/google"
                    className="text-[#1a73e8] hover:underline font-medium"
                  >
                    Forgot email?
                  </Link>
                </div>

                <div className="text-sm text-[#5f6368] leading-relaxed">
                  Not your computer? Use Guest mode to sign in privately.{" "}
                  <Link
                    href="/google"
                    className="text-[#1a73e8] hover:underline font-medium"
                  >
                    Learn more
                  </Link>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <Link
                    href="/login"
                    className="text-[#1a73e8] hover:underline text-sm font-medium"
                  >
                    Create account
                  </Link>
                  <button
                    onClick={handleEmailNext}
                    disabled={!email.trim()}
                    className="bg-[#1a73e8] hover:bg-[#1557b0] disabled:bg-[#94a3b8] text-white px-6 py-2 rounded text-sm font-medium transition-colors h-9"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Password Step */}
              <div className="flex items-center mb-8">
                <button
                  onClick={() => setStep("email")}
                  className="mr-4 text-[#1a73e8] hover:bg-[#f8f9fa] p-2 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-2xl font-normal text-[#202124] mb-1">
                    Welcome
                  </h1>
                  <p className="text-sm text-[#5f6368] truncate max-w-[200px]">
                    {email}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter your password"
                    className="w-full h-14 px-4 pr-12 text-base border border-[#dadce0] rounded-[4px] focus:border-[#1a73e8] focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5f6368] hover:text-[#202124] p-1"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="text-sm">
                  <Link
                    href="/login"
                    className="text-[#1a73e8] hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleLogin}
                    disabled={!password.trim()}
                    className="bg-[#1a73e8] hover:bg-[#1557b0] disabled:bg-[#94a3b8] text-white px-6 py-2 rounded text-sm font-medium transition-colors h-9"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-[#5f6368]">
          <Link
            href="/google"
            className="hover:text-[#202124] transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/google"
            className="hover:text-[#202124] transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
