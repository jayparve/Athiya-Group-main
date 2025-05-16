import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDirections, FaRoad, FaBuilding, FaPlane, FaTrain } from 'react-icons/fa';

const LocationSection = () => {
  // For demonstration, we're using KSC/Karjat area in Mumbai
  const address = {
    street: "KSC New Town",
    area: "Karjat-Khopoli Road",
    city: "Karjat, Maharashtra",
    pincode: "410201",
    country: "India",
    phone: "+91 98765 43210",
    email: "info@athiyagroup.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60615.95482877016!2d73.29840907372876!3d18.911042282093056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb9b7e4cd4f5%3A0xfbc7f0d392cc7514!2sKarjat%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1663841821254!5m2!1sen!2sin"
  };

  const proximityFeatures = [
    {
      icon: <FaRoad size={20} />,
      feature: "Mumbai-Pune Expressway",
      distance: "30 mins drive"
    },
    {
      icon: <FaTrain size={20} />,
      feature: "Karjat Railway Station",
      distance: "15 mins drive"
    },
    {
      icon: <FaPlane size={20} />,
      feature: "Navi Mumbai International Airport",
      distance: "45 mins drive"
    },
    {
      icon: <FaBuilding size={20} />,
      feature: "Upcoming Business Hub",
      distance: "20 mins drive"
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Strategic Location Advantage
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfectly positioned for modern living with excellent connectivity to Mumbai and Pune
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map Column */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe 
              src={address.mapUrl} 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="KSC New Town Location"
            ></iframe>
          </motion.div>

          {/* Information Column */}
          <div className="flex flex-col space-y-8">
            {/* Address Card */}
            <motion.div 
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-yellow-100 p-3 rounded-full text-yellow-600 mr-4">
                  <FaMapMarkerAlt size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Site Address</h3>
                  <address className="not-italic text-gray-600 leading-relaxed">
                    {address.street}<br />
                    {address.area}<br />
                    {address.city}<br />
                    {address.pincode}, {address.country}
                  </address>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center mb-3">
                  <FaPhoneAlt className="text-yellow-600 mr-3" />
                  <a href={`tel:${address.phone}`} className="text-gray-600 hover:text-yellow-600 transition-colors">
                    {address.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-yellow-600 mr-3" />
                  <a href={`mailto:${address.email}`} className="text-gray-600 hover:text-yellow-600 transition-colors">
                    {address.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Proximity Features */}
            <motion.div 
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-5">Key Proximities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {proximityFeatures.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="flex-shrink-0 bg-yellow-100 p-2 rounded-full text-yellow-600 mr-3">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">{item.feature}</p>
                      <p className="text-sm text-gray-600">{item.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Get Directions Button */}
            <motion.div 
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4"
            >
              <a 
                href="https://goo.gl/maps/KGjtqVBZLxG2L33u5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl w-full"
              >
                <FaDirections className="mr-2" size={20} /> Get Directions to Site
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 