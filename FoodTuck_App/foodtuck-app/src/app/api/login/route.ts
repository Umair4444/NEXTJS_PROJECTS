// // import { NextRequest, NextResponse } from "next/server";

// // const UsersList: { username: string; email: string }[] = [];

// // export function GET() {
// //   return NextResponse.json({ UsersList });
// // }

// // export async function POST(request: NextRequest) {
// //   const body = await request.json();
// //   const { username, email, password } = body;

// //   try {
// //     if (username === "admin" && password === "admin") {
// //       return NextResponse.json({
// //         message: "Welcome Admin",
// //         redirectUrl: "/admin",
// //       });
// //     } else {
// //       return NextResponse.json({
// //         message: "Please Signup",
// //         redirectUrl: "/signup",
// //       });
// //     }
// //   } catch (err: any) {
// //     return NextResponse.json({ message: "Invalid User" });
// //   }

// //   // Add user to the list after successful validation
// //   UsersList.push({ username, email });
// //   console.log("Updated Users List:", UsersList);

// //   return NextResponse.json({ message: "User added", UsersList });
// // }

// import { NextRequest, NextResponse } from "next/server";

// const UsersList: { username: string; email: string }[] = [];

// export function GET() {
//   return NextResponse.json({ UsersList });
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { username, email, password } = body;

//     if (!username || !email || !password) {
//       return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//     }

//     if (username === "admin" && password === "admin") {
//       return NextResponse.json({
//         message: "Welcome Admin",
//         redirectUrl: "/admin",
//       });
//     } else {
//       // Add user to the list after successful validation
//       UsersList.push({ username, email });
//       console.log("Updated Users List:", UsersList);

//       return NextResponse.json({
//         message: "User added",
//         redirectUrl: "/signup",
//         UsersList,
//       });
//     }
//   } catch (err: any) {
//     return NextResponse.json({ message: "Invalid User" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

const UsersList: { username: string; email: string }[] = [];

export function GET() {
  return NextResponse.json({ UsersList });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    if (username === "admin" && password === "admin") {
      // Set a cookie for authentication
      const res = NextResponse.json({
        message: "Welcome Admin",
        redirectUrl: "/admin",
      });
      res.cookies.set("admin", "true", {
        path: "/",
        httpOnly: true,
        maxAge: 86400,  // 1 day expiration
      });
      return res;
    } else {
      UsersList.push({ username, email });
      // console.log("Updated Users List:", UsersList);

      return NextResponse.json({
        message: "User Not found",
        redirectUrl: "/signup",
        UsersList,
      });
    }
  } catch (err: any) {
    return NextResponse.json({ message: "Invalid User" }, { status: 500 });
  }
}
