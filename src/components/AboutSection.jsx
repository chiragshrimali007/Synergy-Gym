import React from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import { Clock, HeartHandshake, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Stage */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-xl)",
                backgroundColor: "#0F172A",
                aspectRatio: "4 / 3",
                width: "100%"
              }}
            >
              <img
                src={assets.trainerSession || assets.gymInterior}
                alt="Coaching and dedication at Synergy Gym"
                loading="lazy"
                onError={handleImageFallback}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Establishment Badge */}
            <div className="about-est-badge">
              <div style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 900, fontFamily: "var(--font-heading)", color: "var(--brand-electric)", lineHeight: 1 }}>
                EST. {BUSINESS_INFO.establishedYear}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-inverse-muted)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "4px" }}>
                Jodhpur, Rajasthan
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div>
            <div className="section-tag">
              <Clock size={14} />
              <span>Serving Jodhpur Since 2015</span>
            </div>

            <h2 className="section-title">
              MORE THAN A WORKOUT. A STRONGER ROUTINE.
            </h2>

            <p style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "16px" }}>
              Founded in 2015, Synergy Gym was built with a straightforward mission: to provide the community in Maderana Colony and surrounding Jodhpur neighborhoods with an authentic, reliable, and supportive space to train.
            </p>

            <p style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "28px" }}>
              We focus on the fundamentals: solid free weights, compound lifting racks, resistance machines, and conditioning floor space. Whether you are stepping onto a gym floor for the very first time or chasing your personal records, Synergy Gym is committed to helping you build lasting, healthy daily habits.
            </p>

            {/* Core Pillars */}
            <div className="about-pillars-grid">
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <ShieldCheck size={20} style={{ color: "var(--brand-green)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, marginBottom: "4px" }}>
                    Honest Coaching
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.45 }}>
                    Floor guidance prioritizing proper lifting form and joint longevity.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--brand-green)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, marginBottom: "4px" }}>
                    Welcoming Culture
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.45 }}>
                    An encouraging environment where every member trains at their own pace.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "14px 28px", minHeight: "48px" }}
            >
              <span>Speak with Our Team</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }

        .about-est-badge {
          position: absolute;
          bottom: -16px;
          right: 16px;
          background-color: var(--text-primary);
          color: #FFFFFF;
          padding: 14px 20px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          border: 2px solid var(--brand-electric);
          max-width: calc(100% - 32px);
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.1fr;
            gap: 56px;
          }
          .about-est-badge {
            bottom: -24px;
            right: 24px;
            padding: 18px 26px;
          }
        }
      `}</style>
    </section>
  );
}
