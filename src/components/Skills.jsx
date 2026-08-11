import { Code2, FlaskConical, Settings } from "lucide-react";

const logos = {
  html: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#E34F26"
        d="M2 2h20l-1.8 20L12 24l-8.2-2L2 2z"
      />
      <path
        fill="#fff"
        d="M12 4v17.3l6.2-1.7L19.5 4H12zm0 3h4.3l-.2 2H12V7zm0 4h3.9l-.4 4.2-3.5 1v-2.1l1.6-.4.2-1H12v-1.7z"
      />
    </svg>
  ),

  css: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#1572B6"
        d="M2 2h20l-1.8 20L12 24l-8.2-2L2 2z"
      />
      <path
        fill="#fff"
        d="M12 4v17.3l6.2-1.7L19.5 4H12zm0 3h4.3l-.2 2H12V7zm0 4h3.9l-.4 4.2-3.5 1v-2.1l1.6-.4.2-1H12v-1.7z"
      />
    </svg>
  ),

  javascript: (
    <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#F7DF1E] text-[10px] font-bold text-black">
      JS
    </div>
  ),

  react: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  ),

  node: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#539E43"
        d="M12 2 3.3 7v10L12 22l8.7-5V7L12 2zm0 2.3 6.7 3.9v7.6L12 19.7l-6.7-3.9V8.2L12 4.3z"
      />
      <path
        fill="#539E43"
        d="M12 7.2 8 9.5v5l4 2.3 4-2.3v-5l-4-2.3zm0 2.1 2.1 1.2v2.6L12 14.3l-2.1-1.2v-2.6L12 9.3z"
      />
    </svg>
  ),

  mongodb: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#47A248"
        d="M12 2c-.5 3.2-2.9 4.8-4.2 7.1-1.6 2.9-.5 6.4 3.2 8.4v3.2h2v-3.2c3.7-2 4.8-5.5 3.2-8.4C14.9 6.8 12.5 5.2 12 2z"
      />
      <path
        fill="#fff"
        d="M12 6v13.5c.3-.1.7-.2 1-.4V6.8c-.3-.3-.7-.6-1-.8z"
        opacity=".8"
      />
    </svg>
  ),

  postman: (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6C37] text-[10px] font-bold text-white">
      P
    </div>
  ),

  selenium: (
    <div className="flex h-5 w-5 items-center justify-center rounded text-[9px] font-bold text-white">
      Se
    </div>
  ),

  python: (
    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#3776AB] text-[9px] font-bold text-white">
      Py
    </div>
  ),

  git: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#F05032"
        d="M21.6 11.3 12.7 2.4a1.4 1.4 0 0 0-2 0L8.9 4.2l2.2 2.2a1.8 1.8 0 0 1 2.2 2.2l2.1 2.1a1.8 1.8 0 1 1-1.1 1.1l-2-2v5.3a1.8 1.8 0 1 1-1.5 0V9.8a1.8 1.8 0 0 1-.9-2.3L7.7 5.4l-5.3 5.3a1.4 1.4 0 0 0 0 2l8.9 8.9a1.4 1.4 0 0 0 2 0l8.3-8.3a1.4 1.4 0 0 0 0-2z"
      />
    </svg>
  ),

  github: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C14.6 6 15.6 6.3 15.6 6.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.7 1 .7 1.9v2.8c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  ),

  vscode: (
    <div className="flex h-5 w-5 items-center justify-center text-[10px] font-bold text-[#007ACC]">
      VS
    </div>
  ),

  chrome: (
    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-400 text-[8px] font-bold text-cyan-400">
      C
    </div>
  ),

  api: (
    <div className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-cyan-400">
      API
    </div>
  ),
};

function SkillBadge({ icon, name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white">
      {icon}
      <span>{name}</span>
    </span>
  );
}

function SkillCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.025]">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
          <Icon size={20} className="text-cyan-400" />
        </div>

        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            What I work with
            <br />
            <span className="text-gray-400">to build & test.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Development */}
          <SkillCard icon={Code2} title="Development">
            <SkillBadge icon={logos.html} name="HTML" />
            <SkillBadge icon={logos.css} name="CSS" />
            <SkillBadge icon={logos.javascript} name="JavaScript" />
            <SkillBadge icon={logos.react} name="React" />
            <SkillBadge icon={logos.node} name="Node.js" />
            <SkillBadge icon={logos.mongodb} name="MongoDB" />
          </SkillCard>

          {/* QA */}
          <SkillCard icon={FlaskConical} title="QA & Testing">
            <SkillBadge icon={logos.selenium} name="Manual Testing" />
            <SkillBadge icon={logos.api} name="API Testing" />
            <SkillBadge icon={logos.postman} name="Postman" />
            <SkillBadge icon={logos.selenium} name="Selenium" />
            <SkillBadge icon={logos.python} name="Pytest" />
            <SkillBadge icon={logos.api} name="Test Cases" />
            <SkillBadge icon={logos.api} name="Bug Reporting" />
          </SkillCard>

          {/* Tools */}
          <SkillCard icon={Settings} title="Tools & Workflow">
            <SkillBadge icon={logos.git} name="Git" />
            <SkillBadge icon={logos.github} name="GitHub" />
            <SkillBadge icon={logos.vscode} name="VS Code" />
            <SkillBadge icon={logos.chrome} name="Chrome DevTools" />
            <SkillBadge icon={logos.api} name="REST APIs" />
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

export default Skills;