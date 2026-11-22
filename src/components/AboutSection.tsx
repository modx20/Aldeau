import { SITE_MEDIA } from '../assets/media';
import { SITE_INFO } from '../data/aldiaaData';
import { PinIcon } from './Icons';

export function AboutSection() {
  const years = new Date().getFullYear() - SITE_INFO.since;

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow" data-reveal="true">
            من نحن
          </span>
          <h2 className="display delay-08" data-reveal="true">
            حكاية بدأت عام {SITE_INFO.since}، <em>وما زالت تُحمَّص على مهل</em>
          </h2>
          <p className="delay-14" data-reveal="true">
            الضياء اسمٌ مألوف في بيوت عمّان؛ من القهوة العربية والتركية بالهال الفاخر، وصحن
            المكسرات المحمّصة في سهرة العائلة، إلى برغل طبخة الجمعة والبهارات والأعشاب والطحين
            والسميد ومنتجات المطاحن اليومية.
          </p>
          <p className="delay-20" data-reveal="true">
            على مدى ما يقارب ثلاثة عقود توسّعنا إلى ثمانية فروع في أحياء عمّان، ومصنعٍ ومقرٍّ
            للإدارة في أبو علندا يجهّز المكسرات والبن والبهارات والمنتجات المعبأة كالطحينية ودبس
            الرمان والحلاوة والتمور. تغيّرت الأحياء وتغيّرت الرفوف، وبقيت قاعدتنا كما هي.
          </p>
          <blockquote className="pull delay-26" data-reveal="true">
            ما لا نرضاه لبيوتنا، لا نضعه على رفوفنا.
          </blockquote>
          <div className="facts delay-32" data-reveal="true">
            <div>
              <b>{SITE_INFO.since}</b>
              <span>سنة البداية</span>
            </div>
            <div>
              <b>{years}</b>
              <span>عاماً في خدمة عمّان</span>
            </div>
            <div>
              <b>9</b>
              <span>مواقع بين فروع ومصنع</span>
            </div>
          </div>
        </div>

        <div className="collage delay-10" data-reveal="true">
          <div className="frame" aria-hidden="true" />
          <figure className="f1">
            <img
              src={SITE_MEDIA.storeFront}
              alt="واجهة أحد فروع مطاحن ومحامص الضياء"
              loading="lazy"
              width={596}
              height={335}
            />
          </figure>
          <figure className="f2">
            <img
              src={SITE_MEDIA.storeFacade}
              alt="لافتة الضياء على واجهة زجاجية لأحد الفروع"
              loading="lazy"
              width={739}
              height={415}
            />
          </figure>
          <span className="chip">
            <PinIcon width={16} height={16} />
            من فروعنا في عمّان
          </span>
          <div className="since" aria-hidden="true">
            <span>
              <small>منذ</small>
              <b>{SITE_INFO.since}</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
