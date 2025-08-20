// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
          <div>
            <div className="flex items-center mb-5 md:mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center mr-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-500 font-bold text-lg">B</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-serif">
                <span className="text-white">BARBER</span>
                <span className="text-amber-500">ÍA</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base">
              Barbería de lujo donde la tradición se encuentra con la innovación para crear tu mejor estilo.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">{social}</span>
                  <div className="text-white text-sm md:text-base">{social.charAt(0).toUpperCase()}</div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-4 md:mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-2 md:space-y-3">
              {['Inicio', 'Servicios', 'Galería', 'Equipo', 'Reservas'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm md:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-4 md:mb-6">Servicios</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                'Corte de Cabello', 
                'Afeitado', 
                'Arreglo de Barba', 
                'Perflado de Cejas'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm md:text-base">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-4 md:mb-6">Contacto</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mr-3 mt-1">
                  <span className="text-amber-500">📍</span>
                </div>
                <span className="text-sm md:text-base">Bernardino Caballero c/Gral diaz, Ypacarai, Paraguay</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                  <span className="text-amber-500">📞</span>
                </div>
                <span className="text-sm md:text-base">+595 986 202 684</span>
              </li>
              {/* <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                  <span className="text-amber-500">✉️</span>
                </div>
                <span className="text-sm md:text-base">info@barberiadeluxe.com</span>
              </li> */}
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                  <span className="text-amber-500">🕒</span>
                </div>
                <span className="text-sm md:text-base">Lun-Jue: 13:30 - 20:30, Sáb - Dom:08:00 - 12:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Barbería y Peluqueria JG. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado con pasión por la barbería</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;