# Aagam Doshi — Portfolio

Futuristic personal portfolio built with Next.js 15, React Three Fiber, GSAP, and Lenis smooth scroll.

**Live:** [aagam30794.web.app](https://aagam30794.web.app/)

## Tech Stack

- Next.js 15 (static export)
- React Three Fiber + Three.js (3D hero)
- GSAP + ScrollTrigger (scroll animations)
- Lenis (smooth scroll)
- Tailwind CSS 4
- Firebase Hosting

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup

1. Create a form at [formspree.io](https://formspree.io)
2. Copy `.env.local.example` to `.env.local`
3. Set `NEXT_PUBLIC_FORMSPREE_ID` to your form ID

## Deploy to Firebase

```bash
npm run deploy
```

This runs `next build` (outputs to `out/`) and `npx firebase-tools deploy` to site `aagam30794`.

Firebase console: [angular-hosting-app-de hosting](https://console.firebase.google.com/project/angular-hosting-app-de/hosting/sites/aagam30794)

## Project Structure

- `app/` — Next.js app router pages and global styles
- `components/` — UI, sections, 3D scene, layout
- `content/portfolio.ts` — Single source of truth for all resume content
- `public/images/` — Project and community images

## Updating Content

Edit `content/portfolio.ts` to update experience, skills, projects, and contact info.
