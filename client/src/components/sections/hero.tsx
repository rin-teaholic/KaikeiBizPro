import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  fadeInUp, 
  scaleIn, 
  backgroundVariants, 
  particleVariants, 
  buttonVariants,
  cardVariants,
  textVariants,
  iconVariants
} from "@/lib/animations";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { 
    amount: 0.1,
    margin: "0px 0px -50px 0px"
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} className="gradient-bg pt-24 pb-16 relative overflow-hidden">
      {/* アニメーション背景要素 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
          variants={backgroundVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0 }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          variants={backgroundVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
          variants={backgroundVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1 }}
        />
        
        {/* 浮遊するパーティクル */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-300/30 rounded-full"
          variants={particleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300/40 rounded-full"
          variants={particleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300/30 rounded-full"
          variants={particleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            中小企業の経理業務を<br />
            <motion.span 
              className="text-cyan-300 relative inline-block"
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            >
              完全自動化
              <motion.span 
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-sm"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 opacity-90 text-balance"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            KaikeiBiz Proで経理作業時間を90%削減。<br />
            クラウド型会計ソフトで業務効率を革新しませんか？
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="group relative bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/50"
                data-testid="hero-trial-cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative flex items-center gap-2 z-10">
                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Play className="w-5 h-5" />
                  </motion.div>
                  30日間無料トライアル
                </div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={() => scrollToSection("resources")}
                className="group relative glass-card text-black border border-white/30 px-8 py-4 rounded-lg font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:border-white/60"
                variant="outline"
                data-testid="hero-download-cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative flex items-center gap-2 z-10">
                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  資料ダウンロード
                </div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="glass-card rounded-xl p-6 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 1 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <motion.img 
                  src="https://images.unsplash.com/photo-1659479749984-d48333116052?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="会計ソフトのダッシュボード画面" 
                  className="rounded-lg w-full h-40 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">直感的なダッシュボード</h3>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">重要な財務指標を一目で確認</p>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-xl p-6 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 1.2 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <motion.img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="会計ソフトを使用するビジネスプロフェッショナル" 
                  className="rounded-lg w-full h-40 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">チーム連携機能</h3>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">複数ユーザーでリアルタイム共有</p>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-xl p-6 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 1.4 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <motion.img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="財務チャートとグラフの分析画面" 
                  className="rounded-lg w-full h-40 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors duration-300">高度な分析機能</h3>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">AIによる財務分析とレポート</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;