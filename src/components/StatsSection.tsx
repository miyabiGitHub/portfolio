import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Cloud, Code2, BrainCircuit } from "lucide-react";

interface StatItem {
  icon: typeof Award;
  value: number | string;
  suffix: string;
  label: string;
  color: string;
  isNumeric: boolean;
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: 14,
    suffix: "",
    label: "保有資格",
    color: "#4F8EF7",
    isNumeric: true,
  },
  {
    icon: Cloud,
    value: 4,
    suffix: "冠",
    label: "AWS認定",
    color: "#A855F7",
    isNumeric: true,
  },
  {
    icon: Code2,
    value: 5,
    suffix: "+",
    label: "対応可能言語",
    color: "#EC4899",
    isNumeric: true,
  },
  {
    icon: BrainCircuit,
    value: "Multiple",
    suffix: "",
    label: "AI開発実績",
    color: "#38BDF8",
    isNumeric: false,
  },
];

function CountUp({
  target,
  isActive,
  suffix,
}: {
  target: number;
  isActive: boolean;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isActive, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative group cursor-default"
    >
      <div
        className="relative p-8 rounded-2xl text-center overflow-hidden"
        style={{
          background: "rgba(10, 14, 39, 0.8)",
          border: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Glow background on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, ${stat.color}12, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
          style={{
            background: `${stat.color}18`,
            border: `1px solid ${stat.color}35`,
          }}
        >
          <Icon size={26} style={{ color: stat.color }} />
        </div>

        {/* Value */}
        <div
          className="text-4xl md:text-5xl font-bold mb-2 font-mono"
          style={{
            background: `linear-gradient(135deg, ${stat.color}, white)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {stat.isNumeric ? (
            <CountUp
              target={stat.value as number}
              isActive={isInView}
              suffix={stat.suffix}
            />
          ) : (
            <span>{stat.value}</span>
          )}
        </div>

        {/* Label */}
        <p className="text-gray-400 text-sm font-medium">{stat.label}</p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0E27 0%, #000510 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(79,142,247,0.03) 0%, rgba(168,85,247,0.03) 50%, rgba(236,72,153,0.03) 100%)",
        }}
      />

      {/* Separator lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #4F8EF720, #A855F720, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #EC489920, #A855F720, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-3">
            Numbers
          </p>
          <h2 className="section-heading aurora-text">実績数字</h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-4"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
