import { useRef } from 'react';
import { OFFER_POSTERS, SITE_INFO } from '../data/aldiaaData';
import { ArrowLeftIcon, InstagramIcon, SparkleIcon } from './Icons';

export function OffersSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const figureWidth = rail.querySelector('figure')?.clientWidth ?? 300;
    const step = figureWidth + 20;
    rail.scrollBy({ left: -direction * step, behavior: 'smooth' });
  };

  return (
    <section className="section offers" id="offers" aria-labelledby="offers-title">
      <div className="container section-head split">
        <div className="section-head-stack">
          <span className="eyebrow" data-reveal="true">
            من منشورات الضياء
          </span>
          <h2 className="display delay-08" id="offers-title" data-reveal="true">
            عروض تتجدد، <em>وأسعار تُعلن بوضوح</em>
          </h2>
        </div>

        <div className="section-head-stack-md">
          <p className="lead delay-12" data-reveal="true">
            نماذج من منشورات العروض كما نُشرت على صفحات الضياء. العروض محدودة بفترتها،
            وتابعونا على إنستقرام لتصلكم أحدثها أولاً.
          </p>
          <div className="rail-controls delay-16" data-reveal="true">
            <button
              type="button"
              className="prev"
              aria-label="السابق"
              onClick={() => scrollRail(-1)}
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              aria-label="التالي"
              onClick={() => scrollRail(1)}
            >
              <ArrowLeftIcon />
            </button>
          </div>
        </div>
      </div>

      <div
        className="rail"
        ref={railRef}
        tabIndex={0}
        aria-label="منشورات العروض"
      >
        {OFFER_POSTERS.map((offer) => (
          <figure key={offer.image}>
            <img
              src={offer.image}
              alt={offer.alt}
              width={1152}
              height={1440}
            />
          </figure>
        ))}

        <div className="rail-end">
          <SparkleIcon className="rail-sparkle" width={26} height={26} />
          <h3>عروض الأسبوع تُنشر أولاً على إنستقرام</h3>
          <p>تابعوا حساب الضياء لمعرفة العروض الجديدة والأصناف الموسمية.</p>
          <a
            className="btn btn-gold btn-sm"
            href={SITE_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width={18} height={18} />
            تابعنا على إنستقرام
          </a>
        </div>
      </div>
    </section>
  );
}
