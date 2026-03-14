import profile from "./data/profile";
import UltraLiquidCanvas from "./components/UltraLiquidCanvas";
import CursorMagnet from "./components/CursorMagnet";
import TiltCard from "./components/TiltCard";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ImageModal from "./components/ImageModal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const hoverEffect = {
    whileHover: { scale: 1.04 },
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
      mass: 0.4
    }
  };

  return (
    <div className="overflow-x-hidden relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <UltraLiquidCanvas />
      <CursorMagnet />
      <ThemeToggle />
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-40 pb-32 px-24 scroll-mt-32"
      >
        {/* Cinematic Radial Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[700px] h-[700px] bg-black/5 dark:bg-white/5 blur-[140px] rounded-full mt-20"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-8xl font-bold tracking-tight leading-[0.95]">
              {profile.name}
            </h1>

            <p className="mt-8 text-3xl font-medium opacity-80">
              {profile.title}
            </p>

            <p className="mt-10 text-lg opacity-60 leading-relaxed max-w-xl">
              {profile.about}
            </p>

            <div className="mt-14 flex gap-6">
              <motion.a
                {...hoverEffect}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/60 dark:bg-white/10
                  backdrop-blur-xl
                  border border-black/10 dark:border-white/20
                  shadow-lg hover:shadow-2xl
                  px-10 py-4 rounded-full
                  text-sm font-medium
                  transition-all duration-300
                "
              >
                LinkedIn
              </motion.a>

              <motion.a
                {...hoverEffect}
                href="/resume.pdf"
                download
                className="
                  bg-white/60 dark:bg-white/10
                  backdrop-blur-xl
                  border border-black/10 dark:border-white/20
                  shadow-lg hover:shadow-2xl
                  px-10 py-4 rounded-full
                  text-sm font-medium
                  transition-all duration-300
                "
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ y: -10 }}
            className="flex justify-center"
          >
            <img
              src={profile.image}
              alt="Profile"
              className="
                w-96 h-96 object-cover rounded-3xl
                border border-black/10 dark:border-white/20
                shadow-2xl
              "
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT DEEP DIVE ================= */}
<section id="about" className="relative py-40 px-24 scroll-mt-32">
  <div className="max-w-5xl mx-auto">
    
    <p className="uppercase tracking-widest text-xs opacity-50 mb-4">
      Who I Am
    </p>

    <h2 className="text-5xl font-semibold tracking-tight mb-14">
      Building Systems That Actually Work.
    </h2>

    <p className="text-lg leading-relaxed opacity-70 mb-8">
      I am currently working as an ERP Analyst, deeply involved in optimizing 
      business processes across HRMS, Store, and Construction modules. 
      My role bridges technical implementation with real-world operational needs.
    </p>

    <p className="text-lg leading-relaxed opacity-70 mb-8">
      Alongside enterprise systems, I actively build modern web applications 
      using React, Node.js, and MongoDB — combining structured backend logic 
      with immersive frontend experiences.
    </p>

    <p className="text-lg leading-relaxed opacity-70">
      My goal is simple: design software that is not just functional,
      but scalable, elegant, and impactful.
    </p>

  </div>
</section>
 {/* ================= CURRENT FOCUS ================= */}
<section className="relative py-40 px-24">
  <div className="max-w-5xl mx-auto">
    
    <p className="uppercase tracking-widest text-xs opacity-50 mb-4">
      Current Focus
    </p>

    <h2 className="text-5xl font-semibold tracking-tight mb-12">
      What I'm Building Now
    </h2>

    <ul className="space-y-6 text-lg opacity-70">
      <li>• Full-scale Construction ERP enhancements</li>
      <li>• Advanced React portfolio with WebGL animations</li>
      <li>• Backend system optimization & API scaling</li>
      <li>• Exploring AI integrations in ERP workflows</li>
    </ul>

  </div>
</section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="relative py-40 px-24 section-divider scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs opacity-50 mb-4">
            Expertise
          </p>
          <h2 className="text-5xl font-semibold tracking-tight mb-20">
            Core Skills
          </h2>

          <div className="grid grid-cols-4 gap-10">
            {profile.skills?.map((skill, index) => (
              <TiltCard key={index}>{skill}</TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="relative py-40 px-24 section-divider scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs opacity-50 mb-4">
            Journey
          </p>
          <h2 className="text-5xl font-semibold tracking-tight mb-20">
            Experience
          </h2>

          <div className="space-y-12">
            {profile.experience?.map((exp, index) => (
              <TiltCard key={index}>
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="opacity-70 mt-2">{exp.company}</p>
                <p className="opacity-50 mt-4">{exp.description}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative py-40 px-24 section-divider scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs opacity-50 mb-4">
            Selected Work
          </p>
          <h2 className="text-5xl font-semibold tracking-tight mb-20">
            Projects
          </h2>

          <div className="grid grid-cols-2 gap-16">
            {profile.projects?.map((proj, index) => (
              <TiltCard key={index}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  onClick={() => setSelectedImage(proj.image)}
                  className="rounded-2xl mb-6 cursor-pointer"
                />
                <h3 className="text-xl font-semibold">{proj.title}</h3>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section
        id="certificates"
        className="relative py-40 px-24 section-divider scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs opacity-50 mb-4">
            Achievements
          </p>
          <h2 className="text-5xl font-semibold tracking-tight mb-20">
            Certificates
          </h2>

          <div className="grid grid-cols-3 gap-12">
            {profile.certificates?.map((cert, index) => (
              <TiltCard key={index}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  onClick={() => setSelectedImage(cert.image)}
                  className="rounded-xl mb-4 cursor-pointer"
                />
                <h3 className="font-semibold">{cert.title}</h3>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PERSONAL NOTE ================= */}
<section className="relative py-40 px-24 text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-semibold mb-8">
      Beyond Code
    </h2>
    <p className="text-lg opacity-70 leading-relaxed">
      I believe software should feel invisible — powerful yet seamless.
      When I'm not working on enterprise systems or building web apps,
      I'm constantly learning, experimenting, and pushing the limits of design + engineering.
    </p>
  </div>
</section>  

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative py-48 px-24 flex items-center justify-center scroll-mt-32"
      >
        <motion.div
          {...hoverEffect}
          className="
            bg-white/60 dark:bg-white/10
            backdrop-blur-xl
            border border-black/10 dark:border-white/20
            shadow-lg hover:shadow-2xl
            px-14 py-6 rounded-full
            text-sm font-medium
            transition-all duration-300
          "
        >
          Let’s Build Something Powerful 📈
        </motion.div>
      </section>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}