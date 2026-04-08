# @camilavalencia/ui

Personal design system — React components with Tailwind v4 design tokens.

- **Storybook**: https://camiiva.github.io/camilavalencia-ui
- **npm**: https://www.npmjs.com/package/@camilavalencia/ui

---

## Requirements

- React 18+
- Tailwind CSS v4

---

## Installation

```bash
npm install @camilavalencia/ui
```

---

## Setup

### 1. Import the design tokens

In your global CSS file, import Tailwind and the library tokens:

```css
/* globals.css */
@import "tailwindcss";
@import "@camilavalencia/ui/styles";
```

### 2. Load the fonts

The library uses **Space Grotesk** (headings) and **IBM Plex Sans** (body). Load them in your layout and inject the CSS variables:

```tsx
/* layout.tsx (Next.js) */
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

---

## Components

### Button

```tsx
import { Button } from "@camilavalencia/ui";

// Primary (default)
<Button href="/work">View case study</Button>

// With variant and icon
<Button href="/work" variant="secondary" icon={<ArrowIcon />}>
  Learn more
</Button>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link destination |
| `children` | `ReactNode` | — | Button label |
| `variant` | `"primary" \| "secondary" \| "tertiary" \| "tertiary-no-padding"` | `"primary"` | Visual style |
| `icon` | `ReactNode` | — | Icon rendered after the label (20px) |
| `className` | `string` | — | Additional classes |

---

### NavBar

```tsx
import { NavBar } from "@camilavalencia/ui";

<NavBar
  links={[
    { label: "WORK", href: "/" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ]}
  logo={<span>CV</span>}
/>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `links` | `{ label: string; href: string }[]` | — | Navigation links |
| `logo` | `ReactNode` | — | Optional logo slot |

---

### Footer

```tsx
import { Footer } from "@camilavalencia/ui";

<Footer
  links={[
    { label: "LinkedIn", href: "https://linkedin.com/in/you", external: true },
    { label: "hello@yoursite.com", href: "mailto:hello@yoursite.com" },
  ]}
  light
/>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `links` | `{ label: string; href: string; external?: boolean }[]` | — | Footer links |
| `light` | `boolean` | `false` | Light variant for use on light backgrounds |

---

### ProjectCard

```tsx
import { ProjectCard } from "@camilavalencia/ui";
import Image from "next/image";

<ProjectCard
  title="Redesigning the onboarding flow"
  description="A complete overhaul reducing drop-off by 40%."
  company="Acme Corp"
  year="2024"
  href="/projects/onboarding"
  image="/my-image.jpg"
  featured
  ctaLabel="Read case study"
  renderImage={({ src, alt, className }) => (
    <Image src={src} alt={alt} fill className={className} />
  )}
/>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Project title |
| `description` | `string` | — | Short description |
| `company` | `string` | — | Client or company name |
| `year` | `string` | — | Year |
| `href` | `string` | — | Link to project page |
| `image` | `string` | `/project-02.png` | Image path |
| `featured` | `boolean` | `false` | Adds top border and hover background |
| `compact` | `boolean` | `false` | Compact grid layout |
| `ctaLabel` | `string` | `"View case study"` | CTA button label |
| `renderImage` | `(props) => ReactNode` | `<img>` | Custom image renderer (use for `next/image`) |

---

### ProjectHeader

```tsx
import { ProjectHeader } from "@camilavalencia/ui";

<ProjectHeader
  title="Redesigning the onboarding flow"
  description="A complete overhaul of the user onboarding experience."
  role="Lead Product Designer"
  projectType="Product Design"
  deliverables={["Research", "UX Design", "UI Design"]}
  client="Acme Corp"
  backHref="/"
  backLabel="← Back to work"
/>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Project title |
| `description` | `string` | — | Project description |
| `role` | `string` | — | Your role |
| `projectType` | `string` | — | Type of project |
| `deliverables` | `string[]` | — | List of deliverables |
| `client` | `string` | — | Client name |
| `backHref` | `string` | `"/"` | Back link destination |
| `backLabel` | `string` | `"← Back"` | Back link label |

---

### ProjectSection

```tsx
import { ProjectSection } from "@camilavalencia/ui";

<ProjectSection
  sectionId="research"
  title="Research & Discovery"
  body="We conducted 12 user interviews to understand pain points."
  image="/research.jpg"
  imageAlt="Research findings board"
/>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `sectionId` | `string` | — | HTML id used for anchor links |
| `title` | `string` | — | Section title |
| `body` | `ReactNode` | — | Section content (string or JSX) |
| `image` | `string` | — | Image path |
| `imageAlt` | `string` | `""` | Image alt text |

---

### TableOfContents

```tsx
import { TableOfContents } from "@camilavalencia/ui";

<TableOfContents
  sections={[
    { id: "research", title: "Research & Discovery" },
    { id: "design", title: "Design" },
    { id: "outcome", title: "Outcome" },
  ]}
/>
```

**Props**

| Prop | Type | Description |
|---|---|---|
| `sections` | `{ id: string; title: string }[]` | Sections to link to — `id` must match the target element's HTML id |

---

### CursorGlow

Renders a mint accent dot that follows the cursor on desktop. No props.

```tsx
import { CursorGlow } from "@camilavalencia/ui";

<CursorGlow />
```

---

## Design tokens

All tokens are available as Tailwind utility classes after importing `@camilavalencia/ui/styles`.

### Colors

| Token | Class | Value |
|---|---|---|
| Abyss | `bg-bg` | `#071e21` |
| Void | `bg-footer` / `bg-text-dark` | `#0a2326` |
| Deep Sea | `bg-surface` | `#0b3439` |
| Lagoon | `bg-border` / `border-border` | `#133e43` |
| Tide | `bg-img-bg` | `#185259` |
| Glow | `bg-accent` / `text-accent` | `#33fab3` |
| Mist | `bg-content-border` / `border-content-border` | `#cce1e4` |
| Frost | `bg-content-placeholder` | `#dbe9ea` |
| Cloud | `bg-content-bg` | `#eff9fa` |

### Typography

| Class | Font |
|---|---|
| `font-heading` | Space Grotesk |
| `font-body` | IBM Plex Sans |

### Border radius

| Class | Value |
|---|---|
| `rounded-card` | `12px` |
| `rounded-pill` | `999px` |

### Transitions

| Class | Value |
|---|---|
| `duration-fast` | `150ms` |
| `duration-default` | `200ms` |
| `duration-slow` | `300ms` |

---

## License

MIT
