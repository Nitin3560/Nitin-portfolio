import Link from "next/link";

export function Section({
  eyebrow,
  title,
  children,
  cta,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-900 md:text-2xl">
            {title}
          </h2>
        </div>
        {cta && (
          <Link
            href={cta.href}
            className="hidden text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 md:inline"
          >
            {cta.label}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
