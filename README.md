# KaikeiBiz Pro - Cursor版

## 🚀 クイックスタート

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

## 🔧 Cursor最適化

このプロジェクトはCursorエディタで最適化されています：

- ✅ TypeScript完全サポート
- ✅ ESLint/Prettier統合
- ✅ 高速な開発サーバー
- ✅ Hot Reload
- ✅ IntelliSense
- ✅ パスマッピング

## 📝 ライセンス

MIT License
