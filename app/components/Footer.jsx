import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100 py-10 mt-0">
      <div className="section-container">
        <div className="grid gap-8 md:grid-cols-4 text-sm">
          <div>
            <h3 className="text-base font-semibold">Peace of God Ministry</h3>
            <p className="mt-3 text-slate-300">
              Equipping the next generation of Christian leaders through discipleship, mentorship, and Kingdom impact.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Navigate</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#about" className="hover:text-white">
                  About the Program
                </a>
              </li>
              <li>
                <a href="#gains" className="hover:text-white">
                  What You Will Gain
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Contact</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>
                <a href="mailto:pogm22@gmail.com" className="hover:text-white">
                  📧 pogm22@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pog_church"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  📸 @pog_church
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Ready to Begin?</h4>
            <p className="mt-3 text-slate-300">Apply to join the next cohort of the Peace Mentorship Program.</p>
            <Link
              href="/apply"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-amber-300"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
          <p>
            © {year} Peace of God Ministry · Peace Mentorship Program
          </p>
        </div>
      </div>
    </footer>
  );
}
