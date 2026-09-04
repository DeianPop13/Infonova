export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-dusty-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">IN</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Infonova <span className="text-dusty-blue">Tech</span> SRL
              </span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed max-w-sm">
              IT Services and IT Consulting. Dedicated to product development,
              business consultancy, and innovative cloud-based solutions.
            </p>
            <div className="mt-4 text-sm text-slate-light">
              <p>Strada Moților, Timișoara</p>
              <p>Timiș 300200, Romania</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-dusty-blue mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-light">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#global-reach" className="hover:text-white transition-colors">
                  Global Reach
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-light">
          <p>&copy; {new Date().getFullYear()} Infonova Tech SRL. All rights reserved.</p>
          <p>IT Services and IT Consulting &middot; Timișoara, Romania</p>
        </div>
      </div>
    </footer>
  );
}
