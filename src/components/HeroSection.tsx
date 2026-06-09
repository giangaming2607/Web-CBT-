import { Shield, Zap, Smartphone, BookOpen, Download, Lock, Edit2, QrCode, Settings, FileText, Info, Star, Share2 } from "lucide-react";

interface HeroSectionProps {
  downloadUrl: string;
}

export default function HeroSection({ downloadUrl }: HeroSectionProps) {
  // Smooth scroll trigger block
  const handleScrollToGuide = () => {
    const element = document.querySelector("#panduan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="beranda" 
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#020617]"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[110px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copywriting info */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            {/* Tag Badge */}
            <div className="inline-flex">
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-0.5"></span>
                <span className="font-sans font-bold text-xs text-blue-400 tracking-wide uppercase">
                  Aplikasi Ujian Online • Aman 100%
                </span>
              </div>
            </div>

            {/* Typography Heading */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[70px] leading-[1.1] tracking-tight text-white">
                CBT Exam <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  Browser
                </span>
              </h1>
              <p className="max-w-xl text-slate-400 font-sans font-normal text-md sm:text-lg leading-relaxed pt-2">
                Aplikasi ujian online ringan, cepat, dan aman untuk mendukung kegiatan belajar mengajar di sekolah Anda secara efisien, bebas dari kecurangan.
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Shield className="w-3 h-3 text-blue-400" />
                </div>
                <span className="font-sans font-bold text-slate-300 text-[15px]">Aman & Anti-Kecurangan</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Zap className="w-3 h-3 text-blue-400" />
                </div>
                <span className="font-sans font-bold text-slate-300 text-[15px]">Super Ringan & Cepat</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Smartphone className="w-3 h-3 text-blue-400" />
                </div>
                <span className="font-sans font-bold text-slate-300 text-[15px]">Kompatibel Semua HP</span>
              </div>
            </div>

            {/* Downloader CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 active:scale-98 shadow-xl shadow-blue-600/30 transition-all duration-300 pointer-events-auto"
                id="hero-download-btn"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Download className="w-4.5 h-4.5 text-white animate-bounce" />
                </div>
                <div className="text-left">
                  <div className="font-sans font-extrabold text-md leading-tight">Download APK</div>
                  <div className="font-sans font-semibold text-xs text-blue-200">Versi 1.0.0 • Android 5.0+</div>
                </div>
              </a>

              <button
                onClick={handleScrollToGuide}
                className="flex items-center space-x-3 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white active:scale-98 shadow-lg transition-all duration-200 cursor-pointer text-left"
                id="hero-guide-btn"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="font-sans font-semibold text-xs text-slate-500">LIHAT PETUNJUK</div>
                  <div className="font-sans font-bold text-md text-white mt-0.5">Panduan Instalasi</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Premium Interactive Smartphone Render */}
          <div className="relative lg:col-span-5 flex justify-center py-6">
            
            {/* Dot Decoration Grid underneath phone */}
            <div className="absolute top-1/4 right-[-20px] -z-10 text-slate-800/60 hidden sm:block">
              <svg width="100" height="120" fill="currentColor">
                <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100" height="120" fill="url(#dot-pattern)" />
              </svg>
            </div>
            
            <div className="absolute bottom-10 left-[-40px] -z-10 text-slate-800/60 hidden sm:block">
              <svg width="80" height="100" fill="currentColor">
                <pattern id="dot-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="80" height="100" fill="url(#dot-pattern-2)" />
              </svg>
            </div>

            {/* Smart Phone body wrapper */}
            <div className="relative w-[305px] h-[610px] rounded-[42px] bg-slate-950 p-3.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700 after:absolute after:inset-0 after:rounded-[28px] after:pointer-events-none transition-transform hover:scale-[1.02] duration-500">
              {/* Phone Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-40 flex items-center justify-center border-b border-slate-900">
                <div className="w-12 h-1 bg-slate-800 rounded-full mb-1" />
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-full absolute right-8 top-1.5" />
              </div>

              {/* Liquid Phone Display Screen */}
              <div className="relative w-full h-full rounded-[28.5px] bg-[#020617] overflow-hidden flex flex-col justify-between border border-slate-800">
                
                {/* Simulated Android Status Bar */}
                <div className="bg-[#1b62db] px-5 pt-7 pb-1.5 flex justify-between items-center text-white/90 text-[11px] font-medium tracking-tight">
                  <span>4:16</span>
                  <div className="flex items-center space-x-1.5">
                    {/* Signal icon */}
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-1.2 0-2.4.2-3.6.7L18.7 14c.5-1.2.7-2.4.7-3.6C19.4 6 16 3 12 3zm-9 9c0 4 3 7 7 7c1.2 0 2.4-.2 3.6-.7L3.3 8.7c-.5 1.2-.7 2.4-.7 3.6z" />
                    </svg>
                    {/* Wi-Fi icon */}
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21a2 2 0 110-4 2 2 0 010 4zm0-6a5 5 0 00-5-5h10a5 5 0 00-5 5zm0-6a8 8 0 00-8-8h16a8 8 0 00-8 8z" />
                    </svg>
                    {/* Battery icon */}
                    <div className="w-5 h-2.5 border border-white/60 rounded-sm p-[1px] flex items-center">
                      <div className="h-full w-4 bg-white rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Smartphone Main Title Section inside Screen */}
                <div className="bg-gradient-to-b from-[#1b62db] to-[#1450b8] px-5 py-6 text-white text-center shadow-lg relative border-b border-blue-700/50">
                  <div className="inline-flex w-11 h-11 bg-white/10 rounded-xl items-center justify-center mb-2 shadow-inner">
                    <Lock className="w-5 h-5 text-white fill-white/10" />
                  </div>
                  <h2 className="font-display font-[800] text-lg tracking-tight">CBT Exam Browser</h2>
                  <p className="text-blue-200 text-[10px] uppercase font-bold tracking-wider mt-0.5">v 6.6</p>
                </div>

                {/* Simulated Android Dashboard Buttons Grid in Mockup with SLEEK dark theme */}
                <div className="p-4 flex-1 flex flex-col justify-start space-y-3.5 bg-[#090f24]">
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Button 1 */}
                    <div className="bg-[#101730] p-3 rounded-xl border border-slate-800/80 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#152044] transition-colors">
                      <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1.5 shadow-xs border border-blue-500/20">
                        <Edit2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-sans font-bold text-slate-300 text-[10px]">Masukkan URL</span>
                    </div>

                    {/* Button 2 */}
                    <div className="bg-[#101730] p-3 rounded-xl border border-slate-800/80 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#152044] transition-colors">
                      <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1.5 shadow-xs border border-blue-500/20">
                        <QrCode className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-sans font-bold text-slate-300 text-[10px]">Pindai QR</span>
                    </div>

                    {/* Button 3 */}
                    <div className="bg-[#101730] p-3 rounded-xl border border-slate-800/80 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#152044] transition-colors">
                      <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1.5 shadow-xs border border-blue-500/20">
                        <Settings className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-sans font-bold text-slate-300 text-[10px]">Buka Config</span>
                    </div>

                    {/* Button 4 */}
                    <div className="bg-[#101730] p-3 rounded-xl border border-slate-800/80 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#152044] transition-colors">
                      <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1.5 shadow-xs border border-blue-500/20">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-sans font-bold text-slate-300 text-[10px]">Buat Config</span>
                    </div>

                  </div>

                  {/* Horizontal small utilities */}
                  <div className="grid grid-cols-3 gap-1 pt-2 bg-[#0c1125] rounded-xl border border-slate-800/60 shadow-xs p-1">
                    <button className="flex flex-col items-center py-1.5 rounded-lg hover:bg-slate-900 text-[9px] font-bold text-slate-400">
                      <Info className="w-3.5 h-3.5 text-blue-400 mb-0.5" />
                      <span>About</span>
                    </button>
                    <button className="flex flex-col items-center py-1.5 rounded-lg hover:bg-slate-900 text-[9px] font-bold text-slate-400">
                      <Star className="w-3.5 h-3.5 text-blue-400 mb-0.5" />
                      <span>Rate</span>
                    </button>
                    <button className="flex flex-col items-center py-1.5 rounded-lg hover:bg-slate-900 text-[9px] font-bold text-slate-400">
                      <Share2 className="w-3.5 h-3.5 text-blue-400 mb-0.5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Android Bottom Navigation Gesture Line */}
                <div className="py-2.5 bg-[#020617] flex justify-center border-t border-slate-900">
                  <div className="w-24 h-1 bg-slate-700 rounded-full" />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
