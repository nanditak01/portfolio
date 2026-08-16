"use client";

import ProductScene from "@/components/ProductScene";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-3 text-4xl font-bold text-slate-900">
          3D Smart Device
        </h1>

        <p className="mb-8 text-slate-600">
          Interactive 3D product experience
        </p>

        <ProductScene />
      </div>
    </main>
  );
}