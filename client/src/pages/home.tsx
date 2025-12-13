import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
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
  X,
  Award,
  GraduationCap,
  Stethoscope,
  Globe
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import stockImage from '@assets/stock_images/modern_medical_clini_5b6146a0.jpg';
import aboutImage from '@assets/dr_1765436654368.jpg';

// Image Assets
const HERO_IMAGE = "/attached_assets/dr_1765436104223.jpg";
const PROCESS_IMAGE = "/attached_assets/dr_1765436104223.jpg";

const VIDEO_IDS = [
  "5HEc-vu3NTk",
  "ILUUboF9j9M",
  "gnu3hdeB2kg"
];

function MediaSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(1);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) {
      setActiveIndex((prev) => Math.max(0, prev - 1));
    } else if (info.offset.x < -100) {
      setActiveIndex((prev) => Math.min(VIDEO_IDS.length - 1, prev + 1));
    }
  };

  return (
    <section id="media" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('media.title')} 
            {t('media.subtitle') && <span className="text-lg text-muted-foreground ml-2">{t('media.subtitle')}</span>}
          </h2>
        </div>

        <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: "1000px" }}>
           {VIDEO_IDS.map((id, index) => {
             const offset = index - activeIndex;
             const isActive = index === activeIndex;
             
             return (
               <motion.div
                 key={id}
                 className={`absolute rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-black ${isActive ? 'z-20' : 'z-10'}`}
                 style={{
                    width: window.innerWidth < 768 ? '260px' : '300px',
                    aspectRatio: '9/16',
                 }}
                 initial={false}
                 animate={{
                   x: offset * (window.innerWidth < 768 ? 40 : 120),
                   scale: isActive ? 1.1 : 0.8,
                   opacity: isActive ? 1 : 0.6,
                   rotateY: offset * 25,
                   zIndex: isActive ? 20 : 10 - Math.abs(offset)
                 }}
                 drag={isActive ? "x" : false}
                 dragConstraints={{ left: 0, right: 0 }}
                 dragElastic={0.2}
                 onDragEnd={handleDragEnd}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 onClick={() => setActiveIndex(index)}
               >
                 <div className="w-full h-full relative pointer-events-none">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0&controls=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full bg-black pointer-events-auto"
                    />
                    {/* Overlay for drag interaction on non-active videos or if we want custom controls */}
                 </div>
               </motion.div>
             );
           })}
        </div>
        
        {/* Navigation Dots */}
         <div className="flex justify-center gap-4 mt-8">
            {VIDEO_IDS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeIndex ? "bg-gold" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const ABOUT_IMAGE = aboutImage;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t("nav.home"), id: "home" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.knowledge"), id: "knowledge" },
    { name: t("nav.symptoms"), id: "symptoms" },
    { name: t("nav.process"), id: "process" },
    { name: t("nav.contact"), id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-serif text-foreground selection:bg-secondary selection:text-secondary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-gold-gradient tracking-wider">
              {t("about.doctor")}
            </span>
            <span className="hidden md:inline-block text-sm text-muted-foreground border-l border-border pl-2 ml-2">
              {t("hero.tag")}
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
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
              aria-label="Toggle Language"
            >
              <Globe size={20} />
            </button>
            <Button 
              className="bg-gold-gradient text-white rounded-full px-6 border-0"
              onClick={() => scrollToSection('contact')}
            >
              {t("nav.book")}
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
            >
              <Globe size={20} />
            </button>
            <button 
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              {t("nav.book")}
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-50 via-white to-amber-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
           <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
           <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
           
           {/* Shimmer Overlay */}
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-700 text-sm tracking-wide font-medium shadow-sm">
                {t("hero.tag")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center flex-wrap">
                <span>{t("hero.title1")}</span>
                <span className="text-gold-gradient relative">
                  {t("hero.title2")}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("hero.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gold-gradient text-white text-lg rounded-full px-8 py-6 h-auto shadow-lg shadow-primary/20 transition-all hover:scale-105 border-0"
                  onClick={() => scrollToSection('contact')}
                >
                  {t("hero.book")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/50 hover:bg-white border-primary/30 text-primary text-lg rounded-full px-8 py-6 h-auto transition-all hover:scale-105"
                  onClick={() => scrollToSection('about')}
                >
                  {t("hero.about")}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                {t("about.title")} <span className="text-gold-gradient">{t("about.doctor")}</span>
              </h2>
              <div className="w-20 h-1 bg-gold-gradient mb-12 mx-auto" />
              
              <div className="flex flex-col md:flex-row gap-12 items-center md:items-center">
                <div className="relative w-full md:w-1/3 shrink-0">
                   <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 aspect-[3/4] max-w-sm">
                    <img 
                      src={ABOUT_IMAGE} 
                      alt="邱文瑾醫師" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 space-y-6 text-left md:pt-12">
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      {t("about.desc1")}
                    </p>
                    <p>
                      {t("about.desc2")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Qualifications */}
                  <div className="glass-card rounded-xl p-6 border border-gold/20 shadow-sm hover:shadow-md transition-all bg-white/50">
                    <h3 className="text-xl font-bold text-gold-gradient mb-4 flex items-center gap-2 border-b border-gold/10 pb-2">
                      <Award className="w-5 h-5 text-gold" /> {t("about.qualifications")}
                    </h3>
                    <ul className="space-y-3 text-muted-foreground text-base">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        中華民國專科醫師證書：<br/>內科專科醫師
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        中華民國內分泌新陳代謝<br/>專科醫師
                      </li>
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="glass-card rounded-xl p-6 border border-gold/20 shadow-sm hover:shadow-md transition-all bg-white/50">
                    <h3 className="text-xl font-bold text-gold-gradient mb-4 flex items-center gap-2 border-b border-gold/10 pb-2">
                      <GraduationCap className="w-5 h-5 text-gold" /> {t("about.education")}
                    </h3>
                    <ul className="space-y-3 text-muted-foreground text-base">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        國立國防大學醫學系 醫學士
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        台北市新光醫院 <br/>內科部住院醫師訓練
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        台北市新光醫院 <br/>內分泌新陳代謝科專科醫師訓練
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Expertise */}
                <div className="glass-card rounded-xl p-6 border border-gold/20 shadow-sm hover:shadow-md transition-all bg-white/50">
                  <h3 className="text-xl font-bold text-gold-gradient mb-4 flex items-center gap-2 border-b border-gold/10 pb-2">
                    <Stethoscope className="w-5 h-5 text-gold" /> {t("about.expertise")}
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground text-base">
                    {[
                      t("symptoms.treat.hrt"), // Reusing some strings or define new ones if needed, keeping simple for now
                      "代謝症候群診斷與治療",
                      "更年期及荷爾蒙調控",
                      "健康促進與慢性病預防",
                      "醫學營養與運動處方"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="glass-card rounded-xl p-6 border border-gold/20 shadow-sm hover:shadow-md transition-all bg-white/50">
                  <h3 className="text-xl font-bold text-gold-gradient mb-4 flex items-center gap-2 border-b border-gold/10 pb-2">
                    <Sparkles className="w-5 h-5 text-gold" /> {t("about.features")}
                  </h3>
                  <ul className="grid gap-3 text-muted-foreground text-base">
                    {[
                      "十餘年內科與代謝疾病臨床經驗",
                      "擅長整合飲食、運動、藥物及儀器輔助的多元減重計畫",
                      "重視客製化治療與長期追蹤",
                      "善於以科學數據輔助病人理解與改變生活型態",
                      "熟悉自費減重藥物與健保慢性病治療之差異與搭配"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
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
              {t("knowledge.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("knowledge.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("knowledge.item1.title"),
                desc: t("knowledge.item1.desc"),
                icon: <Clock className="w-10 h-10 text-primary" />
              },
              {
                title: t("knowledge.item2.title"),
                desc: t("knowledge.item2.desc"),
                icon: <Activity className="w-10 h-10 text-primary" />
              },
              {
                title: t("knowledge.item3.title"),
                desc: t("knowledge.item3.desc"),
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

      {/* Media Section */}
      <MediaSection />

      {/* Symptoms Section */}
      <section id="symptoms" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                常見症狀與治療
              </h2>
              <p className="text-muted-foreground text-lg text-center w-full mx-auto">
                如果您正在經歷以下困擾，請不要獨自忍受。專業的醫療協助可以幫助您改善生活品質。
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
             <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-md p-6 rounded-full px-8">
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