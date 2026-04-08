import Link from "next/link";
import type { WorkProject } from "@/lib/content";

export function ProjectPreview({ project }: { project: WorkProject }) {
  const github = project.links?.find((l) => l.label.toLowerCase() === "github");
  const caseStudy = project.links?.find((l) => l.label.toLowerCase() === "case study");
  const primaryHref = caseStudy?.href ?? `/projects/${project.slug}`;
  const primaryLabel = caseStudy ? "Read Case Study →" : "Details →";
  const isExternalPrimary = Boolean(caseStudy?.href?.startsWith("http") || caseStudy?.href?.startsWith("/portfolio/"));

  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug text-zinc-950">
          {project.title}
        </h3>
        <p className="shrink-0 text-sm text-zinc-500">{project.timeframe}</p>
      </div>

      <p className="mt-2 text-sm text-zinc-700">{project.subtitle}</p>

      <p className="mt-4 text-sm leading-relaxed text-zinc-700">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {(project.stack ?? []).map((t) => (
          <span
            key={t}
            className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        {isExternalPrimary ? (
          <a
            href={primaryHref}
            className="text-sm font-medium text-indigo-700 hover:text-indigo-800"
          >
            {primaryLabel}
          </a>
        ) : (
          <Link
            href={primaryHref}
            className="text-sm font-medium text-indigo-700 hover:text-indigo-800"
          >
            {primaryLabel}
          </Link>
        )}

        {github?.href ? (
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950"
          >
            GitHub →
          </a>
        ) : (
          <span className="text-sm text-zinc-400">GitHub</span>
        )}
      </div>
    </article>
  );
}
