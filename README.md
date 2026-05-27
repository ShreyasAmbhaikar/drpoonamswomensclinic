# Ferlix - IVF & Fertility Clinic

This is a Next.js 15 project built with TailwindCSS v4, designed to replicate the Ferlix WordPress Theme (Women Health variant). It is optimized for speed, SEO, and static hosting (e.g., Hostinger).

## Features
- **Pixel-perfect Design**: Exact reproduction of the Ferlix design system using custom CSS variables and TailwindCSS v4.
- **GSAP Animations**: Features fluid, scroll-triggered animations (SplitText heading simulation, fade-ins).
- **SEO & AEO Ready**: Includes `robots.txt`, `sitemap.xml`, `llms.txt` (for AI crawlers), and JSON-LD structured data.
- **Static Export**: Configured for `output: "export"`, making it compatible with any static hosting provider.
- **Optimized Assets**: All images have been converted to WebP format for optimal performance.

## Requirements
- Node.js 18.x or later
- npm or yarn

## Installation Guide

### Step 1: Clone or extract the project
Navigate to the project directory:
```bash
cd ferlix-ivf
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Step 4: Build for Production (Static Export)
Since this site is designed for static hosting (Hostinger), you must build and export it:
```bash
npm run build
```
This command will generate an `out/` directory containing the static HTML, CSS, JS, and image files.

### Step 5: Deployment to Hostinger (or any static host)
1. Log in to your Hostinger account and navigate to the File Manager for your domain.
2. Delete the default files in your `public_html` directory (if any).
3. Upload the *contents* of the `out/` directory generated in Step 4 directly into the `public_html` directory.
4. Your static, high-performance site is now live!

## Technical Notes
- **Image Optimization**: Due to the static export requirement, Next.js image optimization is disabled (`unoptimized: true` in `next.config.ts`). Images are manually optimized as WebP.
- **Google Fonts**: The `Onest` font is self-hosted via `next/font/google`.
