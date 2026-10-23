# Synergy Gym — Official Website

A high-performance, mobile-first responsive web application for **Synergy Gym** (Est. 2015, Jodhpur, Rajasthan), built with React, Vite, and modern CSS architecture.

---

## 🏋️‍♂️ Verified Business Information

- **Brand Name**: Synergy Gym
- **Established**: 2015 *(Badge: "Building stronger habits since 2015")*
- **Phone / WhatsApp**: +91 96100 20780 (`919610020780`)
- **Address**: Opposite Badwasia Govt. School, Maderana Colony, Blue City, Jodhpur, Rajasthan, India
- **Floor Hours**:
  - Morning Shift: 5:30 AM – 10:30 AM
  - Evening Shift: 4:30 PM – 9:30 PM
  - Days: Monday – Saturday (Sunday rest day)

### Verified Membership Plans
- **1 Month**: ₹1,000
- **3 Months**: ₹2,500
- **6 Months**: ₹4,500
- **12 Months**: ₹8,000 *(Highlighted long-term commitment option)*

---

## 🚀 Quick Start & Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run automated verification & business validation suite (67 checks)
npm test

# Run code linter (0 errors, 0 warnings)
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📸 Media Replacement & Asset Guide

All image and video assets are kept strictly decoupled from code logic in `public/assets/`. You can replace any photo or video simply by dropping a new file with the matching name into the directory.

> **💡 Smart Extension Resolution:**
> The website supports both `.jpg` and `.jpeg` filenames interchangeably. If you drop `hero-gym.jpeg` instead of `hero-gym.jpg`, the website and Vite server will automatically resolve and display it.

### Canonical Filename Mapping

| Filename | Folder | Website Section | Recommended Format & Aspect Ratio |
|---|---|---|---|
| `synergy-logo.svg` | `public/assets/images/` | Navbar & Footer | SVG or PNG (320×72, transparent) |
| `hero-gym.jpg` | `public/assets/images/` | Hero Section (Background / Poster) | 1920×1080 (16:9 / 16:10), JPG/WebP |
| `hero-fallback.jpg` | `public/assets/images/` | Hero Fallback if video fails | 1920×1080 (16:9), JPG/WebP |
| `weight-loss.jpg` | `public/assets/images/` | Programs — Weight Loss Card | 800×500 (16:10), JPG/WebP |
| `muscle-gain.jpg` | `public/assets/images/` | Programs — Muscle Gain Card | 800×500 (16:10), JPG/WebP |
| `strength-training.jpg` | `public/assets/images/` | Programs — Strength Card | 800×500 (16:10), JPG/WebP |
| `general-fitness.jpg` | `public/assets/images/` | Programs — General Fitness Card | 800×500 (16:10), JPG/WebP |
| `gym-interior.jpg` | `public/assets/images/` | Facilities & Gallery | 1600×1000 (16:10), JPG/WebP |
| `training-equipment.jpg` | `public/assets/images/` | Facilities & Gallery | 1200×800 (3:2), JPG/WebP |
| `trainer-session.jpg` | `public/assets/images/` | About Synergy Section | 1200×900 (4:3), JPG/WebP |
| `video-poster.jpg` | `public/assets/images/` | Gym Tour Video Poster | 1920×1080 (16:9), JPG/WebP |
| `gallery-01.jpg` | `public/assets/images/` | Gallery (Floor & Dumbbells) | 1200×900 (4:3), JPG/WebP |
| `gallery-02.jpg` | `public/assets/images/` | Gallery (Olympic Platforms) | 1200×900 (4:3), JPG/WebP |
| `gallery-03.jpg` | `public/assets/images/` | Gallery (Conditioning) | 1200×900 (4:3), JPG/WebP |
| `gallery-04.jpg` | `public/assets/images/` | Gallery (Benches & Racks) | 1200×900 (4:3), JPG/WebP |
| `boxing club.jpg` | `public/assets/images/` | Gallery (Combat & Boxing) | 1200×900 (4:3), JPG/WebP |
| `hero-workout.mp4` | `public/assets/videos/` | Hero Background Video Clip | 1080p, H.264 MP4, < 6 MB |
| `gym-tour.mp4` | `public/assets/videos/` | Facilities Interactive Video Tour | 1080p, H.264 MP4, < 15 MB |

---

### Step-by-Step Instructions

#### 1. How to Replace an Existing Photo
1. Prepare your photo in JPEG or PNG format.
2. Rename your photo to match the exact filename from the table above (e.g. `hero-gym.jpg`).
3. Copy/paste the new file into `public/assets/images/` (overwriting the previous file).
4. Refresh your browser to see the update.

#### 2. How to Replace a Video
1. Export your video in MP4 format (H.264 video codec with AAC audio for universal compatibility).
2. For the Hero background: rename the file to `hero-workout.mp4` and copy to `public/assets/videos/`.
3. For the Gym Tour: rename the file to `gym-tour.mp4` and copy to `public/assets/videos/`.

#### 3. How to Add or Remove Gallery Photos
1. Put your new photo in `public/assets/images/my-photo.jpg`.
2. Open [`src/config/assets.js`](file:///c:/Users/Lenovo/chirag%20Projects/website/src/config/assets.js).
3. In the `gallery` array, append a new object:
```javascript
{
  url: "/assets/images/my-photo.jpg",
  caption: "Cardio & Stretching Area",
  category: "interior" // choices: 'interior', 'strength', 'equipment', 'training'
}
```
4. Save the file. The gallery grid and full-screen lightbox will automatically include it.

#### 4. How to Clear Browser Cache (Hard Refresh)
When replacing an image file with the exact same filename, web browsers (especially mobile Safari and Chrome) frequently serve the cached version from disk.
- **On Desktop Chrome / Edge / Firefox**: Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac).
- **On Android Chrome**: Open Chrome Menu (3 dots) -> Settings -> Privacy and security -> Clear browsing data -> check "Cached images and files" -> Clear data. Or open an Incognito tab.
- **On iPhone Safari**: Open iOS Settings -> Safari -> Advanced -> Website Data -> Remove data for localhost, or open a Private Browsing window.

---

## 📱 Mobile Responsiveness Features

- **Fluid Viewports**: Optimized and tested from narrow 320px devices up to 1440px desktop screens.
- **Safe Grid Layouts**: Uses responsive CSS patterns (`repeat(auto-fit, minmax(min(100%, 250px), 1fr))`) to prevent horizontal overflow on small phones.
- **Touch-Friendly Targets**: All navigation toggles, cards, and CTA buttons have a minimum touch height of 48px.
- **Mobile Menu**: Responsive full-screen drawer with body-scroll locking and `Escape` key dismissal.
- **Touch Lightbox**: Supports mobile swipe gestures (swipe left for next, swipe right for previous).
- **Non-Intrusive Floating CTA**: Automatically hides near the footer to prevent covering contact details.
