import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "訊息已送出",
      description: "我們會盡快與您聯繫，謝謝。",
    });
  };

  return (
    <div className="min-h-screen bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-2 font-bold">Contact Us</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-widest mb-6">聯絡我們</h1>
            <div className="w-16 h-1 bg-primary mx-auto opacity-50" />
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto leading-loose">
              如果您有任何疑問或預約需求，歡迎填寫下方表單，<br/>
              或透過電話與我們聯繫，我們將竭誠為您服務。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-10 bg-secondary/10 p-10 rounded-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-wide text-foreground/80 mb-8">診所資訊</h3>
                
                <div className="flex items-start gap-5 group">
                   <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <MapPin size={20} />
                   </div>
                   <div className="space-y-1">
                     <p className="font-bold text-foreground/80">地址</p>
                     <p className="text-muted-foreground tracking-wide">台北市大安區信義路四段 123 號 2 樓</p>
                   </div>
                </div>

                <div className="flex items-start gap-5 group">
                   <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <Phone size={20} />
                   </div>
                   <div className="space-y-1">
                     <p className="font-bold text-foreground/80">聯絡電話</p>
                     <p className="text-muted-foreground tracking-wider">02-2345-6789</p>
                   </div>
                </div>

                <div className="flex items-start gap-5 group">
                   <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <Clock size={20} />
                   </div>
                   <div className="space-y-1">
                     <p className="font-bold text-foreground/80">門診時間</p>
                     <div className="text-muted-foreground tracking-wide space-y-1">
                       <p>週一至週五：10:00 - 20:00</p>
                       <p>週六：10:00 - 17:00</p>
                       <p className="text-sm opacity-80">（週日及國定假日休診）</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 rounded-sm shadow-sm border border-border">
              <h3 className="text-2xl font-bold tracking-wide text-foreground/80 mb-4">預約 / 留言</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-muted-foreground">您的姓名</label>
                <Input required className="h-12 bg-background border-border focus:border-gold/50" placeholder="請輸入姓名" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-muted-foreground">聯絡電話</label>
                  <Input required className="h-12 bg-background border-border focus:border-gold/50" placeholder="09xx-xxx-xxx" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-muted-foreground">Email</label>
                  <Input type="email" className="h-12 bg-background border-border focus:border-gold/50" placeholder="example@mail.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-muted-foreground">留言內容</label>
                <Textarea required className="min-h-[150px] bg-background border-border focus:border-gold/50 resize-none leading-relaxed" placeholder="請簡述您的需求或預約時段..." />
              </div>

              <Button type="submit" className="w-full h-12 text-lg bg-gold hover:bg-gold/90 text-white rounded-sm tracking-widest transition-all">
                送出訊息
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}