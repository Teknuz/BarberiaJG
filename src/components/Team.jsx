// src/components/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  
  const barbers = [
   
    {
      name: "Vacante Disponible",
      role: "Disponible",
      experience: "Disponible",
      specialty: "Disponible"
    }, {
      name: "Vacante Disponible",
      role: "Disponible",
      experience: "Disponible",
      specialty: "Disponible"
    },
     {
      name: "Jose Gomez",
      role: "Barbero - Dueño",
      experience: "5 años",
      specialty: "Cirujano Plastico / Salva vidas",
      image: "./src/assets/yo.jpg"
    }, 
    {
      name: "Vacante Disponible",
      role: "Disponible",
      experience: "Disponible",
      specialty: "Disponible"
    }
  ];

  return (
    <section id="equipo" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/90 to-black z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] opacity-5">
        <div className="text-[10rem] md:text-[20rem] font-bold text-center whitespace-nowrap text-stroke">
          Barberia y Peluqueria JG
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-white">NUESTRO</span>
              <span className="text-amber-500"> EQUIPO</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Conoce a nuestros maestros barberos, profesionales apasionados por su arte y comprometidos con tu estilo.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-60 md:h-80 overflow-hidden">
              {barber.image ? (
    <img
      src={barber.image}
      alt={`Foto de ${barber.name}`}
      className="w-full h-full object-cover object-center"
    />
  ) : (
    <div className="bg-gray-800 border-2 border-dashed w-full h-full flex items-center justify-center">
      <span className="text-gray-500">Foto de {barber.name}</span>
    </div>
  )}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-4 md:p-6">
    <div>
      <h3 className="text-white text-lg md:text-xl font-bold">{barber.name}</h3>
      <p className="text-amber-500 text-sm md:text-base">{barber.role}</p>
    </div>
  </div>


              </div>
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <span className="text-gray-400 text-sm">Experiencia</span>
                  <span className="text-white font-medium text-sm md:text-base">{barber.experience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Especialidad</span>
                  <span className="text-amber-500 font-medium text-sm md:text-base">{barber.specialty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;