import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "導入にはどの程度の期間が必要ですか？",
      answer: "お申し込みから本格運用開始まで、通常2-4週間程度です。既存データの移行量や設定の複雑さにより期間は変動しますが、専任サポートチームが迅速な導入をサポートいたします。"
    },
    {
      question: "既存の会計データは移行できますか？",
      answer: "はい、可能です。主要な会計ソフトからのデータ移行に対応しており、専門スタッフがデータの整合性を確認しながら安全に移行作業を行います。移行前には必ずテスト環境での検証も実施いたします。"
    },
    {
      question: "セキュリティ対策はどうなっていますか？",
      answer: "金融機関レベルの256bit SSL暗号化通信、二段階認証、定期的なセキュリティ監査を実施しています。また、ISO27001認証を取得したデータセンターでデータを保管し、24時間365日の監視体制を敷いています。"
    },
    {
      question: "月の途中での料金プラン変更は可能ですか？",
      answer: "はい、いつでも上位プランへのアップグレードが可能です。下位プランへの変更は翌月からの適用となります。プラン変更による追加料金は日割り計算で請求いたします。"
    },
    {
      question: "サポート体制について教えてください",
      answer: "電話、チャット、メールでのサポートを平日9:00-18:00に提供しています。ビジネスプラン以上では専任コンサルタントによる定期的なフォローアップも行います。また、オンライン研修や操作説明会も定期開催しています。"
    }
  ];

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">よくある質問</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] ${
                openItems.includes(index) 
                  ? 'ring-2 ring-primary/20 shadow-lg' 
                  : 'hover:ring-1 hover:ring-primary/10'
              }`}
            >
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full text-left group p-6 hover:bg-muted/30 transition-colors duration-200 rounded-xl"
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-bold text-foreground pr-4 group-hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`text-muted-foreground transition-all duration-300 ease-in-out flex-shrink-0 group-hover:text-primary ${
                      openItems.includes(index) 
                        ? 'rotate-180 scale-110' 
                        : 'rotate-0 scale-100'
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden">
                  <div className="px-6 pb-6">
                    <div 
                      className={`text-muted-foreground transition-all duration-500 ease-in-out ${
                        openItems.includes(index) 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 -translate-y-2'
                      }`}
                      data-testid={`faq-answer-${index}`}
                    >
                      <div className="pt-2 border-t border-border/50">
                        <p className="mt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
