import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Godrej Properties',
      logo: '/godrej-properties.png',
      alt: 'Godrej Properties Logo'
    },
    {
      name: 'Blackstone Group',
      logo: '/blackstonegroup.svg',
      alt: 'Blackstone Group Logo',
      isSmall: true
    },
    {
      name: 'MIDC',
      logo: '/midc.png',
      alt: 'MIDC Logo'
    },
    {
      name: 'L&T Realty',
      logo: '/L&T.png',
      alt: 'L&T Realty Logo'
    },
    {
      name: 'Adani Realty',
      logo: '/adani.svg',
      alt: 'Adani Realty Logo'
    },
    {
      name: 'Reliance',
      logo: '/reliance.png',
      alt: 'Reliance Logo',
      isSmall: true
      
    }
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 shadow-sm h-20 rounded-lg flex items-center justify-center p-5 hover:shadow-md transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${
                  partner.isSmall 
                    ? 'w-32 h-60 transform scale-150' 
                    : 'w-4/5 h-4/5'
                }`}
                style={partner.isSmall ? {
                  minHeight: '48px',
                  minWidth: '64px'
                } : {
                  minHeight: '32px',
                  minWidth: '48px'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span 
                className="text-xs text-gray-600 text-center hidden"
                style={{ display: 'none' }}
              >
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection; 