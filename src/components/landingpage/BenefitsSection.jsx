import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaChartLine, FaMapMarkerAlt, FaShieldAlt, FaHandHoldingUsd, FaWifi } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaChartLine size={28} />,
      title: "High ROI Potential",
      description: "Historically proven 15-20% annual appreciation in developing smart townships, outperforming traditional investments."
    },
    {
      icon: <FaLeaf size={28} />,
      title: "Sustainable Living",
      description: "Solar-powered infrastructure, rainwater harvesting systems, and green spaces designed for eco-conscious living."
    },
    {
      icon: <FaWifi size={28} />,
      title: "Smart Infrastructure",
      description: "IoT-enabled utilities, high-speed fiber internet, and smart security systems integrated throughout the township."
    },
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: "Strategic Location",
      description: "Located in KSC New Town with excellent connectivity to Mumbai's business districts and upcoming infrastructure projects."
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Secured Investment",
      description: "RERA approved plots with clear titles, backed by Athiya Group's 15+ years of real estate excellence."
    },
    {
      icon: <FaHandHoldingUsd size={28} />,
      title: "Flexible Payment Plans",
      description: "Customized payment options with attractive pre-launch prices and special early bird discounts."
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Invest in KSC New Town?
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our smart and sustainable plots offer numerous advantages for both residential living and investment growth
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
              className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105 duration-300"
            >
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-yellow-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Plot Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection; 