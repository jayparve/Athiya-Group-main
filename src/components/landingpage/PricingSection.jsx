import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const pricingData = [
    {
      taluka: 'Pen (पेण)',
      village: 'Rave (रावे)',
      rate: '₹ 4 Lakhs (Example - Contact for Official Rates)',
      zoneType: 'Residential / Plotted'
    },
    {
      taluka: 'Uran (उरण)',
      village: 'Chirner (चिर्णेर)',
      rate: '₹ 6 Lakhs (Example - Contact for Official Rates)',
      zoneType: 'Mixed Use / Commercial'
    },
    {
      taluka: 'Uran (उरण)',
      village: 'Sarde (सारडे)',
      rate: '₹ 7 Lakhs (Example - Contact for Official Rates)',
      zoneType: 'Industrial / Logistics'
    },
    {
      taluka: 'Panvel (पनवेल)',
      village: 'Kelvane (केळवणे)',
      rate: '₹ 5 Lakhs (Example - Contact for Official Rates)',
      zoneType: 'Agricultural / Future Urbanizable'
    },
    {
      taluka: 'Panvel (पनवेल)',
      village: 'Sai (साई)',
      rate: '₹ 6 Lakhs (Example - Contact for Official Rates)',
      zoneType: 'Residential Zone'
    }
  ];

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="pricing" className="py-16 bg-gray-50">
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
              Investment Value & Indicative Land Rates
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-16 h-1 bg-yellow-400"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto"
          >
            Investing in KSC New Town represents a strategic acquisition in a high-growth corridor. While specific plot prices vary based on exact location, zoning (Residential, Commercial, Industrial, Plotted Development), FSI, and size, the region offers immense appreciation potential. The following table provides an *illustrative example* of potential rate structures in the region. <strong className="text-red-600">Actual rates are determined by planning authorities like CIDCO/MMRDA and market conditions. Please contact us for the latest official information.</strong>
          </motion.p>
          
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-white shadow-xl rounded-lg p-2 md:p-6 overflow-x-auto"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Taluka
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Village (Example)
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Indicative Rate (Per Guntha)
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Zone Type (Illustrative)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pricingData.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={fadeInUpVariants}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {row.taluka}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {row.village}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">
                      <span className="text-red-500">{row.rate}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                      {row.zoneType}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="mt-6 text-center text-sm text-gray-600"
          >
            Detailed master plans and zoning regulations by MMRDA, CIDCO, and other relevant authorities will provide further clarity on land use and development potential. We encourage you to get in touch for the most current and specific information related to your investment interests.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 