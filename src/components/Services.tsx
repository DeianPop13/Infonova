const services = [
  {
    title: "Cloud & Mobile Solutions",
    description:
      "Specializing in scalable CLOUD-based architectures coupled with seamless mobile applications.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Product Development",
    description:
      "Building innovative, in-house projects tailored for the modern IT landscape.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "B2B Consultancy",
    description:
      "Working closely with partner companies, tailoring our technical solutions to meet their specific business needs.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-dusty-blue mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-dark">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-medium">
            From cloud infrastructure to strategic consultancy, we deliver
            end-to-end solutions that drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl bg-white border border-light-dusty-blue/30 p-8 hover:shadow-xl hover:shadow-dusty-blue/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-dusty-blue/10 text-dusty-blue group-hover:bg-dusty-blue group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-dark mb-3">
                {s.title}
              </h3>
              <p className="text-slate-medium leading-relaxed">
                {s.description}
              </p>

              {/* Arrow link */}
              <div className="mt-6 flex items-center text-sm font-semibold text-dusty-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
