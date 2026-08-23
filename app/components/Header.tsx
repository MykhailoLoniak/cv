"use client";

import Link from "next/link";
import { useState } from "react";
import { Line } from "./Line";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscCloseCompact } from "react-icons/vsc";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center min-h-min relative z-50 ">
        <p className="text-neutral-400">Hi, I&apos;m Mykhailo Loniak.</p>

        {/* Десктопна навігація */}
        <nav className="md:flex gap-2 lowercase [&>a]:hover:text-white text-custom-neutral hidden">
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#certificates">Certificates</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Link
          href="#contact"
          className="hidden sm:flex gap-2 border rounded-2xl py-1 px-2"
        >
          <span className="text-green-500 animate-pulse">&#9673;</span>
          Відкритий до пропозицій
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
        <nav className="fixed inset-0 bg-neutral-950/95 backdrop-blur-sm md:hidden flex flex-col justify-center items-center gap-8 text-xl z-40 text-custom-neutral lowercase [&>a]:hover:text-white">
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="#certificates" onClick={() => setIsOpen(false)}>
            Certificates
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      )}

      <div className="mt-10">
        <Line color="var(--custom-neutral)" />
      </div>
    </>
  );
};

export default Header;
