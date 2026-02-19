import React, { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Venue from "./Components/Venue";
import Agenda from "./components/Agenda";
import Contact from "./Components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      {/* ✅ Use the Navbar component */}
      <Navbar />

      <div id="home" className="hero">
        <h1 className="hero-title">
          <span className="main-title">Mechathon</span>
          <span className="hero-subtitle">
            An Initiative from MEA
          </span>
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

      <div id="register" className="register-section">
        <h2 className="register-title">Ready to Compete?</h2>

        <button className="modern-register-btn">
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
        </button>
      </div>
      <div id="agenda">
        <Agenda />
      </div>

      <div id="timeline">
        <Timeline />
      </div>

      <div id="venue">
        <Venue />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
