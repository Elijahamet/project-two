
import React, { useState, useEffect } from 'react';

const SmartQuoteCalculator = () => {
  const [projectType, setProjectType] = useState('window-frames');
  const [dimensions, setDimensions] = useState({ width: 1, height: 1, quantity: 1 });
  const [metalType, setMetalType] = useState('stainless-steel');
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const projectTypes = {
    'window-frames': { name: 'Window Frames', basePrice: 150, complexity: 1.2 },
    'door-frames': { name: 'Door Frames', basePrice: 200, complexity: 1.3 },
    'burglarproof': { name: 'Burglarproof', basePrice: 180, complexity: 1.4 },
    'staircases': { name: 'Staircases', basePrice: 500, complexity: 2.5 },
    'balustrades': { name: 'Balustrades', basePrice: 300, complexity: 1.8 },
    'roof-trusses': { name: 'Roof Trusses', basePrice: 800, complexity: 3.0 }
  };

  const metalTypes = {
    'stainless-steel': { name: 'Stainless Steel', multiplier: 1.0 },
    'aluminum': { name: 'Aluminum', multiplier: 0.8 },
    'copper': { name: 'Copper', multiplier: 1.5 },
    'titanium': { name: 'Titanium', multiplier: 2.2 }
  };

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      const basePrice = projectTypes[projectType].basePrice;
      const complexity = projectTypes[projectType].complexity;
      const metalMultiplier = metalTypes[metalType].multiplier;
      const area = dimensions.width * dimensions.height;
      
      const cost = basePrice * complexity * metalMultiplier * area * dimensions.quantity;
      setEstimatedCost(Math.round(cost));
      setIsCalculating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [projectType, dimensions, metalType]);

  const handleQuoteRequest = () => {
    const projectInfo = `${projectTypes[projectType].name} - ${metalTypes[metalType].name}`;
    const specs = `${dimensions.width}m x ${dimensions.height}m x ${dimensions.quantity} units`;
    const message = `Hi! I'd like a quote for ${projectInfo}. Specifications: ${specs}. Estimated budget: $${estimatedCost}`;
    
    window.open(`https://wa.me/233501234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="metallic-text">Smart Quote </span>
            <span className="gold-text">Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant estimates for your metal works project with our AI-powered calculator
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="card-metallic p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                >
                  {Object.entries(projectTypes).map(([key, value]) => (
                    <option key={key} value={key}>{value.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Metal Type
                </label>
                <select
                  value={metalType}
                  onChange={(e) => setMetalType(e.target.value)}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                >
                  {Object.entries(metalTypes).map(([key, value]) => (
                    <option key={key} value={key}>{value.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Width (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({...dimensions, width: parseFloat(e.target.value) || 0})}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Height (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({...dimensions, height: parseFloat(e.target.value) || 0})}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={dimensions.quantity}
                    onChange={(e) => setDimensions({...dimensions, quantity: parseInt(e.target.value) || 1})}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={handleQuoteRequest}
                disabled={isCalculating || estimatedCost === 0}
                className="w-full btn-gold text-lg py-4 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:scale-100"
              >
                <span className="flex items-center justify-center space-x-2">
                  <i className="fab fa-whatsapp"></i>
                  <span>Request Detailed Quote</span>
                </span>
              </button>
            </div>

            {/* Estimate Display */}
            <div className="space-y-6">
              {/* Live Cost Display */}
              <div className="card-metallic p-8 text-center">
                <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                  Estimated Cost
                </h3>
                <div className="relative">
                  {isCalculating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-8 h-8 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-muted-foreground">Calculating...</span>
                    </div>
                  ) : (
                    <div className="text-4xl md:text-5xl font-bold gold-text">
                      ${estimatedCost.toLocaleString()}
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  *Estimate based on standard specifications
                </p>
              </div>

              {/* Project Summary */}
              <div className="card-metallic p-6">
                <h4 className="font-semibold text-foreground mb-4">Project Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{projectTypes[projectType].name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">{metalTypes[metalType].name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions:</span>
                    <span className="font-medium">{dimensions.width}m × {dimensions.height}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="font-medium">{dimensions.quantity} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Area:</span>
                    <span className="font-medium">{(dimensions.width * dimensions.height * dimensions.quantity).toFixed(2)} m²</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="card-metallic p-6">
                <h4 className="font-semibold text-foreground mb-4">What's Included</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>Premium metal craftsmanship</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>Professional installation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>5-year warranty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>Free consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartQuoteCalculator;
