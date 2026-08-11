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
              I'm <span className="text-white font-medium">Kajal Sharma</span>,
              a B.Sc. CSIT student and aspiring QA Engineer & MERN Stack
              Developer with a strong interest in building reliable and
              user-focused software.
            </p>

            <p>
              My experience covers both software development and quality
              assurance. I've worked on web applications using React, Node.js,
              Express.js, and MongoDB while also designing test cases,
              executing functional and regression testing, and reporting
              defects.
            </p>

            <p>
              On the QA side, I have hands-on experience with manual testing,
              API testing using Postman, browser DevTools, test case design,
              bug reporting, and automation testing using Selenium, Python,
              and Pytest.
            </p>

            <p>
              I've also worked on backend development, REST APIs,
              authentication, database integration, and full-stack projects.
              I enjoy understanding how a system works, finding what can go
              wrong, and helping build a better product.
            </p>

            <p>
              I'm continuously learning and looking for opportunities where I
              can contribute as a QA Engineer while growing my technical
              development skills.
            </p>
          </div>

          {/* Information cards */}
          <div className="grid content-start gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/20">
              <p className="text-sm text-gray-500">Primary Focus</p>
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
                Postman & REST APIs
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/20">
              <p className="text-sm text-gray-500">Automation</p>
              <p className="mt-2 font-medium">
                Selenium & Pytest
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;