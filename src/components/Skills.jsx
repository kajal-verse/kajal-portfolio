import { Code2, FlaskConical, Settings } from "lucide-react";

function SkillBadge({ name }) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-gray-400 transition-all hover:border-cyan-400/40 hover:text-white">
      {name}
    </span>
  );
}

function SkillCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 transition-all hover:border-cyan-400/30">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
          <Icon size={20} className="text-cyan-400" />
        </div>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            What I work with
            <br />
            <span className="text-gray-400">
              to build & test.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">

          <SkillCard icon={Code2} title="Development">
            <SkillBadge name="HTML" />
            <SkillBadge name="CSS" />
            <SkillBadge name="JavaScript" />
            <SkillBadge name="React" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="Express.js" />
            <SkillBadge name="MongoDB" />
          </SkillCard>

          <SkillCard icon={FlaskConical} title="QA & Testing">
            <SkillBadge name="Manual Testing" />
            <SkillBadge name="Test Case Design" />
            <SkillBadge name="Bug Reporting" />
            <SkillBadge name="API Testing" />
            <SkillBadge name="Postman" />
            <SkillBadge name="Selenium" />
            <SkillBadge name="Pytest" />
          </SkillCard>

          <SkillCard icon={Settings} title="Tools & Workflow">
            <SkillBadge name="Git" />
            <SkillBadge name="GitHub" />
            <SkillBadge name="VS Code" />
            <SkillBadge name="Chrome DevTools" />
            <SkillBadge name="REST APIs" />
          </SkillCard>

        </div>
      </div>
    </section>
  );
}

export default Skills;