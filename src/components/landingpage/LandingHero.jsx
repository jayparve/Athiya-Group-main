import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState, memo } from 'react';
import bgimgweb from '../../assets/mumbai-skyline-2.jpg';
import { Link } from 'react-router-dom';
import logo from '../../assets/athiya-logo.webp';

// Memoize BackgroundImage component
const BackgroundImage = memo(({ imagePath, onLoad }) => (
  <div className="relative">
    <picture>
      <source srcSet={imagePath} type="image/webp" />
      <img
        src={imagePath}
        alt="Mumbai Skyline and KSC New Town Vision"
        onLoad={onLoad}
        className="shadow-2xl w-full h-64 md:h-80 object-cover"
        loading="eager"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/9fa8da/3c366b?text=Mumbai+Skyline+%26+KSC+Vision';
        }}
      />
    </picture>
    {/* Slight black overlay */}
    <div className="absolute inset-0 bg-black/20"></div>
  </div>
));

BackgroundImage.displayName = 'BackgroundImage';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.05, y: -4 },
    tap: { scale: 0.98 }
  };

  return (
    <header className="pt-16 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Image - Top Section (1/3 height) */}
          <motion.div 
            variants={fadeUpVariant}
            className="w-full mb-8"
          >
            <Suspense fallback={
              <div className=" w-full h-64 md:h-80 animate-pulse" />
            }>
              {isLoaded && (
                <BackgroundImage 
                  imagePath={bgimgweb}
                  onLoad={() => setIsLoaded(true)}
                />
              )}
            </Suspense>
            
          </motion.div>
          
          {/* Text Content - Below Image */}
          <motion.div 
            variants={fadeUpVariant}
            className="max-w-6xl"
          >
            <motion.h1 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-black font-merriweather"
            >
              Athiya Developers Presents: KSC New Town, Raigad (Third Mumbai)
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariant}
              className="text-2xl md:text-3xl font-semibold mb-6 text-black"
            >
              Invest in Maharashtra's $300 Billion Future!
            </motion.p>
            
            <motion.p 
              variants={fadeUpVariant}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700"
            >
              See Raigad change before your eyes! With <span className="text-yellow-400 font-semibold">Athiya Developers</span>, discover KSC New Town more than just a plan, it's a carefully designed future. Backed by huge new infrastructure, strong government action, and major private investments, this is your chance to own a piece of tomorrow, today.
            </motion.p>
            
            <motion.a 
              href="#cta" 
              variants={buttonVariant}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform border-2 border-yellow-500 hover:border-yellow-600"
            >
              Secure Your Land with Athiya Developers!
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default memo(Hero);