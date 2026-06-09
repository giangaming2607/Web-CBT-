import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import AdminView from "./components/AdminView";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [downloadUrl, setDownloadUrl] = useState(
    "https://github.com/cbt-dev/cbt-exam-browser/releases/download/v1.0.0/CBT_Exam_Browser_v1.0.apk"
  );
  const [contactUrl, setContactUrl] = useState("mailto:support@cbt-exambrowser.com");

  // Sync route path state via window events
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  // Fetch verified active APK link from API DB
  useEffect(() => {
    fetch("/api/settings")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((data) => {
        if (data.downloadUrl) {
          setDownloadUrl(data.downloadUrl);
        }
        if (data.contactUrl) {
          setContactUrl(data.contactUrl);
        }
      })
      .catch((err) => {
        console.error("Settings load error:", err);
      });
  }, []);

  // Soft internal SPA routing simulator
  const handleNavigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Callback to update the master state when admin updates the value
  const handleUpdateSettings = (newUrl: string, newContactUrl: string) => {
    setDownloadUrl(newUrl);
    setContactUrl(newContactUrl);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden antialiased">
      {/* Dynamic Render based on path */}
      {currentPath === "/admin" ? (
        <>
          {/* Subtle Navigation back for admin page too */}
          <Navbar 
            currentPath={currentPath} 
            onNavigate={handleNavigate} 
            downloadUrl={downloadUrl} 
          />
          <AdminView 
            onBackToHome={() => handleNavigate("/")} 
            downloadUrl={downloadUrl} 
            contactUrl={contactUrl}
            onUpdateSettings={handleUpdateSettings} 
          />
          <Footer onNavigate={handleNavigate} contactUrl={contactUrl} />
        </>
      ) : (
        <>
          {/* Header/Nav */}
          <Navbar 
            currentPath={currentPath} 
            onNavigate={handleNavigate} 
            downloadUrl={downloadUrl} 
          />
          
          {/* Hero Section */}
          <HeroSection downloadUrl={downloadUrl} />

          {/* Features Cards Grid */}
          <FeaturesSection />

          {/* Bottom Action Section and Guides */}
          <CtaSection downloadUrl={downloadUrl} contactUrl={contactUrl} />

          {/* Footer Component */}
          <Footer onNavigate={handleNavigate} contactUrl={contactUrl} />
        </>
      )}
    </div>
  );
}

