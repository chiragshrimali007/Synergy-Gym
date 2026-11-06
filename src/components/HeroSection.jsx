import React, { useState, useEffect, useRef } from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import { ArrowUpRight, MessageCircle, MapPin, Calendar } from "lucide-react";

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Ensure DOM video.muted = true to comply with strict mobile autoplay policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by battery saver or policy; poster remains visible
      });
    }
  }, []);

  const scrollToMembership = (e) => {
    e.preventDefault();
    const el = document.getElementById("membership");
    if (el) {
      const offset = 76;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "calc(var(--header-height) + 12px)",
        paddingBottom: "36px",
        overflow: "hidden",
        backgroundColor: "var(--bg-primary)"
      }}
    >
      <div className="container">
        {/* Top Establishment & Special Batch Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
          <div
            className="section-tag"
            style={{
              boxShadow: "0 2px 8px rgba(22, 163, 74, 0.12)",
              fontSize: "clamp(0.75rem, 2.2vw, 0.8125rem)",
              padding: "5px 12px"
            }}
          >
            <Calendar size={13} style={{ flexShrink: 0 }} />
            <span>Building stronger habits since {BUSINESS_INFO.establishedYear}</span>
          </div>

          <a
            href="#programs"
            style={{
              backgroundColor: "rgba(22, 163, 74, 0.1)",
              border: "1px solid rgba(22, 163, 74, 0.25)",
              color: "var(--brand-green)",
              fontWeight: 700,
              fontSize: "clamp(0.72rem, 2vw, 0.8rem)",
              padding: "5px 12px",
              borderRadius: "var(--radius-full)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none"
            }}
          >
            <span>✨ Exclusive Girls Batch: 4 PM – 5 PM</span>
          </a>
        </div>

        {/* Hero Responsive Layout */}
        <div className="hero-grid">
          {/* Headlines & Action Column */}
          <div className="hero-content-col">
            <h1
              style={{
                fontSize: "var(--text-h1)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                lineHeight: "var(--line-height-heading)",
                marginBottom: "16px",
                overflowWrap: "break-word",
                wordBreak: "break-word"
              }}
            >
              YOUR STRONGER <br />
              <span style={{ color: "var(--brand-green)" }}>SELF STARTS</span> <br />
              HERE.
            </h1>

            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--line-height-body)",
                color: "var(--text-secondary)",
                maxWidth: "520px",
                marginBottom: "24px"
              }}
            >
              Build strength. Improve fitness. Show up for yourself. Start your journey with Synergy Gym.
            </p>

            {/* CTAs with Safe Mobile Wrapping */}
            <div className="hero-cta-group">
              <a
                href="#membership"
                onClick={scrollToMembership}
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                <span>Explore Memberships</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "12px 22px" }}
              >
                <MessageCircle size={16} />
                <span>Talk to Our Team</span>
              </a>
            </div>

            {/* Truthful Trust Stats */}
            <div className="hero-stats-grid">
              <div className="hero-stat-card">
                <div className="hero-stat-num">2015</div>
                <div className="hero-stat-label">Established in Jodhpur</div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-num" style={{ color: "var(--brand-green)" }}>₹1,000</div>
                <div className="hero-stat-label">Starting Monthly Plan</div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-num">4 Goals</div>
                <div className="hero-stat-label">Focused Programs</div>
              </div>
            </div>
          </div>

          {/* Visual Stage with Robust Video & Fallback */}
          <div className="hero-visual-col">
            <div className="hero-media-container">
              {/* Optional Video with Fallback */}
              {!videoError && assets.heroVideo ? (
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
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

              {/* Graceful Fallback Hero Image */}
              {(videoError || !assets.heroVideo) && (
                <img
                  src={assets.heroImage || assets.heroFallback}
                  alt="Athlete training at Synergy Gym Jodhpur"
                  onError={handleImageFallback}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              )}

              {/* Subtle visual gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.65) 100%)",
                  pointerEvents: "none"
                }}
              />

              {/* Location Badge overlay */}
              <div className="hero-location-badge">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--brand-electric)",
                      boxShadow: "0 0 8px var(--brand-electric)",
                      flexShrink: 0
                    }}
                  />
                  <div style={{ minWidth: 0, overflow: "hidden" }}>
                    <div style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.02em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      Synergy Gym • Blue City
                    </div>
                    <div style={{ fontSize: "0.6875rem", color: "var(--text-inverse-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
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
                    gap: "4px",
                    flexShrink: 0
                  }}
                >
                  <MapPin size={13} />
                  <span>Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
        }

        .hero-stat-card {
          min-width: 0;
        }

        .hero-stat-num {
          font-size: clamp(20px, 2.8vw, 24px);
          font-weight: 900;
          color: var(--text-primary);
          font-family: var(--font-heading);
          line-height: var(--line-height-heading);
        }

        .hero-stat-label {
          font-size: var(--text-caption);
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 2px;
          line-height: 1.35;
        }

        .hero-media-container {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 16px 36px -10px rgba(15, 23, 42, 0.18);
          border: 1px solid var(--border-light);
          background-color: #0F172A;
          aspect-ratio: 16 / 10;
          width: 100%;
        }

        .hero-location-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justifyContent: space-between;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background-color: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
        }

        @media (max-width: 480px) {
          .hero-cta-group .btn {
            width: 100%;
          }
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 48px;
          }
          .hero-location-badge {
            bottom: 20px;
            left: 20px;
            right: 20px;
            padding: 14px 18px;
          }
        }
      `}</style>
    </section>
  );
}
