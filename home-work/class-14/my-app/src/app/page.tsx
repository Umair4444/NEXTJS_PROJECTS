import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center text-4xl font-bold text-blue-900 bg-slate-400">
      <Link
        href={"/blogpost"}
        className="bg-slate-50 px-5 py-2 rounded-full text-6xl underline"
      >
        {" "}
        Go to BlogPosts
      </Link>
    </main>
  );
}
