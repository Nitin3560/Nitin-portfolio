import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nitin Singh Rathore",
  description: "MS CS at UT Arlington. Motion planning, fault tolerant control, and multi agent RL for UAV swarms.",
};

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,400&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=IBM+Plex+Mono:wght@300;400&display=swap');

        :root {
          --bg:      #f4f1eb;
          --bg2:     #ede9e1;
          --bg3:     #e5e0d6;
          --ink:     #1c1a17;
          --ink2:    #5a5650;
          --ink3:    #9a9590;
          --accent:  #c44a2a;
          --accent2: #2a6b8a;
          --border:  rgba(28,26,23,0.1);
          --border2: rgba(28,26,23,0.06);
          --serif:   'Fraunces', Georgia, serif;
          --sans:    'Nunito', sans-serif;
          --mono:    'IBM Plex Mono', monospace;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--ink); font-family: var(--sans); font-size: 16px; line-height: 1.6; overflow-x: hidden; }

        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 0 3rem; height: 56px; border-bottom: 1px solid var(--border); background: rgba(244,241,235,0.92); backdrop-filter: blur(12px); }
        .nav-name { font-family: var(--serif); font-size: 15px; font-weight: 400; color: var(--ink); text-decoration: none; font-style: italic; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a { font-family: var(--mono); font-size: 11px; color: var(--ink3); text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s; }
        .nav-links a:hover { color: var(--ink); }
        .nav-contact { font-family: var(--mono); font-size: 11px; color: var(--accent); text-decoration: none; letter-spacing: 0.06em; border-bottom: 1px solid var(--accent); padding-bottom: 1px; transition: opacity 0.2s; }
        .nav-contact:hover { opacity: 0.7; }

        .hero { padding: 130px 3rem 80px; display: grid; grid-template-columns: 1fr 340px; gap: 5rem; align-items: center; border-bottom: 1px solid var(--border); max-width: 1200px; margin: 0 auto; }
        .hero-eyebrow { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.8rem; animation: fadeUp 0.6s ease both; }
        .hero-name { font-family: var(--serif); font-size: clamp(4rem, 9vw, 8rem); font-weight: 900; line-height: 0.9; letter-spacing: -0.03em; color: var(--ink); margin-bottom: 2.2rem; animation: fadeUp 0.7s 0.05s ease both; }
        .hero-name em { font-style: italic; font-weight: 300; color: var(--ink2); }
        .hero-desc { font-size: 1.05rem; color: var(--ink2); line-height: 1.8; max-width: 500px; font-weight: 400; animation: fadeUp 0.7s 0.1s ease both; }
        .hero-desc strong { color: var(--ink); font-weight: 600; }
        .hero-links { display: flex; gap: 1.5rem; margin-top: 2.5rem; animation: fadeUp 0.7s 0.15s ease both; flex-wrap: wrap; }
        .hero-links a { font-family: var(--mono); font-size: 11px; color: var(--ink3); text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 2px; transition: color 0.2s, border-color 0.2s; }
        .hero-links a:hover { color: var(--ink); border-color: var(--ink); }
        .hero-visual { display: flex; align-items: center; justify-content: center; animation: fadeUp 0.8s 0.2s ease both; }
        .drone-svg { width: 100%; max-width: 300px; opacity: 0.85; }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(-1deg); } 50% { transform: translateY(-12px) rotate(1deg); } }
        .drone-group { animation: float 4s ease-in-out infinite; transform-origin: center; }

        .section { max-width: 1200px; margin: 0 auto; padding: 80px 3rem; border-bottom: 1px solid var(--border); }
        .section-header { display: grid; grid-template-columns: 140px 1fr; gap: 3rem; margin-bottom: 3rem; align-items: baseline; }
        .section-num { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.1em; }
        .section-title { font-family: var(--serif); font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; color: var(--ink); }

        .about-body { display: grid; grid-template-columns: 140px 1fr; gap: 3rem; }
        .about-aside-item { margin-bottom: 1.5rem; }
        .aside-label { font-family: var(--mono); font-size: 10px; color: var(--ink3); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.3rem; }
        .aside-value { font-size: 0.85rem; color: var(--ink2); font-weight: 400; line-height: 1.5; }
        .about-text p { font-size: 0.95rem; color: var(--ink2); line-height: 1.85; font-weight: 400; margin-bottom: 1.1rem; }
        .about-text p:first-child { font-size: 0.95rem; color: var(--ink2); }
        .about-text strong { color: var(--ink); font-weight: 600; }

        .research-main { display: grid; grid-template-columns: 140px 1fr; gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid var(--border2); margin-bottom: 2.5rem; }
        .research-tag { display: inline-block; font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border-radius: 2px; margin-bottom: 1rem; background: rgba(196,74,42,0.08); color: var(--accent); border: 1px solid rgba(196,74,42,0.2); }
        .research-title { font-family: var(--serif); font-size: 1.9rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 0.5rem; color: var(--ink); }
        .research-subtitle { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.06em; margin-bottom: 1.5rem; }
        .research-body p { font-size: 0.95rem; color: var(--ink2); line-height: 1.85; font-weight: 400; margin-bottom: 1.1rem; }
        .research-body strong { color: var(--ink); font-weight: 600; }
        .research-paper-note { margin-top: 1.5rem; padding: 1rem 1.2rem; background: var(--bg); border: 1px solid var(--border); border-left: 2px solid var(--accent); font-family: var(--mono); font-size: 12px; color: var(--ink2); line-height: 1.7; }
        .stack-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 1.5rem; }
        .stack-chip { font-family: var(--mono); font-size: 11px; color: var(--ink3); background: var(--bg); border: 1px solid var(--border); padding: 4px 10px; border-radius: 2px; letter-spacing: 0.04em; }
        .research-links { display: flex; gap: 1.5rem; margin-top: 1.5rem; }
        .research-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; color: var(--accent2); text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase; border-bottom: 1px solid rgba(42,107,138,0.3); padding-bottom: 2px; transition: opacity 0.2s; }
        .research-link:hover { opacity: 0.7; }

        .research-details { display: grid; grid-template-columns: 1fr 1fr; gap: 0; background: var(--bg); border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 2rem; }
        .research-detail-block { background: var(--bg); padding: 1.5rem; border: 1px solid var(--border2); }
        .rdb-label { font-family: var(--mono); font-size: 10px; color: var(--ink3); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.8rem; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border2); }
        .rdb-items { display: flex; flex-direction: column; gap: 0.45rem; }
        .rdb-item { font-size: 0.88rem; color: var(--ink2); font-weight: 400; line-height: 1.5; padding-left: 1rem; position: relative; }
        .rdb-item::before { content: ''; position: absolute; left: 0; top: 0.65em; width: 4px; height: 1px; background: var(--ink3); }

        .swarm-visual { margin: 2rem 0; width: 100%; }

        .research-sub-entries { display: grid; grid-template-columns: 1fr 1fr; gap: 0; background: var(--bg); border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-left: calc(140px + 3rem); }
        .sub-entry { background: var(--bg); padding: 2rem; transition: background 0.2s; border: 1px solid var(--border2); }
        .sub-entry:hover { background: var(--bg2); }
        .sub-entry-tag { font-family: var(--mono); font-size: 10px; color: var(--ink3); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.8rem; }
        .sub-entry h4 { font-family: var(--serif); font-size: 1.1rem; font-weight: 600; letter-spacing: -0.01em; margin-bottom: 0.8rem; color: var(--ink); }
        .sub-entry p { font-size: 0.88rem; color: var(--ink2); line-height: 1.75; font-weight: 400; margin-bottom: 0.6rem; }
        .sub-entry-link { display: inline-flex; align-items: center; gap: 5px; font-family: var(--mono); font-size: 11px; color: var(--ink3); text-decoration: none; margin-top: 1rem; letter-spacing: 0.04em; border-bottom: 1px solid var(--border); padding-bottom: 1px; transition: color 0.2s; }
        .sub-entry-link:hover { color: var(--ink); }

        .project-row { display: grid; grid-template-columns: 140px 1fr; gap: 3rem; padding: 3rem 0; border-bottom: 1px solid var(--border2); }
        .project-row:last-child { border-bottom: none; padding-bottom: 0; }
        .project-index { font-family: var(--mono); font-size: 10px; color: var(--ink3); letter-spacing: 0.1em; margin-bottom: 0.8rem; }
        .project-type-tag { display: inline-block; font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 2px; }
        .tag-systems { background: rgba(42,107,138,0.08); color: var(--accent2); border: 1px solid rgba(42,107,138,0.2); }
        .tag-product { background: rgba(28,26,23,0.06); color: var(--ink2); border: 1px solid var(--border); }
        .project-row-title { font-family: var(--serif); font-size: 1.7rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 0.3rem; color: var(--ink); }
        .project-row-subtitle { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.06em; margin-bottom: 1.5rem; }
        .project-row p { font-size: 0.95rem; color: var(--ink2); line-height: 1.85; font-weight: 400; margin-bottom: 1rem; max-width: 640px; }
        .project-row strong { color: var(--ink); font-weight: 600; }
        .project-row-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; flex-wrap: wrap; gap: 1rem; }
        .project-row-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; color: var(--accent2); text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase; border-bottom: 1px solid rgba(42,107,138,0.3); padding-bottom: 2px; transition: opacity 0.2s; }
        .project-row-link:hover { opacity: 0.7; }

        .skills-domains { display: grid; grid-template-columns: 140px 1fr; gap: 3rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; background: var(--bg); border: 1px solid var(--border); border-radius: 4px; overflow: hidden; }
        .skill-domain { background: var(--bg); padding: 1.8rem; border: 1px solid var(--border2); }
        .skill-domain-name { font-family: var(--mono); font-size: 10px; color: var(--ink3); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.2rem; padding-bottom: 0.8rem; border-bottom: 1px solid var(--border2); }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .skill-tag { font-family: var(--sans); font-size: 12px; font-weight: 500; color: var(--ink2); background: var(--bg); border: 1px solid var(--border); padding: 6px 12px; border-radius: 20px; transition: all 0.15s; cursor: default; }
        .skill-tag:hover { background: var(--bg3); color: var(--ink); border-color: rgba(28,26,23,0.2); }
        .skill-tag.hl-red { background: rgba(196,74,42,0.09); color: var(--accent); border-color: rgba(196,74,42,0.25); font-weight: 600; }
        .skill-tag.hl-blue { background: rgba(42,107,138,0.09); color: var(--accent2); border-color: rgba(42,107,138,0.25); font-weight: 600; }

        .exp-entries { display: grid; grid-template-columns: 140px 1fr; gap: 3rem; }
        .exp-item { padding: 2.5rem 0; border-bottom: 1px solid var(--border2); }
        .exp-item:last-child { border-bottom: none; }
        .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.3rem; flex-wrap: wrap; gap: 0.5rem; }
        .exp-role { font-family: var(--serif); font-size: 1.2rem; font-weight: 600; color: var(--ink); letter-spacing: -0.01em; }
        .exp-period { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.04em; }
        .exp-company { font-family: var(--mono); font-size: 11px; color: var(--accent2); letter-spacing: 0.06em; margin-bottom: 1.2rem; }
        .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
        .exp-bullets li { font-size: 0.9rem; color: var(--ink2); line-height: 1.7; font-weight: 400; padding-left: 1.2rem; position: relative; }
        .exp-bullets li::before { content: ''; position: absolute; left: 0; top: 0.7em; width: 5px; height: 1px; background: var(--ink3); }
        .exp-bullets li strong { color: var(--ink); font-weight: 600; }

        .contact-wrap { max-width: 1200px; margin: 0 auto; padding: 80px 3rem; display: grid; grid-template-columns: 140px 1fr; gap: 3rem; }
        .contact-body { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end; }
        .contact-heading { font-family: var(--serif); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 1.2rem; }
        .contact-heading em { font-style: italic; font-weight: 300; color: var(--ink2); }
        .contact-sub { font-size: 0.95rem; color: var(--ink2); line-height: 1.8; font-weight: 400; }
        .contact-right { display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-end; }
        .contact-email { font-family: var(--serif); font-size: 1.1rem; font-style: italic; color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--border); padding-bottom: 3px; transition: border-color 0.2s; }
        .contact-email:hover { border-color: var(--ink); }
        .contact-socials { display: flex; gap: 2rem; }
        .contact-socials a { font-family: var(--mono); font-size: 11px; color: var(--ink3); text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s; }
        .contact-socials a:hover { color: var(--ink); }

        .footer { border-top: 1px solid var(--border); padding: 1.5rem 3rem; max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; }
        .footer-text { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.06em; }

        .pub-list { display: flex; flex-direction: column; }
        .pub-item { display: grid; grid-template-columns: 140px 1fr; gap: 3rem; padding: 3rem 0; border-bottom: 1px solid var(--border2); }
        .pub-item:last-child { border-bottom: none; padding-bottom: 0; }
        .pub-left { padding-top: 4px; }
        .pub-status { display: inline-block; font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 2px; margin-bottom: 0.8rem; background: rgba(42,107,138,0.08); color: var(--accent2); border: 1px solid rgba(42,107,138,0.2); }
        .pub-venue { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.06em; margin-bottom: 0.3rem; }
        .pub-year { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.04em; }
        .pub-title { font-family: var(--serif); font-size: 1.2rem; font-weight: 600; letter-spacing: -0.01em; line-height: 1.3; margin-bottom: 1rem; color: var(--ink); }
        .pub-desc { font-size: 0.9rem; color: var(--ink2); line-height: 1.8; font-weight: 400; margin-bottom: 0.8rem; }
        .pub-authors { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.04em; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; padding: 120px 1.5rem 60px; }
          .hero-visual { display: none; }
          .section { padding: 60px 1.5rem; }
          .section-header, .about-body, .research-main, .skills-domains, .exp-entries, .contact-wrap, .project-row { grid-template-columns: 1fr; gap: 1.5rem; }
          .research-sub-entries { margin-left: 0; grid-template-columns: 1fr; }
          .research-details { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
          .contact-body { grid-template-columns: 1fr; }
          .contact-right { align-items: flex-start; }
          .nav-links { display: none; }
          nav { padding: 0 1.5rem; }
        }
      `}</style>

      <nav>
        <a className="nav-name" href="#">Nitin Singh Rathore</a>
        <ul className="nav-links">
          <li><a href="#research">Research</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="nav-contact" href="mailto:nxr3560@mavs.uta.edu">nxr3560@mavs.uta.edu</a>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">MS Computer Science &nbsp;&nbsp; UT Arlington &nbsp;&nbsp; Dec 2026</div>
          <h1 className="hero-name">Nitin<br /><em>Singh</em><br />Rathore</h1>
          <p className="hero-desc">
            I work on <strong>motion planning, fault tolerant control, and multi agent coordination</strong> for autonomous UAV swarms. Two years shipping production backend systems across enterprise environments. C and C++ instructor as GTA at UT Arlington.
          </p>
          <div className="hero-links">
            <a href="https://github.com/Nitin3560" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/nitin-singh-rathore" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
        <div className="hero-visual">
          <svg className="drone-svg" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="drone-group">
              <line x1="150" y1="140" x2="60" y2="90" stroke="#c44a2a" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
              <line x1="150" y1="140" x2="240" y2="90" stroke="#c44a2a" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
              <line x1="150" y1="140" x2="60" y2="190" stroke="#c44a2a" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
              <line x1="150" y1="140" x2="240" y2="190" stroke="#c44a2a" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
              <circle cx="60" cy="90" r="10" fill="#1c1a17" opacity="0.9"/>
              <circle cx="240" cy="90" r="10" fill="#1c1a17" opacity="0.9"/>
              <circle cx="60" cy="190" r="10" fill="#1c1a17" opacity="0.9"/>
              <circle cx="240" cy="190" r="10" fill="#1c1a17" opacity="0.9"/>
              <ellipse cx="60" cy="90" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(-20 60 90)"/>
              <ellipse cx="60" cy="90" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(70 60 90)"/>
              <ellipse cx="240" cy="90" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(20 240 90)"/>
              <ellipse cx="240" cy="90" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(110 240 90)"/>
              <ellipse cx="60" cy="190" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(20 60 190)"/>
              <ellipse cx="60" cy="190" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(110 60 190)"/>
              <ellipse cx="240" cy="190" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(-20 240 190)"/>
              <ellipse cx="240" cy="190" rx="32" ry="5" fill="#2a6b8a" opacity="0.35" transform="rotate(70 240 190)"/>
              <rect x="118" y="118" width="64" height="44" rx="8" fill="#1c1a17" opacity="0.9"/>
              <rect x="126" y="126" width="48" height="28" rx="5" fill="#2a2825"/>
              <ellipse cx="150" cy="162" rx="10" ry="7" fill="#c44a2a" opacity="0.8"/>
              <ellipse cx="150" cy="162" rx="6" ry="4" fill="#1c1a17" opacity="0.9"/>
              <circle cx="132" cy="132" r="3" fill="#c44a2a" opacity="0.9"/>
              <circle cx="168" cy="132" r="3" fill="#3dd68c" opacity="0.9"/>
              <circle cx="150" cy="140" r="80" stroke="#c44a2a" strokeWidth="0.5" opacity="0.12" strokeDasharray="4 6"/>
              <circle cx="150" cy="140" r="110" stroke="#c44a2a" strokeWidth="0.5" opacity="0.07" strokeDasharray="4 8"/>
            </g>
            <ellipse cx="150" cy="255" rx="70" ry="8" fill="#1c1a17" opacity="0.06"/>
          </svg>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-header">
          <div className="section-num">01</div>
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-body">
          <div className="about-aside">
            <div className="about-aside-item">
              <div className="aside-label">Degree</div>
              <div className="aside-value">MS Computer Science<br />UT Arlington, Dec 2026</div>
            </div>
            <div className="about-aside-item">
              <div className="aside-label">Focus</div>
              <div className="aside-value">Distributed Systems<br />Machine Learning<br />UAV Control<br />Multi Agent RL</div>
            </div>
            <div className="about-aside-item">
              <div className="aside-label">Mentored</div>
              <div className="aside-value">100+ graduate students</div>
            </div>
          </div>
          <div className="about-text">
            <p>I am an MS Computer Science student at UT Arlington with two years of professional backend engineering behind me. Not side projects, but production Java and Apex services handling live enterprise workloads across a Salesforce ecosystem.</p>
            <p>In parallel, I am doing graduate research in <strong>UAV swarm coordination and fault tolerant multi agent control</strong>, building simulation frameworks and training MARL policies that hold up under GPS drift, sensor corruption, and communication degradation. The kind of work where the system has to keep flying even when things break.</p>
            <p>C++ was my first programming language, and I have taught C and C++ to students as a GTA at UT Arlington, supporting over <strong>100 graduate students</strong> across Machine Learning, Data Science, and systems level courses.</p>
            <p>I do my best work on <strong>hard technical problems with real constraints</strong>: bandwidth limited links, multi fault injection, production SLAs. If the system cannot afford to just restart and retry, that is exactly the environment I want to be in.</p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="section" id="research">
        <div className="section-header">
          <div className="section-num">02</div>
          <h2 className="section-title">Research</h2>
        </div>
        <div className="research-main">
          <div><span className="research-tag">Thesis — Defended</span></div>
          <div className="research-body">
            <h3 className="research-title">UAV Autonomy Research Suite</h3>
            <div className="research-subtitle">Fault tolerant supervisory control for autonomous UAV swarms</div>
            <p>The problem: when a standard controller like PID encounters a fault, it keeps pushing harder regardless of whether the error is from wind, a bad sensor, or a broken link. The <strong>supervisory layer I built watches the whole swarm</strong>, separates real failure conditions from normal tracking error, and changes how drones respond before the situation destabilizes.</p>
            <p>The supervisory architecture runs at 5Hz above PID and operates in four priority modes. <strong>Mode 3</strong> handles connectivity rescue by compressing formation scale and increasing trajectory smoothing when inter-agent connectivity drops below threshold. <strong>Mode 2</strong> freezes the PID integrator to prevent windup from amplifying fault response when actuator saturation is detected. <strong>Mode 1</strong> applies bounded reference shifts to re-anchor the swarm center of mass when persistent drift is detected and sensors are trusted. <strong>Mode 0</strong> leaves the supervisor inactive and lets PID run normally. The supervisor uses persistence checks before triggering any mode change, avoiding false positives from momentary signal noise.</p>
            <p>Validated across <strong>30 randomized seeds</strong> with controlled fault injection windows. Results are repeatable, not cherry picked. A ROS2 rclpy bridge publishes live swarm pose, odometry, actuator commands, and fault state streams. The entire stack runs in a Docker and ROS2 Jazzy containerized environment for reproducible multi-machine experiments.</p>

            <div className="swarm-visual">
              <svg viewBox="0 0 480 120" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.75, maxWidth: '100%', display: 'block'}}>
                <line x1="240" y1="60" x2="120" y2="35" stroke="#2a6b8a" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
                <line x1="240" y1="60" x2="360" y2="35" stroke="#2a6b8a" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
                <line x1="240" y1="60" x2="80" y2="75" stroke="#2a6b8a" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
                <line x1="240" y1="60" x2="400" y2="75" stroke="#2a6b8a" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
                <line x1="240" y1="60" x2="175" y2="90" stroke="#2a6b8a" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
                <line x1="240" y1="60" x2="305" y2="90" stroke="#2a6b8a" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
                <g>
                  <line x1="240" y1="60" x2="220" y2="48" stroke="#c44a2a" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                  <line x1="240" y1="60" x2="260" y2="48" stroke="#c44a2a" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                  <line x1="240" y1="60" x2="220" y2="72" stroke="#c44a2a" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                  <line x1="240" y1="60" x2="260" y2="72" stroke="#c44a2a" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                  <circle cx="220" cy="48" r="4" fill="#1c1a17" opacity="0.8"/>
                  <circle cx="260" cy="48" r="4" fill="#1c1a17" opacity="0.8"/>
                  <circle cx="220" cy="72" r="4" fill="#1c1a17" opacity="0.8"/>
                  <circle cx="260" cy="72" r="4" fill="#1c1a17" opacity="0.8"/>
                  <rect x="232" y="54" width="16" height="12" rx="3" fill="#c44a2a" opacity="0.9"/>
                </g>
                <g opacity="0.7"><rect x="114" y="30" width="12" height="9" rx="2" fill="#1c1a17"/><circle cx="110" cy="28" r="3" fill="#2a6b8a" opacity="0.6"/><circle cx="130" cy="28" r="3" fill="#2a6b8a" opacity="0.6"/></g>
                <g opacity="0.7"><rect x="354" y="30" width="12" height="9" rx="2" fill="#1c1a17"/><circle cx="350" cy="28" r="3" fill="#2a6b8a" opacity="0.6"/><circle cx="370" cy="28" r="3" fill="#2a6b8a" opacity="0.6"/></g>
                <g opacity="0.6"><rect x="74" y="70" width="12" height="9" rx="2" fill="#1c1a17"/><circle cx="70" cy="68" r="3" fill="#2a6b8a" opacity="0.6"/><circle cx="90" cy="68" r="3" fill="#2a6b8a" opacity="0.6"/></g>
                <g opacity="0.6"><rect x="394" y="70" width="12" height="9" rx="2" fill="#1c1a17"/><circle cx="390" cy="68" r="3" fill="#2a6b8a" opacity="0.6"/><circle cx="410" cy="68" r="3" fill="#2a6b8a" opacity="0.6"/></g>
                <g opacity="0.55"><rect x="169" y="85" width="12" height="9" rx="2" fill="#1c1a17"/><circle cx="165" cy="83" r="3" fill="#2a6b8a" opacity="0.6"/><circle cx="185" cy="83" r="3" fill="#2a6b8a" opacity="0.6"/></g>
                <g opacity="0.55"><rect x="299" y="85" width="12" height="9" rx="2" fill="#1c1a17"/><circle cx="295" cy="83" r="3" fill="#2a6b8a" opacity="0.6"/><circle cx="315" cy="83" r="3" fill="#2a6b8a" opacity="0.6"/></g>
                <circle cx="80" cy="65" r="8" stroke="#c44a2a" strokeWidth="1" strokeDasharray="2 2" opacity="0.6"/>
                <text x="76" y="63" fontSize="8" fill="#c44a2a" opacity="0.8" fontFamily="monospace">!</text>
                <text x="228" y="108" fontSize="9" fill="#9a9590" fontFamily="monospace" letterSpacing="0.05em">6 UAV formation</text>
                <text x="52" y="108" fontSize="9" fill="#c44a2a" fontFamily="monospace" letterSpacing="0.05em">fault active</text>
              </svg>
            </div>

            <div className="research-details">
              <div className="research-detail-block">
                <div className="rdb-label">Fault injection</div>
                <div className="rdb-items">
                  <div className="rdb-item">Wind disturbance with persistent external force</div>
                  <div className="rdb-item">Sensor corruption on position and velocity</div>
                  <div className="rdb-item">Communication degradation and packet loss</div>
                  <div className="rdb-item">Full agent dropout simulation</div>
                </div>
              </div>
              <div className="research-detail-block">
                <div className="rdb-label">Supervisor modes</div>
                <div className="rdb-items">
                  <div className="rdb-item">Mode 3: connectivity rescue, formation compression</div>
                  <div className="rdb-item">Mode 2: anti-windup, integrator freeze</div>
                  <div className="rdb-item">Mode 1: drift correction, bounded reference shift</div>
                  <div className="rdb-item">Mode 0: inactive, standard PID</div>
                </div>
              </div>
              <div className="research-detail-block">
                <div className="rdb-label">Evaluation</div>
                <div className="rdb-items">
                  <div className="rdb-item">30 randomized seeds per scenario</div>
                  <div className="rdb-item">Per-seed CSV telemetry and recovery metrics</div>
                  <div className="rdb-item">Controlled fault windows, not random noise</div>
                  <div className="rdb-item">Batch plot generation for paper figures</div>
                </div>
              </div>
              <div className="research-detail-block">
                <div className="rdb-label">Infrastructure</div>
                <div className="rdb-items">
                  <div className="rdb-item">ROS2 rclpy bridge for live swarm telemetry</div>
                  <div className="rdb-item">PyBullet with Crazyflie drone dynamics</div>
                  <div className="rdb-item">Docker and ROS2 Jazzy for reproducibility</div>
                  <div className="rdb-item">CTDE-MAPPO policies trained with RLlib</div>
                </div>
              </div>
            </div>

            <div className="research-paper-note">
              Cross-Layer Supervisory Control for Low-Altitude UAV Swarm Networks<br />
              Under review &nbsp;&nbsp; IEEE Network Magazine, 2026<br />
              Repository kept private during peer review. Now open source.
            </div>
            <div className="research-links">
              <a className="research-link" href="https://github.com/Nitin3560/uav-autonomy-research-suite" target="_blank" rel="noreferrer">View on GitHub</a>
              <a className="research-link" href="/uav-case-study">Read case study</a>
            </div>
          </div>
        </div>

        <div className="research-sub-entries">
          <div className="sub-entry">
            <div className="sub-entry-tag">Case study 01</div>
            <h4>UAV Trajectory Tracking</h4>
            <p>Controller comparison study comparing open loop, PID, and an agentic supervisor across 20 randomized seeds with fault injection across wind, sensor corruption, and communication degradation.</p>
            <p>The agentic supervisor runs at 5Hz on top of PID, distinguishes between sensor-corrupted and trusted agents, freezes reference shifts during severe communication loss, and uses persistence checks before triggering any mode change. Isolates how each controller behaves when tracking error comes from a real fault rather than normal lag.</p>
            <a className="sub-entry-link" href="https://github.com/Nitin3560/uav-trajectory-tracking" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="sub-entry">
            <div className="sub-entry-tag">Case study 02</div>
            <h4>Multi-Agent Task Allocation</h4>
            <p>CTDE-MAPPO trained swarm policy for collaborative task allocation and adaptive relay routing across 6 UAVs under dynamic task arrivals and constrained communication and energy budgets.</p>
            <p>The learned joint policy is evaluated against three non-learning baselines: static allocation, fixed relay tree, and energy-aware greedy. Measured on task completion rate, throughput, and Age of Information. Ablations isolate the contribution of task allocation and relay routing independently.</p>
            <a className="sub-entry-link" href="https://github.com/Nitin3560/uav-marl-task-allocation" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="section" id="publications">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2 className="section-title">Publications</h2>
        </div>
        <div className="pub-list">
          <div className="pub-item">
            <div className="pub-left">
              <div className="pub-status">Under Review</div>
              <div className="pub-venue">IEEE Network Magazine</div>
              <div className="pub-year">2026</div>
            </div>
            <div className="pub-right">
              <h3 className="pub-title">Cross-Layer Supervisory Control for Low-Altitude UAV Swarm Networks</h3>
              <p className="pub-desc">This paper presents a cross-layer supervisory architecture for fault tolerant coordination in low-altitude UAV swarm networks. The supervisory layer operates above a classical PID control loop and makes fault classification decisions across the dynamics, sensing, and communication layers simultaneously, rather than treating each failure mode independently. The architecture is validated in a physics-based simulation environment across 30 randomized seeds with controlled fault injection across wind disturbance, sensor corruption, communication degradation, and agent dropout.</p>
              <p className="pub-authors">Nitin Singh Rathore &nbsp;&nbsp; UT Arlington, 2026</p>
            </div>
          </div>
          <div className="pub-item">
            <div className="pub-left">
              <div className="pub-status">Defended</div>
              <div className="pub-venue">MS Thesis</div>
              <div className="pub-year">2026</div>
            </div>
            <div className="pub-right">
              <h3 className="pub-title">Cross-Layer Supervisory Control for Low-Altitude UAV Swarm Networks</h3>
              <p className="pub-desc">MS thesis at UT Arlington exploring how multi-UAV systems can remain controllable and coordinated when the environment becomes unreliable. Instead of replacing classical control with a learned policy, the work layers a diagnosis driven supervisory mechanism on top of a stable PID control loop, letting the swarm respond differently to dynamics faults, sensing faults, and communication degradation. The contribution is a systems perspective on how bounded decision loops, coordination, and supervision can coexist in a deployable autonomy architecture.</p>
              <p className="pub-authors">Nitin Singh Rathore &nbsp;&nbsp; UT Arlington &nbsp;&nbsp; Advisor: Dr. Md Salik Parwez</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-header">
          <div className="section-num">04</div>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="project-row">
          <div className="project-row-left">
            <div className="project-index">01</div>
            <span className="project-type-tag tag-systems">Systems</span>
          </div>
          <div className="project-row-right">
            <h3 className="project-row-title">Traceback AI</h3>
            <div className="project-row-subtitle">Root cause analysis for distributed microservice failures &nbsp;&nbsp; Nexus Hackathon</div>
            <p>When something breaks across 10+ microservices, figuring out what actually caused it is slow and mostly guesswork. Traceback ingests logs, metrics, and deployment events, models inter-service dependencies as a graph, and surfaces <strong>ranked root cause hypotheses with evidence backed scoring</strong>.</p>
            <p>The normalization pipeline standardizes 5 heterogeneous telemetry formats including Prometheus, structured JSON, and raw log streams, cutting normalization latency by 60%. Z-score anomaly detection adapts to each service's baseline behavior rather than applying a fixed cutoff, reducing false positive signals by 30%. Graph traversal traces failure propagation across 3+ dependency hops. The multi-factor ranking engine surfaces the correct root cause in top-3 results <strong>87% of the time</strong>.</p>
            <div className="project-row-footer">
              <div className="stack-wrap" style={{margin: 0}}>
                <span className="stack-chip">FastAPI</span>
                <span className="stack-chip">Python</span>
                <span className="stack-chip">Graph traversal</span>
                <span className="stack-chip">Z-Score anomaly</span>
                <span className="stack-chip">OpenTelemetry</span>
              </div>
              <a className="project-row-link" href="https://github.com/Nitin3560/traceback-ai" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="project-row">
          <div className="project-row-left">
            <div className="project-index">02</div>
            <span className="project-type-tag tag-product">Product</span>
          </div>
          <div className="project-row-right">
            <h3 className="project-row-title">JobPrep AI</h3>
            <div className="project-row-subtitle">Conversational RAG assistant &nbsp;&nbsp; Deployed on GCP &nbsp;&nbsp; 12 to 15 active users</div>
            <p>Reads a candidate's resume and generates personalized, context-aware answers for job application questions grounded in actual experience, not generic phrasing. A generic prompt has no grounding and fabricates specifics or stays vague. JobPrep retrieves actual content from the candidate's documents before generating, so answers reference real projects, real metrics, and real experience.</p>
            <p>Built to run <strong>fully offline via Ollama</strong> with no external API dependency or data sent to third party services. FastAPI backend with LlamaIndex vector search achieving sub 2 second response times. Incremental embedding logic improves re-indexing efficiency by 45%. React frontend deployed on GCP Cloud Run serving real active user sessions.</p>
            <div className="project-row-footer">
              <div className="stack-wrap" style={{margin: 0}}>
                <span className="stack-chip">FastAPI</span>
                <span className="stack-chip">LlamaIndex</span>
                <span className="stack-chip">Ollama</span>
                <span className="stack-chip">React</span>
                <span className="stack-chip">GCP Cloud Run</span>
              </div>
              <a className="project-row-link" href="https://github.com/Nitin3560/JobPrep-AI-Conversational-RAG-Document-Assistant" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-header">
          <div className="section-num">05</div>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-domains">
          <div></div>
          <div className="skills-grid">
            <div className="skill-domain">
              <div className="skill-domain-name">Languages</div>
              <div className="skill-tags">
                <span className="skill-tag hl-red">C++</span>
                <span className="skill-tag hl-red">C</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Golang</span>
              </div>
            </div>
            <div className="skill-domain">
              <div className="skill-domain-name">Autonomy &amp; Simulation</div>
              <div className="skill-tags">
                <span className="skill-tag hl-blue">ROS2</span>
                <span className="skill-tag hl-blue">PyBullet</span>
                <span className="skill-tag">CTDE-MAPPO</span>
                <span className="skill-tag">RLlib</span>
                <span className="skill-tag">PettingZoo</span>
                <span className="skill-tag">Gymnasium</span>
                <span className="skill-tag">Fault injection</span>
                <span className="skill-tag">Multi seed eval</span>
              </div>
            </div>
            <div className="skill-domain">
              <div className="skill-domain-name">Backend &amp; Systems</div>
              <div className="skill-tags">
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">Event driven arch.</span>
                <span className="skill-tag">REST &amp; SOAP</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>
            <div className="skill-domain">
              <div className="skill-domain-name">AI &amp; ML</div>
              <div className="skill-tags">
                <span className="skill-tag">LlamaIndex</span>
                <span className="skill-tag">RAG pipelines</span>
                <span className="skill-tag">Ollama</span>
                <span className="skill-tag">Multi agent RL</span>
                <span className="skill-tag">Anomaly detection</span>
                <span className="skill-tag">Vector search</span>
              </div>
            </div>
            <div className="skill-domain">
              <div className="skill-domain-name">Cloud &amp; DevOps</div>
              <div className="skill-tags">
                <span className="skill-tag">GCP</span>
                <span className="skill-tag">AWS EC2 / ECS / S3</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">CodePipeline</span>
                <span className="skill-tag">CloudWatch</span>
                <span className="skill-tag">IAM</span>
              </div>
            </div>
            <div className="skill-domain">
              <div className="skill-domain-name">Frontend</div>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Real time dashboards</span>
                <span className="skill-tag">Data visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-header">
          <div className="section-num">06</div>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="exp-entries">
          <div></div>
          <div>
            <div className="exp-item">
              <div className="exp-header">
                <div className="exp-role">Graduate Teaching Assistant</div>
                <div className="exp-period">Aug 2025 to Present</div>
              </div>
              <div className="exp-company">UT Arlington</div>
              <ul className="exp-bullets">
                <li>TA for <strong>4 graduate courses</strong> including Machine Learning, Data Science, Foundations of Computing, and Introduction to Programming, supporting 100+ graduate students through coursework, debugging sessions, and applied projects.</li>
                <li>Diagnoses low-level <strong>C and C++ bugs</strong> for students: segmentation faults, memory allocation errors, and runtime undefined behavior across systems-level assignments.</li>
                <li>Built a Python automated grading tool from scratch that validates submission structure and evaluates student code, eliminating manual review overhead across <strong>100+ weekly submissions</strong>.</li>
                <li>Conducting concurrent research in UAV swarm coordination, fault tolerant control, and multi agent reinforcement learning.</li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <div className="exp-role">Junior Software Developer</div>
                <div className="exp-period">Sept 2023 to Oct 2024</div>
              </div>
              <div className="exp-company">WERBOOZ India</div>
              <ul className="exp-bullets">
                <li>Engineered and maintained <strong>6 Java and Apex backend services</strong> across 3 enterprise clients in a Salesforce ecosystem, sustaining 99.8% API uptime and reducing manual processing overhead by 40%.</li>
                <li>Optimized <strong>15+ SQL and SOQL queries</strong>, cutting average query latency by 35% across production workloads.</li>
                <li>Authored <strong>500+ test cases</strong> across JUnit, Postman, and Tosca, reducing post-release defects by 30% and cutting QA cycle time by 2 days per sprint.</li>
                <li>Resolved <strong>12 critical production incidents</strong> within 2-hour SLA windows via log analysis and root cause debugging. Zero SLA breaches.</li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <div className="exp-role">Software Developer Intern</div>
                <div className="exp-period">Feb 2023 to Sept 2023</div>
              </div>
              <div className="exp-company">WERBOOZ India</div>
              <ul className="exp-bullets">
                <li>Refactored <strong>4 Java and SQL data access modules</strong>, reducing query latency from 320ms to 275ms and improving overall module efficiency by 15%.</li>
                <li>Wrote JUnit test suites across 3 release cycles, catching and eliminating <strong>20+ pre-production bugs</strong> before reaching QA.</li>
                <li>Shipped 4 backend features via Git PR workflows across 2 major quarterly releases with full Agile participation from spec to deployment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-wrap" id="contact">
        <div></div>
        <div className="contact-body">
          <div>
            <h2 className="contact-heading">{"Let's build"}<br />something<br /><em>that matters.</em></h2>
            <p className="contact-sub">Working on autonomous systems, distributed infrastructure, or hard problems in defense tech? I want to hear about it.</p>
          </div>
          <div className="contact-right">
            <a className="contact-email" href="mailto:nxr3560@mavs.uta.edu">nxr3560@mavs.uta.edu</a>
            <div className="contact-socials">
              <a href="https://github.com/Nitin3560" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/nitin-singh-rathore" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <span className="footer-text">Nitin Singh Rathore &nbsp;&nbsp; 2026</span>
        <span className="footer-text">Autonomy &amp; Systems Engineering &nbsp;&nbsp; UT Arlington</span>
      </div>
    </>
  );
}

