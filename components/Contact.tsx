export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-12 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-coral mb-4">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6 text-dark">
          Let&apos;s Build
          <br />
          <span className="text-lavender">Something Great</span>
        </h2>
        <p className="text-dark text-base md:text-lg max-w-lg mx-auto mb-10">
          Interested in collaborating on AI, Web3, gaming, or emerging technology?
          I&apos;d love to connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://www.linkedin.com/in/jonathanteplitsky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-dark text-light font-bold text-sm uppercase tracking-widest hover:bg-dark/90 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="border-t border-dark/10 pt-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark/30 text-sm font-bold uppercase tracking-widest">
            Jonathan Teplitsky
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/dapper-labs-class-action"
              className="text-dark/30 text-xs hover:text-dark/60 transition-colors"
            >
              Dapper Labs Class Action 2026
            </a>
            <p className="text-dark/20 text-xs">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
