
import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'fas fa-award',
      title: 'Over a Decade of Excellence',
      description: 'More than 10 years of proven experience in metal craftsmanship'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Precision Engineering',
      description: 'State-of-the-art equipment and meticulous attention to detail'
    },
    {
      icon: 'fas fa-palette',
      title: 'Artistic Craftsmanship',
      description: 'Combining technical expertise with creative design excellence'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Durable Solutions',
      description: 'Built to last with premium materials and superior construction'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              <span className="metallic-text">About </span>
              <span className="gold-text">Our Craft</span>
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Leading Ghanaian Metal Works Company
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Next Century Metal Craft is a leading Ghanaian metal works company specializing in 
                designing and fabricating premium window frames, door frames, burglarproofs, 
                staircases, balustrades, and roof trusses.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience, we combine precision engineering with artistic 
                craftsmanship to create durable and stunning metal solutions for homes and businesses. 
                Our commitment to excellence has made us the trusted choice for discerning clients 
                across Ghana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-metallic"
                >
                  <i className="fas fa-eye mr-2"></i>
                  View Our Work
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image */}
            <div data-aos="fade-left">
              <div className="relative">
                <img
                  src="https://i.pinimg.com/736x/d8/76/39/d876399a716307d5b9e2ffc5acc5dfe3.jpg"
                  alt="Metal craftsmanship"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-metallic-gradient/20 rounded-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-gradient rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-metallic p-6 text-center group hover:bg-gold-500/10 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-metallic-gradient rounded-full flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
