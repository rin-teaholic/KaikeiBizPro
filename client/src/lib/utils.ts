import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * ヘッダーの高さを考慮してスムーズスクロールを実行する
 * @param sectionId スクロール先のセクションID
 * @param headerHeight ヘッダーの高さ（デフォルト: 80px）
 */
export function scrollToSection(sectionId: string, headerHeight: number = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    // スクロール前にフォーカスを解除
    if (document.activeElement && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // スクロール完了後にフォーカスを解除（念のため）
    setTimeout(() => {
      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, 1000);
  }
}
