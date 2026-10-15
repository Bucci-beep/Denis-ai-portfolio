import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  FileCheck2,
  FlaskConical,
  Github,
  Linkedin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { notes } from "@/lib/notes";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const practiceAreas = [
  {
    icon: BrainCircuit,
    title: "Agentic AI engineering",
    text: "Stateful orchestration, typed tool interfaces, bounded model roles, and human review gates.",
  },
  {
    icon: FlaskConical,
    title: "Machine learning research",
    text: "Experimental comparison, error analysis, uncertainty estimation, and reproducible evaluation.",
  },
  {
    icon: FileCheck2,
    title: "Rigorous software engineering",
    text: "Deterministic validation, automated tests, explicit contracts, and failure-aware integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy AI",
    text: "Evidence boundaries, abstention, interpretable outputs, and honest reporting of limitations.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="overline">
            <span className="live-dot" /> OPEN TO RESEARCH AND ENGINEERING OPPORTUNITIES
          </div>
          <p className="hero-kicker">DENIS KIBUCHI KAHUTHU</p>
          <h1>
            Agentic AI <em>Research Engineer.</em>
          </h1>
          <p className="hero-description">
            Building and evaluating reliable AI systems through agentic workflows,
            machine learning, rigorous testing, and evidence-grounded reasoning.
          </p>
          <p className="hero-context">
            I connect research questions to testable software: designing architectures,
            running experiments, investigating failure modes, and documenting what the
            evidence does - and does not - support.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/projects">
              Explore selected work <ArrowUpRight size={17} />
            </Link>
            <a className="button-text" href={site.cv} target="_blank" rel="noopener noreferrer">
              View CV <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-links" aria-label="Professional profiles">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Current research and engineering focus">
          <div className="hero-panel-head">
            CURRENT FOCUS <span>RESEARCH + ENGINEERING</span>
          </div>
          <div className="focus-statement">
            <span>01</span>
            <div>
              <strong>Reliable agentic workflows</strong>
              <p>Tool use, orchestration, provenance, and human oversight.</p>
            </div>
          </div>
          <div className="focus-statement">
            <span>02</span>
            <div>
              <strong>Uncertainty-aware machine learning</strong>
              <p>Calibration, OOD handling, explainability, and error analysis.</p>
            </div>
          </div>
          <div className="focus-statement">
            <span>03</span>
            <div>
              <strong>Health and scientific AI</strong>
              <p>Evidence-grounded prototypes with explicit validation boundaries.</p>
            </div>
          </div>
          <div className="hero-panel-footer">Based in Bristol, United Kingdom.</div>
        </aside>
      </section>

      <section className="band">
        <div className="container band-inner">
          <span>WORKING PRINCIPLE</span>
          <p>Build carefully. Test assumptions. Make uncertainty visible. Report only what the evidence supports.</p>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Featured projects<span className="period">.</span></h2>
          </div>
          <Link href="/projects" className="inline-link">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="project-grid">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ProjectCard key={project.slug} p={project} index={index} />
          ))}
        </div>
      </section>

      <section className="container section practice-section">
        <div className="section-heading practice-heading">
          <div>
            <span className="eyebrow">HOW I WORK</span>
            <h2>Research questions, engineered answers<span className="period">.</span></h2>
          </div>
          <p>Research and engineering are presented together because reliable AI needs both.</p>
        </div>
        <div className="practice-grid">
          {practiceAreas.map(({ icon: Icon, title, text }, index) => (
            <article className="practice-card" key={title}>
              <div><Icon size={21} /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section research-teaser">
        <div>
          <span className="eyebrow">RESEARCH DIRECTION</span>
          <h2>Reliability is more than <em>passing tests.</em></h2>
          <p>
            I distinguish software correctness from model performance, experimental
            reproducibility, system integration, safety assessment, and external validation.
          </p>
          <Link href="/research" className="inline-link">
            Read the research notebook <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="research-areas">
          <p><span>01</span> Agentic systems and governed tool use</p>
          <p><span>02</span> Uncertainty, calibration, and abstention</p>
          <p><span>03</span> Biomedical AI and interpretable models</p>
          <p><span>04</span> Reproducible evaluation and failure analysis</p>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">RESEARCH NOTEBOOK</span>
            <h2>Working notes<span className="period">.</span></h2>
          </div>
          <Link className="inline-link" href="/research">
            View all <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="note-list">
          {notes.slice(0, 3).map((note) => (
            <Link href={`/research/${note.slug}`} key={note.slug} className="note-row">
              <span className="eyebrow">{note.category}</span>
              <div><h3>{note.title}</h3><p>{note.summary}</p></div>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>

      <section className="container cta-block">
        <div>
          <span className="eyebrow">RESEARCH · KTP · INDUSTRY</span>
          <h2>Looking for an engineer who investigates as carefully as they implement?</h2>
        </div>
        <Link className="button-primary" href="/contact">
          Start a conversation <ArrowRight size={17} />
        </Link>
      </section>
    </>
  );
}
