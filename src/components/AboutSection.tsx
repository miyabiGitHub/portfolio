import { motion } from "framer-motion";
import { Code2, Server, Brain, Shield } from "lucide-react";

const strengths = [
  {
    icon: Brain,
    title: "AI / LLM開発",
    description: "ChatGPT・Claude等のLLMを活用したアプリケーション開発",
    color: "#4F8EF7",
  },
  {
    icon: Code2,
    title: "フルスタック実装",
    description: "Python・Java・PHPによるバックエンドからフロントエンドまで",
    color: "#A855F7",
  },
  {
    icon: Server,
    title: "クラウド・インフラ",
    description: "AWS 4冠保有。インフラ設計から運用まで一貫対応",
    color: "#EC4899",
  },
  {
    icon: Shield,
    title: "セキュリティ",
    description: "情報処理安全確保支援士・AWS Security Specialtyを保有",
    color: "#38BDF8",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(79, 142, 247, 0.08)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-aurora-blue font-mono text-sm tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="section-heading aurora-text">About Me</h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-4"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
            }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="glass-card p-8 aurora-border">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #4F8EF720, #A855F720)",
                    border: "1px solid #4F8EF740",
                  }}
                >
                  👨‍💻
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    AI・Webシステム開発エンジニア
                  </h3>
                  <p className="text-gray-400 text-sm">Full-Stack Engineer</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-base">
                AI・Webシステム開発エンジニア。ChatGPT・Claude等のLLMを活用したアプリケーション開発を得意とし、インフラ・データベース・アプリ実装まで一貫対応できることが強みです。
              </p>
              <p className="text-gray-300 leading-relaxed text-base mt-4">
                AWS 4冠・情報処理安全確保支援士をはじめ、上位資格を多数保有しています。技術の幅広さと専門性を武器に、お客様の課題解決に貢献します。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "AI/LLM開発",
                  "AWS",
                  "Python",
                  "Java",
                  "セキュリティ",
                  "DB設計",
                ].map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Strength cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-5 cursor-default group"
                  style={{
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
