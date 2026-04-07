import React, { useEffect, useRef, useState } from "react";
import {
  FaQuestionCircle,
  FaDraftingCompass,
  FaLightbulb,
  FaCube,
  FaInfoCircle,
  FaTools,
  FaMugHot,
  FaFileAlt,
} from "react-icons/fa";

// 1. Additional Information Component
function AdditionalInfo() {
  const infoRef = useRef(null);
  const [infoActive, setInfoActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInfoActive(true);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: FaTools,
      title: "On-campus fabrication access",
      description:
        "College fabrication facilities can be used to build and iterate on your project components.",
    },
    {
      icon: FaMugHot,
      title: "Refreshments provided",
      description:
        "Snacks and refreshments will be available during the event to keep you going.",
    },
    {
      icon: FaFileAlt,
      title: "On Duty (OD) support",
      description:
        "OD support will be facilitated as per institutional guidelines.",
    },
  ];

  return (
    <div className="agenda-additional">
      <div
        ref={infoRef}
        className={`agenda-additional__inner ${infoActive ? "is-active" : ""}`}
      >
        <div className="agenda-additional__glow" />

        <div className="agenda-additional__card">
          <div className="agenda-additional__accent" />

          <div className="agenda-additional__header">
            <div className="agenda-additional__headerIcon" aria-hidden="true">
              <FaInfoCircle />
            </div>
            <div className="agenda-additional__headerText">
              <h3>Additional Information</h3>
              <p>A few things to know before you start building.</p>
            </div>
          </div>

          <div className="agenda-additional__grid">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="agenda-additional__item"
                >
                  <div className="agenda-additional__itemGlow" />
                  <div className="agenda-additional__itemInner">
                    <div className="agenda-additional__itemIcon" aria-hidden="true">
                      <Icon />
                    </div>
                    <div className="agenda-additional__itemText">
                      <div className="agenda-additional__itemTitle">{item.title}</div>
                      <div className="agenda-additional__itemDesc">{item.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Main Agenda Component
export default function Agenda() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting && !isNaN(index)) {
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="agenda" className="agenda-section">
      <h2 className="agenda-title">Hackathon Agenda</h2>

      <div className="agenda-timeline">
        {/* Round 1 */}
        <div className="agenda-item">
          <div className="agenda-icon"><FaQuestionCircle /></div>
          <div
            className={`agenda-card ${activeIndex === 0 ? "glow-active" : ""}`}
            data-index={0}
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <h3>Round 1 – Quiz Challenge</h3>
            <ul>
              <li>General Knowledge (innovation, tech, current affairs)</li>
              <li>Mechanical Engineering fundamentals</li>
              <li>Logical & problem-solving questions</li>
            </ul>
          </div>
        </div>

        {/* Round 2 */}
        <div className="agenda-item">
          <div className="agenda-icon"><FaDraftingCompass /></div>
          <div
            className={`agenda-card ${activeIndex === 1 ? "glow-active" : ""}`}
            data-index={1}
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <h3>Round 2 – Presentation - Design Challenge</h3>
            <div className="highlight-box">
              <p>First Year: AutoCAD</p>
              <p>Second Year & Above: SolidWorks modelling</p>
            </div>
            <ul>
              <li>Mixed-year teams encouraged</li>
              <li>All-first-year teams get a different problem</li>
              <li>Time-bound design problem</li>
              <li>Evaluated on creativity & mechanism efficiency</li>
            </ul>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="agenda-item">
          <div className="agenda-icon"><FaLightbulb /></div>
          <div
            className={`agenda-card ${activeIndex === 2 ? "glow-active" : ""}`}
            data-index={2}
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <h3>Problem Statement & Pitch</h3>
            <ul>
              <li>Real-world mechanical problem</li>
              <li>Develop innovative solution</li>
              <li>Pitch to judges</li>
              <li>Evaluation: Feasibility, Innovation, Practicality</li>
            </ul>
          </div>
        </div>

        {/* Round 3 */}
        <div className="agenda-item">
          <div className="agenda-icon"><FaCube /></div>
          <div
            className={`agenda-card ${activeIndex === 3 ? "glow-active" : ""}`}
            data-index={3}
            ref={(el) => (cardRefs.current[3] = el)}
          >
            <h3>Round 3 – CAD Development & Prototyping</h3>
            <ul>
              <li>Complete CAD assembly required</li>
              <li>No GrabCAD or external downloads</li>
              <li>Violation leads to disqualification</li>
              <li>Prototype fabrication using 3D printing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rendering the updated component */}
      <AdditionalInfo />
      
    </section>
  );
}