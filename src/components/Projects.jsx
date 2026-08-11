function Projects() {
  const projects = [
    {
      title: "FitMate AI",
      description:
        "An AI-powered fitness web application built to help users manage their fitness journey through personalized features and recommendations.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
      github: "https://github.com/kajal-verse/FitMate-AI",
      live: "#",
    },
    {
      title: "CareerYatra",
      description:
        "A MERN stack job portal that connects job seekers and recruiters with features for authentication, job management, profiles, and applications.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/kajal-verse/career-job-portal-mern",
      live: "#",
    },
    {
      title: "VoteNepal",
      description:
        "A web-based voting application focused on providing a simple platform for managing users, elections, and voting functionality.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Projects
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Things I've
            <br />
            built.
          </h2>
        </div>

        {/* Projects */}
        <div className="mt-12 space-y-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-white/10 p-7 transition-colors hover:border-white/20 sm:p-9"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-start">

                {/* Number */}
                <span className="text-sm text-gray-600">
                  0{index + 1}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 transition-colors hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 transition-colors hover:text-white"
                  >
                    Live ↗
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;