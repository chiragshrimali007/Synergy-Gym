import React from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
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
        paddingTop: "60px",
        paddingBottom: "calc(36px + var(--sab))",
        borderTop: "1px solid #1E293B"
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <img
                src={assets.logo}
                alt="Synergy Gym"
                onError={handleImageFallback}
                style={{ height: "38px", width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "18px" }}>
              Building stronger habits, endurance, and physical strength in Jodhpur since 2015. Authentic fitness coaching with zero false claims.
            </p>
            <div>
              <span className="badge-pill badge-lime" style={{ fontSize: "0.75rem" }}>
                Est. {BUSINESS_INFO.establishedYear} • Jodhpur
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "0.9375rem", fontWeight: 800, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.875rem" }}>
              <li>
                <a href="#hero" style={{ color: "#94A3B8" }}>Home</a>
              </li>
              <li>
                <a href="#programs" style={{ color: "#94A3B8" }}>Training Programs</a>
              </li>
              <li>
                <a href="#experience" style={{ color: "#94A3B8" }}>Facilities & Floor</a>
              </li>
              <li>
                <a href="#membership" style={{ color: "#94A3B8" }}>Membership Plans</a>
              </li>
              <li>
                <a href="#gallery" style={{ color: "#94A3B8" }}>Photo Gallery</a>
              </li>
              <li>
                <a href="#about" style={{ color: "#94A3B8" }}>About Synergy</a>
              </li>
              <li>
                <a href="#location" style={{ color: "#94A3B8" }}>Location & Map</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Shifts */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "0.9375rem", fontWeight: 800, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Training Shifts
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.875rem" }}>
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
            <h4 style={{ color: "#FFFFFF", fontSize: "0.9375rem", fontWeight: 800, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Direct Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
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
              <div style={{ marginTop: "4px" }}>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: "10px 16px", fontSize: "0.875rem", width: "100%", minHeight: "44px" }}
                >
                  <MessageCircle size={16} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {CURRENT_YEAR} Synergy Gym. All rights reserved. Serving Jodhpur fitness enthusiasts since {BUSINESS_INFO.establishedYear}.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
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
              aria-label="Scroll back to top"
              style={{
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "6px"
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: 36px;
          margin-bottom: 44px;
        }

        .footer-bottom-bar {
          border-top: 1px solid #1E293B;
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-size: 0.8125rem;
        }

        @media (min-width: 640px) {
          .footer-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
