# Quick Customization Guide

## Essential Updates (Do These First!)

### 1. Social Media Links (2 files)
**Files:** `/components/Navbar.tsx` and `/components/Footer.tsx`

Find and replace:
- `https://github.com/PLACEHOLDER` → Your GitHub URL
- `https://linkedin.com/in/PLACEHOLDER` → Your LinkedIn URL  
- `mailto:PLACEHOLDER@domain.com` → Your email

### 2. Your Name Throughout Site
If your name is not "Huzaifa Suri", find and replace in:
- `/pages/Home.tsx` - Hero section
- `/components/Navbar.tsx` - Site title
- `/components/Footer.tsx` - Copyright
- `/data/publications.json` - Author highlighting
- `/public/index.html` - Meta tags and title
- `README.md` and other docs

### 3. Personal Bio
**File:** `/pages/Home.tsx` (around line 37)

Replace this text with your own bio:
```typescript
<p className="text-muted-foreground max-w-2xl">
  Machine Learning Engineer focused on building reliable ML systems end-to-end—from
  research and prototyping to production deployment. 3+ years of experience in
  health/med-tech, with broad interests across AI/ML and system design. Passionate about
  the full ML lifecycle, from data to deployment.
</p>
```

## Content Updates

### Projects
**File:** `/data/projects.json`

Each project needs:
- `title` - Project name
- `slug` - URL-friendly identifier
- `description` - 1-2 sentence summary
- `tags` - Array of relevant tags (these become filterable!)
- `thumbnail` - Image URL (use Unsplash or your own)
- `link` - GitHub/demo URL

**Tip:** Tags are automatically extracted for the filter buttons. Use consistent tag names across projects.

### Publications
**File:** `/data/publications.json`

Each publication needs:
- `title` - Paper title
- `authors` - Array with your name included (will be auto-highlighted)
- `venue` - Conference or journal name
- `date` - Full date (YYYY-MM-DD)
- `year` - Year only (used for filtering)
- `link` - Paper URL (arXiv, DOI, etc.)

### Experience
**File:** `/data/experience.json`

- `endDate: null` means "Present"
- Dates format: "YYYY-MM" (e.g., "2024-01")
- Keep `highlights` to 2-3 key achievements

### Education
**File:** `/data/education.json`

- Similar date format as Experience
- Use `notes` for GPA, honors, focus areas, etc.

### Latest Updates
**File:** `/data/updates.json`

- Only the **3 most recent** are shown on homepage
- You can have more in the file if you want to keep history
- Date format: "YYYY-MM-DD"

## Styling Customization

### Change Primary Color
**File:** `/styles/globals.css`

For dark mode (line ~50):
```css
--primary: #3b82f6; /* Change this hex code */
```

For light mode (line ~11):
```css
--primary: #030213; /* Change this hex code */
```

### Adjust Dark Background
Currently a blue-grey. For pure dark:

```css
.dark {
  --background: #0a0a0a;  /* Almost black */
  --card: #1a1a1a;        /* Slightly lighter */
}
```

### Add Google Fonts
Already using Inter. To change:

1. Update `/public/index.html` Google Fonts link
2. Update the `font-family` in the `<style>` tag

## Advanced Customization

### Add New Pages

1. Create component in `/pages/YourPage.tsx`:
```typescript
import { usePageTitle } from '../hooks/usePageTitle';

export function YourPage() {
  usePageTitle('Page Title — Huzaifa Suri');
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Your content */}
    </div>
  );
}
```

2. Add route in `/App.tsx`:
```typescript
<Route path="/your-page" element={<YourPage />} />
```

3. Add link in `/components/Navbar.tsx`:
```typescript
{ to: '/your-page', label: 'Your Page' }
```

### Modify Layout Widths

Common max-width classes used:
- `max-w-4xl` - Home, Publications, 404
- `max-w-7xl` - Projects (wider for grid)
- `max-w-5xl` - Resume

Change these to:
- `max-w-2xl` - Narrower
- `max-w-6xl` - Medium-wide  
- `max-w-screen-xl` - Very wide

### Add Analytics

Add to `/public/index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Change Button Styles

Buttons use these classes by default:
```typescript
// Primary button
className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"

// Secondary button  
className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90"

// Outline button
className="px-6 py-2 border border-border rounded-lg hover:bg-accent"
```

Adjust `px-6 py-2` for different sizes, `rounded-lg` for border radius.

## Project-Specific Touches

### Use Your Own Project Images

1. Add images to `/public/assets/projects/`
2. Update `projects.json`:
```json
"thumbnail": "/assets/projects/my-project.png"
```

### Highlight Different Name in Publications

Change "Huzaifa Suri" to your name in:
- `/pages/Publications.tsx` (line ~38): `const isHuzaifa = author === 'Your Name';`

### Adjust Mobile Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up

Example: Change project grid from 3 to 4 columns on large screens:
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

## Common Issues

**Q: My changes aren't showing up**
- A: Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) or clear browser cache

**Q: Dark mode not working**
- A: Check browser localStorage - clear it and try again

**Q: Images broken on deployed site**
- A: Use absolute paths starting with `/` for local images

**Q: 404 errors on page refresh (deployed)**
- A: Configure your hosting for SPA routing or use HashRouter

## File Structure Reference

```
/
├── components/
│   ├── Navbar.tsx          ← Navigation + theme toggle
│   └── Footer.tsx          ← Footer
├── context/
│   └── ThemeContext.tsx    ← Dark/light mode logic
├── data/                   ← ALL CONTENT HERE
│   ├── updates.json
│   ├── experience.json
│   ├── education.json
│   ├── projects.json
│   └── publications.json
├── pages/                  ← Page components
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── Publications.tsx
│   ├── Resume.tsx
│   └── NotFound.tsx
├── hooks/
│   └── usePageTitle.ts     ← Page title management
├── styles/
│   └── globals.css         ← Theme colors + global styles
└── public/
    ├── assets/
    │   ├── resume.pdf      ← YOUR RESUME HERE
    │   └── projects/       ← Project images (optional)
    └── index.html          ← SEO meta tags
```

---

**Pro tip:** Make changes incrementally and test locally with `npm run dev` before deploying!
