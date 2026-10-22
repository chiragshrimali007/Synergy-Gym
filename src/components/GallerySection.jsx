import React, { useState, useEffect, useCallback } from "react";
import { assets } from "../config/assets";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, ArrowUpRight } from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px auto" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "36px"
          }}
        >
          {[
            { id: "all", label: "All Photos" },
            { id: "interior", label: "Gym Floor" },
            { id: "strength", label: "Strength & Barbells" },
            { id: "equipment", label: "Equipment" },
            { id: "training", label: "Conditioning" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.875rem",
                fontWeight: 700,
                border: activeFilter === tab.id ? "1.5px solid var(--brand-green)" : "1.5px solid var(--border-light)",
                backgroundColor: activeFilter === tab.id ? "var(--text-primary)" : "var(--bg-surface)",
                color: activeFilter === tab.id ? "#FFFFFF" : "var(--text-secondary)",
                transition: "all 0.2s ease"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px"
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4 / 3",
                backgroundColor: "#0F172A",
                border: "1px solid var(--border-light)"
              }}
              className="gallery-card"
            >
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease"
                }}
                onError={(e) => {
                  if (e.currentTarget.src !== assets.heroFallback) {
                    e.currentTarget.src = assets.heroFallback;
                  }
                }}
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                  opacity: 0,
                  transition: "opacity 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "20px",
                  color: "#FFFFFF"
                }}
                className="gallery-overlay"
              >
                <div style={{ alignSelf: "flex-end" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Maximize2 size={18} />
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 700 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tour Enquiry */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.VISIT_THE_GYM)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: "12px 24px" }}
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
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(11, 15, 25, 0.95)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "24px"
          }}
        >
          {/* Top Bar: Counter & Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              maxWidth: "1000px",
              margin: "0 auto",
              color: "#FFFFFF"
            }}
          >
            <span style={{ fontSize: "0.875rem", color: "var(--brand-electric)", fontWeight: 700 }}>
              {lightboxIndex + 1} / {filteredItems.length}
            </span>

            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Stage with Image & Prev/Next Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "1000px",
              width: "100%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              style={{
                position: "absolute",
                left: "-20px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(6px)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10
              }}
            >
              <ChevronLeft size={28} />
            </button>

            <div style={{ maxHeight: "75vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].caption}
                style={{
                  maxHeight: "70vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "var(--radius-md)"
                }}
              />
              <p
                style={{
                  marginTop: "16px",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textAlign: "center"
                }}
              >
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>

            <button
              onClick={nextImage}
              aria-label="Next photo"
              style={{
                position: "absolute",
                right: "-20px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(6px)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10
              }}
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Lightbox Footer Instruction */}
          <div style={{ textAlign: "center", color: "var(--text-inverse-muted)", fontSize: "0.8125rem" }}>
            Press Esc to close • Use left/right arrow keys to navigate
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
