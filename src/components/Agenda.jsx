import React from "react";
import {
    FaQuestionCircle,
    FaDraftingCompass,
    FaLightbulb,
    FaCube,
} from "react-icons/fa";

export default function Agenda() {
    return (
        <section id="agenda" className="agenda-section">
            <h2 className="agenda-title">Hackathon Agenda</h2>

            <div className="agenda-timeline">

                {/* Round 1 */}
                <div className="agenda-item">
                    <div className="agenda-icon">
                        <FaQuestionCircle />
                    </div>
                    <div className="agenda-card">
                        <h3>Round 1 – Quiz Challenge</h3>
                        <ul>
                            <li>General Knowledge (innovation, tech, current affairs)</li>
                            <li>Mechanical Engineering fundamentals</li>
                            <li>Logical & problem-solving questions</li>
                            <li>Elimination round to shortlist teams</li>
                        </ul>
                    </div>
                </div>

                {/* Round 2 */}
                <div className="agenda-item">
                    <div className="agenda-icon">
                        <FaDraftingCompass />
                    </div>
                    <div className="agenda-card">
                        <h3>Round 2 – Design Challenge</h3>

                        {/* Change <a> back to <div> if you don't want it to be a clickable link.
                          Replace "#" with your actual URL if you do.
                        */}
                        <a href="#" className="highlight-box">
                            <p>First Year: AutoCAD modelling task</p>
                            <p>Second Year & Above: SolidWorks modelling</p>
                        </a>

                        <ul>
                            <li>Time-bound design problem</li>
                            <li>Evaluated on creativity & modelling efficiency</li>
                        </ul>
                    </div>
                </div>

                {/* Round 3 */}
                <div className="agenda-item">
                    <div className="agenda-icon">
                        <FaLightbulb />
                    </div>
                    <div className="agenda-card">
                        <h3>Round 3 – Problem Statement & Pitch</h3>
                        <ul>
                            <li>Real-world mechanical problem statement</li>
                            <li>Develop an innovative solution</li>
                            <li>Present and pitch to judges</li>
                            <li>Evaluation: Feasibility, Innovation, Practicality</li>
                        </ul>
                    </div>
                </div>

                {/* Round 4 */}
                <div className="agenda-item">
                    <div className="agenda-icon">
                        <FaCube />
                    </div>
                    <div className="agenda-card">
                        <h3>Round 4 – CAD Development & Prototyping</h3>
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
