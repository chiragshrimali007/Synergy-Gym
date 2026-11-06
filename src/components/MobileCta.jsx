import React, { useState, useEffect } from "react";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";

export default function MobileCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Show after user scrolls past 180px
      setIsVisible(scrollY > 180);

      // Check if near bottom to prevent blocking footer links
      const distanceToBottom = fullHeight - (scrollY + windowHeight);
      setIsNearFooter(distanceToBottom < 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-wa-wrapper ${isVisible ? "is-visible" : ""} ${isNearFooter ? "near-footer" : ""}`}
    >
      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Synergy Gym on WhatsApp"
        className="floating-wa-link"
      >
        <MessageCircle size={22} fill="#FFFFFF" color="#16A34A" style={{ flexShrink: 0 }} />
        <span className="floating-wa-text">Chat with Synergy</span>
      </a>

      <style>{`
        .floating-wa-wrapper {
          position: fixed;
          bottom: calc(18px + var(--sab));
          right: calc(16px + var(--sar));
          z-index: 800;
          transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          pointer-events: none;
        }

        .floating-wa-wrapper.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .floating-wa-wrapper.near-footer {
          transform: translateY(-24px) scale(0.95);
        }

        .floating-wa-link {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #16A34A;
          color: #FFFFFF;
          padding: 12px 18px;
          min-height: 48px;
          border-radius: var(--radius-full);
          box-shadow: 0 8px 24px rgba(22, 163, 74, 0.42);
          font-weight: 700;
          font-size: var(--text-btn);
          text-decoration: none;
          border: 2px solid #FFFFFF;
          box-sizing: border-box;
          user-select: none;
          transition: background-color 0.2s, transform 0.2s;
        }

        .floating-wa-link:active {
          transform: scale(0.95);
        }

        @media (hover: hover) and (pointer: fine) {
          .floating-wa-link:hover {
            background-color: #15803D;
            transform: scale(1.04);
          }
        }

        @media (max-width: 480px) {
          .floating-wa-text {
            display: none;
          }
          .floating-wa-link {
            padding: 13px;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
