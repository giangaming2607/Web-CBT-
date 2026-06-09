import { ShieldCheck, Zap, QrCode, Settings } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Aman & Stabil",
      description: "Sistem aman untuk mendukung ujian tanpa gangguan kecurangan siswa.",
      icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
      bgIconColor: "bg-blue-500/10 border border-blue-500/20"
    },
    {
      title: "Ringan & Cepat",
      description: "Aplikasi ringan, hemat kuota dan berjalan dengan cepat di semua perangkat.",
      icon: <Zap className="w-7 h-7 text-blue-400" />,
      bgIconColor: "bg-blue-500/10 border border-blue-500/20"
    },
    {
      title: "Pindai QR",
      description: "Gabung masuk ke ruang ujian lebih mudah cukup dengan memindai QR Code.",
      icon: <QrCode className="w-7 h-7 text-blue-400" />,
      bgIconColor: "bg-blue-500/10 border border-blue-500/20"
    },
    {
      title: "Konfigurasi Mudah",
      description: "Atur konfigurasi alamat server ujian dengan mudah dan super fleksibel bagi sekolah.",
      icon: <Settings className="w-7 h-7 text-blue-400" />,
      bgIconColor: "bg-blue-500/10 border border-blue-500/20"
    }
  ];

  return (
    <section 
      id="fitur" 
      className="py-24 bg-[#020617] relative scroll-mt-20 border-t border-slate-900"
    >
      {/* Anchor point link auxiliary */}
      <div id="keunggulan" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-sans font-bold text-[10px] tracking-widest uppercase">
              Fitur Unggulan
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Fitur yang mendukung ujian lebih mudah
          </h2>
          <p className="font-sans font-medium text-slate-400 text-[15px]">
            Dirancang secara khusus dengan keamanan tingkat tinggi untuk memudahkan ujian siswa dan manajemen oleh sekolah.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-slate-900/40 p-8 rounded-2xl border border-slate-800/80 hover:border-slate-700 shadow-lg hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-center items-center"
            >
              {/* Shield/Vector Icon Container */}
              <div className={`w-14 h-14 rounded-2xl ${feature.bgIconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {feature.icon}
              </div>

              {/* Title descriptions */}
              <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans font-normal text-[14px] text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
