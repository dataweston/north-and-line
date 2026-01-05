# North & Line — Launch Site v1

Editorial website for North & Line, a public relations firm based in Minneapolis.

**Status:** ✅ Conversion-focused website overhaul complete

---

## What Changed in This Overhaul

### From Editorial Showcase → Conversion-Focused Marketing Site

This PR transformed the site from a minimal editorial portfolio into a comprehensive conversion-optimized website designed to drive inquiries from qualified prospects.

**Key Improvements:**
- **Homepage redesigned** with clear value proposition, proof metrics, and multiple CTAs
- **6 service detail pages** created with deliverables, outcomes, and pricing guidance
- **Enhanced contact form** with qualification fields (stage, budget, goal, timeline)
- **Analytics tracking** implemented for all conversion events (GA4 ready)
- **Content management system** enhanced with new schemas for services and expanded case studies
- **Documentation** added for managing content and tracking analytics

---

## Core Philosophy

> "Clarity ages better than charisma."

The site acts as a conversion-focused PR agency website while maintaining editorial sophistication. The visual rhythm mirrors the print identity: wide margins, tight type control, deliberate pauses of white.

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
| Analytics | Google Analytics 4 |

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
git clone https://github.com/dataweston/north-and-line.git
cd north-and-line

# Install dependencies
npm install

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
NEXT_PUBLIC_SITE_URL=https://northandline.com
```

---

## Project Structure

```
north-and-line/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── approach/
│   ├── contact/            # Enhanced with qualification fields
│   ├── press/
│   ├── services/           # NEW: Services hub + 6 detail pages
│   │   ├── page.tsx
│   │   ├── narrative-positioning/
│   │   ├── earned-media/
│   │   ├── executive-comms/
│   │   ├── launch-strategy/
│   │   ├── content-pr-enablement/
│   │   └── crisis-issues/
│   ├── work/
│   ├── globals.css
│   ├── layout.tsx          # GA4 + tracking integrated
│   ├── page.tsx            # Completely redesigned homepage
│   ├── sitemap.ts          # NEW: Dynamic sitemap
│   └── robots.ts           # NEW: SEO robots config
├── components/             # Shared React components
│   ├── AnalyticsTracker.tsx    # NEW: Page view tracking
│   ├── CTABand.tsx             # NEW: Reusable CTA section
│   ├── CTAButton.tsx           # NEW: Tracked CTA button
│   ├── CaseStudyCard.tsx       # NEW: Case study preview
│   ├── FAQAccordion.tsx        # NEW: Animated FAQ
│   ├── FadeIn.tsx
│   ├── Footer.tsx              # Updated with Services link
│   ├── GoogleAnalytics.tsx     # NEW: GA4 integration
│   ├── Header.tsx              # Updated with Services + CTA
│   ├── PageHeader.tsx
│   ├── ScrollProgress.tsx
│   ├── Section.tsx
│   ├── ServiceCard.tsx         # NEW: Service preview
│   └── Testimonial.tsx         # NEW: Testimonial display
├── lib/                    # Utility functions
│   ├── analytics.ts        # NEW: Type-safe analytics helpers
│   └── sanity.ts          # Sanity client + queries
├── public/
│   ├── fonts/             # Self-hosted GT America woff2
│   └── favicon.svg
├── sanity/
│   └── schemas/           # Sanity document schemas
│       ├── caseStudy.ts   # ENHANCED: More detailed fields
│       ├── service.ts     # NEW: Service content type
│       ├── page.ts
│       ├── pressRelease.ts
│       └── index.ts
├── CONTENT_GUIDE.md       # NEW: How to manage content
├── IMPLEMENTATION_GUIDE.md
└── README.md              # This file
```

---

## Page Architecture

| Page | Route | Status | Description |
|------|-------|--------|-------------|
| Home | `/` | ✅ Redesigned | Conversion-focused with value prop, proof, CTAs |
| About | `/about` | ✅ Existing | Firm ethos, partner bios, philosophy |
| Services Hub | `/services` | ✅ NEW | All services with preview cards |
| Service Detail | `/services/*` | ✅ NEW | 6 individual service pages |
| Work | `/work` | ✅ Existing | Case summaries (can be enhanced with CMS) |
| Approach | `/approach` | ✅ Existing | Methodology: Core Story → Proof → Voice |
| Press | `/press` | ✅ Existing | Auto-pull from Sanity CMS |
| Contact | `/contact` | ✅ Enhanced | Form with qualification fields |

---

## Analytics & Tracking

### Events Tracked

The site automatically tracks these conversion events via Google Analytics 4:

| Event | Trigger | Parameters |
|-------|---------|------------|
| `cta_book_call_click` | CTA button clicked | `location` (hero/nav/footer/service/etc.) |
| `contact_form_submit` | Contact form submitted | `stage`, `budget`, `goal`, `timeline` |
| `service_page_view` | Service page viewed | `service_slug` |
| `case_study_view` | Case study page viewed | `case_study_slug` |
| `case_study_scroll_75` | User scrolled 75% of case study | `case_study_slug` |
| `service_cta_click` | CTA clicked on service page | `service_slug` |

### Setup

1. Add your GA4 Measurement ID to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. All tracking is automatic via the `GoogleAnalytics` component and `lib/analytics.ts` helpers

---

## Content Management (Sanity)

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions.

### Quick Start

**Running Sanity Studio:**
```bash
npm run sanity:dev
```
Studio runs at `http://localhost:3333`

**Content Types:**
- **Case Study**: Client work with results, proof, testimonials
- **Service**: Service offerings with deliverables, outcomes, pricing
- **Press Release**: Press coverage
- **Page**: Static page content

**Homepage Content:**
- Edited in code (`app/page.tsx`)
- Includes: hero, proof bar, testimonials, FAQ, engagement options

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
- **Label:** 0.75rem (uppercase)

### Motion

- Fade + subtle translateY on scroll
- Timing: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Duration: 400-600ms
- No parallax effects

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

## Development Workflow

### Making Content Changes

1. **CMS Content** (Case Studies, Services):
   - Use Sanity Studio at `localhost:3333`
   - Changes appear live within ~60 seconds

2. **Homepage Content** (Hero, FAQ, etc.):
   - Edit `app/page.tsx`
   - Requires code deployment

3. **Navigation/CTAs**:
   - Edit `components/Header.tsx` and `components/Footer.tsx`
   - Requires code deployment

### Adding New Pages

1. Create directory in `app/`
2. Add `page.tsx` with metadata export
3. Update navigation in `components/Header.tsx`
4. Add to `app/sitemap.ts`

---

## Performance Targets

- **Lighthouse Performance:** 90+
- **First Contentful Paint:** < 1.5s
- **Cumulative Layout Shift:** < 0.1
- **Build output:** ~137 KB First Load JS (homepage)

---

## Accessibility

- Semantic HTML throughout
- Focus states on all interactive elements
- Color contrast: WCAG AA compliant
- Keyboard navigable
- Screen reader tested
- Reduced motion preference respected

---

## Conversion Optimization Features

✅ **Clear Value Proposition** - Hero explicitly states who it's for and what outcome to expect
✅ **Social Proof** - Metrics, case studies, testimonials throughout
✅ **Lead Qualification** - Contact form collects stage, budget, goal, timeline
✅ **Multiple CTAs** - "Book a call" appears in nav, hero, sections, footer
✅ **Trust Signals** - Client testimonials, quantified results, coverage proof
✅ **Clear Services** - 6 detailed service pages with deliverables and pricing
✅ **FAQ Section** - Addresses objections proactively
✅ **Analytics Tracking** - All conversion events instrumented

---

## Security

- No known vulnerabilities (CodeQL scanned)
- No secrets in code
- Environment variables for sensitive data
- HTTPS enforced (via Vercel)
- Content Security Policy headers recommended

---

## Maintenance

### Regular Updates

- **Monthly:** Review and update proof bar metrics
- **Quarterly:** Add new case studies, update services
- **As needed:** Update FAQ, testimonials, team bios

### Monitoring

- Check GA4 dashboard weekly for conversion rates
- Monitor Vercel analytics for performance
- Review Sanity Studio for content freshness

---

## Getting Help

### Documentation

- [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - Content management
- [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - Design system
- [Sanity Docs](https://www.sanity.io/docs) - CMS documentation
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation

### Support

For technical questions: dev@northandline.com

---

## License

Proprietary. All rights reserved.

---

## Changelog

### v1.1.0 - Conversion-Focused Overhaul (2026-01)

**Added:**
- Complete homepage redesign with conversion focus
- 6 service detail pages (/services/*)
- Enhanced contact form with qualification fields
- GA4 analytics integration with custom events
- Type-safe analytics helpers
- Dynamic sitemap and robots.txt
- Comprehensive content management documentation
- FAQ accordion component
- CTA button and CTA band components
- Service and case study card components
- Testimonial component

**Enhanced:**
- Header with "Book a call" CTA
- Contact form with stage/budget/goal/timeline fields
- Case Study schema with detailed fields
- New Service schema for CMS

**Technical:**
- Improved type safety throughout
- Reduced code duplication in analytics
- Better SEO with sitemap/robots
- All builds passing, zero security vulnerabilities

---

Built with precision. Maintained with care.

