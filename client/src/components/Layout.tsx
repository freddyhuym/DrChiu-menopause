import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import floralBg from '@assets/generated_images/elegant_roses_lavender_hydrangea_background.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "首頁", path: "/" },
    { name: "醫師介紹", path: "/about" },
    { name: "更年期文章", path: "/articles" },
    { name: "療程介紹", path: "/treatments" },
    { name: "影片專區", path: "/videos" },
    { name: "聯絡我們", path: "/contact" },
  ];

  return (
    <div className="min-h-screen font-serif text-foreground selection:bg-primary selection:text-white flex flex-col relative">
      {/* Background Image Fixed */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${floralBg})` }}
      />
      {/* Background Overlay for better readability */}
      <div className="fixed inset-0 z-[-1] bg-white/70 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
          <Link href="/">
            <a className="flex flex-col group">
              <span className="text-2xl md:text-3xl font-extrabold text-primary tracking-widest transition-colors duration-500">
                邱文瑾醫師
              </span>
              <span className="text-xs md:text-sm text-foreground/70 font-semibold tracking-[0.2em] transition-colors duration-500">
                DR. CHIU MENOPAUSE CLINIC
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a className={`text-sm font-bold transition-all duration-300 relative group py-2 tracking-widest hover:text-primary ${
                  location === link.path ? "text-primary" : "text-foreground/80"
                }`}>
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500 ${
                    location === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-primary/20 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <a className={`text-left py-3 px-4 rounded-md transition-all tracking-wider ${
                      location === link.path 
                        ? "bg-primary/10 text-primary font-bold" 
                        : "hover:bg-primary/5 text-foreground"
                    }`}>
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/90 text-foreground py-16 border-t border-primary/20 mt-auto relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Opening Hours */}
            <div className="space-y-6">
              <h4 className="font-bold tracking-widest text-lg text-primary">營業時間</h4>
              <div className="space-y-4 text-sm tracking-wide text-foreground/80">
                <div>
                  <p className="font-bold mb-1 text-primary">新竹館</p>
                  <p>週一：10:00-19:00</p>
                  <p>週二：10:00-21:00</p>
                  <p>週三：12:00-21:00</p>
                  <p>週四：12:00-21:00</p>
                  <p>週五：12:00-21:00</p>
                  <p>週六：10:00-18:00</p>
                </div>
                <div>
                  <p className="font-bold mb-1 text-primary">竹北館</p>
                  <p>週一：10:00-19:00</p>
                  <p>週二：12:00-21:00</p>
                  <p>週三：12:00-21:00</p>
                  <p>週四：12:00-21:00</p>
                  <p>週五：10:00-19:00</p>
                  <p>週六：10:00-18:00</p>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-bold tracking-widest text-lg text-primary">聯絡資訊</h4>
              <div className="space-y-4 text-sm tracking-wide text-foreground/80">
                <div className="flex gap-2">
                  <span className="text-primary mt-0.5">📍</span>
                  <div>
                    <p>新竹館：新竹市東區關新東路272號</p>
                    <p>竹北館：新竹縣竹北市文興路一段273號</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-primary mt-0.5">📞</span>
                  <div>
                    <p>新竹館：03-666-2961</p>
                    <p>竹北館：03-668-8858</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-primary">✉️</span>
                  <p>carebeautyclinic2016@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Follow Us */}
            <div className="space-y-6">
              <h4 className="font-bold tracking-widest text-lg text-primary">關注我們</h4>
              <p className="text-xs text-foreground/60 mb-4">追蹤最新訊息</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

          </div>
          
          <div className="pt-8 border-t border-primary/10 text-center text-foreground/60 text-sm tracking-widest font-medium">
            © 2026 邱文瑾醫師 女性更年期特別門診. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}