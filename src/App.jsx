import React from 'react';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Profile from './components/Profile.jsx';
import ProjectList from './components/ProjectList.jsx';
import Hobby from './components/Hobby.jsx';
import Sitemap from './components/Sitemap.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-gray-800">
      {/* Fixed Header */}
      <Header />

      {/* Main Sections in Required Order: intro -> profile -> project -> hobby -> sitemap */}
      <main className="flex-grow">
        {/* 1. Intro (Spline 3D iframe + '이수경의 포트폴리오') */}
        <Intro />

        {/* 2. Profile (About Me, Certifications, Skills) */}
        <Profile />

        {/* 3. Project (5 projects, Horizontal Banners in Vertical List, Placeholder, Skeleton UI, Modal) */}
        <ProjectList />

        {/* 4. Hobby (Kindergarten teacher related hobbies & special skills) */}
        <Hobby />
      </main>

      {/* 5. Sitemap & Footer (Resume PDF download & Sitemap links) */}
      <Sitemap />
    </div>
  );
}
