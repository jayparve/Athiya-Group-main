import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    'MMRDA Logo',
    'CIDCO Logo', 
    'NITI Aayog Logo',
    'Blackstone Logo',
    'Adani Realty Logo',
    'Reliance Logo',
    'Godrej Properties Logo',
    'L&T Realty Logo',
    'Govt. of Maharashtra',
    'MIDC Logo'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-gray-700 mb-8"
        >
          Backed by Visionary Leaders & Global Investors
        </motion.h3>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-200 border border-dashed border-gray-400 text-gray-600 h-16 rounded-md flex items-center justify-center text-xs text-center p-2 hover:bg-gray-300 transition-colors duration-300"
            >
              {partner}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection; 