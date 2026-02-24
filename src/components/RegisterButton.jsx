import React from "react";

export default function RegisterButton() {
    const handleClick = () => {
        const link = document.createElement("a");
        link.href = "https://forms.gle/99X2JvUajtcjvTVu6";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.click();
    };

    return (
        <button className="modern-register-btn" onClick={handleClick}>
            Regwister Now →
        </button>
    );
}