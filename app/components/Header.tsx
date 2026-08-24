"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscCloseCompact } from "react-icons/vsc";
import { Line } from "./Line";

const navigation = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (viewportBottom >= documentHeight - 5) {
        setActiveSection(navigation[navigation.length - 1].id);
        return;
      }

      const markerPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "";

      navigation.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= markerPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <header className="flex justify-between items-center p-4 min-h-min w-full relative z-50">
        <p className="text-custom-white">Hi, I&apos;m Mykhailo Loniak.</p>

        <nav
          aria-label="Primary navigation"
          className="hidden gap-2 lowercase md:flex"
        >
          {navigation.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <Link
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`transition-colors ${
                  isActive
                    ? "text-orange-400"
                    : "text-custom-white hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="#contact"
          className="hidden sm:flex gap-2 border rounded-2xl py-1 px-2"
        >
          <span className="text-green-500 animate-pulse">&#9673;</span>
          Open to suggestions
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl z-50 relative focus:outline-none"
          aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {!isOpen ? <GiHamburgerMenu /> : <VscCloseCompact />}
        </button>
      </header>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-neutral-950/95 text-xl lowercase backdrop-blur-sm md:hidden"
        >
          {navigation.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <Link
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  isActive
                    ? "text-orange-400"
                    : "text-custom-neutral hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}

      <Line color="var(--custom-neutral)" />
    </>
  );
};

export default Header;
