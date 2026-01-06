import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { work } from "@/lib/content";

export default function CaseStudiesPage() {
  const studies = work.filter((p) => p.isCaseStudy);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-10">
        <h1 className="text-3xl font-semibold md:text-4xl">Case Studies</h1>
        <p className="mt-3 max-w-2xl text-zinc-700">
          Scannable deep dives focused on constraints, tradeoffs, and outcomes.
        </p>

        

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {studies.map((p) => (
            <Link
              key={p.slug}
              href={`/case-studies/${p.slug}`}
              className="rounded-2xl border border-zinc-200 p-5 hover:bg-zinc-50"
            >
              <p className="text-sm font-medium text-zinc-900">{p.name}</p>
              <p className="mt-2 text-sm text-zinc-600">{p.oneLiner}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-medium text-zinc-500">
                Read case study →
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
