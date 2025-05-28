import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Gallery images - replace with your actual images later
  const galleryImages = [
    {
      url: "/Landing_photos/1.jpg"
    },
    {
      url: "/Landing_photos/2.jpg"
    },
    {
      url: "/Landing_photos/3.jpg"
    },
    {
      url: "/Landing_photos/4.jpg"
    },
    {
      url: "/Landing_photos/5.jpg"
    },
    {
      url: "/Landing_photos/6.jpg"
    },
    {
      url: "/Landing_photos/7.jpg"
    },
    {
        url: "/Landing_photos/8.jpg"
    },
    {
        url: "/Landing_photos/9.jpg"
    },
    {
        url: "/Landing_photos/10.jpg"
    },
    {
        url: "/Landing_photos/11.jpg"
    },
    {
        url: "/Landing_photos/12.jpg"
    },
    {
        url: "/Landing_photos/13.jpg"
    },
    {
        url: "/Landing_photos/14.jpg"
    },
    {
        url: "/Landing_photos/15.jpg"
    },
    {
        url: "/Landing_photos/16.jpg"
    },
    {
        url: "/Landing_photos/17.jpg"
    },
    {
        url: "/Landing_photos/18.jpg"
    },
    {
        url: "/Landing_photos/19.jpg"
    },
    {
        url: "/Landing_photos/20.jpg"
    },
    {
        url: "/Landing_photos/21.jpg"
    },
    {
        url: "/Landing_photos/22.jpg"
    },
    {
        url: "/Landing_photos/23.jpg"
    },
    {
        url: "/Landing_photos/24.jpg"
    },
    {
        url: "/Landing_photos/25.jpg"
    },
    {
        url: "/Landing_photos/26.jpg"
    },
    {
        url: "/Landing_photos/27.jpg"
    },
    {
        url: "/Landing_photos/28.jpg"
    },
    {
        url: "/Landing_photos/29.jpg"
    },
    {
        url: "/Landing_photos/30.jpg"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame - reduced from 1 to 0.5 for slower scroll
    let animationId;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 2000);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Our Premium Properties
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our pristine land plots, smart infrastructure, and beautiful surroundings
          </p>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {/* Duplicate images for seamless loop */}
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 h-64 overflow-hidden rounded-lg cursor-pointer shadow-md transition-shadow duration-300"
                onClick={() => openLightbox(index % galleryImages.length)}
              >
                <img 
                  src={image.url} 
                  alt="Gallery image" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div 
                className="relative max-w-4xl w-full max-h-screen" 
                onClick={e => e.stopPropagation()}
              >
                <button 
                  className="absolute top-0 right-0 -mt-12 -mr-12 text-white hover:text-yellow-400 z-10"
                  onClick={closeLightbox}
                >
                  <FaTimes size={24} />
                </button>
                
                <motion.img 
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={selectedImage.url} 
                  alt="Gallery image" 
                  className="w-full object-contain max-h-[80vh]"
                />
                
                <button 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 text-white hover:text-yellow-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                >
                  <FaArrowLeft size={24} />
                </button>
                
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 text-white hover:text-yellow-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <FaArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-3 rounded-lg transition duration-300"
          >
            Schedule a Site Visit
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default GallerySection; 