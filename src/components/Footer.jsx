import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © NextGoat {new Date().getFullYear()}. {t('footer.rights')}
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

        <div className="flex gap-4">
          <a href="#privacy" className="text-sm hover:underline">{t('footer.privacyPolicy')}</a>
          <a href="#terms" className="text-sm hover:underline">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
