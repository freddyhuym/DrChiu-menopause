import { motion } from "framer-motion";
import { ArrowRight, Sparkles, User, FileText, Stethoscope, Video, Mail, Play } from "lucide-react";
import { Link } from "wouter";
import aboutImage from '@assets/dr_1765436654368.jpg';

// Import stock images - Korean Beauty Aesthetic
import hormoneImage from '@assets/stock_images/korean_woman_glowing_8a842a11.jpg';
import naturalImage from '@assets/stock_images/asian_woman_natural__430ba22f.jpg';
import autonomicImage from '@assets/stock_images/korean_woman_sleepin_f6960c38.jpg';
import boneImage from '@assets/stock_images/asian_woman_elegant__843c4603.jpg';
import cardioImage from '@assets/stock_images/asian_woman_healthy__11fa4fb5.jpg';
import balanceImage from '@assets/stock_images/korean_woman_meditat_0c8b7f71.jpg';

export default function Home() {
  const treatments = [
    { name: "荷爾蒙平衡", en: "Hormone", link: "/treatments", image: hormoneImage },
    { name: "非藥物調理", en: "Natural", link: "/treatments", image: naturalImage },
    { name: "自律神經", en: "Autonomic", link: "/treatments", image: autonomicImage },
    { name: "骨骼健康", en: "Bone", link: "/treatments", image: boneImage },
    { name: "心血管代謝", en: "Cardio", link: "/treatments", image: cardioImage },
    { name: "身心平衡", en: "Balance", link: "/treatments", image: balanceImage }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* 1. Hero Section - Full Screen Video/Image Vibe */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Simple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 z-0" />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-bold">
              Menopause Sanctuary
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-primary mb-6 drop-shadow-sm leading-tight">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light mb-2 tracking-[0.2em] text-foreground/60">EMBRACE CHANGE</span>
              擁抱蛻變<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary font-light italic">
                優雅重生
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-4 tracking-[0.2em] text-foreground/60 italic font-serif">Reborn with Grace</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-foreground font-medium leading-relaxed tracking-wide">
              專屬女性的靜謐綠洲，結合專業醫學與溫柔陪伴，<br/>
              讓更年期成為生命中最美麗的轉折。
            </p>
            
            <div className="pt-12">
               <Link href="/contact">
                 <a className="inline-flex items-center gap-3 border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-white transition-all duration-500 tracking-[0.2em] text-sm uppercase font-bold">
                   預約諮詢 <ArrowRight className="w-4 h-4" />
                 </a>
               </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </motion.div>
      </section>

      {/* 2. Philosophy / Oasis Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 relative">
                <div className="absolute -top-20 -left-20 text-[200px] text-primary/5 font-serif font-bold leading-none select-none -z-10">
                  OASIS
                </div>
                <h3 className="text-primary tracking-[0.2em] text-sm uppercase border-l-2 border-primary pl-4 font-bold">
                  Our Philosophy
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                  身心棲息的<br/>
                  <span className="italic text-primary">靜謐綠洲</span>
                </h2>
                <p className="text-foreground/80 leading-loose text-justify font-medium">
                  在這個繁忙的時代，我們希望打造的不只是一間診所，而是一個能讓您暫時放下重擔、傾聽身體聲音的空間。
                  <br/><br/>
                  邱文瑾醫師深信，更年期照護不應止於藥物，更需要全人的關懷。從生理數據的精密判讀，到心理壓力的溫柔承接，我們在這裡，陪您找回身心的平衡與自在。
                </p>
                <Link href="/about">
                   <a className="inline-flex items-center text-foreground hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-1 mt-4 font-semibold">
                     閱讀更多關於醫師 <ArrowRight className="w-4 h-4 ml-2" />
                   </a>
                </Link>
              </div>
              <div className="relative">
                 <div className="aspect-[4/5] overflow-hidden relative z-10 border border-primary/20 shadow-xl rounded-sm">
                    <img 
                      src={aboutImage} 
                      alt="Dr. Chiu" 
                      className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-700" 
                    />
                 </div>
                 {/* Decorative Frame */}
                 <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/30 -z-0" />
              </div>
           </div>
        </div>
      </section>

      {/* 3. Services Grid - High End Clinic Style */}
      <section className="py-32 bg-white/30 backdrop-blur-md relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase font-bold">Medical Services</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="block text-lg font-light text-primary/60 mb-2 tracking-widest uppercase">Comprehensive Care</span>
              全方位更年期照護
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-primary/20 shadow-lg bg-white/40">
             {treatments.map((item, idx) => (
               <Link key={idx} href={item.link}>
                 <a className="group block border-r border-b border-primary/20 relative overflow-hidden h-80">
                    {/* Background Image with Zoom Effect - Brighter Overlay */}
                    <div className="absolute inset-0 overflow-hidden">
                       <div 
                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                         style={{ backgroundImage: `url(${item.image})` }}
                       />
                       <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-colors duration-500" />
                    </div>

                    <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                       <div className="space-y-6">
                         <div className="text-primary font-serif text-5xl font-light group-hover:text-foreground transition-colors duration-500">
                           0{idx + 1}
                         </div>
                         <div>
                           <h4 className="text-xl font-bold text-foreground mb-2 tracking-wide group-hover:tracking-widest transition-all duration-500">{item.name}</h4>
                           <p className="text-xs text-muted-foreground font-semibold tracking-widest uppercase group-hover:text-foreground transition-colors">{item.en}</p>
                         </div>
                       </div>
                       
                       <div className="w-8 h-px bg-primary/60 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                    </div>
                    
                    {/* Hover Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                 </a>
               </Link>
             ))}
          </div>
          
          <div className="text-center mt-16">
             <Link href="/treatments">
               <a className="inline-block px-12 py-4 border border-primary/50 text-foreground hover:bg-primary hover:text-white transition-all duration-300 tracking-widest text-sm uppercase font-semibold">
                 查看完整療程說明
               </a>
             </Link>
          </div>
        </div>
      </section>

      {/* 4. Latest News / Column Preview */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex justify-between items-end mb-16 border-b border-primary/30 pb-6">
              <div>
                <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-2 font-bold">Knowledge</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="block text-lg font-light text-primary/60 mb-2 tracking-widest uppercase">Health & Aesthetics</span>
                  美學與健康專欄
                </h2>
              </div>
              <Link href="/articles">
                <a className="hidden md:flex items-center text-sm tracking-widest text-foreground/60 hover:text-foreground transition-colors font-semibold">
                  VIEW ALL <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-[4/3] bg-white/50 mb-6 overflow-hidden relative shadow-md rounded-sm border border-primary/10">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 shadow-sm">
                        NEWS
                      </div>
                   </div>
                   <div className="space-y-3">
                      <div className="text-xs text-primary font-bold tracking-widest">2026.01.{10+i}</div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {i === 1 ? "更年期熱潮紅如何改善？醫師教妳3招緩解不適" : 
                         i === 2 ? "荷爾蒙補充療法安全嗎？破解常見迷思" :
                         "失眠睡不好？從自律神經調節開始"}
                      </h3>
                      <p className="text-sm text-foreground/70 line-clamp-2 font-medium">
                        進入更年期後，許多女性會面臨身體與心理的巨大轉變，透過專業的醫療協助...
                      </p>
                      <div className="pt-4">
                        <span className="text-xs border-b border-primary/50 text-primary pb-0.5 group-hover:border-primary transition-all font-bold">READ MORE</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-20 bg-white/60 backdrop-blur-md relative overflow-hidden border-t border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
           <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4 font-bold">Start Your Journey</h3>
           <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-primary">Ready to start your journey?</h2>
           <p className="text-lg md:text-xl mb-10 text-foreground/80 max-w-2xl mx-auto font-medium">
             給自己一個重新愛上生活的機會，立即預約專屬諮詢。
           </p>
           <Link href="/contact">
             <a className="inline-block bg-primary text-white px-12 py-4 hover:bg-primary/90 transition-all duration-300 tracking-widest shadow-lg font-bold">
               CONTACT US
             </a>
           </Link>
        </div>
      </section>
      
    </div>
  );
}