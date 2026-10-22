# Synergy Gym — Official Website

A high-performance, responsive web application for **Synergy Gym** (Est. 2015, Jodhpur, Rajasthan), built with React, Vite, and modern CSS architecture.

---

## 🏋️‍♂️ Verified Business Information

- **Brand Name**: Synergy Gym
- **Established**: 2015
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

# Run automated verification & business validation suite
npm test

# Run code linter
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📸 How to Replace Photos and Videos

All images and videos are decoupled from code logic and organized inside the `public/assets/` directory. You can swap any photo or video simply by dropping a new file with the matching name into the directory—**no code editing required**.

### Asset Location Directory
```
public/
  assets/
    images/     <-- All photos and SVG logos live here
    videos/     <-- Looping hero/preview MP4 clips live here
```

### File-to-Section Mapping

| Filename | Section Used | Purpose / Description | Recommended Dimensions & Format |
|---|---|---|---|
| `synergy-logo.svg` | Navbar, Footer | Brand wordmark and emblem | SVG (or transparent PNG 320×72) |
| `hero-gym.jpg` | Hero Section | Main high-energy focal visual | 1920×1080 (16:9), JPG/WebP |
| `hero-fallback.jpg` | Hero Section | Fallback image if hero video fails | 1920×1080 (16:9), JPG/WebP |
| `weight-loss.jpg` | Programs | Weight Loss & Conditioning card | 800×600 (4:3), JPG/WebP |
| `muscle-gain.jpg` | Programs | Muscle Gain & Hypertrophy card | 800×600 (4:3), JPG/WebP |
| `strength-training.jpg` | Programs | Strength Training & Barbells card | 800×600 (4:3), JPG/WebP |
| `general-fitness.jpg` | Programs | General Fitness & Core card | 800×600 (4:3), JPG/WebP |
| `gym-interior.jpg` | Facilities & Gallery | Wide interior shot of gym floor | 1600×1000 (16:10), JPG/WebP |
| `training-equipment.jpg` | Facilities & Gallery | Dumbbells & plate racks | 1200×800 (3:2), JPG/WebP |
| `trainer-session.jpg` | About Section | Coach guiding member session | 1200×900 (4:3), JPG/WebP |
| `video-poster.jpg` | Facilities Video | Poster frame before video plays | 1920×1080 (16:9), JPG/WebP |
| `gallery-01.jpg` | Gallery | Gym interior / racks | 1200×900 (4:3), JPG/WebP |
| `gallery-02.jpg` | Gallery | Free weights & lifting platform | 1200×900 (4:3), JPG/WebP |
| `gallery-03.jpg` | Gallery | Conditioning workout in action | 1200×900 (4:3), JPG/WebP |
| `gallery-04.jpg` | Gallery | Dumbbells and benches | 1200×900 (4:3), JPG/WebP |
| `hero-workout.mp4` | Hero Section (Optional) | Background looping video | 1080p, H.264/MP4, < 8 MB |
| `gym-tour.mp4` | Facilities (Optional) | Walkthrough / floor tour clip | 1080p, H.264/MP4, < 15 MB |

### How to Add or Remove Gallery Images

To add or remove photos from the Photo Gallery and Lightbox:
1. Place your new photo in `public/assets/images/my-photo.jpg`.
2. Open [`src/config/assets.js`](file:///c:/Users/Lenovo/chirag%20Projects/website/src/config/assets.js).
3. In the `gallery` array, simply add an entry:
```javascript
{
  url: "/assets/images/my-photo.jpg",
  caption: "Cardio & Stretching Area",
  category: "interior" // choices: 'interior', 'strength', 'equipment', 'training'
}
```
4. Save the file. The gallery grid and full-screen lightbox will automatically include it.

---

## 💬 WhatsApp Integration & Conversion

All call-to-action buttons route to the verified Synergy Gym WhatsApp number:
`+91 96100 20780` (`919610020780`)

All messages are prefilled contextually via [`src/utils/whatsapp.js`](file:///c:/Users/Lenovo/chirag%20Projects/website/src/utils/whatsapp.js):
- **General Enquiry**: Inquiring about joining and visiting.
- **1 Month (₹1,000)**: Preselected plan enquiry.
- **3 Months (₹2,500)**: Preselected plan enquiry.
- **6 Months (₹4,500)**: Preselected plan enquiry.
- **12 Months (₹8,000)**: Preselected annual plan enquiry.
- **Weight Loss, Muscle Gain, Strength, General Fitness**: Goal-tailored consultations.
- **Walk-in Visit**: Scheduling an in-person gym inspection.

---

## 🔒 Firebase Integration & Security

- Configuration lives in [`src/config/firebase.js`](file:///c:/Users/Lenovo/chirag%20Projects/website/src/config/firebase.js).
- The public website operates statically with **zero hard dependencies on external APIs**, ensuring 100% uptime and blazing fast speed.
- If Firebase environment variables (`VITE_FIREBASE_API_KEY`, etc.) are provided in `.env.local`, client SDK initialization activates automatically.
- **Security Rule**: Admin SDK credentials and private keys must **never** be checked into frontend code. Public visitors interact strictly through WhatsApp and direct inquiries.

---

## 📋 Owner Checklist for Final Launch
- [ ] Review photo gallery images and replace demo assets with actual smartphone or camera photos of Synergy Gym's Jodhpur facility.
- [ ] Record a 10–20 second horizontal video clip on a smartphone walking through the gym, save it as `gym-tour.mp4`, and copy it into `public/assets/videos/`.
- [ ] Confirm floor operating hours match seasonal winter/summer shifts.
