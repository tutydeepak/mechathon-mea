import React, { useState, useEffect } from "react";
import "../index.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Close the mobile dropdown if the user starts scrolling
      setMenuOpen(false);

      // 2. Simply check if we've scrolled past the 50px mark
      if (window.scrollY > 50) {
        setIsScrolled(true); // Shrinks the navbar and makes it dark
      } else {
        setIsScrolled(false); // Returns it to large and transparent
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Removed the navbar-hidden logic entirely
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo">InnovateX</div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#agenda" onClick={() => setMenuOpen(false)}>Agenda</a>
        <a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;