import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "linear-gradient(90deg, #9B59B6, #6DD5FA, #3498DB)", // Adjusted gradient for more contrast
        color: "white",
        fontWeight: "700", // Bold text
        fontSize: "1.2rem", // Adjusted font size to match
        padding: "1rem 2.5rem", // More balanced padding
        borderRadius: "8px", // Slightly more rounded corners
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding subtle shadow for depth
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.filter = "brightness(0.85)"; // Slightly darker hover effect
      }}
      onMouseLeave={(e) => {
        e.target.style.filter = "brightness(1)";
      }}
    >
      {children}
    </button>
  );
};

export default Button;
