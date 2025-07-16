
import React, { useState, useEffect } from 'react';

const InteractiveMetalVisualizer = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const metalTypes = [
    {
      name: 'Stainless Steel',
      properties: 'Corrosion resistant, durable, modern finish',
      color: 'from-gray-300 to-gray-600',
      shine: 'shadow-xl shadow-gray-300/50'
    },
    {
      name: 'Aluminum',
      properties: 'Lightweight, weather resistant, versatile',
      color: 'from-slate-200 to-slate-500',
      shine: 'shadow-xl shadow-slate-300/50'
    },
    {
      name: 'Copper',
      properties: 'Premium finish, antimicrobial, patina development',
      color: 'from-orange-300 to-orange-600',
      shine: 'shadow-xl shadow-orange-300/50'
    },
    {
      name: 'Titanium',
      properties: 'Ultra-strong, aerospace grade, premium choice',
      color: 'from-gray-400 to-gray-700',
      shine: 'shadow-xl shadow-gray-400/50'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveElement((prev) => (prev + 1) % metalTypes.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="metallic-text">Interactive Metal </span>
            <span className="gold-text">Visualizer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our premium metal finishes through our advanced 3D visualization technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Metal Preview */}
            <div 
              className="relative h-96 perspective-1000"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${metalTypes[activeElement].color} ${metalTypes[activeElement].shine} transform transition-all duration-700 hover:scale-110 hover:rotate-y-12 relative overflow-hidden`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Metallic shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Metal texture pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20"></div>
                  </div>

                  {/* Center logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className="fas fa-hammer text-white text-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating particles around the metal */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${metalTypes[activeElement].color} rounded-full animate-float opacity-60`}
                    style={{
                      top: `${20 + (i * 15) % 60}%`,
                      left: `${10 + (i * 20) % 80}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + (i % 3)}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Metal Properties Panel */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {metalTypes.map((metal, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveElement(index)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      activeElement === index
                        ? 'border-gold-400 bg-gold-50 dark:bg-gold-900/20'
                        : 'border-border hover:border-gold-400/50 bg-card'
                    }`}
                  >
                    <h3 className="font-semibold text-foreground mb-1">{metal.name}</h3>
                    <p className="text-sm text-muted-foreground">{metal.properties}</p>
                  </button>
                ))}
              </div>

              {/* Active Metal Details */}
              <div className="card-metallic p-6">
                <h3 className="text-2xl font-bold mb-4 gold-text">
                  {metalTypes[activeElement].name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {metalTypes[activeElement].properties}
                </p>

                {/* Simulated properties */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Durability</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold-gradient transition-all duration-1000"
                        style={{ width: `${85 + (activeElement * 3)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Weather Resistance</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-metallic-gradient transition-all duration-1000"
                        style={{ width: `${75 + (activeElement * 5)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Premium Factor</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold-gradient transition-all duration-1000"
                        style={{ width: `${70 + (activeElement * 7)}%` }}
                      ></div>
                    </div>
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

export default InteractiveMetalVisualizer;
