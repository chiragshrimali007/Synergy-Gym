/**
 * Centralized Asset Manifest
 * All components reference this manifest instead of hardcoding paths.
 * Media files reside in /public/assets/...
 * All photos are 100% authentic gym images (zero stock photos).
 */

export const assets = {
  logo: "/assets/images/synergy-logo.svg",
  heroImage: "/assets/images/hero-gym.jpg",
  heroVideo: "/assets/videos/hero-workout.mp4",
  heroFallback: "/assets/images/hero-fallback.jpg",
  gymOwner: "/assets/images/gym-owner.jpg",
  videoPoster: "/assets/images/video-poster.jpg",
  gymInterior: "/assets/images/gym-interior.jpg",
  gymInterior2: "/assets/images/gym-interior-2.jpg",
  strengthTraining: "/assets/images/strength-training.jpg",
  weightLoss: "/assets/images/weight-loss.jpg",
  muscleGain: "/assets/images/muscle-gain.jpg",
  generalFitness: "/assets/images/general-fitness.jpg",
  trainerSession: "/assets/images/trainer-session.jpg",
  gallery: [
    {
      url: "/assets/images/gallery-01.jpg",
      caption: "Spacious Gym Floor & Free Weights",
      category: "interior"
    },
    {
      url: "/assets/images/gym-interior.jpg",
      caption: "Strength Training & Cable Crossover Section",
      category: "interior"
    },
    {
      url: "/assets/images/gym-interior-2.jpg",
      caption: "Interior Equipment & Resistance Training Floor",
      category: "interior"
    },
    {
      url: "/assets/images/gallery-02.jpg",
      caption: "Olympic Lifting Platform & Squat Racks",
      category: "strength"
    },
    {
      url: "/assets/images/gallery-03.jpg",
      caption: "Functional Conditioning & Dumbbell Zone",
      category: "training"
    },
    {
      url: "/assets/images/gallery-04.jpg",
      caption: "Multi-Angle Workout Benches & Dumbbell Rows",
      category: "equipment"
    },
    {
      url: "/assets/images/boxing club.jpg",
      caption: "Combat & Boxing Conditioning Area",
      category: "training"
    },
    {
      url: "/assets/images/gym-owner.jpg",
      caption: "Synergy Gym Owner & Head Coach on Training Floor",
      category: "training"
    }
  ],
  gymTourVideo: "/assets/videos/gym-tour.mp4"
};
