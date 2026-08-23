# Mykhailo Loniak — Developer Portfolio

A personal developer portfolio built with Next.js and TypeScript. It presents my full-stack projects, technical skills, certificates, professional background, and contact information in a terminal-inspired interface.

> The new production URL will be added after deployment.

## Overview

The portfolio is designed to give recruiters and development teams a clear overview of:

- the applications I have built;
- the technologies I use;
- my approach to frontend and backend development;
- verified course certificates;
- ways to contact me or view my code.

The content is stored in typed data files, making it straightforward to add new projects and certificates without duplicating component markup.

## Main sections

- **Hero** — short professional introduction and primary actions.
- **Projects** — featured work with screenshots, technology stacks, source code, and live-demo links.
- **About** — background, development approach, and current focus.
- **Skills** — frontend, backend, database, authentication, and development tools.
- **Certificates** — Mate Academy certificates with links to the original documents.
- **Contact** — email, GitHub, LinkedIn, and CV access.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Embla Carousel
- React Icons

## Project structure

```text
app/
├── components/          # Page sections and reusable UI components
├── globals.css          # Global styles and theme variables
├── layout.tsx           # Root layout, fonts, and metadata
└── page.tsx             # Portfolio section composition

lib/
├── projects.ts          # Typed project data
└── certificates.ts      # Typed certificate data

public/
├── certificates/        # Certificate preview images
├── cv/                  # Downloadable CV files
└── screen/              # Project screenshots
```

## Getting started

### Requirements

- Node.js supported by the installed Next.js version
- npm

### Installation

```bash
git clone https://github.com/MykhailoLoniak/cv.git
cd cv
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality checks

```bash
npm run lint
npm run build
```

### Production

```bash
npm run build
npm run start
```

## Adding a project

1. Add an optimized screenshot to `public/screen/`.
2. Add a new object to `lib/projects.ts`.
3. Include only working public URLs.

Example:

```ts
{
  id: "project-slug",
  src: "/screen/project-preview.webp",
  name: "Project name",
  description: "A short explanation of the problem and the solution.",
  stack: ["Next.js", "Node.js", "PostgreSQL"],
  links: [
    {
      name: "Live demo",
      link: "https://example.com",
    },
    {
      name: "Source code",
      link: "https://github.com/username/repository",
    },
  ],
}
```

Use WebP or AVIF previews where possible and keep project images reasonably small.

## Adding a certificate

1. Add the preview image to `public/certificates/`.
2. Add its data to `lib/certificates.ts`.
3. Link to the original certificate when a verified public URL is available.

## Featured project

### Ranok Coffee

A responsive full-stack coffee-shop application with a multi-step table-reservation form and a booking-management dashboard.

**Technologies:** Next.js, React, Node.js, Express, PostgreSQL, Tailwind CSS and Axios.

- [Live demo](https://front-end-coffee-booking.vercel.app/)
- [Live demo dashboard](https://front-end-coffee-booking.vercel.app/dashboard)
- [Frontend repository](https://github.com/MykhailoLoniak/front-end_coffee_booking)
- [Backend repository](https://github.com/MykhailoLoniak/back-end_coffee_booking)

## Deployment

The recommended deployment target is Vercel:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Confirm that `npm run build` succeeds.
4. Deploy the production branch.
5. Add the resulting URL to this README and the GitHub repository homepage.

## Planned improvements

- Add the final production URL and social preview image.
- Add downloadable English and Spanish CV files.
- Add more full-stack projects and short case studies.
- Add automated lint, type-check, and build checks with GitHub Actions.
- Improve accessibility and reduced-motion support.
- Add tests for data integrity and critical interactions.

## Contact

- **Email:** [loniakmykhail@gmail.com](mailto:loniakmykhail@gmail.com)
- **GitHub:** [MykhailoLoniak](https://github.com/MykhailoLoniak)
- **LinkedIn:** [mykhailo-loniak](https://www.linkedin.com/in/mykhailo-loniak/)

## License

Copyright © 2026 Mykhailo Loniak. All rights reserved.

This repository is publicly available for portfolio review and educational
reference. Reuse, redistribution, or publication of the source code is not
permitted without prior written permission.
