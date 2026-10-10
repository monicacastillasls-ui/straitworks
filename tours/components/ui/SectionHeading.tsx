import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight md:text-5xl ${
          tone === "dark" ? "text-sand-50" : ""
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base md:text-lg ${tone === "dark" ? "text-sand-200" : "text-stone-500"}`}>
          {body}
        </p>
      )}
    </Reveal>
  );
}
