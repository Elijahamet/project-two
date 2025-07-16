
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    'https://i.pinimg.com/1200x/58/1d/ba/581dba56efda76a7df49af34bb253ebc.jpg',
    'https://i.pinimg.com/1200x/7d/85/a0/7d85a0417716a6a3a756524870e299da.jpg',
    'https://i.pinimg.com/736x/bc/08/a1/bc08a1258a10aba6aa8106ac4d56e3f7.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-metallic-gradient/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-metallic-gradient rounded-full flex items-center justify-center animate-float">
              <i className="fas fa-hammer text-white text-3xl"></i>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6">
            <span className="metallic-text block">NEXT CENTURY</span>
            <span className="gold-text block">METAL CRAFT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting Metal Masterpieces for the Future
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Premium metal works in Ghana - Window frames, door frames, burglarproofs, 
            staircases, balustrades, and roof trusses crafted with precision and artistry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToPortfolio}
              className="btn-gold text-lg px-8 py-4 rounded-full hover:scale-110 transition-all duration-300 group"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Our Craft</span>
                <i className="fas fa-arrow-down group-hover:translate-y-1 transition-transform duration-300"></i>
              </span>
            </button>
            
            <button 
              onClick={() => window.open('https://wa.me/233501234567?text=Hi, I\'m interested in your metal works.', '_blank')}
              className="btn-metallic text-lg px-8 py-4 rounded-full hover:scale-110 transition-all duration-300 group"
            >
              <span className="flex items-center space-x-2">
                <i className="fab fa-whatsapp text-green-400"></i>
                <span>Get Quote</span>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-gold-400 rounded-full animate-pulse-gold"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-gold-400 rounded-full animate-pulse-gold" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-pulse-gold" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-gold-400 rounded-full animate-pulse-gold" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Hero;
