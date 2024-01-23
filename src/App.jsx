import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import Menubar from './pages/Menubar';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons library


const App = () => {
  return (
    <main className='bg-black'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/menubar" element={<Menubar />} />
            </Routes>
            <footer className='bg-black text-white py-4'>
              
                <div className='flex justify-around'>
                    {/* Facebook */}
                    <a href='https://www.facebook.com/leelamanohar.junga.5' target='_blank' rel='noopener noreferrer'>
                        <FaFacebook size={32} />
                    </a>
                    
                    {/* Instagram */}
                    <a href='https://www.instagram.com/leelamanoharjunga/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={32} />
                    </a>
                    
                    {/* LinkedIn */}
                    <a href='https://www.linkedin.com/in/leela-manohar-junga-061280241/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={32} />
                    </a>
                    
                    {/* GitHub */}
                    <a href='https://github.com/ManoharJunga' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={32} />
                    </a>
                </div>
            </footer>
        </Router>
    </main>
  )
}

export default App