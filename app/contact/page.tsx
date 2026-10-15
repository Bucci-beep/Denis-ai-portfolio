import type { Metadata } from "next";
import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Denis Kibuchi Kahuthu about AI research, research engineering, KTP, and applied AI opportunities.",
};

const contactLinks = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", value: "github.com/Bucci-beep", href: site.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/denis-kahuthu", href: site.linkedin, icon: Linkedin },
  { label: "Curriculum vitae", value: "View or download PDF", href: site.cv, icon: FileText },
];

export default function Contact() {
  return (
    <section className="container page-block contact-page">
      <span className="eyebrow">CONTACT / COLLABORATION</span>
      <h1>Let&apos;s investigate and <em>build carefully.</em></h1>
      <p>
        I welcome conversations about PhD and research assistant opportunities,
        research engineering, Knowledge Transfer Partnerships, and applied AI roles
        where reliability and implementation quality matter.
      </p>
      <div className="contact-actions">
        {contactLinks.map(({ label, value, href, icon: Icon }) => {
          const newTab = href.startsWith("http") || href.endsWith(".pdf");
          return (
            <a
              href={href}
              key={label}
              target={newTab ? "_blank" : undefined}
              rel={newTab ? "noopener noreferrer" : undefined}
              className="contact-tile"
              aria-label={`${label}: ${value}`}
            >
              <Icon aria-hidden="true" />
              <div><span>{label}</span><strong>{value}</strong></div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          );
        })}
      </div>
      <div className="contact-location"><MapPin size={16} /> {site.location}</div>
    </section>
  );
}
