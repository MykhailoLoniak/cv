export interface ProjectLink {
  name: string;
  link: string;
}

export interface Project {
  id: string;
  src: string;
  name: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
}

export const projects = [
  {
    id: "ranok-coffee",
    src: "/screen/ranok-coffee.webp",
    name: "Ranok Coffee",
    description:
      "Ranok Coffee is a responsive full-stack application for a coffee shop, featuring an interactive table reservation form and a booking management page.",
    stack: ["Next.js", "Node.js", "Express", "PostgreSQL"],
    links: [
      {
        name: "GitHub Front-end",
        link: "https://github.com/MykhailoLoniak/front-end_coffee_booking",
      },
      {
        name: "GitHub Back-end",
        link: "https://github.com/MykhailoLoniak/back-end_coffee_booking",
      },
      {
        name: "Live demo",
        link: "https://front-end-coffee-booking.vercel.app",
      },
      {
        name: "Live demo dashboard",
        link: "https://front-end-coffee-booking.vercel.app/dashboard",
      },
    ],
  },
  {
    id: "smart-service",
    src: "/screen/smart-service.webp",
    name: "Smart Service",
    description:
      "SmartServe is a full-stack restaurant automation platform for managing menus, QR-code orders, kitchen workflows, staff roles, and sales analytics through dedicated dashboards. Built with Next.js, TypeScript, Prisma, PostgreSQL, and deployed on Vercel.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/MykhailoLoniak/SmartServe",
      },
      {
        name: "Live demo",
        link: "https://smart-serve-eta.vercel.app",
      },
    ],
  },
  {
    id: "breweries",
    src: "/screen/breweries.webp",
    name: "Brewery Explorer",
    description:
      "Brewery Explorer is a responsive application for browsing breweries from the Open Brewery DB API, featuring a virtualized list, bidirectional infinite scrolling, brewery selection and deletion, and detailed brewery pages.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Axios"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/MykhailoLoniak/Breweries",
      },
      {
        name: "Live demo",
        link: "https://breweries-app-three.vercel.app",
      },
    ],
  },
  {
    id: "phone-catalog",
    src: "/screen/phone-catalog.webp",
    name: "Phone Catalog",
    description:
      "Phone Catalog is a responsive storefront for browsing phones, tablets, and accessories, featuring catalog filtering, URL-driven sorting and pagination, product variants, favourites, and a persistent shopping cart.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Sass",
      "Vitest",
    ],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/MykhailoLoniak/react_phone-catalog",
      },
      {
        name: "Live demo",
        link: "https://mykhailoloniak.github.io/react_phone-catalog/",
      },
    ],
  },
  {
    id: "news-bot",
    src: "/screen/news-bot.webp",
    name: "News Bot",
    description:
      "News Bot is a privacy-conscious multi-user Telegram bot that collects trusted RSS news, generates grounded Ukrainian summaries with Gemini, and reliably delivers them to subscribers with deduplication and persistent storage.",
    stack: [
      "Node.js",
      "Telegraf",
      "Gemini API",
      "SQLite",
      "Zod",
      "Vitest",
      "Docker",
    ],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/MykhailoLoniak/news-bot",
      },
    ],
  },
  {
    id: "hey-boss-api",
    src: "/screen/hey-boss-api.webp",
    name: "HeyBoss API",
    description:
      "HeyBoss API is a Node.js backend platform connecting employers and independent contractors, with account management, profiles, jobs, team task workflows, reviews, calendars, real-time chat, portfolio uploads, and OAuth authentication.",
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "WebSocket",
      "Jest",
    ],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/MykhailoLoniak/nodeJsHeyBoss",
      },
    ],
  },
] satisfies Project[];
