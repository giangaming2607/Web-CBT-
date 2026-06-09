import { Lock, Facebook, Instagram, Youtube, Settings } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
  contactUrl: string;
}

export default function Footer({ onNavigate, contactUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (hash: string) => {
    onNavigate("/");
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#020617] text-white pt-16 pb-12 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand description */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div 
              onClick={() => handleLinkClick("#beranda")}
              className="flex items-center space-x-3 cursor-pointer select-none group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                <Lock className="w-4.5 h-4.5 fill-white/10" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">
                CBT <span className="text-blue-500">Exam Browser</span>
              </span>
            </div>
            
            <p className="text-slate-400 font-sans font-medium text-[13.5px] leading-relaxed max-w-sm">
              Aplikasi ujian online untuk mendukung kegiatan belajar mengajar yang lebih modern, efisien, dan aman dari segala bentuk kecurangan belajar mengajar di sekolah.
            </p>
          </div>

          {/* Column 2: Tautan Section */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Tautan
            </h4>
            <ul className="space-y-2.5 font-sans font-medium text-[13.5px] text-slate-400">
              <li>
                <button onClick={() => handleLinkClick("#beranda")} className="hover:text-blue-400 cursor-pointer transition-colors pt-0.5">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("#fitur")} className="hover:text-blue-400 cursor-pointer transition-colors pt-0.5">
                  Fitur
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("#keunggulan")} className="hover:text-blue-400 cursor-pointer transition-colors pt-0.5">
                  Keunggulan
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("#panduan")} className="hover:text-blue-400 cursor-pointer transition-colors pt-0.5">
                  Panduan
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("#tentang")} className="hover:text-blue-400 cursor-pointer transition-colors pt-0.5">
                  Tentang
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Bantuan Section */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Bantuan
            </h4>
            <ul className="space-y-2.5 font-sans font-medium text-[13.5px] text-slate-400">
              <li>
                <button onClick={() => handleLinkClick("#panduan")} className="hover:text-blue-400 cursor-pointer transition-colors pt-0.5">
                  Panduan Instalasi
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("#tentang")} className="hover:text-blue-400 cursor-pointer transition-colors pt-0.5">
                  FAQ
                </button>
              </li>
              <li>
                <a href={contactUrl} className="hover:text-blue-400 transition-colors pt-0.5 block">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons / Ikuti Kami */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Ikuti Kami
            </h4>
            <div className="flex space-x-3.5 mb-5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-slate-800 transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/30 hover:bg-slate-800 transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/30 hover:bg-slate-800 transition-all cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Subtle Portal Admin config link */}
            <button
              onClick={() => onNavigate("/admin")}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors cursor-pointer border border-dashed border-slate-800 hover:border-blue-500/30 px-2.5 py-1.5 rounded-lg bg-slate-900/40"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Portal Admin</span>
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-sans text-xs text-slate-500">
          <span>&copy; {currentYear} CBT Exam Browser. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">Dibuat dengan Integritas dan Keamanan</span>
        </div>

      </div>
    </footer>
  );
}
