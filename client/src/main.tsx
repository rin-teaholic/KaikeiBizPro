import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// デバッグ用のログを追加
console.log("Current location:", window.location.href);
console.log("Pathname:", window.location.pathname);
console.log("Search:", window.location.search);
console.log("Hash:", window.location.hash);

createRoot(document.getElementById("root")!).render(<App />);
