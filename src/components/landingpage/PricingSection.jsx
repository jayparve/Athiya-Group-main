import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const pricingData = [
    {
      taluka: 'Pen (पेण)',
      village: 'Rave (रावे)',
      rate: '₹ 4 Lakhs (Contact Athiya Developers)',
      zoneType: 'Residential / Plotted'
    },
    {
      taluka: 'Uran (उरण)',
      village: 'Chirner (चिर्णेर)',
      rate: '₹ 6 Lakhs (Contact Athiya Developers)',
      zoneType: 'Mixed Use / Commercial'
    },
    {
      taluka: 'Uran (उरण)',
      village: 'Sarde (सारडे)',
      rate: '₹ 7 Lakhs (Contact Athiya Developers)',
      zoneType: 'Industrial / Logistics'
    },
    {
      taluka: 'Panvel (पनवेल)',
      village: 'Kelvane (केळवणे)',
      rate: '₹ 5 Lakhs (Contact Athiya Developers)',
      zoneType: 'Agricultural / Future Urbanizable'
    },
    {
      taluka: 'Panvel (पनवेल)',
      village: 'Sai (साई)',
      rate: '₹ 6 Lakhs (Contact Athiya Developers)',
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
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
          >
            <span className="relative inline-block pb-2">
            Investment Value & Land Rates in KSC New Town
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-yellow-400"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-center text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Investing in KSC New Town is a smart move into a high-growth area. Athiya Developers can guide you through the options. While specific plot prices depend on exact location, type of zone (like for homes, shops, factories, or ready-to-build plots), FSI (Floor Space Index - how much you can build), and size, the region has huge potential for value increase. The table below gives an *idea* of possible land rates. Actual rates are set by planning authorities like CIDCO/MMRDA and market conditions. <strong> Please contact Athiya Developers for the latest official information and specific plot details.</strong>
          </motion.p>
          
          {/* Mobile Card Layout */}
          <div className="block lg:hidden space-y-4 mb-8">
            {pricingData.map((row, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Taluka</h3>
                      <p className="text-gray-700 text-sm">{row.taluka}</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-gray-900 text-sm">Village</h3>
                      <p className="text-gray-700 text-sm">{row.village}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Indicative Rate (Per Guntha)</h3>
                    <p className="text-red-500 font-medium text-sm">{row.rate}</p>
                  </div>
                  
                  <div className="border-t pt-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Zone Type (Illustrative)</h3>
                    <p className="text-gray-600 text-sm">{row.zoneType}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop Table Layout */}
          <motion.div 
            variants={fadeInUpVariants}
            className="hidden lg:block bg-white shadow-xl rounded-lg p-2 md:p-6 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Taluka
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Village (Example)
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Indicative Rate (Per Guntha)
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {row.taluka}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {row.village}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        <span className="text-red-500">{row.rate}</span>
                      </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                         {row.zoneType}
                       </td>
                     </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="mt-6 sm:mt-8 text-center text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Detailed master plans and zoning rules by MMRDA, CIDCO, and other relevant authorities will give more clarity on land use and development potential. We encourage you to get in touch with Athiya Developers for the most current and specific information.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 