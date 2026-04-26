import { motion } from "framer-motion";
import { Bot } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
  color: string;
  isDevicon?: boolean;
  emoji?: string;
}

interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    color: "#4F8EF7",
    skills: [
      { name: "Python", icon: "devicon-python-plain colored", color: "#3776AB", isDevicon: true },
      { name: "Java", icon: "devicon-java-plain colored", color: "#ED8B00", isDevicon: true },
      { name: "PHP", icon: "devicon-php-plain colored", color: "#777BB4", isDevicon: true },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "#F7DF1E", isDevicon: true },
      { name: "VBA", icon: "", emoji: "📊", color: "#217346", isDevicon: false },
    ],
  },
  {
    category: "AI / LLM",
    color: "#A855F7",
    skills: [
      { name: "OpenAI API", icon: "", emoji: "🤖", color: "#10A37F", isDevicon: false },
      { name: "ChatGPT", icon: "", emoji: "💬", color: "#10A37F", isDevicon: false },
    ],
  },
  {
    category: "Cloud / Infra",
    color: "#EC4899",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored", color: "#FF9900", isDevicon: true },
      { name: "Linux", icon: "devicon-linux-plain colored", color: "#FCC624", isDevicon: true },
    ],
  },
  {
    category: "Database",
    color: "#38BDF8",
    skills: [
      { name: "Oracle", icon: "devicon-oracle-original colored", color: "#F80000", isDevicon: true },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", color: "#336791", isDevicon: true },
      { name: "MySQL", icon: "devicon-mysql-plain colored", color: "#4479A1", isDevicon: true },
    ],
  },
  {
    category: "Frontend",
    color: "#818CF8",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored", color: "#E34F26", isDevicon: true },
      { name: "CSS3", icon: "devicon-css3-plain colored", color: "#1572B6", isDevicon: true },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "#F7DF1E", isDevicon: true },
    ],
  },
  {
    category: "Tools",
    color: "#34D399",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored", color: "#F05032", isDevicon: true },
      { name: "GitHub", icon: "devicon-github-original", color: "#FFFFFF", isDevicon: true },
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.08 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl group cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="relative w-12 h-12 flex items-center justify-center"
        style={{ filter: "drop-shadow(0 0 0px transparent)", transition: "filter 0.3s" }}
      >
        {skill.isDevicon && skill.icon ? (
          <i
            className={`${skill.icon} text-4xl group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}
          />
        ) : skill.emoji ? (
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300 inline-block">
            {skill.emoji}
          </span>
        ) : (
          <Bot size={32} style={{ color: skill.color }} />
        )}
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 20px ${skill.color}15`,
          border: `1px solid ${skill.color}30`,
        }}
      />

      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 text-center font-medium">
        {skill.name}
      </span>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000510 0%, #0A0E27 50%, #000510 100%)" }}
    >
      {/* BG decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(168, 85, 247, 0.07)" }}
      />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-aurora-purple font-mono text-sm tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="section-heading aurora-text">Tech Stack</h2>
          <p className="section-subheading">
            幅広い技術スタックで、要件に最適なソリューションを提供します
          </p>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
            }}
          />
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.category} variants={cardVariants}>
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-1 h-5 rounded-full"
                    style={{
                      background: `linear-gradient(to bottom, ${cat.color}, ${cat.color}80)`,
                    }}
                  />
                  <h3
                    className="text-sm font-semibold uppercase tracking-widest font-mono"
                    style={{ color: cat.color }}
                  >
                    {cat.category}
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="relative">
                      <SkillCard skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
