'use client';
import React from "react";

const Marque = () => {
  const items = [
    { name: "PVC Resin", link: "/categories/pvc-resin" },
    { name: "Calcium Carbonate", link: "/categories/calcium-carbonate" },
    { name: "Citric Acid", link: "/categories/citric-acid" },
    { name: "Plasticizers", link: "/categories/plasticizers" },
    { name: "Melamine", link: "/categories/melamine" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        padding: "8px 0",
        borderTop: "2px solid rgba(255, 215, 0, 0.3)",
        borderBottom: "2px solid rgba(255, 215, 0, 0.3)",
        boxShadow: "0 0 30px rgba(255, 215, 0, 0.1)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative glowing line top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, gold, transparent)",
          animation: "glowLine 3s infinite",
        }}
      />

      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        loop={true}
        onMouseEnter={(e) => (e.target.scrollAmount = 2)}
        onMouseLeave={(e) => (e.target.scrollAmount = 6)}
        style={{
          fontSize: "30px",
          fontWeight: "800",
          letterSpacing: "1px",
          padding: "5px 0",
        }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={{
              marginRight: "80px",
              display: "inline-block",
              textDecoration: "none",
              position: "relative",
              transition: "all 0.3s ease",
              cursor: "pointer",
              background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700, #FFA500)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
              textShadow: "0 0 40px rgba(255, 215, 0, 0.3)",
              filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
              e.currentTarget.style.filter = "drop-shadow(0 0 40px rgba(255, 215, 0, 0.6))";
              e.currentTarget.style.WebkitTextFillColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))";
            }}
          >
            {/* Decorative diamond before each item */}
            <span
              style={{
                marginRight: "15px",
                display: "inline-block",
                color: "#FFD700",
                fontSize: "16px",
                WebkitTextFillColor: "#FFD700",
              }}
            >
              ◆
            </span>
            {item.name}
            <span
              style={{
                marginLeft: "15px",
                display: "inline-block",
                color: "#FFD700",
                fontSize: "16px",
                WebkitTextFillColor: "#FFD700",
                opacity: 0.5,
              }}
            >
              ✦
            </span>
          </a>
        ))}
      </marquee>

      {/* Decorative glowing line bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, gold, transparent)",
          animation: "glowLine 2s infinite reverse",
        }}
      />

      {/* Inline keyframe animations */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 300% 50%; }
          }
          @keyframes glowLine {
            0% { opacity: 0.3; transform: scaleX(0.8); }
            50% { opacity: 1; transform: scaleX(1); }
            100% { opacity: 0.3; transform: scaleX(0.8); }
          }
        `}
      </style>
    </div>
  );
};

export default Marque;