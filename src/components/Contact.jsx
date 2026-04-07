import React from "react";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Get in Touch</h2>

            <div className="contact-container">

                {/* Clickable Phone Card opening the dialer */}
                <a href="tel:+918921697501" className="contact-card">
                    <div className="icon-wrapper">
                        <FaPhone className="contact-icon" />
                    </div>
                    <h3>Phone</h3>
                    <p>+91 89216 97501<br />+91 93454 43413</p>
                </a>

            </div>

            <div className="contact-footer">
                <p>© {new Date().getFullYear()} Mechathon | Designed by <span>Deepak</span></p>
            </div>
        </section>
    );
}