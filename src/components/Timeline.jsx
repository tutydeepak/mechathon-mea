import React from "react";

function Timeline() {
    const days = [
        {
            title: "Day 1",
            subtitle: "Quiz & Opening Ceremony",
            desc: "Opening ceremony, team introductions, and the quiz challenge to kickstart the hackathon."
        },
        {
            title: "Day 2",
            subtitle: "Presentation, Mentoring & Final Pitch, ",
            desc: "Design challenge presentations, followed by mentoring sessions to refine project ideas and solutions."
        },
        {
            title: "Day 3",
            subtitle: "Development & Awards",
            desc: "Final development push, project submissions, and the awards ceremony to celebrate the winners and participants."
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
