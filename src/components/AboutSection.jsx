import React from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import { ShieldCheck, HeartHandshake, Award, MessageCircle, UserCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px auto" }}>
          <div className="section-tag">
            <UserCheck size={14} />
            <span>Leadership & Guidance</span>
          </div>
          <h2 className="section-title">
            MEET THE FOUNDER & HEAD COACH
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            At Synergy Gym, you don't just get access to machines—you train under the direct supervision of an experienced fitness mentor committed to your long-term health.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Owner Portrait Card */}
          <div style={{ position: "relative" }}>
            <div className="about-owner-card">
              <img
                src={assets.gymOwner || assets.heroFallback}
                alt="Synergy Gym Owner and Head Coach"
                loading="lazy"
                onError={handleImageFallback}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />

              {/* Gradient Overlay for Crisp Legibility */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15,23,42,0) 50%, rgba(15,23,42,0.85) 100%)",
                  pointerEvents: "none"
                }}
              />

              {/* In-Photo Name Tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "14px",
                  right: "14px",
                  color: "#FFFFFF",
                  zIndex: 2
                }}
              >
                <div style={{ fontSize: "1.125rem", fontWeight: 900, fontFamily: "var(--font-heading)", letterSpacing: "0.02em" }}>
                  HEAD COACH & FOUNDER
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--brand-electric)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Synergy Gym • Jodhpur
                </div>
              </div>
            </div>

            {/* Establishment Badge */}
            <div className="about-est-badge">
              <div style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.75rem)", fontWeight: 900, fontFamily: "var(--font-heading)", color: "var(--brand-electric)", lineHeight: 1 }}>
                EST. {BUSINESS_INFO.establishedYear}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-inverse-muted)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "4px" }}>
                10+ Years Coaching
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credibility */}
          <div>
            <div className="section-tag" style={{ marginBottom: "16px" }}>
              <Award size={14} />
              <span>Real Fitness • Zero Shortcuts</span>
            </div>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 900, textTransform: "uppercase", color: "var(--text-primary)", lineHeight: "var(--line-height-heading)", marginBottom: "14px" }}>
              BUILT ON DISCIPLINE, INTEGRITY & HONEST GUIDANCE
            </h3>

            <p style={{ fontSize: "var(--text-body)", color: "var(--text-secondary)", lineHeight: "var(--line-height-body)", marginBottom: "14px" }}>
              Founded in 2015 opposite Badwasia Govt. School, Synergy Gym was built with a simple, uncompromising vision: to provide the people of Maderana Colony and Jodhpur with a no-nonsense training space led by true coaching passion.
            </p>

            <p style={{ fontSize: "var(--text-body)", color: "var(--text-secondary)", lineHeight: "var(--line-height-body)", marginBottom: "20px" }}>
              As gym owner and head trainer, I am on the training floor every single day. We don't believe in pushy supplement sales or unrealistic fitness promises. We believe in showing up, learning compound movement mechanics, building functional muscle, and making training an enjoyable part of your everyday life.
            </p>

            {/* Credibility Pillars */}
            <div className="about-pillars-grid" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <ShieldCheck size={20} style={{ color: "var(--brand-green)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "var(--text-body)", fontWeight: 800, marginBottom: "3px" }}>
                    Personal Floor Attention
                  </h4>
                  <p style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)", lineHeight: 1.45 }}>
                    Every beginner is taught correct barbell form, machine adjustment, and injury prevention.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--brand-green)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "var(--text-body)", fontWeight: 800, marginBottom: "3px" }}>
                    Friendly, Respectful Culture
                  </h4>
                  <p style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)", lineHeight: 1.45 }}>
                    Zero intimidation. Everyone from high school students to working professionals trains comfortably.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.OWNER_DIRECT)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "12px 22px" }}
              >
                <MessageCircle size={16} />
                <span>Chat Directly with the Owner</span>
              </a>

              <a
                href="#membership"
                className="btn btn-outline"
                style={{ padding: "12px 20px" }}
              >
                <span>View Plans & Fees</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-owner-card {
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-xl);
          background-color: #0F172A;
          width: 100%;
          position: relative;
          aspect-ratio: 16 / 10;
          max-height: 250px;
        }

        @media (min-width: 768px) {
          .about-owner-card {
            aspect-ratio: 3 / 4;
            max-height: 520px;
          }
        }
      `}</style>
    </section>
  );
}
