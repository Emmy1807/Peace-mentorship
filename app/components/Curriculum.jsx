export default function Curriculum() {
  const months = [
    {
      label: 'Month 1',
      title: 'Identity, Foundations & Vision',
      description: 'Spiritual foundations, discipline, time management, personal story development.',
    },
    {
      label: 'Month 2',
      title: 'Word Mastery & Emotional Intelligence',
      description: 'Bible study skills, emotional maturity, communication & self-awareness.',
    },
    {
      label: 'Month 3',
      title: 'Prayer, Purity & Relationships',
      description: 'Prayer life development, boundaries, character building, workplace excellence.',
    },
    {
      label: 'Month 4',
      title: 'Healing, Wholeness & Career Strategy',
      description: 'Inner healing, emotional wellness, resume & LinkedIn optimization, career mapping.',
    },
    {
      label: 'Month 5',
      title: 'Finances, Wisdom & Ministry Influence',
      description: 'Financial stewardship, leadership development, evangelism, purpose discovery.',
    },
    {
      label: 'Month 6',
      title: 'Mastery, Calling & Execution',
      description: 'Purpose roadmap, interview preparation, Kingdom project completion, commissioning.',
    },
  ];

  return (
    <section id="curriculum" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">6-Month Curriculum Overview</h2>
          <p className="section-subtitle">
            A guided journey that builds month-by-month, helping you grow in spiritual depth, personal maturity, and
            professional excellence.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {months.map((item) => (
            <article
              key={item.label}
              className="card card-3d border-l-4 border-blue-600 px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row gap-4"
            >
              <div className="sm:w-1/4">
                <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.label}
                </p>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
