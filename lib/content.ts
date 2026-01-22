export type WorkProject = {
    slug: string;
    title: string;
    timeframe: string;
    subtitle: string;
    summary: string;
    highlights: string[];
    stack: string[];
    links?: { label: string; href: string }[];
    isCaseStudy?: boolean; 
  };
  
  export const work: WorkProject[] = [
    {
      slug: "traceback-ai-rca",
      title: "Traceback AI — Automated Root-Cause Analysis for Distributed Systems",
      timeframe: "2025 – Present",
      subtitle:
        "Correlates logs, metrics, traces, and deployment events to rank likely incident causes with an evidence trail.",
      summary:
        "Architected an automated RCA system for distributed microservices by building an ingest + normalization pipeline, modeling service interactions as a temporal dependency graph, and applying causal scoring over time-ordered events. Used an LLM only for human-readable explanations while keeping inference deterministic and debuggable.",
      highlights: [
        "Architected and implemented an automated RCA system by correlating logs, metrics, traces, and deployment events across microservices.",
        "Designed a temporal dependency graph to model service interactions and rank likely failure causes with an evidence trail.",
        "Implemented an OpenTelemetry-compatible ingest pipeline and event normalization layer using Python and FastAPI.",
        "Applied causal scoring over time-ordered events, reducing incident triage time by ~50% in simulated failure scenarios.",
        "Evaluated on simulated microservices (5–10 services, thousands of events per incident) using injected failures.",
      ],
      stack: ["Python", "FastAPI", "OpenTelemetry", "Distributed Systems", "Observability"],
      links: [{ label: "GitHub", href: "https://github.com/Nitin3560" }],
      isCaseStudy: false,
    },
    {
      slug: "job-application-helper",
      title: "Job Application Helper — Backend API for Resume & Application Automation",
      timeframe: "2025",
      subtitle:
        "FastAPI service that turns job descriptions into structured, recruiter-ready application content.",
      summary:
        "Built a FastAPI backend to analyze job descriptions and return structured application outputs through clean REST endpoints. Optimized the workflow for fast iteration during active job searches and designed the architecture to be extensible for resume parsing, ATS optimization, and rule-based validation.",
      highlights: [
        "Built a FastAPI-based backend service to analyze job descriptions and generate structured, recruiter-ready application content.",
        "Designed clean REST endpoints for submitting job data and returning concise, deterministic AI responses.",
        "Optimized for fast iteration workflows, supporting repeated executions during active job searches.",
        "Architected the system to be easily extensible for resume parsing, ATS optimization, and rule-based validation.",
      ],
      stack: ["Python", "FastAPI", "REST APIs", "Backend Systems"],
      links: [{ label: "GitHub", href: "https://github.com/Nitin3560" }],
      isCaseStudy: false,
    },
    {
      slug: "telecom-rag-thesis",
      title:
        "Retrieval-Augmented Generation for Telecom Optimization (Research Thesis)",
      timeframe: "2024 – Present",
      subtitle: "RAG system + evaluation framework for domain-adaptive telecom QA.",
      summary:
        "Built a telecom-focused RAG pipeline around LLaMA and retrieval tuning, then validated improvements using a structured evaluation framework and dashboards for quality monitoring.",
      highlights: [
        "Fine-tuned LLaMA models on telecom datasets using domain-specific embeddings and custom chunking strategies.",
        "Designed a JSON-based scoring framework and LLM-as-a-Judge evaluation to compare retrieval and fine-tuning approaches.",
        "Ran ablation studies across embedding models and quantified retrieval improvement (+23%).",
        "Built an evaluation dashboard (Next.js + Python APIs) to track confidence, hallucination rate, and KPI accuracy.",
      ],
      stack: ["Python", "LLaMA", "LangChain", "FAISS", "Next.js", "AWS"],
      links: [
        { label: "GitHub", href: "https://github.com/Nitin3560" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/nitin-singh-rathore" },
      ],
      isCaseStudy: false,
    },
    {
      slug: "cloud-native-ai-inference",
      title: "Cloud-Native Microservices Pipeline for AI Inference",
      timeframe: "2024",
      subtitle:
        "Deployed LLaMA inference as scalable microservices with CI/CD and observability.",
      summary:
        "Containerized AI inference services and deployed them with autoscaling, blue/green releases, and production-grade monitoring and security controls.",
      highlights: [
        "Containerized services with Docker and deployed via AWS ECS and GCP Cloud Run with autoscaling and load balancing.",
        "Built CI/CD pipelines (AWS CodePipeline + GCP Cloud Build) to automate zero-downtime blue/green deployments.",
        "Hardened infra with IAM roles, S3 encryption, VPC flow logs, and CloudWatch monitoring.",
        "Reduced latency by 32% and improved reliability using caching and resource tuning.",
      ],
      stack: ["Docker", "AWS ECS", "AWS CodePipeline", "CloudWatch", "GCP Cloud Run", "CI/CD"],
      links: [{ label: "GitHub", href: "https://github.com/Nitin3560" }],
      isCaseStudy: false,
    },
    {
      slug: "hand-gesture-recognition",
      title: "Hand Gesture Recognition System",
      timeframe: "Jan 2023 – Mar 2023",
      subtitle: "Real-time gesture classification using live video landmarks.",
      summary:
        "Built a real-time computer vision pipeline that extracts hand landmarks from webcam streams and classifies gestures for human-computer interaction use cases.",
      highlights: [
        "Extracted hand landmarks from live video streams and engineered features for classification.",
        "Trained and evaluated models to recognize multiple gestures reliably in real time.",
        "Built an end-to-end pipeline from camera capture → feature extraction → inference.",
      ],
      stack: ["Python", "OpenCV", "MediaPipe", "NumPy", "scikit-learn"],
      isCaseStudy: false,
    },
    {
      slug: "stock-price-prediction",
      title: "Stock Market Price Prediction",
      timeframe: "Aug 2022 – Dec 2022",
      subtitle: "Compared classical ML and sequence models for time-series prediction.",
      summary:
        "Developed a stock price prediction workflow using historical market data, feature engineering, and multiple model baselines to compare trend prediction performance.",
      highlights: [
        "Performed data cleaning, feature engineering, and normalization to handle missing values and market noise.",
        "Implemented and compared multiple models (Linear Regression, Random Forest, LSTM).",
        "Visualized results and model behavior to communicate findings clearly.",
      ],
      stack: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
      isCaseStudy: false,
    },
  ];
  
  export function getWorkBySlug(slug: string) {
    return work.find((p) => p.slug === slug);
  }
  