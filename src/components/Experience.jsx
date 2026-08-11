function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Experience
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Where I've been
            <br />
            learning & working.
          </h2>
        </div>

        {/* Experience item */}
        <div className="mt-12 border-t border-white/10">

          <div className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-[180px_1fr]">

            {/* Date */}
            <div className="text-sm text-gray-500">
              2026 — Present
            </div>

            {/* Details */}
            <div>
              <h3 className="text-2xl font-semibold">
                QA Intern
              </h3>

              <p className="mt-2 text-gray-500">
                Trackon Nepal Pvt. Ltd.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400">
                Working on manual and API testing of web applications,
                focusing on functionality, usability, and software quality.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-400">
                <li>• Created and executed test cases for web application modules.</li>
                <li>• Performed API testing using Postman.</li>
                <li>• Tested authentication and payment-related APIs.</li>
                <li>• Identified, documented, and verified bugs and fixes.</li>
                <li>• Used browser DevTools and network requests during testing.</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  Manual Testing
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  API Testing
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  Postman
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  Test Cases
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;