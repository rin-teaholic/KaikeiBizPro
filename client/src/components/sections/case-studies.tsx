const CaseStudies = () => {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "経理作業時間を75%削減、月末処理を3日間短縮",
      description: "製造業A社様では、AI自動仕訳機能により従来の手作業を大幅に削減",
      tags: ["製造業", "従業員100名", "自動化"]
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "多店舗展開でも統一された会計処理を実現",
      description: "小売業B社様では、全15店舗の会計データを一元管理し、リアルタイム経営分析を実現",
      tags: ["小売業", "多店舗", "一元管理"]
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "税務調査対応を1日で完了、監査法人からも高評価",
      description: "サービス業C社様では、完全なデータトレーサビリティにより監査対応を効率化",
      tags: ["サービス業", "監査対応", "効率化"]
    }
  ];

  return (
    <section id="case-studies" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">導入事例</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={study.image} 
                alt={`${study.tags[0]}のオフィス環境`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
