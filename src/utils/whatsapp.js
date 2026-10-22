import { BUSINESS_INFO } from "../config/business.js";

/**
 * Standardized Contextual WhatsApp Messages
 */
export const WHATSAPP_MESSAGES = {
  GENERAL_ENQUIRY:
    "Hello Synergy Gym! I found your website and would like to know more about the gym, available facilities, and joining process.",
  
  ONE_MONTH:
    "Hello Synergy Gym! I am interested in the 1 Month membership priced at ₹1,000. Please share the joining process and available timings.",
  
  THREE_MONTH:
    "Hello Synergy Gym! I am interested in the 3 Month membership priced at ₹2,500. Please share the joining process and available timings.",
  
  SIX_MONTH:
    "Hello Synergy Gym! I am interested in the 6 Month membership priced at ₹4,500. Please share the joining process and available timings.",
  
  TWELVE_MONTH:
    "Hello Synergy Gym! I am interested in the 12 Month membership priced at ₹8,000. Please share the joining process and available timings.",
  
  WEIGHT_LOSS:
    "Hello Synergy Gym! I would like guidance about your weight-loss training options. Please share the available programs and membership plans.",
  
  MUSCLE_GAIN:
    "Hello Synergy Gym! I want to build muscle and improve my strength. Please share your available training options and membership plans.",
  
  STRENGTH_TRAINING:
    "Hello Synergy Gym! I am interested in your strength training equipment and coaching. Please share your available programs and membership plans.",
  
  GENERAL_FITNESS:
    "Hello Synergy Gym! I want to improve my overall fitness. Please tell me about your training options and membership plans.",
  
  VISIT_THE_GYM:
    "Hello Synergy Gym! I would like to visit the gym before choosing a membership. Please let me know a convenient time to visit."
};

/**
 * Centralized WhatsApp URL Builder
 * @param {string} message - Prefilled text message
 * @param {string} [phone] - Optional phone override, defaults to verified Synergy WhatsApp number
 * @returns {string} Fully encoded WhatsApp URL
 */
export function buildWhatsAppUrl(message, phone = BUSINESS_INFO.whatsappNumber) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message || WHATSAPP_MESSAGES.GENERAL_ENQUIRY);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Helper to open WhatsApp URL in a safe new window/tab
 * @param {string} message 
 */
export function openWhatsApp(message) {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
