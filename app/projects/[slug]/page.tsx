import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  return { title: project?.title ?? "Project", description: project?.excerpt };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="container detail-page">
      <Link href="/projects" className="back-link">
        <ArrowLeft size={16} /> All projects
      </Link>
      <header className="detail-hero">
        <div className="detail-meta">
          <span className="eyebrow">{project.eyebrow} / {project.area}</span>
          <span className="status">{project.status}</span>
        </div>
        <h1>{project.title}<span className="period">.</span></h1>
        <p>{project.excerpt}</p>
        <div className="tag-row">
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </header>

      <div className="detail-grid">
        <div className="detail-main">
          <section>
            <span className="eyebrow">PROBLEM FORMULATION</span>
            <h2>Research or engineering question</h2>
            <p>{project.question}</p>
          </section>
          <section>
            <span className="eyebrow">PERSONAL CONTRIBUTION</span>
            <h2>My role</h2>
            <p>{project.contribution}</p>
          </section>
          <section>
            <span className="eyebrow">ENGINEERING</span>
            <h2>Approach and architecture</h2>
            <ul className="detail-list">
              {project.approach.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <span className="eyebrow">EVALUATION</span>
            <h2>How the work was tested</h2>
            <ul className="detail-list">
              {project.evaluation.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <span className="eyebrow">VERIFIED EVIDENCE</span>
            <h2>What has been demonstrated</h2>
            <ul className="detail-list">
              {project.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <span className="eyebrow">RESPONSIBLE REPORTING</span>
            <h2>Limitations and next questions</h2>
            <ul className="detail-list">
              {project.caveats.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>

        <aside className="detail-sidebar">
          <h3>Project details</h3>
          <div className="aside-row"><span>Status</span><strong>{project.status}</strong></div>
          <div className="aside-row"><span>Field</span><strong>{project.area}</strong></div>
          <div className="aside-row"><span>Methods and tools</span><strong>{project.stack.join(", ")}</strong></div>
          {project.github ? (
            <a className="button-primary sidebar-button" href={project.github} target="_blank" rel="noopener noreferrer">
              View repository <ArrowUpRight size={16} />
            </a>
          ) : (
            <p className="side-note">A public source repository is not currently linked.</p>
          )}
        </aside>
      </div>
      <div className="detail-next">
        <Link href="/projects"><ArrowLeft size={16} /> Browse more work</Link>
      </div>
    </div>
  );
}
