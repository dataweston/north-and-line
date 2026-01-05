# Content Management Guide

This guide explains how to manage content on the North & Line website using Sanity CMS.

---

## Getting Started with Sanity Studio

### Accessing Sanity Studio

1. **Local Development:**
   ```bash
   npm run sanity:dev
   ```
   Studio runs at `http://localhost:3333`

2. **Production Studio:**
   Visit your deployed Sanity Studio URL (typically `yourproject.sanity.studio`)

3. **First-time Login:**
   - Sign in with Google or GitHub
   - Must be added as a project member by an admin

---

## Adding a Case Study

Case studies showcase client work with quantified results and proof.

### Required Fields

1. **Title** - Clear, descriptive title (e.g., "Series B Funding Announcement")
2. **Slug** - Auto-generated URL-friendly version (e.g., `series-b-funding-announcement`)
3. **Sector** - Choose from: Healthcare, Technology, B2B SaaS, Consumer, Climate, etc.
4. **Stage** - Client company stage (Pre-seed, Seed, Series A, Growth, etc.)
5. **Year** - Year of engagement (e.g., "2024")
6. **Client Objective** - Brief statement of what client wanted to achieve
7. **Challenge** - The problem or opportunity (3-5 sentences)
8. **Strategy** - The strategic approach developed (3-5 sentences)
9. **Execution** - What North & Line actually did—specific tactics (4-6 sentences)

### Results Section

Add 3-6 measurable results. Each result includes:
- **Metric**: Quantified outcome (e.g., "47 media placements")
- **Timeframe**: When achieved (e.g., "in 90 days")

**Examples:**
- Metric: "Coverage in TechCrunch, The Information, and 12 national outlets"
  Timeframe: "within 48 hours"
- Metric: "15M earned impressions"
  Timeframe: "in 90 days"

### Proof Documentation

**Coverage Links** (optional but recommended):
- Outlet Name: "TechCrunch"
- URL: Full article URL
- Headline: Article title

**Coverage Screenshots** (optional):
- Upload screenshots of media placements
- Use high-quality images

### Testimonial (optional)

- **Quote**: Client testimonial (2-4 sentences)
- **Author**: Client name
- **Role**: Job title
- **Company**: Company name

### Display Settings

- **Cover Image**: Featured image (optional)
- **Featured**: Check to display on homepage (select top 3 only)
- **Published At**: Publication date (auto-set to today)

### Steps to Add

1. Navigate to "Case Study" in Sanity Studio
2. Click "Create new"
3. Fill in all required fields
4. Add at least 3 results with metrics and timeframes
5. Add coverage links or screenshots for proof
6. Check "Featured" if this should appear on homepage
7. Click "Publish"

---

## Adding a Service

Services describe North & Line's offerings with clear deliverables and outcomes.

### Required Fields

1. **Title** - Service name (e.g., "Narrative & Positioning")
2. **Slug** - Auto-generated URL (e.g., `narrative-positioning`)
3. **Short Pitch** - One-liner for service cards (50-80 characters)
4. **Description** - What this service is (3-5 sentences)
5. **What It Is Not** - Clarifications about scope (optional, 2-3 sentences)

### Best For Section

Add 2-5 bullet points describing ideal clients:
- "VC-backed startups pre-launch"
- "Companies repositioning"
- "First-time founders"

### Outcomes

Add 3-6 measurable outcomes clients can expect:
- "Consistent messaging across all external communications"
- "Improved media pitch response rates (typical increase: 30-50%)"
- "Foundation for all future PR, marketing, and sales efforts"

### Deliverables

Add 3-8 concrete deliverables:
- "Narrative audit (competitive analysis, current state assessment)"
- "Core message framework"
- "Spokesperson preparation"

### Process Steps (optional)

Define the process timeline:
- **Step**: "01"
- **Title**: "Discovery & Audit"
- **Description**: Brief explanation
- **Timeline**: "Week 1-2"

### Additional Settings

- **Related Case Studies**: Link to relevant case studies
- **Pricing Note**: Optional pricing guidance (e.g., "From $5,000/month")
- **Display Order**: Number to control ordering on services page (lower = first)
- **Featured**: Check to display on homepage services preview

### Steps to Add

1. Navigate to "Service" in Sanity Studio
2. Click "Create new"
3. Fill in title, slug, short pitch, and description
4. Add "Best For" criteria (2-5 items)
5. Add outcomes (3-6 items)
6. Add deliverables (3-8 items)
7. Optional: Add process steps
8. Set display order number
9. Check "Featured" if this should appear on homepage
10. Click "Publish"

