// lib/experience.ts

export type ExperienceItem = {
  title: string;
  org: string;
  exp: string;              // System / domain context
  timeframe: string;
  location?: string;
  kind: "Software" | "Intern" | "Research" | "Teaching" | "Other";
  summary: string;
  bullets: string[];
  stack?: string[];
  featured?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    title: "Backend Software Developer",
    org: "Werbooz Pvt. Ltd.",
    exp: "Backend services for a B2B SaaS platform (APIs, data models, deployments)",
    timeframe: "Sept 2023 – Oct 2024",
    location: "Indore, India",
    kind: "Software",
    featured: true,
    summary:
      "Built and maintained backend services with a focus on reliability, observability, and safe production deployments.",
    bullets: [
      "Designed and implemented backend APIs end-to-end, including schema design, validation, testing, and deployment to production environments.",
      "Improved backend reliability by adding retry logic and idempotency safeguards to API endpoints, preventing duplicate writes during timeouts and partial failures.",
      "Automated build and deployment workflows using CI/CD pipelines, reducing manual release effort and deployment errors.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
      "Observability",
      "Retries & Idempotency",
    ],
  },

  {
    title: "Software Developer Intern",
    org: "Werbooz Pvt. Ltd.",
    exp: "Backend feature development for production web services",
    timeframe: "Feb 2023 – Sept 2023",
    location: "Indore, India",
    kind: "Intern",
    featured: true,
    summary:
      "Contributed to backend feature development and tooling with an emphasis on code quality, testing, and safe rollouts.",
    bullets: [
      "Implemented backend feature changes with unit tests and validation checks to ensure safe rollbacks during production releases.",
      "Participated in code reviews and PR discussions, addressing feedback related to performance, correctness, and maintainability.",
      "Shipped incremental backend improvements that improved code reliability and reduced release-related issues.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "SQL",
      "API Development",
      "Unit Testing",
      "Git / PRs",
    ],
  },

  {
    title: "Graduate Teaching Assistant",
    org: "University of Texas at Arlington",
    exp: "Instructional support for undergraduate programming courses",
    timeframe: "2025 – Present",
    location: "Arlington, TX",
    kind: "Teaching",
    summary:
      "Supported undergraduate programming courses through instruction, grading, and hands-on debugging guidance.",
    bullets: [
      "Helped students improve code correctness, clarity, and maintainability through targeted feedback and debugging support.",
      "Created review material and resolved recurring conceptual misunderstandings in core programming topics.",
    ],
  },

  {
    title: "Research Assistant (AI / Systems)",
    org: "UTA / Lab",
    exp: "Research on retrieval pipelines, evaluation frameworks, and system failure analysis",
    timeframe: "2024 – Present",
    location: "Arlington, TX",
    kind: "Research",
    summary:
      "Worked on retrieval pipelines, evaluation frameworks, and failure-mode analysis for AI-assisted systems.",
    bullets: [
      "Built evaluation harnesses and compared retrieval and embedding configurations across multiple experiments.",
      "Documented system failure modes and introduced mitigations to improve reliability and evaluation consistency.",
    ],
    stack: ["Python", "Vector Search", "Evaluation"],
  },
];
