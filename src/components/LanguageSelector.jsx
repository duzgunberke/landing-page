import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
  { code: 'de', label: 'DE', flag: '🇩🇪' }
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="ml-8 h-8 appearance-none bg-transparent pr-8 text-sm text-blue-50 outline-none transition-colors hover:text-violet-300 cursor-pointer"
      style={{
        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0 center',
        backgroundSize: '16px'
      }}
    >
      {languages.map(({ code, label, flag }) => (
        <option key={code} value={code} className="bg-black text-blue-50">
          {flag} {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
