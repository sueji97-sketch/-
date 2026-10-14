import React from 'react';

export default function Hobby() {
  const hobbies = [
    {
      id: 1,
      title: "펠트 & 친환경 DIY 교구 제작",
      tag: "손재주 & 창의력",
      icon: "✂️",
      desc: "아이들의 발달 단계에 맞춘 촉감 주머니, 손인형, 찍찍이 융판 교구를 직접 만듭니다. 유아들의 오감 자극과 흥미 유발에 큰 도움이 됩니다.",
      highlight: "누리과정 맞춤형 교구 30여 종 자체 제작"
    },
    {
      id: 2,
      title: "동화 구연 및 아동 그림책 큐레이션",
      tag: "음성 표현 & 스토리텔링",
      icon: "📚",
      desc: "목소리 톤과 생생한 표정 연기를 연구하여 이야기 나누기 시간에 아이들이 몰입할 수 있도록 지도합니다. 매달 주제별 추천 그림책 코너를 운영합니다.",
      highlight: "유아 집중도 향상 및 언어 어휘력 확장"
    },
    {
      id: 3,
      title: "반려식물 가꾸기 & 실내 원예",
      tag: "생명 존중 & 인내심",
      icon: "🌱",
      desc: "작은 씨앗이 싹을 틔우고 자라는 과정을 돌보며 배운 따뜻한 인내심으로 아이들을 대합니다. 원내 자연 관찰 코너를 생동감 있게 가꿉니다.",
      highlight: "생태 놀이 및 사계절 관찰일기와 연계"
    }
  ];

  return (
    <section id="hobby" className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-sand/20">
      <div className="mb-12">
        <span className="text-xs font-bold tracking-widest text-brand-sage uppercase">
          03. Personal Interests & Special Skills
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-brand-dark mt-2 tracking-tight">
          아이들과 만나는 또 다른 힘, 취미 & 특기
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl">
          교사의 일상과 취미는 수업의 질과 직결됩니다. 유아 교육 현장에서 긍정적인 시너지를 내는 관심사입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbies.map((h) => (
          <div
            key={h.id}
            className="bg-white rounded-3xl p-8 border border-brand-sage/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-light text-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {h.icon}
              </div>
              <span className="text-xs font-bold text-brand-sage bg-brand-light/70 px-2.5 py-1 rounded-md">
                {h.tag}
              </span>
              <h3 className="text-xl font-bold text-brand-dark mt-3 mb-2">
                {h.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {h.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-brand-primary">
              <span>🌟</span>
              <span>{h.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
