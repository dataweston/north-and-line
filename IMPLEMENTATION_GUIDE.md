# North & Line — Implementation Guide

This document maps Figma design specifications to code implementation.

---

## Design Token Mapping

### Colors

| Figma Token | CSS Variable | Tailwind Class | Hex |
|-------------|--------------|----------------|-----|
| Background / Cream | `--nl-cream` | `bg-nl-cream` | #F9F8F5 |
| Text / Primary | `--nl-black` | `text-nl-black` | #0A0A0A |
| Text / Secondary | `--nl-gray` | `text-nl-gray` | #555555 |
| Border / Light | `--nl-light-gray` | `border-nl-light-gray` | #CCCCCC |
| Text / Muted | `--nl-mid-gray` | `text-nl-mid-gray` | #888888 |

### Typography Scale

| Figma Style | CSS Class | Font | Size | Line Height | Letter Spacing |
|-------------|-----------|------|------|-------------|----------------|
| Display | `text-display` | GT America Medium | clamp(2.5rem, 6vw, 5rem) | 1.05 | -0.02em |
| Headline | `text-headline` | GT America Medium | clamp(1.75rem, 4vw, 3rem) | 1.1 | -0.015em |
| Subhead | `text-subhead` | GT America Regular | clamp(1.25rem, 2vw, 1.5rem) | 1.3 | -0.01em |
| Body | `text-body` | GT America Regular | 1rem | 1.6 | 0 |
| Caption | `text-caption` | GT America Regular | 0.875rem | 1.5 | 0.01em |
| Label | `.label` | GT America Regular | 0.75rem | 1.4 | 0.2em (uppercase) |

### Spacing System

| Figma Spacing | Tailwind Class | Value |
|---------------|----------------|-------|
| Page margin | `px-6 md:px-10 lg:px-16` | 24px → 40px → 64px |
| Section padding | `py-20 md:py-28 lg:py-36` | 80px → 112px → 144px |
| Grid gutter | `gap-8` | 32px |
| Component spacing | `space-y-8` | 32px |

---

## Component Specifications

### Header

```
Height: 80px (mobile) / 96px (desktop)
Position: Fixed, top
Background: Transparent → Cream/95% on scroll
Z-index: 50

Logo:
- Font: GT America Medium
- Size: 1.25rem (mobile) / 1.5rem (desktop)
- Plus symbol: 16px × 16px, rotates 45° on hover

Navigation:
- Font: Caption size, uppercase
- Letter spacing: 0.1em
- Active state: Black text + 1px underline
- Hover: Gray → Black transition
```

### Footer

```
Border: 1px solid Light Gray (top)
Padding: 64px (mobile) / 80px (desktop) vertical

Grid: 4 columns on desktop
- Brand: span 4
- Navigation: span 3
- Contact: span 3
- Location: span 2

Bottom bar:
- Border top: 1px Light Gray
- Margin top: 64px
- Padding top: 32px
```

### Section Component

```
Vertical padding: 80px → 112px → 144px (responsive)
Max width: 1280px
Horizontal padding: 24px → 40px → 64px (responsive)

Variants:
- Default: Cream background
- White: White (#FFFFFF) background
- Dark: Black background, Cream text
```

### Page Header

```
Padding top: 128px (mobile) / 160px (desktop)
Padding bottom: 64px (mobile) / 96px (desktop)
Border bottom: 1px Light Gray

Label: Small text, uppercase, Gray
Title: Display size, Medium weight
Subtitle: Subhead size, Gray, max-width 640px
```

---

## Animation Specifications

### Fade Up (Primary)

```css
Initial: opacity: 0, translateY: 30px
Final: opacity: 1, translateY: 0
Duration: 600ms
Easing: cubic-bezier(0.25, 0.1, 0.25, 1)
Trigger: Scroll into view (50px margin)
```

### Stagger Delays

```
Item 1: 0ms
Item 2: 100ms
Item 3: 200ms
Item 4: 300ms
...
```

### Hover Transitions

```
Duration: 300ms
Easing: ease (default)

Link underline:
- Width: 0 → 100%
- Duration: 300ms

Plus symbol rotation:
- Transform: rotate(0) → rotate(45deg)
- Duration: 300ms
```

### Scroll Progress

