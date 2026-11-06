import React, { useState, useEffect, useRef } from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { handleImageFallback } from "../utils/media";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Programs", href: "#programs" },
    { label: "Experience", href: "#experience" },
    { label: "Membership", href: "#membership" },
    { label: "FAQ", href: "#faq" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" }
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header
      className={`navbar-root ${isScrolled ? "navbar-scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background-color 0.25s ease, padding 0.25s ease, box-shadow 0.25s ease",
        padding: isScrolled ? "10px 0" : "14px 0",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(248, 249, 250, 0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: isScrolled ? "1px solid #E2E8F0" : "1px solid transparent"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px"
        }}
      >
        {/* Brand Wordmark & Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0
          }}
          aria-label="Synergy Gym Homepage"
        >
          <img
            src={assets.logo}
            alt="Synergy Gym"
            onError={handleImageFallback}
            style={{
              height: "clamp(34px, 8vw, 42px)",
              maxWidth: "clamp(150px, 46vw, 210px)",
              width: "auto",
              objectFit: "contain"
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{ display: "none" }}
          aria-label="Main Navigation"
        >
          <ul style={{ display: "flex", alignItems: "center", gap: "24px", listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    padding: "6px 0"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-green)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="desktop-cta" style={{ display: "none", alignItems: "center", gap: "12px" }}>
          <a
            href={`tel:${BUSINESS_INFO.phoneDisplay.replace(/\s+/g, "")}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--text-secondary)",
              padding: "8px 12px",
              borderRadius: "var(--radius-full)",
              transition: "color 0.2s ease"
            }}
            aria-label={`Call Synergy Gym at ${BUSINESS_INFO.phoneDisplay}`}
          >
            <Phone size={15} style={{ color: "var(--brand-green)" }} />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: "9px 18px", fontSize: "0.875rem", minHeight: "40px" }}
          >
            <span>Join Synergy</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Hamburger Button (Min 44x44px touch target) */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-surface)",
            color: "var(--text-primary)",
            flexShrink: 0
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            height: "calc(100vh - 64px)",
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "24px 20px calc(24px + var(--sab))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 999,
            overflowY: "auto",
            borderTop: "1px solid var(--border-light)"
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontSize: "var(--text-h3)",
                    fontWeight: 800,
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--border-light)",
                    minHeight: "44px"
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} style={{ color: "var(--text-muted)" }} />
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: "100%", padding: "14px", minHeight: "48px" }}
            >
              <span>Join Synergy on WhatsApp</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneDisplay.replace(/\s+/g, "")}`}
              className="btn btn-outline"
              style={{ width: "100%", padding: "12px", minHeight: "44px" }}
            >
              <Phone size={16} />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "8px" }}>
              Badwasia, Maderana Colony, Jodhpur • Est. 2015
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
