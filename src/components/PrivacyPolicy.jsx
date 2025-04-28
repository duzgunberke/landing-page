import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-lg bg-black p-8 shadow-lg text-blue-50">
          <h1 className="mb-6 text-center text-3xl font-bold font-zentry">
            {t('privacy.title')}
          </h1>
          
          <div className="space-y-6 font-circular-web">
            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('privacy.intro.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('privacy.intro.content')}
              </p>
            </section>
            
            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('privacy.collection.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('privacy.collection.content')}
              </p>
              <ul className="mt-2 list-disc pl-5 text-blue-50/80">
                <li>{t('privacy.collection.items.personal')}</li>
                <li>{t('privacy.collection.items.usage')}</li>
                <li>{t('privacy.collection.items.device')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('privacy.usage.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('privacy.usage.content')}
              </p>
              <ul className="mt-2 list-disc pl-5 text-blue-50/80">
                <li>{t('privacy.usage.items.service')}</li>
                <li>{t('privacy.usage.items.improve')}</li>
                <li>{t('privacy.usage.items.communicate')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('privacy.sharing.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('privacy.sharing.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('privacy.security.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('privacy.security.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('privacy.contact.content')}
              </p>
            </section>
          </div>

          <div className="mt-10 text-center">
            <a 
              href="/"
              className="inline-block rounded-md bg-violet-300 px-6 py-2 text-black hover:bg-violet-300/80 font-circular-web transition-colors duration-300"
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