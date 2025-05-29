import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Cookies from "./components/Cookies";
import AboutUs from "./components/AboutUs";

function App() {
  const { language } = useLanguage();
  
  // Main app layout component
  const MainLayout = () => (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Default English routes */}
        <Route path="/" element={<MainLayout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* German routes */}
        <Route path="/de" element={<MainLayout />} />
        <Route path="/de/forgot-password" element={<ForgotPassword />} />
        <Route path="/de/terms-of-service" element={<TermsOfService />} />
        <Route path="/de/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/de/cookies" element={<Cookies />} />
        <Route path="/de/about-us" element={<AboutUs />} />
        
        {/* Turkish routes */}
        <Route path="/tr" element={<MainLayout />} />
        <Route path="/tr/forgot-password" element={<ForgotPassword />} />
        <Route path="/tr/terms-of-service" element={<TermsOfService />} />
        <Route path="/tr/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/tr/cookies" element={<Cookies />} />
        <Route path="/tr/about-us" element={<AboutUs />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
