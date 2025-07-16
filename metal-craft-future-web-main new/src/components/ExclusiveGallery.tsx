
import React, { useState } from 'react';

const ExclusiveGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'th' },
    { id: 'luxury-homes', name: 'Luxury Homes', icon: 'home' },
    { id: 'commercial', name: 'Commercial', icon: 'building' },
    { id: 'artistic', name: 'Artistic Works', icon: 'palette' },
    { id: 'security', name: 'Security Solutions', icon: 'shield-alt' }
  ];

  const exclusiveProjects = [
    {
      id: 1,
      title: 'Presidential Villa Staircase',
      category: 'luxury-homes',
      location: 'Cantonments, Accra',
      value: '$75,000',
      year: '2024',
      materials: ['316L Stainless Steel', 'Bronze Accents', 'Hardwood Treads'],
      description: 'A magnificent curved staircase featuring intricate metalwork and premium finishes.',
      images: [
        'https://i.pinimg.com/736x/e6/8a/55/e68a55ec7efea90d69ddad586baaf3f7.jpg',
        'https://i.pinimg.com/736x/e5/a6/e4/e5a6e48e5cbeba163eddf680c03e2113.jpg'
      ],
      exclusive: true
    },
    {
      id: 2,
      title: 'Corporate Headquarters Windows',
      category: 'commercial',
      location: 'Airport City, Accra',
      value: '$120,000',
      year: '2024',
      materials: ['Aluminum Composite', 'Tempered Glass', 'Steel Reinforcement'],
      description: 'Floor-to-ceiling window systems with integrated security features.',
      images: [
        'https://i.pinimg.com/1200x/41/c3/c8/41c3c8a6a7a174b15b5de0432f32f454.jpg',
        'https://i.pinimg.com/1200x/75/35/42/753542f936ee908e0c2c171d0c9e9a12.jpg'
      ],
      exclusive: true
    },
    {
      id: 3,
      title: 'Luxury Hotel Door Systems',
      category: 'artistic',
      location: 'Ridge, Accra',
      value: '$95,000',
      year: '2023',
      materials: ['Premium Steel', 'Bronze Inlays', 'Smart Lock Integration'],
      description: 'Custom door frames with artistic metalwork and modern automation.',
      images: [
        'https://i.pinimg.com/736x/5e/de/95/5ede955cf9cf9fbc11dfdb980cdae1a3.jpg',
        'https://i.pinimg.com/736x/79/54/c5/7954c5d87dcea8ba44fe8634ea64f99a.jpg'
      ],
      exclusive: false
    },
    {
      id: 4,
      title: 'High-Security Compound Gates',
      category: 'security',
      location: 'East Legon, Accra',
      value: '$85,000',
      year: '2024',
      materials: ['Reinforced Steel', 'Anti-Climb Features', 'Biometric Access'],
      description: 'Advanced security burglarproof systems with integrated surveillance.',
      images: [
        'https://i.pinimg.com/736x/c6/7c/c3/c67cc3c1ebacd84f5d23f16348b410b1.jpg',
        'https://i.pinimg.com/736x/00/08/2e/00082eb8dc5241116cff242c521436c1.jpg'
      ],
      exclusive: true
    },
    {
      id: 5,
      title: 'Architectural Balustrade Art',
      category: 'artistic',
      location: 'Accra Mall Complex',
      value: '$65,000',
      year: '2024',
      materials: ['Stainless Steel', 'Glass Panels', 'LED Integration'],
      description: 'Artistic balustrade systems combining functionality with visual appeal.',
      images: [
        'https://i.pinimg.com/1200x/fa/e0/2d/fae02ddd947a4f900587aae936446229.jpg',
        'https://i.pinimg.com/1200x/29/3c/36/293c36629e6551dc3368815309397ef3.jpg'
      ],
      exclusive: true
    },
    {
      id: 6,
      title: 'Stadium Roof Truss System',
      category: 'commercial',
      location: 'Tema Sports Complex',
      value: '$250,000',
      year: '2023',
      materials: ['Heavy Steel Trusses', 'Weather Coating', 'Seismic Supports'],
      description: 'Large-span roof truss system for major sports facility.',
      images: [
        'https://i.pinimg.com/1200x/f7/86/70/f786703c25747ce48a0449d5e07dd032.jpg',
        'https://i.pinimg.com/736x/58/05/d1/5805d1282c2fbe9def6aeaa89b7f1b1b.jpg'
      ],
      exclusive: true
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? exclusiveProjects 
    : exclusiveProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="metallic-text">Exclusive </span>
            <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our most prestigious projects and exclusive craftsmanship reserved for VIP clients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gold-gradient text-white shadow-lg scale-105'
                  : 'bg-card border hover:border-gold-400/50 hover:scale-102'
              }`}
            >
              <i className={`fas fa-${category.icon}`}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="card-metallic overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                {project.exclusive && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-gradient text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <i className="fas fa-crown"></i>
                      <span>VIP Exclusive</span>
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-xs opacity-90">{project.location}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold gold-text">{project.value}</span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.materials.slice(0, 2).map((material, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {material}
                    </span>
                  ))}
                  {project.materials.length > 2 && (
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      +{project.materials.length - 2} more
                    </span>
                  )}
                </div>

                <button className="w-full btn-metallic py-2 rounded-lg hover:scale-105 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="card-metallic max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <i className="fas fa-times"></i>
                </button>

                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div>
                    <img 
                      src={selectedProject.images[0]} 
                      alt={selectedProject.title}
                      className="w-full h-80 object-cover rounded-lg mb-4"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.images.slice(1).map((img, idx) => (
                        <img 
                          key={idx}
                          src={img} 
                          alt={`${selectedProject.title} ${idx + 2}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                      {selectedProject.exclusive && (
                        <span className="bg-gold-gradient text-white px-2 py-1 rounded-full text-xs">
                          <i className="fas fa-crown mr-1"></i>VIP
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{selectedProject.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Project Value</p>
                        <p className="font-medium gold-text">{selectedProject.value}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-medium">{selectedProject.year}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-medium capitalize">{selectedProject.category.replace('-', ' ')}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Description</p>
                      <p className="text-sm">{selectedProject.description}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Materials Used</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.materials.map((material, idx) => (
                          <span key={idx} className="bg-muted px-3 py-1 rounded-full text-xs">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex-1 btn-gold py-3 rounded-lg hover:scale-105 transition-all duration-300">
                        <i className="fas fa-quote-left mr-2"></i>
                        Request Similar Project
                      </button>
                      <button className="btn-metallic px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                        <i className="fas fa-share-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Want to See More Exclusive Projects?</h3>
          <p className="text-muted-foreground mb-6">
            Join our VIP program to access our complete portfolio of luxury projects
          </p>
          <button className="btn-gold px-8 py-4 text-lg rounded-full hover:scale-110 transition-all duration-300">
            <span className="flex items-center space-x-2">
              <i className="fas fa-crown"></i>
              <span>Become VIP Member</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveGallery;
