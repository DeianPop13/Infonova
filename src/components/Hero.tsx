export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-offwhite pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute top-20 -left-32 h-80 w-80 rounded-full bg-dusty-blue/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-light-dusty-blue/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-warm-beige px-4 py-1.5 text-xs font-semibold text-slate-medium mb-8">
          <span className="h-2 w-2 rounded-full bg-dusty-blue animate-pulse" />
          Cloud &middot; Mobile &middot; Consultancy
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-dark">
          Intelligent IT Solutions
          <br />
          <span className="text-dusty-blue">for a Better Tomorrow.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-slate-medium leading-relaxed">
          Welcome to the official page of Infonova Tech SRL. We are dedicated to
          product development and expert consultancy, bridging the gap between
          technology and positive change.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="rounded-lg bg-dusty-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-dusty-blue/25 hover:bg-light-dusty-blue hover:text-slate-dark transition-all"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="rounded-lg border-2 border-dusty-blue px-8 py-3.5 text-sm font-semibold text-dusty-blue hover:bg-dusty-blue hover:text-white transition-all"
          >
            Consult With Us
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-slate-light">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-dusty-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            8+ European Markets
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-dusty-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Cloud-First Approach
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-dusty-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Certified Consultants
          </div>
        </div>
      </div>
    </section>
  );
}
