
import React, { useState } from 'react';

interface Suggestion {
  title: string;
  description: string;
  materials: string[];
  estimatedCost: string;
}

interface ChatMessage {
  type: 'user' | 'assistant';
  message: string;
  timestamp: string;
  suggestions?: Suggestion[];
}

const AIDesignAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'assistant',
      message: 'Hello! I\'m your AI Design Assistant. Tell me about your metal works project and I\'ll help you design something amazing!',
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sampleSuggestions: Suggestion[] = [
    {
      title: 'Modern Spiral Staircase',
      description: 'Elegant curved design with LED lighting integration',
      materials: ['Stainless Steel', 'Tempered Glass', 'LED Strips'],
      estimatedCost: '$8,500 - $12,000'
    },
    {
      title: 'Security Window Frames',
      description: 'Decorative burglarproof with artistic patterns',
      materials: ['Galvanized Steel', 'Powder Coating', 'Anti-Rust Treatment'],
      estimatedCost: '$350 - $500 per window'
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      type: 'user',
      message: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        type: 'assistant',
        message: 'Great idea! Based on your requirements, I\'ve generated some design suggestions for you.',
        timestamp: new Date().toLocaleTimeString(),
        suggestions: sampleSuggestions
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-110 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 animate-pulse"
          title="AI Design Assistant"
        >
          <i className="fas fa-magic text-xl"></i>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 h-96 bg-background border border-border rounded-2xl shadow-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <i className="fas fa-magic text-white text-sm"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm">AI Design Assistant</h3>
            <p className="text-xs text-muted-foreground">Powered by GPT-4</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="w-6 h-6 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
        >
          <i className="fas fa-times text-xs"></i>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${
              msg.type === 'user' 
                ? 'bg-gold-gradient text-white' 
                : 'bg-muted text-foreground'
            }`}>
              <p className="text-sm">{msg.message}</p>
              <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
              
              {msg.suggestions && (
                <div className="mt-3 space-y-2">
                  {msg.suggestions.map((suggestion, idx) => (
                    <div key={idx} className="bg-background/20 rounded-lg p-2">
                      <h4 className="font-semibold text-xs">{suggestion.title}</h4>
                      <p className="text-xs opacity-90">{suggestion.description}</p>
                      <p className="text-xs font-medium mt-1">{suggestion.estimatedCost}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Describe your project..."
            className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-gold-gradient text-white rounded-lg hover:scale-105 transition-all duration-300"
          >
            <i className="fas fa-paper-plane text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIDesignAssistant;
