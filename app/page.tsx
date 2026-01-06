import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { work } from "@/lib/content";
import { ProjectPreview } from "@/components/project-preview";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <p className="text-sm text-zinc-600">Backend / Full-stack • AI-adjacent</p>

        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
          I build production systems where reliability and clarity matter.
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-700 md:text-lg">
          Projects, publications, and experience — presented for fast technical review.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-xl bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 shadow-sm"
          >
            View Projects
          </Link>
          <Link
            href="/publications"
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50"
          >
            Publications
          </Link>
        </div>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Selected projects
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl">
                A quick scan of recent work
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-zinc-700 hover:text-zinc-950 md:inline"
            >
              See all →
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {work.slice(0, 2).map((p) => (
              <ProjectPreview key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
