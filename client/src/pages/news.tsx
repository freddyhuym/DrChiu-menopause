import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Globe, TrendingUp, AlertCircle } from "lucide-react";

export default function News() {
  const categories = [
    {
      title: "全球研究摘要",
      desc: "同步翻譯並解讀 NEJM、Lancet 等國際期刊的最新研究。",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "產業新聞",
      desc: "新藥上市資訊、新型醫療儀器發展、健保政策更新。",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "聲明與澄清",
      desc: "針對社群媒體流傳的錯誤健康資訊，以專業角度發布正式澄清稿。",
      icon: <AlertCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 whitespace-nowrap">Meta News 醫學動態</h1>
        <p className="text-xl text-muted-foreground">Press Center</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-primary/5 p-6 rounded-lg border border-primary/10">
            <div className="flex items-center gap-3 mb-4 text-primary">
              {cat.icon}
              <h3 className="font-bold text-lg">{cat.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{cat.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col md:flex-row gap-8 items-start border-b border-border pb-8">
            <div className="w-full md:w-64 aspect-video bg-muted rounded-lg shrink-0"></div>
            <div className="flex-1 space-y-3">
              <div className="text-sm text-primary font-bold">2026.01.23 | 全球研究</div>
              <h3 className="text-2xl font-bold text-foreground">最新代謝醫學研究突破：關於胰島素阻抗的新發現</h3>
              <p className="text-muted-foreground line-clamp-2">
                本週 NEJM 發表的最新研究顯示，透過特定的生活型態介入，可以有效逆轉早期的胰島素阻抗現象...
              </p>
              <button className="text-primary font-bold text-sm flex items-center mt-2">
                閱讀全文 <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
