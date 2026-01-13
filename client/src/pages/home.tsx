import { motion } from "framer-motion";
import { ArrowRight, Sparkles, User, FileText, Stethoscope, Video, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const sections = [
    {
      id: "about",
      title: "醫師介紹",
      desc: "專業醫學 × 溫柔照護，深入了解邱文瑾醫師的醫療理念。",
      icon: <User className="w-6 h-6" />,
      link: "/about"
    },
    {
      id: "treatments",
      title: "療程介紹",
      desc: "量身打造的更年期全方位照護，從荷爾蒙到身心平衡。",
      icon: <Stethoscope className="w-6 h-6" />,
      link: "/treatments"
    },
    {
      id: "articles",
      title: "更年期文章",
      desc: "專業知識分享，讓您更了解身體的變化與保養之道。",
      icon: <FileText className="w-6 h-6" />,
      link: "/articles"
    },
    {
      id: "videos",
      title: "影片專區",
      desc: "醫師親自解說，深入淺出的影音衛教內容。",
      icon: <Video className="w-6 h-6" />,
      link: "/videos"
    },
    {
      id: "contact",
      title: "聯絡我們",
      desc: "預約諮詢或留言，我們將竭誠為您服務。",
      icon: <Mail className="w-6 h-6" />,
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full filter blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full filter blur-[80px] opacity-50 -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20">
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
            
             <div className="pt-8 flex justify-center">
               <Link href="/treatments">
                  <a className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-full hover:bg-gold/90 transition-colors tracking-wide text-lg shadow-lg shadow-gold/20">
                    了解更多療程 <ArrowRight className="w-5 h-5" />
                  </a>
               </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Brief */}
      <section className="py-24 bg-white">
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
      
      {/* Sections Navigation */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sections.map((section, idx) => (
                <Link key={section.id} href={section.link}>
                  <a className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gold/30 block h-full">
                    <div className="flex flex-col h-full gap-4">
                      <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">{section.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {section.desc}
                      </p>
                      <div className="flex items-center text-gold text-sm font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        前往頁面 <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}