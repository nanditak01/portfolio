"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  RoundedBox,
  ContactShadows,
} from "@react-three/drei";

const colors = [
  { name: "Blue", value: "royalblue" },
  { name: "Red", value: "crimson" },
  { name: "Black", value: "#111111" },
  { name: "Green", value: "seagreen" },
];

const finishes = [
  {
    name: "Glossy",
    roughness: 0.12,
    metalness: 0.45,
    price: 49999,
  },
  {
    name: "Matte",
    roughness: 0.65,
    metalness: 0.1,
    price: 51999,
  },
  {
    name: "Metallic",
    roughness: 0.2,
    metalness: 0.9,
    price: 54999,
  },
];

function SmartDevice({
  color,
  roughness,
  metalness,
}: {
  color: string;
  roughness: number;
  metalness: number;
}) {
  return (
    <group>
      {/* Device body */}
      <RoundedBox
        args={[2, 3.4, 0.45]}
        radius={0.18}
        smoothness={6}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
        />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        args={[1.7, 2.8, 0.035]}
        radius={0.12}
        smoothness={6}
        position={[0, 0.15, 0.24]}
      >
        <meshStandardMaterial
          color="#080b12"
          roughness={0.12}
          metalness={0.15}
        />
      </RoundedBox>

      {/* Camera lens */}
      <mesh position={[0, 1.25, 0.27]}>
        <cylinderGeometry args={[0.16, 0.16, 0.04, 32]} />
        <meshStandardMaterial
          color="#020202"
          roughness={0.08}
          metalness={0.9}
        />
      </mesh>

      {/* Camera glass */}
      <mesh position={[0, 1.25, 0.295]}>
        <circleGeometry args={[0.09, 32]} />
        <meshStandardMaterial
          color="#334155"
          roughness={0.05}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

function StaticFallback({
  color,
}: {
  color: string;
}) {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-slate-950"
      role="img"
      aria-label="Static preview of the smart device"
    >
      <div
        className="relative h-64 w-40 rounded-[2rem] border-4 border-slate-700 shadow-2xl sm:h-80 sm:w-48"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-3 rounded-[1.5rem] bg-slate-950">
          <div className="absolute left-1/2 top-4 h-2 w-12 -translate-x-1/2 rounded-full bg-slate-700" />

          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-800" />
        </div>
      </div>
    </div>
  );
}

export default function ProductScene() {
  const [deviceColor, setDeviceColor] = useState("royalblue");
  const [finish, setFinish] = useState("Glossy");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [useStaticFallback, setUseStaticFallback] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;

    const deviceMemory =
      "deviceMemory" in navigator
        ? (navigator as Navigator & {
            deviceMemory?: number;
          }).deviceMemory ?? 8
        : 8;

    const lowPowerDevice =
      hardwareConcurrency <= 4 || deviceMemory <= 4;

    setUseStaticFallback(reducedMotion || lowPowerDevice);
  }, []);

  const selectedColor =
    colors.find((color) => color.value === deviceColor) ?? colors[0];

  const selectedFinish =
    finishes.find((item) => item.name === finish) ?? finishes[0];

  const totalPrice = selectedFinish.price * quantity;

  const handleAddToCart = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950 px-4 py-5 text-center sm:px-6">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Smart Device
        </h2>

        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
          Interactive 3D product configurator
        </p>
      </div>

      {/* 3D Scene / Static Fallback */}
      <div className="h-[400px] w-full sm:h-[500px]">
        {useStaticFallback ? (
          <StaticFallback color={deviceColor} />
        ) : (
          <Canvas
            shadows
            camera={{
              position: [4, 2.8, 6],
              fov: 42,
            }}
          >
            {/* Lighting */}
            <ambientLight intensity={0.8} />

            <directionalLight
              position={[5, 6, 5]}
              intensity={2.5}
              castShadow
            />

            <pointLight
              position={[-4, 2, 4]}
              intensity={1.5}
            />

            <pointLight
              position={[4, 1, -3]}
              intensity={0.8}
            />

            {/* Product */}
            <SmartDevice
              color={deviceColor}
              roughness={selectedFinish.roughness}
              metalness={selectedFinish.metalness}
            />

            {/* Ground shadow */}
            <ContactShadows
              position={[0, -1.75, 0]}
              opacity={0.55}
              scale={5}
              blur={2.5}
              far={4}
            />

            {/* Rotation / Zoom */}
            <OrbitControls
              enablePan={false}
              minDistance={4}
              maxDistance={8}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>
        )}
      </div>

      {/* Configuration */}
      <div className="border-t border-slate-800 bg-slate-900 px-4 py-5 sm:px-6 sm:py-6">
        {/* Color */}
        <div>
          <p className="mb-3 text-sm font-medium text-slate-300">
            Color
          </p>

          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setDeviceColor(color.value)}
                className={`h-11 w-11 rounded-full border-2 transition-transform ${
                  deviceColor === color.value
                    ? "scale-110 border-white"
                    : "border-slate-600"
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name}`}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Finish */}
        <div className="mt-6">
          <p className="mb-3 text-sm font-medium text-slate-300">
            Finish
          </p>

          <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            {finishes.map((item) => (
              <button
                key={item.name}
                onClick={() => setFinish(item.name)}
                className={`rounded-lg border px-4 py-3 text-sm transition ${
                  finish === item.name
                    ? "border-white bg-white text-slate-900"
                    : "border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-500"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Summary */}
        <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800 p-4 sm:p-5">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-sm text-slate-400">
                Your configuration
              </p>

              <p className="mt-1 font-semibold text-white">
                {selectedColor.name} · {selectedFinish.name}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                ₹{selectedFinish.price.toLocaleString("en-IN")} per unit
              </p>
            </div>

            {/* Quantity */}
            <div>
              <p className="mb-2 text-sm text-slate-400">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-lg border border-slate-600">
                <button
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="min-h-11 min-w-11 px-4 py-2 text-lg text-white hover:bg-slate-700"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="min-w-10 text-center text-white">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="min-h-11 min-w-11 px-4 py-2 text-lg text-white hover:bg-slate-700"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="mt-5 flex items-center justify-between border-t border-slate-700 pt-5">
            <span className="text-slate-400">
              Total
            </span>

            <span className="text-xl font-bold text-white sm:text-2xl">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="mt-5 min-h-12 w-full rounded-lg bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            {added ? "Added to cart ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}