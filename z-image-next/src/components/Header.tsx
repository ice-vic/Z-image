'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-lg' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-xl">
              Z
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Z-Image
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#features" className="nav-link">功能特点</a>
            <a href="#generator" className="nav-link">体验生成</a>
            <a href="#tech" className="nav-link">技术规格</a>
            <a href="#quickstart" className="nav-link">快速开始</a>
            <a href="#faq" className="nav-link">常见问题</a>
          </nav>

          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            立即体验
          </button>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-gray-300 hover:text-white transition-colors duration-300 relative;
        }

        .nav-link::after {
          content: '';
          @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300;
        }

        .nav-link:hover::after {
          @apply w-full;
        }
      `}</style>
    </header>
  );
}