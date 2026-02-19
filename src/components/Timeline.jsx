import React from "react";

function Timeline() {
    const days = [
        {
            title: "Day 1",
            subtitle: "Ideation & Team Formation",
            desc: "Opening ceremony, problem statement release, team formation and initial planning."
        },
        {
            title: "Day 2",
            subtitle: "Development & Mentoring",
            desc: "Full project development, mentor sessions and mid-evaluation."
        },
        {
            title: "Day 3",
            subtitle: "Final Pitch & Awards",
            desc: "Project submission, demo presentation, judging and prize distribution."
        }
    ];

    return (
        <div className="timeline-section" id="timeline-section">
            <h2 className="timeline-title">Hackathon Timeline</h2>

            <div className="timeline-grid">
                {days.map((day, index) => (
                    <div key={index} className="timeline-card">
                        <div className="timeline-badge">{index + 1}</div>

                        <h3>{day.title}</h3>
                        <h4>{day.subtitle}</h4>
                        <p>{day.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
