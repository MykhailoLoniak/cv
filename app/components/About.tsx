import { CodeComment } from "./CodeComment";
import { Console } from "./Console";
import { Line } from "./Line";

export const About = () => {
  return (
    <section id="about" className="mt-10">
      <CodeComment>about</CodeComment>
      <Console folder="~/portfolio/about $" />

      <div className="mt-10 max-w-3xl">
        <h2 className="text-3xl font-bold">About me</h2>

        <p className="mt-5 leading-7 text-neutral-300">
          My background in mechanical engineering taught me to approach complex
          problems systematically and pay attention to how individual parts work
          together.
        </p>

        <p className="mt-4 leading-7 text-neutral-300">
          Today, I apply that mindset to web development, building accessible
          interfaces and reliable backend functionality. I enjoy working across
          the full application flow — from the user interface and API design to
          data validation and database integration.
        </p>

        <p className="mt-4 leading-7 text-neutral-300">
          My recent work includes a full-stack coffee shop reservation system
          built with Next.js, Express, and PostgreSQL.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div>
          <span>Focus</span>
          <p>Full-Stack Web Applications</p>
        </div>

        <div>
          <span>Approach</span>
          <p>Clean, practical solutions</p>
        </div>

        <div>
          <span>Location</span>
          <p>Madrid, Spain</p>
        </div>
      </div>

      <div className="mt-10 md:-mx-10">
        <Line color="var(--custom-neutral)" />
      </div>
    </section>
  );
};
