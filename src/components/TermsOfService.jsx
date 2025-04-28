import { useLanguage } from '../context/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-lg bg-black p-8 shadow-lg text-blue-50">
          <h1 className="mb-6 text-center text-3xl font-bold font-zentry">
            {t('terms.title')}
          </h1>
          
          <div className="space-y-6 font-circular-web">
            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.intro.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.intro.content')}
              </p>
            </section>
            
            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.accounts.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.accounts.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.conduct.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.conduct.content')}
              </p>
              <ul className="mt-2 list-disc pl-5 text-blue-50/80">
                <li>{t('terms.conduct.items.illegal')}</li>
                <li>{t('terms.conduct.items.harassment')}</li>
                <li>{t('terms.conduct.items.infringement')}</li>
                <li>{t('terms.conduct.items.impersonation')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.content.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.content.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.termination.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.termination.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.liability.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.liability.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.changes.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.changes.content')}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-medium text-violet-300">
                {t('terms.contact.title')}
              </h2>
              <p className="text-blue-50/80">
                {t('terms.contact.content')}
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

export default TermsOfService;