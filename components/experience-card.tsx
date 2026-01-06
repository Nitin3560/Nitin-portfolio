import type { ExperienceItem } from "@/lib/experience";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold leading-snug text-zinc-950">
            {item.title}
          </h3>

          {/* Company + Location (same line) */}
          <p className="mt-1 text-sm text-zinc-700">
            {item.org}
            {item.location ? (
              <span className="text-zinc-400"> · {item.location}</span>
            ) : null}
          </p>

          {/* Scope / Context */}
          {item.exp ? (
            <p className="mt-3 text-sm italic text-zinc-500">{item.exp}</p>
          ) : null}
        </div>

        <p className="shrink-0 text-sm text-zinc-500">{item.timeframe}</p>
      </div>

      {/* Summary */}
      <p className="mt-4 text-sm leading-relaxed text-zinc-700">
        {item.summary}
      </p>

      {/* Bullets */}
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {/* Stack */}
      {item.stack?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}