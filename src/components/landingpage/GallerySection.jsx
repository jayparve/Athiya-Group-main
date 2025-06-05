import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const GallerySection = () => {
  const scrollContainerRef = useRef(null);
  const lightboxRef = useRef(null);
  const currentImageRef = useRef(null);
  const currentIndexRef = useRef(0);
  const touchStartRef = useRef(null);
  const isLightboxOpenRef = useRef(false);
  const isScrollingRef = useRef(false);

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

  const openLightbox = (index) => {
    currentIndexRef.current = index;
    isLightboxOpenRef.current = true;
    
    // Create and show lightbox
    const lightbox = lightboxRef.current;
    if (lightbox) {
      lightbox.style.display = 'flex';
      lightbox.style.opacity = '0';
      
      // Update image
      updateLightboxImage();
      
      // Animate in
      requestAnimationFrame(() => {
        lightbox.style.opacity = '1';
        lightbox.focus();
      });
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    isLightboxOpenRef.current = false;
    const lightbox = lightboxRef.current;
    
    if (lightbox) {
      lightbox.style.opacity = '0';
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 300);
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
  };

  const updateLightboxImage = () => {
    const img = currentImageRef.current;
    const counter = lightboxRef.current?.querySelector('.image-counter');
    
    if (img) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = galleryImages[currentIndexRef.current].url;
        img.alt = `Gallery image ${currentIndexRef.current + 1}`;
        img.style.opacity = '1';
      }, 150);
    }
    
    if (counter) {
      counter.textContent = `${currentIndexRef.current + 1} / ${galleryImages.length}`;
    }
  };

  const goToNext = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % galleryImages.length;
    updateLightboxImage();
  };

  const goToPrev = () => {
    currentIndexRef.current = (currentIndexRef.current - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  };

  // Event handlers
  const handleImageClick = (index) => {
    // Only open lightbox if not scrolling
    if (!isScrollingRef.current) {
      openLightbox(index);
    }
  };

  const handleLightboxClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const handleKeyDown = (e) => {
    if (!isLightboxOpenRef.current) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        goToNext();
        break;
      case 'Escape':
        e.preventDefault();
        closeLightbox();
        break;
      default:
        break;
    }
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStartRef.current - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
    
    touchStartRef.current = null;
  };

  const handleScrollInteraction = (action) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    if (action === 'pause') {
      container.style.animationPlayState = 'paused';
    } else if (action === 'resume') {
      setTimeout(() => {
        container.style.animationPlayState = 'running';
      }, 2000);
    }
  };

  // Touch scroll handlers for gallery
  const handleGalleryTouchStart = (e) => {
    isScrollingRef.current = false;
    handleScrollInteraction('pause');
  };

  const handleGalleryTouchMove = (e) => {
    isScrollingRef.current = true;
  };

  const handleGalleryTouchEnd = (e) => {
    handleScrollInteraction('resume');
    // Reset scrolling flag after a short delay
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 100);
  };

  const handleGalleryScroll = () => {
    handleScrollInteraction('pause');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        
        {/* Horizontal Scrolling Gallery - Touch Scroll Enabled */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="gallery-scroll flex gap-2 sm:gap-3 lg:gap-4 pb-3 sm:pb-4 overflow-x-auto scrollbar-hide"
            onMouseEnter={() => handleScrollInteraction('pause')}
            onMouseLeave={() => handleScrollInteraction('resume')}
            onTouchStart={handleGalleryTouchStart}
            onTouchMove={handleGalleryTouchMove}
            onTouchEnd={handleGalleryTouchEnd}
            onScroll={handleGalleryScroll}
            role="region"
            aria-label="Photo gallery"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Single set of images for touch scroll, duplicated for auto-scroll */}
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-48 h-32 sm:w-64 sm:h-40 lg:w-80 lg:h-64 overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => handleImageClick(index % galleryImages.length)}
                role="button"
                tabIndex={0}
                aria-label={`View gallery image ${(index % galleryImages.length) + 1}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(index % galleryImages.length);
                  }
                }}
              >
                <img 
                  src={image.url} 
                  alt={`Gallery image ${(index % galleryImages.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox - Direct DOM Manipulation */}
        <div 
          ref={lightboxRef}
          className="fixed inset-0 bg-black bg-opacity-95 z-50 items-center justify-center p-2 sm:p-4 transition-opacity duration-300"
          style={{ display: 'none' }}
          onClick={handleLightboxClick}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          tabIndex={-1}
        >
          <div 
            className="relative w-full max-w-4xl max-h-screen flex items-center justify-center" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close button - Mobile optimized */}
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:-top-12 lg:-right-12 z-20 p-2 sm:p-3 bg-black bg-opacity-50 sm:bg-transparent rounded-full sm:rounded-none text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              <FaTimes size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <img 
              ref={currentImageRef}
              src=""
              alt=""
              className="w-full h-full object-contain max-h-[85vh] sm:max-h-[80vh] transition-opacity duration-300"
            />
            
            {/* Navigation buttons - Mobile optimized */}
            <button 
              className="absolute left-2 sm:left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-black bg-opacity-50 sm:bg-transparent rounded-full sm:rounded-none text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={goToPrev}
              aria-label="Previous image"
            >
              <FaArrowLeft size={18} className="sm:w-6 sm:h-6" />
            </button>
            
            <button 
              className="absolute right-2 sm:right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-black bg-opacity-50 sm:bg-transparent rounded-full sm:rounded-none text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={goToNext}
              aria-label="Next image"
            >
              <FaArrowRight size={18} className="sm:w-6 sm:h-6" />
            </button>

            {/* Image counter - Mobile friendly */}
            <div className="image-counter absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
              1 / {galleryImages.length}
            </div>

            {/* Swipe indicator for mobile */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white text-xs opacity-70 sm:hidden">
              Swipe left or right to navigate
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .gallery-scroll {
          animation: scroll-horizontal 60s linear infinite;
          animation-play-state: running;
        }
        
        .gallery-scroll:hover {
          animation-play-state: paused;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 640px) {
          .gallery-scroll {
            animation-duration: 80s;
          }
        }
        
        /* Enhanced touch scrolling for mobile */
        @media (max-width: 768px) {
          .gallery-scroll {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          
          .gallery-scroll > div {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection; 