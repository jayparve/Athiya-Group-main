import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Amit Verma",
      title: "Property Investor",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      stars: 5,
      text: "Investing in KSC New Town was the best decision I made. The location is strategic, and the plot values have already increased by 18% in just 8 months. The Athiya Group team was professional and transparent throughout the process."
    },
    {
      id: 2,
      name: "Neha Sharma",
      title: "First Time Home Buyer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      stars: 5,
      text: "As a first-time buyer, I was nervous, but Athiya Group made the process smooth and hassle-free. Their team walked me through every step, from plot selection to documentation. The amenities and infrastructure planning at KSC New Town exceeded my expectations."
    },
    {
      id: 3,
      name: "Rajiv Malhotra",
      title: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      stars: 4,
      text: "I purchased a commercial plot in KSC New Town for my business expansion. The strategic location and excellent connectivity have been great for business growth. The smart infrastructure and modern design thinking is evident in every aspect of the development."
    },
    {
      id: 4,
      name: "Preeti Kapoor",
      title: "IT Professional",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      stars: 5,
      text: "Working remotely made me look for a plot in a peaceful yet connected location. KSC New Town offers the perfect balance with its green surroundings and modern amenities. I'm looking forward to building my dream home here. The high-speed internet connectivity planning was a big plus for me!"
    }
  ];

  // Handle autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Navigation functions
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false); // Stop autoplay when user navigates manually
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoplay(false); // Stop autoplay when user navigates manually
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setAutoplay(false); // Stop autoplay when user navigates manually
  };

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, index) => (
      <FaStar key={index} className="text-yellow-500" />
    ));
  };

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with Athiya Group and KSC New Town
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={activeIndex}
            className="relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-10">
                <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white shadow-lg">
                  <FaQuoteLeft size={20} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center pt-6">
                {/* Image and Person Info */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-yellow-100">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                  <p className="text-yellow-600 font-medium text-sm">{testimonials[activeIndex].title}</p>
                  <div className="flex mt-2">
                    {renderStars(testimonials[activeIndex].stars)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="w-full md:w-2/3">
                  <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                    "{testimonials[activeIndex].text}"
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 -mt-6 flex justify-between px-4 sm:px-0 z-20">
            <button 
              onClick={goToPrevious} 
              className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-yellow-500 hover:text-white transition duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={goToNext} 
              className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-yellow-500 hover:text-white transition duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-yellow-500 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-3 rounded-lg transition duration-300"
          >
            Join Our Satisfied Customers
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 