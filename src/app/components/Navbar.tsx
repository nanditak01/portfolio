import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Nandita K
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}