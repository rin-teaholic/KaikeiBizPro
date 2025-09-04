import { AlertTriangle } from "lucide-react";

const Problems = () => {
  return (
    <section id="problems" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            こんなお悩み・課題は<br />ありませんか？
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">経理業務の課題</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>月末の決算処理に毎回残業が発生している</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>手作業でのデータ入力ミスが頻発している</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>複数のシステムを使い分けて非効率</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>税制改正に対応するのが大変</span>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">管理・運用の課題</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>経理担当者が退職すると業務が止まる</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>リアルタイムな経営状況が把握できない</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>監査や税務調査の準備に時間がかかる</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                <span>セキュリティ対策が不安</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="経理業務で悩むビジネスマン" 
            className="rounded-xl mx-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Problems;
