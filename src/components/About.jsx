function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Building with curiosity,
            <br />
            testing with purpose.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-12 md:grid-cols-2">

          {/* About text */}
          <div className="space-y-5 text-base leading-7 text-gray-400 sm:text-lg">
            <p>
              I'm Kajal Sharma, a Computer Science and Information Technology
              student with a growing focus on software quality and full-stack
              web development.
            </p>

            <p>
              My experience spans both sides of the development process. I
              enjoy building web applications with the MERN stack while also
              testing applications to identify issues, verify functionality,
              and improve the overall user experience.
            </p>

            <p>
              I've worked with manual testing, API testing using Postman,
              browser testing, test case design, and automation using Selenium
              and Python. On the development side, I work with React, Node.js,
              Express.js, and MongoDB.
            </p>

            <p>
              I'm always looking to learn, experiment, and improve — whether
              that means finding a bug others missed or turning an idea into
              a working application.
            </p>
          </div>

          {/* Information cards */}
          <div className="grid content-start gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/20">
              <p className="text-sm text-gray-500">Focus</p>
              <p className="mt-2 font-medium">
                QA & Software Testing
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/20">
              <p className="text-sm text-gray-500">Development</p>
              <p className="mt-2 font-medium">
                MERN Stack
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/20">
              <p className="text-sm text-gray-500">API Testing</p>
              <p className="mt-2 font-medium">
                Postman
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/20">
              <p className="text-sm text-gray-500">Automation</p>
              <p className="mt-2 font-medium">
                Selenium & Python
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;