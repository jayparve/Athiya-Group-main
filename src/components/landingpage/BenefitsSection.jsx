import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaShieldAlt, FaGraduationCap, FaIndustry, FaRoad, FaChartLine } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaIndustry size={28} />,
      title: "Strategic Economic Hubs",
      description: "Be part of a Data Center Capital (500-acre park), a Manufacturing Powerhouse (electronics, white goods), and a Logistics Nexus."
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Planned & Secure Development",
      description: "Benefit from structured Town Planning Schemes (TPS) and MIDC's 'Plug & Play' industrial areas for a secure and organized future."
    },
    {
      icon: <FaGraduationCap size={28} />,
      title: "Lifestyle Destination",
      description: "Envisioned with an 'EduCity,' 'Innovation City,' and 'MediCity,' fostering a vibrant, talent-rich environment for quality living."
    },
    {
      icon: <FaRoad size={28} />,
      title: "World-Class Infrastructure",
      description: "MTHL operational, NMIA airport (2025-26), high-speed rail connectivity, and multimodal transport corridors."
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Massive Investment Backing",
      description: "Backed by $300B MMR vision, Blackstone's $5B commitment, and major corporate investments from Adani, Reliance, and Godrej."
    },
    {
      icon: <FaBuilding size={28} />,
      title: "Government Support",
      description: "Core to NITI Aayog's vision with MMRDA's ₹4.07 lakh crore credit line and comprehensive government backing."
    }
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block pb-2">
              "This Isn't Just Land. It's Your Foundation in a Major Growth Center, Guided by Athiya Developers."
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-16 h-1 bg-yellow-400"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6">
          Investing in KSC New Town, Raigad, through Athiya Developers, gives you more than just a plot; it gives you a share in a fast-growing economic hub. Here's how your investment is set up for growth:
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-gray-700">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection; 