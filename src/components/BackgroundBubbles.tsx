import React from "react";

const bubbles = [
  { left: "5%", size: 96, duration: 28, delay: 0 },
  { left: "15%", size: 48, duration: 22, delay: 3 },
  { left: "28%", size: 72, duration: 26, delay: 6 },
  { left: "38%", size: 40, duration: 20, delay: 1 },
  { left: "50%", size: 100, duration: 32, delay: 4 },
  { left: "62%", size: 56, duration: 24, delay: 2 },
  { left: "70%", size: 80, duration: 30, delay: 5 },
  { left: "78%", size: 44, duration: 21, delay: 7 },
  { left: "86%", size: 64, duration: 25, delay: 9 },
  { left: "92%", size: 36, duration: 18, delay: 11 },
];

const BackgroundBubbles: React.FC = () => {
  return (
    <div aria-hidden="true" className="bubbles">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBubbles;
