import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
         <Image
          src="/logo.jpg"
          alt="Peace Mentorship Logo"
          width={40}
          height={40}
          className="rounded-md object-contain"
        />

          <span className="text-sm font-semibold tracking-tight text-slate-900">Peace Mentorship</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="/#about" className="hover:text-slate-900">
            About
          </a>
          <a href="/#who-for" className="hover:text-slate-900">
            Who It's For
          </a>
          <a href="/#gains" className="hover:text-slate-900">
            What You Gain
          </a>
          <a href="/#curriculum" className="hover:text-slate-900">
            Curriculum
          </a>
          <a href="/#faq" className="hover:text-slate-900">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/apply"
            className="hidden sm:inline-flex rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
