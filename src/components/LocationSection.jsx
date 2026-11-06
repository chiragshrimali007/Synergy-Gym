import React from "react";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageCircle,
  Navigation,
  Sparkles,
  Compass
} from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 44px auto" }}>
          <div className="section-tag">
            <MapPin size={14} />
            <span>Visit Synergy Gym</span>
          </div>
          <h2 className="section-title">
            CONVENIENTLY LOCATED IN JODHPUR
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Easily accessible from Maderana Colony, Mandore, Paota Circle, and surrounding Blue City neighborhoods. Drop by during floor hours to start your fitness routine.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="location-grid">
          {/* Left Details Card */}
          <div
            className="card-surface"
            style={{
              padding: "clamp(20px, 4vw, 36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "var(--radius-xl)"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 800, margin: 0, lineHeight: "var(--line-height-heading)" }}>
                  Contact, Shifts & Exact Pin
                </h3>
                <span
                  style={{
                    backgroundColor: "rgba(22, 163, 74, 0.1)",
                    border: "1px solid rgba(22, 163, 74, 0.25)",
                    color: "var(--brand-green)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--text-caption)",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  <Compass size={12} />
                  <span>Exact GPS: 26.3149° N, 73.0524° E</span>
                </span>
              </div>

              {/* Address Block */}
              <div style={{ display: "flex", gap: "14px", marginBottom: "18px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} style={{ color: "var(--brand-green)" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ fontSize: "var(--text-caption)", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
                    Physical Address & Landmark
                  </h4>
                  <p style={{ fontSize: "var(--text-body)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.4 }}>
                    {BUSINESS_INFO.address.line1}
                  </p>
                  <p style={{ fontSize: "var(--text-body)", color: "var(--text-secondary)" }}>
                    {BUSINESS_INFO.address.area}
                  </p>
                  <p style={{ fontSize: "var(--text-body)", color: "var(--text-secondary)" }}>
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
                  </p>
                  <p style={{ fontSize: "var(--text-caption)", color: "var(--brand-green)", marginTop: "4px", fontWeight: 600 }}>
                    📍 Landmark: Right opposite Badwasia Govt. School main entrance
                  </p>
                </div>
              </div>

              {/* Operating Shifts Block (With Girls Batch Highlighted) */}
              <div style={{ display: "flex", gap: "14px", marginBottom: "18px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Clock size={20} style={{ color: "var(--brand-green)" }} />
                </div>
                <div style={{ minWidth: 0, width: "100%" }}>
                  <h4 style={{ fontSize: "var(--text-caption)", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    Daily Floor & Batch Timings
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ fontSize: "var(--text-body)", color: "var(--text-primary)", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                      <strong>Morning Shift:</strong>
                      <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>{BUSINESS_INFO.hours.morning}</span>
                    </div>

                    {/* Girls Batch Highlight */}
                    <div
                      style={{
                        fontSize: "var(--text-body)",
                        backgroundColor: "rgba(22, 163, 74, 0.08)",
                        padding: "6px 10px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(22, 163, 74, 0.2)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "4px"
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "var(--brand-green)", display: "flex", alignItems: "center", gap: "5px" }}>
                        <Sparkles size={13} />
                        <span>Girls Persona Batch:</span>
                      </span>
                      <strong style={{ color: "var(--brand-green)" }}>{BUSINESS_INFO.hours.girlsBatch}</strong>
                    </div>

                    <div style={{ fontSize: "var(--text-body)", color: "var(--text-primary)", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                      <strong>Evening Shift:</strong>
                      <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>{BUSINESS_INFO.hours.evening}</span>
                    </div>

                    <div style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)", marginTop: "2px" }}>
                      {BUSINESS_INFO.hours.days}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone & Assistance */}
              <div style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} style={{ color: "var(--brand-green)" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ fontSize: "var(--text-caption)", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
                    Call or WhatsApp Support
                  </h4>
                  <p style={{ fontSize: "var(--text-h3)", fontWeight: 800, color: "var(--text-primary)" }}>
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p style={{ fontSize: "var(--text-caption)", color: "var(--brand-green)", fontWeight: 700 }}>
                    Directly answers your queries during all open shifts
                  </p>
                </div>
              </div>

              {/* Distance & Travel Helper Box */}
              <div
                style={{
                  backgroundColor: "#F1F5F9",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 14px",
                  marginBottom: "20px",
                  border: "1px solid #E2E8F0"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <Navigation size={15} style={{ color: "var(--brand-green)" }} />
                  <span style={{ fontSize: "var(--text-body)", fontWeight: 800, color: "var(--text-primary)" }}>
                    Want to check how far you are?
                  </span>
                </div>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", lineHeight: 1.45, margin: 0 }}>
                  Click below to open live turn-by-turn directions. Google Maps will instantly calculate the exact distance (km) and driving/walking time from your current location or home.
                </p>
              </div>
            </div>

            {/* Location CTAs */}
            <div className="location-cta-group">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "12px 18px", minHeight: "48px" }}
              >
                <Navigation size={16} />
                <span>Get Directions & Distance</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "12px 18px", minHeight: "48px" }}
              >
                <MessageCircle size={16} />
                <span>Schedule a Visit</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed Stage */}
          <div className="map-embed-wrapper" style={{ position: "relative" }}>
            <iframe
              title="Synergy Gym Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, width: "100%", height: "100%" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={BUSINESS_INFO.mapEmbedUrl}
            />

            {/* Quick Map Overlay Pin Badge */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "#FFFFFF",
                padding: "8px 14px",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                pointerEvents: "none"
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-electric)",
                  boxShadow: "0 0 8px var(--brand-electric)"
                }}
              />
              <span>Synergy Gym (Opp. Badwasia Govt. School)</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .location-cta-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .map-embed-wrapper {
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-md);
          min-height: 240px;
          height: 260px;
          background-color: #E2E8F0;
          width: 100%;
        }

        @media (min-width: 580px) {
          .location-cta-group {
            flex-direction: row;
          }
          .location-cta-group .btn {
            flex: 1;
          }
        }

        @media (min-width: 992px) {
          .location-grid {
            grid-template-columns: 1fr 1.25fr;
            gap: 36px;
          }
          .map-embed-wrapper {
            min-height: 400px;
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
}
