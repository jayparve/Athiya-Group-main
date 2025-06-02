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
    <section id="specifics" className="py-16 bg-white">
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
              "From Blueprint to Boomtown: Raigad's KSC New Town is Where Smart Money is Moving."
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-16 h-1 bg-yellow-400"></div>
            </span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <motion.div 
              variants={fadeInUpVariants}
              className="md:w-1/2"
            >
              <img 
                src="https://placehold.co/600x450/d1d5db/4a5568?text=Conceptual+KSC+Development" 
                alt="Conceptual Before/After Land Transformation" 
                className="rounded-lg shadow-xl w-full"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Conceptual: KSC New Town Development Zones
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="md:w-1/2"
            >
              <p className="text-lg text-gray-700 mb-6">
                We believe in transparency. Consider these specifics:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <strong className="text-gray-800 w-32 shrink-0">Area & Scope:</strong>
                    <span>KSC New Town (Mumbai 3.0) - <strong>324 sq km, 124 villages</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-800 w-32 shrink-0">Lead Agencies:</strong>
                    <span>MMRDA (NTDA), CIDCO, MIDC.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-800 w-32 shrink-0">Target Sectors:</strong>
                    <span>Data Centers, Electronics/White Goods Mfg., Logistics.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-800 w-32 shrink-0">CIDCO NAINA:</strong>
                    <span>INR 2,550 cr roadworks initiated, INR 5,000 cr in tender.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-800 w-32 shrink-0">Blackstone:</strong>
                    <span>Rs 5,127 cr MoU (Logistics), ~$5 Billion (KSC).</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg text-gray-700">
                <strong>What this means for your land:</strong> As these mega-projects and sectoral hubs develop, the intrinsic value of strategically located land within KSC New Town is poised for significant appreciation. You are investing in a meticulously planned ecosystem designed for economic vibrancy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecificsSection; 