import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaInstagram } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://www.instagram.com/nextgoatofficial", icon: <FaInstagram /> },
];

const Footer = () => {
  const { t, language } = useLanguage();
  
  // Create paths with language prefix if not English
  const getLocalizedPath = (path) => {
    return language !== 'en' ? `/${language}${path}` : path;
  };
  
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © NEXTGOAT {new Date().getFullYear()}. {t('footer.rights')}
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <Link to={getLocalizedPath("/privacy-policy")} className="text-sm hover:underline">{t('footer.privacyPolicy')}</Link>
          <Link to={getLocalizedPath("/terms-of-service")} className="text-sm hover:underline">{t('footer.terms')}</Link>
          <Link to={getLocalizedPath("/cookies")} className="text-sm hover:underline">{t('footer.cookies')}</Link>
          <Link to={getLocalizedPath("/about-us")} className="text-sm hover:underline">{t('footer.aboutUs')}</Link>
          <a 
            href="mailto:info@nextgoat.io" 
            className="text-sm hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = "mailto:info@nextgoat.io";
            }}
          >
            info@nextgoat.io
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
