import { useState } from 'react';

type Section =
  | 'skills'
  | 'career'
  | 'education'
  | 'certificate'
  | 'project-heroes-harvest'
  | 'project-yolo-camera'
  | 'project-career-pilot'
  | 'project-my-pm'

// ── Dark Winter: 딥바이올렛 #7c3aed / 미드바이올렛 #a78bfa / 라이트핑크 #f5d0fe ──
const DARK = {
  bg:             'bg-gradient-to-br from-[#03020a] to-[#07041a]',
  text:           'text-[#f5d0fe]',
  headerBg:       'bg-[#080616]/80 backdrop-blur',
  headerBorder:   'border-b border-[#7c3aed]/30',
  sidebarBg:      'bg-[#03020a]/80 backdrop-blur',
  sidebarBorder:  'border-r border-[#7c3aed]/20',
  sectionLabel:   'text-[#a78bfa]',
  menuActive:     'bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-bold shadow-lg',
  menuInactive:   'text-[#c4b5fd] hover:bg-[#0e0820] hover:text-[#a78bfa] hover:translate-x-1',
  titleColor:     'text-white',
  titleBorder:    'border-[#7c3aed]',
  cardBg:         'bg-[#0a071a]/60 backdrop-blur border border-[#7c3aed]/20',
  cardHover:      'hover:border-[#a78bfa] hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:-translate-y-1',
  cardHeading:    'text-[#a78bfa]',
  cardText:       'text-[#f5d0fe]',
  cardSubHeading: 'text-white',
  techTagBg:      'bg-[#03020a] text-[#a78bfa] border-[#7c3aed]',
  skillTagBg:     'bg-[#0e0820] border border-[#7c3aed]/30 text-[#f5d0fe]',
  skillTagHover:  'hover:bg-[#7c3aed] hover:text-white',
  avatarBorder:   'border-[#a78bfa]',
  avatarShadow:   'shadow-[0_0_25px_rgba(124,58,237,0.5)]',
  imgPlaceholder: 'from-[#0e0820] to-[#03020a] border-[#2e1065] text-[#6d28d9]',
  subText:        'text-[#7c3aed]',
  toggleBg:       'bg-[#0e0820] border border-[#7c3aed]/40 text-[#a78bfa]',
  toggleIcon:     '☀️',
  toggleLabel:    'Light',
};

const LIGHT = {
  bg:             'bg-[#faf5ff]',
  text:           'text-[#2e1065]',
  headerBg:       'bg-[#f3e8ff]',
  headerBorder:   'border-b border-[#d8b4fe]',
  sidebarBg:      'bg-[#f3e8ff]',
  sidebarBorder:  'border-r border-[#e9d5ff]',
  sectionLabel:   'text-[#7c3aed]',
  menuActive:     'bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-bold shadow-lg',
  menuInactive:   'text-[#6b7280] hover:bg-[#ede9fe] hover:text-[#7c3aed] hover:translate-x-1',
  titleColor:     'text-[#1f2937]',
  titleBorder:    'border-[#7c3aed]',
  cardBg:         'bg-white border border-[#e9d5ff]',
  cardHover:      'hover:border-[#a78bfa] hover:shadow-[0_0_20px_rgba(124,58,237,0.12)] hover:-translate-y-1',
  cardHeading:    'text-[#6d28d9]',
  cardText:       'text-[#374151]',
  cardSubHeading: 'text-[#1f2937]',
  techTagBg:      'bg-[#f5d0fe] text-[#6d28d9] border-[#a78bfa]',
  skillTagBg:     'bg-[#faf5ff] border border-[#d8b4fe] text-[#374151]',
  skillTagHover:  'hover:bg-[#7c3aed] hover:text-white',
  avatarBorder:   'border-[#a78bfa]',
  avatarShadow:   'shadow-[0_0_20px_rgba(167,139,250,0.35)]',
  imgPlaceholder: 'from-[#f3e8ff] to-[#faf5ff] border-[#e9d5ff] text-[#c4b5fd]',
  subText:        'text-[#9ca3af]',
  toggleBg:       'bg-[#ede9fe] border border-[#d8b4fe] text-[#7c3aed]',
  toggleIcon:     '🌙',
  toggleLabel:    'Dark',
};

type Theme = typeof DARK;

