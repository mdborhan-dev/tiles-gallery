# Tilora 🧱

A modern tile and ceramics browsing gallery built with Next.js — showcasing products with smooth animations, search, filtering, and sorting.

## Purpose

Tilora is an e-commerce browsing application for tiles and ceramics. It lets users explore a product catalog through an animated, responsive gallery, with tools to search, filter, and sort products to quickly find what they're looking for. The project was built as a way to practice real-world frontend skills: working with live/fetched data, building interactive UI, and handling animations and layout in a modern React + Next.js stack.

## Live URL

[https://tiles-gallery-hazel.vercel.app](https://tiles-gallery-hazel.vercel.app/)

## Key Features

- **Animated product showcase grid** — product cards with smooth hover animations powered by React Spring
- **Search, filter & sort** — a `TilesBrowser` component for finding products by name/category and reordering by price or other criteria
- **Swiper banner** — a swipeable image/promo banner on the homepage
- **Custom earthy theme** — a hand-picked color palette (espresso brown, terracotta, warm cream) built with daisyUI + Tailwind CSS v4
- **Responsive Navbar & Footer** — includes a mobile drawer menu and a footer contact form
- **Real product data** — catalog built from real scraped ceramics data (CSV → JSON pipeline)
- **Toast notifications** for user feedback (e.g. add to favorites, errors)

## Tech Stack & npm Packages

**Framework & Core**
- `next` — React framework (App Router, Turbopack)
- `react`, `react-dom`

**Styling**
- `tailwindcss` + `@tailwindcss/postcss` — utility-first CSS
- `daisyui` — component library / theming on top of Tailwind

**Animation & UI**
- `@react-spring/web` — hover and transition animations
- `swiper` — banner/carousel
- `react-fast-marquee` — scrolling marquee effects
- `react-icons` — icon set
- `react-spinners` — loading spinners
- `react-toastify` — toast notifications

**Forms & Auth**
- `react-hook-form` — form state and validation
- `better-auth` + `@better-auth/mongo-adapter` — authentication

**Database**
- `mongodb` — database driver

**Tooling**
- `eslint` + `eslint-config-next` — linting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
