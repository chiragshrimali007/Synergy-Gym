/**
 * Synergy Gym - Media Utilities & Resilient Fallbacks
 * Ensures reliable media playback on both mobile and desktop browsers,
 * gracefully handles loading failures, and prevents error loops.
 */

import { assets } from "../config/assets";

/**
 * Image error handler that:
 * 1. Falls back to canonical hero-fallback if initial src fails
 * 2. Never causes an infinite loop
 *
 * @param {Event} e - Image error event
 * @param {string} [customFallback] - Optional fallback path
 */
export function handleImageFallback(e, customFallback = assets.heroFallback) {
  const img = e.currentTarget;
  if (!img) return;

  const currentSrc = img.src || "";
  const attempts = parseInt(img.dataset.fallbackAttempts || "0", 10);

  // Attempt 1: Switch to canonical fallback
  if (attempts === 0 && customFallback && !currentSrc.includes(customFallback)) {
    img.dataset.fallbackAttempts = "1";
    img.src = customFallback;
    return;
  }

  // Final guard: stop further attempts to prevent loops
  img.dataset.fallbackAttempts = "2";
  img.style.opacity = "0.85";
}
