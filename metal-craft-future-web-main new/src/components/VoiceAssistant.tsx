
import React, { useState, useEffect } from 'react';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const responses = {
    'services': 'We offer window frames, door frames, burglarproof, staircases, balustrades, and roof trusses.',
    'quote': 'I can help you get a quote! Please tell me what type of metal work you need.',
    'materials': 'We work with stainless steel, aluminum, copper, and titanium for premium results.',
    'location': 'We are located in Ghana and serve clients across the region.',
    'contact': 'You can contact us via WhatsApp, phone, or email. Would you like me to connect you?',
    'warranty': 'All our metal works come with a 5-year warranty and professional installation.',
    'default': 'I can help you with information about our services, quotes, materials, and more. What would you like to know?'
  };

  const startListening = () => {
    setIsListening(true);
    setTranscript('');
    
    // Simulate voice recognition
    setTimeout(() => {
      const phrases = [
        'What services do you offer?',
        'I need a quote for window frames',
        'Tell me about your materials',
        'Where are you located?',
        'How can I contact you?'
      ];
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setTranscript(randomPhrase);
      
      // Generate response
      const key = Object.keys(responses).find(k => 
        randomPhrase.toLowerCase().includes(k)
      ) || 'default';
      
      setTimeout(() => {
        setResponse(responses[key]);
        setIsListening(false);
      }, 1000);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-6 z-40">
      <div className={`transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        {/* Main Assistant Button */}
        <button
          onClick={isListening ? stopListening : startListening}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 ${
            isListening 
              ? 'bg-red-500 animate-pulse' 
              : 'bg-gradient-to-r from-purple-500 to-blue-500 animate-float'
          }`}
          title="Voice Assistant"
        >
          <i className={`fas ${isListening ? 'fa-stop' : 'fa-microphone'} text-xl`}></i>
        </button>

        {/* Voice Interaction Panel */}
        {(transcript || response || isListening) && (
          <div className="absolute bottom-20 left-0 w-80 bg-background border border-border rounded-2xl shadow-xl p-6 transform origin-bottom-left">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <i className="fas fa-robot text-white text-sm"></i>
              </div>
              <h3 className="font-semibold text-foreground">Voice Assistant</h3>
            </div>

            {isListening && (
              <div className="mb-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Listening...</span>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-blue-500 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {transcript && (
              <div className="mb-4">
                <div className="text-sm text-muted-foreground mb-1">You said:</div>
                <div className="bg-muted p-3 rounded-lg text-sm">
                  "{transcript}"
                </div>
              </div>
            )}

            {response && (
              <div className="mb-4">
                <div className="text-sm text-muted-foreground mb-1">Assistant:</div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-sm">
                  {response}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button 
                onClick={() => {
                  setTranscript('I need a quote');
                  setResponse(responses.quote);
                }}
                className="px-3 py-1 bg-gold-gradient text-white text-xs rounded-full hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </button>
              <button 
                onClick={() => {
                  setTranscript('What services do you offer?');
                  setResponse(responses.services);
                }}
                className="px-3 py-1 bg-metallic-gradient text-white text-xs rounded-full hover:scale-105 transition-all duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  setTranscript('Tell me about materials');
                  setResponse(responses.materials);
                }}
                className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:scale-105 transition-all duration-300"
              >
                Materials
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
