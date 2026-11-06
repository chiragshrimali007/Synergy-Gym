/**
 * Synergy Gym - Business Information & Verified Configuration
 * Strictly truthful details based on business records since 2015.
 */

export const BUSINESS_INFO = {
  brandName: "Synergy Gym",
  tagline: "Build Your Stronger Self",
  establishedYear: 2015,
  phoneDisplay: "+91 96100 20780",
  whatsappNumber: "919610020780", // International format without +
  email: "contact@synergygym.in",

  // Exact Physical Location Coordinates
  coordinates: {
    lat: 26.31492966707864,
    lng: 73.05242410415379,
    label: "26.3149° N, 73.0524° E"
  },

  address: {
    line1: "Opposite Badwasia Govt. School",
    area: "Maderana Colony, Blue City",
    city: "Jodhpur",
    state: "Rajasthan",
    country: "India",
    landmark: "Directly opposite Badwasia Government School main gate",
    full: "Opposite Badwasia Govt. School, Maderana Colony, Blue City, Jodhpur, Rajasthan 342007, India"
  },

  hours: {
    morning: "5:30 AM – 10:30 AM",
    girlsBatch: "4:00 PM – 5:00 PM",
    evening: "5:00 PM – 9:30 PM",
    days: "Monday – Saturday (Sunday Closed / Rest Day)"
  },

  // Dedicated Exclusive Batch for Women & Girls
  girlsBatch: {
    title: "Girls Persona Batch",
    badge: "Exclusive Women's Hour",
    timing: "4:00 PM – 5:00 PM",
    shift: "Every Evening (Mon – Sat)",
    description: "A private, comfortable, and empowering workout hour exclusively reserved for women and girls. Train with confidence, personalized guidance, and complete peace of mind.",
    features: [
      "Exclusive Women's Floor Access (No General Crowd During This Hour)",
      "Safe, Comfortable & Highly Respectful Atmosphere",
      "Full Equipment Availability (Treadmills, Dumbbells, Resistance Machines)",
      "Targeted Fat Loss, Toning, Core Stability & Posture Routines",
      "Direct Coach Guidance & Machine Form Correction for Beginners"
    ]
  },

  // Founder & Head Coach Information
  owner: {
    title: "Founder & Head Coach",
    role: "Gym Owner & Lead Trainer",
    experience: "10+ Years Coaching Experience",
    bio: "Passionate about real, functional fitness and disciplined habits. Founded Synergy Gym in 2015 to provide honest, gimmick-free training where everyone—from beginners to serious athletes—receives personal attention and proper lifting education.",
    highlights: [
      "10+ Years Active Fitness Coaching in Jodhpur",
      "Specialized in Natural Hypertrophy & Joint Longevity",
      "Hands-on Floor Supervision & Technique Correction",
      "Direct Guidance for Every Member"
    ]
  },

  // Exact Google Maps Directions & Search URLs
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=26.31492966707864,73.05242410415379",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.31492966707864,73.05242410415379",
  mapEmbedUrl: "https://maps.google.com/maps?q=26.31492966707864,73.05242410415379&hl=en&z=17&output=embed",

  membershipPlans: [
    {
      id: "1-month",
      duration: "1 Month",
      periodLabel: "per month",
      price: 1000,
      currency: "₹",
      badge: null,
      description: "Ideal for beginners looking to kickstart their fitness routine and explore the gym environment.",
      features: [
        "Full gym floor access",
        "Free weights & strength machines",
        "Cardio & functional area access",
        "Floor trainer guidance",
        "Locker access during workout"
      ],
      whatsappKey: "ONE_MONTH"
    },
    {
      id: "3-months",
      duration: "3 Months",
      periodLabel: "quarterly plan",
      price: 2500,
      currency: "₹",
      badge: "Popular Starter",
      description: "Great timeframe to build habit consistency, develop fundamental movement patterns, and see measurable progress.",
      features: [
        "Full gym floor access",
        "Free weights & strength machines",
        "Cardio & functional area access",
        "Workout form correction",
        "Progress tracking support"
      ],
      whatsappKey: "THREE_MONTH"
    },
    {
      id: "6-months",
      duration: "6 Months",
      periodLabel: "half-yearly plan",
      price: 4500,
      currency: "₹",
      badge: "Best Value",
      description: "Substantial commitment designed to achieve significant body transformation, muscle tone, or endurance gains.",
      features: [
        "Full gym floor access",
        "Free weights & strength machines",
        "Cardio & functional area access",
        "Dedicated routine guidance",
        "Body composition assessment"
      ],
      whatsappKey: "SIX_MONTH"
    },
    {
      id: "12-months",
      duration: "12 Months",
      periodLabel: "annual plan",
      price: 8000,
      currency: "₹",
      badge: "Long-Term Commitment",
      highlight: true,
      description: "Our comprehensive annual plan for athletes and members dedicated to making fitness an enduring daily lifestyle.",
      features: [
        "Full year uninterrupted gym access",
        "All strength & conditioning equipment",
        "Cardio & functional area access",
        "Continuous technique coaching",
        "Complimentary fitness assessment"
      ],
      whatsappKey: "TWELVE_MONTH"
    }
  ],

  programs: [
    {
      id: "weight-loss",
      title: "Weight Loss & Conditioning",
      shortDescription: "Structured calorie-burning workouts, cardio conditioning, and high-intensity circuit training to build endurance and shed excess weight safely.",
      imageKey: "weightLoss",
      whatsappKey: "WEIGHT_LOSS",
      tag: "Conditioning"
    },
    {
      id: "muscle-gain",
      title: "Muscle Gain & Hypertrophy",
      shortDescription: "Progressive resistance training targeting muscle hypertrophy, balanced volume, and proper exercise selection to build dense, functional muscle.",
      imageKey: "muscleGain",
      whatsappKey: "MUSCLE_GAIN",
      tag: "Hypertrophy"
    },
    {
      id: "strength-training",
      title: "Strength Training",
      shortDescription: "Core compound lifts including squats, deadlifts, and bench presses designed to maximize power output, joint resilience, and overall physical strength.",
      imageKey: "strengthTraining",
      whatsappKey: "STRENGTH_TRAINING",
      tag: "Power & Strength"
    },
    {
      id: "general-fitness",
      title: "General Fitness & Lifestyle",
      shortDescription: "Balanced mobility, cardiovascular stamina, and functional strength exercises to boost everyday energy, posture, and long-term vitality.",
      imageKey: "generalFitness",
      whatsappKey: "GENERAL_FITNESS",
      tag: "Active Living"
    }
  ],

  facilities: [
    {
      title: "Free Weights & Olympic Racks",
      description: "Dumbbells ranging up to heavy loads, Olympic barbells, flat & incline benches, and dedicated squat racks.",
      icon: "Dumbbell"
    },
    {
      title: "Plate-Loaded & Selectorized Machines",
      description: "Targeted machines for chest, back, legs, and arms providing safe resistance curves for all experience levels.",
      icon: "ShieldCheck"
    },
    {
      title: "Cardio & Endurance Zone",
      description: "High-grade treadmills, stationary bicycles, and elliptical trainers to build stamina and heart health.",
      icon: "Flame"
    },
    {
      title: "Functional & Mobility Floor",
      description: "Open floor space for battle ropes, kettlebells, core conditioning, dynamic stretching, and warm-ups.",
      icon: "Zap"
    },
    {
      title: "Certified Floor Trainers",
      description: "Knowledgeable coaches available during floor hours to correct technique, ensure safety, and guide your routine.",
      icon: "Award"
    },
    {
      title: "Clean, Well-Ventilated Space",
      description: "Hygienic workout environment with continuous air circulation, sanitized equipment, and motivational atmosphere.",
      icon: "Sparkles"
    }
  ]
};
