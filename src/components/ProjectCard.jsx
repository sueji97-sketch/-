import React, { useState } from 'react';

export default function ProjectCard({ project, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onSelect(project)}
      className="group bg-white rounded-3xl overflow-hidden border border-brand-sage/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row cursor-pointer hover:-translate-y-1"
    >
      {/* Left: Preview Image Area (Placeholder with Filename Overlay) */}
      <div className="w-full md:w-2/5 min-h-[220px] md:min-h-[260px] bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
        {!imgError ? (
          <img
            src={project.imagePath}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}

        {/* Placeholder Graphic & Filename Overlay */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${imgError ? 'bg-[#F2EFE9]' : 'bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity'}`}>
          <div className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center text-brand-primary mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* 요구사항: 이미지 위에 파일명 표기 */}
          <div className="bg-brand-dark/90 text-white text-xs font-mono font-semibold px-3 py-1.5 rounded-lg shadow-sm border border-white/20">
            📁 {project.imageFilename}
          </div>
          <span className="text-[11px] text-gray-600 mt-2 font-medium">
            (public/images/projects/{project.imageFilename})
          </span>
        </div>

        {/* Project Number Badge */}
        <span className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white/90 backdrop-blur text-brand-dark font-extrabold text-xs flex items-center justify-center shadow-sm z-10">
          0{project.id}
        </span>
      </div>

      {/* Right: Content Information Area */}
      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold text-brand-sage bg-brand-light px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs text-gray-600 font-medium">
              🗓️ {project.period}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors mt-2">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed line-clamp-2 md:line-clamp-3">
            {project.summary}
          </p>
        </div>

        <div className="pt-6 mt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-brand-primary group-hover:text-brand-dark transition-colors">
            상세 보기
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
