import Image from "next/image";
import LogoTitle from "./LogoTitle";
import SectionLabel from "./SectionLabel";

const experiences = [
  {
    title: "AI & Automation Lead",
    company: "Dapper Labs",
    period: "2025 — 2026",
    description:
      "Led company-wide AI and automation initiatives to scale operations, improve efficiency, and enable new creative capabilities for officially licensed digital collectibles.",
    barColor: "bg-coral",
    logo: "/images/logos/dapper-labs.svg",
  },
  {
    title: "Founder & CEO",
    company: "Layer 3 Labs",
    period: "2020 — 2025",
    description:
      "Led a team of 15 developers, driving technical strategy, overseeing sprint planning, managing hiring processes, and fostering employee development across Web3 and gaming products.",
    barColor: "bg-lime",
    logo: "/images/layer3labs.png",
  },
  {
    title: "Director of Community Growth",
    company: "Horizen Labs",
    period: "2018 — 2024",
    description:
      "Led the development and execution of marketing strategy, driving significant user growth and implementing innovative multi-channel marketing campaigns.",
    barColor: "bg-lavender",
    logo: "/images/logos/horizen-labs.svg",
  },
  {
    title: "Senior Marketing Manager",
    company: "Amazon",
    period: "2016 — 2018",
    description:
      "Managed a three-person marketing team growing a $200M+ Canadian consumer electronics business, leading email, social, on-site merchandising, SEO, and paid search programs.",
    barColor: "bg-lime",
    logo: "/images/logos/amazon.svg",
  },
  {
    title: "Product Manager",
    company: "Uber",
    period: "2015",
    description:
      "Managed the operational relaunch of UberFamily, using pricing analysis, SQL rider data, A/B incentive testing, and partner operations to improve driver utilization and passenger trips.",
    barColor: "bg-coral",
    logo: "/images/logos/uber.svg",
  },
  {
    title: "Captain (35D — Intelligence)",
    company: "US Army",
    period: "2009 — 2020",
    description:
      "Provided expertise in political, economic, and threat matters, identifying critical, time-sensitive intelligence information from public and proprietary sources.",
    barColor: "bg-coral",
    logo: "/images/logos/us-army.svg",
    media: [
      {
        src: "/images/army-uganda-course.jpg",
        alt: "Jonathan Teplitsky speaking at a military decision-making process and information operations course graduation in Jinja, Uganda",
        caption: "Course to better Uganda People's Defense Force",
      },
    ],
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
                  <LogoTitle
                    logoAlt={`${exp.company} logo`}
                    logoSrc={exp.logo}
                    title={exp.title}
                    meta={
                      <>
                        {exp.company} &middot; {exp.period}
                      </>
                    }
                  />
                </div>
                <div className="md:pt-1">
                  <p className="text-dark text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.media && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {exp.media.map((item) => (
                        <figure
                          key={item.src}
                          className="overflow-hidden border border-dark/10 bg-white"
                        >
                          <div className="aspect-[3/2] overflow-hidden bg-dark/5">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              width={900}
                              height={600}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <figcaption className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-dark/45">
                            {item.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="h-[3px] bg-dark/10" />
        </div>
      </div>
    </section>
  );
}
