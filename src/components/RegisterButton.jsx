import React from "react";

export default function RegisterButton({ onClick }) {
    return (
        <button className="register-minimal" onClick={onClick}>
            <span>Register Now</span>
            <div className="btn-glow"></div>
        </button>
    );
}
