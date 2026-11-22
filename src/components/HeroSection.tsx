import { SITE_MEDIA } from '../assets/media';
import { SITE_INFO } from '../data/aldiaaData';
import { buildWhatsAppUrl } from '../utils/aldiaa';
import { ArrowLeftIcon, WhatsAppIcon } from './Icons';

export function HeroSection() {
  const years = new Date().getFullYear() - SITE_INFO.since;
  const waHref = buildWhatsAppUrl('مرحباً الضياء، أودّ الطلب.');

  return (
    <section className="hero on-dark" id="top" aria-label="مقدمة">
      <div className="hero-media">
        <img
          src={SITE_MEDIA.hero}
          alt="مكسرات محمّصة تنسكب من مغرفة خشبية في أوعية من الخيزران"
          fetchPriority="high"
          width={1376}
          height={768}
        />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow fade-up delay-10">
            {SITE_INFO.name} · {SITE_INFO.city}
          </span>
          <h1>
            <span className="line">
              <span className="delay-20">للضيافة أصول،</span>
            </span>
            <span className="line">
              <span className="delay-34">
                نعرفها منذ <em>{SITE_INFO.since}</em>
              </span>
            </span>
          </h1>
          <p className="lead fade-up delay-55">
            مكسرات وبن وهال وبهارات وحبوب وتسالي، نختارها ونحمّصها ونعبّئها لتصل إلى بيتك بالطعم
            الذي تعرفه. ثمانية فروع في عمّان، وطلبك على بعد رسالة واتساب.
          </p>
          <div className="hero-ctas fade-up delay-70">
            <a
              className="btn btn-gold"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              اطلب عبر واتساب
            </a>
            <a className="btn btn-ghost" href="#products">
              تصفّح المنتجات
              <ArrowLeftIcon className="arrow" width={18} height={18} />
            </a>
          </div>

          <div className="hero-stats fade-up delay-90">
            <div>
              <b>{years}+</b>
              <span>عاماً من الخبرة</span>
            </div>
            <div>
              <b>8</b>
              <span>فروع في عمّان</span>
            </div>
            <div>
              <b>1</b>
              <span>مصنع في أبو علندا</span>
            </div>
          </div>
        </div>
      </div>

      <div className="seal fade-up delay-110" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <defs>
            <path
              id="seal-circle"
              d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"
            />
          </defs>
          <text>
            <textPath href="#seal-circle" startOffset="0">
              مطاحن ومحامص الضياء ✦ منذ {SITE_INFO.since} ✦ عمّان ✦ مطاحن ومحامص الضياء ✦ منذ{' '}
              {SITE_INFO.since} ✦ عمّان ✦
            </textPath>
          </text>
        </svg>
        <img src={SITE_MEDIA.logo} alt="" width={84} height={84} />
      </div>

      <a href="#about" className="scroll-cue" aria-label="انتقل إلى القسم التالي" />
    </section>
  );
}
