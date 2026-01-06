import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <h1 className="text-3xl font-semibold md:text-4xl">About</h1>

        <div className="mt-6 space-y-5 text-zinc-800 leading-relaxed">
          <p>
            I’m Nitin Singh Rathore. I build backend and full-stack systems where
            reliability matters: ingestion, search, orchestration, and production-grade
            behavior under real constraints.
          </p>
          <p>
            I care about clarity: small interfaces, explicit tradeoffs, and systems
            that are understandable months later by someone who wasn’t in the room.
          </p>
          <p>
            My work sits around AI-adjacent products too: document pipelines, retrieval,
            evaluation, and making tools stable enough to ship.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
