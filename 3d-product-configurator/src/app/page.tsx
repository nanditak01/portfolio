"use client";

import dynamic from "next/dynamic";

const ProductScene = dynamic(
  () => import("@/components/ProductScene"),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[400px] w-full items-center justify-center rounded-2xl bg-slate-950 sm:h-[500px]"
        aria-label="Loading 3D product"
      >
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-white" />
          <p className="text-sm text-slate-400">
            Loading 3D product...
          </p>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          3D Smart Device
        </h1>

        <p className="mb-6 text-slate-600 sm:mb-8">
          Interactive 3D product experience
        </p>

        <ProductScene />
      </div>
    </main>
  );
}