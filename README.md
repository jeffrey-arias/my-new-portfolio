<div align="center">

# Jeffrey Arias — Developer Portfolio

**Full Stack Developer · AI Engineer · 20+ Years Experience**

[![Deploy to GitHub Pages](https://github.com/jeffrey-arias/my-new-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jeffrey-arias/my-new-portfolio/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Site](https://jeffrey-arias.github.io/my-new-portfolio/) · [Report Bug](https://github.com/jeffrey-arias/my-new-portfolio/issues) · [LinkedIn](https://www.linkedin.com/in/jeffreyearias)

</div>

---

## Overview

Personal developer portfolio showcasing 20+ years of experience across web, mobile, cloud, and AI-integrated software development. Fully refactored from a Create React App / class-component setup to a modern React 18 + Vite stack with CI/CD via GitHub Actions.

---

## Live Demo

🌐 **[jeffrey-arias.github.io/my-new-portfolio](https://jeffrey-arias.github.io/my-new-portfolio/)**

---

## Tech Stack

### Frontend

| Technology                                      | Version | Purpose                                              |
| ----------------------------------------------- | ------- | ---------------------------------------------------- |
| [React](https://react.dev)                      | 18      | UI framework — hooks throughout, no class components |
| [Vite](https://vitejs.dev)                      | 6       | Build tool & dev server (replaces CRA/webpack)       |
| [Tailwind CSS](https://tailwindcss.com)         | 3       | Utility-first styling                                |
| [Framer Motion](https://www.framer.com/motion/) | 11      | Animation library                                    |
| [Iconify](https://iconify.design)               | 5       | Icon system (`la:laptop-code` and others)            |
| [Devicons](https://devicon.dev)                 | latest  | Tech skill icons via CDN                             |

### UI Components

| Technology                                                                                           | Purpose                                                |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component) | Experience section timeline                            |
| Custom `ImageSlider.jsx`                                                                             | Project image carousel (replaces react-awesome-slider) |
| Custom `ProjectDetailsModal.jsx`                                                                     | Project detail overlay                                 |

### Architecture & Patterns

| Pattern               | Implementation                                                       |
| --------------------- | -------------------------------------------------------------------- |
| React Hooks           | `useState`, `useEffect`, `useContext` throughout                     |
| Context API           | `ThemeContext` for light/dark mode — persisted via `localStorage`    |
| Custom Hooks          | `usePortfolioData` — fetches JSON via `Promise.all` + native `fetch` |
| Intersection Observer | Scroll-reveal animations on every section                            |
| CSS Custom Properties | Full theme system via `--bg-primary`, `--card-bg`, etc.              |

### CI/CD & Deployment

| Technology                                                                  | Purpose                                              |
| --------------------------------------------------------------------------- | ---------------------------------------------------- |
| [GitHub Actions](https://github.com/features/actions)                       | Automated build and deploy on every push to `master` |
| [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) | Deploys `/dist` to `gh-pages` branch                 |
| [GitHub Pages](https://pages.github.com)                                    | Static site hosting                                  |

---

## Project Structure

```
my-new-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── public/
│   ├── images/                 # Project screenshots
│   ├── docs/                   # Resume PDF
│   ├── portfolio_shared_data.json   # Name, social links, skills
│   └── res_primaryLanguage.json     # Bio, projects, experience, certs
├── src/
│   ├── App.jsx                 # Root component, wraps ThemeProvider
│   ├── main.jsx                # Entry point
│   ├── index.css               # Tailwind directives + CSS custom properties
│   ├── context/
│   │   └── ThemeContext.jsx    # useTheme hook + ThemeProvider
│   ├── hooks/
│   │   └── usePortfolioData.js # Custom hook: fetches both JSON data files
│   └── components/
│       ├── Header.jsx          # Hero — laptop icon, titles, social links
│       ├── About.jsx           # Bio with scroll-reveal + mac-window card
│       ├── Projects.jsx        # Professional projects section
│       ├── MiniProjects.jsx    # Personal/side projects section
│       ├── ProjectGrid.jsx     # Shared grid component (used by both above)
│       ├── ProjectDetailsModal.jsx  # Project modal with image slider + tech icons
│       ├── ImageSlider.jsx     # Custom image carousel
│       ├── Skills.jsx          # Animated skill icon tiles
│       ├── Experience.jsx      # Vertical timeline (work history)
│       ├── Certifications.jsx  # Certification cards
│       └── Footer.jsx          # Social links + resume download
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## CI/CD Pipeline

Every push to `master` triggers the following GitHub Actions workflow:

```
push to master
      │
      ▼
┌─────────────────────┐
│  actions/checkout   │  Clone repo
└─────────────────────┘
      │
      ▼
┌─────────────────────┐
│  actions/setup-node │  Node 20 + npm cache
└─────────────────────┘
      │
      ▼
┌─────────────────────┐
│    npm install      │  Install dependencies
└─────────────────────┘
      │
      ▼
┌─────────────────────┐
│    npm run build    │  Vite production build → /dist
└─────────────────────┘
      │
      ▼
┌──────────────────────────┐
│  peaceiris/actions-gh-   │  Push /dist to gh-pages branch
│  pages                   │
└──────────────────────────┘
      │
      ▼
  GitHub Pages serves live site
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Local Development

```bash
# Clone the repo
git clone https://github.com/jeffrey-arias/my-new-portfolio.git
cd my-new-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output → /dist
```

### Preview Production Build Locally

```bash
npm run preview
# → http://localhost:4173
```

---

## Content Management

All portfolio content lives in two JSON files in `/public` — no rebuild needed when updating content, just edit and push.

| File                         | Contains                                                      |
| ---------------------------- | ------------------------------------------------------------- |
| `portfolio_shared_data.json` | Name, social links, skill icons                               |
| `res_primaryLanguage.json`   | Bio, projects, mini-projects, work experience, certifications |

---

## Key Features

- **Light / Dark theme** — toggle persists across sessions via `localStorage`, floats fixed bottom-right on all sections
- **Scroll-reveal animations** — every section animates in via `IntersectionObserver`
- **Project modals** — click any project card for a full detail view with image slider, tech icons, and live URL
- **Responsive** — mobile-first layout, works across all screen sizes
- **Zero jQuery** — all data fetching via native `fetch` API
- **No class components** — 100% functional React with hooks

---

## What Was Refactored

This project was a ground-up refactor of an older CRA-based portfolio:

| Before                         | After                               |
| ------------------------------ | ----------------------------------- |
| Create React App               | Vite 6                              |
| Class components               | Functional components + hooks       |
| jQuery `$.ajax`                | Native `fetch` + custom hook        |
| Bootstrap + SCSS               | Tailwind CSS v3                     |
| `react-switch`                 | Custom theme toggle via Context API |
| `react-awesome-slider`         | Custom `ImageSlider.jsx`            |
| Manual `npm run deploy`        | GitHub Actions CI/CD                |
| Language toggle (unused)       | Removed                             |
| `serviceWorker.js`, test files | Removed                             |

---

## License

MIT © [Jeffrey Arias](https://github.com/jeffrey-arias)
