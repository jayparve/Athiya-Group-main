import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/athiya-logo.webp"
import {motion} from "framer-motion"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const buttonVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.06 },
    tap: { scale: 0.98 }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Update active section based on scroll position
      const sections = [
        { id: 'home', offset: 0 },
        { id: 'benefits', offset: 500 },
        { id: 'gallery', offset: 1100 },
        { id: 'pricing', offset: 1700 },
        { id: 'testimonials', offset: 2300 },
        { id: 'location', offset: 2900 },
        { id: 'team', offset: 3500 },
        { id: 'calculator', offset: 4100 }
      ];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const isActive = (sectionId) => {
    return activeSection === sectionId;
  };

  const linkClass = (sectionId) => `text-black transition-colors duration-300 font-normal cursor-pointer ${
    isActive(sectionId) ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-400'
  }`;

  return (
    <nav className={`font-bold fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-4 overflow-x-hidden"> 
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => scrollToSection('home')} className="flex-shrink-0 cursor-pointer">
            <img className='h-10 w-auto' src={Logo} alt="Athiya Group" />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <div onClick={() => scrollToSection('home')} className={linkClass('home')}>Home</div>
            <div onClick={() => scrollToSection('benefits')} className={linkClass('benefits')}>Benefits</div>
            <div onClick={() => scrollToSection('gallery')} className={linkClass('gallery')}>Gallery</div>
            <div onClick={() => scrollToSection('pricing')} className={linkClass('pricing')}>Pricing</div>
            <div onClick={() => scrollToSection('testimonials')} className={linkClass('testimonials')}>Testimonials</div>
            <div onClick={() => scrollToSection('location')} className={linkClass('location')}>Location</div>
            <div onClick={() => scrollToSection('team')} className={linkClass('team')}>Team</div>
          </div>

        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg">
            <div onClick={() => scrollToSection('home')} className={linkClass('home')}>Home</div>
            <div onClick={() => scrollToSection('benefits')} className={linkClass('benefits')}>Benefits</div>
            <div onClick={() => scrollToSection('gallery')} className={linkClass('gallery')}>Gallery</div>
            <div onClick={() => scrollToSection('pricing')} className={linkClass('pricing')}>Pricing</div>
            <div onClick={() => scrollToSection('testimonials')} className={linkClass('testimonials')}>Testimonials</div>
            <div onClick={() => scrollToSection('location')} className={linkClass('location')}>Location</div>
            <div onClick={() => scrollToSection('team')} className={linkClass('team')}>Team</div>
            <motion.button 
              variants={buttonVariant}
              initial="rest"
              whileHover="hover"
              whileTap="tap" 
              className="px-6 py-2 rounded-full transition-colors duration-300 font-normal bg-yellow-400 hover:bg-yellow-300"
              onClick={() => {
                scrollToSection('calculator');
                setIsOpen(false);
              }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;