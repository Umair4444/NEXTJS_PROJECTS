import Profile from "@/components/Profile";
import { UserProvider } from "@/context/UserProvider";
import Link from "next/link";

export default function Home() {
  return (
    <UserProvider>
      <main className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <Profile />
        <Link href="/" target="_blank">go to home</Link>
      </main>
    </UserProvider>
  );
}
