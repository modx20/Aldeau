import { SITE_MEDIA } from '../assets/media';
import { CRAFT_STEPS } from '../data/aldiaaData';

export function CraftSection() {
  return (
    <section className="section craft on-dark" id="craft">
      <div className="container craft-grid">
        <div className="craft-media" data-reveal="true">
          <div className="img-wrap">
            <img
              src={SITE_MEDIA.craftDrum}
              alt="لوز وفستق داخل محمصة نحاسية دوّارة"
              loading="lazy"
              width={928}
              height={1152}
            />
          </div>
          <div className="badge">
            <b>صنعة لا تُستعجل</b>
            الحرارة والوقت والتقليب، ثلاثة تفاصيل تصنع الفرق في كل حبّة.
          </div>
        </div>

        <div>
          <span className="eyebrow" data-reveal="true">
            لماذا الضياء
          </span>
          <h2 className="display craft-title delay-08" data-reveal="true">
            التحميص صنعة، <em>والتفاصيل هي الفرق</em>
          </h2>
          <ol className="steps">
            {CRAFT_STEPS.map((step, index) => (
              <li
                key={step.num}
                className={
                  index === 0
                    ? 'delay-10'
                    : index === 1
                    ? 'delay-18'
                    : index === 2
                    ? 'delay-26'
                    : 'delay-34'
                }
                data-reveal="true"
              >
                <span className="num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
