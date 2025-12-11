import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Heart, 
  Activity, 
  Sparkles, 
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Image Assets
const HERO_IMAGE = "/attached_assets/邱院長(3)_1765433809366.jpg";
const ABOUT_IMAGE = "/attached_assets/邱院長(1)_1765433809360.jpg";
const PROCESS_IMAGE = "/attached_assets/邱院長(5)_1765433809368.jpg";

import stockImage from '@assets/stock_images/modern_medical_clini_5b6146a0.jpg';

export default function Home() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "首頁", id: "home" },
    { name: "關於醫師", id: "about" },
    { name: "更年期知識", id: "knowledge" },
    { name: "症狀與治療", id: "symptoms" },
    { name: "諮詢流程", id: "process" },
    { name: "聯繫我們", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-serif text-foreground selection:bg-secondary selection:text-secondary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-gold-gradient tracking-wider">
              邱文瑾醫師
            </span>
            <span className="hidden md:inline-block text-sm text-muted-foreground border-l border-border pl-2 ml-2">
              女性更年期特別門診
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
              </button>
            ))}
            <Button 
              className="bg-gold-gradient text-white rounded-full px-6 border-0"
              onClick={() => scrollToSection('contact')}
            >
              立即預約
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2 px-4 hover:bg-secondary/50 rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-md mt-2"
              onClick={() => scrollToSection('contact')}
            >
              立即預約
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-soft-gradient">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-sm tracking-wide font-medium shadow-sm">
                專屬女性的溫柔照護
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                擁抱蛻變，<br />
                <span className="text-gold-gradient relative">
                  優雅重生
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                更年期不是終點，而是另一段美麗旅程的起點。
                邱文瑾醫師以專業醫療與溫暖同理，陪伴您度過這段轉變期，
                找回身心平衡，綻放自信光彩。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gold-gradient text-white text-lg rounded-full px-8 py-6 h-auto shadow-lg shadow-primary/20 transition-all hover:scale-105 border-0"
                  onClick={() => scrollToSection('contact')}
                >
                  預約諮詢
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/50 hover:bg-white border-primary/30 text-primary text-lg rounded-full px-8 py-6 h-auto transition-all hover:scale-105"
                  onClick={() => scrollToSection('about')}
                >
                  了解醫師
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={HERO_IMAGE} 
                  alt="邱文瑾醫師" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/50 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] md:aspect-auto">
                 <img 
                  src={ABOUT_IMAGE} 
                  alt="邱文瑾醫師看診" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-border/50 max-w-xs hidden md:block">
                <p className="font-serif italic text-primary text-lg">
                  "傾聽您的聲音，<br/>療癒您的身心。"
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                關於 <span className="text-gold-gradient">邱文瑾醫師</span>
              </h2>
              <div className="w-20 h-1 bg-gold-gradient mb-6" />
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  身為女性，我深刻理解每一個生命階段的轉變所帶來的挑戰與不安。
                  更年期是身體機能的轉捩點，但不應是生活品質的終點。
                </p>
                <p>
                  我致力於打造一個隱密、舒適且專業的診療空間，結合實證醫學與全人照護的理念，
                  為每一位女性量身打造專屬的健康管理計畫。從荷爾蒙調理、營養諮詢到心理支持，
                  我們全方位守護您的健康。
                </p>
              </div>

              <div className="pt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">專科資格</h3>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      中華民國專科醫師證書：內科專科醫師
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      中華民國內分泌新陳代謝專科醫師
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">專業領域</h3>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      體重管理與肥胖治療
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      代謝症候群診斷與治療
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      更年期及荷爾蒙調控
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      健康促進與慢性病預防
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      醫學營養與運動處方
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">學歷</h3>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      國立國防大學醫學系 醫學士
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      台北市新光醫院 內科部住院醫師訓練
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      台北市新光醫院 內分泌新陳代謝科專科醫師訓練
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">經歷</h3>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      前 麗之美時尚診所 醫美主治醫師
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      曜妍診所 醫美抗老主治醫師
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      EXOSILK 膠絲醫學保養品
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      功能醫學健康集團醫師
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      新陳代謝內分泌專科醫師
                    </li>
                     <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      健康好生活節目醫師
                    </li>
                  </ul>
                </div>

                 <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-foreground mb-4">特色與優勢</h3>
                  <ul className="space-y-2 text-muted-foreground text-base grid md:grid-cols-2 gap-x-8 gap-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      十餘年內科與代謝疾病臨床經驗
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      擅長整合飲食、運動、藥物及儀器輔助的多元減重計畫
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      重視客製化治療與長期追蹤
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      善於以科學數據輔助病人理解與改變生活型態
                    </li>
                    <li className="flex items-start gap-2 md:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      熟悉自費減重藥物與健保慢性病治療之差異與搭配
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              更年期知識專欄
            </h2>
            <p className="text-muted-foreground text-lg">
              了解身體的變化，是愛自己的第一步
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "什麼是更年期？",
                desc: "更年期是指女性卵巢功能逐漸衰退，直到完全停止排卵的過渡時期。通常發生在45至55歲之間，是一段自然的生理過程。",
                icon: <Clock className="w-10 h-10 text-primary" />
              },
              {
                title: "荷爾蒙的變化",
                desc: "隨著雌激素與黃體素的分泌減少，身體會產生一系列的生理與心理變化。正確的荷爾蒙補充療法可以有效緩解不適。",
                icon: <Activity className="w-10 h-10 text-primary" />
              },
              {
                title: "身心平衡調適",
                desc: "除了藥物治療，生活型態的調整、飲食營養的補充以及適度的運動，都是度過更年期不可或缺的重要環節。",
                icon: <Heart className="w-10 h-10 text-primary" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-primary/10"
              >
                <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section id="symptoms" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                常見症狀與治療
              </h2>
              <p className="text-muted-foreground text-lg">
                如果您正在經歷以下困擾，請不要獨自忍受。
                專業的醫療協助可以幫助您改善生活品質。
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "熱潮紅、盜汗", "失眠、淺眠", 
                  "情緒波動、焦慮", "記憶力減退",
                  "皮膚乾燥、老化", "骨質流失",
                  "心悸、胸悶", "泌尿道感染"
                ].map((symptom, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{symptom}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">我們的治療方案</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">個別化荷爾蒙補充療法 (HRT)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">非荷爾蒙替代療法與營養諮詢</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">骨質疏鬆預防與治療</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">私密處雷射保養與抗衰老療程</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/attached_assets/邱院長(8)_1765433809370.jpg" 
                alt="專業諮詢" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <p className="text-white text-xl font-serif italic">
                  "找回身體的主導權，重拾自信光采。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section id="process" className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${stockImage})` }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">專屬諮詢流程</h2>
            <p className="text-primary-foreground/80 text-lg">
              簡單四步驟，開啟您的健康旅程
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "預約諮詢", desc: "透過電話或 Line 預約看診時間" },
              { step: "02", title: "醫師問診", desc: "詳細評估身體狀況與病史" },
              { step: "03", title: "檢測評估", desc: "必要時安排血液或超音波檢查" },
              { step: "04", title: "客製療程", desc: "制定專屬您的治療與保養計畫" }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-bold text-white/20 absolute -top-8 -left-4 font-serif">
                  {item.step}
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl relative hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-white/40">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-md p-2 rounded-full pr-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                  <img src={PROCESS_IMAGE} alt="邱醫師" className="w-full h-full object-cover" />
                </div>
                <p className="text-lg font-serif">
                  準備好開始改變了嗎？我們隨時在這裡為您服務。
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                聯繫我們
              </h2>
              <p className="text-muted-foreground text-lg">
                歡迎填寫下方表單，或透過電話、Line 與我們聯繫。
                我們的專人將會盡快回覆您的需求。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">預約專線</h3>
                    <p className="text-muted-foreground text-lg font-serif tracking-wider">02-2345-6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Line 官方帳號</h3>
                    <p className="text-muted-foreground">@dr.chiu_clinic</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">診所地址</h3>
                    <p className="text-muted-foreground">台北市大安區信義路四段 123 號 2 樓</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">門診時間</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>週一至週五：10:00 - 20:00</p>
                      <p>週六：10:00 - 17:00</p>
                      <p>週日及國定假日休診</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-border">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                toast({
                  title: "預約申請已送出",
                  description: "專人將於工作日內與您聯繫確認時間。",
                });
              }}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">姓名</label>
                  <Input id="name" placeholder="請輸入您的姓名" required className="h-12 bg-secondary/10 border-primary/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">聯絡電話</label>
                  <Input id="phone" placeholder="請輸入您的聯絡電話" required className="h-12 bg-secondary/10 border-primary/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">諮詢項目</label>
                  <select id="service" className="flex h-12 w-full rounded-md border border-primary/20 bg-secondary/10 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>更年期症狀諮詢</option>
                    <option>荷爾蒙療程評估</option>
                    <option>抗衰老保養</option>
                    <option>其他</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">留言備註</label>
                  <Textarea id="message" placeholder="請簡述您的狀況或想詢問的內容" className="min-h-[120px] bg-secondary/10 border-primary/20 focus:border-primary" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-md">
                  送出預約
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 border-b border-white/10 pb-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">邱文瑾醫師</h3>
              <p className="text-white/60">女性更年期特別門診</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速連結</h4>
              <div className="space-y-2 flex flex-col">
                {navLinks.map(link => (
                  <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">追蹤我們</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v.001zm0-2c-2.71 0-3.048.011-4.113.06-1.12.05-1.889.26-2.576.528a6.953 6.953 0 00-2.528 1.528 6.953 6.953 0 00-1.528 2.528c-.268.687-.477 1.455-.528 2.575C1.012 8.288 1 8.626 1 11.315v.63c0 2.69.011 3.028.06 4.113.05 1.12.26 1.889.528 2.576.376.965.947 1.773 1.666 2.492.72.719 1.527 1.29 2.492 1.666.687.268 1.455.477 2.575.528 1.065.05 1.403.06 4.113.06h.63c2.689 0 3.027-.011 4.113-.06 1.12-.05 1.889-.26 2.576-.528a6.958 6.958 0 002.528-1.528 6.958 6.958 0 001.528-2.528c.268-.687.477-1.455.528-2.575.05-1.065.06-1.403.06-4.113v-.63c0-2.689-.011-3.027-.06-4.113-.05-1.12-.26-1.889-.528-2.576a6.958 6.958 0 00-1.528-2.528 6.958 6.958 0 00-2.528-1.528c-.687-.268-1.455-.477-2.575-.528C15.362 1.012 15.024 1 12.315 1h-.63zM12.315 6.83a5.485 5.485 0 110 10.97 5.485 5.485 0 010-10.97zm0 8.97a3.485 3.485 0 100-6.97 3.485 3.485 0 000 6.97zm8.115-9.356a1.334 1.334 0 11-2.668 0 1.334 1.334 0 012.668 0z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-white/40 text-sm">
            © 2024 邱文瑾醫師 女性更年期特別門診. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}