import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { motion, AnimatePresence } from 'framer-motion';


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center' >{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold text-green-400'>Manohar</span> 👋🏻
            <br/>
            A software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox 
            text="Having collaborated with various startup companies, I've acquired a wealth of skills and knowledge, honing my expertise through diverse experiences along the way."
            link="/about"
            btnText="Learn more"
        />
    ),

    3: (
        <InfoBox 
            text="Having spearheaded numerous successful projects throughout the years, are you curious about their overall impact and outcomes?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Are you seeking someone to assist with a project or looking for a developer to collaborate with? Feel free to reach out — I'm here and ready to help with just a few keyboard taps!"
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    const content = renderContent[currentStage] || null;
  
    // Animation variants for the popup effect
    const popupVariant = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <AnimatePresence>
        {content && (
          <motion.div
            className='popup-container'
            variants={popupVariant}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <motion.div
              className='popup-content'
              variants={popupVariant}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  
  export default HomeInfo;