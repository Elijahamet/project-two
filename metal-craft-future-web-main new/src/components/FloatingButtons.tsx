
import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/233261429722?text=Hi, I\'m interested in your metal works.', '_blank');
  };

  const openMessenger = () => {
    // Since we can't use real Messenger integration, we'll redirect to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
          title="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </button>

        {/* Messenger Button */}
        <button
          onClick={openMessenger}
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300"
          title="Send Message"
        >
          <i className="fab fa-facebook-messenger text-2xl"></i>
        </button>

        {/* Quote Request Button */}
        <button
          onClick={() => setShowQuoteModal(true)}
          className="w-14 h-14 bg-gold-gradient hover:scale-110 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 animate-float"
          title="Request Quote"
        >
          <i className="fas fa-clipboard-list text-xl"></i>
        </button>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-metallic-gradient hover:scale-110 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
            title="Scroll to Top"
          >
            <i className="fas fa-arrow-up text-xl"></i>
          </button>
        )}
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-background rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold metallic-text">Quick Quote Request</h3>
              <button
                onClick={() => setShowQuoteModal(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Get a quick quote for your metal works project. Choose your preferred contact method:
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    window.open('https://wa.me/233261429722?text=Hi, I need a quote for my metal works project.', '_blank');
                    setShowQuoteModal(false);
                  }}
                  className="w-full p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center space-x-3 transition-colors duration-300"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>WhatsApp Quote</span>
                </button>

                <button
                  onClick={() => {
                    window.location.href = 'tel:0208808673';
                    setShowQuoteModal(false);
                  }}
                  className="w-full p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-3 transition-colors duration-300"
                >
                  <i className="fas fa-phone text-xl"></i>
                  <span>Call for Quote</span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setShowQuoteModal(false);
                  }}
                  className="w-full p-4 bg-gold-gradient hover:scale-105 text-white rounded-lg flex items-center space-x-3 transition-all duration-300"
                >
                  <i className="fas fa-envelope text-xl"></i>
                  <span>Email Quote Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
