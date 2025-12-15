export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Peace Mentorship changed my life. I learned how to hear God, manage my emotions, and navigate my career with confidence.',
      name: 'A. Johnson',
      role: 'Program Graduate',
    },
    {
      quote:
        'This program helped me become disciplined, prayerful, and purposeful. I left with clarity and community.',
      name: 'M. Daniels',
      role: 'Young Professional',
    },
    {
      quote:
        'The career + faith combination was powerful. I now understand my assignment in the marketplace.',
      name: 'J. Oke',
      role: 'College Student',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Testimonials</h2>
          <p className="section-subtitle">
            Stories from past participants whose lives, careers, and ministries have been impacted by the Peace
            Mentorship Program.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="card card-3d h-full flex flex-col justify-between p-5 text-sm">
              <p className="text-slate-700 italic">“{t.quote}”</p>
              <div className="mt-4 border-t border-slate-100 pt-3 text-xs">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-slate-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
