import React, { useState } from 'react';
import { Check, Box, X } from 'lucide-react';

interface Material {
  id: string;
  name: string;
  description: string;
  properties: {
    strength: number;
    corrosionResistance: number;
    workability: number;
    cost: number;
  };
  applications: string[];
  finish: string;
  thickness: string;
  color: string;
}

const MetalSampleViewer = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('steel');
  const [selectedFinish, setSelectedFinish] = useState<string>('powder-coated');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const materials: Material[] = [
    {
      id: 'steel',
      name: 'Galvanized Steel',
      description: 'High-strength steel with zinc coating for corrosion resistance',
      properties: {
        strength: 95,
        corrosionResistance: 85,
        workability: 80,
        cost: 70
      },
      applications: ['Window Frames', 'Door Frames', 'Structural Support'],
      finish: 'Galvanized',
      thickness: '2-6mm',
      color: '#C0C0C0'
    },
    {
      id: 'aluminum',
      name: 'Aluminum Alloy',
      description: 'Lightweight, corrosion-resistant metal perfect for modern designs',
      properties: {
        strength: 75,
        corrosionResistance: 95,
        workability: 90,
        cost: 85
      },
      applications: ['Window Frames', 'Curtain Walls', 'Decorative Elements'],
      finish: 'Anodized',
      thickness: '1.5-4mm',
      color: '#D3D3D3'
    },
    {
      id: 'stainless',
      name: 'Stainless Steel',
      description: 'Premium grade steel with excellent corrosion resistance',
      properties: {
        strength: 90,
        corrosionResistance: 98,
        workability: 70,
        cost: 95
      },
      applications: ['Premium Fixtures', 'Kitchen Equipment', 'Architectural Features'],
      finish: 'Brushed',
      thickness: '1-3mm',
      color: '#F5F5F5'
    }
  ];

  const finishOptions = [
    { id: 'powder-coated', name: 'Powder Coated', description: 'Durable, colorful finish' },
    { id: 'galvanized', name: 'Galvanized', description: 'Zinc-coated protection' },
    { id: 'anodized', name: 'Anodized', description: 'Electrolytic oxidation' },
    { id: 'brushed', name: 'Brushed', description: 'Textured surface finish' }
  ];

  const currentMaterial = materials.find(m => m.id === selectedMaterial);

  const PropertyBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="h-2 rounded-full transition-all duration-500"
          style={{ 
            width: `${value}%`, 
            backgroundColor: color 
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Metal </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Samples</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Explore our premium metal options with interactive 3D samples
            </p>
          </div>

          {/* Material Selector */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => setSelectedMaterial(material.id)}
                className={`bg-card border rounded-xl p-6 text-left transition-all duration-300 hover:shadow-lg ${
                  selectedMaterial === material.id 
                    ? 'ring-2 ring-yellow-500 scale-105 shadow-xl' 
                    : 'hover:scale-102 shadow-md'
                }`}
              >
                <div 
                  className="w-full h-24 rounded-lg mb-4 shadow-inner"
                  style={{ backgroundColor: material.color }}
                />
                <h3 className="text-lg font-bold mb-2">{material.name}</h3>
                <p className="text-sm text-muted-foreground">{material.description}</p>
              </button>
            ))}
          </div>

          {/* Selected Material Details */}
          {currentMaterial && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* 3D Viewer */}
              <div>
                <div className="bg-card border rounded-xl p-8 shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                    <div 
                      className="w-48 h-48 rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                      style={{ 
                        backgroundColor: currentMaterial.color,
                        background: `linear-gradient(135deg, ${currentMaterial.color}, ${currentMaterial.color}dd)`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{currentMaterial.name}</h3>
                    <p className="text-muted-foreground mb-4">{currentMaterial.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Thickness:</span>
                        <div className="font-medium">{currentMaterial.thickness}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Finish:</span>
                        <div className="font-medium">{currentMaterial.finish}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Properties & Details */}
              <div>
                <div className="bg-card border rounded-xl p-8 mb-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-6">Material Properties</h4>
                  
                  <PropertyBar 
                    label="Strength" 
                    value={currentMaterial.properties.strength} 
                    color="#ef4444" 
                  />
                  <PropertyBar 
                    label="Corrosion Resistance" 
                    value={currentMaterial.properties.corrosionResistance} 
                    color="#22c55e" 
                  />
                  <PropertyBar 
                    label="Workability" 
                    value={currentMaterial.properties.workability} 
                    color="#3b82f6" 
                  />
                  <PropertyBar 
                    label="Cost Effectiveness" 
                    value={currentMaterial.properties.cost} 
                    color="#f59e0b" 
                  />
                </div>

                <div className="bg-card border rounded-xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold mb-4">Applications</h4>
                  <div className="space-y-2">
                    {currentMaterial.applications.map((app, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Box className="w-4 h-4" />
                    <span>View in AR</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Finish Options */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Available Finishes</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {finishOptions.map((finish) => (
                <button
                  key={finish.id}
                  onClick={() => setSelectedFinish(finish.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    selectedFinish === finish.id
                      ? 'border-yellow-500 bg-yellow-500/10 shadow-lg'
                      : 'border-border hover:border-yellow-400/50 hover:shadow-md'
                  }`}
                >
                  <h5 className="font-semibold mb-1">{finish.name}</h5>
                  <p className="text-sm text-muted-foreground">{finish.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AR Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-card border rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">AR Preview</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Box className="w-16 h-16 text-yellow-500 mb-4 animate-spin mx-auto" />
                <p className="text-muted-foreground">AR Preview Loading...</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Point your camera at a flat surface to see how this material would look in your space.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MetalSampleViewer;
