import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const { t, language } = useLanguage();
  const [showFullText, setShowFullText] = useState(false);
  
  // Set page title based on language
  useEffect(() => {
    document.title = `${t('privacy.pageTitle')} | NextGoat`;
  }, [language, t]);
  
  return (
    <div className="flex min-h-screen flex-col bg-[#64CCC5]/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#001C30] p-6 md:p-8 shadow-lg text-white">
          <h1 className="mb-6 text-center text-3xl font-bold font-zentry text-[#64CCC5]">
            {t('privacy.title')}
          </h1>
          
          <div className="space-y-6 font-circular-web">
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.intro.title')}
              </h2>
              <p className="text-white/80">
                {t('privacy.intro.content')}
              </p>
            </section>
            
            {/* Full Legal Text Toggle Button */}
            <section className="text-center">
              <button 
                onClick={() => setShowFullText(!showFullText)}
                className="px-6 py-2 bg-[#176B87] rounded-md hover:bg-[#176B87]/80 transition-colors"
              >
                {showFullText ? t('privacy.fullText.hideButton') : t('privacy.fullText.showButton')}
              </button>
              
              {/* Full Legal Text Section (collapsible) */}
              {showFullText && (
                <div className="mt-4">
                  <h2 className="mb-3 text-2xl font-medium text-[#64CCC5] text-left">
                    {t('privacy.fullText.title')}
                  </h2>
                  <div className="mt-4 p-6 bg-[#176B87]/10 rounded-md border border-[#64CCC5]/30 whitespace-pre-wrap text-white/80 text-sm leading-relaxed text-left max-h-[500px] overflow-y-auto">
                    {t('privacy.fullText.content')}
                  </div>
                </div>
              )}
            </section>
            
            {/* Data Controller Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.dataController.title')}
              </h2>
              <div className="space-y-3 text-white/80">
                <p>{t('privacy.dataController.content')}</p>
              </div>
            </section>
            
            {/* Data Collection Method Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.collectionMethod.title')}
              </h2>
              <p className="text-white/80">
                {t('privacy.collectionMethod.content')}
              </p>
            </section>
            
            {/* Personal Data Processed Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.dataProcessed.title')}
              </h2>
              <p className="text-white/80 mb-3">
                {t('privacy.dataProcessed.intro')}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li><span className="font-medium">{t('privacy.dataProcessed.identity.title')}:</span> {t('privacy.dataProcessed.identity.content')}</li>
                <li><span className="font-medium">{t('privacy.dataProcessed.contact.title')}:</span> {t('privacy.dataProcessed.contact.content')}</li>
                <li><span className="font-medium">{t('privacy.dataProcessed.location.title')}:</span> {t('privacy.dataProcessed.location.content')}</li>
                <li><span className="font-medium">{t('privacy.dataProcessed.marketing.title')}:</span> {t('privacy.dataProcessed.marketing.content')}</li>
                <li><span className="font-medium">{t('privacy.dataProcessed.legal.title')}:</span> {t('privacy.dataProcessed.legal.content')}</li>
                <li><span className="font-medium">{t('privacy.dataProcessed.security.title')}:</span> {t('privacy.dataProcessed.security.content')}</li>
                <li><span className="font-medium">{t('privacy.dataProcessed.risk.title')}:</span> {t('privacy.dataProcessed.risk.content')}</li>
              </ul>
            </section>
            
            {/* Processing Purposes Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.purposes.title')}
              </h2>
              <p className="text-white/80">
                {t('privacy.purposes.content')}
              </p>
            </section>
            
            {/* Legal Reasons Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.legalReasons.title')}
              </h2>
              <p className="text-white/80 mb-3">
                {t('privacy.legalReasons.intro')}
              </p>
              <div className="space-y-4">
                {/* We can list several key legal reasons here */}
                <div className="p-3 bg-[#176B87]/20 rounded-md">
                  <h3 className="font-medium text-[#64CCC5] mb-1">{t('privacy.legalReasons.identity.title')}</h3>
                  <p className="text-white/80 text-sm">{t('privacy.legalReasons.identity.data')}</p>
                  <p className="text-white/80 text-sm">{t('privacy.legalReasons.identity.reasons')}</p>
                </div>
                
                <div className="p-3 bg-[#176B87]/20 rounded-md">
                  <h3 className="font-medium text-[#64CCC5] mb-1">{t('privacy.legalReasons.services.title')}</h3>
                  <p className="text-white/80 text-sm">{t('privacy.legalReasons.services.data')}</p>
                  <p className="text-white/80 text-sm">{t('privacy.legalReasons.services.reasons')}</p>
                </div>
                
                <div className="p-3 bg-[#176B87]/20 rounded-md">
                  <h3 className="font-medium text-[#64CCC5] mb-1">{t('privacy.legalReasons.marketing.title')}</h3>
                  <p className="text-white/80 text-sm">{t('privacy.legalReasons.marketing.data')}</p>
                  <p className="text-white/80 text-sm">{t('privacy.legalReasons.marketing.reasons')}</p>
                </div>
              </div>
            </section>
            
            {/* Data Transfer Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.dataTransfer.title')}
              </h2>
              <p className="text-white/80 mb-3">
                {t('privacy.dataTransfer.intro')}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>{t('privacy.dataTransfer.item1')}</li>
                <li>{t('privacy.dataTransfer.item2')}</li>
                <li>{t('privacy.dataTransfer.item3')}</li>
                <li>{t('privacy.dataTransfer.item4')}</li>
                <li>{t('privacy.dataTransfer.item5')}</li>
                <li>{t('privacy.dataTransfer.item6')}</li>
                <li>{t('privacy.dataTransfer.item7')}</li>
                <li>{t('privacy.dataTransfer.item8')}</li>
              </ul>
            </section>
            
            {/* User Rights Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.userRights.title')}
              </h2>
              <p className="text-white/80 mb-3">
                {t('privacy.userRights.intro')}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>{t('privacy.userRights.item1')}</li>
                <li>{t('privacy.userRights.item2')}</li>
                <li>{t('privacy.userRights.item3')}</li>
                <li>{t('privacy.userRights.item4')}</li>
                <li>{t('privacy.userRights.item5')}</li>
                <li>{t('privacy.userRights.item6')}</li>
                <li>{t('privacy.userRights.item7')}</li>
                <li>{t('privacy.userRights.item8')}</li>
              </ul>
              <p className="text-white/80 mt-3">
                {t('privacy.userRights.conclusion')}
              </p>
              <p className="text-white/80 mt-3">
                {t('privacy.userRights.contact')}
              </p>
            </section>
            
            {/* Changes Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.changes.title')}
              </h2>
              <p className="text-white/80">
                {t('privacy.changes.content')}
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-white/80">
                {t('privacy.contact.content')}
              </p>
            </section>
          </div>

          <div className="mt-10 text-center">
            <a 
              href={`/${language !== 'en' ? language + '/' : ''}`}
              className="inline-block rounded-md bg-[#176B87] px-6 py-2 text-white hover:bg-[#176B87]/80 font-circular-web transition-colors duration-300"
            >
              {t('nav.home')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;