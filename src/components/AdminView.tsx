import { useState, useEffect } from "react";
import { Lock, Unlock, Link2, ArrowLeft, LogOut, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface AdminViewProps {
  onBackToHome: () => void;
  downloadUrl: string;
  contactUrl: string;
  onUpdateSettings: (newUrl: string, newContactUrl: string) => void;
}

export default function AdminView({ onBackToHome, downloadUrl, contactUrl, onUpdateSettings }: AdminViewProps) {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionPassword, setSessionPassword] = useState("");
  const [newUrlInput, setNewUrlInput] = useState(downloadUrl);
  const [newContactUrlInput, setNewContactUrlInput] = useState(contactUrl);
  
  const [loginError, setLoginError] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState("");
  const [updateError, setUpdateError] = useState("");
  
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Sync state if initial prop changes
  useEffect(() => {
    setNewUrlInput(downloadUrl);
    setNewContactUrlInput(contactUrl);
  }, [downloadUrl, contactUrl]);

  // Check cached credentials if any are preserved
  useEffect(() => {
    const cachedPass = localStorage.getItem("cbt_admin_secret");
    if (cachedPass) {
      setIsLoggingIn(true);
      // Validate cached password with server settings trigger
      fetch("/api/settings")
        .then((res) => res.json())
        .then(() => {
          setIsLoggedIn(true);
          setSessionPassword(cachedPass);
        })
        .catch(() => {
          localStorage.removeItem("cbt_admin_secret");
        })
        .finally(() => {
          setIsLoggingIn(false);
        });
    }
  }, []);

  // Handle Login Check
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    if (!password.trim()) {
      setLoginError("Password admin tidak boleh kosong!");
      setIsLoggingIn(false);
      return;
    }

    try {
      // Test payload on api with this password to verify correct credentials
      const res = await fetch("/api/settings");
      const settings = await res.json();

      // Submit password to server API configuration to verify validity
      const testRes = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          downloadUrl: settings.downloadUrl, 
          contactUrl: settings.contactUrl, 
          password: password 
        })
      });

      if (testRes.status === 401) {
        setLoginError("Password admin yang dimasukkan salah!");
        setIsLoggingIn(false);
        return;
      }

      if (!testRes.ok) {
        setLoginError("Ada gangguan koneksi ke server.");
        setIsLoggingIn(false);
        return;
      }

      // Valid password! Cache it in local storage session
      localStorage.setItem("cbt_admin_secret", password);
      setIsLoggedIn(true);
      setSessionPassword(password);
    } catch (err) {
      setLoginError("Terjadi error internal sistem.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle Update Download URL and Contact Link
  const handleSettingsUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateSuccess("");
    setUpdateError("");
    setIsUpdating(true);

    if (!newUrlInput.trim() || !newUrlInput.startsWith("http")) {
      setUpdateError("Format URL download wajib diawali http:// atau https://");
      setIsUpdating(false);
      return;
    }

    if (!newContactUrlInput.trim() || (!newContactUrlInput.startsWith("http") && !newContactUrlInput.startsWith("mailto:"))) {
      setUpdateError("Format tautan Hubungi Kami wajib diawali http://, https://, atau mailto:");
      setIsUpdating(false);
      return;
    }

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          downloadUrl: newUrlInput, 
          contactUrl: newContactUrlInput,
          password: sessionPassword 
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setUpdateError(data.error || "Gagal memperbarui konfigurasi server.");
        return;
      }

      // Sync master UI state
      onUpdateSettings(data.downloadUrl, data.contactUrl);
      setUpdateSuccess("Berhasil memperbarui pengaturan CBT Exam Browser!");
    } catch (err) {
      setUpdateError("Ada kendala mengontak server backend.");
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("cbt_admin_secret");
    setPassword("");
    setSessionPassword("");
    setIsLoggedIn(false);
    setLoginError("");
    setUpdateSuccess("");
    setUpdateError("");
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#020617] flex items-center justify-center px-4 sm:px-6">
      
      {/* Container holding cards */}
      <div className="w-full max-w-md bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Top visual graphic strip */}
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-[#1b62db] to-indigo-500 animate-pulse" />

        {/* Dynamic Screen View depending on Login credentials */}
        {!isLoggedIn ? (
          
          /* VIEW 1: LOGIN WALL */
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 justify-center items-center text-blue-400 shadow-inner">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                  Portal Login Admin
                </h2>
                <p className="font-sans font-medium text-xs text-slate-400">
                  Autentikasi diperlukan untuk mengganti link download APK
                </p>
              </div>
            </div>

            {loginError && (
              <div className="flex items-center space-x-2 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-semibold">
                <AlertCircle className="w-4.5 h-4.5 text-red-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-slate-300 tracking-wide">
                  PASSWORD ADMIN:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password (bawaan: admin123)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-850 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 tracking-wider font-mono bg-slate-950 text-white placeholder-slate-600"
                  disabled={isLoggingIn}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-600/30 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin animate-pulse" />
                    <span>Memverifikasi...</span>
                  </>
                ) : (
                  <span>Masuk Ke Panel</span>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-slate-800 text-center">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Landing Page</span>
              </button>
            </div>
          </div>

        ) : (
          
          /* VIEW 2: LOGGED IN CONFIG AREA */
          <div className="p-8 space-y-6 text-left">
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 justify-center items-center text-green-400 flex">
                  <Unlock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-[800] text-white tracking-tight leading-none text-base">Konfigurator</h3>
                  <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider block mt-1">Status: Terkoneksi</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
                title="Keluar"
              >
                <LogOut className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Current settings indicator bubbles */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-3">
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Link Download APK Saat Ini:
                </span>
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-blue-400 font-bold hover:underline break-all"
                >
                  <Link2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{downloadUrl}</span>
                </a>
              </div>
              <div className="space-y-1 pt-2 border-t border-slate-800/60">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Tautan Hubungi Kami Saat Ini:
                </span>
                <a
                  href={contactUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-blue-400 font-bold hover:underline break-all"
                >
                  <Link2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{contactUrl}</span>
                </a>
              </div>
            </div>

            {/* Input Form updates */}
            <form onSubmit={handleSettingsUpdate} className="space-y-4">
              
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 tracking-wide">
                  GANTI LINK DOWNLOAD APK BARU:
                </label>
                <input
                  type="text"
                  value={newUrlInput}
                  onChange={(e) => setNewUrlInput(e.target.value)}
                  placeholder="https://example.com/file.apk"
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-[#0d1325] text-white font-medium"
                  disabled={isUpdating}
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 tracking-wide">
                  GANTI TAUTAN HUBUNGI KAMI BARU:
                </label>
                <input
                  type="text"
                  value={newContactUrlInput}
                  onChange={(e) => setNewContactUrlInput(e.target.value)}
                  placeholder="mailto:support@cbt-exambrowser.com atau https://wa.me/628123456789"
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-[#0d1325] text-white font-medium"
                  disabled={isUpdating}
                />
                <span className="block text-[10px] text-slate-500 font-sans mt-1 leading-normal">
                  Dapat diisi dengan email (mailto:support@cbt-exambrowser.com) maupun direct link WhatsApp (https://wa.me/628...).
                </span>
              </div>

              {updateError && (
                <div className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{updateError}</span>
                </div>
              )}

              {updateSuccess && (
                <div className="flex items-start space-x-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>{updateSuccess}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-600/30 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Menyimpan Perubahan...</span>
                  </>
                ) : (
                  <span>Perbarui Konfigurasi</span>
                )}
              </button>

            </form>

            <div className="pt-4 border-t border-slate-800 text-center">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Halaman Utama</span>
              </button>
            </div>

          </div>

        )}

      </div>
    </div>
  );
}
