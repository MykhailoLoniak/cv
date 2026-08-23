import { Console } from "./Console";
import { CodeComment } from "./CodeComment";
import { Line } from "./Line";

export const Skills = () => {
  return (
    <>
      <section id="skills" className="mt-10">
        <CodeComment>skills</CodeComment>
        <Console folder="~/hero/skills $" />

        <div className="border border-custom-neutral p-2 rounded-md mt-10 bg-gray-800">
          <div className="flex gap-1">
            <span className="text-red-400">&#9679;</span>
            <span className="text-green-400">&#9679;</span>
            <span className="text-gray-400">&#9679;</span>
            <h3>skills.json</h3>
          </div>
          <Line color="var(--custom-neutral)" h="1px" />

          <pre className="font-mono text-sm overflow-x-auto m-5">
            <code>{`{
    "frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    "backend": ["Node.js", "Express", "REST API"],
    "database": ["PostgreSQL"],
    "auth": ["JWT", "OAuth 2.0"],
    "tools": ["Git", "Docker", "Vite", "Webpack"]
}`}</code>
          </pre>
        </div>
      </section>

      <div className="mt-10">
        <Line color="var(--custom-neutral)" />
      </div>
    </>
  );
};
