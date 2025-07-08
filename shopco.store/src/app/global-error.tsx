"use client"

import Link from "next/link"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">Application Error</h1>
            <p className="text-lg text-gray-600 mb-8">
              A critical error occurred in the application. Please try refreshing the page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} size="lg" className="rounded-full">
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>

            {error.digest && <p className="mt-4 text-sm text-gray-500">Error ID: {error.digest}</p>}
          </div>
        </div>
      </body>
    </html>
  )
}
