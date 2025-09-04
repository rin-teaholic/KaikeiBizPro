import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import Problems from "@/components/sections/problems";
import Features from "@/components/sections/features";
import CaseStudies from "@/components/sections/case-studies";
import Pricing from "@/components/sections/pricing";
import Resources from "@/components/sections/resources";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import FloatingCTA from "@/components/ui/floating-cta";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problems />
      <Features />
      <CaseStudies />
      <Pricing />
      <Resources />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Home;
