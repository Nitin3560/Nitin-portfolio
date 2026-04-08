import Link from "next/link";
import { Footer } from "@/components/footer";
import { ProjectPreview } from "@/components/project-preview";
import { Section } from "@/components/section";
import { SiteHeader } from "@/components/site-header";
import { ExperienceCard } from "@/components/experience-card";
import OfferCarouselDemo from "@/components/ui/demo";
import { work } from "@/lib/content";
import { experience } from "@/lib/experience";

const featuredProjects = work.slice(0, 2);
const featuredExperience = experience.filter((item) => item.featured).slice(0, 2);

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <section className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/80 px-8 py-14 shadow-[0_20px_80px_rgba(255,255,255,0.35)] backdrop-blur md:px-12 md:py-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Backend Engineer · AI Systems
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
              Building reliable software where ambiguity and failure both matter.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700 md:text-lg">
              I work across backend platforms, retrieval systems, and production workflows with
              a bias toward clear interfaces, stable behavior, and decisions that hold up under pressure.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              View Projects
            </Link>
            <Link
              href="/experience"
              className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              See Experience
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-transparent px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:text-zinc-950"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-12 grid gap-4 border-t border-zinc-200 pt-8 md:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-zinc-950">2+</p>
              <p className="mt-1 text-sm text-zinc-600">Years building production software and backend workflows</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-950">Research + Ship</p>
              <p className="mt-1 text-sm text-zinc-600">Comfortable moving between experimentation, evaluation, and delivery</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-950">Clarity first</p>
              <p className="mt-1 text-sm text-zinc-600">I favor systems that stay understandable long after launch</p>
            </div>
          </div>
        </section>

        <Section
          eyebrow="Featured Work"
          title="Selected projects for fast technical review"
          cta={{ label: "All projects", href: "/projects" }}
        >
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectPreview key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Experience"
          title="Recent roles focused on backend reliability and delivery"
          cta={{ label: "Full experience", href: "/experience" }}
        >
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featuredExperience.map((item) => (
              <ExperienceCard key={`${item.title}-${item.org}`} item={item} />
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Skills"
          title="Core strengths presented as a quick visual scan"
        >
          <div className="mt-6">
            <OfferCarouselDemo />
          </div>
        </Section>

        <Section
          eyebrow="About"
          title="How I like to work"
          cta={{ label: "Read more", href: "/about" }}
        >
          <div className="mt-6 grid gap-6 md:grid-cols-[1.35fr_.65fr]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-zinc-700">
                I care about systems that are dependable in real use, not just persuasive in demos.
                That usually means sharper interfaces, explicit tradeoffs, and enough observability to
                understand what the software is doing when conditions get messy.
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-700">
                My recent work spans backend APIs, deployment workflows, evaluation-heavy AI systems,
                and making products easier to reason about for the next person who inherits them.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Focus Areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Backend Systems", "AI Tooling", "RAG", "Reliability", "CI/CD", "Evaluation"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
