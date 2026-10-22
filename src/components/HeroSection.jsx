import React, { useState } from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { ArrowUpRight, MessageCircle, MapPin, Calendar } from "lucide-react";

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  const scrollToMembership = (e) => {
    e.preventDefault();
    const el = document.getElementById("membership");
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "calc(var(--header-height) + 40px)",
        paddingBottom: "80px",
        overflow: "hidden",
        backgroundColor: "var(--bg-primary)"
      }}
    >
      <div className="container">
        {/* Top Establishment Pill */}
        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px" }}>
          <div
            className="section-tag"
            style={{
              boxShadow: "0 2px 8px rgba(22, 163, 74, 0.12)",
              gap: "8px"
            }}
          >
            <Calendar size={14} />
            <span>Building stronger habits since {BUSINESS_INFO.establishedYear}</span>
          </div>
        </div>

        {/* Hero Grid: Editorial Typography Left + Visual Focal Stage Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & CTA */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                lineHeight: 1.08,
                marginBottom: "24px"
              }}
            >
              YOUR STRONGER <br />
              <span style={{ color: "var(--brand-green)" }}>SELF STARTS</span> <br />
              HERE.
            </h1>

            <p
              style={{
                fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                maxWidth: "540px",
                marginBottom: "36px"
              }}
            >
              Build strength. Improve fitness. Show up for yourself. Start your journey with Synergy Gym.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                marginBottom: "44px"
              }}
            >
              <a
                href="#membership"
                onClick={scrollToMembership}
                className="btn btn-primary"
                style={{ padding: "16px 32px", fontSize: "1rem" }}
              >
                <span>Explore Memberships</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "16px 28px", fontSize: "1rem" }}
              >
                <MessageCircle size={18} />
                <span>Talk to Our Team</span>
              </a>
            </div>

            {/* Truthful Trust Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "16px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-light)"
              }}
            >
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                  2015
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  Established in Jodhpur
                </div>
              </div>

              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--brand-green)", fontFamily: "var(--font-heading)" }}>
                  ₹1,000
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  Starting Monthly Plan
                </div>
              </div>

              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                  4 Goals
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  Focused Programs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Fallback Safety */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.2)",
                border: "1px solid var(--border-light)",
                backgroundColor: "#0F172A",
                aspectRatio: "16 / 11"
              }}
            >
              {/* Optional Video with Fallback Image */}
              {!videoError && assets.heroVideo ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={assets.heroImage}
                  onError={() => setVideoError(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                >
                  <source src={assets.heroVideo} type="video/mp4" />
                </video>
              ) : null}

              {/* Graceful Fallback Hero Image (renders if video is missing or errors) */}
              {(videoError || !assets.heroVideo) && (
                <img
                  src={assets.heroImage || assets.heroFallback}
                  alt="Athlete training at Synergy Gym Jodhpur"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                  onError={(e) => {
                    // Fallback to hero fallback if primary image fails
                    if (e.currentTarget.src !== assets.heroFallback) {
                      e.currentTarget.src = assets.heroFallback;
                    }
                  }}
                />
              )}

              {/* Photographic subtle gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.65) 100%)",
                  pointerEvents: "none"
                }}
              />

              {/* Floating Badge on Image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  backgroundColor: "rgba(15, 23, 42, 0.88)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#FFFFFF"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "var(--brand-electric)",
                      boxShadow: "0 0 10px var(--brand-electric)"
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.02em" }}>
                      Synergy Gym • Blue City
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-inverse-muted)" }}>
                      Opposite Badwasia Govt. School, Jodhpur
                    </div>
                  </div>
                </div>

                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--brand-electric)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  <MapPin size={14} />
                  <span>View Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
