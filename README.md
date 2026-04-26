# Tech Aurora Portfolio

エンジニア個人ポートフォリオサイト。Astro + Tailwind CSS + Framer Motion で構築。

## 技術スタック

- **フレームワーク**: [Astro](https://astro.build/) v4
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) v3
- **アニメーション**: [Framer Motion](https://www.framer.com/motion/) v11
- **パーティクル**: [tsparticles](https://particles.js.org/) v3
- **アイコン**: [Lucide React](https://lucide.dev/) + [Devicons](https://devicon.dev/)
- **デプロイ**: [Cloudflare Pages](https://portfolio.k-msy.workers.dev)

## ローカル開発

### 前提条件

- Node.js 18以上
- npm / yarn / pnpm

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:4321）
npm run dev
```

### ビルド

```bash
# 本番ビルド
npm run build

# ビルド結果のプレビュー（http://localhost:4321）
npm run preview
```

ビルド成果物は `dist/` ディレクトリに生成されます。

---

## Cloudflare Pages へのデプロイ

### 方法1: GitHub連携（推奨）

1. リポジトリを GitHub にプッシュ
2. [Cloudflare Pages ダッシュボード](https://dash.cloudflare.com/) にアクセス
3. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
4. リポジトリを選択し、以下のビルド設定を入力:

| 設定項目 | 値 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `18` |

5. **Save and Deploy** をクリック

### 方法2: Wrangler CLI

```bash
# Wrangler をインストール
npm install -g wrangler

# ログイン
wrangler login

# ビルド → デプロイ
npm run build
wrangler pages deploy dist --project-name=tech-aurora-portfolio
```

---

## カスタマイズ

### サイトURLの更新

`src/layouts/Layout.astro` の `siteUrl` を実際のドメインに変更してください:

```ts
const siteUrl = "https://your-actual-domain.pages.dev";
```

### クラウドワークスのリンク設定

`src/components/ContactSection.tsx` の `href="#"` を実際のURLに変更してください:

```tsx
<a href="https://crowdworks.jp/public/employees/XXXXXXX" ...>
```

### OGP画像の更新

`public/og-image.svg` を 1200×630px の実際の画像（PNG推奨）に差し替えてください。

---

## ディレクトリ構成

```
portfolio/
├── public/
│   ├── favicon.svg          # ファビコン
│   └── og-image.svg         # OGP画像
├── src/
│   ├── components/
│   │   ├── Navigation.astro          # ナビゲーションバー
│   │   ├── Footer.astro              # フッター
│   │   ├── HeroSection.tsx           # ヒーロー（パーティクル）
│   │   ├── AboutSection.tsx          # About Me
│   │   ├── SkillsSection.tsx         # 技術スタック
│   │   ├── FeaturedWorkSection.tsx   # 作品紹介
│   │   ├── StatsSection.tsx          # 実績数字
│   │   ├── CertificationsSection.tsx # 保有資格
│   │   └── ContactSection.tsx        # お問い合わせ
│   ├── layouts/
│   │   └── Layout.astro             # HTMLレイアウト（SEO・OGP）
│   ├── pages/
│   │   └── index.astro              # メインページ
│   └── styles/
│       └── global.css               # グローバルCSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## ライセンス

MIT
