import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          Vibrant Blog
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/blog" className="hover:text-accent">
            Blog
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
