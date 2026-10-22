import React from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { ArrowUpRight, Target, Flame, Dumbbell, Activity, Sparkles } from "lucide-react";

export default function ProgramsSection() {
  const getProgramIcon = (id) => {
    switch (id) {
      case "weight-loss":
        return <Flame size={18} style={{ color: "var(--brand-green)" }} />;
      case "muscle-gain":
        return <Dumbbell size={18} style={{ color: "var(--brand-green)" }} />;
      case "strength-training":
        return <Activity size={18} style={{ color: "var(--brand-green)" }} />;
      case "general-fitness":
      default:
        return <Sparkles size={18} style={{ color: "var(--brand-green)" }} />;
    }
  };

  return (
    <section id="programs" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px auto" }}>
          <div className="section-tag">
            <Target size={14} />
            <span>Targeted Training Programs</span>
          </div>
          <h2 className="section-title">
            DESIGNED FOR YOUR SPECIFIC GOALS
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Whether you want to build strength, drop body fat, pack on lean muscle, or stay active, our floor routines provide structured, consistent guidance without gimmicks.
          </p>
        </div>

        {/* Programs Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "28px"
          }}
        >
          {BUSINESS_INFO.programs.map((prog) => {
            const imageSrc = assets[prog.imageKey] || assets.heroFallback;
            const prefilledMsg = WHATSAPP_MESSAGES[prog.whatsappKey] || WHATSAPP_MESSAGES.GENERAL_ENQUIRY;
            const waUrl = buildWhatsAppUrl(prefilledMsg);

            return (
              <div
                key={prog.id}
                className="card-surface"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  borderRadius: "var(--radius-lg)"
                }}
              >
                {/* Program Image Stage */}
                <div
                  style={{
                    position: "relative",
                    height: "230px",
                    overflow: "hidden",
                    backgroundColor: "#0F172A"
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={prog.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    onError={(e) => {
                      if (e.currentTarget.src !== assets.heroFallback) {
                        e.currentTarget.src = assets.heroFallback;
                      }
                    }}
                  />
                  {/* Category Pill Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      backdropFilter: "blur(8px)",
                      color: "#FFFFFF",
                      padding: "5px 12px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    {getProgramIcon(prog.id)}
                    <span>{prog.tag}</span>
                  </div>
                </div>

                {/* Program Content */}
                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        marginBottom: "12px",
                        color: "var(--text-primary)"
                      }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                        marginBottom: "24px"
                      }}
                    >
                      {prog.shortDescription}
                    </p>
                  </div>

                  {/* Enquiry CTA to WhatsApp */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      padding: "12px 18px",
                      fontSize: "0.875rem",
                      borderRadius: "var(--radius-md)"
                    }}
                    aria-label={`Enquire about ${prog.title} on WhatsApp`}
                  >
                    <span style={{ fontWeight: 700 }}>Enquire on WhatsApp</span>
                    <ArrowUpRight size={16} style={{ color: "var(--brand-green)" }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer */}
        <div
          style={{
            marginTop: "40px",
            padding: "16px 20px",
            backgroundColor: "var(--bg-subtle)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-light)",
            textAlign: "center",
            fontSize: "0.8125rem",
            color: "var(--text-muted)"
          }}
        >
          <strong>Notice:</strong> Physical results depend on individual consistency, adherence, and nutritional habits. Synergy Gym provides coaching guidance and equipment; we do not promise medical or guaranteed physical outcomes.
        </div>
      </div>
    </section>
  );
}
