export default function About() {
  const pillars = [
    'Spiritual Growth',
    'Personal Development',
    'Career & Leadership Excellence',
    'Purpose & Kingdom Impact',
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading text-slate-900">About the Program</h2>
          <p className="section-subtitle">
            The Peace Mentorship Program is a 6-month, holistic discipleship and leadership journey that equips young
            believers to grow in faith, develop emotional and personal maturity, cultivate excellence in career and
            academics, and discover their God-ordained purpose.
          </p>
        </div>

        <div className="mt-10 card p-8 md:p-10">
          <p className="text-base md:text-lg text-slate-700">
            Built on four pillars, the program provides the structure, mentorship, and community needed for real
            transformation:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar} className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                  <span className="text-blue-700 text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{pillar}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
