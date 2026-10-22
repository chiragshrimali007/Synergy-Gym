import React from "react";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 52px auto" }}>
          <div className="section-tag">
            <MapPin size={14} />
            <span>Visit Synergy Gym</span>
          </div>
          <h2 className="section-title">
            CONVENIENTLY LOCATED IN JODHPUR
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Drop by during floor hours to check out the equipment, meet the trainers, or start your trial session.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            alignItems: "stretch"
          }}
          className="location-grid"
        >
          {/* Left Details Card */}
          <div
            className="card-surface"
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "var(--radius-xl)"
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "24px" }}>
                Contact & Gym Hours
              </h3>

              {/* Address Block */}
              <div style={{ display: "flex", gap: "16px", marginBottom: "28px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} style={{ color: "var(--brand-green)" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    Gym Address
                  </h4>
                  <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.5 }}>
                    {BUSINESS_INFO.address.line1}
                  </p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    {BUSINESS_INFO.address.area}
                  </p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}, {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp Block */}
              <div style={{ display: "flex", gap: "16px", marginBottom: "28px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Phone size={22} style={{ color: "var(--brand-green)" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    Phone & WhatsApp
                  </h4>
                  <p style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--text-primary)" }}>
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--brand-green)", fontWeight: 700 }}>
                    Fast replies during operating shifts
                  </p>
                </div>
              </div>

              {/* Operating Shifts Block */}
              <div style={{ display: "flex", gap: "16px", marginBottom: "36px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Clock size={22} style={{ color: "var(--brand-green)" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    Daily Floor Hours
                  </h4>
                  <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "4px" }}>
                    Morning Shift: <span style={{ fontWeight: 500, color: "var(--text-secondary)" }}>{BUSINESS_INFO.hours.morning}</span>
                  </div>
                  <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px" }}>
                    Evening Shift: <span style={{ fontWeight: 500, color: "var(--text-secondary)" }}>{BUSINESS_INFO.hours.evening}</span>
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                    {BUSINESS_INFO.hours.days}
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ flex: 1, minWidth: "180px", padding: "12px 18px", fontSize: "0.875rem" }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ flex: 1, minWidth: "180px", padding: "12px 18px", fontSize: "0.875rem" }}
              >
                <MessageCircle size={16} />
                <span>Schedule a Visit</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed Stage */}
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-md)",
              minHeight: "420px",
              backgroundColor: "#E2E8F0"
            }}
          >
            <iframe
              title="Synergy Gym Location Map"
              width="100%"
              height="100%"
              style={{ minHeight: "420px", border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={BUSINESS_INFO.mapEmbedUrl}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .location-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
