// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import salon from "../assets/salon.jpeg";
const About = () => {
  return (
    <section id="nosotros" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-4 gap-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-20 border-b border-r border-amber-500/20"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-amber-500 to-transparent opacity-30 rotate-3 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-amber-500/30">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-96 flex items-center justify-center">
                  {/* <span className="text-gray-500">Imagen de la barbería</span> */}
                    <img
                  src={salon}
                  alt="Imagen de fondo"
                  className="w-full h-full object-cover "
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black border-4 border-amber-500 rounded-xl flex items-center justify-center rotate-12 overflow-hidden">
                <div className="text-center -rotate-12">
                  <p className="text-amber-500 font-bold text-4xl">2020</p>
                  <p className="text-white text-xs">FUNDADA</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              <span className="text-white">SOBRE</span>
              <span className="text-amber-500"> NOSOTROS</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mb-6"></div>
            
            <p className="text-gray-300 mb-6">
              En <span className="text-amber-500 font-bold">Barbería y Peluqueria JG</span>, no solo cortamos cabello, creamos experiencias. Fundada en 2020, nuestra barbería se ha convertido en un referente de estilo y tradición en el corazón de Ypacarai.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Nuestra Filosofía</h3>
              <p className="text-gray-300 mb-4">
                Creemos que cada corte de cabello es una expresión personal y cada barba es un lienzo en blanco. Combinamos técnicas tradicionales con las últimas tendencias para crear estilos únicos que reflejen tu personalidad.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {['Tradición', 'Calidad', 'Innovación', 'Detalle', 'Estilo', 'Excelencia'].map((item, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-amber-500 font-bold text-3xl md:text-4xl">+5</p>
                <p className="text-white text-sm">AÑOS DE EXPERIENCIA</p>
              </div>
              <div className="text-center">
                <p className="text-amber-500 font-bold text-3xl md:text-4xl">+2k</p>
                <p className="text-white text-sm">CLIENTES SATISFECHOS</p>
              </div>
              <div className="text-center md:col-span-1 col-span-2">
                <p className="text-amber-500 font-bold text-3xl md:text-4xl">1</p>
                <p className="text-white text-sm">MAESTROS BARBEROS</p>
              </div>
            </div>
            
            <motion.a
              href="#equipo"
              className="inline-block px-6 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce a nuestro equipo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;