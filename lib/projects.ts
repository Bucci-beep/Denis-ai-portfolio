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
    slug: "carepath-ai",
    title: "CarePath AI",
    eyebrow: "Responsible AI hackathon finalist",
    status: "Research prototype",
    area: "Healthcare AI assurance",
    order: 1,
    featured: true,
    excerpt:
      "A privacy-aware AI prototype designed to make blood-test results more understandable while protecting personal information and grounding explanations in retrieved evidence.",
    question:
      "How can AI help patients understand laboratory results without unnecessarily exposing personal information or presenting unsupported explanations as medical advice?",
    contribution:
      "Contributed to the privacy pipeline, focusing on anonymising medical documents and testing whether laboratory measurements and units remain usable after processing. Added regression coverage for OCR-corrupted laboratory units.",
    approach: [
      "Separated document anonymisation from downstream explanation generation to reduce unnecessary exposure of identifiable patient information.",
      "Used OCR and personal-information detection to support redaction while preserving laboratory values needed for interpretation.",
      "Incorporated patient confirmation and retrieval-grounded explanations as safeguards against extraction errors and unsupported answers.",
    ],
    evaluation: [
      "Added privacy-pipeline regression tests, including a case that rejects OCR-corrupted laboratory units.",
      "The team demonstrated the prototype at the Synoptix Responsible AI Hackathon, finishing among the top four teams.",
      "Software tests and hackathon assessment do not establish clinical accuracy, privacy guarantees, or patient safety.",
    ],
    evidence: [
      "The public repository documents the prototype architecture and implementation.",
      "Hackathon judges recognised the team's consideration of privacy, security, explainability, and transparency.",
      "The project strengthened my focus on AI assurance: examining what information a system receives, what it can safely produce, and how failures are detected.",
    ],
    caveats: [
      "Hackathon research prototype; not clinically validated or intended to replace professional medical interpretation.",
      "Anonymisation reduces privacy risks but cannot guarantee that all identifying information is removed.",
      "Further evaluation is needed for OCR robustness, clinical correctness, retrieval quality, and realistic user testing.",
    ],
    stack: ["Python", "OCR", "Microsoft Presidio", "RAG", "AI assurance", "pytest"],
    github: "https://github.com/ramy-glitch/CarePath_AI",
  },

  {
    slug: "tazama",
    title: "Tazama AI",
    eyebrow: "Agentic healthcare workflow",
    status: "Research prototype",
    area: "Agentic AI assurance",
    order: 2,
    featured: true,
    excerpt:
      "An AI-assisted clinical reassessment prototype designed to help nurses identify outstanding reviews while keeping clinical priority decisions deterministic, traceable, and human-supervised.",
    question:
      "How can agentic AI support timely patient reassessment without allowing a language model to determine clinical priority or replace clinician judgement?",
    contribution:
      "Contributed to API validation, reassessment persistence, dashboard integration, consistent observation handling, and regression testing. Focused on making workflow failures explicit and ensuring clinical evidence remains consistent across processing steps.",
    approach: [
      "Used LangGraph to coordinate observation retrieval, history comparison, deterministic SATS/TEWS assessment, bounded explanations, and pending clinician review.",
      "Separated clinical scoring from language-model behaviour: protocol-defined rules determine priority, while optional model output is restricted to pre-approved explanatory statements.",
      "Used typed MCP interfaces and persisted audit records to support traceability, explicit failure reporting, and review accountability.",
      "Implemented persisted reassessment obligations and support for clinician review revisions rather than silently overwriting earlier review evidence.",
    ],
    evaluation: [
      "Regression tests cover reassessment API responses, persisted review requests, idempotency, unavailable MCP tools, and explicit failure codes.",
      "Tests verify consistent observation snapshots so priority assessment does not silently use different measurements from the history-comparison step.",
      "Synthetic scenarios exercise successful and incomplete reassessments; passing software tests does not establish clinical safety.",
    ],
    evidence: [
      "Working FastAPI and Next.js research prototype with structured reassessment endpoints and dashboard functionality.",
      "Implemented due-reassessment endpoint and persisted review evidence, including revision-aware review handling.",
      "The workflow prepares evidence for clinician review rather than autonomously approving clinical decisions.",
    ],
    caveats: [
      "Synthetic-data research prototype; not clinically validated or authorised for patient care.",
      "Adult SATS chart applicability gating remains under development and is not claimed as implemented.",
      "Automated software verification does not demonstrate clinical effectiveness, improved patient outcomes, or deployment readiness.",
    ],
    stack: ["Python", "LangGraph", "MCP", "FastAPI", "Next.js", "SQLite", "pytest"],
    github: "https://github.com/Bucci-beep/triageguard-ai",
  },
  {
    slug: "ecg-reasoning",
    title: "Agentic Bio-Signal Analysis",
    eyebrow: "MSc collaborative research",
    status: "Completed",
    area: "Trustworthy ML",
    order: 3,
    featured: true,
    excerpt:
      "A physiological-signal analysis pipeline investigating why strong classification accuracy is insufficient without uncertainty estimation, error analysis, explainability, and software verification.",
    question:
      "How can we evaluate physiological-signal models when high overall accuracy may conceal poor performance on minority classes or unfamiliar inputs?",
    contribution:
      "Developed signal ingestion and preprocessing, deterministic reasoning, uncertainty and out-of-distribution routing, and verification components within a collaborative MSc research project.",
    approach: [
      "Processed physiological signals for 1D-CNN inference, preserving signal information needed for downstream classification and interpretation.",
      "Investigated uncertainty and out-of-distribution detection because unfamiliar inputs should not automatically receive confident predictions.",
      "Used GradCAM and deterministic interval checks to examine model behaviour beyond predicted labels.",
    ],
    evaluation: [
      "Evaluated 18,347 test instances, reporting 92.82% accuracy alongside macro F1 of 0.455.",
      "The difference between accuracy and macro F1 exposed weaknesses associated with class imbalance and motivated further investigation.",
      "341 unit and regression tests exercised software behaviour; these tests do not establish clinical effectiveness.",
    ],
    evidence: [
      "The project connects model evaluation, uncertainty handling, explainability, and software verification.",
      "The public repository documents the collaborative architecture and implementation.",
    ],
    caveats: [
      "This was collaborative research; the personal contribution described here is limited to the components I worked on.",
      "Reported metrics do not establish clinical generalisability or deployment readiness.",
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
    order: 4,
    featured: true,
    excerpt:
      "A conversational financial risk-profiling prototype investigating how uncertainty, explicit confirmation, and deterministic rules can prevent ambiguous language from becoming an unsupported decision.",
    question:
      "How can an AI system interpret financial risk preferences without silently treating ambiguous answers as reliable information?",
    contribution:
      "Developed the conversational risk-profiling prototype, including question-specific classification, uncertainty handling, confirmation gates, evaluation fixtures, and reproducible setup.",
    approach: [
      "Separated natural-language interpretation from deterministic suitability checks so model predictions could not independently determine the final decision.",
      "Used TF-IDF, Logistic Regression, and conformal prediction across 15 questions to represent uncertainty rather than forcing every response into a single category.",
      "Introduced clarification, confirmation, and explicit save consent to preserve user intent.",
    ],
    evaluation: [
      "Maintained a 204-case regression evaluation covering known interpretation and workflow behaviours.",
      "Tested ambiguous responses, abstention, validation failures, and confirmation requirements.",
      "The reused regression set is not independent held-out validation.",
    ],
    evidence: [
      "The Streamlit prototype demonstrates separation between probabilistic interpretation and governed decision logic.",
      "The public repository documents the implementation, evaluation fixtures, and limitations.",
    ],
    caveats: [
      "Research prototype only; not investment advice or a validated financial suitability service.",
      "Real-user performance, calibration, and generalisation remain unestablished.",
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
    order: 5,
    excerpt:
      "A comparative computer-vision study investigating whether CNN architectures can identify tuberculosis bacilli more effectively than traditional image-feature baselines.",
    question:
      "Can spatial feature learning improve tuberculosis bacillus classification, and what do classification errors reveal about model reliability?",
    contribution:
      "Developed the image-processing, modelling, and evaluation pipeline, comparing classical machine-learning baselines with CNN and DenseNet121 approaches.",
    approach: [
      "Established Logistic Regression and PCA-based baselines before introducing CNN architectures to assess whether additional complexity improved performance.",
      "Compared architectures using controlled training and evaluation procedures.",
      "Examined false positives and false negatives because accuracy alone does not describe the consequences of missed or incorrectly identified bacilli.",
    ],
    evaluation: [
      "The recorded DenseNet121 test accuracy was 92.48% on the project image-patch dataset.",
      "McNemar testing reported statistically significant differences from baseline models (p < 0.01).",
      "These results support comparisons within the experimental dataset, not clinical diagnostic claims.",
    ],
    evidence: [
      "The study demonstrates baseline construction, model comparison, statistical testing, and error analysis.",
      "The experimental workflow provides evidence of practical machine-learning research beyond headline accuracy.",
    ],
    caveats: [
      "Models were evaluated on academic image patches, not independently validated clinical microscopy workflows.",
      "External generalisation, potential data leakage, and clinically relevant false-negative behaviour require further investigation.",
      "A public source repository is not currently linked.",
    ],
    stack: ["Python", "PyTorch", "DenseNet121", "PCA", "Cross-validation", "McNemar test"],
  },
  {
    slug: "imaging-trial-assistant",
    title: "Imaging Trial Assistant",
    eyebrow: "Evidence-grounded RAG",
    status: "Research prototype",
    area: "Biomedical NLP",
    order: 6,
    excerpt:
      "A biomedical retrieval prototype exploring how imaging-report quality checks can be supported by relevant protocol evidence instead of unconstrained language-model responses.",
    question:
      "How can an AI-assisted quality-control workflow connect its conclusions to identifiable protocol evidence while making unsupported outputs easier to detect?",
    contribution:
      "Implemented the local retrieval pipeline, structured FastAPI interface, and evidence-oriented response contract.",
    approach: [
      "Indexed protocol documents using local embeddings and Chroma to retrieve relevant evidence for quality-control requests.",
      "Used FastAPI and Pydantic to separate structured case inputs from model-generated interpretation.",
      "Constrained generation to retrieved protocol context because plausible responses are not sufficient evidence of correctness.",
    ],
    evaluation: [
      "Demonstrated the end-to-end retrieval and API workflow using synthetic imaging-report inputs.",
      "Formal retrieval-quality, answer-faithfulness, and clinical evaluation remain outstanding.",
    ],
    evidence: [
      "The public implementation exposes a /qc endpoint and documents the retrieval workflow.",
      "The prototype demonstrates an evidence-oriented architecture while keeping evaluation limitations explicit.",
    ],
    caveats: [
      "The system has not been validated for real clinical quality-control decisions.",
      "Model-output parsing requires further hardening, and retrieved context does not guarantee a correct answer.",
    ],
    stack: ["FastAPI", "Pydantic", "Chroma", "Ollama", "LangChain", "RAG"],
    github: "https://github.com/Bucci-beep/imaging-trial-assistant",
  },

  {
    slug: "ml-algorithms",
    title: "ML Algorithms Engineering",
    eyebrow: "Foundations and reproducibility",
    status: "In progress",
    area: "Machine learning",
    order: 7,
    excerpt:
      "A collection of machine-learning implementations and controlled experiments exploring how model assumptions, optimisation choices, and evaluation methods influence behaviour.",
    question:
      "What can implementing and testing machine-learning algorithms from first principles reveal about their assumptions, strengths, and failure modes?",
    contribution:
      "Implemented and documented foundational machine-learning exercises to strengthen my understanding of algorithm behaviour and reproducible experimentation.",
    approach: [
      "Implemented supervised-learning exercises using Python and NumPy to make core computations and assumptions inspectable.",
      "Used small controlled experiments to investigate optimisation behaviour and sensitivity to input data.",
      "Documented implementation choices and observations as a foundation for more advanced applied research.",
    ],
    evaluation: [
      "Exercises provide implementation checks and opportunities to compare expected and observed algorithm behaviour.",
      "No formal benchmark, novel research result, or production-performance claim is made.",
    ],
    evidence: [
      "The public repository documents practical experimentation and foundational implementation work.",
    ],
    caveats: [
      "This is an ongoing learning and experimentation repository rather than a completed scientific study.",
    ],
    stack: ["Python", "NumPy", "Machine learning", "Testing"],
    github: "https://github.com/Bucci-beep/ml-algorithms-engineering",
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