---

## Managing Existing Content

### Editing Content

1. Find the content item in Sanity Studio
2. Click to edit
3. Make changes
4. Click "Publish" to make live

### Unpublishing Content

1. Open the content item
2. Click "Unpublish" button
3. Content will no longer appear on the website

### Deleting Content

1. Open the content item
2. Click the "..." menu
3. Select "Delete"
4. Confirm deletion

**Warning**: Deletion is permanent and cannot be undone.

---

## Homepage Content Editing

Homepage content is managed in code, not Sanity CMS.

### To Update Hero Section

File: `app/page.tsx`

Look for the hero section and edit:
```tsx
<h1 className="text-display font-medium text-balance leading-tight">
  Earned media and positioning for VC-backed startups that need coverage that drives outcomes.
</h1>
```

### To Update Proof Bar Metrics

File: `app/page.tsx`

Find the "Proof Bar" section:
```tsx
<div className="text-display font-medium">150M+</div>
<div className="mt-2 text-body text-nl-gray">Earned impressions delivered</div>
```

### To Update FAQ Items

File: `app/page.tsx`

Edit the `faqItems` array at the top of the file.

### To Update CTAs

The main "Book a call" CTA text and link can be changed in:
- Header: `components/Header.tsx`
- CTAButton default props: `components/CTAButton.tsx`
- CTABand default props: `components/CTABand.tsx`

---

## Best Practices

### Case Studies

- **Always include numbers**: "47 placements" not "many placements"
- **Always include timeframes**: "in 90 days" not "quickly"
- **Provide proof**: Links to actual coverage or screenshots
- **Be specific in execution**: What you actually did, not vague claims
- **Feature your best 3**: Only mark top 3 case studies as "Featured"

### Services

- **Be clear about deliverables**: Concrete outputs, not promises
- **Define "Best For"**: Help prospects self-qualify
- **Show outcomes**: Measurable results, not activities
- **Keep short pitch brief**: Must fit on service cards (~80 chars max)

### General Guidelines

- **Write for clarity**: No marketing fluff or buzzwords
- **Verify before publishing**: Check all links, numbers, and names
- **Update regularly**: Keep case studies and metrics current
- **Maintain consistency**: Follow existing tone and structure

---

## Publishing Workflow

1. **Draft** → Create content, fill in required fields
2. **Review** → Check accuracy, links, and formatting
3. **Publish** → Make live on website (usually appears within 60 seconds)
4. **Verify** → Check the live website to confirm proper display

---

## Getting Help

### Technical Issues

- **Sanity Studio not loading**: Check internet connection, clear cache
- **Can't publish**: Ensure all required fields are filled
- **Content not appearing**: Wait 60 seconds for cache refresh, then hard reload page

### Content Questions

- Review existing case studies and services for examples
- Follow the structure and tone of published content
- Contact North & Line team for guidance on messaging

---

## Analytics Events

The website tracks these conversion events automatically:

- `cta_book_call_click`: Fired when "Book a call" CTA is clicked (tracks location)
- `contact_form_submit`: Fired when contact form is submitted
- `case_study_view`: Fired when case study page is viewed
- `service_page_view`: Fired when service page is viewed

No action needed—these events are instrumented in code and tracked via Google Analytics 4.

---

## Deployment

Content changes publish automatically when you click "Publish" in Sanity Studio. No deployment needed.

Code changes (layout, design, components) require:
```bash
npm run build
npm run start
```

For production deployment, push to `main` branch. Vercel handles the rest.

---

## Quick Reference

### Content Types

| Type | Purpose | Required Fields | Optional |
|------|---------|----------------|----------|
| Case Study | Showcase client work | Title, sector, year, challenge, strategy, execution, results | Testimonial, images, coverage links |
| Service | Describe offerings | Title, pitch, description, best-for, outcomes, deliverables | Process, pricing, related cases |

### Homepage Sections (in code)

1. Hero (value prop + CTA)
2. Proof bar (metrics)
3. Services preview (top 3 featured)
4. Case studies preview (top 3 featured)
5. Approach preview
6. Testimonials
7. Engagement options
8. FAQ
9. Final CTA

---

For additional support, refer to the [Sanity documentation](https://www.sanity.io/docs) or contact the development team.
