# Portfolio Website Setup Guide

This guide will help you customize and deploy your portfolio website.

## Quick Start Checklist

- [ ] Update personal information and content
- [ ] Replace placeholder social media links
- [ ] Add your headshot photo (optional - currently using placeholder)
- [ ] Add your resume PDF
- [ ] Customize color scheme (optional)
- [ ] Deploy to GitHub Pages

## 1. Update Personal Content

### Social Media Links

Update the following files with your actual social media URLs:

**`/components/Navbar.tsx`** (lines ~18-20):
```typescript
const socialLinks = [
  { href: 'https://github.com/YOUR_USERNAME', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/YOUR_USERNAME', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:your.email@domain.com', icon: Mail, label: 'Email' },
];
```

**`/components/Footer.tsx`** (lines ~5-7):
```typescript
const socialLinks = [
  { href: 'https://github.com/YOUR_USERNAME', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/YOUR_USERNAME', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:your.email@domain.com', icon: Mail, label: 'Email' },
];
```

### Updates (`/data/updates.json`)

Replace with your latest 3 updates:
```json
[
  {
    "date": "2026-01-01",
    "text": "Your latest update here"
  }
]
```

### Experience (`/data/experience.json`)

Update with your work history:
```json
{
  "role": "Your Job Title",
  "company": "Company Name",
  "location": "City, State",
  "startDate": "2024-01",
  "endDate": null,
  "highlights": [
    "Achievement or responsibility #1",
    "Achievement or responsibility #2"
  ]
}
```

### Education (`/data/education.json`)

Update with your education:
```json
{
  "degree": "Your Degree",
  "institution": "University Name",
  "location": "City, State",
  "startDate": "2020-09",
  "endDate": "2024-05",
  "notes": "Optional: GPA, honors, focus area, etc."
}
```

### Projects (`/data/projects.json`)

Add your projects:
```json
{
  "title": "Project Name",
  "slug": "project-name",
  "description": "Brief 1-2 sentence description",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "thumbnail": "https://your-image-url.com/image.jpg",
  "link": "https://github.com/yourusername/project"
}
```

**Note:** You can use Unsplash URLs for thumbnails or upload your own images.

### Publications (`/data/publications.json`)

Add your publications:
```json
{
  "title": "Paper Title",
  "authors": ["Co-author", "Huzaifa Suri", "Another Author"],
  "venue": "Conference or Journal Name",
  "date": "2025-06-01",
  "year": 2025,
  "link": "https://arxiv.org/abs/your-paper"
}
```

**Important:** Keep "Huzaifa Suri" in the authors array - it will be automatically highlighted. Replace with your name if different.

## 2. Add Your Resume

Replace `/public/assets/resume.pdf` with your actual resume PDF. The current file is just a placeholder.

## 3. Add Your Headshot (Optional)

The site currently uses a placeholder image from Unsplash. To use your own photo:

1. Add your headshot to `/public/assets/headshot.jpg` (recommended size: 500x500px)
2. Update `/pages/Home.tsx` line 26 to use the local image:

```typescript
<img
  src="/assets/headshot.jpg"
  alt="Huzaifa Suri"
  className="w-32 h-32 rounded-full object-cover border-2 border-border"
/>
```

## 4. Customize Colors (Optional)

The site uses a blue-grey dark theme by default. To customize colors, edit `/styles/globals.css`:

**Dark Mode Colors** (lines 44-78):
```css
.dark {
  --background: #1e293b;      /* Main background */
  --foreground: #f1f5f9;      /* Main text color */
  --primary: #3b82f6;         /* Primary accent (buttons, links) */
  --muted-foreground: #94a3b8; /* Secondary text */
  /* ... other colors */
}
```

**Light Mode Colors** (lines 3-42):
```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  /* ... other colors */
}
```

## 5. Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:5173 in your browser.

## 6. Deploy to GitHub Pages

### Option A: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v1
        id: deployment
```

2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push to main branch - your site will deploy automatically

### Option B: Manual Deploy

```bash
# Build the site
npm run build

# Deploy the dist/ folder to GitHub Pages
# (Use gh-pages package or manually upload)
```

## 7. Custom Domain (Optional)

1. Add a `CNAME` file to `/public/` with your domain:
```
yourdomain.com
```

2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

### Images not loading
- Check that image URLs are correct
- Ensure resume.pdf exists in `/public/assets/`
- For local images, use paths starting with `/assets/`

### 404 on GitHub Pages routes
- Make sure you're using HashRouter if not using a custom domain, OR
- Add a 404.html redirect if using BrowserRouter

### Theme not persisting
- Check browser console for localStorage errors
- Clear browser cache and try again

## Support

For issues or questions, open an issue on GitHub.

---

## Next Steps

After setup, consider:
- Adding Google Analytics or similar
- Setting up a contact form (requires backend)
- Adding a blog section
- Creating project detail pages
- Adding more interactive elements

Good luck with your portfolio! 🚀
