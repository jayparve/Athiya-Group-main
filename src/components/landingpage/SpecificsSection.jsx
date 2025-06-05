import React from 'react';
import { motion } from 'framer-motion';

const SpecificsSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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

  return (
    <section id="specifics" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="relative inline-block pb-3 sm:pb-4">
              "From Plan to Reality: Raigad's KSC New Town is Where Smart Money is Moving."
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-1 bg-yellow-400"></div>
            </span>
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            <motion.div 
              variants={fadeInUpVariants}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="/Ksc Town.jpg" 
                  alt="Conceptual Before/After Land Transformation" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center font-medium">
                  Conceptual: KSC New Town Development Zones
                </p>
              </div>
            </motion.div>
            
            <motion.div   
              variants={fadeInUpVariants}
              className="w-full lg:w-1/2"
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Athiya Developers believes in being clear. Consider these details about the KSC New Town project:
              </p>
              
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm border border-gray-100 mb-6 sm:mb-8">
                <ul className="space-y-4 sm:space-y-5 text-gray-700">
                  <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
                    <strong className="text-gray-800 font-semibold text-sm sm:text-base sm:w-36 lg:w-40 shrink-0 mb-1 sm:mb-0">Size of Project:</strong>
                    <span className="text-sm sm:text-base leading-relaxed">KSC New Town (also called Mumbai 3.0) - <strong>324 sq km, 124 villages</strong>.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
                    <strong className="text-gray-800 font-semibold text-sm sm:text-base sm:w-36 lg:w-40 shrink-0 mb-1 sm:mb-0">Key Organisations:</strong>
                    <span className="text-sm sm:text-base leading-relaxed">MMRDA (as the New Town Development Authority - NTDA), CIDCO, MIDC.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
                    <strong className="text-gray-800 font-semibold text-sm sm:text-base sm:w-36 lg:w-40 shrink-0 mb-1 sm:mb-0">Main Business Areas:</strong>
                    <span className="text-sm sm:text-base leading-relaxed">Data Centers, Electronics/Appliance Manufacturing, Logistics.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
                    <strong className="text-gray-800 font-semibold text-sm sm:text-base sm:w-36 lg:w-40 shrink-0 mb-1 sm:mb-0">CIDCO NAINA Update:</strong>
                    <span className="text-sm sm:text-base leading-relaxed">₹2,550 cr roadworks have started, with another ₹5,000 cr planned.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
                    <strong className="text-gray-800 font-semibold text-sm sm:text-base sm:w-36 lg:w-40 shrink-0 mb-1 sm:mb-0">Major KSC Investment Example:</strong>
                    <span className="text-sm sm:text-base leading-relaxed">Blackstone signed a formal agreement (MoU) for ₹5,127 cr in Logistics, and around ~$5 Billion total for KSC.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <strong>What this means for your land acquired through Athiya Developers:</strong> As these major projects and business zones grow, the real worth of well-placed land in KSC New Town is set to increase greatly. You are investing in a carefully planned area designed for strong economic activity.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecificsSection; 