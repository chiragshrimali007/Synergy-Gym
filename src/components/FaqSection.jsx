import React, { useState } from "react";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      q: "Is there a dedicated separate batch for girls and women?",
      a: "Yes! Synergy Gym runs an exclusive Girls Persona Batch every evening from 4:00 PM to 5:00 PM (Monday to Saturday). During this hour, the workout floor is reserved exclusively for female members, ensuring 100% privacy, comfortable atmosphere, and personalized guidance."
    },
    {
      q: "I am a complete beginner. Will someone teach me how to workout?",
      a: "Absolutely. Our certified floor trainers and gym owner are actively present on the gym floor during all operational shifts. We teach beginners proper lifting techniques, barbell form, safety protocols, and machine setups without requiring an expensive personal training package."
    },
    {
      q: "Where is the gym located and what is the landmark?",
      a: "Synergy Gym is located directly Opposite Badwasia Govt. School in Maderana Colony, Jodhpur (GPS: 26.3149° N, 73.0524° E). It is easily accessible within 5 to 10 minutes from Mandore, Paota Circle, and Mahamandir."
    },
    {
      q: "Can I visit the gym or take a trial session before joining?",
      a: "Yes, you are warmly invited to drop by during our morning or evening floor shifts. You can inspect the machines, meet the owner and coaching team, and experience the gym environment firsthand."
    },
    {
      q: "Are there any hidden admission or maintenance charges?",
      a: "None. Synergy Gym practices 100% transparent pricing. You only pay for your membership duration: ₹1,000 for 1 month, ₹2,500 for 3 months, ₹4,500 for 6 months, or ₹8,000 for 12 months with full access to all equipment and floor coaching."
    },
    {
      q: "What are the daily operating hours and off days?",
      a: "Morning shift runs from 5:30 AM to 10:30 AM. Exclusive Girls Batch runs from 4:00 PM to 5:00 PM. Evening shift runs from 5:00 PM to 9:30 PM. We operate Monday through Saturday. Sunday is our designated weekly rest and deep-sanitization day."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px auto" }}>
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Clear, honest answers about batches, beginners guidance, timings, and membership policies at Synergy Gym.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: "var(--radius-lg)",
                    border: isOpen ? "1.5px solid var(--brand-green)" : "1px solid var(--border-light)",
                    backgroundColor: isOpen ? "rgba(22, 163, 74, 0.02)" : "var(--bg-surface)",
                    boxShadow: isOpen ? "0 4px 16px rgba(22, 163, 74, 0.08)" : "var(--shadow-sm)",
                    overflow: "hidden",
                    transition: "all 0.25s ease"
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      padding: "clamp(16px, 3vw, 20px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "var(--text-primary)"
                    }}
                  >
                    <span style={{ fontSize: "var(--text-body)", fontWeight: 800, lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: isOpen ? "var(--brand-green)" : "var(--bg-accent-light)",
                        color: isOpen ? "#FFFFFF" : "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease, background-color 0.2s ease"
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 clamp(16px, 3vw, 20px) clamp(16px, 3vw, 20px) clamp(16px, 3vw, 20px)",
                        fontSize: "var(--text-body)",
                        color: "var(--text-secondary)",
                        lineHeight: "var(--line-height-body)",
                        borderTop: "1px dashed var(--border-light)",
                        paddingTop: "14px"
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Box */}
          <div
            style={{
              marginTop: "28px",
              padding: "16px 20px",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--bg-accent-light)",
              border: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px"
            }}
          >
            <div>
              <h4 style={{ fontSize: "var(--text-body)", fontWeight: 800, marginBottom: "3px", color: "var(--text-primary)" }}>
                Still have a specific question?
              </h4>
              <p style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", margin: 0 }}>
                Speak directly with the owner on WhatsApp for quick clarification.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "10px 18px" }}
            >
              <MessageCircle size={16} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
