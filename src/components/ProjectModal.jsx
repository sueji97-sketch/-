import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 border border-gray-100 flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur px-6 sm:px-8 py-5 border-b border-gray-100 flex items-center justify-between z-20">
          <div>
            <span className="text-xs font-bold text-brand-sage uppercase">Project Details</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Top Info Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-brand-light/60 border border-brand-sage/20 text-xs sm:text-sm">
            <span className="font-semibold text-brand-dark">
              🏷️ 분야: <strong className="text-brand-primary">{project.category}</strong>
            </span>
            <span className="font-medium text-gray-600">
              🗓️ 수행 기간: {project.period}
            </span>
            <span className="font-mono bg-white px-2.5 py-1 rounded-md border text-brand-sage text-xs">
              📁 {project.imageFilename}
            </span>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">프로젝트 개요</h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium bg-gray-50 p-4 rounded-xl border border-gray-100">
              {project.summary}
            </p>
          </div>

          {/* Detailed Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-xs">
              <h5 className="font-bold text-brand-dark text-sm mb-1.5 flex items-center gap-2">
                <span>🎯</span> 교육 및 추진 목표
              </h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {project.details.goals}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-xs">
              <h5 className="font-bold text-brand-dark text-sm mb-1.5 flex items-center gap-2">
                <span>👩‍🏫</span> 지원자(이수경)의 역할
              </h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {project.details.role}
              </p>
            </div>
          </div>

          {/* Skills & Tools Used */}
          <div className="p-5 rounded-2xl border border-brand-sage/20 bg-[#F7FAF8]">
            <h5 className="font-bold text-brand-dark text-sm mb-2 flex items-center gap-2">
              <span>💻</span> 활용 스킬 및 오피스 역량
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.details.skills.map((skill, idx) => (
                <span key={idx} className="text-xs bg-white text-brand-dark px-3 py-1.5 rounded-lg border border-brand-sage/20 font-semibold shadow-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes & Feedback */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <h5 className="font-bold text-amber-900 text-sm mb-1.5 flex items-center gap-2">
              <span>🏆</span> 주요 교육 성과 및 평가
            </h5>
            <p className="text-xs sm:text-sm text-amber-800 font-medium leading-relaxed">
              {project.details.outcomes}
            </p>
          </div>

          {/* Reflection */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">교사로서의 배움과 회고</h4>
            <blockquote className="italic text-xs sm:text-sm text-gray-600 border-l-4 border-brand-primary pl-4 py-1">
              "{project.details.reflection}"
            </blockquote>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur px-6 sm:px-8 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-dark transition-all"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
