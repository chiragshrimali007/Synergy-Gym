import React, { useState, useEffect } from "react";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";

export default function MobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after user scrolls down past 200px
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-wa-container ${isVisible ? "visible" : ""}`}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "20px",
        zIndex: 900,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: isVisible ? "auto" : "none"
      }}
    >
      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Synergy Gym on WhatsApp"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#16A34A",
          color: "#FFFFFF",
          padding: "12px 18px",
          borderRadius: "var(--radius-full)",
          boxShadow: "0 8px 24px rgba(22, 163, 74, 0.45)",
          fontWeight: 700,
          fontSize: "0.875rem",
          textDecoration: "none",
          border: "2px solid #FFFFFF"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#15803D";
          e.currentTarget.style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#16A34A";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <MessageCircle size={20} fill="#FFFFFF" color="#16A34A" />
        <span className="floating-wa-text">Chat on WhatsApp</span>
      </a>

      <style>{`
        @media (max-width: 480px) {
          .floating-wa-text {
            display: none;
          }
          .floating-wa-container a {
            padding: 14px !important;
            border-radius: 50% !important;
          }
        }
      `}</style>
    </div>
  );
}
