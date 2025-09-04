import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Calculator, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="text-primary h-8 w-8" />
            <span className="text-xl font-bold text-foreground">KaikeiBiz Pro</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-features"
            >
              機能
            </button>
            <button 
              onClick={() => scrollToSection("case-studies")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-case-studies"
            >
              導入事例
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-pricing"
            >
              料金
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-faq"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="nav-contact-cta"
            >
              無料トライアル
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-features"
            >
              機能
            </button>
            <button 
              onClick={() => scrollToSection("case-studies")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-case-studies"
            >
              導入事例
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-pricing"
            >
              料金
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-faq"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="mobile-nav-contact-cta"
            >
              無料トライアル
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
