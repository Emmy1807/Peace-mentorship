export default function Gains() {
  const categories = [
    {
      title: 'Spiritually',
      icon: '🙏',
      bg: 'bg-purple-50',
      text: 'text-purple-900',
      bullets: [
        'Stronger prayer life',
        'Bible mastery + deeper revelation',
        'Identity, intimacy & confidence in God',
        'Holiness, purity, and discipline',
      ],
    },
    {
      title: 'Personally',
      icon: '💪',
      bg: 'bg-blue-50',
      text: 'text-blue-900',
      bullets: [
        'Emotional maturity & stability',
        'Discipline, habits & self-leadership',
        'Healthy boundaries & relationships',
        'Mental & emotional health awareness',
      ],
    },
    {
      title: 'Professionally',
      icon: '💼',
      bg: 'bg-emerald-50',
      text: 'text-emerald-900',
      bullets: [
        'Career clarity & strategy',
        'Polished resume & LinkedIn presence',
        'Leadership & communication skills',
        'Academic & workplace excellence',
      ],
    },
    {
      title: 'Purpose & Calling',
      icon: '🎯',
      bg: 'bg-amber-50',
      text: 'text-amber-900',
      bullets: [
        'Discover spiritual gifts & calling',
        'Understand your mountain of influence',
        'Design a Kingdom Impact Project',
        'Create a 3–5 year purpose roadmap',
      ],
    },
  ];

  return (
    <section id="gains" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">What You Will Gain</h2>
          <p className="section-subtitle">
            Grow in four key dimensions: spiritually, personally, professionally, and in your God-given purpose.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((block) => (
            <article key={block.title} className="card card-3d overflow-hidden">
              <header className={`${block.bg} px-6 py-5 flex items-center gap-3`}>
                <span className="text-3xl" aria-hidden="true">
                  {block.icon}
                </span>
                <h3 className={`text-xl font-semibold ${block.text}`}>{block.title}</h3>
              </header>
              <div className="px-6 py-5">
                <ul className="space-y-2 text-sm text-slate-700">
                  {block.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
