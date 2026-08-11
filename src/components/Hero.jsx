import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-gray-500"
          >
            QA Engineer & MERN Stack Developer
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Kajal Sharma.
            </span>
            <br />
            I build.
            <br />
            I test.
            <br />
            I improve.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
          >
            I combine quality assurance and full-stack development to build
            reliable, user-focused web applications. I enjoy finding issues,
            solving problems, and turning ideas into better software.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              View My Projects
            </a>

             {/* Resume */}
  <a
    href="/Kajal_Sharma_Resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
  >
    Download Resume ↗
  </a>
  
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 border-t border-white/10 pt-6"
          >
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-widest text-gray-600">
              <span>Manual Testing</span>
              <span>•</span>
              <span>API Testing</span>
              <span>•</span>
              <span>Automation</span>
              <span>•</span>
              <span>MERN Stack</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;