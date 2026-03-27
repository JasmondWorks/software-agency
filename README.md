# Randora — Next.js Website

CAC-registered software agency landing page built with Next.js 15, TypeScript, and the App Router.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Fonts**: `next/font/google` — Instrument Serif + Epilogue
- **SEO**: Metadata API, dynamic OG image, sitemap, robots.txt
- **Styling**: CSS custom properties (design tokens in `globals.css`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
randora/
├── app/
│   ├── layout.tsx            # Root layout — fonts, metadata, SEO tags
│   ├── page.tsx              # Home page — composes all sections
│   ├── globals.css           # Design tokens (CSS variables)
│   ├── opengraph-image.tsx   # Dynamic OG image (Edge runtime)
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Fixed nav with scroll detection
│   │   └── Footer.tsx        # Footer with dynamic year
│   │
│   ├── sections/
│   │   ├── Hero.tsx          # Hero with eyebrow, heading, CTA, decoration
│   │   ├── Stats.tsx         # Dark stats bar
│   │   ├── Services.tsx      # 6-card services grid
│   │   ├── Process.tsx       # 4-step process
│   │   ├── Team.tsx          # Team cards with avatars
│   │   ├── Packages.tsx      # 3-tier pricing packages
│   │   ├── Credibility.tsx   # Trust signals grid
│   │   ├── Social.tsx        # Social media links
│   │   └── CTA.tsx           # Final call-to-action
│   │
│   └── ui/
│       └── SectionHeader.tsx # Reusable section header component
│
└── lib/
    └── data.ts               # Single source of truth for ALL content
```

## Updating Content

**All website content lives in `lib/data.ts`** — team members, services, packages, stats, process steps, credibility items, and social links. You never need to touch component files to update copy or add team members.

### Adding a team member

```ts
// lib/data.ts
{
  id: "newmember",
  name: "Full Name",
  role: "Role Title",
  badge: null,           // or "Co-founder" etc.
  initials: "XX",
  color: "teal",         // navy | teal | coral | blue | rose | amber | green
  bio: "Specialty · Area · Stack",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
}
```

### Updating pricing

Edit the `packages` array in `lib/data.ts`. No component changes needed.

## SEO Features

- **Metadata API** — title template, description, keywords, Open Graph, Twitter Card all in `layout.tsx`
- **Dynamic OG Image** — auto-generated at `/opengraph-image` using Edge runtime
- **Sitemap** — auto-generated at `/sitemap.xml`
- **Robots** — configured at `/robots.txt`
- **next/font** — zero layout shift, self-hosted Google Fonts

## Deployment

Deploy to Vercel for automatic SEO optimizations:

```bash
npm run build   # Verify build passes
vercel deploy   # Deploy to Vercel
```

Update `metadataBase` in `app/layout.tsx` and URLs in `app/sitemap.ts` to your production domain before deploying.
# software-agency
