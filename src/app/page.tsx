'use client';

import { useState, useEffect, JSX } from 'react';

export default function Home() {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  // Generate stars only on the client side
  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map((_, i) => (
      <div
        key={i}
        className="star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          animationDelay: `${Math.random() * 2}s`,
          backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
        }}
      />
    ));
    setStars(newStars);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "radial-gradient(circle, #1a2a6c, #b21f1f, #fdbb2d)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 15s ease infinite",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Bintang-bintang */}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .star {
          position: absolute;
          border-radius: 50%;
          animation: twinkle 2s infinite ease-in-out;
        }
      `}</style>

      {/* Render stars */}
      {stars}

      {/* Konten utama */}
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          backdropFilter:  "blur(10px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#ffffff" }}>
        Website is still under construction. 
        </h1>
      </div>
    </div>
  );
}
