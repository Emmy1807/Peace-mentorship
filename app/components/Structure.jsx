export default function Structure() {
  return (
    <section id="structure" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">How the Program Works</h2>
          <p className="section-subtitle">
            Weekly rhythms and monthly touchpoints designed to keep you accountable, encouraged, and growing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="card p-6 bg-blue-50/60 border-blue-100">
            <h3 className="text-base font-semibold text-slate-900">Weekly</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Teaching sessions</li>
              <li>Accountability groups</li>
              <li>Scripture / prayer challenges</li>
            </ul>
          </article>

          <article className="card p-6 bg-purple-50/60 border-purple-100">
            <h3 className="text-base font-semibold text-slate-900">Monthly</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Live workshop</li>
              <li>Mentorship check-in</li>
              <li>Prayer & worship night</li>
              <li>Service / outreach activity</li>
            </ul>
          </article>
        </div>

        <article className="mt-8 card border-l-4 border-amber-400 bg-amber-50/70 p-6">
          <h3 className="text-base font-semibold text-slate-900">Program Requirements</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
            <li>Attend at least 75% of sessions</li>
            <li>Complete light, practical assignments</li>
            <li>Participate in the Kingdom Impact Project</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
