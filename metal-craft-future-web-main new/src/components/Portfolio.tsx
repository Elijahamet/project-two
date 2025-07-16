
import React, { useState } from 'react';
import PortfolioModal from './PortfolioModal';
import AdminUpload from './AdminUpload';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAdminUpload, setShowAdminUpload] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState([
    // Staircases (10 images)
    {
      id: 1,
      title: 'Modern Spiral Staircase',
      category: 'staircases',
      image: 'https://i.pinimg.com/736x/0b/c9/f7/0bc9f7eea34aed39588412ba22005d6d.jpg',
      description: 'Elegant spiral staircase with premium steel construction and modern design.'
    },
    {
      id: 2,
      title: 'Industrial Steel Staircase',
      category: 'staircases',
      image: 'https://i.pinimg.com/1200x/ca/79/4e/ca794ef9555fdce4b8dfb7ed4a49a276.jpg',
      description: 'Heavy-duty industrial staircase for commercial applications.'
    },
    {
      id: 3,
      title: 'Residential Curved Staircase',
      category: 'staircases',
      image: 'https://i.pinimg.com/1200x/4b/f8/a3/4bf8a360e545d800807ec0718e901b92.jpg',
      description: 'Custom curved staircase with wooden treads and steel frame.'
    },
    {
      id: 4,
      title: 'Floating Steel Stairs',
      category: 'staircases',
      image: 'https://i.pinimg.com/1200x/6f/c8/59/6fc859fff36d2f3c2b23502abbca9a5b.jpg',
      description: 'Modern floating staircase with minimalist design.'
    },
    {
      id: 5,
      title: 'External Fire Escape Stairs',
      category: 'staircases',
      image: 'https://i.pinimg.com/736x/6a/08/b7/6a08b7e36b9f9c0cf1d7a09069ae635c.jpg',
      description: 'Safety-compliant external fire escape staircase.'
    },
    {
      id: 6,
      title: 'Luxury Home Staircase',
      category: 'staircases',
      image: 'https://i.pinimg.com/1200x/da/25/09/da2509700100694f3269ad3c9f913396.jpg',
      description: 'Premium residential staircase with custom railings.'
    },
    {
      id: 7,
      title: 'Office Building Staircase',
      category: 'staircases',
      image: 'https://i.pinimg.com/736x/f2/b2/31/f2b2318ec42065f0f4adfe2eff30f036.jpg',
      description: 'Commercial-grade staircase for office buildings.'
    },
    {
      id: 8,
      title: 'Decorative Interior Stairs',
      category: 'staircases',
      image: 'https://i.pinimg.com/1200x/ae/e1/f1/aee1f1a7c090d19a97482b0c2374cc69.jpg',
      description: 'Ornate interior staircase with decorative metalwork.'
    },
    {
      id: 9,
      title: 'Compact Space Staircase',
      category: 'staircases',
      image: 'https://i.pinimg.com/736x/28/01/90/28019021f90200399084150662d18d45.jpg',
      description: 'Space-efficient staircase design for small areas.'
    },
    {
      id: 10,
      title: 'Custom Helical Staircase',
      category: 'staircases',
      image: 'https://i.pinimg.com/736x/c5/72/77/c572770e5a9d71477f1edd979cac8597.jpg',
      description: 'Architectural helical staircase with premium finish.'
    },

    // Window Frames (10 images)
    {
      id: 11,
      title: 'Modern Aluminum Windows',
      category: 'window-frames',
      image: 'https://i.pinimg.com/736x/27/80/b9/2780b9dc032f55b30fbfcba479674c89.jpg',
      description: 'Sleek aluminum window frames with thermal insulation.'
    },
    {
      id: 12,
      title: 'Steel Security Windows',
      category: 'window-frames',
      image: 'https://i.pinimg.com/1200x/b3/36/37/b33637b06ca08f5a1a50ac414553dd10.jpg',
      description: 'High-security steel window frames with reinforced glass.'
    },
    {
      id: 13,
      title: 'Commercial Curtain Wall',
      category: 'window-frames',
      image: 'https://i.pinimg.com/736x/bc/08/a1/bc08a1258a10aba6aa8106ac4d56e3f7.jpg',
      description: 'Large-scale curtain wall system for commercial buildings.'
    },
    {
      id: 14,
      title: 'Residential Bay Windows',
      category: 'window-frames',
      image: 'https://i.pinimg.com/1200x/5f/6c/5b/5f6c5bf8bf059f9f5083c74b8d493ec7.jpg',
      description: 'Custom bay window frames for residential applications.'
    },
    {
      id: 15,
      title: 'Industrial Window Systems',
      category: 'window-frames',
      image: 'https://i.pinimg.com/1200x/eb/46/02/eb4602f3dc00f3cd19aff70be032cd75.jpg',
      description: 'Heavy-duty window systems for industrial facilities.'
    },
    {
      id: 16,
      title: 'Custom Arched Windows',
      category: 'window-frames',
      image: 'https://i.pinimg.com/736x/d8/5b/06/d85b06ac1afa5b4855dfc82278c8bbbb.jpg',
      description: 'Architectural arched window frames with custom design.'
    },
    {
      id: 17,
      title: 'Double Glazed Frames',
      category: 'window-frames',
      image: 'https://i.pinimg.com/1200x/43/d3/c7/43d3c71d468378473abb03b7d5a35c9e.jpg',
      description: 'Energy-efficient double glazed window frames.'
    },
    {
      id: 18,
      title: 'Decorative Window Guards',
      category: 'window-frames',
      image: 'https://i.pinimg.com/736x/76/74/ee/7674ee9a4895bd21550c32e11ecbc557.jpg',
      description: 'Ornate window frames with integrated security features.'
    },
    {
      id: 19,
      title: 'Sliding Window Systems',
      category: 'window-frames',
      image: 'https://i.pinimg.com/736x/b9/55/01/b95501e0e48781a5b578cff4962dd28d.jpg',
      description: 'Smooth-operating sliding window frame systems.'
    },
    {
      id: 20,
      title: 'Heritage Window Restoration',
      category: 'window-frames',
      image: 'https://i.pinimg.com/1200x/ee/74/81/ee748115801590b6e1c2bd3431bc48c3.jpg',
      description: 'Restored heritage window frames maintaining original character.'
    },

    // Door Frames (10 images)
    {
      id: 21,
      title: 'Premium Steel Door Frames',
      category: 'door-frames',
      image: 'https://i.pinimg.com/1200x/86/76/20/8676208ec8ee17b9db661e6340da6289.jpg',
      description: 'High-security steel door frames for commercial use.'
    },
    {
      id: 22,
      title: 'Residential Entry Doors',
      category: 'door-frames',
      image: 'https://i.pinimg.com/736x/fd/2c/53/fd2c53dab09583c3d1ee0c45267bce15.jpg',
      description: 'Elegant residential door frames with modern styling.'
    },
    {
      id: 23,
      title: 'Fire-Rated Door Systems',
      category: 'door-frames',
      image: 'https://i.pinimg.com/1200x/8b/3c/e2/8b3ce2ca1eb34ab42a9effbb24c4c892.jpg',
      description: 'Safety-compliant fire-rated door frame systems.'
    },
    {
      id: 24,
      title: 'Double Door Entrances',
      category: 'door-frames',
      image: 'https://i.pinimg.com/736x/60/5c/f7/605cf78f876caa8107f1e1b89192a312.jpg',
      description: 'Grand double door frames for impressive entrances.'
    },
    {
      id: 25,
      title: 'Automated Door Systems',
      category: 'door-frames',
      image: 'https://i.pinimg.com/1200x/fe/1b/ad/fe1badd64a45bd22802bc23aa0a23bab.jpg',
      description: 'Modern automated door frames with sensor integration.'
    },
    {
      id: 26,
      title: 'Security Door Frames',
      category: 'door-frames',
      image: 'https://i.pinimg.com/1200x/7d/85/a0/7d85a0417716a6a3a756524870e299da.jpg',
      description: 'Reinforced security door frames for high-risk areas.'
    },
    {
      id: 27,
      title: 'Glass Door Systems frames',
      category: 'door-frames',
      image: 'https://i.pinimg.com/736x/3a/0c/49/3a0c49d4be13cf47952a52cb10829430.jpg',
      description: 'Sleek glass door frames for modern buildings.'
    },
    {
      id: 28,
      title: 'Emergency Exit Doors',
      category: 'door-frames',
      image: 'https://i.pinimg.com/736x/ef/62/6a/ef626a82574696fb06431e64069a39d7.jpg',
      description: 'Code-compliant emergency exit door frames.'
    },
    {
      id: 29,
      title: 'Custom Pivot Doors',
      category: 'door-frames',
      image: 'https://i.pinimg.com/736x/de/3a/d4/de3ad4434f2a58860a813f0fe6ae3e5b.jpg',
      description: 'Architectural pivot door frames with smooth operation.'
    },
    {
      id: 30,
      title: 'Blast-Resistant Frames',
      category: 'door-frames',
      image: 'https://i.pinimg.com/1200x/71/b4/f6/71b4f6718956c7dd525b41f9b800ec5a.jpg',
      description: 'Specialized blast-resistant door frame systems.'
    },

    // Burglarproofs (10 images)
    {
      id: 31,
      title: 'Decorative Security Grilles',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/736x/44/9c/d3/449cd37ae909d0f4b5a8273985b3ff61.jpg',
      description: 'Elegant burglarproof designs combining security with aesthetics.'
    },
    {
      id: 32,
      title: 'Heavy Duty Window Guards',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/736x/a9/2c/fc/a92cfcae1df4a064ee91a38a4603984d.jpg',
      description: 'Industrial-strength window security systems.'
    },
    {
      id: 33,
      title: 'Residential Security Bars',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/1200x/a0/a3/c3/a0a3c34db322c6221bc1cc3a4885a0ca.jpg',
      description: 'Residential burglarproof bars with modern styling.'
    },
    {
      id: 34,
      title: 'Commercial Security Grilles',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/1200x/6d/16/de/6d16dee4a5b8004d5469423d0a4fb2b1.jpg',
      description: 'Commercial-grade security grille systems.'
    },
    {
      id: 35,
      title: 'Artistic Security Features',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/736x/32/5d/4e/325d4e69f44381864abf12953c73b29d.jpg',
      description: 'Burglarproof designs with artistic metalwork elements.'
    },
    {
      id: 36,
      title: 'Sliding Security Gates',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/1200x/0f/e9/ea/0fe9ea7bd91e2f09a9a16e488d859bbc.jpg',
      description: 'Retractable security gates for flexible protection.'
    },
    {
      id: 37,
      title: 'Perimeter Security Fencing',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/1200x/58/1d/ba/581dba56efda76a7df49af34bb253ebc.jpg',
      description: 'Comprehensive perimeter security solutions.'
    },
    {
      id: 38,
      title: 'Door Security Reinforcement',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/1200x/8a/8b/55/8a8b55a0fec349f69cc6dfb17cbdb79e.jpg',
      description: 'Additional door security reinforcement systems.'
    },
    {
      id: 39,
      title: 'Custom Security Solutions',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/1200x/b2/6d/7d/b26d7d14709c494436445ad3ab03a8e9.jpg',
      description: 'Tailored burglarproof solutions for specific needs.'
    },
    {
      id: 40,
      title: 'High-Rise Security Systems',
      category: 'burglarproofs',
      image: 'https://i.pinimg.com/736x/a2/29/28/a22928487f71e00ab1997a25f181fcbd.jpg',
      description: 'Specialized security systems for tall buildings.'
    },

    // Balustrades (10 images)
    {
      id: 41,
      title: 'Modern Glass Balustrades',
      category: 'balustrades',
      image: 'https://i.pinimg.com/1200x/da/00/68/da0068795af109fd650547f7241178e9.jpg',
      description: 'Contemporary glass balustrade systems with steel frames.'
    },
    {
      id: 42,
      title: 'Decorative Stair Railings',
      category: 'balustrades',
      image: 'https://i.pinimg.com/736x/be/7b/6e/be7b6e99be170d1aa7301d8cabb547d1.jpg',
      description: 'Ornate balustrades with intricate metalwork patterns.'
    },
    {
      id: 43,
      title: 'Balcony Safety Rails',
      category: 'balustrades',
      image: 'https://i.pinimg.com/1200x/ae/02/fa/ae02fa4436f25320698b265daa7548c5.jpg',
      description: 'Safe and stylish balcony balustrade systems.'
    },
    {
      id: 44,
      title: 'Industrial Handrails',
      category: 'balustrades',
      image: 'https://i.pinimg.com/736x/96/fa/cc/96facc2e12d1c6d4f03dcfb0ebb2247d.jpg',
      description: 'Heavy-duty industrial balustrade systems.'
    },
    {
      id: 45,
      title: 'Curved Staircase Rails',
      category: 'balustrades',
      image: 'https://i.pinimg.com/1200x/33/cb/84/33cb84c979d5b926db0fc5dd3f096879.jpg',
      description: 'Custom curved balustrades for spiral staircases.'
    },
    {
      id: 46,
      title: 'Rooftop Safety Barriers',
      category: 'balustrades',
      image: 'https://i.pinimg.com/736x/9a/17/5f/9a175fe242f2fedb998cf797d96b9f17.jpg',
      description: 'Safety-compliant rooftop balustrade systems.'
    },
    {
      id: 47,
      title: 'Architectural Railings',
      category: 'balustrades',
      image: 'https://i.pinimg.com/736x/47/98/2c/47982c943beee626082c85084656f638.jpg',
      description: 'Designer balustrades for architectural features.'
    },
    {
      id: 48,
      title: 'Pool Safety Barriers',
      category: 'balustrades',
      image: 'https://i.pinimg.com/736x/7b/52/a4/7b52a46046c9b55f2d09f418f602d298.jpg',
      description: 'Pool-compliant safety balustrade systems.'
    },
    {
      id: 49,
      title: 'Mezzanine Railings',
      category: 'balustrades',
      image: 'https://i.pinimg.com/736x/31/68/6c/31686c9a25788d65c73da5a95b6fafd0.jpg',
      description: 'Balustrades for mezzanine floor applications.'
    },
    {
      id: 50,
      title: 'External Walkway Rails',
      category: 'balustrades',
      image: 'https://i.pinimg.com/1200x/26/14/65/2614650f9a61058802f17507d60fefee.jpg',
      description: 'Weather-resistant external balustrade systems.'
    },

    // Roof Trusses (10 images)
    {
      id: 51,
      title: 'Industrial Roof Trusses',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/6b/37/fa/6b37faef3d0c4ccad1cc7d266723c1e5.jpg',
      description: 'Heavy-duty steel roof trusses for industrial buildings.'
    },
    {
      id: 52,
      title: 'Residential Truss Systems',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/cd/49/d3/cd49d3d302a5f99de6232fa34dd041f6.jpg',
      description: 'Residential roof truss systems with modern design.'
    },
    {
      id: 53,
      title: 'Long-Span Roof Structures',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/b3/57/19/b357191c6f94fbbb823026a40ce26ad9.jpg',
      description: 'Large-span roof trusses for warehouses and halls.'
    },
    {
      id: 54,
      title: 'Architectural Roof Features',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/c3/ee/08/c3ee0830288382f5caf6b0f398f7332a.jpg',
      description: 'Designer roof trusses with architectural appeal.'
    },
    {
      id: 55,
      title: 'Stadium Roof Systems',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/736x/8f/49/d0/8f49d0c4e0791c97e33eef7ab0fb29f8.jpg',
      description: 'Complex roof truss systems for sports facilities.'
    },
    {
      id: 56,
      title: 'Warehouse Roofing',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/7c/7e/3c/7c7e3c4d240bc68446be0bd62c1617e6.jpg',
      description: 'Efficient warehouse roof truss installations.'
    },
    {
      id: 57,
      title: 'School Building Trusses',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/76/af/65/76af653609277f62b1ded23682f42222.jpg',
      description: 'Educational facility roof truss systems.'
    },
    {
      id: 58,
      title: 'Church Roof Structures',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/d9/d5/78/d9d5780523e51ba581adb9048566bf46.jpg',
      description: 'Traditional and modern church roof trusses.'
    },
    {
      id: 59,
      title: 'Commercial Building Roofs',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/3d/71/2c/3d712c6df53294e5777332a1fb8d30ed.jpg',
      description: 'Commercial-grade roof truss installations.'
    },
    {
      id: 60,
      title: 'Custom Curved Trusses',
      category: 'roof-trusses',
      image: 'https://i.pinimg.com/1200x/3d/71/2c/3d712c6df53294e5777332a1fb8d30ed.jpg',
      description: 'Specialized curved roof truss designs.'
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th' },
    { id: 'window-frames', name: 'Window Frames', icon: 'fas fa-window-maximize' },
    { id: 'door-frames', name: 'Door Frames', icon: 'fas fa-door-open' },
    { id: 'burglarproofs', name: 'Burglarproofs', icon: 'fas fa-shield-alt' },
    { id: 'staircases', name: 'Staircases', icon: 'fas fa-level-up-alt' },
    { id: 'balustrades', name: 'Balustrades', icon: 'fas fa-grip-lines' },
    { id: 'roof-trusses', name: 'Roof Trusses', icon: 'fas fa-home' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const addNewItem = (newItem) => {
    const item = {
      id: Date.now(),
      ...newItem
    };
    setPortfolioItems([...portfolioItems, item]);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              <span className="metallic-text">Our </span>
              <span className="gold-text">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse collection of premium metal works, showcasing our expertise 
              and commitment to excellence in every project.
            </p>
          </div>

          {/* Admin Upload Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowAdminUpload(true)}
              className="btn-gold"
            >
              <i className="fas fa-plus mr-2"></i>
              Add New Work
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gold-gradient text-white shadow-lg scale-105'
                    : 'bg-white/10 text-foreground hover:bg-white/20 border border-white/20'
                }`}
              >
                <i className={`${category.icon} text-sm`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="card-metallic overflow-hidden group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <i className="fas fa-search-plus text-3xl mb-2"></i>
                      <p className="text-sm">Click to view details</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gold-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-6xl text-muted-foreground/50 mb-4"></i>
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Portfolio Modal */}
      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Admin Upload Modal */}
      {showAdminUpload && (
        <AdminUpload
          onClose={() => setShowAdminUpload(false)}
          onAdd={addNewItem}
        />
      )}
    </section>
  );
};

export default Portfolio;
