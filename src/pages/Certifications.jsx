import React, { useRef, useEffect, useState } from "react";
import img1 from "../assets/Certifications/HTML5_and_CSS3.jpeg";
import img2 from '../assets/Certifications/headout.png';
import img3 from '../assets/Certifications/Problem_Solving_(Intermediate).png';
import img4 from '../assets/Certifications/Python_(Basic).png';
import img5 from '../assets/Certifications/SQL_(Basic).png';

const CertificationSection = () => {
  const certificationsContainerRef = useRef(null);
  const textRef = useRef(null);

  const certifications = [
    { imageUrl: img1, name: "Udemy", description: "Certification of Completion" },
    { imageUrl: img2, name: "Headout", description: "Certification of Participation" },
    { imageUrl: img3, name: "HackerRank", description: "Problem Solving" },
    { imageUrl: img4, name: "HackerRank", description: "Python" },
    { imageUrl: img5, name: "HackerRank", description: "SQL" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = certificationsContainerRef.current;
      const textElement = textRef.current;
      const newScrollPercentage =
        container.scrollTop / (container.scrollHeight - container.clientHeight);
      textElement.style.transform = `translateY(-${newScrollPercentage * 100}%)`;
    };

    const container = certificationsContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="max-container" ref={certificationsContainerRef}>
      <h1 className="head-text">
        My <span ref={textRef} className="blue-gradient_text font-semibold">
          Certifications
        </span>
      </h1>

      <p className="text-white mt-2 leading-relaxed">
        Here are some of the certifications I've achieved throughout my career. Each certification represents a commitment to continuous learning and expertise in specific areas.
      </p>

      <div className='flex-wraps'>
        {certifications.map((certification, index) => (
          <div
            className='w-full certification-item mt-20'
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column', // Stack items vertically on small screens
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <img
              src={certification.imageUrl}
              alt={certification.name}
              className='object-contain certification-image'
              style={{
                width: '70%', // Take up full width on small screens
                marginBottom: '1rem', // Adjust margin as needed
                transition: 'transform 0.3s ease-in-out',
                ':hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
            <div className='text-center'>
              <h4 className='blue-gradient_text text-2xl font-poppins font-semibold'>{certification.name}</h4>
              <p className="text-white">{certification.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
