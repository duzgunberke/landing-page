import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useLanguage } from '../context/LanguageContext';

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const { t } = useLanguage();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <article className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
        aria-hidden="true"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h3 className="bento-title special-font" dangerouslySetInnerHTML={{ __html: title }}></h3>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
            role="button"
            aria-label="Coming soon feature"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
              aria-hidden="true"
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </article>
  );
};

const Features = () => {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <h2 className="font-circular-web text-lg text-blue-50 font-bold">
            {t('features.title')}
          </h2>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            {t('features.subtitle')}
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={t('features.featureCards.challenges.title')}
            description={t('features.featureCards.challenges.description')}
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-auto md:h-[135vh] w-full grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 h-96 md:h-auto row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={t('features.featureCards.scout.title')}
              description={t('features.featureCards.scout.description')}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-96 md:h-auto row-span-1 md:col-span-1 md:ms-0">
            <article className="relative size-full">
              <div className="absolute left-0 top-0 size-full overflow-hidden">
                <video
                  src="videos/feature-3.mp4"
                  loop
                  muted
                  autoPlay
                  className="absolute left-0 top-0 w-full md:scale-100 scale-125 object-cover"
                  style={{ objectPosition: "center 25%", "@media (min-width: 768px)": { objectPosition: "center center" } }}
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                  <h3 className="bento-title special-font" dangerouslySetInnerHTML={{ __html: t('features.featureCards.leaderboards.title') }}></h3>
                  <p className="mt-3 max-w-64 text-xs md:text-base">{t('features.featureCards.leaderboards.description')}</p>
                </div>

                <div
                  className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
                  role="button"
                  aria-label="Coming soon feature"
                >
                  <TiLocationArrow className="relative z-20" />
                  <p className="relative z-20">coming soon</p>
                </div>
              </div>
            </article>
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-96 md:h-auto row-span-1 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={t('features.featureCards.community.title')}
              description={t('features.featureCards.community.description')}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-96 md:h-auto row-span-1 md:col-span-1 md:me-0">
            <div className="relative size-full bg-violet-900">
              {/* Phone frame wrapper - vertical orientation */}
              <div className="absolute left-1/2 md:left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[85%] bg-black rounded-3xl border-4 border-gray-800 overflow-hidden shadow-2xl md:w-[25%] md:h-[85%]">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-b-xl z-20"></div>
                {/* Home indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-600 rounded-full z-20"></div>
                {/* Video inside phone screen */}
                <video
                  src="videos/hero-2.mp4"
                  loop
                  muted
                  autoPlay
                  className="absolute inset-0 h-full w-full object-cover"
                  aria-hidden="true"
                />
                
                {/* Hand overlay */}
                <div className="absolute -bottom-5 -right-5 w-20 h-32 z-30 rotate-[30deg]">
                  <svg viewBox="0 0 100 160" className="w-full h-full">
                    <path 
                      d="M70,30 C85,45 90,75 90,100 C90,120 85,140 70,150 C60,156 45,160 30,155 C15,150 5,135 10,120 C15,105 30,100 35,85 C40,70 35,55 25,45 C15,35 5,30 10,15 C15,0 30,0 40,10 C50,20 55,15 70,30 Z" 
                      fill="#F5D7C3" 
                      stroke="#8B5A2B" 
                      strokeWidth="1.5"
                    />
                    <path 
                      d="M35,85 C40,80 45,80 45,85 C45,90 40,100 35,105 C30,110 20,110 20,105 C20,100 30,90 35,85 Z" 
                      fill="#F5D7C3" 
                      stroke="#8B5A2B" 
                      strokeWidth="1" 
                    />
                    <path 
                      d="M45,70 C50,65 55,65 55,70 C55,75 50,85 45,90 C40,95 30,95 30,90 C30,85 40,75 45,70 Z" 
                      fill="#F5D7C3" 
                      stroke="#8B5A2B" 
                      strokeWidth="1" 
                    />
                    <path 
                      d="M50,55 C55,50 60,50 60,55 C60,60 55,70 50,75 C45,80 35,80 35,75 C35,70 45,60 50,55 Z" 
                      fill="#F5D7C3" 
                      stroke="#8B5A2B" 
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </BentoTilt>

          {/* <BentoTilt className="bento-tilt_2 h-96 md:h-auto col-span-1 row-span-1 md:row-span-1">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
              aria-label="NextGoat feature preview"
            />
          </BentoTilt> */}
        </div>
      </div>
    </section>
  );
}

export default Features;
