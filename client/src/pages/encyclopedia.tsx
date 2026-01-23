import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Activity, Heart, Scale, Coffee } from "lucide-react";

export default function Encyclopedia() {
  const zones = [
    { 
      title: "代謝與內分泌", 
      en: "Metabolic & Endocrine", 
      icon: <Activity className="w-8 h-8" />,
      desc: "涵蓋甲狀腺、荷爾蒙失調、更年期管理。",
      color: "bg-blue-50 text-blue-600"
    },
    { 
      title: "糖友專區", 
      en: "Diabetic Zone", 
      icon: <Scale className="w-8 h-8" />,
      desc: "糖尿病前期預防、血糖管理新知、CGM 持續血糖監測應用。",
      color: "bg-green-50 text-green-600"
    },
    { 
      title: "心血管守護", 
      en: "Cardiovascular", 
      icon: <Heart className="w-8 h-8" />,
      desc: "高血壓、心臟病預防、動脈硬化相關研究。",
      color: "bg-red-50 text-red-600"
    },
    { 
      title: "三高與肥胖", 
      en: "Obesity & Metabolic", 
      icon: <Scale className="w-8 h-8" />, // Reusing scale for now, maybe use different icon
      desc: "膽固醇管理、減重科學、脂肪肝臨床指南。",
      color: "bg-yellow-50 text-yellow-600"
    },
    { 
      title: "生活處方箋", 
      en: "Lifestyle Rx", 
      icon: <Coffee className="w-8 h-8" />,
      desc: "運動生理學、營養醫學、睡眠與代謝。",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">代謝內科百科</h1>
        <p className="text-xl text-muted-foreground">Knowledge Hub</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {zones.map((zone, idx) => (
          <div key={idx} className="group p-8 rounded-xl border border-border hover:shadow-lg transition-all bg-white">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${zone.color}`}>
              {zone.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">{zone.title}</h3>
            <p className="text-sm font-bold text-primary/60 mb-4">{zone.en}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {zone.desc}
            </p>
            <button className="flex items-center text-primary font-bold group-hover:gap-2 transition-all">
              閱讀更多 <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
