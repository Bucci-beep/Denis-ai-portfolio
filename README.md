# Denis Kibuchi Kahuthu | Agentic AI Research Engineer

A Next.js portfolio presenting research investigation and practical AI engineering as complementary capabilities. Project case studies separate implementation, evaluation evidence, and limitations.

## Run on a Mac

1. Clone the repository.
2. Change into the project directory.
3. Run `npm ci`.
4. Run `npm run dev`.
5. Visit http://localhost:3000

Requires Node.js 20.9 or newer. Check with `node --version`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Publish with Vercel

Push this folder to a GitHub repository. At vercel.com, choose Add New > Project, import the repository, accept Next.js settings, and deploy. The site does not need a database, environment variables or paid services.

## Update content without touching page code

- `lib/site.ts` — name, email, social links and location.
- `lib/projects.ts` — project status, descriptions, evidence and links.
- `lib/notes.ts` — research notebook pieces.
- `app/about/page.tsx` — education and experience.
- `public/cv.pdf` — downloadable CV linked from the header, homepage, about page, contact page, and footer.

## Important accuracy notes

The MSc academic requirements are complete, while official award confirmation remains pending. The collaborative MSc bio-signal project identifies Denis's contribution specifically. Software tests and model results are not presented as clinical validation, scientific generalisability, or production readiness. Medical and financial prototypes carry explicit scope limitations, and unverified deployment URLs or publications are omitted.

Verified GitHub, LinkedIn, email, CV, and portfolio URLs are defined centrally in `lib/site.ts`.
