import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from '../components/CTA';
import '../index.css';

const Projects = () => {
  const projectsContainerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = projectsContainerRef.current;
      const newScrollPercentage = container.scrollTop / (container.scrollHeight - container.clientHeight);
      setScrollPercentage(newScrollPercentage);
    };

    const container = projectsContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className='max-container' ref={projectsContainerRef}>
      <h1 className={`head-text ${scrollPercentage > 0.5 ? 'fade-out' : 'fade-in'}`}>
        My{" "}
        <span className={`blue-gradient_text drop-shadow font-semibold ${scrollPercentage > 0.5 ? 'slide-out' : 'slide-in'}`}>
          Projects
        </span>
      </h1>

      <p className={`text-white mt-2 leading-relaxed ${scrollPercentage > 0.5 ? 'fade-out' : 'fade-in'}`}>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex-wrap my-20 gap-16'>
        {projects.map((project, index) => (
          <div
            className='w-full project-item'
            key={project.name}
            style={{
              transform: `translateX(${index % 2 === 0 ? -scrollPercentage * 200 : scrollPercentage * 200}px)`,
              opacity: 1 - scrollPercentage,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            }}
          >
            <div className='block-container'>
              <div className='rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='object-contain py-20 project-image'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-white'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
            </div>
        ))}
      </div>

      <hr className={`border-slate-200 ${scrollPercentage > 0.5 ? 'fade-out' : 'fade-in'}`} />
      <CTA />
    </section>
  );
};

export default Projects;