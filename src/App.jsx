import React from "react";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Venue from "./components/Venue";
import Agenda from "./components/Agenda";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

// ✅ Import the poster image
import posterImg from "./assets/images/Mechathon-26-Poster.png";

export default function App() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Slightly increased the tilt multiplier for a more dramatic 3D effect
    const rotateY = ((x - midX) / midX) * 12;
    const rotateX = -((y - midY) / midY) * 12;

    // Remove transition during mouse movement for instant tracking
    card.style.transition = "none";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    // Restore transition so it smooths back into place
    card.style.transition = "transform 0.5s ease-out";
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="hero">
        <h1 className="hero-title">
          <span className="hero-subtitle">Mechanical Engineering Association presents</span>
          <span className="main-title">Mechathon</span>
        </h1>

        <Countdown />

        <a
          href="#register"
          className="scroll-indicator"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("register")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <span className="scroll-text">Scroll to Register</span>
          <svg
            className="scroll-arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>

      {/* Register Section */}
      <div id="register" className="register-section">
        <h2 className="register-title">Ready to Compete?</h2>

        <a
          href="https://forms.gle/99X2JvUajtcjvTVu6"
          target="_blank"
          rel="noopener noreferrer"
          className="modern-register-btn"
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          <span>Register Now</span>
          <svg
            className="btn-arrow"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      {/* Agenda */}
      <div id="agenda">
        <Agenda />
      </div>

      {/* 🔥 Poster Section */}
      <div id="poster" className="poster-section">
        <h2 className="poster-title">Event Poster</h2>

        <div className="poster-container">
          <div
            className="poster-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={posterImg}
              alt="Mechathon 2026 Poster"
              className="poster-image"
            />
            {/* The animated light sweep */}
            <div className="shine"></div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div id="timeline">
        <Timeline />
      </div>

      {/* Venue */}
      <div id="venue">
        <Venue />
      </div>

      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}