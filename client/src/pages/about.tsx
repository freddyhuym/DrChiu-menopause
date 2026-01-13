import { motion } from "framer-motion";
import { Award, GraduationCap, Stethoscope, Sparkles } from "lucide-react";
import aboutImage from '@assets/dr_1765436654368.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">關於 <span className="text-gold">邱文瑾醫師</span></h1>
            <div className="w-16 h-1 bg-gold mx-auto opacity-50" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-5/12 shrink-0"
            >
              <div className="relative rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white p-4">
                <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                   <img 
                      src={aboutImage} 
                      alt="邱文瑾醫師" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
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
                <h2 className="text-2xl font-bold text-foreground/80 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-gold" />
                  醫療理念
                </h2>
                <p className="text-muted-foreground text-lg leading-loose text-justify">
                  「更年期不是一種病，而是身體在說話。」<br/><br/>
                  我深信，醫療不只是冰冷的診斷與藥物，更是人與人之間溫暖的連結。
                  在我的診間裡，我希望能成為妳最安心的傾聽者。透過長時間的陪伴與專業照護，
                  協助妳重新認識這個階段的自己，找回身心的平衡與自在。
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Qualifications */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground/80 flex items-center gap-2 border-b border-gold/30 pb-3">
                    <Award className="w-5 h-5 text-gold" /> 專科資格
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                      中華民國專科醫師證書
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                      內科專科醫師
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                      內分泌新陳代謝專科醫師
                    </li>
                  </ul>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground/80 flex items-center gap-2 border-b border-gold/30 pb-3">
                    <GraduationCap className="w-5 h-5 text-gold" /> 學歷
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                      國立國防大學醫學系 醫學士
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                      新光醫院 內科部住院醫師
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                      新光醫院 內分泌科專科醫師
                    </li>
                  </ul>
                </div>
              </div>

              {/* Expertise */}
              <div className="bg-secondary/20 p-8 rounded-sm border border-gold/10">
                 <h3 className="text-xl font-bold text-foreground/80 flex items-center gap-2 mb-6">
                    <Stethoscope className="w-5 h-5 text-gold" /> 專長領域
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      更年期整合照護
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      女性荷爾蒙調理
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      私密處健康保養
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      代謝症候群治療
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      骨質疏鬆預防
                    </div>
                     <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      身心壓力調適
                    </div>
                  </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}