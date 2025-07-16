
import React, { useState, useRef } from 'react';

const ARPreview = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('window-frame');
  const videoRef = useRef<HTMLVideoElement>(null);

  const products = {
    'window-frame': {
      name: 'Modern Window Frame',
      description: 'Sleek stainless steel window frame with contemporary design',
      features: ['Weather resistant', 'Energy efficient', 'Modern aesthetics']
    },
    'door-frame': {
      name: 'Security Door Frame',
      description: 'Heavy-duty door frame with advanced security features',
      features: ['High security', 'Durable construction', 'Elegant finish']
    },
    'balustrade': {
      name: 'Glass Balustrade',
      description: 'Premium glass balustrade with stainless steel fittings',
      features: ['Safety compliant', 'Elegant design', 'Easy maintenance']
    }
  };

  const startARPreview = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsPreviewMode(true);
      }
    } catch (error) {
      // Fallback for devices without camera access
      setIsPreviewMode(true);
    }
  };

  const stopARPreview = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsPreviewMode(false);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="metallic-text">AR Preview </span>
            <span className="gold-text">Studio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualize our metal works in your space using cutting-edge AR technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {!isPreviewMode ? (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Selection */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold metallic-text mb-6">
                  Choose Your Product
                </h3>
                
                <div className="space-y-4">
                  {Object.entries(products).map(([key, product]) => (
                    <div
                      key={key}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedProduct === key
                          ? 'border-gold-400 bg-gold-50 dark:bg-gold-900/20 transform scale-105'
                          : 'border-border hover:border-gold-400/50 bg-card hover:scale-102'
                      }`}
                      onClick={() => setSelectedProduct(key)}
                    >
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-metallic-gradient text-white text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={startARPreview}
                  className="w-full btn-gold text-lg py-4 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <i className="fas fa-camera text-xl"></i>
                    <span>Start AR Preview</span>
                    <i className="fas fa-magic text-xl"></i>
                  </span>
                </button>
              </div>

              {/* Preview Info */}
              <div className="card-metallic p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <i className="fas fa-cube text-white text-3xl"></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Augmented Reality Preview
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    Point your camera at your space and see how our {products[selectedProduct].name.toLowerCase()} 
                    would look in your environment.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-check text-green-500"></i>
                      <span>Real-time rendering</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-check text-green-500"></i>
                      <span>Accurate scaling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-check text-green-500"></i>
                      <span>Multiple angles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-check text-green-500"></i>
                      <span>Material preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* AR Preview Mode */
            <div className="relative bg-black rounded-2xl overflow-hidden" style={{ height: '600px' }}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              
              {/* AR Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Simulated AR Product */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* 3D Product Simulation */}
                    <div className="w-64 h-48 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-lg shadow-2xl transform perspective-1000 rotate-y-12 animate-float">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-metallic-shine"></div>
                      <div className="absolute inset-4 border-2 border-white/30 rounded"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <div className="bg-black/50 backdrop-blur-sm rounded px-3 py-1">
                          <span className="text-white text-sm font-medium">
                            {products[selectedProduct].name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* AR Anchor Points */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold-400 animate-pulse"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-gold-400 animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold-400 animate-pulse"></div>
                  </div>
                </div>

                {/* AR UI Elements */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                  <h4 className="font-semibold mb-2">{products[selectedProduct].name}</h4>
                  <div className="text-sm space-y-1">
                    <div>📏 Scale: 1:1</div>
                    <div>📍 Position: Locked</div>
                    <div>💡 Lighting: Auto</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 pointer-events-auto">
                  <button
                    onClick={() => setSelectedProduct(
                      Object.keys(products)[
                        (Object.keys(products).indexOf(selectedProduct) + 1) % Object.keys(products).length
                      ]
                    )}
                    className="bg-gold-gradient hover:scale-110 text-white px-6 py-3 rounded-full transition-all duration-300"
                  >
                    <i className="fas fa-sync-alt mr-2"></i>
                    Switch Product
                  </button>
                  <button
                    onClick={stopARPreview}
                    className="bg-red-500 hover:bg-red-600 hover:scale-110 text-white px-6 py-3 rounded-full transition-all duration-300"
                  >
                    <i className="fas fa-times mr-2"></i>
                    Exit AR
                  </button>
                </div>
              </div>

              {/* Fallback for no camera */}
              {!videoRef.current?.srcObject && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="fas fa-camera-slash text-4xl mb-4 opacity-50"></i>
                    <p>Camera preview simulation</p>
                    <p className="text-sm opacity-70">AR experience would use your device camera</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ARPreview;
