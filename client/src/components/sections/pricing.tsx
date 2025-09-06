import { Building, TrendingUp, Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlanSelect = (planIndex: number) => {
    setSelectedPlan(planIndex);
  };

  const plans = [
    {
      icon: Building,
      name: "スタータープラン",
      description: "小規模事業者向け",
      price: "¥9,800",
      period: "/月",
      features: [
        "基本的な会計機能",
        "AI自動仕訳（月100件まで）",
        "銀行連携（3行まで）",
        "基本レポート出力",
        "メールサポート"
      ],
      buttonText: "30日間無料トライアル",
      buttonVariant: "secondary" as const,
      popular: false
    },
    {
      icon: TrendingUp,
      name: "ビジネスプラン",
      description: "成長企業向け",
      price: "¥24,800",
      period: "/月",
      features: [
        "全会計機能",
        "AI自動仕訳（無制限）",
        "無制限銀行連携",
        "高度な分析レポート",
        "電話・チャットサポート",
        "専任コンサルタント"
      ],
      buttonText: "30日間無料トライアル",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      icon: Crown,
      name: "エンタープライズ",
      description: "大規模企業向け",
      price: "お見積り",
      period: "",
      features: [
        "カスタム機能開発",
        "オンプレミス対応",
        "専用サーバー",
        "24時間365日サポート",
        "SLA保証",
        "導入・移行支援"
      ],
      buttonText: "お問い合わせ",
      buttonVariant: "secondary" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">サービスプラン</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-card rounded-xl p-8 shadow-sm relative cursor-pointer transition-all duration-200 hover:shadow-md ${
                plan.popular ? "border-2 border-primary shadow-lg" : "border border-border"
              } ${
                selectedPlan === index 
                  ? "ring-2 ring-orange-500 ring-offset-2 bg-orange-50 border-orange-300" 
                  : ""
              }`}
              onClick={() => handlePlanSelect(index)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                    人気No.1
                  </span>
                </div>
              )}
              {selectedPlan === index && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-orange-500 text-white rounded-full p-2 shadow-lg">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div className="text-center mb-6">
                <plan.icon className="text-primary h-8 w-8 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className="text-primary h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.buttonVariant}
                className={`w-full py-3 font-bold ${
                  plan.buttonVariant === "default" 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (selectedPlan === index) {
                    scrollToSection("contact");
                  } else {
                    handlePlanSelect(index);
                  }
                }}
                data-testid={`pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {selectedPlan === index ? "このプランを選択済み" : plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        {selectedPlan !== null && (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                ✅ {plans[selectedPlan].name} を選択しました
              </h3>
              <p className="text-muted-foreground mb-4">
                {plans[selectedPlan].description} - {plans[selectedPlan].price}{plans[selectedPlan].period}
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                今すぐ申し込む
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
