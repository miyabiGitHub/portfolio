import { useEffect, useState, useCallback } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import type { ISourceOptions } from "@tsparticles/engine";

export default function HeroSection() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#4F8EF7", "#A855F7", "#EC4899", "#38BDF8", "#818CF8"],
      },
      links: {
        color: "#4F8EF7",
        distance: 140,
        enable: true,
        opacity: 0.12,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          height: 900,
          width: 1600,
        },
        value: 90,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.8,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 1.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000510]"
    >
      {/* Particles */}
      {engineReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={particlesOptions}
        />
      )}

      {/* Aurora glow orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-aurora-pulse"
          style={{ background: "rgba(79, 142, 247, 0.15)" }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-[400px] h-[400px] rounded-full blur-[120px] animate-aurora-pulse delay-700"
          style={{ background: "rgba(168, 85, 247, 0.15)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] rounded-full blur-[120px] animate-aurora-pulse delay-1000"
          style={{ background: "rgba(236, 72, 153, 0.12)" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-grid opacity-40" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,5,16,0.3) 0%, transparent 50%, rgba(0,5,16,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-aurora-blue/30 bg-aurora-blue/10"
        >
          <span className="w-2 h-2 rounded-full bg-aurora-blue animate-pulse" />
          <span className="text-aurora-blue text-sm font-mono tracking-widest uppercase">
            Engineer Portfolio
          </span>
        </motion.div>

        <motion.h1
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI × Web
          </span>
          <br />
          <span className="text-white">× Infrastructure</span>
        </motion.h1>

        <motion.p
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ChatGPT・Claude等のLLMを活用したアプリ開発を得意とし、
          <br className="hidden md:block" />
          インフラからアプリ実装まで一貫して対応するエンジニアです
        </motion.p>

        <motion.div
          custom={0.7}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#work" className="glow-button text-white w-full sm:w-auto">
            <span className="relative z-10">View Works</span>
          </a>
          <a href="#contact" className="outline-button w-full sm:w-auto">
            Contact
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 tracking-[0.2em] uppercase font-mono">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #4F8EF7, transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
