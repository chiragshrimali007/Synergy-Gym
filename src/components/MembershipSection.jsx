import React from "react";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { Check, ArrowUpRight, CreditCard, ShieldCheck } from "lucide-react";

export default function MembershipSection() {
  return (
    <section id="membership" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px auto" }}>
          <div className="section-tag">
            <CreditCard size={14} />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="section-title">
            SIMPLE, HONEST MEMBERSHIPS
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            No hidden admission fees, no surprise maintenance charges, and no high-pressure sales. Choose the timeframe that matches your commitment.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="membership-mobile-hint" style={{ textAlign: "center", marginBottom: "14px" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--brand-green)", fontWeight: 700, backgroundColor: "var(--bg-accent-light)", padding: "4px 12px", borderRadius: "var(--radius-full)", border: "1px solid rgba(22, 163, 74, 0.2)" }}>
            👈 Swipe horizontally to compare all 4 plans 👉
          </span>
        </div>

        {/* Pricing Cards Responsive Grid */}
        <div className="membership-grid">
          {BUSINESS_INFO.membershipPlans.map((plan) => {
            const prefilledMsg = WHATSAPP_MESSAGES[plan.whatsappKey];
            const waUrl = buildWhatsAppUrl(prefilledMsg);

            return (
              <div
                key={plan.id}
                className="card-surface"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(24px, 4vw, 32px) clamp(18px, 3vw, 24px)",
                  borderRadius: "var(--radius-xl)",
                  position: "relative",
                  backgroundColor: plan.highlight ? "var(--bg-dark)" : "var(--bg-surface)",
                  color: plan.highlight ? "#FFFFFF" : "var(--text-primary)",
                  border: plan.highlight
                    ? "2px solid var(--brand-electric)"
                    : "1px solid var(--border-light)",
                  boxShadow: plan.highlight
                    ? "0 16px 36px -10px rgba(11, 15, 25, 0.3)"
                    : "var(--shadow-sm)"
                }}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div style={{ position: "absolute", top: "-12px", left: "20px" }}>
                    <span
                      className={`badge-pill ${plan.highlight ? "badge-lime" : "badge-green"}`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div style={{ marginBottom: "16px", marginTop: plan.badge ? "4px" : "0" }}>
                    <h3
                      style={{
                        fontSize: "var(--text-h3)",
                        fontWeight: 800,
                        color: plan.highlight ? "#FFFFFF" : "var(--text-primary)",
                        lineHeight: "var(--line-height-heading)",
                        marginBottom: "2px"
                      }}
                    >
                      {plan.duration}
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--text-caption)",
                        color: plan.highlight ? "var(--text-inverse-muted)" : "var(--text-muted)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em"
                      }}
                    >
                      {plan.periodLabel}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "4px",
                      marginBottom: "14px"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: plan.highlight ? "var(--brand-electric)" : "var(--brand-green)",
                        fontFamily: "var(--font-heading)"
                      }}
                    >
                      {plan.currency}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(2.5rem, 6vw, 3rem)",
                        fontWeight: 900,
                        lineHeight: 1,
                        color: plan.highlight ? "#FFFFFF" : "var(--text-primary)",
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "-0.03em"
                      }}
                    >
                      {plan.price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: plan.highlight ? "var(--text-inverse-muted)" : "var(--text-muted)",
                      lineHeight: 1.5,
                      marginBottom: "24px"
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div
                    style={{
                      borderTop: plan.highlight
                        ? "1px solid rgba(255, 255, 255, 0.12)"
                        : "1px solid var(--border-light)",
                      paddingTop: "20px",
                      marginBottom: "28px"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "14px",
                        color: plan.highlight ? "var(--brand-electric)" : "var(--text-muted)"
                      }}
                    >
                      Plan Includes
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {plan.features.map((feat, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontSize: "var(--text-body)",
                            color: plan.highlight ? "#E2E8F0" : "var(--text-secondary)"
                          }}
                        >
                          <div
                            style={{
                              width: "18px",
                              height: "18px",
                              borderRadius: "50%",
                              backgroundColor: plan.highlight
                                ? "rgba(196, 247, 37, 0.2)"
                                : "var(--bg-accent-light)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            }}
                          >
                            <Check
                              size={12}
                              style={{
                                color: plan.highlight ? "var(--brand-electric)" : "var(--brand-green)"
                              }}
                            />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Action Button with 48px Touch Target */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.highlight ? "btn-lime" : "btn-primary"}`}
                  style={{
                    width: "100%",
                    padding: "12px",
                    minHeight: "48px"
                  }}
                  aria-label={`Join ${plan.duration} plan for ${plan.currency}${plan.price} via WhatsApp`}
                >
                  <span>Select {plan.duration}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Truthful Joining Policies */}
        <div className="membership-policies">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ShieldCheck size={20} style={{ color: "var(--brand-green)", flexShrink: 0 }} />
            <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <strong>Direct Verification:</strong> Chat directly with the gym owner on WhatsApp to confirm timing.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ShieldCheck size={20} style={{ color: "var(--brand-green)", flexShrink: 0 }} />
            <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <strong>Zero Hidden Charges:</strong> Flat fee as stated; no surprise registration or locker deposits.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ShieldCheck size={20} style={{ color: "var(--brand-green)", flexShrink: 0 }} />
            <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <strong>Try Before Enrolling:</strong> Walk in to inspect the weights, racks, and atmosphere first.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .membership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 16px;
          align-items: stretch;
        }

        .membership-mobile-hint {
          display: none;
        }

        @media (max-width: 680px) {
          .membership-mobile-hint {
            display: block;
          }

          .membership-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 14px;
            padding: 12px 4px 16px 4px;
            scrollbar-width: none;
          }
          .membership-grid::-webkit-scrollbar {
            display: none;
          }

          .membership-grid > div {
            flex: 0 0 clamp(260px, 82vw, 300px);
            scroll-snap-align: center;
          }
        }

        .membership-policies {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
          gap: 14px;
          padding: 16px;
          background-color: var(--bg-primary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
        }

        @media (min-width: 768px) {
          .membership-grid {
            gap: 24px;
          }
          .membership-policies {
            padding: 24px;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
