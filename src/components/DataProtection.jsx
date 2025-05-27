import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

const DataProtection = () => {
  const { t, language } = useLanguage();
  
  // Set page title based on language
  useEffect(() => {
    document.title = `${t('dataProtection.pageTitle')} | NextGoat`;
  }, [language, t]);
  
  return (
    <div className="flex min-h-screen flex-col bg-[#64CCC5]/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#001C30] p-6 md:p-8 shadow-lg text-white">
          <h1 className="mb-6 text-center text-3xl font-bold font-zentry text-[#64CCC5]">
            {t('dataProtection.title')}
          </h1>
          
          <div className="space-y-6 font-circular-web">
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.identity.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.identity.content')}
              </p>
            </section>
            
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.collection.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.collection.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.data.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.data.content')}
              </p>
              <ul className="mt-2 list-disc pl-5 text-white/80">
                <li>{t('dataProtection.data.items.identity')}</li>
                <li>{t('dataProtection.data.items.contact')}</li>
                <li>{t('dataProtection.data.items.location')}</li>
                <li>{t('dataProtection.data.items.marketing')}</li>
                <li>{t('dataProtection.data.items.legal')}</li>
                <li>{t('dataProtection.data.items.security')}</li>
                <li>{t('dataProtection.data.items.risk')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.purposes.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.purposes.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.legal.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.legal.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.transfer.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.transfer.content')}
              </p>
              <ul className="mt-2 list-disc pl-5 text-white/80">
                <li>{t('dataProtection.transfer.items.services')}</li>
                <li>{t('dataProtection.transfer.items.marketing')}</li>
                <li>{t('dataProtection.transfer.items.technical')}</li>
                <li>{t('dataProtection.transfer.items.cloud')}</li>
                <li>{t('dataProtection.transfer.items.legal')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.rights.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.rights.content')}
              </p>
              <ul className="mt-2 list-disc pl-5 text-white/80">
                <li>{t('dataProtection.rights.items.learn')}</li>
                <li>{t('dataProtection.rights.items.purpose')}</li>
                <li>{t('dataProtection.rights.items.thirdParties')}</li>
                <li>{t('dataProtection.rights.items.correction')}</li>
                <li>{t('dataProtection.rights.items.object')}</li>
                <li>{t('dataProtection.rights.items.compensation')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.contact.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.contact.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('dataProtection.changes.title')}
              </h2>
              <p className="text-white/80">
                {t('dataProtection.changes.content')}
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

export default DataProtection;
