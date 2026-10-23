import React from "react";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(64px, 10vw, 100px) 0",
        backgroundColor: "var(--bg-dark)",
        color: "#FFFFFF",
        overflow: "hidden"
      }}
    >
      {/* Subtle Energy Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(132, 204, 22, 0.12) 0%, rgba(11, 15, 25, 0) 70%)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <div className="section-tag dark" style={{ marginBottom: "18px" }}>
            <span>Start Training Today</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.85rem, 5vw, 3.5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "18px",
              color: "#FFFFFF",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}
          >
            READY TO START YOUR <br />
            <span style={{ color: "var(--brand-electric)" }}>FITNESS JOURNEY?</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(0.9375rem, 1.8vw, 1.1875rem)",
              color: "var(--text-inverse-muted)",
              lineHeight: 1.6,
              maxWidth: "580px",
              margin: "0 auto 36px auto"
            }}
          >
            Have questions about memberships or training? Talk to the Synergy team. We are here to help you get started.
          </p>

          <div className="final-cta-buttons">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime"
              style={{ padding: "14px 32px", fontSize: "1rem", minHeight: "48px" }}
            >
              <MessageCircle size={19} />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneDisplay.replace(/\s+/g, "")}`}
              className="btn btn-outline-white"
              style={{ padding: "14px 28px", fontSize: "1rem", minHeight: "48px" }}
            >
              <Phone size={17} />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Quick Truthful Commitments */}
          <div className="final-cta-commitments">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={16} style={{ color: "var(--brand-electric)", flexShrink: 0 }} />
              <span>Memberships from ₹1,000/mo</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={16} style={{ color: "var(--brand-electric)", flexShrink: 0 }} />
              <span>No mandatory long contracts</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={16} style={{ color: "var(--brand-electric)", flexShrink: 0 }} />
              <span>Free walk-in gym tour</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }

        .final-cta-commitments {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          font-size: 0.875rem;
          color: var(--text-inverse-muted);
        }

        @media (min-width: 480px) {
          .final-cta-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 16px;
          }
          .final-cta-commitments {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
