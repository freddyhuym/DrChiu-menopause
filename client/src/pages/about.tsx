import { motion } from "framer-motion";
import { Users, FileCheck, Mail } from "lucide-react";
import deanImage from '@assets/dr_1765436654368.jpg'; // Keep Dr. Chiu's image but recontextualize

export default function About() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">關於 Metalife.pro</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Metalife.pro 是一個致力於將艱澀醫學數據轉化為可執行生活指南的專業平台。我們相信，透過科學的力量，每一位使用者都能掌握自己的健康主導權。
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
                <img src={deanImage} alt="邱文瑾醫師" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary/90 to-transparent p-6 pt-20">
                  <h3 className="text-white text-xl font-bold">邱文瑾 醫師</h3>
                  <p className="text-white/80 text-sm">首席醫學顧問 / 創辦人</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                  <Users className="w-6 h-6" /> 醫學顧問團隊
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  我們的內容由跨領域專家組成的顧問團嚴格把關，成員包含新陳代謝科醫師、心臟內科醫師、營養師、運動生理學家及心理諮商師。確保每一篇發布的資訊都符合最新的實證醫學標準。
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-foreground mb-2">嚴謹審核機制</h3>
                  <p className="text-sm text-muted-foreground">所有文章皆經過「初稿撰寫 → 專家審閱 → 數據核實」的三階段審核流程。</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-foreground mb-2">利益衝突揭露</h3>
                  <p className="text-sm text-muted-foreground">我們堅持內容的中立性，所有商業合作或贊助內容皆會明確標示，不影響專業判斷。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
