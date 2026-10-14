import React from 'react';

export default function Intro() {
  return (
    <section id="intro" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5ECE1] via-[#FAF7F2] to-[#FAF7F2]">
      {/* Spline 3D iframe background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-CNSvvtA3TEkOLF28w8pjOKnX/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Spline 3D Greeting Robot"
          className="w-full h-full pointer-events-auto"
        ></iframe>
      </div>

      {/* Subtle overlay to ensure text legibility without blocking 3D interaction */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent pointer-events-none z-10"></div>

      {/* Center Content Overlay */}
      <div className="relative z-20 text-center px-6 pointer-events-none mt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-brand-sage/20 text-brand-primary text-xs md:text-sm font-semibold mb-6 animate-pulse-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          아이들의 미래를 가꾸는 교사
        </div>
        
        {/* 요청사항: 중앙 '이수경의 포트폴리오' */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tight mb-4 drop-shadow-sm font-sans">
          이수경의 포트폴리오
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
          따뜻한 눈높이 공감과 원장 자격의 전문적인 학급 경영 역량으로<br className="hidden sm:inline" />
          아이들이 매일 오고 싶은 행복한 유치원을 만듭니다.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold text-brand-dark pointer-events-auto">
          <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            🌱 보육교사 1급
          </span>
          <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            🏅 어린이집 원장 자격
          </span>
          <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            💻 PPT & HWP 실무 최상
          </span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-auto">
        <a href="#profile" className="flex flex-col items-center text-xs font-semibold text-brand-primary/80 hover:text-brand-dark transition-colors group">
          <span>스크롤하여 프로필 보기</span>
          <svg className="w-5 h-5 animate-bounce mt-1 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
