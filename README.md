# Learn Anything Academy

A modern online learning platform built with React. Learn Anything Academy helps students, professionals, and lifelong learners acquire industry-relevant skills through expert-led courses, flexible programs, and a polished learning experience.

**Tagline:** Unlock Your Potential Through Modern Online Learning

## Features

- **Responsive design** — Clean, premium UI with a split hero, sticky navigation, and consistent spacing across all pages
- **Multi-page routing** — Home, About, Courses, Benefits, Expertise, Team, Pricing, Journal, and Contact
- **Programs submenu** — Quick access to Courses, Benefits, Expertise, and Pricing from the nav dropdown
- **12 disciplines** — Software Development, Cybersecurity, Data Science, AI, UI/UX, Marketing, and more
- **Rich content sections** — Benefits, mission & vision, testimonials, pricing plans, FAQ, and blog

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, intro, benefits, expertise preview, courses, testimonials |
| `/about` | About us, mission, vision, and why choose us |
| `/courses` | Full course catalog and browse-by-category grid |
| `/benefits` | Benefits of online learning |
| `/expertise` | All 12 learning disciplines |
| `/team` | Instructor and leadership team |
| `/pricing` | Subscription plans and FAQ |
| `/journal` | Blog posts and learning resources |
| `/contact` | Contact form and location map |

## Tech Stack

- [React 18](https://react.dev/)
- [React Router 5](https://v5.reactrouter.com/)
- [Create React App](https://create-react-app.dev/)
- Font Awesome 5 (icons)
- CSS custom properties (design tokens)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (Node 24 supported with Yarn)
- [Yarn](https://yarnpkg.com/) (recommended) or npm

### Install

**Recommended — Yarn:**

```bash
yarn install
```

**Alternative — npm:**

```bash
npm install --legacy-peer-deps
```

> npm may fail with peer dependency conflicts (`google-maps-react` vs React 18). Use `--legacy-peer-deps` or prefer Yarn.

### Development

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
yarn build
```

Serve the `build` folder with any static host:

```bash
npx serve -s build
```

## Project Structure

```
src/
├── App.js                 # Routes and layout
├── App.css                # Global styles and design tokens
├── dummydata.js           # Site content, courses, team, blog, etc.
├── components/
│   ├── common/            # Header, footer, page banner, heading
│   ├── home/              # Home page sections and hero
│   ├── about/             # About page components
│   ├── allcourses/        # Courses listing
│   ├── benefits/          # Benefits page
│   ├── expertise/         # Expertise page
│   ├── pricing/           # Pricing and FAQ
│   ├── blog/              # Journal / blog
│   ├── team/              # Team page
│   └── contact/           # Contact page
public/
├── images/                # Static assets (hero, courses, team, blog)
├── favicon.svg            # SVG favicon
├── favicon.ico            # ICO favicon
├── logo192.png            # PWA icon
└── manifest.json          # Web app manifest
```

## Customization

- **Content** — Edit `src/dummydata.js` for copy, courses, team members, pricing, and blog posts
- **Branding** — Design tokens live in `src/App.css` (`--accent`, `--container-wide`, spacing variables)
- **Navigation** — Update links and Programs submenu in `src/components/common/header/Header.jsx`

## Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Run development server |
| `yarn build` | Create optimized production build |
| `yarn test` | Run test suite |

## License

This project is for educational and portfolio use. Original template by [GorkhCoder](https://www.youtube.com/watch?v=KkQATIXBY5w); redesigned and rebranded as **Learn Anything Academy**.
