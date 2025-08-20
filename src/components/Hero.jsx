// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import fondo from "../assets/fondo.jpeg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974')] bg-cover bg-center opacity-30 animate-pulse-slow"></div>
        </div>
        
        {/* Animated Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-amber-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-amber-500"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 order-2 md:order-1 mt-16 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
                <span className="block text-white">ARTE EN</span>
                <span className="block text-amber-500 mt-2">CABELLO Y BARBA</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg">
                Donde la tradición se encuentra con la innovación. Nuestros maestros barberos transforman cortes en obras de arte.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#reservas"
                  className="px-6 py-3 sm:px-8 sm:py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reservar Cita
                </motion.a>
                <motion.a
                  href="#servicios"
                  className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-amber-500 text-white font-medium rounded-full hover:bg-amber-500/10 transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Servicios
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-amber-500 to-transparent opacity-70 rotate-6 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-amber-500/30">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
                  <img
                  src={fondo}
                  alt="Imagen de fondo"
                  className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-black border-4 border-amber-500 rounded-xl flex items-center justify-center rotate-6">
                <div className="text-center -rotate-6">
                  <p className="text-amber-500 font-bold text-2xl sm:text-4xl">+5</p>
                  <p className="text-white text-xs sm:text-sm">AÑOS DE EXPERIENCIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;