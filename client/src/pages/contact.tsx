import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Clock, Mail, MessageCircle, Calendar, Stethoscope, UserCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "訊息已送出",
      description: "我們會盡快與您聯繫，謝謝。",
    });
  };

  const steps = [
    {
      step: "STEP 1",
      title: "點擊加入",
      subtitle: "官方LINE帳號",
      icon: <MessageCircle className="w-12 h-12 text-primary" />,
      desc: "Join our official LINE"
    },
    {
      step: "STEP 2",
      title: "線上初步諮詢",
      subtitle: "預約療程時間",
      icon: <Calendar className="w-12 h-12 text-primary" />,
      desc: "Online consultation & Booking"
    },
    {
      step: "STEP 3",
      title: "治療前醫師",
      subtitle: "專業評估、規劃",
      icon: <Stethoscope className="w-12 h-12 text-primary" />,
      desc: "Professional Assessment"
    },
    {
      step: "STEP 4",
      title: "邱文瑾醫師",
      subtitle: "親自操作療程",
      icon: <UserCheck className="w-12 h-12 text-primary" />,
      desc: "Treatment by Dr. Chiu"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header - Simple Text */}
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Contact</h1>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground tracking-widest">
            邱文瑾醫師<br/>
            <span className="text-xl md:text-2xl mt-4 block text-foreground/60 font-sans font-light">女性更年期特別門診</span>
          </h2>
        </div>

        {/* Online Consultation Room Section */}
        <div className="max-w-4xl mx-auto mb-32">
           <div className="text-center mb-16 space-y-2">
             <h3 className="text-2xl md:text-3xl font-bold text-foreground">線上專屬諮詢室</h3>
             <p className="text-primary font-serif italic text-lg">Online exclusive consultation room</p>
           </div>

           <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-16 left-0 w-full h-px bg-primary/20 -z-10" />

              {steps.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background flex flex-col items-center text-center space-y-4 group"
                >
                   <div className="w-32 h-32 rounded-full border border-primary/20 bg-white flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-primary/50 transition-all duration-300">
                      {item.icon}
                   </div>
                   <div className="space-y-1">
                      <p className="text-primary font-bold text-sm tracking-widest">{item.step}</p>
                      <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                      <p className="text-foreground/80 font-medium">{item.subtitle}</p>
                   </div>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-12 text-center">
              <Button className="bg-[#00c300] hover:bg-[#00c300]/90 text-white px-8 py-6 rounded-full text-lg font-bold tracking-widest shadow-lg transition-transform hover:scale-105">
                 <MessageCircle className="w-6 h-6 mr-2" /> 
                 立即加入 LINE 好友諮詢
              </Button>
           </div>
        </div>

        <div className="w-full h-px bg-primary/10 max-w-4xl mx-auto mb-32" />

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-16 space-y-2">
             <h3 className="text-3xl md:text-4xl font-bold text-foreground">聯絡我們</h3>
             <p className="text-primary font-serif italic text-lg">Contact us</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
             {/* Name */}
             <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 tracking-widest">姓名 NAME</label>
                  <Input required className="bg-white border-primary/20 h-12" placeholder="請輸入您的姓名" />
                </div>
                {/* Removed Title as requested */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 tracking-widest">出生日期 BIRTH DATE</label>
                  <Input type="date" className="bg-white border-primary/20 h-12" />
                </div>
             </div>

             {/* Phone */}
             <div className="space-y-2">
               <label className="text-sm font-bold text-foreground/80 tracking-widest">聯繫電話 PHONE</label>
               <Input required className="bg-white border-primary/20 h-12" placeholder="09xx-xxx-xxx" />
             </div>

             {/* Preferred Time */}
             <div className="space-y-4">
                <label className="text-sm font-bold text-foreground/80 tracking-widest">方便聯繫時段 PREFERRED TIME</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {["10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00", "週六時段"].map((time, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Checkbox id={`time-${idx}`} className="border-primary/50 text-primary" />
                        <label
                          htmlFor={`time-${idx}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground/80"
                        >
                          {time}
                        </label>
                      </div>
                   ))}
                </div>
             </div>

             {/* Service Category */}
             <div className="space-y-4">
                <label className="text-sm font-bold text-foreground/80 tracking-widest">諮詢項目 SERVICE</label>
                <RadioGroup defaultValue="hormone" className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {[
                     { id: "hormone", label: "荷爾蒙平衡" },
                     { id: "natural", label: "非藥物調理" },
                     { id: "autonomic", label: "自律神經調節" },
                     { id: "bone", label: "骨骼健康" },
                     { id: "cardio", label: "心血管代謝" },
                     { id: "other", label: "其他/一般諮詢" }
                   ].map((item) => (
                     <div key={item.id} className="flex items-center space-x-2">
                       <RadioGroupItem value={item.id} id={item.id} className="border-primary text-primary" />
                       <Label htmlFor={item.id} className="text-foreground/80">{item.label}</Label>
                     </div>
                   ))}
                </RadioGroup>
             </div>

             {/* Message */}
             <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80 tracking-widest">留言 MESSAGE</label>
                <Textarea className="bg-white border-primary/20 min-h-[150px] resize-none" placeholder="請簡述您的狀況或需求..." />
             </div>

             <Button type="submit" className="w-full bg-primary text-white h-14 text-lg font-bold tracking-widest hover:bg-primary/90 transition-all shadow-md mt-8">
               立即送出 SEND MESSAGE
             </Button>
          </form>
        </div>

        <div className="w-full h-px bg-primary/10 max-w-4xl mx-auto mb-20" />

        {/* Footer Info */}
        <div className="max-w-5xl mx-auto space-y-16">
           
           {/* Map Section - Stacked Cards */}
           <div className="space-y-12">
              {/* Hsinchu Map Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border/50">
                 <div className="mb-6 text-left">
                    <h4 className="font-bold text-2xl text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="text-primary w-6 h-6" /> 新竹館
                    </h4>
                    <p className="text-muted-foreground pl-8">新竹市東區關新東路272號</p>
                 </div>
                 <div className="w-full h-[400px] rounded-md overflow-hidden bg-gray-100 relative">
                    <iframe 
                       width="100%" 
                       height="100%" 
                       style={{ border: 0 }}
                       loading="lazy"
                       allowFullScreen
                       src="https://maps.google.com/maps?q=新竹市東區關新東路272號&hl=zh-TW&t=&z=15&ie=UTF8&iwloc=&output=embed"
                       title="Hsinchu Clinic Map"
                    ></iframe>
                 </div>
              </div>

              {/* Zhubei Map Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border/50">
                 <div className="mb-6 text-left">
                    <h4 className="font-bold text-2xl text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="text-primary w-6 h-6" /> 竹北館
                    </h4>
                    <p className="text-muted-foreground pl-8">新竹縣竹北市文興路一段273號</p>
                 </div>
                 <div className="w-full h-[400px] rounded-md overflow-hidden bg-gray-100 relative">
                    <iframe 
                       width="100%" 
                       height="100%" 
                       style={{ border: 0 }}
                       loading="lazy"
                       allowFullScreen
                       src="https://maps.google.com/maps?q=新竹縣竹北市文興路一段273號&hl=zh-TW&t=&z=15&ie=UTF8&iwloc=&output=embed"
                       title="Zhubei Clinic Map"
                    ></iframe>
                 </div>
              </div>
           </div>

             <div className="bg-secondary/10 p-8 rounded-lg inline-block text-left mx-auto max-w-4xl w-full">
                <h5 className="font-bold text-primary mb-6 flex items-center justify-center text-xl tracking-widest">
                   <Clock className="w-6 h-6 mr-2" /> 門診時間
                </h5>
                <div className="grid md:grid-cols-2 gap-12 text-sm text-foreground/80 tracking-wide leading-loose">
                   <div>
                      <span className="font-bold block text-foreground mb-4 text-lg border-b border-primary/20 pb-2">新竹館</span>
                      <ul className="space-y-2">
                        <li className="flex justify-between"><span>週一</span> <span>10:00 - 19:00</span></li>
                        <li className="flex justify-between"><span>週二</span> <span>10:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>週三</span> <span>12:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>週四</span> <span>12:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>週五</span> <span>12:00 - 21:00</span></li>
                        <li className="flex justify-between text-primary font-bold"><span>週六</span> <span>10:00 - 18:00</span></li>
                      </ul>
                   </div>
                   <div>
                      <span className="font-bold block text-foreground mb-4 text-lg border-b border-primary/20 pb-2">竹北館</span>
                      <ul className="space-y-2">
                        <li className="flex justify-between"><span>週一</span> <span>10:00 - 19:00</span></li>
                        <li className="flex justify-between"><span>週二</span> <span>12:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>週三</span> <span>12:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>週四</span> <span>12:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>週五</span> <span>10:00 - 19:00</span></li>
                        <li className="flex justify-between text-primary font-bold"><span>週六</span> <span>10:00 - 18:00</span></li>
                      </ul>
                   </div>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
}