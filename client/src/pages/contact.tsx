import { Mail, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">聯絡與授權</h1>
          <p className="text-xl text-muted-foreground">Media Contact & Licensing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Media Contact */}
          <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">媒體接洽</h2>
                <p className="text-sm text-muted-foreground">採訪邀約、新聞稿發布</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              若您有採訪需求，或希望邀請我們的醫學顧問團隊進行專業對談，請填寫右側表單，或直接來信。我們將由專屬公關團隊與您聯繫。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm font-medium">
              Email: <a href="mailto:press@metalife.pro" className="text-primary hover:underline">press@metalife.pro</a>
            </div>
          </div>

          {/* Licensing */}
          <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">內容授權</h2>
                <p className="text-sm text-muted-foreground">轉載申請、合作提案</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Metalife.pro 的所有內容皆受著作權法保護。若您希望轉載、引用或進行內容合作，請務必事先取得書面授權。我們歡迎學術引用與公益推廣。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm font-medium">
              Email: <a href="mailto:licensing@metalife.pro" className="text-primary hover:underline">licensing@metalife.pro</a>
            </div>
          </div>

        </div>

        {/* Simple Contact Form */}
        <div className="max-w-2xl mx-auto mt-20 bg-white p-8 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-6 text-center">傳送訊息給我們</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold">姓名</label>
                <Input placeholder="您的姓名" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">單位 / 公司</label>
                <Input placeholder="所屬單位" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Email</label>
              <Input type="email" placeholder="contact@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">主旨</label>
              <Input placeholder="請選擇聯絡事由（採訪、授權、其他）" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">訊息內容</label>
              <Textarea placeholder="請簡述您的需求..." className="h-32" />
            </div>
            <Button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-6">送出訊息</Button>
          </form>
        </div>

      </div>
    </div>
  );
}
