export default function Contact() {
  return (
    <section id="contact" className="bg-offwhite py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-dusty-blue mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-dark">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-slate-medium">
            Have a project in mind or need expert consultancy? We&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <a
            href="mailto:vioris.ilca@infonovatech.com"
            className="inline-flex items-center gap-3 rounded-xl bg-white border border-light-dusty-blue/30 px-6 py-4 shadow-lg shadow-dusty-blue/5 hover:border-dusty-blue transition-colors"
          >
            <svg className="h-6 w-6 text-dusty-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-slate-dark">
              vioris.ilca@infonovatech.com
            </span>
          </a>

          <a
            href="tel:+40769784841"
            className="inline-flex items-center gap-3 rounded-xl bg-white border border-light-dusty-blue/30 px-6 py-4 shadow-lg shadow-dusty-blue/5 hover:border-dusty-blue transition-colors"
          >
            <svg className="h-6 w-6 text-dusty-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm font-semibold text-slate-dark">
              +40 769 784 841
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
