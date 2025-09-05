import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// GitHub PagesのSPAルーティング対応
const getLocation = () => {
  // URLのクエリパラメータからパスを取得（404.htmlからのリダイレクト対応）
  const urlParams = new URLSearchParams(window.location.search);
  const pathFromQuery = urlParams.get('/');
  
  if (pathFromQuery) {
    // クエリパラメータからパスを復元
    const decodedPath = pathFromQuery.replace(/~and~/g, '&');
    const fullPath = '/' + decodedPath;
    
    // URLをクリーンアップ
    setTimeout(() => {
      window.history.replaceState(null, '', fullPath);
    }, 0);
    
    return fullPath;
  }
  
  // 通常のパスルーティング
  return window.location.pathname;
};

const setLocation = (path: string) => {
  // history APIを使用
  window.history.pushState(null, '', path);
  
  // ルーターに通知
  window.dispatchEvent(new PopStateEvent('popstate'));
};

createRoot(document.getElementById("root")!).render(
  <Router hook={{ getLocation, setLocation }}>
    <App />
  </Router>
);
