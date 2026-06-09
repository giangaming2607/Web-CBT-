import { Lock, Download, BookOpen, ChevronRight, HelpCircle, CheckCircle } from "lucide-react";

interface CtaSectionProps {
  downloadUrl: string;
  contactUrl: string;
}

export default function CtaSection({ downloadUrl, contactUrl }: CtaSectionProps) {
  // Frequently Asked Questions for high fidelity Indonesian context
  const faqs = [
    {
      q: "Bagaimana cara memasukkan URL ujian?",
      a: "Buka aplikasi, klik tombol 'Masukkan URL', kemudian ketik alamat server ujian yang diberikan oleh panitia ujian atau guru Anda, lalu klik hubungkan."
    },
    {
      q: "Mengapa aplikasi menutup otomatis saat menggunakan split screen?",
      a: "CBT Exam Browser dirancang anti-curang. Kegiatan seperti split-screen, menekan tombol home, atau membuka notifikasi akan dideteksi sebagai pelanggaran demi menjaga kejujuran ujian."
    },
    {
      q: "Apakah aplikasi ini gratis digunakan?",
      a: "Ya! CBT Exam Browser gratis digunakan oleh siswa maupun pihak sekolah untuk memfasilitasi ujian online yang integritasnya terjaga."
    }
  ];

  return (
    <div className="bg-[#020617] pb-20">
      
      {/* 1. BLUE CTA DOWNLOAD BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-gradient-to-r from-blue-700/90 to-indigo-700/80 rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-500/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-blue-500/20">
          
          {/* Animated decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-xl -ml-16 -mb-16 pointer-events-none" />

          {/* Left Text Block with lock symbol */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 z-10 max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-lg border border-white/20">
              <Lock className="w-8 h-8 fill-white/10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Unduh CBT Exam Browser Sekarang
              </h3>
              <p className="font-sans font-medium text-blue-100 text-[14px] sm:text-[15px] leading-relaxed">
                Dapatkan pengalaman ujian online yang lebih aman, cepat, dan nyaman bagi semua siswa Anda.
              </p>
            </div>
          </div>

          {/* Right White Download Button */}
          <div className="shrink-0 z-10 w-full lg:w-auto">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white active:scale-98 shadow-md hover:shadow-xl transition-all duration-200 w-full"
            >
              {/* Simple android mock icon or custom smartphone vector layout */}
              <Download className="w-5 h-5 text-blue-400" />
              <div className="text-left">
                <span className="block font-sans font-extrabold text-[15px] text-white">Download APK</span>
                <span className="block font-sans font-bold text-[10px] text-slate-400">Versi 1.0.0 • Android 5.0+</span>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* 2. PANDUAN INSTALASI (Installation Guide Section) */}
      <section id="panduan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 scroll-mt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left side checklist steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex">
                <span className="px-3.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 font-sans font-bold text-[11px] text-blue-400 uppercase">
                  Panduan
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
                Panduan Pemasangan Aplikasi
              </h2>
              <p className="font-sans font-normal text-slate-400 text-sm">
                Ikuti langkah mudah berikut ini untuk memasang CBT Exam Browser di smartphone Android milik Anda.
              </p>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors shadow-xs space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-white text-[15px]">Unduh File APK</h4>
                  <p className="font-sans font-normal text-slate-400 text-[13.5px] leading-relaxed">
                    Ketuk tombol <strong className="text-blue-400">Download APK</strong> di atas untuk mengunduh aplikasi secara langsung ke dalam memori ponsel Anda.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors shadow-xs space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-white text-[15px]">Izinkan Sumber Tidak Dikenal</h4>
                  <p className="font-sans font-normal text-slate-400 text-[13.5px] leading-relaxed">
                    Jika ponsel baru pertama kali menginstal APK non-Play Store, silakan buka <strong className="text-slate-300">Pengaturan &gt; Keamanan</strong> dan centang opsi <strong className="text-slate-300">Izinkan instalasi dari Sumber Tidak Dikenal</strong>.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors shadow-xs space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-white text-[15px]">Jalankan Instalasi</h4>
                  <p className="font-sans font-normal text-slate-400 text-[13.5px] leading-relaxed">
                    Buka file manager Anda, cari folder Download, lalu pilih file <code className="bg-slate-950 border border-slate-800 px-1 py-0.5 rounded text-xs text-indigo-400 font-mono">cbt-exam-browser.apk</code>. Ketuk Pasang (Install) dan tunggu prosesnya.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors shadow-xs space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-white text-[15px]">Mulai Ujian</h4>
                  <p className="font-sans font-normal text-slate-400 text-[13.5px] leading-relaxed">
                    Buka aplikasinya, ketik URL server ujian sekolah Anda atau ketuk <strong className="text-slate-300">Pindai QR</strong> scan kartu barcode ujian Anda untuk diarahkan otomatis. Dan selamat menempuh ujian!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side interactive FAQ list */}
          <div id="tentang" className="lg:col-span-5 bg-slate-900/40 p-8 rounded-3xl border border-slate-800/80 shadow-md space-y-6">
            <div className="flex items-center space-x-2.5">
              <HelpCircle className="w-6 h-6 text-blue-400" />
              <h3 className="font-display font-extrabold text-[20px] text-white tracking-tight">
                Pertanyaan Populer (FAQ)
              </h3>
            </div>

            <div className="space-y-4 divide-y divide-slate-800/60">
              {faqs.map((faq, index) => (
                <div key={index} className={`${index > 0 ? "pt-4" : ""} space-y-2`}>
                  <h5 className="font-display font-bold text-[14.5px] text-white flex items-start space-x-2">
                    <span className="text-blue-400 font-extrabold">Q:</span>
                    <span>{faq.q}</span>
                  </h5>
                  <p className="font-sans font-medium text-slate-400 text-[13px] leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Butuh bantuan lebih lanjut?</span>
              <a 
                href={contactUrl} 
                className="text-blue-400 hover:text-blue-300 hover:underline flex items-center space-x-0.5"
              >
                <span>Hubungi Kami</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
