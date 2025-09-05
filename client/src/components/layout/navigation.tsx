import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Calculator, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Calculator className="text-primary h-8 w-8" />
              </motion.div>
              <span className="text-xl font-bold text-foreground">KaikeiBiz Pro</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              機能
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("case-studies")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              導入事例
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              料金
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-faq"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              FAQ
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="nav-contact-cta"
                enableAnimation={false}
              >
                無料トライアル
              </Button>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              enableAnimation={false}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.button 
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-features"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                機能
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection("case-studies")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-case-studies"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                導入事例
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-pricing"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                料金
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-faq"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                FAQ
              </motion.button>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="mobile-nav-contact-cta"
                  enableAnimation={false}
                >
                  無料トライアル
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
