import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaRupeeSign, FaPercentage, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [selectedSize, setSelectedSize] = useState('1000');

  // Pricing data for different plot sizes and types
  const pricingData = {
    residential: {
      title: "Residential Plots",
      description: "Premium residential plots in KSC New Town with full ownership rights",
      sizes: [
        {
          size: "1000",
          displaySize: "1000 sq ft",
          price: "40,00,000",
          pricePerSqFt: "4,000",
          amenities: [
            "Corner plot options available",
            "Ready for construction",
            "RERA Approved",
            "Free site visit"
          ]
        },
        {
          size: "1500",
          displaySize: "1500 sq ft",
          price: "56,25,000",
          pricePerSqFt: "3,750",
          amenities: [
            "Corner plot options available",
            "Ready for construction",
            "RERA Approved",
            "Free site visit",
            "Landscape design consultation"
          ]
        },
        {
          size: "2000",
          displaySize: "2000 sq ft",
          price: "70,00,000",
          pricePerSqFt: "3,500",
          amenities: [
            "Premium corner locations",
            "Ready for construction",
            "RERA Approved",
            "Free site visit",
            "Landscape design consultation",
            "Architectural consultation"
          ]
        }
      ]
    },
    commercial: {
      title: "Commercial Plots",
      description: "Strategic commercial plots with excellent frontage and visibility",
      sizes: [
        {
          size: "2000",
          displaySize: "2000 sq ft",
          price: "90,00,000",
          pricePerSqFt: "4,500",
          amenities: [
            "High visibility location",
            "Commercial zoning approved",
            "RERA Approved",
            "Free site visit"
          ]
        },
        {
          size: "3000",
          displaySize: "3000 sq ft",
          price: "1,27,50,000",
          pricePerSqFt: "4,250",
          amenities: [
            "High visibility location",
            "Commercial zoning approved",
            "RERA Approved",
            "Free site visit",
            "Business potential analysis"
          ]
        },
        {
          size: "5000",
          displaySize: "5000 sq ft",
          price: "2,00,00,000",
          pricePerSqFt: "4,000",
          amenities: [
            "Premium commercial location",
            "Commercial zoning approved",
            "RERA Approved",
            "Free site visit",
            "Business potential analysis",
            "Commercial design consultation"
          ]
        }
      ]
    }
  };

  const paymentPlans = [
    {
      id: 1,
      title: "Full Payment",
      icon: <FaRupeeSign size={24} />,
      description: "Pay 100% upfront and get 5% discount on the total plot value",
      benefits: ["5% discount on total amount", "Immediate registration", "No hidden charges"]
    },
    {
      id: 2,
      title: "Installment Plan",
      icon: <FaCalendarAlt size={24} />,
      description: "Pay in convenient installments spread over 24 months",
      benefits: ["20% booking amount", "24 equal monthly installments", "Transparent payment schedule"]
    },
    {
      id: 3,
      title: "Bank Loan",
      icon: <FaPercentage size={24} />,
      description: "Special tie-ups with major banks for hassle-free loan processing",
      benefits: ["10% booking amount", "Assisted loan processing", "Competitive interest rates"]
    }
  ];

  // Get current pricing data based on active tab
  const currentPricing = pricingData[activeTab];
  
  // Find the selected size data
  const selectedPlan = currentPricing.sizes.find(item => item.size === selectedSize);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
            Transparent Pricing & Plans
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of premium plot options with clear pricing and flexible payment plans
          </p>
        </div>

        {/* Plot Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-6 py-3 rounded-md font-medium ${
                activeTab === 'residential'
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              } transition-all duration-200`}
            >
              Residential Plots
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-6 py-3 rounded-md font-medium ${
                activeTab === 'commercial'
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              } transition-all duration-200`}
            >
              Commercial Plots
            </button>
          </div>
        </div>

        {/* Plot Size Selector */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">{currentPricing.title}</h3>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">{currentPricing.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentPricing.sizes.map((plan) => (
              <motion.div
                key={plan.size}
                variants={itemVariants}
                className={`
                  rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                  ${selectedSize === plan.size 
                    ? 'border-2 border-yellow-500 shadow-xl transform -translate-y-1' 
                    : 'border border-gray-200 shadow-md hover:shadow-lg'}
                `}
                onClick={() => setSelectedSize(plan.size)}
              >
                <div className="p-6 bg-white">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-1">{plan.displaySize}</h4>
                    <div className="flex items-center justify-center mb-4">
                      <FaRupeeSign className="text-yellow-600 mr-1" />
                      <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-5">
                      <FaRupeeSign className="inline-block text-xs" /> {plan.pricePerSqFt} per sq ft
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm text-gray-600">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`
                      w-full mt-6 py-3 rounded-lg font-medium transition-colors
                      ${selectedSize === plan.size
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                    `}
                  >
                    {selectedSize === plan.size ? 'Selected' : 'Select'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Flexible Payment Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-yellow-100 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-yellow-600 mx-auto">
                  {plan.icon}
                </div>
                <h4 className="text-xl font-bold text-center mb-3">{plan.title}</h4>
                <p className="text-gray-600 text-center mb-5">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Price Guarantee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-white border border-yellow-200 rounded-xl p-6 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <FaShieldAlt className="text-yellow-600" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Price Guarantee & Transparency</h4>
              <p className="text-gray-600">
                We believe in complete transparency with no hidden charges. The price you see is the price you pay, 
                with all taxes and legal fees clearly explained upfront. We also guarantee that our pre-launch prices 
                are the best you'll find for the unmatched quality and location we offer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-10 py-4 rounded-lg transition duration-300 shadow-md hover:shadow-xl"
          >
            Schedule a Site Visit & Get a Quote
          </a>
          <p className="text-gray-500 mt-4">
            Our sales team is available for personalized pricing consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 