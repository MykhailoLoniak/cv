import { CodeComment } from "./CodeComment";
import { Console } from "./Console";
import { Line } from "./Line";

export const Contact = () => {
  return (
    <>
      <section id="contact" className="mt-10">
        <CodeComment>contact</CodeComment>
        <Console folder="~/portfolio/contact $" />

        <div className="mt-10 max-w-3xl">
          <h2 className="text-3xl font-bold">Let&apos;s work together</h2>

          <p className="mt-5 max-w-2xl leading-7 text-neutral-300">
            I&apos;m currently looking for a junior frontend or full-stack
            development role where I can contribute to real products and
            continue growing as a developer.
          </p>

          <p className="mt-3 text-neutral-400">
            If you have an opportunity or would like to discuss one of my
            projects, feel free to contact me.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:loniakmykhail@gmail.com"
              className="
                rounded-md border border-orange-400
                px-5 py-3 text-orange-400
                hover:bg-orange-400 hover:text-neutral-950
              "
            >
              Send an email
            </a>

            <a
              href="https://github.com/MykhailoLoniak"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-md border border-neutral-600
                px-5 py-3 hover:border-white
              "
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/mykhailo-loniak/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-md border border-neutral-600
                px-5 py-3 hover:border-white
              "
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Line color="var(--custom-neutral)" />
      </div>
    </>
  );
};
