export default function About() {
  return (
    <section id="about" className="bg-warm-beige py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-dusty-blue mb-3">
              About & Vision
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-dark leading-tight">
              Innovation Meets
              <br />
              <span className="text-dusty-blue">Technology.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-medium leading-relaxed">
              Our vision is to contribute to the growth and development of
              society by offering intelligent solutions that enhance the quality
              of life. Join us on this journey where technology meets innovation
              to create positive change.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <div className="text-3xl font-bold text-dusty-blue">8+</div>
                <div className="text-sm text-slate-light">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dusty-blue">100%</div>
                <div className="text-sm text-slate-light">Cloud-Native</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dusty-blue">B2B</div>
                <div className="text-sm text-slate-light">Focused Partner</div>
              </div>
            </div>
          </div>

          {/* Right: decorative visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-80 md:h-96 md:w-96">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dusty-blue/20" />
              <div className="absolute inset-6 rounded-full border-2 border-dusty-blue/30" />
              <div className="absolute inset-12 rounded-full border-2 border-dusty-blue/40" />
              <div className="absolute inset-18 rounded-full bg-dusty-blue/10 border-2 border-dusty-blue/50" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 rounded-2xl bg-dusty-blue flex items-center justify-center shadow-xl shadow-dusty-blue/25">
                  <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute top-4 right-12 h-3 w-3 rounded-full bg-dusty-blue animate-pulse" />
              <div className="absolute bottom-12 left-4 h-2 w-2 rounded-full bg-light-dusty-blue animate-pulse delay-500" />
              <div className="absolute top-1/3 left-2 h-2.5 w-2.5 rounded-full bg-dusty-blue/60 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
