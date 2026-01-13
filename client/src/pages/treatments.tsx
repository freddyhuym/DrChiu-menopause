import { motion } from "framer-motion";
import { ArrowRight, Activity, Heart, Moon, ShieldCheck, Sun, Droplets } from "lucide-react";

export default function Treatments() {
  const treatments = [
    {
      title: "1️⃣ 荷爾蒙評估與調整治療",
      desc: "隨著年齡增長，女性體內的雌激素、黃體素等荷爾蒙逐漸下降，可能導致熱潮紅、盜汗、心悸、情緒起伏與睡眠品質下降。透過專業的荷爾蒙評估，醫師可了解身體目前的狀態，並在必要時，提供適當的荷爾蒙調整建議。",
      points: [
        "緩解影響生活品質的症狀",
        "協助身體逐步回到相對穩定的狀態",
        "以「適合個人」為原則，而非一體適用"
      ],
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "2️⃣ 非荷爾蒙更年期症狀調理",
      desc: "並非所有女性都適合或需要荷爾蒙治療。針對不適合使用荷爾蒙，或症狀較輕至中度的女性，也可考慮非荷爾蒙的調理方式。以溫和、安全為優先考量，協助女性在日常生活中感到更自在。",
      points: [
        "改善睡眠品質",
        "穩定情緒與壓力調節",
        "協助減少熱潮紅與疲倦感",
        "提升整體生活舒適度"
      ],
      icon: <Moon className="w-8 h-8 text-gold" />
    },
    {
      title: "3️⃣ 自律神經與情緒平衡照護",
      desc: "更年期期間，自律神經失衡與情緒波動相當常見。可能出現焦慮、煩躁、情緒低落、心悸、胸悶，以及對外在刺激特別敏感。透過醫師評估，可從生活型態、壓力管理與身心調整著手，協助身體慢慢找回穩定節奏。",
      points: [
        "讓女性重新感受到「身體是可以被信任的」"
      ],
      icon: <Heart className="w-8 h-8 text-gold" />
    },
    {
      title: "4️⃣ 骨骼與肌力健康評估",
      desc: "荷爾蒙變化會影響骨質密度與肌肉量，若未及早關注，可能增加骨質疏鬆與跌倒風險。更年期的全身性照護中，骨骼與肌力健康是不可忽略的一環。透過適當評估與建議，可協助女性維持骨骼健康。",
      points: [
        "維持骨骼健康",
        "延緩骨質流失",
        "支持日常活動與行動力",
        "讓身體在未來的歲月中，依然穩定而有力量"
      ],
      icon: <Sun className="w-8 h-8 text-gold" />
    },
    {
      title: "5️⃣ 心血管與代謝健康關注",
      desc: "更年期後，女性的心血管與代謝風險可能逐漸提高。全身性更年期照護也會關注血脂與代謝狀態、體重變化與脂肪分布，以及心血管相關風險因子。透過醫師的整體評估，協助女性更早了解身體變化，並在生活與醫療建議中做出適合自己的調整。",
      points: [],
      icon: <Droplets className="w-8 h-8 text-gold" />
    },
    {
      title: "6️⃣ 個人化整體照護規劃",
      desc: "每位女性的更年期歷程都不相同。症狀的表現、強度與影響層面，也各有差異。因此，治療不該有標準答案。邱文瑾醫師重視的是完整評估，傾聽女性的生活狀態與感受。",
      points: [
        "完整評估",
        "傾聽女性的生活狀態與感受",
        "以安全、適合、長期為前提",
        "讓治療成為一段溫柔而有依靠的過程，而不是短暫的應付"
      ],
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-2 font-bold">Treatments</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-widest mb-6">療程介紹</h1>
            <div className="w-16 h-1 bg-primary mx-auto opacity-50 mb-8" />
            <div className="space-y-6 max-w-3xl mx-auto">
               <h2 className="text-2xl font-serif text-primary">更年期，是全身性的轉變</h2>
               <p className="text-muted-foreground text-lg leading-loose">
                  更年期並不只是月經停止，而是一段影響全身的生理與心理調整期。<br/>
                  荷爾蒙變化，可能牽動睡眠、情緒、代謝、骨骼、心血管，以及女性對自我狀態的感受。<br/>
                  因此，更年期的治療，不該只著眼於單一症狀，<br/>
                  而是從「整體平衡」出發，為每一位女性量身規劃合適的照護方式。
               </p>
            </div>
          </div>

          <div className="grid gap-12">
            {treatments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-12 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-500 flex flex-col md:flex-row gap-8 items-start group"
              >
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold tracking-wide text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-loose text-justify text-lg">
                    {item.desc}
                  </p>
                  {item.points.length > 0 && (
                    <ul className="space-y-2 mt-4 bg-secondary/10 p-6 rounded-lg">
                       {item.points.map((point, pIdx) => (
                         <li key={pIdx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                            {point}
                         </li>
                       ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-secondary/20 p-10 rounded-lg border border-gold/20">
             <h3 className="text-xl font-bold text-gold mb-4">溫柔提醒</h3>
             <p className="text-muted-foreground text-lg leading-loose">
               更年期不是疾病，而是身體進入另一個階段的自然轉變。<br/>
               透過正確的醫療協助與照護，女性依然可以擁有穩定、自在、充滿力量的生活。
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}