# KaikeiBiz Pro - Cursor版

## 📋 プロジェクト概要

KaikeiBiz Proは、中小企業向けのクラウドベース会計ソフトウェアです。AI駆動の自動仕訳、銀行連携、包括的な財務レポート機能を備えています。モダンなフルスタックWebアプリケーションとして構築され、日本語インターフェースを採用しています。

### 🎯 主な特徴
- **AI駆動自動仕訳**: 機械学習による自動的な仕訳処理
- **銀行口座連携**: リアルタイムでの取引データ同期
- **包括的レポート**: 詳細な財務分析とレポート生成
- **日本語対応**: 完全な日本語インターフェース
- **レスポンシブデザイン**: モバイル・デスクトップ対応
- **ダークモード**: ユーザビリティを考慮したUI

## 🚀 クイックスタート

### 前提条件
- Node.js 18以上
- npm または yarn
- PostgreSQL（Neon Database推奨）

### 環境設定

1. **リポジトリのクローン**
```bash
git clone https://github.com/your-username/kaikei-biz-pro-cursor.git
cd kaikei-biz-pro-cursor
```

2. **依存関係のインストール**
```bash
npm install
```

3. **環境変数の設定**
```bash
# .env.localファイルを作成
cp .env.example .env.local
```

4. **データベースの設定**
```bash
# データベーススキーマのプッシュ
npm run db:push
```

### 開発サーバー起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### 本番環境起動
```bash
npm start
```

## 📁 プロジェクト構造

```
kaikei-biz-pro-cursor/
├── client/                 # Reactフロントエンド
│   ├── src/
│   │   ├── components/     # UIコンポーネント
│   │   ├── pages/          # ページコンポーネント
│   │   ├── hooks/          # カスタムフック
│   │   └── lib/           # ユーティリティ
│   └── index.html
├── server/                 # Express.jsバックエンド
│   ├── index.ts           # サーバーエントリーポイント
│   ├── routes.ts          # APIルート
│   └── storage.ts         # データストレージ
├── shared/                 # 共有スキーマ・型定義
│   └── schema.ts
├── dist/                   # ビルド出力
└── 設定ファイル群
```

## 🛠️ 開発ツール

### コード品質
- **ESLint**: コード品質チェック
- **Prettier**: コードフォーマット
- **TypeScript**: 静的型チェック

### コマンド
```bash
npm run lint      # ESLint実行
npm run format    # Prettier実行
npm run check     # TypeScript型チェック
```

## 🎨 UI/UX

- **shadcn/ui**: モダンなUIコンポーネント
- **Tailwind CSS**: ユーティリティファーストCSS
- **Framer Motion**: アニメーション
- **ダークモード**: 完全対応

## 🗄️ データベース

- **PostgreSQL**: メインデータベース
- **Drizzle ORM**: 型安全なORM
- **Neon Database**: サーバーレスPostgreSQL

### データベース設定
```bash
# 環境変数にデータベースURLを設定
DATABASE_URL="postgresql://username:password@host:port/database"

# スキーマのマイグレーション
npm run db:push
```

## 🔌 API仕様

### 主要エンドポイント
- `GET /api/transactions` - 取引データの取得
- `POST /api/transactions` - 新しい取引の作成
- `GET /api/reports` - 財務レポートの生成
- `POST /api/bank-sync` - 銀行データの同期

### 認証
- セッションベース認証
- Passport.jsによる認証処理

## 🔧 Cursor最適化

このプロジェクトはCursorエディタで最適化されています：

- ✅ TypeScript完全サポート
- ✅ ESLint/Prettier統合
- ✅ 高速な開発サーバー
- ✅ Hot Reload
- ✅ IntelliSense
- ✅ パスマッピング

## 🚀 デプロイメント

### Vercel（推奨）
```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel --prod
```

### Docker
```bash
# Dockerイメージのビルド
docker build -t kaikei-biz-pro .

# コンテナの実行
docker run -p 3000:3000 kaikei-biz-pro
```

### 環境変数
本番環境では以下の環境変数を設定してください：
- `DATABASE_URL`: PostgreSQL接続文字列
- `SESSION_SECRET`: セッション暗号化キー
- `NODE_ENV`: production

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📝 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。
