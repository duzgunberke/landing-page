import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

const TermsOfService = () => {
  const { t, language } = useLanguage();
  
  // Set page title based on language
  useEffect(() => {
    document.title = `${t('terms.pageTitle')} | NextGoat`;
  }, [language, t]);
  
  return (
    <div className="flex min-h-screen flex-col bg-[#64CCC5]/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#001C30] p-6 md:p-8 shadow-lg text-white">
          <h1 className="mb-6 text-center text-3xl font-bold font-zentry text-[#64CCC5]">
            {t('terms.title')}
          </h1>
          
          <div className="space-y-6 font-circular-web">
            {/* Introduction Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.intro.title')}
              </h2>
              <p className="text-white/80">
                {t('terms.intro.content')}
              </p>
              <div className="mt-4 p-4 bg-[#176B87]/20 rounded-md border border-[#64CCC5]/30">
                <p className="text-white/90 font-medium">{t('terms.intro.agreement')}</p>
              </div>
            </section>
            
            {/* Full Legal Text Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.fullText.title')}
              </h2>
              <div className="mt-4 p-6 bg-[#176B87]/10 rounded-md border border-[#64CCC5]/30 whitespace-pre-wrap text-white/80 text-sm leading-relaxed">
                {t('terms.fullText.content')}
              </div>
            </section>
            
            {/* Definitions Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.definitions.title')}
              </h2>
              <p className="text-white/80">
                {t('terms.definitions.content')}
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex">
                  <span className="font-semibold text-[#64CCC5] min-w-[120px]">{t('terms.definitions.service')}:</span>
                  <span className="text-white/80">{t('terms.definitions.serviceDefinition')}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[#64CCC5] min-w-[120px]">{t('terms.definitions.authority')}:</span>
                  <span className="text-white/80">{t('terms.definitions.authorityDefinition')}</span>
                </div>
              </div>
            </section>

            {/* User Registration Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.registration.title')}
              </h2>
              <ul className="list-decimal pl-5 space-y-2 text-white/80">
                <li>{t('terms.registration.process')}</li>
                <li>{t('terms.registration.age')}</li>
                <li>{t('terms.registration.accuracy')}</li>
                <li>{t('terms.registration.authorities')}</li>
                <li>{t('terms.registration.data')}</li>
                <li>{t('terms.registration.withdrawal')}</li>
              </ul>
            </section>

            {/* User Responsibilities Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.responsibilities.title')}
              </h2>
              <div className="space-y-3 text-white/80">
                <p>{t('terms.responsibilities.accurate')}</p>
                <p>{t('terms.responsibilities.password')}</p>
                <p>{t('terms.responsibilities.legal')}</p>
                <p>{t('terms.responsibilities.prohibited')}</p>
                <p>{t('terms.responsibilities.security')}</p>
              </div>
            </section>

            {/* Limitations Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.limitations.title')}
              </h2>
              <div className="space-y-3 text-white/80">
                <p>{t('terms.limitations.responsibility')}</p>
                <p>{t('terms.limitations.thirdParty')}</p>
                <p>{t('terms.limitations.personalData')}</p>
              </div>
            </section>

            {/* Intellectual Property Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.intellectual.title')}
              </h2>
              <p className="text-white/80">
                {t('terms.intellectual.content')}
              </p>
            </section>

            {/* Personal Data Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.personalData.title')}
              </h2>
              <div className="space-y-3 text-white/80">
                <p>{t('terms.personalData.controller')}</p>
                <p>{t('terms.personalData.protection')}</p>
                <p>{t('terms.personalData.processing')}</p>
                <p>{t('terms.personalData.usage')}</p>
                <p>{t('terms.personalData.thirdParty')}</p>
                <p>{t('terms.personalData.rights')}</p>
              </div>
            </section>

            {/* Termination Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.termination.title')}
              </h2>
              <p className="text-white/80">
                {t('terms.termination.content')}
              </p>
            </section>

            {/* Final Provisions Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.final.title')}
              </h2>
              <div className="space-y-3 text-white/80">
                <p><span className="font-medium">{t('terms.final.law')}:</span> {t('terms.final.lawContent')}</p>
                <p><span className="font-medium">{t('terms.final.jurisdiction')}:</span> {t('terms.final.jurisdictionContent')}</p>
                <p><span className="font-medium">{t('terms.final.integrity')}:</span> {t('terms.final.integrityContent')}</p>
                <p><span className="font-medium">{t('terms.final.evidence')}:</span> {t('terms.final.evidenceContent')}</p>
                <p><span className="font-medium">{t('terms.final.contact')}:</span> {t('terms.final.contactContent')}</p>
                <p><span className="font-medium">{t('terms.final.platform')}:</span> {t('terms.final.platformContent')}</p>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('terms.contact.title')}
              </h2>
              <p className="text-white/80">
                {t('terms.contact.content')}
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

export default TermsOfService;