import React, { useState, useRef } from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import {
  Dumbbell,
  ShieldCheck,
  Flame,
  Zap,
  Award,
  Sparkles,
  Play,
  RotateCcw,
  ArrowUpRight,
  Eye
} from "lucide-react";

export default function FacilitiesSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playFailed, setPlayFailed] = useState(false);
  const videoRef = useRef(null);

  const handlePlayRequest = () => {
    if (!videoRef.current) return;
    setPlayFailed(false);
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn("Video playback was interrupted or blocked:", err.message);
        setPlayFailed(true);
      });
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setPlayFailed(false);
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
        <div style={{ maxWidth: "700px", marginBottom: "44px" }}>
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
        <div className="video-showcase-wrapper">
          <div className="video-aspect-container">
            {!videoError && assets.gymTourVideo ? (
              <video
                ref={videoRef}
                poster={assets.videoPoster || assets.gymInterior}
                controls={isPlaying}
                playsInline
                preload="metadata"
                onPlay={handlePlay}
                onPause={handlePause}
                onError={() => setVideoError(true)}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={assets.gymTourVideo} type="video/mp4" />
                Your browser does not support HTML video playback.
              </video>
            ) : (
              /* Fallback visual if video is genuinely missing */
              <img
                src={assets.videoPoster || assets.gymInterior}
                alt="Synergy Gym Floor Experience"
                onError={handleImageFallback}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}

            {/* Video Initial Poster Overlay (Shown only before video is actively playing) */}
            {!isPlaying && !videoError && assets.gymTourVideo && (
              <div className="video-poster-overlay">
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <span className="badge-pill badge-lime" style={{ fontSize: "0.75rem" }}>
                    Synergy Floor Preview
                  </span>
                </div>

                {/* Center Play Button */}
                <div style={{ alignSelf: "center", textAlign: "center" }}>
                  <button
                    onClick={handlePlayRequest}
                    aria-label={playFailed ? "Retry playing video" : "Play Gym Tour Video"}
                    className="video-play-btn"
                  >
                    {playFailed ? <RotateCcw size={28} /> : <Play size={28} fill="#0F172A" style={{ marginLeft: "3px" }} />}
                  </button>
                  {playFailed && (
                    <p style={{ color: "#FFFFFF", fontSize: "0.8125rem", marginTop: "10px", fontWeight: 600 }}>
                      Tap again to play video
                    </p>
                  )}
                </div>

                <div style={{ color: "#FFFFFF" }}>
                  <h3 style={{ color: "#FFFFFF", fontSize: "clamp(1.125rem, 3vw, 1.375rem)", marginBottom: "4px" }}>
                    Verified Local Training Facility
                  </h3>
                  <p style={{ color: "var(--text-inverse-muted)", fontSize: "0.8125rem", maxWidth: "480px", lineHeight: 1.4 }}>
                    Equipped with heavy dumbbells, multi-angle benches, Olympic bars, and dedicated cardio stations.
                  </p>
                </div>
              </div>
            )}

            {/* Static Action if Video is Missing */}
            {videoError && (
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  padding: "14px 20px",
                  borderRadius: "var(--radius-md)",
                  color: "#FFFFFF"
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem" }}>Visit Synergy Gym in Person</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-inverse-muted)" }}>Walk-in tours open during floor hours</div>
                </div>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lime"
                  style={{ padding: "8px 16px", fontSize: "0.8125rem", minHeight: "38px" }}
                >
                  <span>Book Tour</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Verified Facility Features Grid */}
        <div className="facilities-grid">
          {BUSINESS_INFO.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="card-surface"
              style={{
                padding: "22px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                borderRadius: "var(--radius-lg)"
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
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
                    fontSize: "1rem",
                    fontWeight: 800,
                    marginBottom: "6px",
                    color: "var(--text-primary)"
                  }}
                >
                  {fac.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .video-showcase-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background-color: #0B0F19;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-xl);
          margin-bottom: 48px;
        }

        .video-aspect-container {
          position: relative;
          aspect-ratio: 16 / 9;
          max-height: 520px;
          width: 100%;
          background-color: #0F172A;
        }

        .video-poster-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: clamp(16px, 3.5vw, 36px);
          background: linear-gradient(180deg, rgba(11, 15, 25, 0.3) 0%, rgba(11, 15, 25, 0.85) 100%);
          z-index: 2;
        }

        .video-play-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--brand-electric);
          color: #0F172A;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 24px rgba(196, 247, 37, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .video-play-btn:active {
          transform: scale(0.92);
        }

        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr));
          gap: 18px;
        }

        @media (min-width: 768px) {
          .video-play-btn {
            width: 72px;
            height: 72px;
          }
          .facilities-grid {
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
