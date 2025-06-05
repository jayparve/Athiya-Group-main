import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="overview" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Mobile-first headline */}
          <motion.div 
            variants={fadeInUpVariants}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              <span className="relative inline-block pb-3 sm:pb-4">
                <span className="block sm:inline">"They Said It Couldn't Be Done.</span>
                <span className="block sm:inline mt-1 sm:mt-0"> Now, 'Third Mumbai' is Taking Shape in Raigad."</span>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              </span>
            </h2>
          </motion.div>
          
          {/* Main content layout */}
          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
            {/* Image section - mobile first */}
            <motion.div 
              variants={scaleInVariants}
              className="w-full lg:w-1/2 order-1 lg:order-1"
            >
              <div className="relative group">
                <img 
                  src="/MTHL.jpg"
                  alt="Infrastructure Montage: MTHL, NMIA, KSC Location" 
                  className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center font-medium">
                Conceptual: MTHL, NMIA render, KSC strategic location
              </p>
            </motion.div>
            
            {/* Content section */}
            <motion.div 
              variants={fadeInUpVariants}
              className="w-full lg:w-1/2 order-2 lg:order-2"
            >
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                This isn't just talk. KSC New Town (covering areas like Karnala, Sai, Chirner) – also known as 'Third Mumbai' – is really happening. Athiya Developers brings you this opportunity in a vast new development of 324 sq km in a key part of Raigad. Led by MMRDA (the Mumbai Metropolitan Region Development Authority, a government body planning the region's growth), this brand-new city (built on fresh land) is making the Mumbai area bigger and better.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                <em>You</em> are looking at a rare chance to invest with Athiya Developers in an area that is central to Maharashtra's big plans for economic growth. The groundwork is laid, money is flowing in, and the future is being built right now.
              </p>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                Why KSC New Town with Athiya Developers? Why NOW?
              </h3>
              
              {/* Benefits list - enhanced for mobile */}
              <motion.ul 
                variants={staggerContainer}
                className="space-y-4 sm:space-y-5"
              >
                <motion.li variants={fadeInUpVariants} className="group">
                  <div className="flex items-start p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-200 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-yellow-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5">
                      <span className="text-yellow-600 font-bold text-sm sm:text-base">✓</span>
                    </div>
                    <div className="flex-1">
                      <strong className="text-gray-900 text-sm sm:text-base">Amazing Travel Connections: </strong>
                      <span className="text-sm sm:text-base text-gray-700">The MTHL sea bridge is open! The new Navi Mumbai International Airport (NMIA) is on track (expected opening 2025-26). Plus, new rail lines (Panvel-Karjat) and a major new transport route (Virar-Alibaug Multimodal Corridor for easy travel by road, rail, and more).</span>
                    </div>
                  </div>
                </motion.li>
                
                <motion.li variants={fadeInUpVariants} className="group">
                  <div className="flex items-start p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-200 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-yellow-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5">
                      <span className="text-yellow-600 font-bold text-sm sm:text-base">✓</span>
                    </div>
                    <div className="flex-1">
                      <strong className="text-gray-900 text-sm sm:text-base">Government's Strong Support:</strong>
                      <span className="text-sm sm:text-base text-gray-700"> A key part of NITI Aayog's (the government's main policy group) $300B vision for the Mumbai region. CIDCO (City and Industrial Development Corporation) & MMRDA are investing heavily in new facilities (e.g., MMRDA has access to ₹4.07 lakh cr for development).</span>
                    </div>
                  </div>
                </motion.li>
                
                <motion.li variants={fadeInUpVariants} className="group">
                  <div className="flex items-start p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-200 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-yellow-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5">
                      <span className="text-yellow-600 font-bold text-sm sm:text-base">✓</span>
                    </div>
                    <div className="flex-1">
                      <strong className="text-gray-900 text-sm sm:text-base">Top Investors Believe in It:</strong>
                      <span className="text-sm sm:text-base text-gray-700"> Companies like Blackstone (investing ~$5B for KSC), Adani Realty (developing a 1,000-acre township), Reliance Industries (investing in ~3,750 acres), Godrej Properties, and L&T Realty are all involved in the broader KSC region. Athiya Developers helps you tap into this growth.</span>
                    </div>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection; 