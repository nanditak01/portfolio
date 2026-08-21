# Hardening Review – 3D Product Configurator

## Project

**Project:** 3D Product Configurator  
**Live URL:** https://3d-product-configurator-m6ffapp9k-nandita4.vercel.app/  
**Technology:** Next.js, React, TypeScript, React Three Fiber, Three.js  
**Repository:** https://github.com/nanditak01/portfolio

---

# 1. Purpose of This Hardening Check

The purpose of this hardening pass was to test the project beyond the normal
happy path.

I tested the application using:

- Empty and invalid inputs
- Rapid/double submission
- Navigation and links
- Mobile/responsive layout
- Production build
- SEO and metadata
- 3D rendering and interaction
- Page loading and performance

The goal was to identify where the application could fail, classify each
finding as either a **Fix-now** or **Known limitation**, and address the
important issues before launch.

---

# 2. Where It Breaks – Findings

## A. Input and Interaction Testing

### Test 1 – Empty input

**Action:**  
Submitted the form without entering any input.

**Expected:**  
The application should not crash and should handle empty input gracefully.

**Result:**  
The application remained functional and did not crash.

**Status:** Verified – No fix required.

---

### Test 2 – Garbage / unexpected input

**Action:**  
Entered unexpected or meaningless text into the available input field and
submitted it.

**Expected:**  
The application should remain functional and should not produce a
client-side crash.

**Result:**  
The application remained functional.

**Status:** Verified – No critical issue found.

---

### Test 3 – Rapid / double submission

**Action:**  
Clicked the submit/send action twice quickly.

**Expected:**  
The application should remain stable and should not break the interface.

**Result:**  
The interface remained usable after rapid submission.

**Status:** Verified – No critical issue found.

---

# 3. Navigation and Link Testing

I tested the main navigation and available project links.

The following routes were checked:

- `/`
- `/about`
- `/case-studies`
- `/chat`
- `/components`
- `/projects`

### Result

The routes loaded successfully during testing.

**Status:** Fixed / Verified.

---

# 4. Mobile and Responsive Testing

The application was checked using a mobile-sized viewport.

The following areas were reviewed:

- Page layout
- Text readability
- Navigation
- Buttons
- 3D product area
- Horizontal overflow
- Content spacing

### Result

The layout remained usable on smaller screen sizes.

**Status:** Verified.

### Known limitation

3D rendering performance can vary depending on the user's device,
browser, GPU, and available resources.

---

# 5. 3D Product Testing

The main 3D product experience was tested to ensure that the product
scene loads and remains interactive.

### Checked

- 3D scene loading
- Product visibility
- Camera interaction
- User interaction
- Page stability
- Rendering on different viewport sizes

### Result

The 3D product experience loaded successfully during testing.

**Status:** Verified.

### Known limitation

3D rendering is more resource-intensive than a normal HTML interface.
Lower-powered devices may experience lower frame rates or longer loading
times.

---

# 6. Production Build Testing

The production build was tested using:

```bash
npm run build