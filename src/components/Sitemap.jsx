import React from 'react';

export default function Sitemap() {
  return (
    <footer id="sitemap" className="bg-brand-dark text-white pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Call to Action: Resume PDF Download Banner */}
        <div className="bg-gradient-to-r from-brand-primary to-[#2C4F40] rounded-3xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Download Full Resume & Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              이수경 교사의 상세 이력서가 필요하신가요?
            </h3>
            <p className="text-emerald-100/80 text-sm sm:text-base mt-2 max-w-xl">
              보육교사 1급 및 원장 자격 내역, 상세 실무 경력과 연간 계획안 포트폴리오를 한눈에 보실 수 있는 PDF 파일입니다.
            </p>
          </div>

          <a
            href="/assets/resume_leesoogyeong.pdf"
            download="이수경_유치원교사_이력서.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand-dark font-extrabold text-base hover:bg-emerald-50 transition-all shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>이력서 PDF 다운로드</span>
            <span className="text-xl">📥</span>
          </a>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                이
              </span>
              <span className="text-xl font-bold tracking-tight">이수경</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              아이들의 눈높이에서 공감하고, 원장 자격의 전문적인 학급 경영 역량으로 함께하는 유치원 교사입니다.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              1997.03.28 | 보육교사 1급 | 어린이집 원장 자격
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#intro" className="hover:text-emerald-400 transition-colors">01. Intro (3D 로봇 인트로)</a>
              </li>
              <li>
                <a href="#profile" className="hover:text-emerald-400 transition-colors">02. Profile (소개 · 자격증 · 스킬)</a>
              </li>
              <li>
                <a href="#project" className="hover:text-emerald-400 transition-colors">03. Project (5대 교육 프로젝트)</a>
              </li>
              <li>
                <a href="#hobby" className="hover:text-emerald-400 transition-colors">04. Hobby (취미 및 교사 특기)</a>
              </li>
              <li>
                <a href="#sitemap" className="hover:text-emerald-400 transition-colors">05. Sitemap & Resume</a>
              </li>
            </ul>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Qualifications</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✔</span> 보육교사 1급 자격증
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✔</span> 어린이집 원장 자격증
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✔</span> 한글 (HWP) 실무 최상 (98%)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✔</span> 파워포인트 (PPT) 실무 상 (95%)
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Contact</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <p>📧 이메일: <span className="text-emerald-300">soogyeong.lee@example.com</span></p>
              <p>📍 희망 근무지: 서울 및 수도권</p>
              <p>💼 입사 가능 시기: 즉시 협의 가능</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Lee Soo Gyeong. All rights reserved.</p>
          <p className="text-gray-400">
            Designed for Kindergarten & Childcare Teacher Hiring.
          </p>
        </div>
      </div>
    </footer>
  );
}
