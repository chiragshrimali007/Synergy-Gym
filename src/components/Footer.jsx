import React from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { Phone, MapPin, MessageCircle, ExternalLink, ArrowUp } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0B0F19",
        color: "#94A3B8",
        paddingTop: "72px",
        paddingBottom: "40px",
        borderTop: "1px solid #1E293B"
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
            marginBottom: "56px"
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <img
                src={assets.logo}
                alt="Synergy Gym"
                style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "20px" }}>
              Building stronger habits, endurance, and physical strength in Jodhpur since 2015. Authentic fitness coaching with zero false claims.
            </p>
            <div style={{ display: "inline-block" }}>
              <span className="badge-pill badge-lime" style={{ fontSize: "0.75rem" }}>
                Est. {BUSINESS_INFO.establishedYear} • Jodhpur
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 800, marginBottom: "20px" }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9375rem" }}>
              <li>
                <a href="#hero" style={{ color: "#94A3B8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" style={{ color: "#94A3B8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#membership" style={{ color: "#94A3B8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  Membership Pricing
                </a>
              </li>
              <li>
                <a href="#experience" style={{ color: "#94A3B8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  Facilities & Equipment
                </a>
              </li>
              <li>
                <a href="#gallery" style={{ color: "#94A3B8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#location" style={{ color: "#94A3B8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Shifts */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 800, marginBottom: "20px" }}>
              Training Shifts
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9375rem" }}>
              <div>
                <strong style={{ color: "#FFFFFF" }}>Morning Shift:</strong>
                <p>{BUSINESS_INFO.hours.morning}</p>
              </div>
              <div>
                <strong style={{ color: "#FFFFFF" }}>Evening Shift:</strong>
                <p>{BUSINESS_INFO.hours.evening}</p>
              </div>
              <div>
                <strong style={{ color: "#FFFFFF" }}>Days:</strong>
                <p>{BUSINESS_INFO.hours.days}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 800, marginBottom: "20px" }}>
              Direct Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.9375rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} style={{ color: "var(--brand-electric)", flexShrink: 0, marginTop: "2px" }} />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={18} style={{ color: "var(--brand-electric)", flexShrink: 0 }} />
                <a href={`tel:${BUSINESS_INFO.phoneDisplay.replace(/\s+/g, "")}`} style={{ color: "#FFFFFF", fontWeight: 700 }}>
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div style={{ marginTop: "8px" }}>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: "10px 18px", fontSize: "0.875rem", width: "100%" }}
                >
                  <MessageCircle size={16} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #1E293B",
            paddingTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontSize: "0.8125rem"
          }}
        >
          <div>
            © {CURRENT_YEAR} Synergy Gym. All rights reserved. Serving Jodhpur fitness enthusiasts since 2015.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--brand-electric)", display: "flex", alignItems: "center", gap: "4px" }}
            >
              <span>Google Maps</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
