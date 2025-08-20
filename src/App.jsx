// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {isLoading ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full mb-4 animate-spin"></div>
            <h2 className="text-white font-serif text-xl md:text-2xl">Barberia y Peluqueria JG</h2>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-[-1]"></div>
          <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMDYwNjA2Ii8+CiAgPHBhdGggZD0iTTAgMEg1MFY1MEgweiIgc3Ryb2tlPSIjMTExIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] opacity-20 z-[-1]"></div>
          
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Team />
          <Testimonials />
          <Booking />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;