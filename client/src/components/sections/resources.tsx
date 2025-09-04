import { FileText, BarChart3, Calculator, Download, Star, CheckCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Resources = () => {
  const { toast } = useToast();

  const handleDownload = (resourceName: string) => {
    toast({
      title: "ダウンロード開始",
      description: `${resourceName}のダウンロードを開始しました。`,
    });
  };

  const resources = [
    {
      icon: FileText,
      title: "会計ソフト選定ガイド",
      description: "自社に最適な会計ソフトの選び方を詳しく解説",
      features: [
        "選定基準とポイント",
        "機能比較表",
        "導入チェックリスト"
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      badge: "人気No.1"
    },
    {
      icon: BarChart3,
      title: "DX推進事例集",
      description: "実際の企業でのデジタル化成功事例をご紹介",
      features: [
        "業界別成功事例",
        "ROI計算方法",
        "導入プロセス"
      ],
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      badge: "新作"
    },
    {
      icon: Calculator,
      title: "経理効率化チェックシート",
      description: "現在の経理業務の課題を診断できるシート",
      features: [
        "課題診断項目",
        "改善提案",
        "効果測定指標"
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      badge: "実用的"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Gift className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">無料ダウンロード</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">お役立ち資料セット</h2>
          <p className="text-muted-foreground text-lg">
            経理業務効率化に役立つ専門資料を無料でダウンロードいただけます
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <div key={index} className={`bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden ${resource.bgColor} border-l-4 border-l-transparent hover:border-l-primary`}>
              <div className="absolute top-3 right-3">
                <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                  {resource.badge}
                </div>
              </div>
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${resource.bgColor}`}>
                  <resource.icon className={`h-8 w-8 ${resource.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                {resource.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 rounded-lg font-bold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                onClick={() => handleDownload(resource.title)}
                data-testid={`download-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Download className="h-4 w-4" />
                <span>無料ダウンロード</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
