import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-bg pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance">
            中小企業の経理業務を<br />
            <span className="text-cyan-300">完全自動化</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-balance">
            KaikeiBiz Proで経理作業時間を90%削減。<br />
            クラウド型会計ソフトで業務効率を革新しませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-colors"
              data-testid="hero-trial-cta"
            >
              30日間無料トライアル
            </Button>
            <Button
              onClick={() => scrollToSection("resources")}
              className="glass-card text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-card/30 transition-colors"
              variant="outline"
              data-testid="hero-download-cta"
            >
              資料ダウンロード
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card rounded-xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="会計ソフトのダッシュボード画面" 
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="font-bold text-lg mb-2">直感的なダッシュボード</h3>
              <p className="opacity-90">重要な財務指標を一目で確認</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="会計ソフトを使用するビジネスプロフェッショナル" 
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="font-bold text-lg mb-2">チーム連携機能</h3>
              <p className="opacity-90">複数ユーザーでリアルタイム共有</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="財務チャートとグラフの分析画面" 
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="font-bold text-lg mb-2">高度な分析機能</h3>
              <p className="opacity-90">AIによる財務分析とレポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
