
import React from 'react';

const PortfolioModal = ({ item, onClose }) => {
  const shareToSocial = (platform) => {
    const text = `Check out this amazing ${item.title} by Next Century Metal Craft!`;
    const url = window.location.href;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
      instagram: `https://www.instagram.com/`, // Instagram doesn't support direct sharing, opens Instagram
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-4 metallic-text">{item.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {item.description}
          </p>

          {/* Share Section */}
          <div className="border-t border-border pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-share-alt mr-2 text-gold-500"></i>
              Share to Social Media
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => shareToSocial('facebook')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </button>
              <button
                onClick={() => shareToSocial('instagram')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </button>
              <button
                onClick={() => shareToSocial('whatsapp')}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => shareToSocial('twitter')}
                className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <i className="fab fa-x-twitter"></i>
                <span>X (Twitter)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
