import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={() => scrollToSection("resources")}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center space-x-2"
        data-testid="floating-cta"
      >
        <Download className="h-4 w-4" />
        <span className="font-bold">資料ダウンロード</span>
      </Button>
    </div>
  );
};

export default FloatingCTA;
