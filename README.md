# Denis Kahuthu | Applied AI portfolio

A complete Next.js portfolio with a research-first narrative and modern engineering presentation.

## Run on a Mac

1. Download the ZIP and unzip it.
2. Open Terminal. Type `cd ` (with the space), drag the unzipped `denis-ai-portfolio` folder into Terminal, press Return.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit http://localhost:3000

Requires Node.js 20.9 or newer. Check with `node --version`.

## Production check

`npm run build`

## Publish with Vercel

Push this folder to a GitHub repository. At vercel.com, choose Add New > Project, import the repository, accept Next.js settings, and deploy. The site does not need a database, environment variables or paid services.

## Update content without touching page code

- `lib/site.ts` — name, email, social links and location.
- `lib/projects.ts` — project status, descriptions, evidence and links.
- `lib/notes.ts` — research notebook pieces.
- `app/about/page.tsx` — education and experience.
- `public/cv.pdf` — place a finalized CV here when ready; no CV link is displayed until a file has been added manually.

## Important accuracy notes

This content identifies Denis Kahuthu, not Zafar Lashari. The MSc classification is explicitly provisional pending the official award. The MSc ECG system was a *group* project and Denis's contribution is identified specifically. All medical and financial prototypes carry scope limitations. Any unverified deployment URLs and unpublished papers are omitted, not invented.

To add a verified LinkedIn URL, fill in `linkedin` in `lib/site.ts` and optionally add a link component. You can optionally add your real domain as `metadataBase` in `app/layout.tsx` after publishing.
