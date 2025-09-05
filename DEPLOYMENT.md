# GitHub Pages デプロイ手順

## 概要
このプロジェクトをGitHub Pagesでデプロイするための手順を説明します。

## 前提条件
- GitHubアカウント
- プロジェクトがGitHubリポジトリにプッシュ済み

## デプロイ手順

### 1. GitHubリポジトリの設定

1. GitHubリポジトリのページに移動
2. **Settings** タブをクリック
3. 左サイドバーの **Pages** をクリック
4. **Source** セクションで **GitHub Actions** を選択

### 2. リポジトリのURL設定

`package.json` の `repository.url` を実際のリポジトリURLに更新してください：

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/your-repo-name.git"
  }
}
```

### 3. ビルド設定の確認

以下のファイルが正しく設定されていることを確認してください：

- `vite.config.ts`: `base` パスが設定済み
- `package.json`: `build:gh-pages` スクリプトが追加済み
- `.github/workflows/deploy.yml`: GitHub Actionsワークフローが作成済み

### 4. デプロイの実行

1. 変更をmainブランチにプッシュ：
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

2. GitHub Actionsが自動的に実行されます
3. **Actions** タブでデプロイの進行状況を確認
4. デプロイが完了すると、GitHub PagesのURLが表示されます

### 5. デプロイ後の確認

- デプロイされたサイトが正常に表示されることを確認
- すべてのリンクと機能が正しく動作することを確認

## トラブルシューティング

### よくある問題

1. **404エラーが発生する場合**
   - `vite.config.ts` の `base` パスが正しく設定されているか確認
   - リポジトリ名とパスが一致しているか確認

2. **ビルドが失敗する場合**
   - GitHub Actionsのログを確認
   - 依存関係のインストールに問題がないか確認

3. **スタイルが適用されない場合**
   - Tailwind CSSのビルドが正しく実行されているか確認
   - 静的ファイルのパスが正しいか確認

### カスタムドメインの設定

カスタムドメインを使用する場合：

1. GitHub Pagesの設定で **Custom domain** を設定
2. DNS設定でCNAMEレコードを追加
3. `vite.config.ts` の `base` パスを `/` に変更

## 参考リンク

- [GitHub Pages公式ドキュメント](https://docs.github.com/ja/pages)
- [Vite GitHub Pages設定](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions公式ドキュメント](https://docs.github.com/ja/actions)
