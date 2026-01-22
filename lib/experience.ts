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
    title: "Junior Software Developer",
    org: "WERBOOZ Pvt. Ltd.",
    exp: "Backend services, integrations, and testing for production systems (REST/SOAP, bulk-safe operations, DB performance).",
    timeframe: "Sept 2023 – Oct 2024",
    location: "Indore, India",
    kind: "Software",
    featured: true,
    summary:
      "Designed and developed backend services and integrations with a focus on scalability, reliability, and production readiness.",
    bullets: [
      "Designed and developed backend services and integrations using Java and Apex with a focus on scalability and bulk-safe operations.",
      "Built and integrated REST and SOAP APIs to enable reliable data exchange between internal and external systems.",
      "Optimized database access patterns (SOQL/SQL), reducing production query latency and improving system responsiveness.",
      "Authored 500+ automated and manual test cases (JUnit, Postman, Tosca), reducing post-release defects by 30%.",
      "Collaborated with cross-functional teams to translate requirements into system designs, user stories, and production deployments.",
    ],
    stack: [
      "Java",
      "Apex",
      "REST APIs",
      "SOAP APIs",
      "SOQL/SQL",
      "JUnit",
      "Postman",
      "Tosca",
      "Git",
    ],
  },

  {
    title: "Software Developer Intern",
    org: "WERBOOZ Pvt. Ltd.",
    exp: "Backend development + testing for healthcare management systems; bug-fixing and codebase maintenance.",
    timeframe: "Feb 2023 – Sept 2023",
    location: "Indore, India",
    kind: "Intern",
    featured: true,
    summary:
      "Contributed to backend development and testing, improving module efficiency and overall system reliability.",
    bullets: [
      "Contributed to backend development for healthcare management systems, improving module-level efficiency by ~15%.",
      "Identified and resolved 20+ bugs through unit, integration, and system testing, increasing overall system reliability.",
      "Maintained clean, well-documented code and Git workflows, reducing onboarding time for new contributors by 30%.",
    ],
    stack: [
      "Backend Development",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Git",
      "Documentation",
    ],
  },

  {
    title: "Graduate Teaching Assistant — CSE Department",
    org: "The University of Texas at Arlington",
    exp: "Supported programming courses through debugging support, tooling improvements, and grading workflow automation.",
    timeframe: "Aug 2025 – Present",
    location: "Arlington, TX",
    kind: "Teaching",
    featured: true,
    summary:
      "Supported large-scale programming instruction with hands-on debugging guidance and operational improvements to course tooling.",
    bullets: [
      "Supported 100+ students in debugging C/C++ programs, focusing on memory, control flow, and system behavior.",
      "Helped automate grading workflows and restructure course tooling, reducing manual effort and turnaround time.",
      "Improved technical documentation and workflows, strengthening communication between students and faculty.",
    ],
    stack: ["C", "C++", "Debugging", "Course Tooling", "Documentation"],
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
