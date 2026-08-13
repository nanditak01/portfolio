export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          About Me
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          About Nandita Kundanagar
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          I am an Electronics & Communication Engineering student interested
          in building practical technology solutions across embedded systems,
          artificial intelligence, and modern web development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Technical Interests
            </h2>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Embedded Systems</li>
              <li>VLSI</li>
              <li>Python</li>
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Learning Approach
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              I enjoy learning by building projects and exploring practical
              solutions to real-world problems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}