import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { work } from "@/lib/content";
import { ProjectPreview } from "@/components/project-preview";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700">
          Selected projects presented for fast technical review: what I built, why it mattered,
          and the tradeoffs involved.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {work.map((p) => (
            <ProjectPreview key={p.slug} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
