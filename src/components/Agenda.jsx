import React, { useEffect, useRef } from "react";
import {
    FaQuestionCircle,
    FaDraftingCompass,
    FaLightbulb,
    FaCube,
} from "react-icons/fa";

export default function Agenda() {
    // Array to hold references to our cards
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When the card is sufficiently in view, add the glow class
                    if (entry.isIntersecting) {
                        entry.target.classList.add("glow-active");
                    } else {
                        // Remove it when it leaves the screen so it can trigger again
                        entry.target.classList.remove("glow-active");
                    }
                });
            },
            {
                // Triggers when 50% of the element is visible
                threshold: 0.5,
                // Slight offset so it triggers nicely on mobile screens
                rootMargin: "-10% 0px -10% 0px"
            }
        );

        // Observe all card refs
        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        // Cleanup on unmount
        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section id="agenda" className="agenda-section">
            <h2 className="agenda-title">Hackathon Agenda</h2>

            <div className="agenda-timeline">

                {/* Round 1 */}
                <div className="agenda-item">
                    <div className="agenda-icon">
                        <FaQuestionCircle />
                    </div>
                    {/* Attach to ref array index 0 */}
                    <div className="agenda-card" ref={(el) => (cardRefs.current[0] = el)}>
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
                    <div className="agenda-icon">
                        <FaDraftingCompass />
                    </div>
                    {/* Attach to ref array index 1 */}
                    <div className="agenda-card" ref={(el) => (cardRefs.current[1] = el)}>
                        <h3>Round 2 – Presentation - Design Challenge</h3>
                        <a href="#" className="highlight-box">
                            <p>Second Year & Above: SolidWorks modelling</p>
                        </a>
                        <ul>
                            <li>Time-bound design problem</li>
                            <li>Evaluated on creativity & mechanicsm efficiency presented</li>
                        </ul>
                    </div>
                </div>

                {/* Problem Statement */}
                <div className="agenda-item">
                    <div className="agenda-icon">
                        <FaLightbulb />
                    </div>
                    {/* Attach to ref array index 2 */}
                    <div className="agenda-card" ref={(el) => (cardRefs.current[2] = el)}>
                        <h3>Problem Statement & Pitch</h3>
                        <ul>
                            <li>Real-world mechanical problem statement</li>
                            <li>Develop an innovative solution</li>
                            <li>Present and pitch to judges</li>
                            <li>Evaluation: Feasibility, Innovation, Practicality</li>
                        </ul>
                    </div>
                </div>

                {/* Round 3 */}
                <div className="agenda-item">
                    <div className="agenda-icon">
                        <FaCube />
                    </div>
                    {/* Attach to ref array index 3 */}
                    <div className="agenda-card" ref={(el) => (cardRefs.current[3] = el)}>
                        <h3>Round 3 – CAD Development & Prototyping</h3>
                        <ul>
                            <li>Complete CAD assembly required</li>
                            <li>Strictly no GrabCAD or external downloads</li>
                            <li>Violation leads to disqualification</li>
                            <li>Prototype fabrication using 3D printing</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}