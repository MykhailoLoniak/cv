import { Console } from "./Console";
import { CodeComment } from "./CodeComment";
import { Line } from "./Line";
import Image from "next/image";

import { projects } from "@/lib/projects";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  return (
    <>
      <section id="projects" className="mt-10">
        <CodeComment>projects</CodeComment>
        <Console folder="~/hero/projects $" />

        {projects.map((p) => (
          <article
            key={p.id}
            className="border border-custom-neutral p-2 rounded-md mt-10 bg-gray-800"
          >
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p>{p.description}</p>

            <div className="flex flex-wrap justify-end w-full gap-2 mb-2">
              {p.stack.map((s) => (
                <span key={s} className="border px-2 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>

            <div className="relative w-full h-[350px]">
              <Image
                src={p.src}
                alt={`Screenshot of ${p.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="rounded object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {p.links.map((l) => (
                <Link
                  key={l.link}
                  target="_blank"
                  className="flex gap-2 border px-2 py-1 rounded-md items-center"
                  href={l.link}
                >
                  {l.name} <FaExternalLinkAlt />
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-10 ">
        <Line color="var(--custom-neutral)" />
      </div>
    </>
  );
};
