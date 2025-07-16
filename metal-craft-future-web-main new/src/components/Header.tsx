
import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setShowServiceMenu(false);
    }
  };

  const services = [
    {
      name: 'Staircases',
      image: 'https://i.pinimg.com/1200x/80/6c/35/806c35ade04dea88e8fed6cdaa61077c.jpg',
      icon: 'fas fa-level-up-alt'
    },
    {
      name: 'Window Frames',
      image: 'https://i.pinimg.com/736x/81/4a/29/814a2938b237553aed4e6325f8b8fd54.jpg',
      icon: 'fas fa-window-maximize'
    },
    {
      name: 'Door Frames',
      image: 'https://i.pinimg.com/1200x/60/6e/a0/606ea0295cb5b0a14d16c40a3f9b2670.jpg',
      icon: 'fas fa-door-open'
    },
    {
      name: 'Burglarproofs',
      image: 'https://i.pinimg.com/1200x/c5/ab/07/c5ab071b4b98b379c762631714b33d56.jpg',
      icon: 'fas fa-shield-alt'
    },
    {
      name: 'Balustrades',
      image: 'https://i.pinimg.com/1200x/0b/94/e0/0b94e03f380d224281295158e039b51e.jpg',
      icon: 'fas fa-grip-lines'
    },
    {
      name: 'Roof Trusses',
      image: 'https://i.pinimg.com/1200x/5c/e9/13/5ce9131a5b47b5ccd6178a62f114c1fb.jpg',
      icon: 'fas fa-home'
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-metallic-gradient rounded-lg flex items-center justify-center">
              <i className="fas fa-hammer text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold font-montserrat metallic-text">
                Next Century
              </h1>
              <p className="text-xs text-muted-foreground">Metal Craft</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-gold-500 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-gold-500 transition-colors duration-300"
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowServiceMenu(true)}
              onMouseLeave={() => setShowServiceMenu(false)}
            >
              <button className="hover:text-gold-500 transition-colors duration-300 flex items-center">
                Services
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              
              {showServiceMenu && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection('portfolio')}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 text-left"
                      >
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-12 h-8 object-cover rounded"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <i className={`${service.icon} text-gold-500 text-sm`}></i>
                            <span className="text-sm font-medium">{service.name}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-gold-500 transition-colors duration-300"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-gold-500 transition-colors duration-300"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="hover:text-gold-500 transition-colors duration-300"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-gold-500 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left hover:text-gold-500 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-gold-500 transition-colors duration-300"
              >
                About
              </button>
              
              {/* Mobile Services */}
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection('portfolio')}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-muted/50 transition-colors duration-300 text-left"
                    >
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-8 h-5 object-cover rounded"
                      />
                      <span className="text-xs">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left hover:text-gold-500 transition-colors duration-300"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left hover:text-gold-500 transition-colors duration-300"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-left hover:text-gold-500 transition-colors duration-300"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-gold-500 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
