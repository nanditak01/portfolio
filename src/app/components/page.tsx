"use client";

import { useState } from "react";

export default function ComponentsPage() {
  const [message, setMessage] = useState("");

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

          {/* Buttons */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Buttons
            </h2>

            <p className="mt-3 text-gray-600">
              Interactive buttons with hover and focus states.
            </p>

            <button
              onClick={() => setMessage("Button clicked successfully!")}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Example Button
            </button>

            {message && (
              <p className="mt-4 text-sm font-medium text-green-600">
                {message}
              </p>
            )}
          </div>

          {/* Cards */}
          <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">
              Cards
            </h2>

            <p className="mt-3 text-gray-600">
              Responsive cards for displaying project and learning
              information.
            </p>

            <button
              onClick={() => alert("Card component clicked!")}
              className="mt-5 rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Try Card
            </button>
          </div>

          {/* Forms */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Forms
            </h2>

            <p className="mt-3 text-gray-600">
              Clean form layouts with accessible input elements.
            </p>

            <label
              htmlFor="example-input"
              className="sr-only"
            >
              Example input
            </label>

            <input
              id="example-input"
              type="text"
              placeholder="Example input"
              className="mt-5 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              onChange={(e) => setMessage(e.target.value)}
            />

            <p className="mt-3 text-sm text-gray-500">
              {message
                ? `You entered: ${message}`
                : "Type something above"}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}