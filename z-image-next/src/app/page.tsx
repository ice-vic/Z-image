'use client';

import { useState, useEffect } from 'react';
import '../styles/generator.css';
import '../styles/components.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import ImageGenerator from '@/components/ImageGenerator';
import Performance from '@/components/Performance';
import Architecture from '@/components/Architecture';
import QuickStart from '@/components/QuickStart';
import Tutorials from '@/components/Tutorials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className={`min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden ${isLoaded ? 'loaded' : ''}`}>
        <Header />
        <Hero />
        <ImageGenerator />
        <Features />
        <TechStack />
        <Performance />
        <Architecture />
        <QuickStart />
        <Tutorials />
        <FAQ />
        <Footer />
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}