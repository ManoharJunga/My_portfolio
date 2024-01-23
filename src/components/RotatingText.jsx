import React, { useEffect } from 'react';
import './style.css'; // Import your CSS file

const RotatingText = () => {
  useEffect(() => {
    const text = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map((char, idx) => `<span style={{ transform: 'rotate(${idx * 6.4}deg)' }}>${char}</span>`)
      .join("");
  }, []);

  return (
    <div className="circle">
      <div className="logo"></div>
      <div className="text">
        <p>Scan | Your | Product | Get | More | Information |</p>
      </div>
    </div>
  );
};

export default RotatingText;
