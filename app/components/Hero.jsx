import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-gradient text-white section-padding">
      <div className="section-container text-center">
        <p className="badge mb-4 bg-white/10 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
          Peace Mentorship Program
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          Become the Leader God Created You to Be
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-blue-100">
          A 6-Month Faith-Based Mentorship Program for Young Professionals, College &amp; Graduate Students.
        </p>
        <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-blue-100/90">
          Grow spiritually, mature emotionally, excel professionally, and walk boldly in purpose-all within a
          structured mentorship community.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link href="/apply" className="btn-primary text-slate-900 bg-amber-400 hover:bg-amber-300">
            👉 Apply Now
          </Link>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto text-left text-sm text-blue-100/90">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="font-semibold text-amber-200">Young adults in discussion</p>
            <p className="mt-1 text-xs text-blue-100/80">
              Capture real community and authentic conversations around faith and purpose.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="font-semibold text-amber-200">Faith-based mentorship</p>
            <p className="mt-1 text-xs text-blue-100/80">
              Showcase one-on-one and group mentoring moments grounded in Scripture.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="font-semibold text-amber-200">Professional setting</p>
            <p className="mt-1 text-xs text-blue-100/80">
              Blend notebooks, laptops, and Bibles to highlight career and calling together.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="font-semibold text-amber-200">Peace Mentorship visuals</p>
            <p className="mt-1 text-xs text-blue-100/80">
              Include Peace of God Ministry branding, colors, and subtle cross or dove elements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
