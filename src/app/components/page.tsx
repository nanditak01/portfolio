export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Components
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          UI Components
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          A collection of reusable interface components and experiments
          created while learning modern web development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Buttons</h2>

            <p className="mt-3 text-gray-600">
              Interactive buttons with hover and focus states.
            </p>

            <button className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
              Example Button
            </button>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Cards</h2>

            <p className="mt-3 text-gray-600">
              Responsive cards for displaying project and learning
              information.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Forms</h2>

            <p className="mt-3 text-gray-600">
              Clean form layouts with accessible input elements.
            </p>

            <label htmlFor="example-input" className="sr-only">
              Example input
            </label>
            <input
              id="example-input"
              type="text"
              placeholder="Example input"
              className="mt-5 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </section>
    </main>
  );
}