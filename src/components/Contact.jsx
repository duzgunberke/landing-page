import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { useLanguage } from '../context/LanguageContext';

const ImageClipBox = ({ src, clipClass, alt }) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.png"
            clipClass="contact-clip-path-1"
            alt="Football talent visual"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/footer-image-1.png"
            clipClass="sword-man-clip-path md:scale-125"
            alt="Football player silhouette"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="sr-only">Contact Us</h2>
          <p className="mb-10 font-general text-[10px] uppercase">
            {t('contact.joinCommunity')}
          </p>

          <AnimatedTitle
            title={t('contact.title')}
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button
            id="contact-btn"
            title={t('contact.getInTouch')}
            containerClass="mt-10 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
