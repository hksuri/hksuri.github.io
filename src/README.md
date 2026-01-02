# Huzaifa Suri - Portfolio Website

A minimal, modern portfolio website for Machine Learning Engineer Huzaifa Suri, built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready_to_Deploy-success)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-cyan)

## ✨ Features

- 🌙 **Dark mode default** with blue-grey theme and light mode toggle
- 📱 **Fully responsive** design (mobile, tablet, desktop)
- 🎨 **Smooth transitions** and subtle hover effects throughout
- 📊 **Projects grid** with tag filtering and search
- 📚 **Publications list** with year filtering and author highlighting
- 📄 **Resume viewer** with PDF embedding and download
- ⚡ **Fast, static site** ready for GitHub Pages deployment
- ♿ **Accessible** with keyboard navigation and ARIA labels
- 🎯 **SEO optimized** with proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Customization

**See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions.**

### Essential Steps:

1. **Update social links** in `/components/Navbar.tsx` and `/components/Footer.tsx`
2. **Edit content** in `/data/*.json` files (projects, publications, experience, etc.)
3. **Replace resume** at `/public/assets/resume.pdf`
4. **Optional: Add headshot** at `/public/assets/headshot.jpg`

### Content Files

All content is managed through JSON files in `/data/`:

- `updates.json` - Latest 3 updates shown on homepage
- `experience.json` - Work experience timeline
- `education.json` - Educational background
- `projects.json` - Project portfolio with filtering
- `publications.json` - Research publications with highlighting

## 🎨 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling and theming
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📦 Project Structure

```
/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation with theme toggle
│   └── Footer.tsx      # Site footer
├── context/            # React contexts
│   └── ThemeContext.tsx # Dark/light mode state
├── data/               # Content (JSON files)
│   ├── updates.json
│   ├── experience.json
│   ├── education.json
│   ├── projects.json
│   └── publications.json
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Projects.tsx    # Projects grid with filters
│   ├── Publications.tsx # Publications list
│   ├── Resume.tsx      # Resume viewer
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   └── usePageTitle.ts # Page title management
├── styles/             # Global styles
│   └── globals.css     # Tailwind config + theme
└── public/             # Static assets
    ├── assets/
    │   ├── resume.pdf  # Your resume
    │   └── projects/   # Project images (optional)
    └── index.html      # HTML entry point
```

## 🚢 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages** in repository settings:
   - Settings → Pages → Source: "GitHub Actions"

2. **Push to main branch** - the included workflow will automatically build and deploy

3. **Optional: Custom domain**
   - Add `CNAME` file to `/public/` with your domain
   - Configure DNS with your provider

### Manual Build

```bash
npm run build
```

Output will be in `dist/` directory. Upload to any static hosting service.

### Base Path Configuration

If deploying to a subdirectory (e.g., `username.github.io/portfolio`):

Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio/',  // Your repo name
  // ...
});
```

## 🎯 Features Breakdown

### Home Page
- Hero section with headshot and bio
- Latest 3 updates
- Experience timeline
- Education section
- Quick links to other pages

### Projects Page
- Responsive grid (1-3 columns)
- Tag-based filtering
- Search functionality
- Smooth hover effects
- External links to GitHub/demos

### Publications Page
- Academic-style list view
- Year filtering
- Author name highlighting
- Links to papers (arXiv, DOI, etc.)

### Resume Page
- PDF viewer (embedded)
- Download button
- Fallback for browsers without PDF support

### Global Features
- Fixed navbar with smooth scrolling
- Theme toggle (persists to localStorage)
- Mobile-responsive hamburger menu
- Consistent footer across pages
- SEO-optimized titles per page

## 🎨 Customization

### Colors

Edit `/styles/globals.css`:

**Dark mode** (default):
```css
.dark {
  --background: #1e293b;  /* Blue-grey */
  --primary: #3b82f6;     /* Blue accent */
  /* ... */
}
```

**Light mode**:
```css
:root {
  --background: #ffffff;
  --primary: #030213;
  /* ... */
}
```

### Fonts

Inter is loaded from Google Fonts. To change:

1. Update font link in `/public/index.html`
2. Update `font-family` in the `<style>` tag

### Layout

Common width constraints:
- Home, Publications: `max-w-4xl`
- Projects: `max-w-7xl` (wider for grid)
- Resume: `max-w-5xl`

## 📊 Performance

- Lighthouse score targets: 90+ across all metrics
- Lazy loading for images
- Optimized bundle size with Vite
- Smooth 60fps animations
- Fast page loads with static generation

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Focus states visible
- Screen reader friendly

## 🐛 Troubleshooting

**Images not loading?**
- Check URLs in JSON files
- Verify `/public/assets/` folder contents
- Use absolute paths starting with `/`

**Theme not persisting?**
- Check browser localStorage
- Clear cache and reload

**404 on page refresh (deployed)?**
- Configure hosting for SPA routing
- Or use `HashRouter` instead of `BrowserRouter`

**Build errors?**
- Run `npm ci` to reinstall dependencies
- Check TypeScript errors with `npm run lint`

## 📄 License

© 2026 Huzaifa Suri. All rights reserved.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📚 Documentation

- [Setup Guide](./SETUP_GUIDE.md) - Detailed setup instructions
- [Customization Guide](./CUSTOMIZATION_GUIDE.md) - Quick reference for common changes

---

Built with ❤️ using React, TypeScript, and Tailwind CSS