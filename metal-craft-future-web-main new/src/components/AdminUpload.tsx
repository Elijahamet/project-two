import React, { useState } from 'react';

const AdminUpload = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'window-frames',
    description: '',
    image: ''
  });

  const categories = [
    { id: 'window-frames', name: 'Window Frames' },
    { id: 'door-frames', name: 'Door Frames' },
    { id: 'burglarproofs', name: 'Burglarproofs' },
    { id: 'staircases', name: 'Staircases' },
    { id: 'balustrades', name: 'Balustrades' },
    { id: 'roof-trusses', name: 'Roof Trusses' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.image) {
      onAdd(formData);
      onClose();
      
      // Show sharing options
      if (window.confirm('Work added successfully! Would you like to share this on social media?')) {
        shareToAllPlatforms();
      }
    }
  };

  const shareToAllPlatforms = () => {
    const text = `🔥 New work alert! Check out our latest ${formData.title} at Next Century Metal Craft. Crafting metal masterpieces for the future! ⚡`;
    const url = window.location.href;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
      instagram: `https://www.instagram.com/`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    };

    // Open all platforms (user can choose which ones to actually post to)
    Object.values(shareUrls).forEach((url, index) => {
      setTimeout(() => {
        window.open(url, '_blank', 'width=600,height=400');
      }, index * 1000); // Stagger the opening by 1 second
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setFormData({ ...formData, image: result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold metallic-text">Add New Work</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Project Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="Enter project title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500 h-24 resize-none"
                placeholder="Describe the project"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Project Image</label>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-3 border border-border rounded-lg bg-background file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-metallic-gradient file:text-white file:cursor-pointer"
                />
                <div className="text-center text-sm text-muted-foreground">OR</div>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            {formData.image && (
              <div>
                <label className="block text-sm font-semibold mb-2">Preview</label>
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-6 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-gold"
              >
                <i className="fas fa-plus mr-2"></i>
                Add Work & Share
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpload;
