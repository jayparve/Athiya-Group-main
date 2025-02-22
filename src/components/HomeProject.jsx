import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useCallback, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  { url: dapoliimg1, title: "Dalopli, Ratnagiri", id: 2 },
  { url: farmimg1, title: "Agrow Eco, Mahad", id: 3 },
  { url: agroimg2, title: "Farm Dale, Pali", id: 4 },
  { url: shivimg1, title: "Shivsparash", id: 5 },
  { url: samimg1, title: "Samarth Hill", id: 6 }
];

const getTransformPercentage = (containerWidth, viewportWidth) => {
  // No transform needed for desktop (>1024px)
  if (viewportWidth > 1024) return 0;
  
  const base = ((containerWidth - viewportWidth) / viewportWidth) * 100;
  return viewportWidth < 768 ? Math.min(base, 80) : Math.min(base, 60);
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

const HorizontalScrollCarousel = ({ onKnowMore }) => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [transformValue, setTransformValue] = useState("0%");
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const updateTransform = () => {
      if (!containerRef.current) return;
      const viewportWidth = window.innerWidth;
      setIsDesktop(viewportWidth > 1024);
      
      const percentage = getTransformPercentage(
        containerRef.current.scrollWidth,
        viewportWidth
      );
      setTransformValue(`-${percentage}%`);
    };

    updateTransform();
    window.addEventListener('resize', updateTransform);
    return () => window.removeEventListener('resize', updateTransform);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", transformValue]);

  return (
    <section ref={targetRef} className={`relative ${isDesktop ? 'h-screen' : 'h-[300vh]'}`}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          ref={containerRef} 
          style={{ x }} 
          className={`flex gap-4 ${isDesktop ? 'justify-center w-full' : ''}`}
        >
          {cards.map(card => (
            <Card key={card.id} card={card} onKnowMore={onKnowMore} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HomeProject = () => {
  const navigate = useNavigate();
  const handleKnowMore = useCallback((id) => {
    navigate(`/project?id=${id}`);
    localStorage.setItem('activeProject', id.toString());
  }, [navigate]);
  
  return <HorizontalScrollCarousel onKnowMore={handleKnowMore} />;
};

export default HomeProject;