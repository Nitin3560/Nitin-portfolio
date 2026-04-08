"use client";

import {
  BrainCircuit,
  Database,
  Gauge,
  GitBranch,
  ShieldCheck,
} from "lucide-react";
import { OfferCarousel, type Offer } from "@/components/ui/offer-carousel";

const sampleOffers: Offer[] = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Software architecture sketch on a glass wall",
    tag: "Backend",
    title: "API & Service Design",
    description: "Production-minded backend services with attention to interfaces, correctness, and maintainability.",
    brandLogoIcon: Database,
    brandName: "Systems",
    promoCode: "FastAPI · Node.js",
    href: "/experience",
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Developer working on retrieval and AI tooling",
    tag: "AI",
    title: "RAG & Evaluation",
    description: "Retrieval pipelines, experiments, and measurement loops that make AI features easier to trust.",
    brandLogoIcon: BrainCircuit,
    brandName: "AI Systems",
    promoCode: "RAG · LLM Eval",
    href: "/projects",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Code editor with deployment and observability tooling",
    tag: "Reliability",
    title: "Deployment Workflows",
    description: "Safer releases, clearer telemetry, and delivery practices that reduce surprises in production.",
    brandLogoIcon: GitBranch,
    brandName: "Delivery",
    promoCode: "CI/CD · Releases",
    href: "/experience",
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstract global network visualization",
    tag: "Performance",
    title: "Monitoring & Tuning",
    description: "Instrumentation and optimization work aimed at stable performance under real-world load.",
    brandLogoIcon: Gauge,
    brandName: "Observability",
    promoCode: "Metrics · Tracing",
    href: "/projects",
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Circuit board close-up representing secure infrastructure",
    tag: "Quality",
    title: "Reliable by Design",
    description: "Testing, safeguards, and explicit tradeoffs built in early instead of patched in later.",
    brandLogoIcon: ShieldCheck,
    brandName: "Engineering",
    promoCode: "Quality First",
    href: "/about",
  },
];

export default function OfferCarouselDemo() {
  return (
    <div className="w-full">
      <OfferCarousel offers={sampleOffers} />
    </div>
  );
}
