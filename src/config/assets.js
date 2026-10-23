/**
 * Centralized Asset Manifest
 * All components must reference this manifest instead of hardcoding paths.
 * Media files reside in /public/assets/...
 *
 * Canonical convention: Standard paths use .jpg extensions.
 * Our media helper also provides automatic fallback to .jpeg if present.
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
      caption: "Spacious Gym Floor & Heavy Dumbbells",
      category: "interior"
    },
    {
      url: "/assets/images/gallery-02.jpg",
      caption: "Olympic Lifting Platform & Squat Racks",
      category: "strength"
    },
    {
      url: "/assets/images/gallery-03.jpg",
      caption: "Functional Conditioning & Free Weights Zone",
      category: "training"
    },
    {
      url: "/assets/images/gallery-04.jpg",
      caption: "Multi-Angle Workout Benches & Dumbbell Rows",
      category: "equipment"
    },
    {
      url: "/assets/images/gym-interior.jpg",
      caption: "Full View of Modern Training Equipment",
      category: "interior"
    },
    {
      url: "/assets/images/training-equipment.jpg",
      caption: "Heavy Duty Dumbbells & Precision Iron",
      category: "equipment"
    },
    {
      url: "/assets/images/boxing club.jpg",
      caption: "Combat & Boxing Conditioning Area",
      category: "training"
    }
  ],
  gymTourVideo: "/assets/videos/gym-tour.mp4"
};
