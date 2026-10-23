/**
 * Synergy Gym - Media Utilities & Resilient Fallbacks
 * Handles seamless .jpg <-> .jpeg resolution, prevents infinite error loops,
 * and ensures reliable media playback on both mobile and desktop browsers.
 */

import { assets } from "../config/assets";

/**
 * Image error handler that:
 * 1. Tries switching extension between .jpg and .jpeg
 * 2. If already tried or still failing, falls back to canonical hero-fallback
 * 3. Never causes an infinite loop
 *
 * @param {Event} e - Image error event
 * @param {string} [customFallback] - Optional fallback path
 */
export function handleImageFallback(e, customFallback = assets.heroFallback) {
  const img = e.currentTarget;
  if (!img) return;

  const currentSrc = img.src || "";
  const attempts = parseInt(img.dataset.fallbackAttempts || "0", 10);

  // Attempt 1: Try alternate extension (.jpg <-> .jpeg)
  if (attempts === 0) {
    img.dataset.fallbackAttempts = "1";
    if (currentSrc.includes(".jpg")) {
      img.src = currentSrc.replace(/\.jpg(\?.*)?$/i, ".jpeg$1");
      return;
    }
    if (currentSrc.includes(".jpeg")) {
      img.src = currentSrc.replace(/\.jpeg(\?.*)?$/i, ".jpg$1");
      return;
    }
  }

  // Attempt 2: Switch to canonical fallback
  if (attempts === 1 && customFallback && currentSrc !== customFallback) {
    img.dataset.fallbackAttempts = "2";
    img.src = customFallback;
    return;
  }

  // Final guard: stop further attempts to prevent loops
  img.dataset.fallbackAttempts = "3";
  img.style.opacity = "0.85";
}
