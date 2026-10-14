import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard.jsx';
import SkeletonCard from './SkeletonCard.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Simulate skeleton loading on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="project" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-sage uppercase">
            02. Key Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mt-2 tracking-tight">
            교육 및 학급 운영 프로젝트
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl">
            놀이 중심 누리과정, 학부모 연계, 안전 교육 및 행정 표준화에 이르는 5대 핵심 프로젝트입니다.
          </p>
        </div>

        {/* Skeleton UI preview toggle button for recruiter/tester convenience */}
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="text-xs text-gray-500 font-medium">
            총 <strong className="text-brand-primary">{projectsData.length}개</strong> 프로젝트 (동적 렌더링)
          </span>
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 800);
            }}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors shadow-2xs"
            title="스켈레톤 로딩 애니메이션 다시보기"
          >
            🔄 로딩 UI 테스트
          </button>
        </div>
      </div>

      {/* Vertical List of Horizontal Banner Cards */}
      <div className="space-y-6">
        {loading ? (
          // Skeleton UI rendering
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          // Dynamic projects rendering
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))
        )}
      </div>

      {/* Detail Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
