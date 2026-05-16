import Image from "next/image";
import LogoTitle from "./LogoTitle";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "Goblintown: Rise of BiG iNC",
    description:
      "A mobile idle game launched in January 2025, developed from concept through detailed design, prototyping mechanics, art direction, and managed paid ad spend to optimize retention and monetization.",
    period: "2023 — 2025",
    tags: ["Game Design", "Mobile"],
    barColor: "bg-lavender",
    link: "https://play.google.com/store/apps/details?id=com.OdysseyGaming.GoblinTown&hl=en",
    image: "/images/goblintown-mobile.webp",
    logo: "/images/goblintown-icon.webp",
    logoFit: "cover",
  },
  {
    title: "Escape Goblintown",
    description:
      "An asymmetric horror game on Roblox where humans escape a goblin-infested city. Built from initial concept through core game loops, artwork, level design, and sound, with a 4-month post-launch update cycle.",
    period: "2023 — 2024",
    tags: ["Game Design", "Roblox"],
    barColor: "bg-coral",
    link: "https://www.roblox.com/games/18100828076/Escape-Goblintown",
    image: "/images/escape-goblintown.webp",
    logo: "/images/logos/roblox.svg",
  },
  {
    title: "STYR Trade",
    description:
      "A digital sneaker marketplace where users can buy, sell, and trade sneakers like stocks. Invest in vaulted sneaker inventory, eliminating logistics hassles.",
    period: "2022 — 2024",
    tags: ["Software Development", "Web3"],
    barColor: "bg-lime",
    link: "https://www.instagram.com/styrtrade/",
    image: "/images/styr-trade.webp",
    logo: "/images/styr-trade.webp",
    logoFit: "cover",
  },
  {
    title: "Layer III Platform",
    description:
      "Web3 marketplace infrastructure enabling brands to deploy, manage, and customize digital collectible marketplaces with robust backend operations.",
    period: "2020 — 2025",
    tags: ["Web3", "Enterprise"],
    barColor: "bg-coral",
    link: "https://www.layer3labs.io",
    image: "/images/layer3labs.png",
    logo: "/images/layer3labs.png",
  },
  {
    title: "Bowlero LBC Awards",
    description:
      "A blockchain-powered digital awards program for the PBA's League Bowler Certification initiative, recognizing achievements through digital collectibles with a marketplace for sharing awards.",
    period: "2021 — 2023",
    tags: ["Web3", "Blockchain"],
    barColor: "bg-lavender",
    link: null,
    image: "/images/bowlero.jpg",
    logo: "/images/logos/bowlero.svg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-8 md:py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex gap-6 md:gap-10">
        <SectionLabel label="PROJECTS" color="coral" />

        <div className="flex-1">
          {projects.map((project, i) => (
            <div key={i}>
              <div className={`h-[3px] ${project.barColor}`} />
              <div className="grid md:grid-cols-[1fr_1.5fr] gap-2 md:gap-8 py-6 md:py-8">
                <div>
                  <LogoTitle
                    logoAlt={`${project.title} logo`}
                    logoFit={project.logoFit}
                    logoSrc={project.logo}
                    meta={project.period}
                    title={
                      project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-coral transition-colors"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )
                    }
                  />
                  <div className="ml-[60px] md:ml-16 flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-dark/5 text-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:pt-1">
                  <p className="text-dark text-sm leading-relaxed">
                    {project.description}
                  </p>
                  {project.image && (
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4 max-w-xs h-48 overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={640}
                        height={384}
                        unoptimized
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </a>
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
