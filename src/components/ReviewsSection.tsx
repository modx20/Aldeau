import { SAMPLE_REVIEWS } from '../data/aldiaaData';
import { SparkleIcon } from './Icons';

export function ReviewsSection() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="section-head split">
          <div className="section-head-stack">
            <span className="eyebrow" data-reveal="true">
              آراء العملاء
            </span>
            <h2 className="display delay-08" data-reveal="true">
              ما يمكن أن يقوله <em>جيران الضياء</em>
            </h2>
          </div>

          <div className="section-head-stack-sm">
            <span className="sample-tag delay-10" data-reveal="true">
              <SparkleIcon width={12} height={12} />
              نماذج توضيحية · ليست تقييمات حقيقية
            </span>
            <p className="lead delay-14" data-reveal="true">
              هذه العبارات أمثلة لطريقة عرض آراء العملاء في الموقع، وتُستبدل بتقييمات حقيقية
              يجمعها فريق الضياء.
            </p>
          </div>
        </div>

        <div className="review-grid">
          {SAMPLE_REVIEWS.map((review, index) => {
            const initial = review.name.replace(/^(أم|أبو)\s/, '').charAt(0);
            const delayClass =
              index === 1
                ? 'delay-08'
                : index === 2
                ? 'delay-16'
                : index === 3
                ? 'delay-24'
                : '';

            return (
              <figure
                key={review.name}
                className={`review${delayClass ? ` ${delayClass}` : ''}`}
                data-reveal="true"
              >
                <span className="sample">نموذج</span>
                <div className="qmark" aria-hidden="true">
                  ”
                </div>
                <blockquote>{review.quote}</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    {initial}
                  </span>
                  <span>
                    <b>{review.name}</b>
                    <span>{review.place}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
