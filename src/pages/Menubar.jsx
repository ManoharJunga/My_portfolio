import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { NavLink } from 'react-router-dom';

const TextEffect = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []); // Run once when the component mounts

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            margin: 10%;
          }

          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 100px;
          }

          .text {
            font-size: 10vw;
            letter-spacing: -.01em;
            line-height: 100%;
            margin: 0;
            width: 100%;
            color: rgb(182, 182, 182, 0.2);
            background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
            -webkit-background-clip: text;
            background-clip: text;
            background-size: 0%;
            transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
            border-bottom: 1px solid #2F2B28;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            position: relative;
          }

          span {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #FF0000;
            color: #0D0D0D;
            clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
            transform-origin: center;
            transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .text:hover > span {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          }

          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>

      <div className="container">
        <h1 className="text">
          About
          <span>
            <NavLink to="/about" activeClassName="text-white" className="text-black">
              About me
            </NavLink>
          </span>
        </h1>
        <h1 className="text">
        Projects
          <span>
            <NavLink to="/projects" activeClassName="text-white" className="text-black">
             My Projects
            </NavLink>
          </span>
        </h1>
        <h1 className="text">
          Certifications
          <span>
            <NavLink to="/certifications" activeClassName="text-white" className="text-black">
              Certifications
            </NavLink>
          </span>
        </h1>
        <h1 className="text">
          Contact
          <span>
            <NavLink to="/contact" activeClassName="text-white" className="text-black">
              Contact me
            </NavLink>
          </span>
        </h1>
      </div>
    </>
  );
};

export default TextEffect;
