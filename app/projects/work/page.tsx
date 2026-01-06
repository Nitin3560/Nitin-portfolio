import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { work } from "@/lib/content";
import { ProjectPreview } from "@/components/project-preview";

export default function WorkPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-10">
        <h1 className="text-3xl font-semibold md:text-4xl">Work</h1>
        <p className="mt-3 max-w-2xl text-zinc-700">
          Selected engineering work, presented as problems, systems, and outcomes.
          3–5 projects is intentional.
        </p>

        <div className="mt-8 space-y-4">
          {work.map((p) => (
            <ProjectPreview key={p.slug} project={p} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
