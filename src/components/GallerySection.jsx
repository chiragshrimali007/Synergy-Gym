import React, { useState, useEffect, useCallback, useRef } from "react";
import { assets } from "../config/assets";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Maximize2
} from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const touchStartX = useRef(null);
  const trackRef = useRef(null);

  const galleryItems = assets.gallery || [];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Track horizontal scroll navigation for arrows
  const scrollTrack = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === "left" ? -260 : 260;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Touch Swipe Handlers for Mobile Lightbox
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextImage(); // Swiped left -> next image
      } else {
        prevImage(); // Swiped right -> prev image
      }
    }
    touchStartX.current = null;
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 24px auto" }}>
          <div className="section-tag">
            <Camera size={14} />
            <span>Facility & Floor Gallery</span>
          </div>
          <h2 className="section-title">
            INSIDE SYNERGY GYM
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Real photos of our training floor, iron racks, and equipment. Tap any photo to expand full-screen.
          </p>
        </div>

        {/* Filter Tabs & Scroll Controls Row */}
        <div className="gallery-controls-bar">
          {/* Category Filter Pills */}
          <div className="gallery-filter-tabs">
            {[
              { id: "all", label: `All (${galleryItems.length})` },
              { id: "interior", label: "Gym Floor" },
              { id: "strength", label: "Strength" },
              { id: "equipment", label: "Equipment" },
              { id: "training", label: "Conditioning" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`gallery-tab-btn ${activeFilter === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Nav Arrows for smooth 1-line scrolling on desktop/tablet */}
          <div className="gallery-nav-arrows">
            <button
              onClick={() => scrollTrack("left")}
              aria-label="Scroll photos left"
              className="gallery-arrow-btn"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTrack("right")}
              aria-label="Scroll photos right"
              className="gallery-arrow-btn"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SINGLE-LINE HORIZONTAL SCROLL IMAGE TRACK (Short, Compact & Clickable) */}
        {/* ========================================================================= */}
        <div
          ref={trackRef}
          className="gallery-single-line-track"
          role="region"
          aria-label="Gym photos horizontal scroll track"
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="gallery-item-card"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View photo: ${item.caption}`}
            >
              <img
                src={item.url}
                alt={item.caption || "Synergy Gym photo"}
                loading="lazy"
                onError={handleImageFallback}
                className="gallery-item-img"
              />

              {/* Click / Expand Badge Overlay */}
              <div className="gallery-expand-badge">
                <Maximize2 size={12} />
                <span>View</span>
              </div>

              {/* Subtle Caption Footer */}
              <div className="gallery-item-caption">
                <span>{item.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint & Direct CTA */}
        <div className="gallery-bottom-hint">
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
            <span>👈 Swipe left/right to view all photos • Tap any photo to expand full size</span>
          </span>

          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: "8px 16px", fontSize: "0.8125rem", minHeight: "40px" }}
          >
            <span>Book a Walk-in Visit</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SINGLE-IMAGE FULL-SCREEN INTERACTIVE LIGHTBOX VIEWER */}
      {/* ========================================================================= */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gym Photo Full-Screen Viewer"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="lightbox-overlay"
        >
          {/* Top Bar: Counter & Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="lightbox-top-bar"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.875rem", color: "var(--brand-electric)", fontWeight: 800 }}>
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                • Synergy Gym Gallery
              </span>
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close photo viewer"
              className="lightbox-close-btn"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Stage with Single Full-Size Image & Nav Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="lightbox-stage"
          >
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              className="lightbox-nav-btn prev"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="lightbox-img-wrapper">
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].caption}
                onError={handleImageFallback}
                className="lightbox-active-img"
              />
              <p className="lightbox-caption-text">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>

            <button
              onClick={nextImage}
              aria-label="Next photo"
              className="lightbox-nav-btn next"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Swipe Hint */}
          <div style={{ textAlign: "center", color: "var(--text-inverse-muted)", fontSize: "0.75rem", paddingBottom: "var(--sab)" }}>
            Swipe left/right to change photo • Tap (X) to close
          </div>
        </div>
      )}

      <style>{`
        /* Controls Bar */
        .gallery-controls-bar {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 12px;
          margin-bottom: 16px;
        }

        .gallery-filter-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 4px 0;
        }
        .gallery-filter-tabs::-webkit-scrollbar {
          display: none;
        }

        .gallery-tab-btn {
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
          border: 1px solid var(--border-light);
          background-color: var(--bg-surface);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          min-height: 32px;
          flex-shrink: 0;
        }

        .gallery-tab-btn.active {
          border-color: var(--brand-green);
          background-color: var(--text-primary);
          color: #FFFFFF;
        }

        .gallery-nav-arrows {
          display: none;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .gallery-nav-arrows {
            display: flex;
          }
        }

        .gallery-arrow-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid var(--border-light);
          background-color: var(--bg-surface);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .gallery-arrow-btn:hover {
          background-color: var(--text-primary);
          color: #FFFFFF;
        }

        /* Single-Line Horizontal Scroll Track */
        .gallery-single-line-track {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 6px 2px 14px 2px;
          width: 100%;
        }
        .gallery-single-line-track::-webkit-scrollbar {
          display: none;
        }

        /* Short, Compact Image Cards */
        .gallery-item-card {
          flex: 0 0 clamp(180px, 46vw, 240px);
          height: clamp(125px, 28vw, 160px);
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          background-color: #0F172A;
          border: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          scroll-snap-align: start;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          flex-shrink: 0;
        }

        .gallery-item-card:hover {
          transform: translateY(-2px);
          border-color: var(--brand-green);
          box-shadow: 0 8px 20px -6px rgba(22, 163, 74, 0.25);
        }

        .gallery-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .gallery-item-card:hover .gallery-item-img {
          transform: scale(1.05);
        }

        .gallery-expand-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background-color: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          color: #FFFFFF;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          font-size: 0.6875rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
          z-index: 2;
        }

        .gallery-item-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.9) 100%);
          color: #FFFFFF;
          padding: 18px 10px 8px 10px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Bottom Hint & CTA */
        .gallery-bottom-hint {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 6px;
        }

        /* Lightbox Fullscreen Viewer */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background-color: rgba(11, 15, 25, 0.97);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 16px;
          box-sizing: border-box;
        }

        .lightbox-top-bar {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          color: #FFFFFF;
          padding-top: var(--sat);
        }

        .lightbox-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }
        .lightbox-close-btn:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        .lightbox-stage {
          position: relative;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .lightbox-img-wrapper {
          max-height: 72vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100%;
        }

        .lightbox-active-img {
          max-height: 62vh;
          max-width: 88vw;
          object-fit: contain;
          border-radius: var(--radius-md);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
        }

        .lightbox-caption-text {
          margin-top: 14px;
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          max-width: 90%;
          line-height: 1.4;
        }

        .lightbox-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 10;
          transition: background-color 0.2s ease;
        }
        .lightbox-nav-btn:hover {
          background-color: rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 480px) {
          .lightbox-nav-btn {
            width: 36px;
            height: 36px;
          }
          .lightbox-active-img {
            max-width: 80vw;
          }
        }
      `}</style>
    </section>
  );
}
