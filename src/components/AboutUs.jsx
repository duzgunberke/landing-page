import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

const AboutUs = () => {
  const { t, language } = useLanguage();
  
  // Set page title based on language
  useEffect(() => {
    document.title = `${t('aboutus.pageTitle')} | NextGoat`;
  }, [language, t]);
  
  return (
    <div className="flex min-h-screen flex-col bg-[#64CCC5]/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#001C30] p-6 md:p-8 shadow-lg text-white">
          <h1 className="mb-6 text-center text-3xl font-bold font-zentry text-[#64CCC5]">
            {t('aboutus.title')}
          </h1>
          
          <div className="space-y-6 font-circular-web">
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('aboutus.mission.title')}
              </h2>
              <p className="text-white/80">
                {t('aboutus.mission.content')}
              </p>
            </section>
            
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('aboutus.team.title')}
              </h2>
              <p className="text-white/80">
                {t('aboutus.team.content')}
              </p>
            </section>
            
            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('aboutus.story.title')}
              </h2>
              <p className="text-white/80">
                {t('aboutus.story.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('aboutus.vision.title')}
              </h2>
              <p className="text-white/80">
                {t('aboutus.vision.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-[#64CCC5]">
                {t('aboutus.contact.title')}
              </h2>
              <p className="text-white/80">
                {t('aboutus.contact.content')}
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

export default AboutUs;