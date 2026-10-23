import React, { useState, useEffect, useCallback, useRef } from "react";
import { assets } from "../config/assets";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import { Camera, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const touchStartX = useRef(null);

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
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 36px auto" }}>
          <div className="section-tag">
            <Camera size={14} />
            <span>Facility & Training Gallery</span>
          </div>
          <h2 className="section-title">
            INSIDE SYNERGY GYM
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            A visual look into our training floor, iron racks, free weights, and dedicated workout atmosphere.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filter-tabs">
          {[
            { id: "all", label: "All Photos" },
            { id: "interior", label: "Gym Floor" },
            { id: "strength", label: "Strength" },
            { id: "equipment", label: "Equipment" },
            { id: "training", label: "Conditioning" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className="gallery-tab-btn"
              style={{
                border: activeFilter === tab.id ? "1.5px solid var(--brand-green)" : "1.5px solid var(--border-light)",
                backgroundColor: activeFilter === tab.id ? "var(--text-primary)" : "var(--bg-surface)",
                color: activeFilter === tab.id ? "#FFFFFF" : "var(--text-secondary)"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="gallery-responsive-grid">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="gallery-item-card"
            >
              <img
                src={item.url}
                alt={item.caption || "Synergy Gym photo"}
                loading="lazy"
                onError={handleImageFallback}
                className="gallery-item-img"
              />

              {/* Caption Bar (Visible on mobile, enhanced on hover) */}
              <div className="gallery-item-caption">
                <span>{item.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tour Enquiry */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: "12px 22px", fontSize: "0.875rem" }}
          >
            <span>Want to see the gym in person? Book a walk-in visit</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gym Photo Lightbox"
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
            <span style={{ fontSize: "0.875rem", color: "var(--brand-electric)", fontWeight: 700 }}>
              {lightboxIndex + 1} / {filteredItems.length}
            </span>

            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="lightbox-close-btn"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Stage with Touch & Nav Controls */}
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

          {/* Footer Guidance */}
          <div style={{ textAlign: "center", color: "var(--text-inverse-muted)", fontSize: "0.75rem", paddingBottom: "var(--sab)" }}>
            Swipe or use arrow keys • Tap outside to close
          </div>
        </div>
      )}

      <style>{`
        .gallery-filter-tabs {
          display: flex;
          justifyContent: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .gallery-tab-btn {
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 700;
          transition: all 0.2s ease;
          min-height: 38px;
        }

        .gallery-responsive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 16px;
        }

        .gallery-item-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4 / 3;
          background-color: #0F172A;
          border: 1px solid var(--border-light);
          width: 100%;
        }

        .gallery-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .gallery-item-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.85) 100%);
          color: #FFFFFF;
          padding: 24px 14px 12px;
          font-size: 0.8125rem;
          font-weight: 600;
          line-height: 1.3;
        }

        @media (hover: hover) and (pointer: fine) {
          .gallery-item-card:hover .gallery-item-img {
            transform: scale(1.04);
          }
        }

        /* Lightbox Mobile Architecture */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background-color: rgba(11, 15, 25, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
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
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-stage {
          position: relative;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 8px;
        }

        .lightbox-img-wrapper {
          max-height: 68vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100%;
        }

        .lightbox-active-img {
          max-height: 60vh;
          max-width: 85vw;
          object-fit: contain;
          border-radius: var(--radius-md);
        }

        .lightbox-caption-text {
          margin-top: 12px;
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          max-width: 90%;
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
        }

        @media (max-width: 480px) {
          .lightbox-nav-btn {
            width: 38px;
            height: 38px;
          }
          .lightbox-active-img {
            max-width: 78vw;
          }
        }
      `}</style>
    </section>
  );
}
