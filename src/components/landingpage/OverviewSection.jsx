import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection = () => {
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
    <section id="overview" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            <span className="relative inline-block pb-2">
              "They Said It Couldn't Be Done. Now, 'Third Mumbai' is Taking Shape in Raigad."
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-16 h-1 bg-yellow-400"></div>
            </span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              variants={fadeInUpVariants}
              className="md:w-1/2"
            >
              <img 
                src="https://placehold.co/600x400/9fa8da/3c366b?text=MTHL+%26+NMIA+Montage" 
                alt="Infrastructure Montage: MTHL, NMIA, KSC Location" 
                className="rounded-lg shadow-xl w-full"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Conceptual: MTHL, NMIA render, KSC strategic location
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="md:w-1/2"
            >
              <p className="text-lg text-gray-700 mb-4">
              This isn't just talk. KSC New Town (covering areas like Karnala, Sai, Chirner) – also known as 'Third Mumbai' – is really happening. Athiya Developers brings you this opportunity in a vast new development of 324 sq km in a key part of Raigad. Led by MMRDA (the Mumbai Metropolitan Region Development Authority, a government body planning the region's growth), this brand-new city (built on fresh land) is making the Mumbai area bigger and better.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                <em>You</em> are looking at a rare chance to invest with Athiya Developers in an area that is central to Maharashtra's big plans for economic growth. The groundwork is laid, money is flowing in, and the future is being built right now.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why KSC New Town with Athiya Developers? Why NOW?
              </h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Amazing Travel Connections: </strong> The MTHL sea bridge is open! The new Navi Mumbai International Airport (NMIA) is on track (expected opening 2025-26). Plus, new rail lines (Panvel-Karjat) and a major new transport route (Virar-Alibaug Multimodal Corridor for easy travel by road, rail, and more).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Government's Strong Support:</strong> A key part of NITI Aayog's (the government's main policy group) $300B vision for the Mumbai region. CIDCO (City and Industrial Development Corporation) & MMRDA are investing heavily in new facilities (e.g., MMRDA has access to ₹4.07 lakh cr for development).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Top Investors Believe in It:</strong> Companies like Blackstone (investing ~$5B for KSC), Adani Realty (developing a 1,000-acre township), Reliance Industries (investing in ~3,750 acres), Godrej Properties, and L&T Realty are all involved in the broader KSC region. Athiya Developers helps you tap into this growth.
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection; 