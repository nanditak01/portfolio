export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Portfolio
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Projects
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-gray-600">
          A selection of projects covering embedded systems, web development,
          and AI-assisted learning.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold">
              Real-Time Colour Detection System
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              A project using an ESP32 module and camera to detect colours in
              real time.
            </p>

            <p className="mt-4 text-sm font-semibold text-blue-600">
              ESP32 • Camera • IoT
            </p>
          </article>

          <article className="rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold">
              Student Learning Dashboard
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              A responsive dashboard for managing courses, assignments,
              learning progress, and academic activities.
            </p>

            <p className="mt-4 text-sm font-semibold text-blue-600">
              Next.js • React • Tailwind CSS
            </p>
          </article>

          <article className="rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold">
              Source-Grounded Study Notes Workflow
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              A structured workflow for creating reliable study notes using
              source-grounded AI tools.
            </p>

            <p className="mt-4 text-sm font-semibold text-blue-600">
              NotebookLM • AI • Research
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}