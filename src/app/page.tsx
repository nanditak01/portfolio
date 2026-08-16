"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Student Learning Dashboard",
      description:
        "A responsive student dashboard designed to manage courses, assignments, learning progress, and academic activities.",
      tech: "Next.js • React • TypeScript • Tailwind CSS",
      link: "https://github.com/nanditak01/student-dashboard",
    },
    {
      title: "Motion Button UI Library",
      description:
        "A reusable collection of animated buttons built with React and modern UI techniques, featuring interactive states and smooth motion effects.",
      tech: "React • TypeScript • CSS • Motion",
      link: "https://github.com/nanditak01/motion-button",
    },
    {
      title: "Flyrank Frontend Project",
      description:
        "A frontend project developed as part of the Flyrank internship, focusing on responsive UI implementation and modern web development practices.",
      tech: "React • TypeScript • Vite • CSS",
      link: "https://github.com/nanditak01/flyrank-fe04",
    },
  ];

  const skills = [
    "Embedded Systems",
    "IoT",
    "VLSI",
    "Python",
    "Digital Electronics",
    "Microcontrollers",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-xl font-bold tracking-wide text-blue-400"
          >
            Nandita Kundanagar
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            <a
              href="#about"
              className="transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/20 px-3 py-2 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-nav"
            className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-24"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Electronics & Communication Engineering
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-blue-400">Nandita.</span>
            </h1>

            {/* MUST-FIX #1 */}
            <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
              ECE Student | Embedded Systems & IoT Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build practical projects in Embedded Systems and IoT, combining
              electronics, programming, and software development to create
              useful technology solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-blue-600/20 blur-2xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600/20 text-4xl font-bold text-blue-400">
                  NK
                </div>

                <h3 className="text-2xl font-bold">
                  Electronics & Communication Engineer
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Building a strong foundation in electronics while exploring
                  modern software, AI, IoT, and embedded technologies.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                    Embedded
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                    IoT
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                    VLSI
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                    Web
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Curious about technology. Focused on building.
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold">
                My Background
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                I am an Electronics and Communication Engineering student
                developing skills across electronics, embedded systems,
                programming, and modern web technologies.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                My goal is to combine hardware and software knowledge to
                create practical solutions for real-world problems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold">
                What I&apos;m Exploring
              </h3>

              <ul className="mt-5 space-y-4 text-slate-400">
                <li><span aria-hidden="true">→ </span>Embedded Systems and Microcontrollers</li>
                <li><span aria-hidden="true">→ </span>IoT-based applications</li>
                <li><span aria-hidden="true">→ </span>VLSI and Digital Electronics</li>
                <li><span aria-hidden="true">→ </span>Python and software development</li>
                <li><span aria-hidden="true">→ </span>React, Next.js and modern web development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="border-t border-white/10 bg-slate-900/50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Technologies I work with
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center font-medium transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Things I&apos;ve built
          </h2>

          {/* MUST-FIX #2 */}
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            My projects combine software development with my ECE background,
            helping me build practical solutions across hardware and software.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  <span aria-hidden="true">◆</span>
                </div>

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <p className="mt-5 text-sm font-medium text-blue-300">
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-white transition group-hover:text-blue-400"
                >
                  View Project <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="border-t border-white/10 bg-slate-900/50 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let&apos;s connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            I&apos;m interested in learning, building projects, and exploring
            opportunities in technology and engineering.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nanditakundanagar@gmail.com"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Email Me
            </a>

            <a
              href="https://github.com/nanditak01"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nandita-kundanagar-a96a64331"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Nandita Kundanagar. All rights
          reserved.
        </p>

        <p className="mt-2">
          Built with Next.js, React, TypeScript & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}