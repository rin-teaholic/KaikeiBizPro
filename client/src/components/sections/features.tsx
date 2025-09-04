import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            KaikeiBiz Proが<br />選ばれる理由
          </h2>
        </div>
        <div className="space-y-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="section-number">1</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                AIによる自動仕訳で<br />経理作業時間を90%削減
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                最新のAI技術により、領収書やインボイスを自動読み取り。<br />
                手作業での入力が不要になり、ミスも大幅に削減できます。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>OCR技術による文書自動読み取り</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>銀行・クレジットカード連携による自動取込</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>学習機能による仕訳精度の向上</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="AIが会計書類を自動処理している様子" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="section-number">2</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                専任サポートチームが<br />導入から運用まで完全サポート
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                会計ソフトの専門知識を持つサポートチームが、<br />
                お客様の業務に合わせた設定から日々の運用まで支援します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>導入時の初期設定代行</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>オンライン研修・操作説明会</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>電話・チャット・メールでの技術サポート</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="カスタマーサポートチームがソフトウェアサポートを提供" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="section-number">3</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                業界最高水準のセキュリティで<br />大切なデータを保護
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                金融機関レベルのセキュリティ対策により、<br />
                お客様の重要な財務データを安全に保護します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>256bit SSL暗号化通信</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>定期的なデータバックアップ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>二段階認証・アクセス制御</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="セキュアなデータセンターとセキュリティの概念" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              5分でわかる！お役立ち資料2点セット
            </h3>
            <p className="text-muted-foreground mb-6">
              2つの資料でこんなことがわかります
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="text-primary h-5 w-5" />
                <span>KaikeiBiz Proの機能と導入効果</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-primary h-5 w-5" />
                <span>導入企業の成功事例と効果測定</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-primary h-5 w-5" />
                <span>業界別の活用方法とベストプラクティス</span>
              </li>
            </ul>
            <Button
              onClick={() => scrollToSection("resources")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
              data-testid="features-resource-cta"
            >
              資料ダウンロードはこちら
              <span className="ml-2 bg-cyan-400 text-gray-900 px-2 py-1 rounded text-sm">
                本ページ限定！
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
