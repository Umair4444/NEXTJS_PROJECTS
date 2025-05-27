// // middleware.ts
// import { NextResponse, NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Protect the /admin route
//   if (pathname === "/admin") {
//     const adminCookie = request.cookies.get("admin");
//     const isAdmin = adminCookie?.value === "true";

//     if (!isAdmin) {
//       // Redirect to login page if not an admin
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/admin", // Only run middleware for the /admin route
// };

import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect the /admin route
  if (pathname === "/admin") {
    const adminCookie = request.cookies.get("admin");

    if (adminCookie?.value !== "true") {
      // Redirect to login page if not an admin
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin", // Only run middleware for the /admin route
};
