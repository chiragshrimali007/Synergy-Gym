import React from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import {
  ArrowUpRight,
  Target,
  Flame,
  Dumbbell,
  Activity,
  Sparkles,
  Clock,
  Shield,
  Heart,
  CheckCircle2,
  MessageCircle,
  Users
} from "lucide-react";

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

  const girlsBatchMsg = WHATSAPP_MESSAGES.GIRLS_BATCH;
  const girlsBatchUrl = buildWhatsAppUrl(girlsBatchMsg);

  return (
    <section id="programs" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px auto" }}>
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

        {/* ============================================================== */}
        {/* EXCLUSIVE GIRLS PERSONA BATCH (Zero-photo elegant UI spotlight) */}
        {/* ============================================================== */}
        <div
          className="girls-batch-spotlight"
          style={{
            marginBottom: "48px",
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F2318 100%)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(24px, 4vw, 40px)",
            color: "#FFFFFF",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.4)",
            border: "1px solid rgba(132, 204, 22, 0.25)"
          }}
        >
          {/* Subtle Background Glow Accent */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(132, 204, 22, 0.2) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div className="girls-batch-grid" style={{ position: "relative", zIndex: 1 }}>
            {/* Left Col: Header, Timing, Intro */}
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
                <span
                  style={{
                    backgroundColor: "rgba(22, 163, 74, 0.25)",
                    border: "1px solid rgba(132, 204, 22, 0.5)",
                    color: "var(--brand-electric)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8125rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <Users size={14} />
                  <span>Exclusive Special Batch</span>
                </span>

                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#F8FAFC",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <Clock size={14} style={{ color: "var(--brand-electric)" }} />
                  <span>4:00 PM – 5:00 PM (Daily Evening)</span>
                </span>
              </div>

              <h3
                style={{
                  fontSize: "var(--text-h2)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.02em",
                  lineHeight: "var(--line-height-heading)",
                  marginBottom: "12px",
                  color: "#FFFFFF"
                }}
              >
                GIRLS PERSONA BATCH
              </h3>

              <p
                style={{
                  fontSize: "var(--text-body)",
                  color: "#CBD5E1",
                  lineHeight: "var(--line-height-body)",
                  marginBottom: "20px",
                  maxWidth: "580px"
                }}
              >
                {BUSINESS_INFO.girlsBatch.description}
              </p>

              {/* Direct Action */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <a
                  href={girlsBatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lime"
                  style={{ padding: "12px 22px" }}
                >
                  <MessageCircle size={16} />
                  <span>Inquire About Girls Batch</span>
                </a>

                <a
                  href="#location"
                  className="btn btn-outline"
                  style={{
                    padding: "12px 18px",
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.25)"
                  }}
                >
                  <span>Check Timings & Location</span>
                </a>
              </div>
            </div>

            {/* Right Col: 4 Key Value Pillars (No photo needed!) */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(18px, 3vw, 24px)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(132, 204, 22, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Shield size={18} style={{ color: "var(--brand-electric)" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "3px" }}>
                    100% Privacy & Dedicated Floor
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: 1.45 }}>
                    The entire workout floor is reserved exclusively for women during 4:00 PM – 5:00 PM. No general male batch during this hour.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(132, 204, 22, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Heart size={18} style={{ color: "var(--brand-electric)" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "3px" }}>
                    Safe, Welcoming & Friendly
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: 1.45 }}>
                    Zero intimidation. Beginners receive step-by-step guidance on machine operation, lifting weights safely, and proper posture.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(132, 204, 22, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Dumbbell size={18} style={{ color: "var(--brand-electric)" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "3px" }}>
                    Full Equipment Freedom
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: 1.45 }}>
                    Enjoy uncrowded access to treadmills, cardio machines, dumbbells, and strength apparatus at your own comfortable pace.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(132, 204, 22, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "var(--brand-electric)" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "3px" }}>
                    Targeted Fitness & Toning Goals
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: 1.45 }}>
                    Routines designed for fat loss, core stability, strength conditioning, and healthy daily lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Training Programs Header & Mobile Swipe Hint */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em" }}>
            All Training Programs
          </h3>
          <span className="programs-swipe-hint" style={{ fontSize: "0.75rem", color: "var(--brand-green)", fontWeight: 700 }}>
            👈 Swipe horizontally to view all 4 👉
          </span>
        </div>

        {/* Programs Responsive Grid (Swipes in 1 line on mobile, expands to desktop grid) */}
        <div className="programs-grid">
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
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    backgroundColor: "#0F172A"
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={`${prog.title} training at Synergy Gym`}
                    loading="lazy"
                    onError={handleImageFallback}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease"
                    }}
                  />
                  {/* Category Pill Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
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

                {/* Program Details */}
                <div
                  style={{
                    padding: "clamp(20px, 3vw, 24px)",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "var(--text-h3)",
                        fontWeight: 800,
                        marginBottom: "8px",
                        lineHeight: "var(--line-height-heading)",
                        color: "var(--text-primary)"
                      }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--text-body)",
                        color: "var(--text-secondary)",
                        lineHeight: "var(--line-height-body)",
                        marginBottom: "16px"
                      }}
                    >
                      {prog.shortDescription}
                    </p>
                  </div>

                  {/* Program Action */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      minHeight: "44px"
                    }}
                  >
                    <span>Enquire About Routine</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Fitness Disclaimer */}
        <div
          style={{
            marginTop: "36px",
            padding: "14px 20px",
            backgroundColor: "var(--bg-accent-light)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-light)",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
            lineHeight: 1.5,
            textAlign: "center"
          }}
        >
          <strong>Notice:</strong> Physical results depend on individual consistency, adherence, and nutritional habits. Synergy Gym provides coaching guidance and equipment; we do not promise medical or guaranteed physical outcomes.
        </div>
      </div>

      <style>{`
        .girls-batch-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: center;
        }

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 16px;
        }

        .programs-swipe-hint {
          display: none;
        }

        @media (max-width: 680px) {
          .programs-swipe-hint {
            display: inline-block;
          }

          .programs-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 12px;
            padding: 4px 2px 14px 2px;
            scrollbar-width: none;
          }
          .programs-grid::-webkit-scrollbar {
            display: none;
          }

          .programs-grid > div {
            flex: 0 0 clamp(240px, 78vw, 290px);
            scroll-snap-align: start;
          }
        }

        @media (min-width: 900px) {
          .girls-batch-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 36px;
          }
        }
      `}</style>
    </section>
  );
}
