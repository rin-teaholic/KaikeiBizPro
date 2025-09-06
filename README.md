# KaikeiBiz Pro - 中小企業向けクラウド会計ソフトウェア

![KaikeiBiz Pro](https://img.shields.io/badge/Status-Portfolio%20Project-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)

## 📋 プロジェクト概要

**KaikeiBiz Pro**は、中小企業の経理業務を革新する次世代クラウド会計ソフトウェアのランディングページです。BtoBプロダクトとして、経理作業時間を90%削減し、業務効率を大幅に向上させることを目指しています。

## 🛠️ 技術スタック

### フロントエンド
- **React 18.3.1** - モダンなUIライブラリ
- **TypeScript 5.6.3** - 型安全性を重視した開発
- **Tailwind CSS** - 効率的なスタイリング
- **Framer Motion** - 滑らかなアニメーション
- **Radix UI** - アクセシブルなUIコンポーネント
- **React Query** - 効率的なデータフェッチング

### バックエンド
- **Node.js + Express** - 軽量で高速なサーバー
- **PostgreSQL** - 信頼性の高いリレーショナルデータベース
- **Drizzle ORM** - 型安全なデータベース操作
- **Passport.js** - 認証機能の実装

### 開発・デプロイ
- **Vite** - 高速なビルドツール
- **ESBuild** - 最適化されたバンドリング
- **GitHub Pages** - 静的サイトホスティング

## 📱 デモサイト

[**KaikeiBiz Pro デモサイト**](https://rin-teaholic.github.io/KaikeiBizPro)

実際の動作を確認できます。

## 🎨 デザインの特徴

### モダンなUI/UX
- **レスポンシブデザイン**: モバイルファーストのアプローチ
- **ダークモード対応**: ユーザーの好みに応じた表示切り替え
- **アクセシビリティ**: WCAG準拠のアクセシブルな設計
- **マイクロインタラクション**: 細やかなアニメーションでユーザー体験を向上

### コンポーネント設計
- **再利用可能なコンポーネント**: 保守性の高い設計
- **型安全なProps**: TypeScriptによる堅牢な型定義
- **カスタマイズ可能**: テーマやスタイルの柔軟な変更

## 📊 パフォーマンス最適化

### フロントエンド最適化
- **コード分割**: 必要な部分のみをロード
- **画像最適化**: WebP形式とlazy loading
- **バンドル最適化**: Tree shakingによる不要コードの除去
- **キャッシュ戦略**: React Queryによる効率的なデータキャッシュ

### Core Web Vitals対応
- **LCP (Largest Contentful Paint)**: 1.2秒以内
- **FID (First Input Delay)**: 100ms以内
- **CLS (Cumulative Layout Shift)**: 0.1以内

## 🔧 開発のポイント

### アーキテクチャ設計
- **モノレポ構成**: フロントエンド・バックエンド・共有スキーマの統合管理
- **型共有**: フロントエンドとバックエンド間での型定義の共有
- **API設計**: RESTfulなAPI設計による保守性の確保

### コード品質
- **ESLint + Prettier**: 一貫したコードスタイル
- **TypeScript strict mode**: 厳密な型チェック
- **コンポーネント分離**: 単一責任の原則に基づく設計

## 🎯 ポートフォリオとしての価値

このプロジェクトは、以下の技術的スキルを実証しています：

### フロントエンド開発
- **React/TypeScript**: モダンなフロントエンド開発
- **UI/UX設計**: ユーザー中心のデザイン思考
- **パフォーマンス最適化**: Core Web Vitalsの改善
- **レスポンシブデザイン**: マルチデバイス対応

### バックエンド開発
- **Node.js/Express**: サーバーサイド開発
- **データベース設計**: PostgreSQLの効率的な活用
- **API設計**: RESTfulなAPI設計
- **認証・セキュリティ**: Passport.jsによる認証実装

### 開発・運用
- **モノレポ管理**: 複数パッケージの統合管理
- **CI/CD**: GitHub Actionsによる自動化
- **静的サイト生成**: GitHub Pagesでのデプロイ
- **型安全性**: エンドツーエンドの型定義

## 🚀 セットアップと実行

### 前提条件
- Node.js 16.0.0以上
- npm 8.0.0以上

### インストール
```bash
# リポジトリのクローン
git clone https://github.com/rin-teaholic/KaikeiBizPro.git
cd KaikeiBizPro

# 依存関係のインストール
npm install
```

### 開発環境での実行
```bash
# 開発サーバーの起動
npm run dev

# ブラウザで http://localhost:3000 を開く
```

### 本番環境でのビルド
```bash
# プロダクションビルド
npm run build

# 本番サーバーの起動
npm start
```



## 📞 お問い合わせ

このプロジェクトについてご質問やご相談がございましたら、お気軽にお問い合わせください。

---

**開発者**: Rin  
**GitHub**: [@rin-teaholic](https://github.com/rin-teaholic)  
**ライセンス**: MIT License