import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images - replace with your actual images later
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Premium Land Plots in KSC New Town",
      category: "Plot"
    },
    {
      url: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Smart Infrastructure Development",
      category: "Development"
    },
    {
      url: "https://images.unsplash.com/photo-1543470373-e055b73a8f29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Sustainable Green Spaces",
      category: "Amenity"
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Premier Property Location",
      category: "Location"
    },
    {
      url: "https://images.unsplash.com/photo-1542889601-399c4f3a8402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Living Development",
      category: "Development"
    },
    {
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Gated Community Experience",
      category: "Security"
    },
    {
      url: "https://images.unsplash.com/photo-1643226279732-c3f9049571c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Investment Ready Plots",
      category: "Plot"
    },
    {
      url: "https://images.unsplash.com/photo-1566662260816-e970d7df7d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Recreation Facilities",
      category: "Amenity"
    }
  ];

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
  React.useEffect(() => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const categories = [...new Set(galleryImages.map(img => img.category))];
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  const filterImages = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };

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

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button 
            onClick={() => filterImages('All')}
            className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'All' 
              ? 'bg-yellow-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All
          </button>
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => filterImages(category)}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === category 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(galleryImages.indexOf(image))}
            >
              <div className="relative group h-64">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-xs uppercase tracking-wider mb-1">{image.category}</div>
                    <h3 className="font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
                
                <div className="relative">
                  <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={selectedImage.url} 
                    alt={selectedImage.title} 
                    className="w-full object-contain max-h-[80vh]"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
                    <div className="text-sm text-yellow-400">{selectedImage.category}</div>
                    <h3 className="text-xl font-medium">{selectedImage.title}</h3>
                  </div>
                </div>
                
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
    </section>
  );
};

export default GallerySection; 