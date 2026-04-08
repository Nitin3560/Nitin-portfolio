import { Footer } from "@/components/footer";
import { ProjectPreview } from "@/components/project-preview";
import { Section } from "@/components/section";
import { SiteHeader } from "@/components/site-header";
import { ExperienceCard } from "@/components/experience-card";
import HeroSection from "@/components/ui/glassmorphism-trust-hero";
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
        <HeroSection />

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
