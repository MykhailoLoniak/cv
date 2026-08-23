import Link from "next/link";
import { CodeComment } from "./CodeComment";
import { Console } from "./Console";
import { Line } from "./Line";

export const HeroSection = () => {
  return (
    <>
      <section id="home" className="mt-10">
        <CodeComment>hero</CodeComment>
        <Console folder="~/hero $" />

        <h1 className="mt-10 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Junior Full-Stack JavaScript Developer
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
          I build responsive, API-driven web applications with Next.js, Node.js,
          Express, and PostgreSQL.
        </p>

        <p className="mt-3 text-neutral-500">
          Based in Madrid, Spain · Open to remote and local opportunities
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="
              rounded-md border border-orange-400
              px-5 py-3 text-orange-400
              transition-colors
              hover:bg-orange-400 hover:text-neutral-950
            "
          >
            View projects
          </Link>

          <Link
            href="#contact"
            className="
              rounded-md border border-neutral-600
              px-5 py-3
              transition-colors
              hover:border-white
            "
          >
            Contact me
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <Line color="var(--custom-neutral)" />
      </div>
    </>
  );
};
