export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-light">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-coral text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-in-up">
          Artificial Intelligence &bull; Process Automation
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.9] mb-8 text-dark opacity-0 animate-fade-in-up animate-delay-200">
          Jonathan
          <br />
          Teplitsky
        </h1>

        <p className="text-dark text-base md:text-lg max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up animate-delay-400">
          Builder and strategist at the intersection of AI, Web3, and emerging technology.
          Harvard MBA. US Army veteran. Founder.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-600">
          <a
            href="#experience"
            className="px-8 py-3 bg-coral text-white font-bold text-sm uppercase tracking-widest hover:bg-coral/90 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-dark/20 text-dark font-bold text-sm uppercase tracking-widest hover:border-lavender hover:text-lavender transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
