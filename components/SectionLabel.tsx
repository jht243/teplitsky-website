export default function SectionLabel({
  label,
  color = "coral",
}: {
  label: string;
  color?: "coral" | "lime" | "lavender";
}) {
  const colorMap = {
    coral: "bg-coral",
    lime: "bg-lime",
    lavender: "bg-lavender",
  };

  return (
    <div className="hidden md:flex flex-col items-center self-stretch w-8 shrink-0 -my-8 md:-my-12">
      <div className={`w-2 flex-1 ${colorMap[color]}`} />
      <span
        className="text-[10px] font-bold tracking-[0.3em] text-dark/40 uppercase whitespace-nowrap py-3"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {label}
      </span>
      <div className={`w-2 flex-1 ${colorMap[color]}`} />
    </div>
  );
}
