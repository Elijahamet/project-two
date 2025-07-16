
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Kwame Asante',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
      content: 'Next Century Metal Craft transformed our home with their beautiful burglarproof designs. The quality is exceptional and the team was professional throughout the entire process.',
      rating: 5
    },
    {
      id: 2,
      name: 'Akosua Mensah',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150',
      content: 'Their custom staircase and balustrade work for our commercial building exceeded our expectations. Truly crafting metal masterpieces for the future!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emmanuel Osei',
      role: 'Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
      content: 'I\'ve worked with many metal fabricators, but Next Century Metal Craft stands out for their precision engineering and artistic craftsmanship. Highly recommended!',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              <span className="metallic-text">Client </span>
              <span className="gold-text">Reviews</span>
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Hear what our satisfied clients have to say about our work
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="card-metallic p-8 md:p-12 text-center">
              <div className="mb-8">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gold-400"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-gold-400 text-xl mx-1"></i>
                  ))}
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentSlide].content}"
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gold-500 font-semibold">
                  {testimonials[currentSlide].role}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-metallic-gradient rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-metallic-gradient rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gold-400 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
