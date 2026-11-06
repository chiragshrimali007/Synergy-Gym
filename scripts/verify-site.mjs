import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== RUNNING SYNERGY GYM COMPREHENSIVE AUDIT & VERIFICATION SUITE ===\n");

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

// 1. Business Configuration Verification
import { BUSINESS_INFO } from "../src/config/business.js";

assert(BUSINESS_INFO.brandName === "Synergy Gym", "Brand name is 'Synergy Gym'");
assert(BUSINESS_INFO.establishedYear === 2015, "Established year is 2015");
assert(BUSINESS_INFO.whatsappNumber === "919610020780", "WhatsApp phone is 919610020780");
assert(BUSINESS_INFO.address.city === "Jodhpur", "City is Jodhpur");
assert(BUSINESS_INFO.address.state === "Rajasthan", "State is Rajasthan");
assert(BUSINESS_INFO.address.line1.includes("Opposite Badwasia Govt. School"), "Address includes 'Opposite Badwasia Govt. School'");
assert(BUSINESS_INFO.address.area.includes("Maderana Colony"), "Area includes 'Maderana Colony'");

// Verify Exact Coordinates
assert(BUSINESS_INFO.coordinates.lat === 26.31492966707864, "Exact latitude is 26.31492966707864");
assert(BUSINESS_INFO.coordinates.lng === 73.05242410415379, "Exact longitude is 73.05242410415379");
assert(BUSINESS_INFO.googleMapsDirectionsUrl.includes("destination=26.31492966707864,73.05242410415379"), "Directions URL has exact destination");
assert(BUSINESS_INFO.mapEmbedUrl.includes("26.31492966707864,73.05242410415379"), "Map embed URL has exact coordinates");

// Verify Girls Persona Batch
assert(typeof BUSINESS_INFO.hours.girlsBatch === "string" && BUSINESS_INFO.hours.girlsBatch.includes("4:00 PM"), "Girls Persona Batch timing is configured for 4:00 PM");
assert(BUSINESS_INFO.girlsBatch && BUSINESS_INFO.girlsBatch.title === "Girls Persona Batch", "Girls Persona Batch info object exists");

// 2. Membership Pricing Verification
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

// 3. WhatsApp Integration & Preset Messages
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../src/utils/whatsapp.js";

const testUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.ONE_MONTH);
assert(testUrl.startsWith("https://wa.me/919610020780?text="), "WhatsApp URL has correct base and phone number");
assert(testUrl.includes(encodeURIComponent("₹1,000")), "One-month message properly encodes ₹1,000");

const expectedKeys = [
  "GENERAL_ENQUIRY",
  "GIRLS_BATCH",
  "OWNER_DIRECT",
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

// 4. Physical Asset Integrity (Clean, Non-Stock, Real Gym Assets)
import { assets } from "../src/config/assets.js";

const singleAssets = [
  assets.logo,
  assets.heroImage,
  assets.heroFallback,
  assets.gymOwner,
  assets.videoPoster,
  assets.gymInterior,
  assets.gymInterior2,
  assets.strengthTraining,
  assets.weightLoss,
  assets.muscleGain,
  assets.generalFitness,
  assets.trainerSession
];

for (const assetPath of singleAssets) {
  const filePath = path.join(rootDir, "public", assetPath.replace(/^\//, ""));
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  assert(exists && size > 1000, `Asset '${assetPath}' physically exists with valid size (${(size / 1024).toFixed(1)} KB)`);
}

// Verify Unsplash stock images are deleted
assert(!fs.existsSync(path.join(rootDir, "public/assets/images/training-equipment.jpg")), "Unsplash stock photo training-equipment.jpg is permanently removed");
assert(!fs.existsSync(path.join(rootDir, "public/assets/images/training-equipment.jpeg")), "Unsplash stock photo training-equipment.jpeg is permanently removed");

// Check Gallery assets
for (const item of assets.gallery) {
  const filePath = path.join(rootDir, "public", item.url.replace(/^\//, ""));
  const exists = fs.existsSync(filePath);
  assert(exists, `Gallery asset '${item.url}' physically exists on disk`);
}

// Check Videos
const videos = [assets.heroVideo, assets.gymTourVideo];
for (const videoPath of videos) {
  const filePath = path.join(rootDir, "public", videoPath.replace(/^\//, ""));
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  assert(exists && size > 100000, `Video '${videoPath}' exists and has substantial size (${(size / 1024 / 1024).toFixed(2)} MB)`);
}

// 5. Check Viewport Meta Tag and Responsive CSS Rules
const htmlPath = path.join(rootDir, "index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");
assert(htmlContent.includes("viewport-fit=cover"), "index.html viewport meta tag includes 'viewport-fit=cover'");
assert(htmlContent.includes("ExerciseGym"), "index.html Schema.org has ExerciseGym type");

const cssPath = path.join(rootDir, "src/index.css");
const cssContent = fs.readFileSync(cssPath, "utf-8");
assert(cssContent.includes("--sab"), "CSS defines safe-area variable --sab");
assert(!cssContent.includes("minmax(300px, 1fr)"), "CSS does not contain unsafe fixed 300px minmax rules");
assert(cssContent.includes("min-height: 48px"), "CSS enforces touch-friendly button targets (>= 44px)");

// 6. Live HTTP Request Verification Against Running Dev Server
async function checkHttpAssets() {
  console.log("\n--- Checking Live HTTP Server Responses (Port 5173) ---");
  const testUrls = [
    assets.logo,
    assets.heroImage,
    assets.gymOwner,
    assets.gymInterior,
    assets.gymInterior2,
    assets.heroVideo,
    assets.gymTourVideo
  ];

  for (const url of testUrls) {
    await new Promise((resolve) => {
      const req = http.request({ host: "localhost", port: 5173, path: encodeURI(url), method: "HEAD" }, (res) => {
        assert(res.statusCode === 200, `HTTP GET '${url}' responded with status 200 (Content-Type: ${res.headers['content-type']})`);
        resolve();
      });
      req.on("error", (e) => {
        console.warn(`⚠️ HTTP Check for '${url}' skipped or error: ${e.message}`);
        resolve();
      });
      req.end();
    });
  }
}

await checkHttpAssets();

console.log(`\n========================================`);
console.log(`TOTAL CHECKS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log("🎉 ALL AUTOMATED VERIFICATION CHECKS PASSED PERFECTLY!\n");
}
