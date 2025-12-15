export default function WhoFor() {
  const profiles = [
    'College students',
    'Graduate & professional students',
    'Young professionals (18-35)',
    'Aspiring Christian leaders',
    'Young ministers',
    'Anyone hungry for spiritual & personal growth',
  ];

  return (
    <section id="who-for" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Who This Program Is For</h2>
          <p className="section-subtitle">
            Perfect for those seeking clarity, direction, maturity, excellence, and purpose in every area of life.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {profiles.map((profile, index) => (
            <div
              key={profile}
              className="flex items-center rounded-xl border border-blue-50 bg-blue-50/60 px-4 py-3 text-sm sm:text-base"
            >
              <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                {index + 1}
              </div>
              <span className="text-slate-900">{profile}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
