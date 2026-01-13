import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full filter blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full filter blur-[80px] opacity-50 -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 md:space-y-12"
          >
            <h1 className="flex flex-col gap-4 md:gap-6 font-serif tracking-widest text-foreground">
              <span className="text-2xl md:text-3xl font-light text-muted-foreground">陪伴女性安心走過更年期</span>
              <span className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
                專業醫學 <span className="text-gold px-2">×</span> 溫柔照護
              </span>
            </h1>
            
            <div className="max-w-xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light tracking-wide">
                更年期是女性重要的人生階段<br/>
                需要被理解與專業照護
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/about" className="group flex items-center gap-3 text-foreground hover:text-gold transition-colors text-lg tracking-widest border-b border-transparent hover:border-gold pb-1">
                認識醫師 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="hidden sm:inline-block text-gold/30">|</span>
              <a href="/treatments" className="group flex items-center gap-3 text-foreground hover:text-gold transition-colors text-lg tracking-widest border-b border-transparent hover:border-gold pb-1">
                療程介紹 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="hidden sm:inline-block text-gold/30">|</span>
              <a href="/contact" className="group flex items-center gap-3 text-foreground hover:text-gold transition-colors text-lg tracking-widest border-b border-transparent hover:border-gold pb-1">
                聯絡我們 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Brief */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Sparkles className="w-8 h-8 text-gold mx-auto opacity-60" />
            <p className="text-xl md:text-2xl leading-loose text-muted-foreground font-light text-justify md:text-center">
              我們相信，每一位女性都值得擁有優雅、自在的更年期生活。<br className="hidden md:block"/>
              透過全方位的專業評估與個人化調理，<br className="hidden md:block"/>
              讓身心重回平衡，綻放自信光采。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}