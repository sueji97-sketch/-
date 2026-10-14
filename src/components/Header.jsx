import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#intro" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-105 transition-transform">
            이
          </span>
          <span className="font-bold text-lg text-brand-dark tracking-tight">
            이수경 <span className="text-xs font-normal text-brand-sage ml-1">유치원 교사 포트폴리오</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#intro" className="hover:text-brand-primary transition-colors">Intro</a>
          <a href="#profile" className="hover:text-brand-primary transition-colors">Profile</a>
          <a href="#project" className="hover:text-brand-primary transition-colors">Project</a>
          <a href="#hobby" className="hover:text-brand-primary transition-colors">Hobby</a>
          <a href="#sitemap" className="hover:text-brand-primary transition-colors">Sitemap</a>
        </nav>

        <a
          href="/assets/resume_leesoogyeong.pdf"
          download
          className="text-xs md:text-sm font-semibold bg-brand-primary hover:bg-brand-dark text-white px-4 py-2 rounded-full transition-all shadow-sm hover:shadow"
        >
          이력서 PDF 📥
        </a>
      </div>
    </header>
  );
}
