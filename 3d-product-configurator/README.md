# Interactive 3D Product Configurator

An interactive 3D Smart Device product experience built with Next.js, React, TypeScript, React Three Fiber, Three.js, and Tailwind CSS.

## What I Built

I built an interactive 3D Smart Device Product Configurator that renders a real 3D product directly in the browser.

Users can:

- Rotate and zoom the 3D product using mouse or touch
- Change the device color
- Change the material finish between Glossy, Matte, and Metallic
- Increase or decrease quantity
- See the total price update dynamically
- Use the Add to Cart interaction
- Use the experience on mobile devices

The 3D canvas is lazy-loaded and includes loading and performance fallbacks.

## Performance / FE-10 Note

I kept the 3D experience lightweight by creating the product with simple procedural geometry instead of loading a large external 3D model.

To reduce the impact on load time and frame rate:

- The 3D canvas is lazy-loaded so the main page can load before the WebGL experience.
- The product uses simple geometry rather than a large 3D asset.
- Simple materials are used to reduce rendering cost.
- The number of lights is limited.
- Shadows are controlled to reduce GPU workload.
- A loading fallback is shown while the 3D scene loads.
- Users with reduced-motion preferences or lower-power devices receive a static product preview instead of the interactive WebGL scene.

### Impact on Load Time

Lazy-loading the 3D canvas prevents the WebGL scene from being required before the main page can load. Using procedural geometry also avoids downloading a large external 3D model, helping keep the initial loading experience lighter.

### Impact on Frame Rate

Real-time 3D rendering uses GPU resources. Simple geometry, limited lighting, simple materials, and controlled shadows reduce the rendering workload and help maintain a smoother frame rate, especially on mobile and lower-power devices.

## What I Would Add With More Time

With more time, I would:

- Add a detailed but optimized GLB model
- Compress the model using Draco or meshopt
- Add more configurable product parts
- Add detailed textures and realistic materials
- Add product animations
- Perform more detailed mobile frame-rate and performance testing
- Further optimize loading and rendering for low-end devices

## Technologies Used

- Next.js
- React
- TypeScript
- React Three Fiber
- Three.js
- @react-three/drei
- Tailwind CSS