# KaikeiBiz Pro - Cursor版

## 概要

KaikeiBiz Proは、中小企業向けのクラウドベース会計ソフトウェアです。AI駆動の自動仕訳、銀行連携、包括的な財務レポート機能を備えています。モダンなフルスタックWebアプリケーションとして構築され、日本語インターフェースを採用しています。

## システムアーキテクチャ

### フロントエンドアーキテクチャ
- **フレームワーク**: React 18 + TypeScript + Vite
- **UIフレームワーク**: shadcn/ui（Radix UIプリミティブベース）+ Tailwind CSS
- **ルーティング**: Wouter（軽量Reactルーター）
- **状態管理**: TanStack Query（React Query）
- **フォーム処理**: React Hook Form + Zod検証
- **スタイリング**: Tailwind CSS + ダークモード対応

### バックエンドアーキテクチャ
- **ランタイム**: Node.js + Express.js
- **言語**: TypeScript + ES modules
- **API設計**: RESTful API + JSONレスポンス
- **エラーハンドリング**: 集中化されたエラーハンドリングミドルウェア

### データレイヤー
- **ORM**: Drizzle ORM（PostgreSQL対応）
- **データベース**: PostgreSQL（Neon Database）
- **スキーマ**: 共有TypeScriptファイル + Zod検証スキーマ
- **マイグレーション**: Drizzle Kit

### 開発・ビルドシステム
- **ビルドツール**: Vite（フロントエンド）+ esbuild（サーバー）
- **TypeScript**: 厳密な設定 + パスマッピング
- **コード構成**: モノレポ構造（共有スキーマ）

## プロジェクト構造
```
├── client/          # Reactフロントエンド
├── server/          # Express.jsバックエンドAPI
├── shared/          # 共有TypeScriptスキーマ
├── components.json  # shadcn/ui設定
└── 設定ファイル群
```

## 外部依存関係

### UI・スタイリング
- **shadcn/ui**: 完全なUIコンポーネントライブラリ
- **Radix UI**: アクセシビリティ対応のヘッドレスUI
- **Tailwind CSS**: ユーティリティファーストCSS
- **Lucide React**: アイコンライブラリ

### データ管理
- **TanStack Query**: サーバー状態管理・キャッシュ
- **React Hook Form**: フォーム状態管理
- **Zod**: スキーマ検証
- **Drizzle ORM**: 型安全なORM

### 開発ツール
- **Vite**: 高速ビルドツール
- **TypeScript**: 静的型チェック
- **esbuild**: 高速JavaScriptバンドラー

### データベース
- **Neon Database**: サーバーレスPostgreSQL
- **Drizzle Kit**: データベースマイグレーション

## 開発環境セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール
```bash
npm install
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

## Cursorでの開発

このプロジェクトはCursorエディタで最適化されています：

- **TypeScript**: 完全な型サポート
- **ESLint/Prettier**: コード品質・フォーマット
- **Vite**: 高速な開発サーバー
- **Hot Reload**: リアルタイム更新
- **IntelliSense**: 高度なコード補完

## 機能

- AI駆動自動仕訳
- 銀行口座連携
- 財務レポート生成
- 日本語インターフェース
- ダークモード対応
- レスポンシブデザイン
- コンタクトフォーム
- マーケティングランディングページ
