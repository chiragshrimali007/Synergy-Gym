import React from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { Clock, HeartHandshake, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="about-grid"
        >
          {/* Left Column: Visual Composition */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-xl)",
                backgroundColor: "#0F172A",
                aspectRatio: "4 / 3"
              }}
            >
              <img
                src={assets.trainerSession || assets.gymInterior}
                alt="Coaching and dedication at Synergy Gym"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  if (e.currentTarget.src !== assets.heroFallback) {
                    e.currentTarget.src = assets.heroFallback;
                  }
                }}
              />
            </div>

            {/* Establishment Floating Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-24px",
                right: "24px",
                backgroundColor: "var(--text-primary)",
                color: "#FFFFFF",
                padding: "20px 28px",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-xl)",
                border: "2px solid var(--brand-electric)"
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 900, fontFamily: "var(--font-heading)", color: "var(--brand-electric)" }}>
                EST. {BUSINESS_INFO.establishedYear}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "var(--text-inverse-muted)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Jodhpur, Rajasthan
              </div>
            </div>
          </div>

          {/* Right Column: Truthful Brand Editorial Narrative */}
          <div>
            <div className="section-tag">
              <Clock size={14} />
              <span>Serving Jodhpur Since 2015</span>
            </div>

            <h2 className="section-title">
              MORE THAN A WORKOUT. A STRONGER ROUTINE.
            </h2>

            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
              Founded in 2015, Synergy Gym was built with a straightforward mission: to provide the community in Maderana Colony and surrounding Jodhpur neighborhoods with an authentic, reliable, and supportive space to train.
            </p>

            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "32px" }}>
              We focus on the fundamentals: solid free weights, compound lifting racks, resistance machines, and conditioning floor space. Whether you are stepping onto a gym floor for the very first time or chasing your personal records, Synergy Gym is committed to helping you build lasting, healthy daily habits.
            </p>

            {/* Core Pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "36px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <ShieldCheck size={20} style={{ color: "var(--brand-green)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, marginBottom: "4px" }}>
                    Honest Coaching
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
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
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
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
              style={{ padding: "14px 28px" }}
            >
              <span>Speak with Our Team</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
