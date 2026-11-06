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
  ArrowUpRight,
  Eye
} from "lucide-react";

export default function FacilitiesSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const handlePlayRequest = () => {
    if (!videoRef.current) return;
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn("Video playback was interrupted or blocked:", err.message);
      });
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
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
        <div style={{ maxWidth: "700px", marginBottom: "36px" }}>
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

        {/* Video Showcase Stage */}
        <div className="video-showcase-wrapper">
          <div className="video-aspect-container">
            {/* Native Video Player */}
            {!videoError && assets.gymTourVideo ? (
              <video
                ref={videoRef}
                playsInline
                preload="metadata"
                controls={isPlaying}
                poster={assets.videoPoster || assets.gymInterior}
                onPause={handlePause}
                onPlay={handlePlay}
                onError={() => setVideoError(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              >
                <source src={assets.gymTourVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            ) : (
              /* Fallback Static Image if Video Missing or Fails */
              <img
                src={assets.videoPoster || assets.gymInterior}
                alt="Synergy Gym Floor Overview"
                onError={handleImageFallback}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            )}

            {/* Custom Overlay when video is not actively playing */}
            {!isPlaying && (
              <div className="video-poster-overlay">
                <div>
                  <span
                    className="badge-pill badge-green"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "12px",
                      fontSize: "var(--text-caption)"
                    }}
                  >
                    <span>Authentic Floor Video</span>
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(1.125rem, 3.2vw, 1.75rem)",
                      fontWeight: 900,
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      lineHeight: "var(--line-height-heading)"
                    }}
                  >
                    TAKE A LOOK INSIDE SYNERGY
                  </h3>
                </div>

                {/* Central Play Button */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "16px 0" }}>
                  <button
                    onClick={handlePlayRequest}
                    aria-label="Play gym tour video"
                    className="video-play-btn"
                  >
                    <Play size={28} fill="#0F172A" style={{ marginLeft: "4px" }} />
                  </button>
                </div>

                {/* Bottom Overlay Info & Action */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    padding: "10px 16px",
                    borderRadius: "var(--radius-md)",
                    color: "#FFFFFF"
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem" }}>Visit Synergy Gym in Person</div>
                    <div style={{ fontSize: "var(--text-caption)", color: "var(--text-inverse-muted)" }}>Walk-in tours open during floor hours</div>
                  </div>
                  <a
                    href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lime"
                    style={{ padding: "6px 14px", minHeight: "36px" }}
                  >
                    <span>Book Tour</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="facilities-mobile-hint-wrap">
          <span className="facilities-mobile-hint">
            👈 Swipe horizontally to view all 6 facilities 👉
          </span>
        </div>

        {/* Verified Facility Features (Single-line swipe on mobile, 3-column grid on desktop) */}
        <div className="facilities-grid">
          {BUSINESS_INFO.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="card-surface facility-card"
            >
              <div className="facility-icon-box">
                {renderIcon(fac.icon)}
              </div>

              <div className="facility-text-wrap">
                <h3 className="facility-title">
                  {fac.title}
                </h3>
                <p className="facility-desc">
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
          margin-bottom: 36px;
        }

        .video-aspect-container {
          position: relative;
          aspect-ratio: 16 / 9;
          max-height: 480px;
          width: 100%;
          background-color: #0F172A;
        }

        .video-poster-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: clamp(14px, 3.5vw, 32px);
          background: linear-gradient(180deg, rgba(11, 15, 25, 0.3) 0%, rgba(11, 15, 25, 0.85) 100%);
          z-index: 2;
        }

        .video-play-btn {
          width: 60px;
          height: 60px;
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

        /* Facilities Mobile Hint */
        .facilities-mobile-hint-wrap {
          display: none;
          text-align: center;
          margin-bottom: 14px;
        }

        .facilities-mobile-hint {
          font-size: var(--text-caption);
          color: var(--brand-green);
          font-weight: 700;
          background-color: var(--bg-accent-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(22, 163, 74, 0.2);
        }

        /* Grid Architecture */
        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
        }

        .facility-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 14px;
          background-color: var(--bg-surface);
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .facility-card:hover {
          border-color: var(--brand-green);
          transform: translateY(-2px);
        }

        .facility-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--bg-accent-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(22, 163, 74, 0.2);
        }

        .facility-text-wrap {
          min-width: 0;
        }

        .facility-title {
          font-size: var(--text-h3);
          font-weight: 800;
          margin-bottom: 6px;
          color: var(--text-primary);
          line-height: var(--line-height-heading);
          hyphens: none;
          -webkit-hyphens: none;
          word-break: normal;
          overflow-wrap: break-word;
          white-space: normal;
        }

        .facility-desc {
          font-size: var(--text-caption);
          color: var(--text-muted);
          line-height: var(--line-height-body);
        }

        /* Mobile Layout: Smooth Horizontal Swipe Rail in 1 Line */
        @media (max-width: 680px) {
          .facilities-mobile-hint-wrap {
            display: block;
          }

          .facilities-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 12px;
            padding: 4px 2px 16px 2px;
            scrollbar-width: none;
          }
          .facilities-grid::-webkit-scrollbar {
            display: none;
          }

          .facility-card {
            flex: 0 0 clamp(240px, 78vw, 290px);
            scroll-snap-align: start;
            padding: 18px 16px;
          }
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
