import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Lightbulb,
  Rocket,
  FolderOpen,
  Download,
  Mail,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-36"
    >
      {/* Background glow */}
      <div className="relative mx-auto max-w-6xl">
</div>
      {/* Grid background */}
      

      <div className="relative mx-auto max-w-6xl">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          Open to Software Development and Testing Opportunities
        </motion.div>

        

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[82px]"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kajal Sharma.
            </span>
            <br />
            I build.
            <br />
            I test.
            <br />
            <span className="text-gray-500">I improve.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
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
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {/* Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              <FolderOpen size={17} />
              View My Projects
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Resume */}
            <a
              href="/Kajal_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-medium text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              <Download size={17} />
              Download Resume
              <span>↗</span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              <Mail size={17} />
              Contact Me
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Highlight features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 grid max-w-4xl grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Quality */}
          <div className="flex gap-3 border-white/10 py-5 sm:border-r lg:px-5 lg:first:pl-0">
            <ShieldCheck
              size={25}
              className="mt-1 shrink-0 text-cyan-400"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                Quality Focused
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Delivering bug-free experiences
              </p>
            </div>
          </div>

          {/* Clean Code */}
          <div className="flex gap-3 border-white/10 py-5 lg:border-r lg:px-5">
            <Code2 size={25} className="mt-1 shrink-0 text-cyan-400" />
            <div>
              <p className="text-sm font-semibold text-white">Clean Code</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Writing maintainable & scalable code
              </p>
            </div>
          </div>

          {/* Problem Solver */}
          <div className="flex gap-3 border-white/10 py-5 sm:border-r lg:px-5">
            <Lightbulb size={25} className="mt-1 shrink-0 text-cyan-400" />
            <div>
              <p className="text-sm font-semibold text-white">
                Problem Solver
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Turning challenges into smart solutions
              </p>
            </div>
          </div>

          {/* Fast Learner */}
          <div className="flex gap-3 py-5 lg:px-5 lg:pr-0">
            <Rocket size={25} className="mt-1 shrink-0 text-cyan-400" />
            <div>
              <p className="text-sm font-semibold text-white">Fast Learner</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Always learning & adapting
              </p>
            </div>
          </div>
        </motion.div>
    
    </section>
  );
}

export default Hero;