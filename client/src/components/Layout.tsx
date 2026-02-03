import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from '@assets/1295071_1769148497517.jpg';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "首頁", path: "/" },
    { name: "醫學百科", path: "/encyclopedia" },
    { name: "Meta-News", path: "/news" },
    { name: "Meta-Video", path: "/videos" },
    { name: "關於我們", path: "/about" },
    { name: "聯絡與授權", path: "/contact" },
  ];

  return (
    <div className="min-h-screen font-serif text-foreground selection:bg-primary selection:text-white flex flex-col relative bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img src={logoImage} alt="Metalife Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary tracking-wide leading-none">
                Metalife.pro
              </span>
              <span className="text-xs text-foreground/60 font-medium tracking-widest mt-1">
                元健康
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className={`text-sm font-bold transition-colors duration-300 relative group py-2 tracking-wide ${
                location === link.path ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}>
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <button className="p-2 text-gray-500 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="lg:hidden p-2 text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              className="lg:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path} className={`text-left py-3 px-4 rounded-md transition-all font-medium ${
                    location === link.path 
                      ? "bg-primary/5 text-primary" 
                      : "hover:bg-gray-50 text-gray-700"
                  }`}>
                    {link.name}
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
      <footer className="bg-gray-50 text-gray-600 py-16 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                  <img src={logoImage} alt="Metalife Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold text-primary">Metalife.pro</span>
              </div>
              <p className="text-sm leading-loose max-w-sm">
                數據守護健康，科學引領生活。<br/>
                我們致力於提供最權威的代謝醫學知識，協助您掌握健康自主權。
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 tracking-wide">快速連結</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/encyclopedia" className="hover:text-primary transition-colors">醫學百科</Link></li>
                <li><Link href="/news" className="hover:text-primary transition-colors">最新消息</Link></li>
                <li><Link href="/videos" className="hover:text-primary transition-colors">影音專區</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">關於我們</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 tracking-wide">聯絡我們</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Facebook size={16} /> Meta-Life</li>
                <li className="flex items-center gap-2"><Instagram size={16} /> @metalife_pro</li>
                <li className="flex items-center gap-2"><Linkedin size={16} /> Metalife Pro</li>
                <li className="mt-4 pt-4 border-t border-gray-200 text-xs">
                  Email: contact@metalife.pro
                </li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div>© 2026 Metalife.pro 元健康. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">隱私權政策</a>
              <a href="#" className="hover:text-primary">使用條款</a>
              <a href="#" className="hover:text-primary">免責聲明</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
