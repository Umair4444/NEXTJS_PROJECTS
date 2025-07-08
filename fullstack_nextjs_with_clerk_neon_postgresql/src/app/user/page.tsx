// app/components/CheckUser.tsx
"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function CheckUser() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      console.log("✅ Logged in user data:", user);
      console.log("📧 Email:", user.emailAddresses[0].emailAddress);
      console.log("🧑‍💼 Role (from publicMetadata):", user.publicMetadata?.role);
    } else if (isLoaded && !isSignedIn) {
      console.log("❌ No user is signed in.");
    }
  }, [isLoaded, isSignedIn, user]);

  return null;
}
