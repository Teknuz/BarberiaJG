// src/components/Booking.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  
  const services = [
    { id: 1, name: "Corte de Cabello", duration: "30 min" },
    { id: 2, name: "Afeitado ", duration: "45 min" },
    { id: 3, name: "Areglo de Barba", duration: "20 min" },
    { id: 4, name: "Corte + Barba", duration: "50 min" },
    { id: 5, name: "Perfilado de Cejas", duration: "10 min" },
    { id: 4, name: "Corte + Barba + Cejas", duration: "60 min" },
 
  ];

  const times = [
    "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", 
     "19:30","20:30"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío del formulario
    alert('Reserva enviada con éxito! Te contactaremos para confirmar.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
    setSelectedService(null);
  };

  return (
    <section id="reservas" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              <span className="text-white">RESERVA TU</span>
              <span className="text-amber-500"> CITA</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mb-6 md:mb-8"></div>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
              Completa el formulario para reservar tu cita. Nos pondremos en contacto contigo para confirmar la disponibilidad.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 md:p-6">
                <h3 className="text-white text-base md:text-lg font-bold mb-2">Horario</h3>
                <p className="text-gray-400 mb-1 text-sm md:text-base">Lunes - Jueves: 13:30 - 20:30</p>
                <p className="text-gray-400 mb-1 text-sm md:text-base">Viernes : CERRADO</p>
                <p className="text-gray-400 mb-1 text-sm md:text-base">Sábados: 08:00 - 12:00</p>
                <p className="text-gray-400 text-sm md:text-base">Domingos: 08:00 - 12:00</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 md:p-6">
                <h3 className="text-white text-base md:text-lg font-bold mb-2">Contacto</h3>
                <p className="text-gray-400 mb-1 text-sm md:text-base">Bernardino Caballero c/Gral Diaz</p>
                <p className="text-gray-400 mb-1 text-sm md:text-base">+595 986 202 684</p>
              </div>
            </div>
            
            {/* <div className="bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 p-4 md:p-6 rounded-lg">
              <h3 className="text-white text-base md:text-lg font-bold mb-2">¿Primera vez con nosotros?</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Disfruta de un 15% de descuento en tu primera visita. Menciona este mensaje al realizar tu reserva.
              </p>
            </div> */}
        
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 md:p-7 lg:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-5 md:mb-6">
                <label className="block text-gray-400 mb-2 text-sm md:text-base">Selecciona un servicio</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map(service => (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        type="button"
                        className={`w-full text-left p-3 md:p-4 rounded-lg border text-sm md:text-base ${
                          selectedService === service.id 
                            ? 'border-amber-500 bg-amber-500/10' 
                            : 'border-gray-800 hover:border-amber-500/50'
                        }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex justify-between items-center">
                          <span className={selectedService === service.id ? 'text-amber-500' : 'text-white'}>
                            {service.name}
                          </span>
                          <span className="text-gray-500 text-xs md:text-sm">{service.duration}</span>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-5 md:mb-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm md:text-base">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 text-sm md:text-base">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 text-sm md:text-base">Fecha</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 text-sm md:text-base">Hora</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm md:text-base"
                    required
                  >
                    <option value="">Selecciona hora</option>
                    {times.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-5 md:mb-6">
                <label className="block text-gray-400 mb-2 text-sm md:text-base">Mensaje (Opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 h-32 text-sm md:text-base"
                  placeholder="Algo que debamos saber..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-3 md:py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-600 transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reservar Cita
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;