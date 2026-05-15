import SectionLabel from "./SectionLabel";

const skills = [
  { name: "Artificial Intelligence", color: "bg-coral text-white" },
  { name: "Web3", color: "bg-lavender text-dark" },
  { name: "Gaming", color: "bg-lime text-dark" },
  { name: "Automation", color: "bg-coral text-white" },
  { name: "Leadership", color: "bg-lime text-dark" },
];

export default function About() {
  return (
    <section id="about" className="py-8 md:py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex gap-6 md:gap-10">
        <SectionLabel label="ABOUT" color="lavender" />

        <div className="flex-1">
          <div className="h-[3px] bg-lavender" />
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8 py-6 md:py-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-dark leading-tight">
                About Me
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4 text-dark text-sm leading-relaxed">
              <p>
                Top performer in leadership and management roles, excelling in
                high-pressure environments. I&apos;ve worked extensively in Web3,
                advising organizations like Bowlero, NBCU, and the Jane Goodall
                Institute.
              </p>
              <p>
                Over the last four years, I&apos;ve built and launched 17 games,
                primarily on mobile and Web, with recent experience on Roblox,
                Telegram, and mobile platforms.
              </p>
              <p>
                I&apos;m passionate about AI, using my expertise to create impactful
                products in the wellness and personal relationship space, focusing
                on emotional well-being and meaningful human connections through
                technology.
              </p>
            </div>
          </div>
          <div className="h-[3px] bg-dark/10" />
        </div>
      </div>
    </section>
  );
}
