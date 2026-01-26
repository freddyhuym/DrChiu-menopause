import { motion } from "framer-motion";
import { ArrowRight, Play, Activity, Newspaper, TrendingUp, Globe, AlertCircle, Heart, Scale, Coffee } from "lucide-react";
import { Link } from "wouter";
import logoImage from '@assets/1295070_1769148497518.jpg'; // Using the other logo variant for hero if needed

export default function Home() {
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
              <div className="inline-block px-4 py-1 bg-blue-100 text-primary text-xs font-bold rounded-full tracking-wider mb-2">
                Science for Better Life
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

      {/* 2. Core Knowledge Hub (Quick Access) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">代謝內科百科</h2>
            <p className="text-muted-foreground">Knowledge Hub</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: "代謝內分泌", icon: <Activity />, bg: "bg-blue-50", text: "text-blue-600" },
              { title: "糖友專區", icon: <Scale />, bg: "bg-green-50", text: "text-green-600" },
              { title: "心血管守護", icon: <Heart />, bg: "bg-red-50", text: "text-red-600" },
              { title: "三高與肥胖", icon: <TrendingUp />, bg: "bg-yellow-50", text: "text-yellow-600" },
              { title: "生活處方箋", icon: <Coffee />, bg: "bg-purple-50", text: "text-purple-600" },
            ].map((item, idx) => (
              <Link key={idx} href="/encyclopedia" className="flex flex-col items-center p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100 group bg-white hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-full ${item.bg} ${item.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="font-bold text-gray-800">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Latest Videos (Meta-Stream) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold mb-2">Meta-Stream 影音</h2>
               <p className="text-muted-foreground">專業醫師對談與衛教動畫</p>
             </div>
             <Link href="/videos" className="text-primary font-bold flex items-center hover:underline">
                 觀看更多 <ArrowRight className="w-4 h-4 ml-1" />
             </Link>
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
            <h2 className="text-3xl font-bold mb-4">Meta-Pulse 醫學動態</h2>
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
