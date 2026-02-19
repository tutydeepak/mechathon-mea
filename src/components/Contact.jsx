import React from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Get in Touch</h2>

            <div className="contact-container">

                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <h3>Email</h3>
                    <p>mechathon@innovatex.com</p>
                </div>

                <div className="contact-card">
                    <FaPhone className="contact-icon" />
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                </div>

                <div className="contact-card">
                    <FaInstagram className="contact-icon" />
                    <h3>Instagram</h3>
                    <p>@mechathon_official</p>
                </div>

                <div className="contact-card">
                    <FaLinkedin className="contact-icon" />
                    <h3>LinkedIn</h3>
                    <p>InnovateX MEA</p>
                </div>

            </div>

            <div className="contact-footer">
                © {new Date().getFullYear()} Mechathon | Designed by MEA
            </div>
        </section>
    );
}
