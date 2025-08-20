// src/components/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
const galleryItems = [
  {
    id: 1,
    title: "Corte de Cabello",
    image: "./src/assets/corte.png",
  },
  {
    id: 2,
    title: "Arreglo de Barba",
    image: "./src/assets/corte2.png",
  },
  {
    id: 3,
    title: "Afeitado",
    image: "./src/assets/corte3.png",
  },
  {
    id: 4,
    title: "Perfilado de Cejas",
    image: "./src/assets/corte6.png",
  },
];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Touch handling for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    } else if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  return (
    <section id="galería" className="py-16 md:py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-white">GALERÍA</span>
              <span className="text-amber-500"> DE TRABAJOS</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Explora nuestra galería de trabajos realizados por nuestros maestros barberos.
            </p>
          </motion.div>
        </div>

        {/* Gallery Slider */}
        <div 
          className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0,
                x: index === currentIndex ? 0 : index > currentIndex ? '100%' : '-100%'
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
              {item.image ? (
    <img
     src={item.image}
    alt={item.title}
    className="max-w-full max-h-full object-cover object-center rounded-xl shadow-lg"
    />
) : (
  <div className="text-center">
    <span className="text-gray-500 block mb-4">Sin imagen</span>
    <h3 className="text-white text-2xl font-bold">{item.title}</h3>
    <p className="text-amber-500 mt-2">Trabajo #{item.id}</p>
  </div>
)}

              </div>
            </motion.div>
          ))}
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-10 hover:bg-amber-500 transition-colors"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-10 hover:bg-amber-500 transition-colors"
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="mt-8 flex justify-center overflow-x-auto pb-4">
          <div className="flex space-x-3 md:space-x-4">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex ? 'ring-4 ring-amber-500 scale-110' : 'opacity-50 hover:opacity-100'}`}
              >
               {item.image ? (
  <img
    src={item.image}
    alt={item.title}
    className="max-w-full max-h-full object-cover object-center rounded-xl shadow-lg"
  />
) : (
  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
    <span className="text-white text-xs">{item.id}</span>
  </div>
)}

              </button>
            ))}
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-amber-500' : 'bg-gray-700'}`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;