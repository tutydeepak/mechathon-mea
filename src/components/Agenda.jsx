import React, { useEffect, useRef, useState } from "react";
import {
    FaQuestionCircle,
    FaDraftingCompass,
    FaLightbulb,
    FaCube,
} from "react-icons/fa";

export default function Agenda() {
    // State to keep track of which card is currently glowing
    const [activeIndex, setActiveIndex] = useState(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Get the index from the data attribute and set it as active
                        const index = Number(entry.target.getAttribute("data-index"));
                        setActiveIndex(index);
                    }
                });
            },
            {
                threshold: 0.5,
                // Adjusted rootMargin to create a strict "focus zone" in the vertical center of the screen
                rootMargin: "-25% 0px -25% 0px"
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

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
                    {/* Add conditional class and data-index */}
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
                    <div className="agenda-icon">
                        <FaDraftingCompass />
                    </div>
                    {/* Add conditional class and data-index */}
                    <div
                        className={`agenda-card ${activeIndex === 1 ? "glow-active" : ""}`}
                        data-index={1}
                        ref={(el) => (cardRefs.current[1] = el)}
                    >
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
                    {/* Add conditional class and data-index */}
                    <div
                        className={`agenda-card ${activeIndex === 2 ? "glow-active" : ""}`}
                        data-index={2}
                        ref={(el) => (cardRefs.current[2] = el)}
                    >
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
                    {/* Add conditional class and data-index */}
                    <div
                        className={`agenda-card ${activeIndex === 3 ? "glow-active" : ""}`}
                        data-index={3}
                        ref={(el) => (cardRefs.current[3] = el)}
                    >
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