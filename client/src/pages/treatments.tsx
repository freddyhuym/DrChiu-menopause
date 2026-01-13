import { motion } from "framer-motion";
import { ArrowRight, Activity, Heart, Moon, ShieldCheck, Sun, Droplets } from "lucide-react";

export default function Treatments() {
  const treatments = [
    {
      title: "荷爾蒙平衡調理",
      desc: "針對熱潮紅、盜汗等症狀，透過詳細檢測與評估，提供安全、客製化的荷爾蒙補充或替代方案，重建身體平衡。",
      icon: <Activity className="w-6 h-6 text-gold" />
    },
    {
      title: "睡眠品質改善",
      desc: "深入分析失眠、淺眠原因，結合生活型態調整與非藥物助眠療法，協助找回深層放鬆的修復時光。",
      icon: <Moon className="w-6 h-6 text-gold" />
    },
    {
      title: "私密健康養護",
      desc: "關注乾澀、感染等私密困擾，運用非侵入式雷射保養與局部護理，重拾舒適與自信。",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "骨質密度強化",
      desc: "預防與治療骨質疏鬆，提供營養諮詢與運動處方，為骨骼健康打下穩固基礎。",
      icon: <Sun className="w-6 h-6 text-gold" />
    },
    {
      title: "情緒壓力調適",
      desc: "傾聽焦慮、易怒等情緒波動，提供心理支持與壓力釋放技巧，找回內心的平靜。",
      icon: <Heart className="w-6 h-6 text-gold" />
    },
    {
      title: "代謝體重管理",
      desc: "針對更年期代謝變慢問題，制定專屬飲食與代謝調整計畫，維持健康體態。",
      icon: <Droplets className="w-6 h-6 text-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-widest mb-6">療程介紹</h1>
            <div className="w-16 h-1 bg-gold mx-auto opacity-50 mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              我們提供多元且專業的照護方案，<br/>
              針對每位女性的不同需求，量身打造最合適的健康計畫。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-sm border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide text-foreground/90">{item.title}</h3>
                <p className="text-muted-foreground leading-loose text-justify text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}