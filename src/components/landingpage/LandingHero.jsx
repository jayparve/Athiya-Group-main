import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState, memo } from 'react';
import bgimgweb from '../../assets/mumbai-skyline-webm.webp';
import { Link } from 'react-router-dom';
import logo from '../../assets/athiya-logo.webp';

// Memoize BackgroundImage component
const BackgroundImage = memo(({ imagePath, onLoad }) => (
  <div className="absolute inset-0">
    <picture>
      <source srcSet={imagePath} type="image/webp" />
      <img
        src={imagePath}
        alt="Mumbai Skyline"
        onLoad={onLoad}
        className="w-full h-full object-cover"
        loading="eager"
      />
    </picture>
  </div>
));

BackgroundImage.displayName = 'BackgroundImage';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  // Optimize resize listener with debounce
  useEffect(() => {
    let timeoutId;
    const checkMobile = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 100);
    };

    // Initial check
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Image preload
    const img = new Image();
    img.src = bgimgweb;
    img.onload = () => setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Reduced animation complexity for better performance
  const fadeUpVariant = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative min-h-screen overflow-hidden mt-14">
      <div className="w-full max-w-[2000px] mx-auto">
        <div className="relative h-[90vh] mt-6 rounded-3xl overflow-hidden mx-4">
          {/* Background Image */}
          <Suspense fallback={
            <div className="absolute inset-0 bg-gray-900 animate-pulse" />
          }>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <BackgroundImage 
                  imagePath={bgimgweb}
                  onLoad={() => setIsLoaded(true)}
                />
              </motion.div>
            )}
          </Suspense>

          {/* Optimized overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
            {/* Left side - Logo and Text */}
            <div className="w-full md:w-7/12">
              <motion.div 
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <div className="inline-block border border-white/40 rounded-full px-6 py-2 text-white mb-8">
                  <p className="text-sm md:text-base">Invest in the Future of Mumbai</p>
                </div>

                <div className='flex flex-col gap-10  '>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Secure Your Smart & Sustainable Plot in KSC New Town
                </h1>
                <h2 className="text-xl md:text-2xl text-white font-light">
                Where Smart Living Meets Smart Returns
                </h2>
                </div>
              </motion.div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-4/12 mt-8 md:mt-0">
              <motion.div 
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Secure Your Spot Now</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-yellow-400"
                      required
                    />
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile no"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-yellow-400"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Id"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-yellow-400"
                      required
                    />
                    <motion.button
                      variants={buttonVariant}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      type="submit"
                      className="w-full bg-yellow-400 text-gray-900 font-medium py-3 rounded-lg transition duration-300"
                    >
                      Enquire Now
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);