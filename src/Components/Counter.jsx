import React, { useState, useEffect, useRef } from "react";

// Component to display the stats with animated counters
const StatCard = ({ title, number, isVisible }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // Function to increment the counter
  const startCounter = () => {
    let start = 0;
    const end = number;
    const increment = Math.ceil(end / 40); // Increased increment value to speed up the count
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 15); // Reduced interval time to 15ms for faster counting
  };

  // Start counter when element is in view
  useEffect(() => {
    if (isVisible) {
      startCounter();
    }
  }, [isVisible, number]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#EF4444", // red-500 background color
        padding: "30px", // Increased padding
        textAlign: "center",
        flex: "1",
        height: "200px", // Increased height of each stat card
        transition: "transform 1s, opacity 1s", // Smooth transition
        transform: isVisible ? "translateY(0)" : "translateY(50px)", // Slide in from below
        opacity: isVisible ? 1 : 0, // Fade in
      }}
    >
      <p style={{ fontSize: "60px", fontWeight: "bold", color: "#FFFFFF" }}>
        {count}+ 
      </p> {/* Increased font size for number and added "+" sign */}
      <h3 style={{ fontSize: "20px", color: "#FFFFFF", marginTop: "10px" }}>
        {title}
      </h3> {/* Smaller font size for title and added some margin */}
    </div>
  );
};

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Intersection Observer for detecting when the stats container is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger counter animation when in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div ref={statsRef}>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Default to row layout (side by side)
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {/* Stat Cards */}
        <StatCard title="Dishes" number={34} isVisible={isVisible} />
        <StatCard title="Year of Service" number={22} isVisible={isVisible} />
        <StatCard title="Award of Quality" number={7} isVisible={isVisible} />
        <StatCard title="Outlets" number={2} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Counter;
