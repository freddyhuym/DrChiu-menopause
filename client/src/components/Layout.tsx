import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="min-h-screen bg-background font-serif text-foreground selection:bg-secondary selection:text-secondary-foreground flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/40 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <span className="text-xl md:text-2xl font-bold text-gold tracking-widest group-hover:opacity-80 transition-opacity">
                邱文瑾醫師
              </span>
              <span className="hidden md:inline-block text-sm text-muted-foreground border-l border-border pl-3 tracking-wider">
                女性更年期特別門診
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a className={`text-sm font-medium transition-colors relative group py-2 tracking-wide ${
                  location === link.path ? "text-gold" : "text-foreground hover:text-gold"
                }`}>
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    location === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2 text-foreground hover:bg-secondary/30 rounded-full transition-colors"
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
              className="md:hidden bg-white border-b border-border shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <a className={`text-left py-3 px-4 rounded-md transition-all tracking-wider ${
                      location === link.path 
                        ? "bg-secondary/30 text-gold font-medium" 
                        : "hover:bg-secondary/20 text-foreground"
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
      <footer className="bg-secondary/30 text-foreground py-16 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-widest text-gold">邱文瑾醫師</h3>
              <p className="text-muted-foreground leading-loose tracking-wide">
                以溫柔與專業，陪伴每一位女性<br/>
                優雅地度過生命中的轉變
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold tracking-widest text-lg">快速連結</h4>
              <div className="flex flex-col gap-3">
                {navLinks.map(link => (
                  <Link key={link.path} href={link.path}>
                    <a className="text-muted-foreground hover:text-gold transition-colors tracking-wide w-fit">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold tracking-widest text-lg">聯絡資訊</h4>
              <div className="space-y-3 text-muted-foreground tracking-wide">
                <p>台北市大安區信義路四段 123 號 2 樓</p>
                <p>02-2345-6789</p>
                <p className="text-sm">
                  週一至週五：10:00 - 20:00<br/>
                  週六：10:00 - 17:00
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center text-muted-foreground/60 text-sm tracking-widest">
            © 2026 邱文瑾醫師 女性更年期特別門診. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}