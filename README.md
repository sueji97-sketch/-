# 이수경 유치원 교사 포트폴리오 웹사이트 (React + Vite)

> **"아이들의 가능성을 발견하고 사랑으로 채워주는 유치원 교사 이수경입니다."**  
> Spline 3D 인터랙티브와 정돈된 카드 레이아웃을 기반으로 구축된 채용 특화 포트폴리오 웹사이트입니다.

---

## 📂 프로젝트 구조

```text
kindergarten-portfolio/
├── preview.html                # 🌟 [추천] 브라우저에서 바로 더블클릭하여 확인할 수 있는 프리뷰 파일
├── index.html                  # Vite 엔트리 HTML
├── package.json                # 의존성 및 스크립트 설정
├── vite.config.js              # Vite 설정
├── public/
│   ├── assets/
│   │   └── resume_leesoogyeong.pdf  # 다운로드용 이력서 PDF 파일 (교체 가능)
│   └── images/
│       └── projects/           # 🌟 프로젝트 실사 이미지 저장 폴더
│           ├── README.txt      # 이미지 교체 가이드
│           ├── project-01.jpg  # 1번 프로젝트 사진 (대체 파일)
│           ├── project-02.jpg  # 2번 프로젝트 사진 (대체 파일)
│           ├── project-03.jpg  # 3번 프로젝트 사진 (대체 파일)
│           ├── project-04.jpg  # 4번 프로젝트 사진 (대체 파일)
│           └── project-05.jpg  # 5번 프로젝트 사진 (대체 파일)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── projects.json       # 🌟 5개 프로젝트 데이터셋 (동적 렌더링)
    └── components/
        ├── Header.jsx          # 상단 네비게이션
        ├── Intro.jsx           # Spline 3D 로봇 + '이수경의 포트폴리오'
        ├── Profile.jsx         # 소개, 보육교사 1급/원장자격증, 한글/PPT 스킬바
        ├── ProjectList.jsx     # 세로 배치 가로 배너 리스트 & 스켈레톤 관리
        ├── ProjectCard.jsx     # 가로형 배너 카드 (플레이스홀더 + 파일명 표기)
        ├── ProjectModal.jsx    # 상세 팝업 모달
        ├── SkeletonCard.jsx    # 스켈레톤 로딩 카드
        ├── Hobby.jsx           # 유아 교육 연계 취미 3종
        └── Sitemap.jsx         # 이력서 PDF 다운로드 & 사이트맵 푸터
```

---

## 🚀 실행 방법

### 방법 1. 즉시 브라우저에서 확인하기 (가장 간편!)
* `preview.html` 파일을 더블클릭하여 Chrome, Edge, Safari 등 브라우저로 엽니다.
* Node.js 설치 없이도 Spline 3D 로봇, 프로필, 5대 프로젝트 배너, 스켈레톤 로딩, 상세 모달, 취미, 이력서 다운로드 기능을 즉시 테스트하실 수 있습니다.

### 방법 2. Vite 개발 서버 실행
Node.js가 설치되어 있는 환경에서는 터미널을 열고 아래 명령어를 실행합니다:
```bash
npm install
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속합니다.

---

## 🎨 주요 기능 및 요구사항 반영 내역

1. **Intro (3D 로봇 + 타이틀)**:
   * 이미지 시안의 input 요소를 삭제하고, 귀여운 인사하는 3D 로봇 Spline iframe 임베딩.
   * 중앙 타이틀: **‘이수경의 포트폴리오’** 적용.
2. **Profile (이수경 / 유치원 교사 / 1997.03.28)**:
   * **소개**: 교사관 및 누리과정 놀이 지도 철학.
   * **자격증**: 보육교사 1급 자격증, 어린이집 원장 자격증 뱃지 및 인증 표시.
   * **Skill**: 파워포인트 (PPT - 95%), 한글 (HWP - 98%) 실무 활용 능력 시각화.
3. **Project (가로 배너 5개 세로 배치 & 동적 작동)**:
   * 배너 좌측: 회색 톤 플레이스홀더 및 **`[📁 project-01.jpg]` 파일명 오버레이 표기**.
   * 배너 우측: 교육 목표, 기간, 카테고리 태그 및 개요.
   * **클릭 시 모달 팝업**: 상세 교육 목표, 교사 역할, 성과, 회고 노출.
   * **스켈레톤 UI**: 마운트 시 부드러운 로딩 카드 렌더링 (헤더 우측에 로딩 테스트 버튼 포함).
   * **동적 렌더링**: `src/data/projects.json`에 프로젝트를 추가/삭제하면 자동으로 화면에 반영.
4. **Hobby**:
   * 유아 지도와 연계된 취미 3종 (펠트 DIY 교구 제작, 동화 구연, 실내 원예).
5. **Sitemap & Footer**:
   * 하단 이력서 PDF 즉시 다운로드 버튼.
   * 전체 섹션 앵커 바로가기 사이트맵.

---

## 🖼️ 이미지 교체 가이드

* `public/images/projects/` 폴더에 원하는 사진을 넣고 파일명을 `project-01.jpg` ~ `project-05.jpg`로 맞춰주시면 웹사이트에 실사 이미지가 자동으로 나타납니다!
