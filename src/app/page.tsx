export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-blue-600">
            Nandita Kundanagar
          </h1>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>

            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Portfolio
        </p>

        <h2 className="text-4xl font-bold sm:text-6xl">
          Nandita Kundanagar
        </h2>

        <p className="mt-6 text-xl font-medium text-gray-700">
          Electronics & Communication Engineering Student
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
          Embedded Systems • VLSI • Python • AI • Web Development
        </p>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-600">
          I am an Electronics & Communication Engineering student interested
          in building practical technology solutions across embedded systems,
          artificial intelligence, and modern web development.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-600">
            I am an Electronics & Communication Engineering student developing
            skills in embedded systems, VLSI, Python, AI, and web development.
            I enjoy learning by building projects and exploring practical
            solutions to real-world problems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <article className="rounded-xl border p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              Real-Time Colour Detection System
            </h3>

            <p className="mt-3 text-gray-600">
              A project using an ESP32 module and camera to detect colours in
              real time.
            </p>

            <p className="mt-4 text-sm font-medium text-blue-600">
              ESP32 • Camera • IoT
            </p>
          </article>

          {/* Project 2 */}
          <article className="rounded-xl border p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              Student Learning Dashboard
            </h3>

            <p className="mt-3 text-gray-600">
              A responsive dashboard for managing courses, assignments,
              learning progress, and academic activities.
            </p>

            <p className="mt-4 text-sm font-medium text-blue-600">
              Next.js • React • Tailwind CSS
            </p>
          </article>

          {/* Project 3 */}
          <article className="rounded-xl border p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              Source-Grounded Study Notes Workflow
            </h3>

            <p className="mt-3 text-gray-600">
              A structured workflow for creating reliable study notes using
              source-grounded AI tools.
            </p>

            <p className="mt-4 text-sm font-medium text-blue-600">
              NotebookLM • AI • Research
            </p>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Connect With Me</h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Feel free to connect with me through my professional profiles,
            resume, or schedule a meeting.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/nanditak01"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-700"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nandita-kundanagar-a96a64331/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
            >
              LinkedIn
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium hover:bg-gray-100"
            >
              CV / Resume
            </a>

            {/* Calendly */}
            <a
              href="https://calendly.com/nanditakundanagar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 hover:bg-blue-50"
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nandita Kundanagar. All rights reserved.
      </footer>
    </main>
  );
}