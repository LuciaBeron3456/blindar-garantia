type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  as: Tag = "h2",
  className = "",
}: Props) {
  const dark = tone === "dark";
  return (
    <div className={`flex w-full flex-col items-start gap-3 ${className}`}>
      <p
        className={`text-[13px] font-extrabold uppercase leading-[1.21] ${
          dark ? "text-gold" : "text-green"
        }`}
      >
        {eyebrow}
      </p>
      <Tag
        className={`w-full text-[34px] font-normal leading-[1.08] sm:text-[42px] lg:text-[48px] ${
          dark ? "text-white" : "text-text"
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`w-full text-[16px] leading-[1.55] lg:text-[18px] ${
            dark ? "text-mist" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
