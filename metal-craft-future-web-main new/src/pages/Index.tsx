
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import InteractiveMetalVisualizer from '../components/InteractiveMetalVisualizer';
import SmartQuoteCalculator from '../components/SmartQuoteCalculator';
import MetalSampleViewer from '../components/MetalSampleViewer';
import AIDesignAssistant from '../components/AIDesignAssistant';
import LiveProjectTracker from '../components/LiveProjectTracker';
import PremiumMembership from '../components/PremiumMembership';
import VIPPortal from '../components/VIPPortal';
import ExclusiveGallery from '../components/ExclusiveGallery';
import ARPreview from '../components/ARPreview';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import VoiceAssistant from '../components/VoiceAssistant';
import ParticleAnimation from '../components/ParticleAnimation';
import QuoteModal from '../components/QuoteModal';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ParticleAnimation />
        <Header />
        <Hero />
        <About />
        <InteractiveMetalVisualizer />
        <MetalSampleViewer />
        <SmartQuoteCalculator />
        <AIDesignAssistant />
        <LiveProjectTracker />
        <PremiumMembership />
        <VIPPortal />
        <ExclusiveGallery />
        <ARPreview />
        <Portfolio />
        <Testimonials />
        <Location />
        <Contact />
        <Footer />
        <FloatingButtons />
        <VoiceAssistant />
        <QuoteModal />
      </div>
    </ThemeProvider>
  );
};

export default Index;
