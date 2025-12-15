export default function Features() {
  const features = [
    'Live Monthly Workshops',
    'Weekly Teaching Sessions',
    'One-on-One Mentorship',
    'Accountability Groups',
    'Prayer Nights & Devotion Challenges',
    'Career Development Training',
    'Purpose Discovery Sessions',
    'Kingdom Impact Project',
    'Graduation Certificate',
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Program Features</h2>
          <p className="section-subtitle">
            A structured, high-touch mentorship journey that blends discipleship, leadership, and career development.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-blue-50 bg-blue-50/70 px-4 py-3 text-sm"
            >
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-blue-700 text-xs font-bold">
                ✓
              </span>
              <p className="text-slate-900">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-xl mx-auto text-center text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Program Cost:</span> This cohort of the Peace Mentorship
            Program is currently offered <span className="font-semibold text-emerald-700">free of charge</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
