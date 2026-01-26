import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Activity, Newspaper, TrendingUp, Globe, AlertCircle, Heart, Scale, Coffee, Brain, Zap, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import logoBadge from '@assets/1295071_1769406548918.jpg';
import bodyImage from '@/assets/generated_images/medical_body_interface.png';

interface Zone {
  id: string;
  title: string;
  en: string;
  icon: any;
  desc: string;
  details: string[];
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  color: string;
}

export default function Home() {
  const [activeZone, setActiveZone] = useState<string>("metabolic");

  const zones: Zone[] = [
    { 
      id: "lifestyle",
      title: "生活處方箋", 
      en: "Lifestyle Rx", 
      icon: <Coffee className="w-6 h-6" />,
      desc: "大腦健康、睡眠品質與壓力調節的科學管理。",
      details: ["深度睡眠優化", "皮質醇(壓力荷爾蒙)管理", "晝夜節律調整", "正念與冥想科學"],
      x: 32, 
      y: 18, // Moved to the left data viz area as requested
      color: "bg-purple-500"
    },
    { 
      id: "metabolic",
      title: "代謝與內分泌", 
      en: "Metabolic & Endocrine", 
      icon: <Activity className="w-6 h-6" />,
      desc: "甲狀腺功能、女性荷爾蒙與基礎代謝率的平衡。",
      details: ["甲狀腺功能低下/亢進", "更年期荷爾蒙替代療法", "腎上腺疲勞檢測", "基礎代謝率提升"],
      x: 50, 
      y: 36, // Center of body
      color: "bg-blue-500"
    },
    { 
      id: "cardio",
      title: "心血管守護", 
      en: "Cardiovascular", 
      icon: <Heart className="w-6 h-6" />,
      desc: "心臟健康、血壓控制與血管彈性維護。",
      details: ["高血壓精準用藥", "動脈硬化早期篩檢", "心律變異度(HRV)分析", "血脂與血管發炎指標"],
      x: 54, 
      y: 31, // Heart position
      color: "bg-red-500"
    },
    { 
      id: "diabetic",
      title: "糖友專區", 
      en: "Diabetic Zone", 
      icon: <Zap className="w-6 h-6" />,
      desc: "胰島素阻抗、血糖波動與糖尿病前期預防。",
      details: ["CGM 持續血糖監測", "胰島素阻抗逆轉", "糖尿病前期飲食策略", "低GI飲食計畫"],
      x: 52, 
      y: 44, // Pancreas position
      color: "bg-green-500"
    },
    { 
      id: "obesity",
      title: "三高與肥胖", 
      en: "Obesity & Metabolic", 
      icon: <Scale className="w-6 h-6" />,
      desc: "內臟脂肪、脂肪肝與代謝症候群的綜合治療。",
      details: ["科學減重處方", "脂肪肝逆轉療程", "內臟脂肪分析", "增肌減脂運動規劃"],
      x: 50, 
      y: 50, // Abdomen/Belly (Moved up)
      color: "bg-yellow-500"
    }
  ];

  const currentZone = zones.find(z => z.id === activeZone) || zones[0];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* 1. Hero Section: Rolling Hot News & Brand */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left: Brand Message */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                 <img src={logoBadge} alt="Metalife Logo" className="w-20 h-20 object-cover rounded-full shadow-lg border-2 border-white/50" />
                 <div className="inline-block px-4 py-1 bg-blue-100 text-primary text-xs font-bold rounded-full tracking-wider">
                   Science for Better Life
                 </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                數據守護健康<br/>
                <span className="text-primary">科學引領生活</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Metalife.pro 匯集權威代謝內科醫師團隊，為您解讀全球最新醫學實證，打造最值得信賴的健康知識庫。
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/encyclopedia" className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                    探索醫學百科
                </Link>
                <Link href="/about" className="border border-gray-300 text-foreground px-8 py-3 rounded-md font-bold hover:bg-gray-50 transition-colors">
                    了解我們
                </Link>
              </div>
            </motion.div>

            {/* Right: Hot News Carousel / Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 w-full"
            >
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="absolute -top-3 -left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                  HOT NEWS
                </div>
                <div className="space-y-6">
                  {[
                    { title: "NEJM 最新研究：間歇性斷食對代謝症候群的影響", tag: "全球研究", color: "text-blue-600" },
                    { title: "衛福部公布 2026 年糖尿病照護新準則", tag: "政策更新", color: "text-green-600" },
                    { title: "關於「瘦瘦針」的五大迷思破解", tag: "醫學澄清", color: "text-red-600" }
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0 group cursor-pointer">
                      <div className={`text-xs font-bold mb-1 ${item.color}`}>{item.tag}</div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 -z-0" />
      </section>

      {/* 2. Core Knowledge Hub (Interactive Body Map) */}
      <section className="py-24 bg-[#0a0f29] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">代謝內科百科</h2>
            <p className="text-blue-300">Interactive Knowledge Hub</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            
            {/* Left: Interactive Body Map */}
            <div className="relative w-full max-w-sm h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Glowing Body Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative h-full w-full flex items-center justify-center"
                >
                   <img 
                     src={bodyImage} 
                     alt="Interactive Body Map" 
                     className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" 
                   />
                   
                   {/* Interactive Hotspots */}
                   {zones.map((zone) => (
                     <button
                       key={zone.id}
                       onClick={() => setActiveZone(zone.id)}
                       className="absolute group focus:outline-none"
                       style={{ 
                         top: `${zone.y}%`, 
                         left: `${zone.x}%`, 
                         transform: 'translate(-50%, -50%)' 
                       }}
                     >
                       <div className="relative flex items-center justify-center w-12 h-12">
                         {/* Pulse Effect */}
                         <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${zone.color} ${activeZone === zone.id ? 'opacity-75' : 'opacity-20'}`}></span>
                         
                         {/* Core Dot */}
                         <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 ${zone.color} ${activeZone === zone.id ? 'ring-2 ring-white/50' : ''}`}></span>
                         
                         {/* Label on Hover */}
                         <div className={`absolute left-full ml-4 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeZone === zone.id ? 'opacity-100' : ''}`}>
                           {zone.title}
                         </div>

                         {/* Connecting Line to Label (Decorative) */}
                         {activeZone === zone.id && (
                           <svg className="absolute left-2 top-1/2 w-20 h-20 -z-10 pointer-events-none hidden lg:block overflow-visible">
                              <motion.path
                                d="M 0 0 L 40 0"
                                stroke="white"
                                strokeWidth="1"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 0.5 }}
                              />
                           </svg>
                         )}
                       </div>
                     </button>
                   ))}
                </motion.div>
              </div>
            </div>

            {/* Right: Detail Content Panel */}
            <div className="w-full lg:w-1/2 h-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeZone}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative Background Icon */}
                  <div className="absolute -right-10 -bottom-10 text-white/5 pointer-events-none">
                    <div className="w-64 h-64 opacity-10 transform rotate-12">
                       {currentZone.icon}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 ${currentZone.color.replace('bg-', 'bg-opacity-20 text-')}`}>
                      {currentZone.icon}
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                      {currentZone.title}
                    </h2>
                    <h3 className="text-lg text-blue-300 font-medium mb-6 tracking-widest uppercase">
                      {currentZone.en}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-8 border-l-2 border-blue-500/50 pl-4">
                      {currentZone.desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {currentZone.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                          <div className={`w-2 h-2 rounded-full ${currentZone.color}`} />
                          <span className="text-sm font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/encyclopedia">
                      <a className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20">
                        深入閱讀相關文獻
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Latest Videos (Meta-Stream) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-2">Meta-Stream 影音</h2>
             <p className="text-muted-foreground">專業醫師對談與衛教動畫</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {/* Main Featured Video */}
             <div className="md:col-span-2 group cursor-pointer relative rounded-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" alt="Video Thumb" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                   <div className="bg-primary/90 text-white text-xs font-bold px-2 py-1 inline-block rounded mb-3">醫師對談</div>
                   <h3 className="text-3xl font-bold mb-2">糖尿病患者如何正確運動？運動生理學專家解密</h3>
                   <p className="opacity-90">本集邀請到運動醫學權威，深入探討糖友運動的黃金法則與禁忌。</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current" />
                </div>
             </div>

             {/* Side Videos List */}
             <div className="flex flex-col gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-4 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                     <div className="w-24 h-24 bg-gray-200 rounded shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white/80 fill-current" />
                        </div>
                     </div>
                     <div>
                        <div className="text-xs text-primary font-bold mb-1">60秒醫學快訊</div>
                        <h4 className="font-bold text-sm leading-snug mb-1">飯後血糖飆高怎麼辦？3招緊急應對</h4>
                        <div className="text-xs text-muted-foreground">觀看次數 5.2k</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 4. Press Center (Meta-News) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 whitespace-nowrap">Meta-Pulse 醫學動態</h2>
            <p className="text-muted-foreground">掌握全球醫療最前線</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all group">
                <Globe className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">全球研究摘要</h3>
                <p className="text-muted-foreground mb-6">同步翻譯並解讀 NEJM、Lancet 等國際期刊的最新研究。</p>
                <Link href="/news" className="text-primary font-bold flex items-center text-sm group-hover:underline">前往專區 <ArrowRight className="w-4 h-4 ml-1" /></Link>
             </div>
             <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all group">
                <TrendingUp className="w-10 h-10 text-green-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">產業新聞</h3>
                <p className="text-muted-foreground mb-6">新藥上市資訊、新型醫療儀器發展、健保政策更新。</p>
                <Link href="/news" className="text-green-600 font-bold flex items-center text-sm group-hover:underline">前往專區 <ArrowRight className="w-4 h-4 ml-1" /></Link>
             </div>
             <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all group">
                <AlertCircle className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">聲明與澄清</h3>
                <p className="text-muted-foreground mb-6">針對社群媒體流傳的錯誤健康資訊，以專業角度發布正式澄清稿。</p>
                <Link href="/news" className="text-red-500 font-bold flex items-center text-sm group-hover:underline">前往專區 <ArrowRight className="w-4 h-4 ml-1" /></Link>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
