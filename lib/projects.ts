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
] satisfies Project[];
