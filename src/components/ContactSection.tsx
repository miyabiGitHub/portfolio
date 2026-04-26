import { motion } from "framer-motion";
import { ExternalLink, Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-dark-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(168,85,247,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #4F8EF720, #A855F720, transparent)",
        }}
      />

      {/* Aurora orbs */}
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(79, 142, 247, 0.07)" }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(236, 72, 153, 0.07)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-aurora-blue font-mono text-sm tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Work Together
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-4 mb-6"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
            }}
          />
          <p className="text-gray-400 text-base leading-relaxed">
            ご相談のみでも歓迎です。お気軽にお声がけください。
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="aurora-border rounded-3xl p-8 md:p-12"
          style={{ background: "rgba(10, 14, 39, 0.9)" }}
        >
          {/* Icons */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { Icon: Mail, color: "#4F8EF7", label: "メール" },
              { Icon: MessageCircle, color: "#A855F7", label: "チャット" },
              { Icon: ExternalLink, color: "#EC4899", label: "クラウドワークス" },
            ].map(({ Icon, color, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="text-gray-500 text-xs">{label}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-300 text-base leading-relaxed mb-8">
            AI開発・Web開発・インフラ構築など、幅広いご相談をお受けしています。
            <br className="hidden md:block" />
            クラウドワークスよりお気軽にメッセージをお送りください。
          </p>

          {/* CTA Button */}
          <a
            href="https://crowdworks.jp/public/employees/5888875?ref=share_url_wkprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-full text-base"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
              boxShadow: "0 0 30px rgba(168,85,247,0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 50px rgba(168,85,247,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px rgba(168,85,247,0.25)";
            }}
          >
            <ExternalLink size={18} />
            クラウドワークスでお問い合わせ
          </a>
        </motion.div>

        {/* Tech stack decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            "AI / LLM",
            "Python",
            "AWS",
            "Java",
            "セキュリティ",
            "DB設計",
            "インフラ",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-gray-500 rounded-full"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
