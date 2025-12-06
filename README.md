# North & Line — Launch Site v1

Editorial website for North & Line, a public relations firm based in Minneapolis.

**Live Preview:** [Vercel deployment URL]

---

## Core Philosophy

> "Clarity ages better than charisma."

The site acts as an editorial dossier, not a brochure. The visual rhythm mirrors the print identity: wide margins, tight type control, deliberate pauses of white.

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| CMS | Sanity.io |
| Hosting | Vercel |
| Image CDN | Cloudinary |
| Fonts | GT America (Regular / Medium), self-hosted woff2 |
| Analytics | Plausible or GA4 |

---

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm, npm, or yarn
- Sanity account (for CMS)
- Vercel account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/north-and-line.git
cd north-and-line

# Install dependencies
npm install
# or
bun install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Project Structure

```
north-and-line/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── approach/
│   ├── contact/
│   ├── press/
│   ├── work/
│   ├── globals.css         # Global styles + font-face
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Shared React components
│   ├── FadeIn.tsx         # Animation wrapper
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PageHeader.tsx
│   ├── ScrollProgress.tsx
│   └── Section.tsx
├── lib/                    # Utility functions
│   └── sanity.ts          # Sanity client + queries
├── public/
│   ├── fonts/             # Self-hosted GT America woff2
│   └── favicon.svg
├── sanity/
│   └── schemas/           # Sanity document schemas
│       ├── caseStudy.ts
│       ├── page.ts
│       ├── pressRelease.ts
│       └── index.ts
├── sanity.config.ts       # Sanity studio config
├── tailwind.config.ts     # Tailwind configuration
└── next.config.js
```

---

## Page Architecture

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Minimal headline, manifesto, preview sections |
| About | `/about` | Firm ethos, partner bios, philosophy quotes |
| Work | `/work` | 3–5 case summaries with proof points |
| Approach | `/approach` | Methodology diagram: Core Story → Proof → Voice |
| Press | `/press` | Auto-pull from Sanity CMS |
| Contact | `/contact` | Minimal form + press email |

---

## Design System

### Colors

```css
--nl-cream: #F9F8F5;      /* Background */
--nl-black: #0A0A0A;      /* Primary text */
--nl-gray: #555555;       /* Secondary text, links */
--nl-light-gray: #CCCCCC; /* Borders, dividers */
```

### Typography

- **Font:** GT America (Regular 400, Medium 500)
- **Display:** clamp(2.5rem, 6vw, 5rem)
- **Headline:** clamp(1.75rem, 4vw, 3rem)
- **Subhead:** clamp(1.25rem, 2vw, 1.5rem)
- **Body:** 1rem / 1.6
- **Caption:** 0.875rem
- **Small:** 0.75rem (uppercase labels)

### Grid

- 12 columns
- Max width: 1280px
- Gutters: 24px
- Page margins: clamp(24px, 5vw, 80px)

### Motion

- Fade + subtle translateY on scroll
- Timing: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Duration: 400-600ms
- No parallax effects

### Brand Element

The "+" symbol serves as:
- Logo mark
- Hover indicator
- Scroll progress symbol
- List bullet (outcomes)

---

## Content Management (Sanity)

### Schemas

**Press Release**
- title, slug, date, category, excerpt, content, mediaContact

**Case Study**
- title, slug, sector, year, challenge, approach, outcomes, testimonial, coverImage, featured

**Page**
- title, slug, description, content (block content)

### Running Sanity Studio

```bash
npm run sanity:dev
```

Studio runs at `http://localhost:3333`

### Deploying Sanity Studio

```bash
npm run sanity:deploy
```

---

## Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

```bash
# Manual deploy
vercel --prod
```

### Build Commands

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Font Setup

GT America must be licensed and self-hosted. Place font files in:

```
public/fonts/
├── GTAmerica-Regular.woff2
└── GTAmerica-Medium.woff2
```

The fonts are loaded in `app/globals.css` via `@font-face` declarations.

---

## Analytics Setup

### Plausible (Recommended)

Add to `layout.tsx`:

```tsx
<Script
  defer
  data-domain="northandline.com"
  src="https://plausible.io/js/script.js"
/>
```

### Google Analytics 4

Add to `layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
```

---

## Stretch Features (Phase 2)

- [ ] Automated "Coverage Log" feed (pulls headlines + dates)
- [ ] RSS / Email digest integration
- [ ] Light / dark toggle based on OS preference
- [ ] Individual case study pages with rich content
- [ ] Team member detail pages

---

## Content Workflow

### Adding a Press Release

1. Open Sanity Studio
2. Navigate to "Press Releases"
3. Click "Create new"
4. Fill in required fields (title, date, category, excerpt)
5. Add content blocks as needed
6. Publish

Changes appear on the live site within ~60 seconds (ISR).

### Updating Case Studies

Case studies are currently hardcoded in `app/work/page.tsx`. To make them CMS-driven:

1. Uncomment the Sanity fetch in `app/work/page.tsx`
2. Add case studies in Sanity Studio
3. Remove placeholder data

---

## Development Notes

### Code Style

- TypeScript strict mode enabled
- ESLint + Prettier for formatting
- Tailwind for styling (no CSS modules)
- Server Components by default, 'use client' only when needed

### Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1

### Accessibility

- Semantic HTML throughout
- Focus states on all interactive elements
- Sufficient color contrast (WCAG AA)
- Screen reader tested

---

## License

Proprietary. All rights reserved.

---

## Contact

For technical questions: [dev@northandline.com]
