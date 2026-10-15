import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Research and engineering background of Agentic AI Research Engineer Denis Kibuchi Kahuthu.",
};

export default function About() {
  return (
    <div className="container page-block">
      <header className="page-intro">
        <span className="eyebrow">ABOUT / RESEARCH + ENGINEERING</span>
        <h1>Investigating systems. <em>Engineering evidence.</em></h1>
        <p>
          I am Denis Kibuchi Kahuthu, an Agentic AI Research Engineer based in Bristol.
          I combine machine-learning investigation with the software engineering needed
          to turn research questions into reproducible, inspectable systems.
        </p>
      </header>

      <div className="about-grid">
        <section className="about-story">
          <h2>Research and engineering practice</h2>
          <p>
            My work spans agentic orchestration, uncertainty-aware machine learning,
            biomedical AI, retrieval systems, and constrained decision-support workflows.
            I design architectures, implement experiments, examine errors, and test how
            systems behave when evidence is incomplete or tools fail.
          </p>
          <p>
            Reliability has several layers. Automated tests can verify software behaviour;
            model evaluation measures performance on defined data; reproducibility checks
            whether an experiment can be repeated. None of these alone establishes external
            validity, safety, or readiness for real-world clinical use.
          </p>
          <p>
            I am interested in research engineering, applied AI research, Knowledge Transfer
            Partnerships, and industry roles where careful investigation and maintainable
            implementation reinforce each other.
          </p>

          <h2>Education</h2>
          <div className="timeline-item">
            <div className="timeline-year">2025-2026</div>
            <div>
              <strong>MSc Artificial Intelligence</strong>
              <p>University of the West of England, Bristol</p>
              <p>Academic requirements completed; official award confirmation pending.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2016-2021</div>
            <div>
              <strong>BTech Information Technology</strong>
              <p>Technical University of Mombasa</p>
            </div>
          </div>

          <h2>Current professional experience</h2>
          <div className="timeline-item">
            <div className="timeline-year">2025-PRESENT</div>
            <div>
              <strong>Kitchen Porter / Operations Support</strong>
              <p>Fed Cafe, Bristol</p>
              <p>
                Work within time-critical operations, maintaining rigorous procedures,
                dependable execution, and coordination across a multidisciplinary team.
              </p>
            </div>
          </div>
        </section>

        <aside className="about-aside">
          <span className="eyebrow">CORE INTERESTS</span>
          <div className="interest-list">
            <span>Agentic workflows and tool orchestration</span>
            <span>Uncertainty, calibration, and OOD assessment</span>
            <span>Biomedical language, signal, and vision systems</span>
            <span>Evaluation, testing, and reproducibility</span>
            <span>Evidence-grounded decision support</span>
          </div>
          <p className="about-principle">
            The strongest systems make their evidence, assumptions, and limits inspectable.
          </p>
          <a href={site.cv} className="inline-link aside-link" target="_blank" rel="noopener noreferrer">
            <FileText size={16} /> Download CV
          </a>
          <Link href="/projects" className="inline-link aside-link">
            Explore project evidence <ArrowUpRight size={16} />
          </Link>
        </aside>
      </div>

      <section className="capability-section">
        <span className="eyebrow">TECHNICAL FOUNDATION</span>
        <h2>Methods and tools<span className="period">.</span></h2>
        <div className="capability-grid">
          <article>
            <h3>Agentic systems</h3>
            <p>LangGraph, MCP, typed tool contracts, multi-step workflows, RAG, bounded model behaviour.</p>
          </article>
          <article>
            <h3>Machine learning</h3>
            <p>PyTorch, scikit-learn, CNNs, regression, cross-validation, calibration, uncertainty, GradCAM.</p>
          </article>
          <article>
            <h3>Engineering</h3>
            <p>Python, FastAPI, Pydantic, SQL, PostgreSQL, automated tests, integration validation, Git.</p>
          </article>
          <article>
            <h3>Research methods</h3>
            <p>Hypothesis testing, residual diagnostics, error analysis, experimental comparison, reproducible reporting.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
