export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Case Studies
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Selected Work
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          A closer look at how I approach projects, from identifying a
          problem to building and improving a practical solution.
        </p>

        <div className="mt-10 space-y-6">
          <article className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              CASE STUDY 01
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Real-Time Colour Detection System
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The project explores real-time colour detection using an ESP32
              module and camera, combining hardware and software to create a
              practical computer-vision application.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                ESP32
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                Camera
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                IoT
              </span>
            </div>
          </article>

          <article className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              CASE STUDY 02
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Student Learning Dashboard
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              A responsive web dashboard designed to organize courses,
              assignments, learning progress, and academic activities in one
              interface.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                Next.js
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                React
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                Tailwind CSS
              </span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}