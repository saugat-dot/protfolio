# Saugat Rauniyar – Portfolio Website

A production-ready personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Setup Checklist

Before deploying, complete these steps:

### 1. Add your profile photo
Replace `/public/profile.png` with your actual photo (400×400px or larger, square crop).

### 2. Add your resume
Place your PDF resume at `/public/saugat_resume.pdf`.

### 3. Update contact form (optional)
The contact form in `components/Contact.tsx` currently simulates submission. To make it functional, integrate a service like:
- [Formspree](https://formspree.io) – free tier available
- [EmailJS](https://emailjs.com)
- A Next.js API route with Nodemailer

Replace the `handleSubmit` function's `await new Promise(...)` with your actual API call.

### 4. Update metadata URL
In `app/layout.tsx`, change:
```ts
metadataBase: new URL("https://saugat-portfolio.vercel.app"),
```
to your actual Vercel deployment URL.

## Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles & CSS vars
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Main page (all sections)
│   ├── sitemap.ts           # SEO sitemap
│   └── opengraph-image.tsx  # OG image for social sharing
├── components/
│   ├── Navbar.tsx           # Sticky navbar with mobile hamburger
│   ├── Hero.tsx             # Hero section with profile image
│   ├── About.tsx            # About + stats cards
│   ├── Skills.tsx           # Categorized skill chips
│   ├── Projects.tsx         # Filterable project cards
│   ├── Education.tsx        # Timeline education cards
│   ├── Resume.tsx           # PDF preview + download
│   ├── Contact.tsx          # Contact info + form
│   ├── Footer.tsx           # Footer with links
│   └── Chatbot.tsx          # Floating AI chatbot (local, no API)
├── data/
│   └── profile.json         # All personal data (chatbot reads this)
├── public/
│   ├── profile.png          # YOUR PHOTO (replace placeholder)
│   ├── saugat_resume.pdf    # YOUR RESUME (add this)
│   └── robots.txt           # SEO robots
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Features

- ⚡ Next.js 15 App Router
- 🎨 Dark theme with premium aesthetics
- 📱 Fully mobile responsive (hamburger nav, stacking cards)
- 🤖 Local chatbot that reads `profile.json` — no paid APIs
- 🔍 SEO optimized (metadata, sitemap, OG image, robots.txt)
- ✨ Framer Motion animations (scroll-triggered, staggered)
- 🏎️ Lighthouse 95+ target
- 🚀 Vercel deploy ready
