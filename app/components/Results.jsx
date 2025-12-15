import Link from 'next/link';

export default function Results() {
  const items = [
    'Deep relationship with God and strong spiritual disciplines',
    'Emotional resilience and maturity',
    'Improved leadership and communication skills',
    'Career clarity with actionable next steps',
    'A polished professional and ministry presence',
    'Confidence in your identity and calling',
    'A completed Kingdom or leadership project',
    'Lifelong community of godly peers and mentors',
  ];

  return (
    <section id="results" className="section-padding hero-gradient text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Results You Can Expect</h2>
          <p className="section-subtitle text-blue-100">
            By the end of the Peace Mentorship Program, you will not be the same. Expect tangible growth in every area.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm flex gap-2">
              <span className="mt-0.5 text-emerald-300">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Ready to grow in faith, discipline, excellence, and purpose?
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/apply"
              className="btn-primary bg-amber-400 text-slate-900 hover:bg-amber-300 border border-amber-200"
            >
              Apply Now — Limited Spots
            </Link>
            <p className="text-xs text-blue-100/90 self-center">
              Next Cohort Starts: <span className="font-semibold">[Insert Date]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
