// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Corte de Cabello",
      description: "Corte de cabello tradicional con técnicas de barbería clásica y acabado perfecto.",
      price: "30.000 GS",
      time: "45 min"
    },
    {
      title: "Afeitado ",
      description: "Afeitado con navaja con tratamiento previo y posterior para una experiencia premium.",
      price: "15.000 Gs",
      time: "45 min"
    },
    {
      title: "Arreglo de Barba",
      description: "Diseño , esculpido y marcacion de la barba.",
      price: "15.000",
      time: "40 min"
    },
     {
      title: "Perfilado de Cejas",
      description: "Marcacion y limpiezas de las cejas realzando la masculinidad.",
      price: "5.000 Gs",
      time: "10 min"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="servicios" className="py-16 md:py-20 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-white">NUESTROS</span>
              <span className="text-amber-500"> SERVICIOS</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Servicios premium que combinan técnicas tradicionales con las últimas tendencias en cuidado masculino.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 group"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-amber-500 font-bold">{service.price}</span>
                </div>
                <p className="text-gray-400 mb-5 text-sm md:text-base">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs md:text-sm">{service.time}</span>
                  <button className="px-3 py-1.5 md:px-4 md:py-2 bg-amber-500/10 text-amber-500 rounded-lg text-xs md:text-sm hover:bg-amber-500 hover:text-black transition-colors">
                    Reservar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;