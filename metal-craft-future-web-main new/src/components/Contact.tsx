
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'window-frames',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, projectType, message } = formData;
    const subject = `Quote Request for ${projectType.replace('-', ' ')}`;
    const body = `Hello Next Century Metal Craft,

My name is ${name} and I'm interested in getting a quote for ${projectType.replace('-', ' ')}.

Project Details:
${message}

Please contact me at ${email} to discuss further.

Best regards,
${name}`;

    window.location.href = `mailto:nextcenturymetalcraft@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      info: '0208808673 / 0534571470',
      action: () => window.location.href = 'tel:0208808673',
      color: 'text-blue-500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      info: 'nextcenturymetalcraft@gmail.com',
      action: () => window.location.href = 'mailto:nextcenturymetalcraft@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      info: '0261429722',
      action: () => window.open('https://wa.me/233261429722?text=Hi, I\'m interested in your metal works.', '_blank'),
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              <span className="metallic-text">Get in </span>
              <span className="gold-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Ready to start your next metal works project? Let's discuss your vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="card-metallic p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <i className="fas fa-clipboard-list mr-3 text-gold-500"></i>
                  Request a Quote
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500"
                      required
                    >
                      <option value="window-frames">Window Frames</option>
                      <option value="door-frames">Door Frames</option>
                      <option value="burglarproofs">Burglarproofs</option>
                      <option value="staircases">Staircases</option>
                      <option value="balustrades">Balustrades</option>
                      <option value="roof-trusses">Roof Trusses</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Project Details</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500 h-32 resize-none"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Quote Request
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left">
              <div className="space-y-6">
                <div className="card-metallic p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-address-card mr-3 text-gold-500"></i>
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        onClick={method.action}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors duration-300 group"
                      >
                        <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <i className={`${method.icon} text-xl ${method.color}`}></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{method.title}</h4>
                          <p className="text-muted-foreground">{method.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-metallic p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <i className="fas fa-share-alt mr-3 text-gold-500"></i>
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>

                <div className="card-metallic p-6 bg-gold-gradient text-white">
                  <h3 className="text-xl font-bold mb-4">
                    <i className="fas fa-clock mr-2"></i>
                    Quick Response Guarantee
                  </h3>
                  <p className="text-white/90">
                    We respond to all inquiries within 24 hours. For urgent projects, 
                    call or WhatsApp us for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
