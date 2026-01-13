import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Heart, Moon, ShieldCheck, Sun, Droplets, ChevronDown } from "lucide-react";
import { useState } from "react";

// Import images from home.tsx
import hormoneImage from '@assets/45929f8a2037869e03c18122262e0c49_1768282187112.jpg';
import naturalImage from '@assets/stock_images/asian_woman_natural__430ba22f.jpg';
import autonomicImage from '@assets/stock_images/korean_woman_sleepin_f6960c38.jpg';
import boneImage from '@assets/stock_images/asian_woman_elegant__843c4603.jpg';
import cardioImage from '@assets/07d4fa835366862c7bacd3d0bf58e39d_1768282274248.jpg';
import balanceImage from '@assets/stock_images/korean_woman_meditat_0c8b7f71.jpg';

export default function Treatments() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const treatments = [
    {
      id: 1,
      title: "荷爾蒙評估與調整治療",
      en: "Hormone Therapy",
      desc: "隨著年齡增長，女性體內的雌激素、黃體素等荷爾蒙逐漸下降，可能導致熱潮紅、盜汗、心悸、情緒起伏與睡眠品質下降。透過專業的荷爾蒙評估，醫師可了解身體目前的狀態，並在必要時，提供適當的荷爾蒙調整建議。",
      points: [
        "緩解影響生活品質的症狀",
        "協助身體逐步回到相對穩定的狀態",
        "以「適合個人」為原則，而非一體適用"
      ],
      icon: <Activity className="w-8 h-8 text-gold" />,
      image: hormoneImage
    },
    {
      id: 2,
      title: "非荷爾蒙更年期症狀調理",
      en: "Natural Remedies",
      desc: "並非所有女性都適合或需要荷爾蒙治療。針對不適合使用荷爾蒙，或症狀較輕至中度的女性，也可考慮非荷爾蒙的調理方式。以溫和、安全為優先考量，協助女性在日常生活中感到更自在。",
      points: [
        "改善睡眠品質",
        "穩定情緒與壓力調節",
        "協助減少熱潮紅與疲倦感",
        "提升整體生活舒適度"
      ],
      icon: <Moon className="w-8 h-8 text-gold" />,
      image: naturalImage
    },
    {
      id: 3,
      title: "自律神經與情緒平衡照護",
      en: "Autonomic Balance",
      desc: "更年期期間，自律神經失衡與情緒波動相當常見。可能出現焦慮、煩躁、情緒低落、心悸、胸悶，以及對外在刺激特別敏感。透過醫師評估，可從生活型態、壓力管理與身心調整著手，協助身體慢慢找回穩定節奏。",
      points: [
        "讓女性重新感受到「身體是可以被信任的」"
      ],
      icon: <Heart className="w-8 h-8 text-gold" />,
      image: autonomicImage
    },
    {
      id: 4,
      title: "骨骼與肌力健康評估",
      en: "Bone Health",
      desc: "荷爾蒙變化會影響骨質密度與肌肉量，若未及早關注，可能增加骨質疏鬆與跌倒風險。更年期的全身性照護中，骨骼與肌力健康是不可忽略的一環。透過適當評估與建議，可協助女性維持骨骼健康。",
      points: [
        "維持骨骼健康",
        "延緩骨質流失",
        "支持日常活動與行動力",
        "讓身體在未來的歲月中，依然穩定而有力量"
      ],
      icon: <Sun className="w-8 h-8 text-gold" />,
      image: boneImage
    },
    {
      id: 5,
      title: "心血管與代謝健康關注",
      en: "Cardiovascular Health",
      desc: "更年期後，女性的心血管與代謝風險可能逐漸提高。全身性更年期照護也會關注血脂與代謝狀態、體重變化與脂肪分布，以及心血管相關風險因子。透過醫師的整體評估，協助女性更早了解身體變化，並在生活與醫療建議中做出適合自己的調整。",
      points: [],
      icon: <Droplets className="w-8 h-8 text-gold" />,
      image: cardioImage
    },
    {
      id: 6,
      title: "個人化整體照護規劃",
      en: "Holistic Care",
      desc: "每位女性的更年期歷程都不相同。症狀的表現、強度與影響層面，也各有差異。因此，治療不該有標準答案。邱文瑾醫師重視的是完整評估，傾聽女性的生活狀態與感受。",
      points: [
        "完整評估",
        "傾聽女性的生活狀態與感受",
        "以安全、適合、長期為前提",
        "讓治療成為一段溫柔而有依靠的過程，而不是短暫的應付"
      ],
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      image: balanceImage
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

          <div className="space-y-6">
            {treatments.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              
              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden group cursor-pointer ${isExpanded ? 'ring-1 ring-primary/20' : ''}`}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start relative">
                  {/* Decorative number */}
                  <div className="absolute top-4 right-6 text-6xl font-serif text-secondary/20 font-bold select-none pointer-events-none">
                    0{idx + 1}
                  </div>

                  <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 space-y-2 w-full">
                    <div className="flex justify-between items-center w-full">
                       <div>
                          <p className="text-xs text-primary font-bold tracking-widest uppercase mb-1">{item.en}</p>
                          <h3 className="text-2xl font-bold tracking-wide text-foreground">{item.title}</h3>
                       </div>
                       <motion.div 
                         animate={{ rotate: isExpanded ? 180 : 0 }}
                         transition={{ duration: 0.3 }}
                         className="text-muted-foreground group-hover:text-primary"
                       >
                         <ChevronDown className="w-6 h-6" />
                       </motion.div>
                    </div>
                    
                    {/* Collapsed Preview */}
                    {!isExpanded && (
                      <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="text-muted-foreground line-clamp-2 md:line-clamp-1 pt-2"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 md:px-10 pb-10 pt-0 grid md:grid-cols-2 gap-10">
                         <div className="space-y-6">
                           <div className="w-full h-px bg-border" />
                           <p className="text-muted-foreground leading-loose text-justify text-lg">
                             {item.desc}
                           </p>
                           {item.points.length > 0 && (
                             <ul className="space-y-3 bg-secondary/10 p-6 rounded-lg">
                                {item.points.map((point, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-3 text-muted-foreground">
                                     <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                                     {point}
                                  </li>
                                ))}
                             </ul>
                           )}
                         </div>
                         <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay for better text contrast if needed in future overlay */}
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              );
            })}
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