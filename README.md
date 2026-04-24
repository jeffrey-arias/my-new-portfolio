# Jeffrey Arias — Portfolio v2

A modern React portfolio, refactored from a class-component / Create React App setup to a fully modern stack.

## Tech Stack

- **React 18** — hooks throughout (`useState`, `useEffect`, `useContext`, custom hooks)
- **Vite** — replaces CRA / webpack for blazing-fast dev & build
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **Context API** — for light/dark theme (no external state library needed)
- **framer-motion** — available for animation extensions
- **react-vertical-timeline-component** — experience section
- **Devicons** — via CDN for tech skill icons
- **No jQuery, no Bootstrap, no class components**

## Project Structure

```
src/
├── App.jsx                  # Root, wraps ThemeProvider
├── main.jsx                 # Entry point
├── index.css                # Tailwind + CSS variables for theming
├── context/
│   └── ThemeContext.jsx     # useTheme hook + ThemeProvider
├── hooks/
│   └── usePortfolioData.js  # Custom hook: fetch JSON data
└── components/
    ├── Header.jsx           # Hero with typewriter, theme toggle, social links
    ├── About.jsx            # Bio with scroll-reveal animation
    ├── Projects.jsx         # Professional projects grid
    ├── MiniProjects.jsx     # Personal projects grid
    ├── ProjectGrid.jsx      # Shared grid + hover/click cards
    ├── ProjectDetailsModal.jsx  # Modal with image slider + tech icons
    ├── ImageSlider.jsx      # Custom slider (replaces react-awesome-slider)
    ├── Skills.jsx           # Animated skills tiles
    ├── Experience.jsx       # Vertical timeline
    ├── Certifications.jsx   # Cert cards
    └── Footer.jsx           # Social + resume download
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → /dist
npm run deploy    # Deploy to GitHub Pages
```

## Data

All content lives in `public/`:
- `portfolio_shared_data.json` — name, social links, skills
- `res_primaryLanguage.json` — bio, projects, experience, certifications
