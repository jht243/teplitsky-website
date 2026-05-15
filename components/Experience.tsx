import SectionLabel from "./SectionLabel";

const experiences = [
  {
    title: "Founder & CEO",
    company: "Layer 3 Labs",
    period: "2020 — 2025",
    description:
      "Led a team of 15 developers, driving technical strategy, overseeing sprint planning, managing hiring processes, and fostering employee development across Web3 and gaming products.",
    barColor: "bg-lime",
  },
  {
    title: "AI & Automation Lead",
    company: "Dapper Labs",
    period: "2025 — 2026",
    description:
      "Led company-wide AI and automation initiatives to scale operations, improve efficiency, and enable new creative capabilities for officially licensed digital collectibles.",
    barColor: "bg-coral",
  },
  {
    title: "Director of Community Growth",
    company: "Horizen Labs",
    period: "2018 — 2024",
    description:
      "Led the development and execution of marketing strategy, driving significant user growth and implementing innovative multi-channel marketing campaigns.",
    barColor: "bg-lavender",
  },
  {
    title: "Captain (35D — Intelligence)",
    company: "US Army",
    period: "2009 — 2020",
    description:
      "Provided expertise in political, economic, and threat matters, identifying critical, time-sensitive intelligence information from public and proprietary sources.",
    barColor: "bg-coral",
  },
  {
    title: "Senior Marketing Manager",
    company: "Amazon",
    period: "2016 — 2018",
    description:
      "Led a marketing team overseeing the growth of a $200M+ Canadian consumer electronics business, managing e-mail marketing, social media, SEO, and paid acquisition.",
    barColor: "bg-lime",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-8 md:py-12 px-6 md:px-12 bg-light">
      <div className="max-w-6xl mx-auto flex gap-6 md:gap-10">
        <SectionLabel label="EXPERIENCE" color="lime" />

        <div className="flex-1">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className={`h-[3px] ${exp.barColor}`} />
              <div className="grid md:grid-cols-[1fr_1.5fr] gap-2 md:gap-8 py-6 md:py-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-dark leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-dark/40 mt-1">
                    {exp.company} &middot; {exp.period}
                  </p>
                </div>
                <p className="text-dark text-sm leading-relaxed md:pt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
          <div className="h-[3px] bg-dark/10" />
        </div>
      </div>
    </section>
  );
}
