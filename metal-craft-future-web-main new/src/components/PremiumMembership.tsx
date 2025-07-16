
import React, { useState } from 'react';

const PremiumMembership = () => {
  const [selectedTier, setSelectedTier] = useState('gold');

  const membershipTiers = [
    {
      id: 'silver',
      name: 'Silver Craft',
      price: '$99/month',
      color: 'from-gray-300 to-gray-600',
      features: [
        '5% discount on all projects',
        'Priority consultation',
        'Free design consultation',
        'Basic 3D previews',
        'Standard warranty extension'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Elite',
      price: '$199/month',
      color: 'from-gold-300 to-gold-600',
      popular: true,
      features: [
        '15% discount on all projects',
        'VIP priority service',
        'Advanced 3D modeling',
        'Free installation service',
        'Premium material upgrades',
        'Exclusive design library access'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum Master',
      price: '$399/month',
      color: 'from-purple-300 to-purple-600',
      features: [
        '25% discount on all projects',
        'Dedicated project manager',
        'Custom design service',
        'Premium installation team',
        'Lifetime warranty',
        'Early access to new materials',
        'Private showroom visits'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="metallic-text">Exclusive </span>
            <span className="gold-text">Membership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our elite circle of clients and unlock premium benefits, priority service, and exclusive access to our finest craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipTiers.map((tier, index) => (
            <div
              key={tier.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`relative card-metallic p-8 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedTier === tier.id ? 'ring-2 ring-gold-400' : ''
              } ${tier.popular ? 'scale-105 border-gold-400' : ''}`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                  <i className="fas fa-crown text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold gold-text">{tier.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                tier.popular 
                  ? 'btn-gold hover:scale-105' 
                  : 'btn-metallic hover:scale-105'
              }`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to elevate your metal craft experience?
          </p>
          <button className="btn-gold px-8 py-4 text-lg rounded-full hover:scale-110 transition-all duration-300">
            <span className="flex items-center space-x-2">
              <i className="fas fa-star"></i>
              <span>Start Premium Journey</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumMembership;
