const markets = [
  { country: "Romania", flag: "🇷🇴", status: "HQ" },
  { country: "Sweden", flag: "🇸🇪", status: "Active" },
  { country: "United Kingdom", flag: "🇬🇧", status: "Active" },
  { country: "Poland", flag: "🇵🇱", status: "Active" },
  { country: "Slovakia", flag: "🇸🇰", status: "Active" },
  { country: "Macedonia", flag: "🇲🇰", status: "Active" },
  { country: "Ukraine", flag: "🇺🇦", status: "Active" },
  { country: "Bulgaria", flag: "🇧🇬", status: "Active" },
];

export default function GlobalReach() {
  return (
    <section id="global-reach" className="bg-warm-beige py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-dusty-blue mb-3">
            Our Presence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-dark">
            Trusted Across Borders
          </h2>
          <p className="mt-4 text-lg text-slate-medium">
            We are proud to deliver tailored solutions to a growing client base
            across Europe.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {markets.map((m) => (
            <div
              key={m.country}
              className="group relative rounded-2xl bg-white/70 backdrop-blur-sm border border-light-dusty-blue/30 p-6 text-center hover:bg-white hover:shadow-lg hover:shadow-dusty-blue/10 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{m.flag}</div>
              <h3 className="font-bold text-slate-dark text-sm md:text-base">
                {m.country}
              </h3>
              <span
                className={`mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${
                  m.status === "HQ"
                    ? "bg-dusty-blue text-white"
                    : "bg-dusty-blue/10 text-dusty-blue"
                }`}
              >
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
