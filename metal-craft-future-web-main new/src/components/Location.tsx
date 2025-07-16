
import React from 'react';

const Location = () => {
  const openDirections = () => {
    window.open('https://maps.google.com/?q=Dzorwulu,+N1+Road,+Opposite+Talow,+Accra,+Ghana', '_blank');
  };

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              <span className="metallic-text">Find </span>
              <span className="gold-text">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Visit our workshop and see our craftsmanship in action
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8267860345396!2d-0.1865425!3d5.6066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMjQiTiAwwrAxMScxMS41Ilc!5e0!3m2!1sen!2sgh!4v1635789000000!5m2!1sen!2sgh"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Next Century Metal Craft Location"
                />
                <div className="absolute inset-0 bg-metallic-gradient/10 pointer-events-none"></div>
              </div>
            </div>

            {/* Location Info */}
            <div data-aos="fade-left">
              <div className="card-metallic p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Our Workshop</h3>
                    <p className="text-muted-foreground">Where masterpieces are born</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-building text-gold-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Next Century Metal Craft<br />
                        Dzorwulu, N1 Road, Opposite Talow<br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <i className="fas fa-clock text-gold-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <i className="fas fa-tools text-gold-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Services</h4>
                      <p className="text-muted-foreground">
                        Custom fabrication, consultations, and on-site installations available
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={openDirections}
                  className="btn-gold w-full mt-8"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
