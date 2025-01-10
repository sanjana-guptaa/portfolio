import { useEffect, useState } from "react";
import "./CustomCursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Track mouse down/up events
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Attach event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      // Cleanup event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    // Add hover effects on links and buttons
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={`${isClicked ? "clicked" : ""} ${isHovering ? "hovering" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default Cursor;
