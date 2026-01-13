import { motion } from "framer-motion";
import { Award, GraduationCap, Stethoscope, Sparkles } from "lucide-react";
import aboutImage from '@assets/dr_1765436654368.jpg';

// Import certificate images
import cert1 from '@assets/1290979_1768278867634.jpg';
import cert2 from '@assets/1767695375391_1768278867636.jpg';
import cert3 from '@assets/E998585E-DB5C-4EE8-B3DA-CAE4BDDFA362_1768278867636.jpg';
import cert4 from '@assets/1213211_1761560386703_1768278897404.jpg';
import cert5 from '@assets/1219258_1761560382345_1768278897405.jpg';

export default function About() {
  const certificates = [
    { src: cert1, alt: "台灣微整形美容醫學會 研習證書" },
    { src: cert2, alt: "AASD 2025 Certificate" },
    { src: cert3, alt: "LMSTW Spring Symposium" },
    { src: cert4, alt: "LMSTW Annual Meeting" },
    { src: cert5, alt: "白袍人生學院 感謝狀" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h3 className="text-gold tracking-[0.2em] text-sm uppercase font-bold">Dean's Profile</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">關於 <span className="text-gold">邱文瑾 院長</span></h1>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start mb-24">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-5/12 shrink-0"
            >
              <div className="relative rounded-lg overflow-hidden glass-card p-3 shadow-xl">
                <div className="aspect-[3/4] overflow-hidden bg-white/20 relative rounded">
                   <img 
                      src={aboutImage} 
                      alt="邱文瑾院長" 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-105"
                    />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-7/12 space-y-12"
            >
              {/* Philosophy */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-gold" />
                  醫療理念
                </h2>
                <div className="p-6 border-l-2 border-gold bg-white/40 rounded-r-lg backdrop-blur-sm shadow-sm">
                  <p className="text-foreground/80 text-lg leading-loose text-justify font-medium">
                    「更年期不是一種病，而是身體在說話。」<br/><br/>
                    我深信，醫療不只是冰冷的診斷與藥物，更是人與人之間溫暖的連結。
                    在我的診間裡，我希望能成為妳最安心的傾聽者。透過長時間的陪伴與專業照護，
                    協助妳重新認識這個階段的自己，找回身心的平衡與自在。
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Qualifications */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gold flex items-center gap-2 border-b border-gold/30 pb-3">
                    <Award className="w-5 h-5" /> 專科資格
                  </h3>
                  <ul className="space-y-3 text-foreground/80 font-medium">
                    <li className="flex gap-3 items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                      中華民國專科醫師證書
                    </li>
                    <li className="flex gap-3 items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                      內科專科醫師
                    </li>
                    <li className="flex gap-3 items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                      內分泌新陳代謝專科醫師
                    </li>
                  </ul>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gold flex items-center gap-2 border-b border-gold/30 pb-3">
                    <GraduationCap className="w-5 h-5" /> 學歷
                  </h3>
                  <ul className="space-y-3 text-foreground/80 font-medium">
                    <li className="flex gap-3 items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                      國立國防大學醫學系 醫學士
                    </li>
                    <li className="flex gap-3 items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                      新光醫院 內科部住院醫師
                    </li>
                    <li className="flex gap-3 items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                      新光醫院 內分泌科專科醫師
                    </li>
                  </ul>
                </div>
              </div>

              {/* Expertise */}
              <div className="glass-card p-8 rounded-lg shadow-lg bg-white/30 border border-white/50">
                 <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
                    <Stethoscope className="w-5 h-5 text-gold" /> 專長領域
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-foreground/80 font-medium">
                    {[
                      "更年期整合照護", "女性荷爾蒙調理", "私密處健康保養",
                      "代謝症候群治療", "骨質疏鬆預防", "身心壓力調適"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <span className="w-2 h-px bg-gold group-hover:w-4 transition-all" />
                        <span className="group-hover:text-gold transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
              </div>
            </motion.div>
          </div>
          
          {/* Certificates Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12 border-t border-gold/20 pt-20"
          >
             <div className="text-center space-y-4">
                <h3 className="text-gold tracking-[0.2em] text-sm uppercase font-bold">Professional Certification</h3>
                <h2 className="text-3xl font-bold text-foreground">專業認證</h2>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg bg-white/40 border border-white/60 shadow-md p-2 hover:border-gold/50 transition-all duration-500">
                    <div className="aspect-[4/3] overflow-hidden rounded bg-white/50 relative">
                       <img 
                         src={cert.src} 
                         alt={cert.alt} 
                         className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <div className="mt-3 text-center">
                       <p className="text-xs text-foreground/70 group-hover:text-gold transition-colors font-semibold">{cert.alt}</p>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}