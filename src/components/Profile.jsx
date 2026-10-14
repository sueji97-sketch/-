import React from 'react';

export default function Profile() {
  return (
    <section id="profile" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-xs font-bold tracking-widest text-brand-sage uppercase">
          01. Profile & Qualifications
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-brand-dark mt-2 tracking-tight">
          교사 이수경을 소개합니다
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl">
          인사 담당자님께서 가장 궁금해하시는 핵심 역량과 자격, 실무 능력을 투명하고 명확하게 정리했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Info Card & About Me (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main ID Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-sage/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light rounded-bl-full -z-0 opacity-60"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold mb-4">
                유치원 교사 / 보육교사
              </div>
              
              <h3 className="text-3xl font-extrabold text-brand-dark">이수경</h3>
              <p className="text-sm font-medium text-gray-500 mt-1">1997년 3월 28일생 (만 27세)</p>

              <div className="border-t border-gray-100 my-6"></div>

              {/* 내 소개 */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">교사 철학 및 소개</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  “아이들의 눈높이에서 경청하는 따뜻함과, 원장 자격 취득으로 다져진 체계적인 학급 운영 관리력을 겸비한 교사입니다.”
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>안전 제일주의:</strong> 작은 위험 요인도 선제적으로 예방하는 꼼꼼함</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>열린 소통:</strong> 학부모가 안심할 수 있는 정기적·투명한 피드백</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>놀이 중심:</strong> 2019 개정 누리과정에 맞춘 유아 주도적 배움 설계</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Fact Metric */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-cream border border-brand-sand/30 rounded-2xl p-5 text-center">
              <span className="text-2xl md:text-3xl font-black text-brand-dark">1급</span>
              <p className="text-xs font-semibold text-gray-600 mt-1">보육교사 최고 등급 자격</p>
            </div>
            <div className="bg-brand-cream border border-brand-sand/30 rounded-2xl p-5 text-center">
              <span className="text-2xl md:text-3xl font-black text-brand-coral">원장 자격</span>
              <p className="text-xs font-semibold text-gray-600 mt-1">어린이집 원장 자격 보유</p>
            </div>
          </div>
        </div>

        {/* Right Column: Certifications & Skills (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. 자격증 (Certifications) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-sage/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-sage">Certifications</span>
                <h4 className="text-xl font-bold text-brand-dark mt-0.5">보유 자격증</h4>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                공인 국가전문자격
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 보육교사 1급 자격증 */}
              <div className="p-5 rounded-2xl bg-[#F8FBF9] border border-emerald-100 hover:border-emerald-300 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-sm">
                    📜
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-base group-hover:text-emerald-700 transition-colors">
                      보육교사 1급 자격증
                    </h5>
                    <p className="text-xs text-gray-500">보건복지부 발행</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  풍부한 보육 실무 경험과 법정 승급 연수를 통해 취득한 보육교사 최상위 등급 자격입니다.
                </p>
                <div className="mt-4 pt-3 border-t border-emerald-100/60 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>현장 실무 및 학급 담임 자격</span>
                  <span className="text-emerald-500">Verified ✓</span>
                </div>
              </div>

              {/* 원장 자격증 */}
              <div className="p-5 rounded-2xl bg-[#FCF8F5] border border-orange-100 hover:border-orange-300 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-coral text-white flex items-center justify-center text-lg font-bold shadow-sm">
                    🏅
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-base group-hover:text-brand-coral transition-colors">
                      어린이집 원장 자격증
                    </h5>
                    <p className="text-xs text-gray-500">보건복지부 공인</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  원 운영 관리, 보육 행정, 재무 회계, 교직원 인사 관리 및 법적 평가 인증 전반을 아우르는 관리자 자격입니다.
                </p>
                <div className="mt-4 pt-3 border-t border-orange-100/60 flex items-center justify-between text-xs text-brand-coral font-semibold">
                  <span>기관 관리 및 평가인증 마스터</span>
                  <span className="text-orange-500">Verified ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 다룰 수 있는 Skill (파워포인트 & 한글) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-sage/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-sage">Practical Skills</span>
                <h4 className="text-xl font-bold text-brand-dark mt-0.5">실무 오피스 스킬</h4>
              </div>
              <span className="text-xs text-gray-400 font-medium">유치원·어린이집 실무 행정 기준</span>
            </div>

            <div className="space-y-6">
              {/* 한글 (HWP) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                      한
                    </span>
                    <span className="font-bold text-brand-dark text-sm md:text-base">한글 (HWP)</span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-semibold">최상 (Expert)</span>
                  </div>
                  <span className="text-sm font-extrabold text-blue-600">98%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pt-1">
                  • 연간/월간/주간/일일 교육계획안 작성 능숙<br />
                  • 관찰일지, 발달평가서, 운영일지, 행정 공문서 및 가정통신문 빠른 타이핑 및 스타일링 표준화
                </p>
              </div>

              {/* 파워포인트 (PPT) */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                      P
                    </span>
                    <span className="font-bold text-brand-dark text-sm md:text-base">파워포인트 (PPT)</span>
                    <span className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded font-semibold">상 (Advanced)</span>
                  </div>
                  <span className="text-sm font-extrabold text-orange-600">95%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pt-1">
                  • 유아 시각 집중을 돕는 애니메이션 및 멀티미디어 이야기 나누기 수업 자료 제작<br />
                  • 신입생 입학설명회 및 학부모 오리엔테이션용 고품질 프레젠테이션 디자인 역량
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
