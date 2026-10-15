import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const professionalLinks = [
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
  { href: site.github, label: "GitHub", icon: Github },
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: site.cv, label: "CV", icon: FileText },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-identity">
          <strong>{site.name}</strong>
          <p>{site.role}</p>
        </div>
        <nav className="footer-links" aria-label="Professional links">
          {professionalLinks.map(({ href, label, icon: Icon }) => {
            const newTab = href.startsWith("http") || href.endsWith(".pdf");
            return (
              <a
                key={label}
                href={href}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Research, engineering, and evidence-led AI systems.</span>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
