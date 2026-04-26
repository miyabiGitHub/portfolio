import { motion } from "framer-motion";
import { Shield, Cloud, Database, Code2, BarChart2 } from "lucide-react";

interface Cert {
  name: string;
  level?: string;
}

interface CertCategory {
  title: string;
  icon: typeof Shield;
  color: string;
  certs: Cert[];
}

const categories: CertCategory[] = [
  {
    title: "セキュリティ",
    icon: Shield,
    color: "#EC4899",
    certs: [
      { name: "情報処理安全確保支援士", level: "国家資格" },
      { name: "AWS Certified Security", level: "Specialty" },
      { name: "CompTIA CySA+", level: "Professional" },
    ],
  },
  {
    title: "クラウド・インフラ",
    icon: Cloud,
    color: "#4F8EF7",
    certs: [
      { name: "AWS Solutions Architect", level: "Associate" },
      { name: "AWS SysOps Administrator", level: "Associate" },
      { name: "AWS Developer", level: "Associate" },
      { name: "LPIC Level 3", level: "Expert" },
      { name: "CCNA", level: "Associate" },
    ],
  },
  {
    title: "データベース",
    icon: Database,
    color: "#A855F7",
    certs: [
      { name: "Oracle Database Administration II", level: "Gold" },
      { name: "OSS-DB", level: "Gold" },
    ],
  },
  {
    title: "プログラミング",
    icon: Code2,
    color: "#38BDF8",
    certs: [
      { name: "Java SE 11 Programmer II", level: "Gold" },
      { name: "PHP技術者認定", level: "上級" },
      { name: "HTML5プロフェッショナル", level: "レベル2" },
      { name: "Excel VBA Standard", level: "Standard" },
    ],
  },
  {
    title: "プロジェクトマネジメント",
    icon: BarChart2,
    color: "#34D399",
    certs: [{ name: "CompTIA Project+", level: "Professional" }],
  },
];

function CertCard({ cert, color }: { cert: Cert; color: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 p-3 rounded-lg group cursor-default"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.04)",
        transition: "all 0.2s ease",
      }}
    >
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
      />
      <div className="min-w-0">
        <p className="text-white text-sm font-medium truncate">{cert.name}</p>
        {cert.level && (
          <p className="text-xs mt-0.5" style={{ color: `${color}90` }}>
            {cert.level}
          </p>
        )}
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function CertificationsSection() {
  const totalCerts = categories.reduce((acc, cat) => acc + cat.certs.length, 0);

  return (
    <section
      id="certifications"
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000510 0%, #0A0E27 50%, #000510 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "rgba(168, 85, 247, 0.05)" }}
      />

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
            Certifications
          </p>
          <h2 className="section-heading aurora-text">保有資格</h2>
          <p className="section-subheading">
            技術力を証明する{totalCerts}つの資格を保有しています
          </p>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
            }}
          />
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass-card p-6 group"
                style={{ transition: "all 0.3s ease" }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${cat.color}18`,
                      border: `1px solid ${cat.color}35`,
                    }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">
                      {cat.title}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {cat.certs.length}資格
                    </p>
                  </div>
                </div>

                {/* Top accent line */}
                <div
                  className="w-full h-px mb-5"
                  style={{
                    background: `linear-gradient(90deg, ${cat.color}50, transparent)`,
                  }}
                />

                {/* Cert list */}
                <div className="space-y-2">
                  {cat.certs.map((cert) => (
                    <CertCard key={cert.name} cert={cert} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(168, 85, 247, 0.1)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
            }}
          >
            <span className="text-2xl">🏆</span>
            <span className="text-white font-semibold">
              合計{totalCerts}資格取得済み
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
