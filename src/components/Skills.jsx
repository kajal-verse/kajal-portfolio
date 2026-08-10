function Skills() {
  const skillGroups = [
    {
      title: "Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "QA & Testing",
      skills: [
        "Manual Testing",
        "Test Case Design",
        "Bug Reporting",
        "API Testing",
        "Postman",
        "Selenium",
        "Pytest",
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Chrome DevTools",
        "REST APIs",
      ],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Skills
        </p>

        <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          What I work with
          <br />
          to build & test.
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 p-7"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;