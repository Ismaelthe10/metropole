# Metrópole Serviços



Marketing site for an outsourcing company serving Curitiba and the surrounding metropolitan region of Paraná, Brazil. The business provides property security, professional cleaning, and building maintenance to companies and residential condominiums.

🔗 **[www.metropoleserv.com.br](https://www.metropoleserv.com.br)**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)

---

## About the project

A single-purpose brochure site whose job is to convert visits into contacts. There is no backend, no database, and no environment configuration — the entire site is static files served from the edge, and every call to action routes the visitor into WhatsApp or email with the message already drafted.

That constraint is the design. For a business of this size, the operational cost of a server is real and the benefit is not: content changes a few times a year. A static build removes hosting cost, removes a maintenance surface, and makes the site fast by default.

## Highlights

**Structured data for local search.** A `LocalBusiness` JSON-LD graph is declared statically in `index.html` — address, geolocation, phone, founding date, accepted payment methods — so search engines can read the business profile without executing JavaScript. Paired with canonical URL, Open Graph tags, and a descriptive title targeting the service-plus-city queries the business actually competes for.

**One source of truth for business data.** Company name, legal entity, phone, email, and social links live in `src/constants/site.jsx`. The header, footer, and every contact button read from it, so a phone number changes in exactly one place.

**Contact flows with pre-written messages.** The WhatsApp and email links carry a pre-filled subject and body. Reducing what the visitor has to type is the cheapest conversion improvement available on a site like this.

**Anchor navigation that survives page changes.** Section links use `react-router-hash-link`, so `/#servicos` scrolls smoothly to the services section whether the visitor is already on the homepage or arriving from `/sobre`.

**Tailwind CSS v4 through the Vite plugin.** No `tailwind.config.js` — v4 moves configuration into CSS, and the Vite plugin removes the PostCSS pipeline step.

## Tech stack

| Layer | Choice |
|---|---|
| UI | React 19, React Router 7 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (Vite plugin) |
| Icons | React Icons |
| Hosting | Vercel |
| Linting | ESLint 9 |

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/Ismaelthe10/metropole.git
cd metropole
npm install
npm run dev
```

The app runs at `http://localhost:5173`. There are no environment variables and no external services to configure — clone and run.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Structure

```
src/
├── pages/
│   ├── Home/        Hero, services, contact — the single-page flow
│   └── About/       Company profile, mission and values
├── components/
│   ├── Header/      Navigation with mobile menu and anchor links
│   ├── Footer/      Contact details and social links
│   ├── Card/        Service card
│   ├── PrivacyPolicyPage/
│   └── TermsOfUsePage/
├── constants/       Business data — single source of truth
├── styles/          Global styles and Tailwind entry point
└── Router.jsx       Route definitions

public/images/       Logo, favicons, Open Graph image
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, services, contact |
| `/sobre` | About the company |
| `/politica-de-privacidade` | Privacy policy |
| `/termos-de-uso` | Terms of use |
| `*` | Falls back to Home |

## Deployment

Deployed on Vercel. `vercel.json` rewrites all paths to `index.html` so client-side routing works on direct navigation and refresh. Pushes to `main` deploy automatically.

## License

This is commercial work produced for a client. The source is published for portfolio and reference purposes; it is not licensed for reuse or redistribution. Brand assets and business content belong to Metrópole Serviços.

---

Built by [Ismael Monteiro](https://github.com/Ismaelthe10).
