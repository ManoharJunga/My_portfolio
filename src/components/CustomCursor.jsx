
import Dragon from '../assets/icons/Dragon.png'
import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Import your CSS file for styling the custom cursor

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(0); // X position of the cursor
  const [cursorY, setCursorY] = useState(0); // Y position of the cursor
  const [selecting, setSelecting] = useState(false); // State to track text selection

  const trackCursorPosition = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  const handleSelection = () => {
    setSelecting(window.getSelection().toString().length > 0);
  };

  useEffect(() => {
    document.addEventListener('mousemove', trackCursorPosition);
    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mousemove', trackCursorPosition);
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  return (
    <div className={`custom-cursor ${selecting ? 'selecting' : ''}`} style={{ left: `${cursorX}px`, top: `${cursorY}px` }}>
      {/* Your custom cursor image */}
      <img
        src={Dragon} // Replace with your default image path
        alt="Custom Cursor"
        className="cursor-image"
        width="32" // Adjust width and height as needed
        height="32"
      />
    </div>
  );
};

export default CustomCursor;