export default function App() {
  const [selectedSection, setSelectedSection] = useState<Section>('skills');
  const [isDark, setIsDark] = useState(false);
  const t = isDark ? DARK : LIGHT;

  return (
    <div className={`h-screen flex flex-col ${t.bg} ${t.text} transition-colors duration-300`}>
      {/* 헤더 */}
      <header className={`${t.headerBg} ${t.headerBorder} px-10 py-8`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className={`text-3xl font-bold ${t.titleColor} mb-2`}>Introduce Myself</h1>
            <p className={`text-lg ${t.sectionLabel} mb-1`}>풀스택 개발자</p>
            <p className={t.subText}>이름: 고윤</p>
            <p className={t.subText}>이메일: yoonnyang1013@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            {/* 다크/라이트 토글 */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${t.toggleBg}`}
            >
              <span>{t.toggleIcon}</span>
              <span>{t.toggleLabel} mode</span>
            </button>
            <div className={`w-32 h-32 rounded-full border-4 ${t.avatarBorder} overflow-hidden ${t.avatarShadow}`}>
              <img
                src="Main-Image.jpg"
                alt="프로필 사진"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* 메인 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 사이드바 */}
        <aside className={`w-64 ${t.sidebarBg} ${t.sidebarBorder} overflow-y-auto p-5`}>
          <div className="mb-8">
            <h3 className={`text-sm ${t.sectionLabel} mb-4 uppercase tracking-wider`}>기본 정보</h3>
            <ul className="space-y-1">
              <MenuItem t={t} label="기술 스택"   selected={selectedSection === 'skills'}      onClick={() => setSelectedSection('skills')} />
              <MenuItem t={t} label="포트폴리오"   selected={selectedSection === 'career'}      onClick={() => setSelectedSection('career')} />
              <MenuItem t={t} label="교육"         selected={selectedSection === 'education'}   onClick={() => setSelectedSection('education')} />
              <MenuItem t={t} label="수상 및 자격" selected={selectedSection === 'certificate'} onClick={() => setSelectedSection('certificate')} />
            </ul>
          </div>
          <div>
            <h3 className={`text-sm ${t.sectionLabel} mb-4 uppercase tracking-wider`}>프로젝트</h3>
            <ul className="space-y-1">
              <MenuItem t={t} label="CareerPilot"         selected={selectedSection === 'project-career-pilot'}   onClick={() => setSelectedSection('project-career-pilot')} />
              <MenuItem t={t} label="Hero's Harvest"      selected={selectedSection === 'project-heroes-harvest'} onClick={() => setSelectedSection('project-heroes-harvest')} />
              <MenuItem t={t} label="Git Project Manager" selected={selectedSection === 'project-my-pm'}          onClick={() => setSelectedSection('project-my-pm')} />
              <MenuItem t={t} label="Yolo V5 객체인식"    selected={selectedSection === 'project-yolo-camera'}    onClick={() => setSelectedSection('project-yolo-camera')} />
            </ul>
          </div>
        </aside>

        {/* 콘텐츠 */}
        <main className="flex-1 p-10 overflow-y-auto">
          <div className="animate-[fadeIn_0.5s_ease]">
            {selectedSection === 'skills'                 && <SkillsSection t={t} />}
            {selectedSection === 'career'                 && <CareerSection t={t} />}
            {selectedSection === 'education'              && <EducationSection t={t} />}
            {selectedSection === 'certificate'            && <CertificateSection t={t} />}
            {selectedSection === 'project-career-pilot'   && <ProjectCareerPilot t={t} />}
            {selectedSection === 'project-heroes-harvest' && <ProjectHeroesHarvest t={t} />}
            {selectedSection === 'project-my-pm'          && <ProjectMyPM t={t}/>}
            {selectedSection === 'project-yolo-camera'    && <ProjectYoloCamera t={t} />}
          </div>
        </main>
      </div>
    </div>
  );
}

// ── 공통 컴포넌트 ─────────────────────────────────────

function MenuItem({ t, label, selected, onClick }: { t: Theme; label: string; selected: boolean; onClick: () => void }) {
  return (
    <li onClick={onClick} className={`px-4 py-2.5 rounded cursor-pointer transition-all duration-300 ${selected ? t.menuActive : t.menuInactive}`}>
      {label}
    </li>
  );
}

function SectionTitle({ t, children }: { t: Theme; children: React.ReactNode }) {
  return (
    <h2 className={`text-2xl font-bold ${t.titleColor} border-b-2 ${t.titleBorder} pb-3 mb-6`}>
      {children}
    </h2>
  );
}

function ProjectCard({ t, children }: { t: Theme; children: React.ReactNode }) {
  return (
    <div className={`${t.cardBg} rounded-lg p-6 mb-6 transition-all duration-300 ${t.cardHover}`}>
      {children}
    </div>
  );
}

function TechTag({ t, children }: { t: Theme; children: React.ReactNode }) {
  return (
    <span className={`inline-block ${t.techTagBg} px-3 py-1 rounded border text-xs mr-2 mb-2`}>
      {children}
    </span>
  );
}

function SkillTag({ t, children, icon }: { t: Theme; children: React.ReactNode; icon?: string }) {
  return (
    <span className={`${t.skillTagBg} flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${t.skillTagHover} hover:scale-105`}>
      {icon && <i className={`${icon} colored`} style={{ fontSize: '16px' }} />}
      {children}
    </span>
  );
}

function ProjectImage({ t, alt }: { t: Theme; alt: string }) {
  return (
    <div className={`w-full max-w-[700px] h-[350px] bg-gradient-to-br ${t.imgPlaceholder} border-2 border-dashed rounded-lg my-4 flex items-center justify-center italic text-sm`}>
      {alt}
    </div>
  );
}

// ── 섹션들 ────────────────────────────────────────────

function SkillsSection({ t }: { t: Theme }) {
  const groups = [
    { label: 'Front End', skills: [
      { name: 'React',        icon: 'devicon-react-original' },
      { name: 'Vite',         icon: 'devicon-vitejs-plain' },
      { name: 'HTML/CSS',     icon: 'devicon-html5-plain' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    ]},
    { label: 'Back End', skills: [
      { name: 'Spring Boot',  icon: 'devicon-spring-plain' },
      { name: 'Flask',        icon: 'devicon-flask-original' },
      { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain' },
    ]},
    { label: 'Database', skills: [
      { name: 'MySQL',        icon: 'devicon-mysql-original' },
      { name: 'SQL Server',   icon: 'devicon-microsoftsqlserver-plain' },
      { name: 'Oracle DB',    icon: 'devicon-oracle-original' },
      { name: 'PostgreSQL',   icon: 'devicon-postgresql-plain' },
    ]},
    { label: 'Programming Languages', skills: [
      { name: 'C',            icon: 'devicon-c-plain' },
      { name: 'C++',          icon: 'devicon-cplusplus-plain' },
      { name: 'C#',           icon: 'devicon-csharp-plain' },
      { name: 'JavaScript',   icon: 'devicon-javascript-plain' },
      { name: 'Java',         icon: 'devicon-java-plain' },
      { name: 'Python',       icon: 'devicon-python-plain' },
    ]},
    { label: 'Services & Tools', skills: [
      { name: 'AWS',          icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'OpenStack',    icon: 'devicon-openstack-plain' },
      { name: 'Git',          icon: 'devicon-git-plain' },
      { name: 'Linux',        icon: 'devicon-linux-plain' },
      { name: 'Docker',       icon: 'devicon-docker-plain' },
    ]},
    { label: 'Others', skills: [
      { name: 'Unity Engine', icon: 'devicon-unity-original' },
      { name: 'Raspberry Pi', icon: 'devicon-raspberrypi-line' },
      { name: 'Arduino Uno',  icon: 'devicon-arduino-plain' },
    ]},
  ];
  return (
    <>
      <SectionTitle t={t}>기술 스택</SectionTitle>
      <div className="space-y-6">
        {groups.map(({ label, skills }) => (
          <div key={label}>
            <h4 className={`${t.cardHeading} mb-3`}>{label}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => <SkillTag key={s.name} t={t} icon={s.icon}>{s.name}</SkillTag>)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CareerSection({ t }: { t: Theme }) {
  return (
    <>
      <SectionTitle t={t}>포트폴리오</SectionTitle>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>AI기반 취업준비 플랫폼: CareerPilot</h3>
        <div className="mb-3">
          <TechTag t={t}>웹 서비스</TechTag><TechTag t={t}>RAG / LLM</TechTag><TechTag t={t}>E2E</TechTag>
          <TechTag t={t}>2024.09 ~ 진행중</TechTag>
        </div>
        <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
          <li>Spring Boot 3 / React 19 풀스택 단독 개발</li>
          <li>OpenStack 3-Tier 아키텍처 배포 (Nginx Proxy → App → PostgreSQL+pgvector)</li>
          <li>NCS 기반 123개 역량 코드 설계 및 RAG 앵커 구축 (ESCO / O*NET 참조)</li>
          <li>LLM 기반 역량 심층 인터뷰 · 깊이/커버리지 분리 평가 아키텍처</li>
          <li>JD 분석 · 역량 갭 시각화 · AI 자기소개서 제작 · 크레딧 시스템</li>
        </ul>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>Unity 2D TopView Farming Simulation RPG: Hero's Harvest</h3>
        <div className="mb-3">
          <TechTag t={t}>졸업작품</TechTag><TechTag t={t}>2025.03 ~ 2025.11</TechTag>
        </div>
        <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
          <li>Unity 엔진을 활용한 게임 개발</li>
          <li>NavMesh Plus + FSM 기반 NPC 알고리즘</li>
          <li>ASP .netCore 백엔드 서버</li>
        </ul>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>AI기반 Git Project Manager: My PM</h3>
        <div className="mb-3">
          <TechTag t={t}>사이드 프로젝트</TechTag><TechTag t={t}>기획중</TechTag>
          <TechTag t={t}>Java / LLM</TechTag>
        </div>
        <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
          <li>JavaParser로 프로젝트 AST 분석 및 구조 DB 저장</li>
          <li>LLM이 구조 데이터를 읽어 레거시 탐지 및 리팩토링 제안</li>
          <li>API Request 시뮬레이션 — 404 / 500 등 에러 케이스 자동 처리</li>
        </ul>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>Yolo V5 객체인식 방범 카메라</h3>
        <div className="mb-3">
          <TechTag t={t}>보안 시스템</TechTag><TechTag t={t}>IoT</TechTag>
        </div>
        <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
          <li>Python Flask 백엔드 서버 구축</li>
          <li>Yolo V5 모델을 활용한 실시간 객체 인식</li>
          <li>웹 기반 실시간 모니터링 시스템 구현</li>
        </ul>
      </ProjectCard>
    </>
  );
}

function EducationSection({ t }: { t: Theme }) {
  return (
    <>
      <SectionTitle t={t}>교육</SectionTitle>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>동양미래대학교</h3>
        <TechTag t={t}>전문학사</TechTag>
        <div className="mt-4 space-y-1">
          <p className={t.cardText}><span className={`${t.cardHeading} font-bold`}>전공:</span> 컴퓨터소프트웨어공학과</p>
          <p className={t.cardText}><span className={`${t.cardHeading} font-bold`}>기간:</span> 2023.03 ~ 2026.02</p>
        </div>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>동양미래대학교</h3>
        <TechTag t={t}>학사</TechTag>
        <div className="mt-4 space-y-1">
          <p className={t.cardText}><span className={`${t.cardHeading} font-bold`}>전공:</span> 컴퓨터소프트웨어공학과</p>
          <p className={t.cardText}><span className={`${t.cardHeading} font-bold`}>기간:</span> 2026.03 ~ 진행중</p>
        </div>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>한국폴리텍대학교 광명융합기술교육원</h3>
        <TechTag t={t}>하이테크교육</TechTag>
        <div className="mt-4 space-y-1">
          <p className={t.cardText}><span className={`${t.cardHeading} font-bold`}>전공:</span> 데이터분석</p>
          <p className={t.cardText}><span className={`${t.cardHeading} font-bold`}>기간:</span> 2026.03 ~ 진행중</p>
        </div>
      </ProjectCard>
    </>
  );
}

function CertificateSection({ t }: { t: Theme }) {
  return (
    <>
      <SectionTitle t={t}>수상 및 자격</SectionTitle>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>SQL 개발자 자격증</h3>
        <p className={t.cardText}>데이터베이스 설계 및 SQL 쿼리 작성 능력 검증</p>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>Programmers Certified Coding Essential (Java)</h3>
        <p className={t.cardText}>Java 프로그래밍 기본 역량 인증</p>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>정보처리기사</h3>
        <p className={t.cardText}>업무에 맞는 소프트웨어의 기능에 관한 설계, 구현 및 테스트를 수행에 필요한 역량 인증</p>
      </ProjectCard>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>AWS Certified Solutions Architect - Associate</h3>
        <p className={t.cardText}>AWS 서비스 전반에서 기술 지식과 기술 능력 검증</p>
      </ProjectCard>
    </>
  );
}

function ProjectMyPM({ t }: { t: Theme }){
  return(
    <>
    <SectionTitle t={t}>Github 프로젝트 메니저: MyPM</SectionTitle>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>프로젝트 개요</h3>
        <div className="mb-4">
          <TechTag t={t}>Java Parser</TechTag>
          <TechTag t={t}>LLM</TechTag>
          <TechTag t={t}>StreamLit</TechTag>
          <TechTag t={t}>Documentation Support</TechTag>
          <TechTag t={t}>Refactoring</TechTag>
          <TechTag t={t}>Lagacy Collector</TechTag>
        </div>
        <ProjectImage t={t} alt="StreamLit 기반 GUI 스크린샷 (이미지 추가 예정)"/>
        <div className="space-y-4 mt-4">
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>프로젝트 설명</h4>
            <p className={`${t.cardText} leading-relaxed`}>
              JavaParser로 프로젝트 AST분석을 한 뒤 LLM이 내용을 확인하여 레거시 탐지 및 리펙토링 제안, API Request 시뮬레이션을 통한 백엔드 에러 케이스 처리
            </p>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>핵심 기능</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>전체 프로젝트의 흐름을 구조화하여 정리, 레거시 시스템 처리</li>
              <li>API Request 시뮬레션을 통하여 백엔드 에러 케이스 확인</li>
              <li>프로젝트 구조를 기반으로 Readme 작성 도움, 문서화 작업</li>
            </ul>
          </div>

        </div>
      </ProjectCard>
    </>
  )
}

function ProjectCareerPilot({ t }: { t: Theme }) {
  return (
    <>
      <SectionTitle t={t}>CareerPilot — AI기반 취업준비 플랫폼</SectionTitle>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>프로젝트 개요</h3>
        <div className="mb-4">
          <TechTag t={t}>Spring Boot 3</TechTag>
          <TechTag t={t}>React 19</TechTag>
          <TechTag t={t}>PostgreSQL + pgvector</TechTag>
          <TechTag t={t}>OpenStack</TechTag>
          <TechTag t={t}>RAG / LLM</TechTag>
          <TechTag t={t}>2026.02 ~ 진행중</TechTag>
        </div>
        <img
          src="CareerPilot.png"
          alt="CareerPilot 대시보드"
          className="w-full max-w-[1000px] rounded-lg my-4 border border-[#7c3aed]/20"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="space-y-4 mt-4">
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>프로젝트 설명</h4>
            <p className={`${t.cardText} leading-relaxed`}>
              한국 초기 경력자를 타겟으로 한 AI 기반 취업준비 플랫폼입니다. NCS 직무 분류 체계를 기반으로 123개 역량 코드를 직접 설계하고, RAG 앵커와 LLM을 결합하여 역량 심층 인터뷰부터 JD 분석·갭 시각화·AI 자기소개서 제작까지 취업 준비 전 과정을 E2E로 지원합니다.
            </p>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>시스템 아키텍처</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>OpenStack 3-Tier 배포 — Nginx Proxy(Tier1) → Spring Boot App(Tier2) → PostgreSQL+pgvector(Tier3)</li>
              <li>pgvector 기반 역량 벡터 유사도 검색 (L2 → Cosine 마이그레이션)</li>
              <li>크레딧 기반 사용량 관리 시스템 및 이벤트 드리븐 UI 갱신</li>
            </ul>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>핵심 기능</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>LLM 역량 심층 인터뷰 — depthScore / coverage 분리 평가 아키텍처, 역전 현상 7% 미만으로 개선</li>
              <li>NCS 기반 123개 CapabilityCode 설계 · L1~L4 레벨 앵커 구축 (ESCO reuse_level / O*NET LV 참조)</li>
              <li>JD 분석 — AI 직무코드 분류기(JDJobClassifier) 및 MISSING/경험/학력 갭 플래그 자동 산출</li>
              <li>AI 자기소개서 제작 — STAR 카드 기반 경험 입력 + Magic Paste OCR(GPT-4o-mini Vision)</li>
              <li>대시보드 — coreScores / commonScores / coreUnknown / nonCore 4카테고리 역량 레이더 차트</li>
            </ul>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>기술 스택</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>Backend: Spring Boot 3.4 / Java 17 / JPA / QueryDSL</li>
              <li>Frontend: React 19 / Vite / Tailwind CSS / shadcn/ui</li>
              <li>DB: PostgreSQL + pgvector / Docker</li>
              <li>AI: OpenAI GPT-4o / RAG Pipeline / StringTemplate(.st) 프롬프트 관리</li>
              <li>Infra: OpenStack Rocky Linux 9 / Nginx / HAProxy</li>
            </ul>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>성과 및 배운 점</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>단독 풀스택 개발로 기획·설계·구현·배포 전 과정 경험</li>
              <li>평가 아키텍처 재설계로 점수 역전 현상 약 40% → 7% 미만으로 대폭 개선</li>
              <li>RAG 학술 기반(ESCO·O*NET·NCS) 적용으로 도메인 지식과 엔지니어링의 결합 경험</li>
            </ul>
          </div>
        </div>
      </ProjectCard>
    </>
  );
}

function ProjectHeroesHarvest({ t }: { t: Theme }) {
  return (
    <>
      <SectionTitle t={t}>Hero's Harvest - Unity 2D RPG 게임</SectionTitle>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>프로젝트 개요</h3>
        <div className="mb-4">
          <TechTag t={t}>Unity</TechTag>
          <TechTag t={t}>C#</TechTag>
          <TechTag t={t}>2D Game</TechTag>
          <TechTag t={t}>2025.03 ~ 2025.11</TechTag>
        </div>
        <img
          src="HerosHarvest.png"
          alt="Hero's Harvest 시연사진"
          className="w-full max-w-[1000px] rounded-lg my-4 border border-[#7c3aed]/20"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="space-y-4 mt-4">
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>프로젝트 설명</h4>
            <p className={`${t.cardText} leading-relaxed`}>Unity 엔진을 활용하여 제작한 2D Top-View 농장 시뮬레이션 RPG 게임입니다. 플레이어는 농장을 운영하며 작물을 재배하고 몬스터와 전투를 진행합니다.</p>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>주요 기능</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>2D Top-View 방식의 캐릭터 이동 및 상호작용</li>
              <li>농작물 재배 및 수확 시스템</li>
              <li>몬스터 전투 및 레벨업 시스템</li>
              <li>인벤토리 및 아이템 관리</li>
              <li>데이터베이스를 활용한 게임 진행 상황 저장</li>
            </ul>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>기술 스택</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>Unity Engine 2D</li>
              <li>C# 스크립팅</li>
              <li>ASP.netCore 서버</li>
            </ul>
          </div>
        </div>
      </ProjectCard>
    </>
  );
}

function ProjectYoloCamera({ t }: { t: Theme }) {
  return (
    <>
      <SectionTitle t={t}>Yolo V5 객체인식 방범 카메라</SectionTitle>
      <ProjectCard t={t}>
        <h3 className={`text-xl ${t.cardHeading} mb-3`}>프로젝트 개요</h3>
        <div className="mb-4">
          <TechTag t={t}>Python</TechTag>
          <TechTag t={t}>Flask</TechTag>
          <TechTag t={t}>Yolo V5</TechTag>
          <TechTag t={t}>AI</TechTag>
        </div>
        <div className="space-y-4 mt-4">
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>프로젝트 설명</h4>
            <p className={`${t.cardText} leading-relaxed`}>Yolo V5 딥러닝 모델을 활용하여 실시간으로 객체를 인식하는 웹 기반 방범 카메라 시스템입니다.</p>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>주요 기능</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>실시간 영상 스트리밍</li>
              <li>Yolo V5 모델을 통한 객체 감지 및 분류</li>
              <li>웹 인터페이스를 통한 실시간 모니터링</li>
              <li>특정 객체 감지 시 알림 기능</li>
              <li>감지 결과 로그 저장</li>
            </ul>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>기술 스택</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>Python Flask (백엔드 서버)</li>
              <li>Yolo V5 (객체 인식 모델)</li>
              <li>OpenCV (영상 처리)</li>
              <li>웹소켓 (실시간 통신)</li>
            </ul>
          </div>
          <div>
            <h4 className={`${t.cardSubHeading} mt-5 mb-2`}>성과 및 배운 점</h4>
            <ul className={`list-disc pl-5 space-y-2 ${t.cardText}`}>
              <li>딥러닝 모델을 실제 시스템에 적용하는 경험</li>
              <li>실시간 데이터 처리 및 스트리밍 기술 습득</li>
              <li>백엔드와 AI 모델의 통합 과정 이해</li>
            </ul>
          </div>
        </div>
      </ProjectCard>
    </>
  );
}