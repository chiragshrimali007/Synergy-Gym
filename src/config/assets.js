/**
 * Centralized Asset Manifest
 * All components must reference this manifest instead of hardcoding paths.
 * Media files reside in /public/assets/...
 */

export const assets = {
  logo: "/assets/images/synergy-logo.svg",
  heroImage: "/assets/images/hero-gym.jpg",
  heroVideo: "/assets/videos/hero-workout.mp4",
  heroFallback: "/assets/images/hero-fallback.jpg",
  videoPoster: "/assets/images/video-poster.jpg",
  gymInterior: "/assets/images/gym-interior.jpg",
  strengthTraining: "/assets/images/strength-training.jpg",
  weightLoss: "/assets/images/weight-loss.jpg",
  muscleGain: "/assets/images/muscle-gain.jpg",
  generalFitness: "/assets/images/general-fitness.jpg",
  trainingEquipment: "/assets/images/training-equipment.jpg",
  trainerSession: "/assets/images/trainer-session.jpg",
  gallery: [
    {
      url: "/assets/images/gallery-01.jpg",
      caption: "Spacious Gym Floor & Free Weights Station",
      category: "interior"
    },
    {
      url: "/assets/images/gallery-02.jpg",
      caption: "Olympic Lifting Racks & Barbell Bumper Plates",
      category: "strength"
    },
    {
      url: "/assets/images/gallery-03.jpg",
      caption: "High-Intensity Conditioning & Functional Training",
      category: "training"
    },
    {
      url: "/assets/images/gallery-04.jpg",
      caption: "Dumbbells, Benches & Strength Equipment Row",
      category: "equipment"
    },
    {
      url: "/assets/images/gym-interior.jpg",
      caption: "Modern Strength & Cardio Training Environment",
      category: "interior"
    },
    {
      url: "/assets/images/training-equipment.jpg",
      caption: "Heavy Duty Dumbbells & Precision Resistance Equipment",
      category: "equipment"
    }
  ],
  gymTourVideo: "/assets/videos/gym-tour.mp4"
};
