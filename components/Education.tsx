import SectionLabel from "./SectionLabel";

const education = [
  {
    school: "Harvard Business School",
    degree: "Master of Business Administration (M.B.A.)",
    period: "2014 — 2016",
    barColor: "bg-coral",
  },
  {
    school: "Defense Language Institute Foreign Language Center",
    degree: "Bachelor of Arts (B.A.), French Studies",
    period: "2013 — 2014",
    barColor: "bg-lime",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-8 md:py-12 px-6 md:px-12 bg-light">
      <div className="max-w-6xl mx-auto flex gap-6 md:gap-10">
        <SectionLabel label="EDUCATION" color="coral" />

        <div className="flex-1">
          {education.map((edu, i) => (
            <div key={i}>
              <div className={`h-[3px] ${edu.barColor}`} />
              <div className="grid md:grid-cols-[1fr_1.5fr] gap-2 md:gap-8 py-6 md:py-8">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-dark leading-tight">
                  {edu.school}
                </h3>
                <div className="md:pt-1">
                  <p className="text-dark text-sm">{edu.degree}</p>
                  <p className="text-dark/30 text-sm mt-1">{edu.period}</p>
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
