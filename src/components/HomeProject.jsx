import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useCallback, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dapoliimg1 from "../assets/project-1.webp"
import farmimg1 from "../assets/project-2.webp"
import agroimg2 from "../assets/project-3.webp"
import shivimg1 from "../assets/project-4.webp"
import samimg1 from "../assets/project-5.webp"

const cards = [
  { url: farmimg1, title: "Agrow Eco, Mahad", id: 2 },
  { url: shivimg1, title: "Shivsparash", id: 3 },
  { url: samimg1, title: "Samarth Hill", id: 4 },
  { url: agroimg2, title: "Farm Dale, Pali", id: 5 },
  { url: dapoliimg1, title: "Dalopli, Ratnagiri", id: 6 },
];

const HomeProject = () => {
  const navigate = useNavigate();
  const handleKnowMore = useCallback((id) => {
    navigate(`/project?id=${id}`);
    localStorage.setItem('activeProject', id.toString());
  }, [navigate]);
  
  return <ProjectDisplay onKnowMore={handleKnowMore} />;
};

const ProjectDisplay = ({ onKnowMore }) => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [isDesktopMonitor, setIsDesktopMonitor] = useState(false);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [transformPercentage, setTransformPercentage] = useState("-25%");

  useEffect(() => {
    const checkDisplay = () => {
      const width = window.innerWidth;
      const dpr = window.devicePixelRatio;
      
      // Desktop monitors typically have DPR of 1
      // Most laptops (especially high-res ones) have DPR > 1
      const isLikelyDesktopMonitor = width >= 1920 && dpr <= 1;
      setIsDesktopMonitor(isLikelyDesktopMonitor);
    };
    
    checkDisplay();
    window.addEventListener('resize', checkDisplay);
    return () => window.removeEventListener('resize', checkDisplay);
  }, []);

  useEffect(() => {
    if (isDesktopMonitor) return;

    const updateTransformPercentage = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const percentage = ((containerWidth - viewportWidth) / viewportWidth) * 100;
      
      if (viewportWidth < 768) {
        setTransformPercentage(`-${Math.min(percentage, 80)}%`);
      } else if (viewportWidth < 1024) {
        setTransformPercentage(`-${Math.min(percentage, 60)}%`);
      } else {
        setTransformPercentage(`-${Math.min(percentage, 20)}%`);
      }
    };

    updateTransformPercentage();
    window.addEventListener('resize', updateTransformPercentage);
    return () => window.removeEventListener('resize', updateTransformPercentage);
  }, [isDesktopMonitor]);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", transformPercentage]);

  return (
    <section ref={targetRef} className={`relative ${!isDesktopMonitor ? 'h-[300vh]' : 'min-h-screen'}`}>
      <div className={`${!isDesktopMonitor ? 'sticky top-0' : ''} flex h-screen items-center overflow-hidden`}>
        <motion.div 
          ref={containerRef}
          style={isDesktopMonitor ? { x: 0 } : { x }}
          className={`flex gap-4 px-4 ${isDesktopMonitor ? 'justify-center flex-wrap' : 'flex-nowrap'}`}
        >
          {cards.map(card => (
            <Card key={card.id} card={card} onKnowMore={onKnowMore} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = memo(({ card: { id, url, title }, onKnowMore }) => (
  <motion.div 
    className="flex flex-col w-[350px] mt-20"
    style={{ y: id % 2 === 0 ? -40 : 0 }}
  >
    <div className="group relative h-[400px] overflow-hidden bg-neutral-200 rounded-3xl">
      <div 
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        role="img"
        aria-label={title}
      />
    </div>
    <div className="p-4 rounded-b-3xl bg-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <button 
          onClick={() => onKnowMore(id)}
          className="px-4 py-1 bg-[#b7beba] text-black rounded-lg hover:bg-black hover:text-white"
        >
          Know More
        </button>
      </div>
      <p className="mt-2 text-gray-600">5 to 20 sqft</p>
    </div>
  </motion.div>
));

export default HomeProject;