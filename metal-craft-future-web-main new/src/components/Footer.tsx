
import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Window Frames',
    'Door Frames',
    'Burglarproofs',
    'Staircases',
    'Balustrades',
    'Roof Trusses'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-metallic-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                <i className="fas fa-hammer text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat">Next Century</h3>
                <p className="text-sm text-gray-400">Metal Craft</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting metal masterpieces for the future with over a decade of experience 
              in premium metal works across Ghana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 gold-text">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 gold-text">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <i className="fas fa-tools text-xs mr-2 text-gold-400"></i>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 gold-text">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-gold-400 mt-1"></i>
                <div>
                  <p className="text-gray-400">
                    Dzorwulu, N1 Road<br />
                    Opposite Talow<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-gold-400"></i>
                <div className="text-gray-400">
                  <a href="tel:0208808673" className="hover:text-gold-400 transition-colors duration-300 block">
                    0208808673
                  </a>
                  <a href="tel:0534571470" className="hover:text-gold-400 transition-colors duration-300 block">
                    0534571470
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-gold-400"></i>
                <a href="mailto:nextcenturymetalcraft@gmail.com" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  nextcenturymetalcraft@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fab fa-whatsapp text-gold-400"></i>
                <a 
                  href="https://wa.me/233261429722?text=Hi, I'm interested in your metal works."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                >
                  0261429722
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Next Century Metal Craft. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
