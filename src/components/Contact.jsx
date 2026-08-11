function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        <div className="border-t border-white/10 pt-16">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Let's build something
            <br />
            <span className="text-gray-500">great together.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I'm open to opportunities where I can contribute, learn, and
            grow as a QA Engineer and MERN Stack Developer.
          </p>

          {/* Email */}
          <div className="mt-10">
          <a
  href="mailto:shrmakajal963@gmail.com"
  className="text-lg font-medium transition-colors hover:text-gray-400 sm:text-xl"
>
  shrmakajal963@gmail.com ↗
</a>  
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
            <a
              href="https://github.com/kajal-verse"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
  href="https://www.linkedin.com/in/kajal-sharma-b7b194276"
  target="_blank"
  rel="noreferrer"
  className="transition-colors hover:text-white"
>
  LinkedIn ↗
</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;