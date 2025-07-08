// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server"; // ✅ You're using the Next.js version — works for you
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/payment(.*)"];
const adminRoutes = ["/dashboard(.*)"];

const isPublicRoute = createRouteMatcher(publicRoutes);
const isProtectedRoute = createRouteMatcher(protectedRoutes);
const isAdminRoute = createRouteMatcher(adminRoutes);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId } = await auth();
  const client = await clerkClient();

  // ❌ Not logged in and trying to access protected/admin route
  if (!userId && (isProtectedRoute(req) || isAdminRoute(req))) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // ✅ Check admin role
  if (userId && isAdminRoute(req)) {
    try {
      const user = await client.users.getUser(userId);
      let role = user.publicMetadata.role;
      console.log("🧑‍💼 Role:", role);
      if (role !== "admin") {
        return NextResponse.redirect(new URL("/403", req.url));
      }
      return NextResponse.next();
    } catch (error) {
      console.error("❌ Clerk error:", error);
      return NextResponse.redirect(new URL("/500", req.url));
    }
  }

  // ✅ Already logged in? Redirect away from /sign-in and /sign-up
  if (userId && isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:ico|png|jpg|jpeg|svg|css|js|json|woff2?)).*)",
    "/(api|trpc)(.*)",
  ],
};
