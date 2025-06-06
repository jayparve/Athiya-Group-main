import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { databases, functions, DATABASE_ID, COLLECTION_ID, FUNCTION_ID } from '../../lib/appwrite';
import { ID } from 'appwrite';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    landType: 'residential',
    plotSize: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Save to Appwrite database
      const document = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          Type: formData.landType, // Note: Using 'Type' to match your database attribute
          Plotsize: formData.plotSize // Note: Using 'Plotsize' to match your database attribute
        }
      );

      // Send email notification via Appwrite function
      const functionResponse = await functions.createExecution(
        FUNCTION_ID,
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          landType: formData.landType,
          plotSize: formData.plotSize
        })
      );

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        landType: 'residential',
        plotSize: ''
      });
      
      setSubmitStatus(`Thank you for your inquiry, ${formData.name}! We will get back to you soon.`);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
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
    <section id="cta" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400"
          >
            <span className="relative inline-block pb-2">
            Don't Just Watch the Future Unfold. Own a Part of It with Athiya Developers.
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-16 h-1 bg-yellow-400"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            The KSC New Town (Third Mumbai) transformation is a landmark opportunity. Are you ready to partner with Athiya Developers and be a part of it?
          </motion.p>
          
          <motion.ul 
            variants={fadeInUpVariants}
            className="list-disc list-inside text-left max-w-md mx-auto mb-8 space-y-2 text-gray-300"
          >
            <li>investors looking for smart opportunities with high growth potential.</li>
            <li>Individuals planning dream homes in a city of the future.</li>
            <li>Businesses aiming to set up in a prime economic zone.</li>
          </motion.ul>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-lg md:text-xl mb-10"
          >
            KSC New Town in Raigad district offers you the canvas. Athiya Devlopers provide the expertise. The time to act is now.
          </motion.p>

          <motion.div 
            variants={fadeInUpVariants}
            className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl max-w-lg mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore Land Opportunities with Athiya Developers!</h3>
            
            {submitStatus && (
              <div className={`mb-4 p-3 rounded-md ${
                submitStatus.includes('error') || submitStatus.includes('Please fill') 
                  ? 'bg-red-100 text-red-700 border border-red-300' 
                  : 'bg-green-100 text-green-700 border border-green-300'
              }`}>
                {submitStatus}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="landType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Land Interested In
                </label>
                <select
                  id="landType"
                  name="landType"
                  value={formData.landType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="plotted_development">Plotted Development</option>
                  <option value="undecided">Undecided / More Info</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="plotSize" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Plot Size (e.g., Guntha, Acres, Sq Ft)
                </label>
                <input
                  type="text"
                  id="plotSize"
                  name="plotSize"
                  value={formData.plotSize}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-3 px-4 rounded-lg text-lg transition duration-300 transform ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                    : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Request More Information'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 