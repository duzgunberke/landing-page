import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import CookiesPage from "./app/cookies/page";
import AboutUsPage from "./app/about-us/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route
          path="/"
          element={
            <main className="relative min-h-screen w-screen overflow-x-hidden">
              <NavBar />
              <Hero />
              <About />
              <Features />
              <Story />
              <Contact />
              <Footer />
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
