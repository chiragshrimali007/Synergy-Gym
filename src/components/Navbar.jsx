import React, { useState, useEffect } from "react";
import { assets } from "../config/assets";
import { BUSINESS_INFO } from "../config/business";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "../utils/whatsapp";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Programs", href: "#programs" },
    { label: "Experience", href: "#experience" },
    { label: "Membership", href: "#membership" },
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
        const headerOffset = 80;
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
        transition: "all 0.3s ease",
        padding: isScrolled ? "12px 0" : "18px 0",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(248, 249, 250, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: isScrolled ? "1px solid #E2E8F0" : "1px solid transparent"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Wordmark & Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
          aria-label="Synergy Gym Homepage"
        >
          <img
            src={assets.logo}
            alt="Synergy Gym"
            style={{ height: "42px", width: "auto" }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{ display: "none" }}
          aria-label="Main Navigation"
        >
          <ul style={{ display: "flex", alignItems: "center", gap: "28px", listStyle: "none" }}>
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
        <div className="desktop-cta" style={{ display: "none", alignItems: "center", gap: "14px" }}>
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
            style={{ padding: "10px 20px", fontSize: "0.875rem" }}
          >
            <span>Join Synergy</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-surface)",
            color: "var(--text-primary)"
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className="mobile-drawer"
        style={{
          position: "fixed",
          top: "70px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          padding: "32px 24px 48px",
          display: mobileMenuOpen ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 999,
          overflowY: "auto",
          borderTop: "1px solid var(--border-light)"
        }}
      >
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px" }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--border-light)"
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} style={{ color: "var(--text-muted)" }} />
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "32px" }}>
          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.GENERAL_ENQUIRY)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%", padding: "16px" }}
          >
            <span>Join Synergy on WhatsApp</span>
            <ArrowUpRight size={18} />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneDisplay.replace(/\s+/g, "")}`}
            className="btn btn-outline"
            style={{ width: "100%", padding: "14px" }}
          >
            <Phone size={16} />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "12px" }}>
            Badwasia, Maderana Colony, Jodhpur • Est. 2015
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </header>
  );
}
