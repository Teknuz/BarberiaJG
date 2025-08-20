// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Erick Ojeda",
      role: "Cliente fundador",
      comment: "La mejor experiencia de barbería que he tenido. Jose es un artista con las tijeras. ¡Siempre salgo luciendo impecable!",
      rating: 5
    },
    {
      id: 2,
      name: "Sergio Morel",
      role: "Cliente Fundador",
      comment: "Increíble atención y servicio. Ganando bro, masivo",
      rating: 5
    },
    {
      id: 3,
      name: "Enzo Benitez",
      role: "Cliente Fundador",
      comment: "No confío mi barba a nadie más. El tratamiento premium es impresionante y dura semanas. ¡Vale cada euro!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-white">OPINIONES DE</span>
              <span className="text-amber-500"> CLIENTES</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Lo que dicen nuestros clientes sobre la experiencia en nuestra barbería.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4">
                  <span className="text-amber-500 font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-amber-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">"{testimonial.comment}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-700'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;