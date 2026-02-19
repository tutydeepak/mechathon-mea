import React from "react";

function Venue() {
    return (
        <div className="venue-section">
            <h2>Event Venue</h2>

            <div className="venue-content">
                <div className="venue-info">
                    <h3>Old Active Learning Lab (Second Floor) - Mechanical C Block</h3>
                    <p>Kattankulathur, Chennai</p>
                    <p>Reporting Time: 9:00 AM</p>
                </div>

                <iframe
                    title="venue-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3563676487215!2d80.03705477578733!3d12.820233087481446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76d00733309%3A0x21e525cc4bc7de19!2sMECHANICAL%20C%20BLOCK%2C%20college%20road%2C%20Potheri%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1771471029662!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=12.820233087481446,80.03705477578733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direction-btn"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 3L3 10l7 2 2 7 7-18z" />
                    </svg>
                    Get Directions
                </a>




            </div>
        </div>
    );
}

export default Venue;
