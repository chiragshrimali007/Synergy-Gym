import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== RUNNING SYNERGY GYM COMPREHENSIVE VERIFICATION SUITE ===\n");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

// 1. Check Business Configuration
import { BUSINESS_INFO } from "../src/config/business.js";

assert(BUSINESS_INFO.brandName === "Synergy Gym", "Brand name is 'Synergy Gym'");
assert(BUSINESS_INFO.establishedYear === 2015, "Established year is 2015");
assert(BUSINESS_INFO.whatsappNumber === "919610020780", "WhatsApp phone is 919610020780");
assert(BUSINESS_INFO.address.city === "Jodhpur", "City is Jodhpur");
assert(BUSINESS_INFO.address.state === "Rajasthan", "State is Rajasthan");
assert(BUSINESS_INFO.address.line1.includes("Opposite Badwasia Govt. School"), "Address includes 'Opposite Badwasia Govt. School'");
assert(BUSINESS_INFO.address.area.includes("Maderana Colony"), "Area includes 'Maderana Colony'");

// 2. Check Membership Pricing
assert(BUSINESS_INFO.membershipPlans.length === 4, "Exactly 4 membership plans defined");
const plan1 = BUSINESS_INFO.membershipPlans.find(p => p.duration === "1 Month");
const plan3 = BUSINESS_INFO.membershipPlans.find(p => p.duration === "3 Months");
const plan6 = BUSINESS_INFO.membershipPlans.find(p => p.duration === "6 Months");
const plan12 = BUSINESS_INFO.membershipPlans.find(p => p.duration === "12 Months");

assert(plan1 && plan1.price === 1000, "1 Month plan price is ₹1,000");
assert(plan3 && plan3.price === 2500, "3 Months plan price is ₹2,500");
assert(plan6 && plan6.price === 4500, "6 Months plan price is ₹4,500");
assert(plan12 && plan12.price === 8000, "12 Months plan price is ₹8,000");
assert(plan12 && plan12.highlight === true, "12 Months plan is highlighted as long-term commitment");

// 3. Check WhatsApp Helper & Message Encoding
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../src/utils/whatsapp.js";

const testUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.ONE_MONTH);
assert(testUrl.startsWith("https://wa.me/919610020780?text="), "WhatsApp URL has correct base and phone number");
assert(testUrl.includes(encodeURIComponent("₹1,000")), "One-month message properly encodes ₹1,000");

// Check all message presets exist and are non-empty
const expectedKeys = [
  "GENERAL_ENQUIRY",
  "ONE_MONTH",
  "THREE_MONTH",
  "SIX_MONTH",
  "TWELVE_MONTH",
  "WEIGHT_LOSS",
  "MUSCLE_GAIN",
  "STRENGTH_TRAINING",
  "GENERAL_FITNESS",
  "VISIT_THE_GYM"
];

for (const key of expectedKeys) {
  assert(typeof WHATSAPP_MESSAGES[key] === "string" && WHATSAPP_MESSAGES[key].length > 20, `WhatsApp preset '${key}' exists and has descriptive text`);
}

// 4. Check Asset Manifest and Verify Physical Files on Disk
import { assets } from "../src/config/assets.js";

const singleAssets = [
  assets.logo,
  assets.heroImage,
  assets.heroFallback,
  assets.videoPoster,
  assets.gymInterior,
  assets.strengthTraining,
  assets.weightLoss,
  assets.muscleGain,
  assets.generalFitness,
  assets.trainingEquipment,
  assets.trainerSession
];

for (const assetPath of singleAssets) {
  const filePath = path.join(rootDir, "public", assetPath.replace(/^\//, ""));
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  assert(exists && size > 1000, `Asset '${assetPath}' physically exists with valid size (${(size / 1024).toFixed(1)} KB)`);
}

// Check Gallery assets
for (const item of assets.gallery) {
  const filePath = path.join(rootDir, "public", item.url.replace(/^\//, ""));
  const exists = fs.existsSync(filePath);
  assert(exists, `Gallery asset '${item.url}' physically exists on disk`);
}

// 5. Check Favicon and HTML Meta Tags
const htmlPath = path.join(rootDir, "index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");
assert(htmlContent.includes("Synergy Gym"), "index.html contains 'Synergy Gym' title");
assert(htmlContent.includes("Badwasia Govt. School"), "index.html Schema.org contains streetAddress");
assert(htmlContent.includes("+919610020780"), "index.html Schema.org contains telephone");
assert(htmlContent.includes("2015"), "index.html Schema.org contains foundingDate 2015");
assert(htmlContent.includes("ExerciseGym"), "index.html Schema.org has ExerciseGym type");

console.log(`\n========================================`);
console.log(`TOTAL CHECKS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log("🎉 ALL AUTOMATED VERIFICATION CHECKS PASSED PERFECTLY!\n");
}
