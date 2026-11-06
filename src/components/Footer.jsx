import React from "react";
import { BUSINESS_INFO } from "../config/business";
import { ExternalLink, ArrowUp } from "lucide-react";

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
        paddingTop: "24px",
        paddingBottom: "calc(24px + var(--sab))",
        borderTop: "1px solid #1E293B"
      }}
    >
      <div className="container">
        {/* Bottom Bar Only (Compact & Clean) */}
        <div className="footer-bottom-bar">
          <div>
            © {CURRENT_YEAR} {BUSINESS_INFO.brandName}. All rights reserved. EST. {BUSINESS_INFO.establishedYear} • Jodhpur, Rajasthan.
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
        .footer-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: var(--text-caption);
          color: var(--text-inverse-muted);
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
