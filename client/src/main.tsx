import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// GitHub PagesのSPAルーティング対応（hashルーティング使用）
const getLocation = () => {
  // URLのクエリパラメータからパスを取得（404.htmlからのリダイレクト対応）
  const urlParams = new URLSearchParams(window.location.search);
  const pathFromQuery = urlParams.get('/');
  
  if (pathFromQuery) {
    // クエリパラメータからパスを復元
    const decodedPath = pathFromQuery.replace(/~and~/g, '&');
    const fullPath = '/' + decodedPath;
    
    // hashルーティングに変換
    setTimeout(() => {
      window.location.hash = fullPath;
    }, 0);
    
    return fullPath;
  }
  
  // hashルーティングを使用
  const hash = window.location.hash;
  const path = hash.slice(1) || "/";
  return path;
};

const setLocation = (path: string) => {
  // hashルーティングを使用
  window.location.hash = path;
};

createRoot(document.getElementById("root")!).render(
  <Router hook={{ getLocation, setLocation }}>
    <App />
  </Router>
);
