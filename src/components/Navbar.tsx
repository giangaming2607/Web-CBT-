import { useState } from "react";
import { Lock, Download, Menu, X } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  downloadUrl: string;
}

export default function Navbar({ currentPath, onNavigate, downloadUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Fitur", href: "#fitur" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Panduan", href: "#panduan" },
    { label: "Tentang", href: "#tentang" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (currentPath !== "/") {
      onNavigate("/");
      // Let the path transition finish first before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            onClick={() => onNavigate("/")} 
            className="flex items-center space-x-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Lock className="w-5 h-5 fill-white/10" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
              CBT <span className="text-blue-500 font-bold group-hover:text-white transition-colors">Exam Browser</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="font-sans font-medium text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-[15px]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:block">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download APK</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-[#020617] shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left px-4 py-3 rounded-xl font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[15px] shadow-lg shadow-blue-500/20 active:scale-98 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
