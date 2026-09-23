<!--
📌 Repository Description (paste this into GitHub → Settings → About → Description):

App Store Marketplace — A responsive app-store web app built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 & DaisyUI. Browse apps, view details & ratings, install/uninstall with React Context state and toast notifications. Live: <your-deployed-url>
-->

# 📱 App Store (hero-app)

A modern, responsive **app-store marketplace** web application built with **Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and DaisyUI**. Browse a catalog of apps, view detailed pages with ratings and reviews, install/uninstall apps with live state management via React Context, and enjoy polished loading skeletons and toast notifications — all wrapped in a clean, mobile-first UI.

> 🔗 **Live Site:** _Add your deployed URL here (e.g. https://hero-app.vercel.app)_
>
> 💻 **Repository:** _Add your GitHub repository URL here_

---

## ✨ Features

- 🏠 **Home Page** — Hero banner with platform stats (total downloads, reviews, active apps) and a trending apps section.
- 🧩 **Apps Marketplace** — Responsive grid of app cards fetched from an API, showing icon, title, company, rating, downloads, and size.
- 📄 **App Details Page** — Dynamic route (`/apps/[appId]`) with the full description, average rating, review count, and star-rating breakdown.
- ⬇️ **Install / Uninstall** — Install apps from cards or detail pages and manage them on the `/installation` page. State is shared globally through React Context.
- 🔔 **Toast Notifications** — Success feedback on every install/uninstall action using `react-toastify`.
- 💀 **Loading Skeletons & 404 Handling** — Suspense-based skeleton loaders for app lists and custom not-found pages for a smooth UX.
- 📱 **Fully Responsive** — Navbar with dropdown menu on mobile, adaptive grid layouts, and DaisyUI component styling.

---

## 🛠️ Technology Stack

| Category      | Technology                          |
| ------------- | ----------------------------------- |
| Framework     | Next.js 16 (App Router)             |
| Language      | TypeScript 5                        |
| UI Libraries  | React 19, react-icons               |
| Styling       | Tailwind CSS v4, DaisyUI v5         |
| Notifications | react-toastify                      |
| State Mgmt    | React Context API                   |
| Linting       | ESLint (eslint-config-next)         |

---

## 📦 Dependencies

### Runtime dependencies
| Package          | Version  | Purpose                              |
| ---------------- | -------- | ------------------------------------ |
| `next`           | ^16.3.5  | React framework & App Router         |
| `react`          | ^19.2.8  | UI library                           |
| `react-dom`      | ^19.2.8  | React DOM renderer                   |
| `react-icons`    | ^5.7.0   | Icon components (GitHub, stars, etc.)|
| `react-toastify` | ^11.1.0  | Toast notifications                  |
| `json`           | ^11.0.0  | JSON tooling                         |

### Development dependencies
| Package                                       | Purpose                             |
| --------------------------------------------- | ----------------------------------- |
| `tailwindcss` (^4)                            | Utility-first CSS framework         |
| `@tailwindcss/postcss`                        | Tailwind v4 PostCSS plugin          |
| `daisyui` (^5.7.42)                           | Component classes for Tailwind      |
| `typescript` (^5)                             | Static typing                       |
| `@types/node`, `@types/react`, `@types/react-dom` | Type definitions                |
| `eslint` + `eslint-config-next`               | Code linting                        |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** 18.18+ (or newer)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>.git
   cd hero-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the data API**
   The app fetches its catalog from `http://localhost:5000/data` (see `src/lib/api.ts`). Run any lightweight JSON server serving the contents of `public/data.json`:
   ```bash
   npx json-server --watch public/data.json --port 5000
   ```
   > Alternatively, point `getAllApps()` in `src/lib/api.ts` to your own hosted JSON endpoint.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the app.

### Production build

```bash
npm run build   # Create an optimized production build
npm start       # Start the production server
npm run lint    # Run ESLint checks
```

---

## 📁 Project Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── page.tsx        # Home page (banner + trending apps)
│   ├── apps/           # Marketplace grid & dynamic app details ([appId])
│   └── installation/   # Installed apps management page
├── components/
│   ├── Apps/           # AppDetailsCard, InstalledAppCard, InstallAppBtn
│   ├── homapage/       # Banner, TrendingApps
│   └── shared/         # Navbar, Footer, AppCard, AppCardSkeleton
├── context/            # AppContext (global install state)
├── lib/                # API helpers
├── types/              # TypeScript interfaces (IApp, IRating)
└── assets/             # Images & icons
public/
└── data.json           # App catalog dataset (20 apps)
```

---

## 🔗 Useful Links

- 🌐 **Live Demo:** _Add your deployed URL here_
- 🐙 **GitHub Repository:** _Add your repository URL here_
- ⚡ **Next.js Documentation** — [https://nextjs.org/docs](https://nextjs.org/docs)
- 🎨 **Tailwind CSS** — [https://tailwindcss.com](https://tailwindcss.com)
- 🌼 **DaisyUI** — [https://daisyui.com](https://daisyui.com)
- 🔔 **React Toastify** — [https://fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify)

---

## 📄 License

This project is for educational/portfolio purposes. Feel free to fork and adapt it.
