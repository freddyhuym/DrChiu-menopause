import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Heart, Scale, Coffee, Brain, ChevronRight, Zap } from "lucide-react";
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

export default function Encyclopedia() {
  const [activeZone, setActiveZone] = useState<string>("metabolic");

  const zones: Zone[] = [
    { 
      id: "lifestyle",
      title: "生活處方箋", 
      en: "Lifestyle Rx", 
      icon: <Coffee className="w-6 h-6" />,
      desc: "大腦健康、睡眠品質與壓力調節的科學管理。",
      details: ["深度睡眠優化", "皮質醇(壓力荷爾蒙)管理", "晝夜節律調整", "正念與冥想科學"],
      x: 50, 
      y: 12, // Head/Brain
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
      y: 22, // Neck/Thyroid
      color: "bg-blue-500"
    },
    { 
      id: "cardio",
      title: "心血管守護", 
      en: "Cardiovascular", 
      icon: <Heart className="w-6 h-6" />,
      desc: "心臟健康、血壓控制與血管彈性維護。",
      details: ["高血壓精準用藥", "動脈硬化早期篩檢", "心律變異度(HRV)分析", "血脂與血管發炎指標"],
      x: 55, 
      y: 32, // Chest/Heart
      color: "bg-red-500"
    },
    { 
      id: "diabetic",
      title: "糖友專區", 
      en: "Diabetic Zone", 
      icon: <Zap className="w-6 h-6" />,
      desc: "胰島素阻抗、血糖波動與糖尿病前期預防。",
      details: ["CGM 持續血糖監測", "胰島素阻抗逆轉", "糖尿病前期飲食策略", "低GI飲食計畫"],
      x: 45, 
      y: 42, // Pancreas area
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
      y: 52, // Abdomen/Liver
      color: "bg-yellow-500"
    }
  ];

  const currentZone = zones.find(z => z.id === activeZone) || zones[0];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-20 relative overflow-y-auto overflow-x-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 50% 50%, #1e3a8a 0%, #0a192f 100%)',
           }} 
      />
      
      <div className="container mx-auto px-4 min-h-[calc(100vh-80px)] h-auto relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 pb-12 lg:pb-0">
        
        {/* Left: Interactive Body Map */}
        <div className="relative w-full max-w-md h-[500px] lg:h-[80vh] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Glowing Body Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-full w-full flex items-center justify-center"
            >
               <img 
                 src={bodyImage} 
                 alt="Interactive Body Map" 
                 className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
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
                     <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 ${zone.color} ${activeZone === zone.id ? 'scale-125 bg-white' : ''}`}></span>
                     
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
        <div className="w-full lg:w-1/2 h-auto lg:h-[600px] relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -right-10 -bottom-10 text-white/5 pointer-events-none">
                {/* Clone icon with larger size */}
                <div className="w-64 h-64 opacity-10 transform rotate-12">
                   {currentZone.icon}
                </div>
              </div>

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 ${currentZone.color.replace('bg-', 'bg-opacity-20 text-')}`}>
                  {currentZone.icon}
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  {currentZone.title}
                </h2>
                <h3 className="text-xl text-blue-300 font-medium mb-8 tracking-widest uppercase">
                  {currentZone.en}
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8 border-l-2 border-blue-500/50 pl-4">
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

                <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/20 w-fit">
                  深入閱讀相關文獻
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
