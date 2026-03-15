export default function Hero() {
  return (
    <section
      id="home"
      className="section-offset relative min-h-[85vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
        alt="Construction project"
        className="absolute inset-0 w-full h-full object-cover animate-zoom-soft"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full">
        <div className="max-w-3xl text-white text-center md:text-left">
          <p className="inline-block bg-white/10 border border-white/20 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide animate-slide-left">
            Professional Construction Solutions
          </p>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-up">
            Building Dreams
            <span className="text-secondary"> Into Reality</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 leading-7 sm:leading-8 animate-fade-up">
            Kobac Construction delivers modern, reliable, and high-quality
            construction services for villas, apartments, offices, and large-scale projects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold shadow-lg hover:opacity-90 transition text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}