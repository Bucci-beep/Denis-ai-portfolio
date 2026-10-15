export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  status: "Completed" | "In progress" | "Research prototype";
  area: string;
  excerpt: string;
  question: string;
  contribution: string;
  approach: string[];
  evaluation: string[];
  evidence: string[];
  caveats: string[];
  stack: string[];
  github?: string;
  featured?: boolean;
  order: number;
};

export const projects: Project[] = [
  {
    slug: "tazama",
    title: "Tazama AI",
    eyebrow: "Agentic healthcare workflow",
    status: "Research prototype",
    area: "Agentic AI",
    order: 1,
    featured: true,
    excerpt:
      "A human-supervised waiting-room reassessment workflow with LangGraph, MCP, deterministic clinical rules, and auditable review evidence.",
    question:
      "How can an agentic workflow help a nurse take a structured second look without allowing a model to make or approve a clinical decision?",
    contribution:
      "Designed and implemented the full-stack research prototype, including orchestration, typed MCP tools, deterministic scoring, audit storage, API contracts, and the clinician-facing dashboard.",
    approach: [
      "Used LangGraph to coordinate validation, UTC provenance, observation-history comparison, deterministic priority assessment, bounded explanation, and pending review submission.",
      "Separated clinical rules from model behaviour: SATS/TEWS thresholds are versioned protocol data, while the optional local model can only select pre-approved explanation statements.",
      "Implemented a custom FastMCP server plus the official Time MCP server, with correlated SQLite logs for inputs, outputs, errors, timestamps, and workflow run IDs.",
    ],
    evaluation: [
      "Backend and frontend regression suites cover successful, insufficient-evidence, unavailable-tool, idempotency, audit-failure, and process-cleanup paths.",
      "Synthetic cases exercise complete, minimum-only, and abstained outcomes; API responses preserve missing and off-chart evidence rather than filling gaps.",
      "A documented evaluation contains one expected failure for an omitted nurse sign, keeping a known limitation visible rather than treating the suite as clinical validation.",
    ],
    evidence: [
      "Working FastAPI and Next.js implementation with a reproducible local launcher.",
      "Typed MCP tool contracts, append-only review evidence, and queryable tool-call audit records are implemented in the public repository.",
      "The workflow can prepare a pending review but cannot approve it or change a patient queue.",
    ],
    caveats: [
      "Synthetic-data research prototype only; it is not clinically validated or authorised for patient care.",
      "One pending review is supported per observation; review versioning and overdue-reassessment detection are not implemented.",
      "Passing software tests does not establish clinical safety, generalisability, or improved patient outcomes.",
    ],
    stack: ["Python", "LangGraph", "MCP", "FastAPI", "Next.js", "SQLite", "Ollama"],
    github: "https://github.com/Bucci-beep/triageguard-ai",
  },
  {
    slug: "ecg-reasoning",
    title: "Agentic Bio-Signal Analysis",
    eyebrow: "MSc collaborative research",
    status: "Completed",
    area: "Trustworthy ML",
    order: 2,
    featured: true,
    excerpt:
      "A physiological-signal pipeline combining 1D-CNN modelling, uncertainty and OOD controls, explainability, and deterministic verification.",
    question:
      "What reliability evidence is needed when strong headline accuracy may conceal class-imbalance and out-of-distribution failure modes?",
    contribution:
      "Developed multi-format ingestion, signal preprocessing, deterministic reasoning, uncertainty and OOD routing, and verification components within a collaborative MSc project.",
    approach: [
      "Built 1D physiological-signal preprocessing and feature pipelines for neural inference.",
      "Introduced uncertainty estimation and out-of-distribution routing instead of forcing every input through the same prediction path.",
      "Used GradCAM to trace model activations to morphological wave intervals and deterministic rules to check benchmark-derived intervals.",
    ],
    evaluation: [
      "Evaluation covered 18,347 test instances.",
      "A 92.82% headline accuracy was reported alongside macro F1 of 0.455, exposing class-imbalance failure modes and motivating sample weighting.",
      "The architecture was exercised by 341 unit and regression tests; this verifies software behaviour, not clinical validity.",
    ],
    evidence: [
      "The completed MSc project connects model evaluation, error analysis, interpretability, and software verification.",
      "The public repository documents the evolving bio-signal and clinical extraction architecture.",
    ],
    caveats: [
      "This was collaborative research; the contribution described here is limited to Denis's implemented areas.",
      "The reported metrics are project evaluation results, not evidence of clinical deployment or external validation.",
    ],
    stack: ["Python", "PyTorch", "1D-CNN", "GradCAM", "OOD detection", "pytest"],
    github: "https://github.com/Bucci-beep/Agentic-Federated-Learning-for-Bio-Signal-Analysis",
  },
  {
    slug: "investwise",
    title: "InvestWise AI",
    eyebrow: "Governed NLP workflow",
    status: "Research prototype",
    area: "Uncertainty-aware AI",
    order: 3,
    featured: true,
    excerpt:
      "Question-specific text classifiers with conformal prediction, explicit abstention, deterministic suitability logic, and confirmation gates.",
    question:
      "How can a system preserve uncertainty and user intent before natural-language interpretation reaches governed decision logic?",
    contribution:
      "Developed the conversational risk-profile prototype, its question-specific classification pipeline, safety gates, evaluation fixtures, and reproducible local setup.",
    approach: [
      "Separated free-text interpretation from deterministic business validation and suitability logic.",
      "Applied TF-IDF, Logistic Regression, and conformal prediction independently across 15 questions.",
      "Kept clarification, confirmation, and save consent as explicit application gates.",
    ],
    evaluation: [
      "A 204-case evaluation is preserved as a known regression set and is not misrepresented as fresh held-out validation.",
      "Regression tests cover accepted interpretations, ambiguity, abstention, business-rule validation, and save-consent behaviour.",
    ],
    evidence: [
      "The public repository contains a working Streamlit prototype, pinned dependency snapshot, fictional dataset provenance, and evaluation documentation.",
      "Substantial abstention remains visible in the current checkpoint rather than being hidden behind an aggregate score.",
    ],
    caveats: [
      "Research and demonstration prototype only; it is not investment advice and has not established real-customer accuracy.",
      "The reused regression set cannot support a claim of independent generalisation.",
    ],
    stack: ["Python", "scikit-learn", "Conformal prediction", "Streamlit", "pytest"],
    github: "https://github.com/Bucci-beep/investwise-ai",
  },
  {
    slug: "tuberculosis-classification",
    title: "Tuberculosis Image Classification",
    eyebrow: "MSc machine learning project",
    status: "Completed",
    area: "Computer vision",
    order: 4,
    excerpt:
      "An end-to-end comparison from regularised linear baselines to custom CNNs and DenseNet121 across 19,938 image patches.",
    question:
      "When do spatial inductive biases materially improve image classification over flattened-feature baselines?",
    contribution:
      "Engineered the modelling and evaluation pipeline, including PCA baselines, cross-validation, model comparison, error analysis, and formal significance testing.",
    approach: [
      "Compared regularised Logistic Regression, custom CNNs, and transfer learning with DenseNet121.",
      "Used PCA, stratified k-fold cross-validation, and grid search to control the baseline comparison.",
      "Analysed false-positive and false-negative distributions to identify limits of flattened feature representations.",
    ],
    evaluation: [
      "The DenseNet121 test result was 92.48% classification accuracy on the project dataset.",
      "McNemar testing reported a statistically significant difference from baseline models (p < 0.01).",
    ],
    evidence: [
      "The project demonstrates experimental comparison, statistical testing, and failure analysis rather than reporting accuracy alone.",
    ],
    caveats: [
      "This is an academic project result on image patches, not evidence of clinical generalisability or deployment readiness.",
      "A public source repository is not currently linked from this portfolio.",
    ],
    stack: ["Python", "PyTorch", "DenseNet121", "PCA", "Cross-validation", "McNemar test"],
  },
  {
    slug: "imaging-trial-assistant",
    title: "Imaging Trial Assistant",
    eyebrow: "Evidence-grounded RAG",
    status: "Research prototype",
    area: "Biomedical NLP",
    order: 5,
    excerpt:
      "A protocol retrieval and typed API workflow for structured quality-control checks on synthetic imaging reports.",
    question:
      "How can a retrieval system ground a structured quality-control assessment in protocol evidence?",
    contribution:
      "Built the local retrieval pipeline, structured FastAPI interface, and evidence-oriented response contract.",
    approach: [
      "Embedded local protocol text with Ollama and indexed it in Chroma for request-time retrieval.",
      "Used FastAPI and Pydantic to expose structured case inputs and quality-control outputs.",
      "Constrained the prompt to retrieved context instead of presenting the model as an independent authority.",
    ],
    evaluation: [
      "The repository demonstrates the end-to-end retrieval and API path, but does not yet provide a formal model evaluation suite.",
    ],
    evidence: [
      "A public implementation exposes a `/qc` endpoint and documents the retrieval architecture.",
    ],
    caveats: [
      "Not validated for real clinical use.",
      "The current parser has a documented hardening issue when model output contains wrapper text; stronger structured generation and tests remain future work.",
    ],
    stack: ["FastAPI", "Pydantic", "Chroma", "Ollama", "LangChain", "RAG"],
    github: "https://github.com/Bucci-beep/imaging-trial-assistant",
  },
  {
    slug: "phd-opportunity-agent",
    title: "AI PhD Opportunity Agent",
    eyebrow: "Research discovery tooling",
    status: "In progress",
    area: "Agentic systems",
    order: 6,
    excerpt:
      "A provenance-aware opportunity tracker connecting research interests, supervisors, funding sources, and application history.",
    question:
      "How can changing research opportunities be collected without losing source provenance or historical context?",
    contribution:
      "Designed the relational data model and early ingestion structure for opportunities, supervisors, sources, profiles, and applications.",
    approach: [
      "Modelled source records and snapshots explicitly rather than overwriting changing opportunity information.",
      "Separated research-profile data from opportunity and application records.",
    ],
    evaluation: [
      "Schema migrations and seed data support structural checks; discovery and ranking quality have not been evaluated.",
    ],
    evidence: ["The public repository records the evolving data and agent architecture."],
    caveats: [
      "Automated discovery, ranking, and alert quality are still in development.",
      "Project status is presented as in progress, not as a completed research product.",
    ],
    stack: ["Python", "PostgreSQL", "Supabase", "Data provenance"],
    github: "https://github.com/Bucci-beep/ai-phd-opportunity-agent",
  },
  {
    slug: "ml-algorithms",
    title: "ML Algorithms Engineering",
    eyebrow: "Foundations and reproducibility",
    status: "In progress",
    area: "Machine learning",
    order: 7,
    excerpt:
      "Implementations and controlled exercises for studying model assumptions, optimisation behaviour, and evaluation trade-offs.",
    question:
      "What becomes visible about model behaviour when common algorithms are implemented and tested from first principles?",
    contribution:
      "Implemented and documented foundational machine-learning exercises for controlled experimentation.",
    approach: [
      "Built supervised-learning components with Python and NumPy.",
      "Used small, inspectable examples to investigate optimisation and sensitivity to observations.",
    ],
    evaluation: ["Repository exercises provide implementation checks; no benchmark or production claim is made."],
    evidence: ["Public code records the learning and experimentation process."],
    caveats: ["This is a foundations repository, not a deployed system or completed scientific study."],
    stack: ["Python", "NumPy", "Machine learning", "Testing"],
    github: "https://github.com/Bucci-beep/ml-algorithms-engineering",
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
