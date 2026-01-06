// app/experience/page.tsx

import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { experience } from "@/lib/experience";
import { ExperienceCard } from "@/components/experience-card";

export default function ExperiencePage() {
  const featured = experience.filter((e) => e.featured);
  const rest = experience.filter((e) => !e.featured);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          Experience
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700">
          Professional experience presented for fast review: scope, responsibilities, and technical decisions.
        </p>

        <section className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Featured
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {featured.map((item) => (
              <ExperienceCard
                key={`${item.title}-${item.org}`}
                item={item}
              />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Additional
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {rest.map((item) => (
              <ExperienceCard
                key={`${item.title}-${item.org}`}
                item={item}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
