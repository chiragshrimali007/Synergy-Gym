import React, { useState } from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import {
  Dumbbell,
  ShieldCheck,
  Flame,
  Zap,
  Award,
  Sparkles,
  Play,
  Pause,
  ArrowUpRight,
  Eye
} from "lucide-react";

export default function FacilitiesSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setVideoError(true));
    }
  };

  const renderIcon = (name) => {
    switch (name) {
      case "Dumbbell":
        return <Dumbbell size={22} style={{ color: "var(--brand-green)" }} />;
      case "ShieldCheck":
        return <ShieldCheck size={22} style={{ color: "var(--brand-green)" }} />;
      case "Flame":
        return <Flame size={22} style={{ color: "var(--brand-green)" }} />;
      case "Zap":
        return <Zap size={22} style={{ color: "var(--brand-green)" }} />;
      case "Award":
        return <Award size={22} style={{ color: "var(--brand-green)" }} />;
      case "Sparkles":
      default:
        return <Sparkles size={22} style={{ color: "var(--brand-green)" }} />;
    }
  };

  return (
    <section id="experience" className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "700px", marginBottom: "52px" }}>
          <div className="section-tag">
            <Eye size={14} />
            <span>The Synergy Environment</span>
          </div>
          <h2 className="section-title">
            REAL IRON. SERIOUS FOCUS. NO SHORTCUTS.
          </h2>
          <p className="section-description">
            We provide clean, well-maintained equipment and a focused community environment where both beginners and seasoned lifters can train consistently every day.
          </p>
        </div>

        {/* Demo Video & Floor Experience Showcase */}
        <div
          style={{
            position: "relative",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            backgroundColor: "#0B0F19",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-xl)",
            marginBottom: "56px"
          }}
        >
          <div style={{ position: "relative", aspectRatio: "16 / 9", maxHeight: "560px", width: "100%" }}>
            {!videoError && assets.gymTourVideo ? (
              <video
                ref={videoRef}
                poster={assets.videoPoster || assets.gymInterior}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setVideoError(true)}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={assets.gymTourVideo} type="video/mp4" />
              </video>
            ) : (
              /* Fallback visual if video is unavailable */
              <img
                src={assets.videoPoster || assets.gymInterior}
                alt="Synergy Gym Floor Experience"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  if (e.currentTarget.src !== assets.heroFallback) {
                    e.currentTarget.src = assets.heroFallback;
                  }
                }}
              />
            )}

            {/* Cinematic Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isPlaying
                  ? "transparent"
                  : "linear-gradient(180deg, rgba(11, 15, 25, 0.2) 0%, rgba(11, 15, 25, 0.8) 100%)",
                transition: "background 0.3s ease",
                pointerEvents: isPlaying ? "none" : "auto"
              }}
            />

            {/* Video Controls & Overlay */}
            {!isPlaying && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(20px, 4vw, 40px)",
                  zIndex: 2
                }}
              >
                {/* Badge Top Left */}
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <span className="badge-pill badge-lime">
                    Synergy Floor Preview
                  </span>
                </div>

                {/* Center Action Button */}
                <div style={{ alignSelf: "center", textAlign: "center" }}>
                  {!videoError && assets.gymTourVideo ? (
                    <button
                      onClick={togglePlay}
                      aria-label="Play Gym Floor Tour Video"
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        backgroundColor: "var(--brand-electric)",
                        color: "#0F172A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 30px rgba(196, 247, 37, 0.5)",
                        transition: "transform 0.2s ease"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Play size={30} fill="#0F172A" style={{ marginLeft: "4px" }} />
                    </button>
                  ) : (
                    <a
                      href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lime"
                      style={{ padding: "14px 28px" }}
                    >
                      <span>Schedule a Visit in Person</span>
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                {/* Bottom Bar Info */}
                <div style={{ color: "#FFFFFF" }}>
                  <h3 style={{ color: "#FFFFFF", fontSize: "1.375rem", marginBottom: "6px" }}>
                    Verified Local Training Facility
                  </h3>
                  <p style={{ color: "var(--text-inverse-muted)", fontSize: "0.875rem", maxWidth: "500px" }}>
                    Equipped with heavy dumbbells, multi-angle benches, Olympic bars, and dedicated cardio stations.
                  </p>
                </div>
              </div>
            )}

            {/* Video Pause Toggle on Screen Click when Playing */}
            {isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Pause Video"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  padding: "10px 18px",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "var(--radius-full)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8125rem",
                  fontWeight: 700
                }}
              >
                <Pause size={14} />
                <span>Pause</span>
              </button>
            )}
          </div>
        </div>

        {/* Verified Facility Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px"
          }}
        >
          {BUSINESS_INFO.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="card-surface"
              style={{
                padding: "28px",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                borderRadius: "var(--radius-lg)"
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--bg-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(22, 163, 74, 0.2)"
                }}
              >
                {renderIcon(fac.icon)}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 800,
                    marginBottom: "8px",
                    color: "var(--text-primary)"
                  }}
                >
                  {fac.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