```
Position: Fixed, top: 0
Height: 1px
Background: Black
Transform origin: left
Animation: Tied to scroll position via Framer Motion useScroll
```

---

## Grid System

### 12-Column Grid

```css
.grid-editorial {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--margin-page);
}
```

### Common Layouts

**Two Column (4 + 8)**
```html
<div class="md:col-span-4"><!-- Label/sidebar --></div>
<div class="md:col-span-8"><!-- Main content --></div>
```

**Narrow Content**
```html
<div class="max-w-prose mx-auto"><!-- max-width: 680px --></div>
```

**Wide Content**
```html
<div class="max-w-site mx-auto"><!-- max-width: 1280px --></div>
```

---

## Interactive Elements

### Links

```css
.link-editorial {
  color: #555555;
  position: relative;
}

.link-editorial::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #0A0A0A;
  transition: width 300ms;
}

.link-editorial:hover {
  color: #0A0A0A;
}

.link-editorial:hover::after {
  width: 100%;
}
```

### Buttons

Primary style uses link aesthetic with plus symbol:

```html
<button class="inline-flex items-center gap-3 group">
  <span>Button text</span>
  <span class="plus-symbol w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
</button>
```

### Form Inputs

```css
input, textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid #CCCCCC;
  padding-bottom: 12px;
  font-size: 1rem;
  transition: border-color 300ms;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #0A0A0A;
}

::placeholder {
  color: #CCCCCC;
}
```

---

## Plus Symbol Implementation

The plus symbol is a core brand element, implemented as CSS pseudo-elements:

```css
.plus-symbol {
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
}

.plus-symbol::before,
.plus-symbol::after {
  content: '';
  position: absolute;
  background: currentColor;
  transition: transform 300ms;
}

.plus-symbol::before {
  width: 100%;
  height: 1px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.plus-symbol::after {
  width: 1px;
  height: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
```

### Usage Contexts

1. **Logo mark** - Follows "North & Line" text
2. **CTA indicator** - Rotates 45° on hover
3. **List bullet** - In outcome lists
4. **Scroll progress** - Fixed position indicator (Phase 2)

---

## Responsive Breakpoints

| Breakpoint | Tailwind | Width |
|------------|----------|-------|
| Mobile | Default | 0px |
| Tablet | `md:` | 768px |
| Desktop | `lg:` | 1024px |
| Wide | `xl:` | 1280px |

### Mobile-First Approach

All styles are mobile-first. Desktop overrides use `md:` and `lg:` prefixes.

```html
<!-- Example: Padding that increases at breakpoints -->
<div class="px-6 md:px-10 lg:px-16">
```

---

## Image Treatment

### Grayscale Filter

All images use grayscale with enhanced contrast:

```css
.grayscale-editorial {
  filter: grayscale(100%) contrast(1.1);
  transition: filter 400ms;
}

.grayscale-editorial:hover {
  filter: grayscale(0%) contrast(1);
}
```

### Cloudinary Transformations

When using Cloudinary CDN, apply:
- `e_grayscale` - Grayscale
- `e_contrast:10` - Slight contrast boost
- `f_auto` - Auto format (WebP/AVIF)
- `q_auto` - Auto quality

---

## Accessibility Checklist

- [ ] All interactive elements have visible focus states
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Skip link for keyboard navigation
- [ ] ARIA labels on icon-only buttons
- [ ] Reduced motion preference respected
- [ ] Screen reader testing completed

### Focus States

```css
*:focus-visible {
  outline: 1px solid #0A0A0A;
  outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance Guidelines

1. **Fonts**: Self-host GT America as WOFF2 with `font-display: swap`
2. **Images**: Use Cloudinary for responsive images with lazy loading
3. **JavaScript**: Minimize client-side JS; use Server Components
4. **CSS**: Tailwind purges unused styles automatically
5. **Animations**: Use CSS transforms only (no layout shifts)

---

## QA Checklist

- [ ] All pages render without console errors
- [ ] Navigation works on all pages
- [ ] Forms submit successfully
- [ ] Animations are smooth (60fps)
- [ ] Mobile navigation opens/closes properly
- [ ] Links have correct hover states
- [ ] Typography scales correctly across breakpoints
- [ ] Images load with grayscale filter
- [ ] Footer links are functional
- [ ] Meta tags are present on all pages
