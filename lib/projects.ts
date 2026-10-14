export type Project = {
  slug: string; title: string; eyebrow: string; status: "Completed" | "In progress" | "Research prototype";
  area: string; excerpt: string; question: string; approach: string[]; evidence: string[];
  caveats: string[]; stack: string[]; github?: string; featured?: boolean; order: number;
};
export const projects: Project[] = [
  {
    slug: "ecg-reasoning", title: "Trustworthy ECG Reasoning Pipeline", eyebrow: "MSc group research", status: "Completed",
    area: "Healthcare AI", order: 1, featured: true,
    excerpt: "Signal preprocessing, model inference evidence, suitability checks and clinical reasoning for ECG analysis.",
    question: "How can model predictions be presented with the evidence and limitations required for responsible interpretation?",
    approach: ["Built and evaluated ECG preprocessing and evidence-aware reasoning components within a collaborative research system.", "Integrated checks for signal suitability and interpretation boundaries into the analysis workflow.", "Connected structured inference evidence with report generation while keeping the model's limitations explicit."],
    evidence: ["MSc research work completed and formally presented as a group project.", "Engineering evidence includes automated tests and analyses on ECG beat classification."],
    caveats: ["This is a research prototype, not a clinically validated diagnostic device.", "Group contributions are separated: Denis focused on ECG preprocessing and reasoning; other team members worked on federated learning, dashboard, and orchestration."],
    stack: ["Python", "PyTorch", "ECG", "FastAPI", "Explainable AI", "Test-driven development"],
    github: "https://github.com/Bucci-beep/Agentic-Federated-Learning-for-Bio-Signal-Analysis"
  },
  {
    slug: "investwise", title: "InvestWise AI", eyebrow: "Hackathon to engineering project", status: "In progress", area: "Governed AI", order: 2, featured: true,
    excerpt: "A bounded natural-language interpretation layer connected to deterministic financial suitability logic.",
    question: "How can natural-language uncertainty be managed before a system makes a governed decision?",
    approach: ["Separated free-text interpretation from deterministic decision logic.", "Prototyped TF–IDF and logistic regression classification with conformal prediction and explicit abstention paths.", "Used fixtures and tests to distinguish ambiguous meaning from model uncertainty."],
    evidence: ["Developed following a UKFinnovator Bristol hackathon project that received an honourable mention.", "Repository contains the evolving implementation and testing approach."],
    caveats: ["Prototype for research and demonstration, not regulated investment advice.", "Ongoing NLP improvements must not be described as production-validated."],
    stack: ["Python", "scikit-learn", "Conformal prediction", "Streamlit", "Testing"],
    github: "https://github.com/Bucci-beep/investwise-ai"
  },
  {
    slug: "imaging-trial-assistant", title: "Imaging Trial Assistant", eyebrow: "Evidence-grounded healthcare RAG", status: "Research prototype", area: "Biomedical NLP", order: 3, featured: true,
    excerpt: "A protocol-aware retrieval and structured API workflow for evaluating imaging reports against requirements.",
    question: "How can a retrieval system ground a structured quality-control assessment in protocol evidence?",
    approach: ["Prepared protocol text for retrieval and embedding.", "Built API interfaces for structured imaging-case inputs and quality-control outputs.", "Used retrieved protocol context to constrain LLM reasoning."],
    evidence: ["Public repository documents the retrieval architecture and FastAPI endpoint."],
    caveats: ["Not validated for real clinical decision-making.", "Retrieval grounding reduces, but does not eliminate, errors."],
    stack: ["FastAPI", "Chroma", "Ollama", "RAG", "Pydantic"],
    github: "https://github.com/Bucci-beep/imaging-trial-assistant"
  },
  {
    slug: "knee-mri", title: "Knee MRI Agentic System", eyebrow: "Ongoing healthcare research", status: "In progress", area: "Medical imaging", order: 4,
    excerpt: "An examination-level MRI analysis system designed around multi-view ingestion and explicit safety boundaries.",
    question: "How should an MRI system combine complementary examination views without misrepresenting incomplete studies?",
    approach: ["Developed DICOM ingestion and series-level inspection components.", "Designed a separate MRNet/NumPy loading pathway, treating axial, coronal and sagittal views as one examination.", "Specified downstream validation for missing views and unavailable metadata."],
    evidence: ["Early pipeline components and local tests are reported complete; downstream modeling remains planned."],
    caveats: ["Not a validated clinical tool.", "Model evaluation, out-of-distribution assessment and external validation are future work."],
    stack: ["Python", "DICOM", "MRI", "PyTorch", "Validation"],
  },
  {
    slug: "logicroute", title: "LogiRoute AI", eyebrow: "Deployed software project", status: "Research prototype", area: "Optimization", order: 5,
    excerpt: "An applied route-planning software project with a deployed demonstration.",
    question: "How can an optimization-focused prototype be delivered as software that users can access?",
    approach: ["Developed an applied software project around route-planning workflows.", "Deployed a demonstration for users to explore."],
    evidence: ["GitHub repository is public; a deployment was previously reported, but the current live URL has not been independently verified."],
    caveats: ["Specific performance claims have not been independently checked."],
    stack: ["Optimization", "Software engineering"], github: "https://github.com/Bucci-beep/logiroute-ai"
  },
  {
    slug: "phd-opportunity-agent", title: "AI PhD Opportunity Agent", eyebrow: "Research discovery tooling", status: "In progress", area: "Agentic systems", order: 6,
    excerpt: "A structured opportunity tracker designed to connect research interests, supervisors and funding opportunities.",
    question: "How can research opportunities be captured with traceable sources and historical changes?",
    approach: ["Designed relational records for opportunities, supervisors, sources, research profiles and applications.", "Introduced source tracking and snapshots to support data provenance."],
    evidence: ["Earlier local implementation included Supabase schema migrations and seed data."],
    caveats: ["Automated discovery and ranking quality have not been validated."],
    stack: ["Supabase", "PostgreSQL", "Python", "Data provenance"], github: "https://github.com/Bucci-beep/ai-phd-opportunity-agent"
  },
  {
    slug: "production-rag", title: "Production-Minded RAG Pipeline", eyebrow: "Engineering practice", status: "In progress", area: "LLM systems", order: 7,
    excerpt: "A document ingestion and retrieval workflow focused on validation, handling of PDFs and resilient parsing.",
    question: "What safeguards and interfaces are needed before retrieval becomes a dependable application component?",
    approach: ["Implemented text ingestion with explicit character encoding handling.", "Added PDF extraction patterns and defensive checks around empty or malformed content."],
    evidence: ["Public README records implemented ingestion features."],
    caveats: ["The repository's title does not establish production readiness; full operational validation is pending."],
    stack: ["Python", "LangChain", "RAG", "PDF ingestion"], github: "https://github.com/Bucci-beep/production-rag-pipeline"
  },
  {
    slug: "ml-algorithms", title: "ML Algorithms Engineering", eyebrow: "Foundations and reproducibility", status: "In progress", area: "Machine learning", order: 8,
    excerpt: "Algorithm implementations used to study model behavior, assumptions and evaluation trade-offs.",
    question: "What changes when common machine learning algorithms are understood from first principles?",
    approach: ["Implemented and tested foundational supervised learning exercises.", "Used controlled examples to investigate optimization and sensitivity to observations."],
    evidence: ["Public practice repository and exercises."],
    caveats: ["This is a learning and experimentation repository, not a deployed system."],
    stack: ["Python", "NumPy", "Machine learning"], github: "https://github.com/Bucci-beep/ml-algorithms-engineering"
  }
];
export function projectBySlug(slug: string) { return projects.find((p) => p.slug === slug); }
