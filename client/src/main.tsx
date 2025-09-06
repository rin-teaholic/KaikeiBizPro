import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// GitHub PagesのSPAルーティング対応（hashルーティング使用）
const useHashLocation = () => {
  const [location, setLocation] = React.useState(() => {
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
    return hash.slice(1) || "/";
  });

  React.useEffect(() => {
    const handler = () => {
      const hash = window.location.hash;
      setLocation(hash.slice(1) || "/");
    };

    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = React.useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [location, navigate];
};

createRoot(document.getElementById("root")!).render(
  <Router hook={useHashLocation}>
    <App />
  </Router>
);
