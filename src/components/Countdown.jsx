import React, { useEffect, useState } from "react";

function Countdown() {
    const eventDate = new Date("March 25, 2026 09:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(eventDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
        <div className="countdown">
            <div className="box">
                <h2>{days}</h2>
                <p>Days</p>
            </div>
            <div className="box">
                <h2>{hours}</h2>
                <p>Hours</p>
            </div>
            <div className="box">
                <h2>{minutes}</h2>
                <p>Minutes</p>
            </div>
            <div className="box">
                <h2>{seconds}</h2>
                <p>Seconds</p>
            </div>
        </div>
    );
}

export default Countdown;
