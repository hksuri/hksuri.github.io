# 🚀 Getting Started with Your Portfolio

Welcome! This guide will get you up and running in **5 minutes**.

## ⚡ Quick Setup (5 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open http://localhost:5173 to see your site!

### Step 3: Update Social Links

**Files to edit:**
- `/components/Navbar.tsx` (lines ~18-20)
- `/components/Footer.tsx` (lines ~5-7)

Replace:
- `https://github.com/PLACEHOLDER` → Your GitHub
- `https://linkedin.com/in/PLACEHOLDER` → Your LinkedIn
- `mailto:PLACEHOLDER@domain.com` → Your email

### Step 4: Add Your Content

Edit these JSON files in `/data/`:
- ✅ `updates.json` - Your latest 3 updates
- ✅ `experience.json` - Work history
- ✅ `education.json` - Degrees
- ✅ `projects.json` - Portfolio projects
- ✅ `publications.json` - Research papers

**Tip:** Keep the same structure as the examples!

### Step 5: Replace Resume

Add your resume PDF to:
```
/public/assets/resume.pdf
```

## ✨ Optional Enhancements

### Add Your Headshot
1. Save your photo as `/public/assets/headshot.jpg`
2. Update `/pages/Home.tsx` line 26 to use local image

### Change Colors
Edit `/styles/globals.css`:
- Line ~50: Dark mode colors
- Line ~11: Light mode colors

### Customize Bio
Edit `/pages/Home.tsx` around line 37

## 📝 What's Included

✅ **4 Pages:**
- Home (hero, updates, experience, education)
- Projects (grid with filters)
- Publications (list with year filter)
- Resume (PDF viewer)

✅ **Features:**
- Dark mode (default)
- Responsive design
- Smooth animations
- Search & filters
- SEO optimized

## 🚢 Deploy to GitHub Pages

### One-Time Setup:
1. Go to your repo Settings → Pages
2. Under "Source", select "GitHub Actions"

### Every time you push to `main`:
- Site rebuilds automatically ✨
- Live at: `https://YOUR_USERNAME.github.io`

**Using a custom domain?**
Add a `CNAME` file to `/public/` with your domain name.

## 📚 Need More Help?

- **Quick changes:** [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
- **Detailed setup:** [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Full documentation:** [README.md](./README.md)

## 🎯 Checklist Before Deploying

- [ ] Social media links updated
- [ ] All JSON content files edited
- [ ] Resume PDF added
- [ ] Tested locally (`npm run dev`)
- [ ] Verified mobile view
- [ ] Checked all links work
- [ ] Dark/light mode both look good

## 💡 Pro Tips

1. **Use consistent tags** in projects - they become filter buttons
2. **Include your name** in publications authors array for auto-highlighting
3. **Keep updates to 3** - only most recent show on homepage
4. **Test dark mode** - it's the default!
5. **Check mobile** - many recruiters browse on phones

## 🎨 Preview Mode

The site comes with placeholder content and images so you can see it working immediately.

Just replace the placeholders with your actual content!

---

**Ready to go?** Run `npm run dev` and start customizing! 🎉

Have questions? Check the other guide files or open an issue on GitHub.
