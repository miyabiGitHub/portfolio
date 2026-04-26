import { motion } from "framer-motion";
import { CheckCircle2, Zap, MessageSquare, Clock, Shield } from "lucide-react";

const techBadges = ["Python", "OpenAI API", "FastAPI", "AWS", "Docker"];

const features = [
  { icon: MessageSquare, text: "文脈を保持した自然な対話" },
  { icon: Clock, text: "会話履歴の保存・再開機能" },
  { icon: Zap, text: "レスポンス速度の最適化" },
  { icon: Shield, text: "エラーハンドリングとフォールバック処理" },
];

const innovations = [
  "プロンプトエンジニアリングによる回答精度の向上",
  "レスポンスのストリーミング対応によるUX改善",
  "APIコストの最適化設計",
];

const problems = [
  "定型的な問い合わせ対応に時間がかかる",
  "FAQドキュメントを読み解くコストが高い",
];

function CodeMockup() {
  return (
    <div className="rounded-xl overflow-hidden font-mono text-xs">
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#1a1f3a" }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-gray-400 text-xs">ai_chat.py</span>
      </div>

      {/* Code */}
      <div
        className="p-5 space-y-1 leading-relaxed"
        style={{ background: "#0d1124" }}
      >
        <div>
          <span className="text-purple-400">from</span>
          <span className="text-white"> openai </span>
          <span className="text-purple-400">import</span>
          <span className="text-aurora-cyan"> OpenAI</span>
        </div>
        <div className="text-gray-500">{"# GPT-4を活用した対話エンジン"}</div>
        <br />
        <div>
          <span className="text-blue-400">class</span>
          <span className="text-yellow-300"> AIAssistant</span>
          <span className="text-white">:</span>
        </div>
        <div className="pl-4">
          <span className="text-blue-400">def</span>
          <span className="text-green-400"> __init__</span>
          <span className="text-white">(self):</span>
        </div>
        <div className="pl-8">
          <span className="text-gray-300">self.client = </span>
          <span className="text-aurora-cyan">OpenAI</span>
          <span className="text-white">()</span>
        </div>
        <div className="pl-8">
          <span className="text-gray-300">self.history = []</span>
        </div>
        <br />
        <div className="pl-4">
          <span className="text-blue-400">async def</span>
          <span className="text-green-400"> chat</span>
          <span className="text-white">(self, message):</span>
        </div>
        <div className="pl-8 text-gray-400">{`# 文脈を維持しながら応答生成`}</div>
        <div className="pl-8">
          <span className="text-gray-300">self.history.append(</span>
          <span className="text-orange-300">{"{"}</span>
        </div>
        <div className="pl-12">
          <span className="text-green-300">"role"</span>
          <span className="text-white">: </span>
          <span className="text-green-300">"user"</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-12">
          <span className="text-green-300">"content"</span>
          <span className="text-white">: message</span>
        </div>
        <div className="pl-8">
          <span className="text-orange-300">{"}"}</span>
          <span className="text-white">)</span>
        </div>
        <div className="pl-8">
          <span className="text-purple-400">return await</span>
          <span className="text-green-400"> self._stream_response</span>
          <span className="text-white">()</span>
        </div>
      </div>

      {/* Terminal output */}
      <div
        className="px-5 py-3 border-t border-white/5"
        style={{ background: "#070b18" }}
      >
        <div className="flex items-start gap-2 text-gray-400">
          <span className="text-green-400">▶</span>
          <div>
            <span className="text-green-400">User: </span>
            <span className="text-gray-300">売上レポートについて教えて</span>
          </div>
        </div>
        <div className="flex items-start gap-2 mt-1">
          <span className="text-aurora-blue">▶</span>
          <div>
            <span className="text-aurora-blue">AI: </span>
            <span className="text-gray-300">
              承知しました。前回の質問の内容も踏まえて...
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 ml-1 bg-aurora-blue align-middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWorkSection() {
  return (
    <section
      id="work"
      className="relative py-28 overflow-hidden bg-dark-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #4F8EF740, #A855F740, transparent)",
        }}
      />
      <div
        className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(79, 142, 247, 0.07)" }}
      />
      <div
        className="absolute right-1/4 bottom-1/3 w-80 h-80 rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(168, 85, 247, 0.07)" }}
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
          <p className="text-aurora-pink font-mono text-sm tracking-widest uppercase mb-3">
            Featured Work
          </p>
          <h2 className="section-heading aurora-text">Works</h2>
          <p className="section-subheading">
            実際に開発したプロジェクトをご紹介します
          </p>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)",
            }}
          />
        </motion.div>

        {/* Main work card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden aurora-border"
          style={{ background: "rgba(10, 14, 39, 0.8)" }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Code mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 lg:p-10 flex flex-col justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(79,142,247,0.05), rgba(168,85,247,0.05))",
                borderRight: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
                  style={{
                    background: "rgba(79, 142, 247, 0.15)",
                    border: "1px solid rgba(79, 142, 247, 0.3)",
                    color: "#4F8EF7",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-aurora-blue animate-pulse" />
                  AI Application
                </span>
              </div>

              <CodeMockup />

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-6">
                {techBadges.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Project details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-8 lg:p-10"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                AI Conversational Assistant
              </h3>
              <p className="text-aurora-purple text-sm font-medium mb-6">
                GPTを活用した対話型チャットボットアプリ
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                OpenAI API（GPT-4）を用いた対話型AIアプリケーション。ユーザーの質問に対して文脈を維持しながら自然な対話を行い、業務効率化を実現します。
              </p>

              {/* Problem solved */}
              <div className="mb-7">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  解決した課題
                </h4>
                <div className="space-y-2">
                  {problems.map((p) => (
                    <div key={p} className="flex items-start gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                        style={{ background: "rgba(236,72,153,0.2)" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-aurora-pink" />
                      </div>
                      <p className="text-gray-300 text-sm">{p}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-7">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  主な機能
                </h4>
                <div className="space-y-2">
                  {features.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <Icon size={16} className="text-aurora-blue flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Innovations */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  工夫した点
                </h4>
                <div className="space-y-2">
                  {innovations.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        size={15}
                        className="text-green-400 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* More works hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          その他のプロジェクトはお問い合わせください
        </motion.p>
      </div>
    </section>
  );
}
