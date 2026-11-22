import { useMemo, useState } from 'react';
import { PRODUCT_MEDIA } from '../assets/media';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type ProductCategoryId,
} from '../data/aldiaaData';
import {
  buildSingleProductMessage,
  buildWhatsAppUrl,
  filterProductsByCategory,
  getCategoryCounts,
} from '../utils/aldiaa';
import { CheckIcon, PlusIcon, WhatsAppIcon } from './Icons';

interface CatalogSectionProps {
  selected: Set<string>;
  onToggle: (productId: string) => void;
}

const CATEGORY_LABEL_MAP = Object.fromEntries(
  PRODUCT_CATEGORIES.map((c) => [c.id, c.label])
) as Record<ProductCategoryId, string>;

export function CatalogSection({ selected, onToggle }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryId>('all');

  const counts = useMemo(() => getCategoryCounts(PRODUCTS), []);
  const visibleProducts = useMemo(
    () => filterProductsByCategory(PRODUCTS, activeCategory),
    [activeCategory]
  );

  return (
    <section className="section catalog" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-head split">
          <div className="section-head-stack">
            <span className="eyebrow" data-reveal="true">
              منتجاتنا
            </span>
            <h2 className="display delay-08" id="products-title" data-reveal="true">
              من رفوف الضياء <em>إلى صحن الضيافة</em>
            </h2>
          </div>

          <div className="section-head-stack-lg">
            <p className="lead delay-12" data-reveal="true">
              مختارات من أصنافنا المعروفة. اطلب أي صنف مباشرة عبر واتساب، أو أضف أكثر من صنف
              وأرسلها في رسالة واحدة.
            </p>
            <div
              className="filters delay-16"
              role="group"
              aria-label="تصفية المنتجات حسب الفئة"
              data-reveal="true"
            >
              {PRODUCT_CATEGORIES.filter((cat) => counts[cat.id] > 0).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                  <sup>{counts[cat.id]}</sup>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="product-grid" aria-live="polite">
          {visibleProducts.map((product, index) => {
            const isAdded = selected.has(product.id);
            const isFeature = activeCategory === 'all' && Boolean(product.feature);
            return (
              <article
                key={`${activeCategory}-${product.id}`}
                className={`p-card card-idx-${Math.min(index, 7)}${isFeature ? ' is-feature' : ''}`}
              >
                <div className="media">
                  <span className="cat">{CATEGORY_LABEL_MAP[product.category]}</span>
                  <img
                    src={PRODUCT_MEDIA[product.id]}
                    alt={`${product.name} في وعاء خشبي`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>

                <div className="body">
                  <h3>{product.name}</h3>
                  <p>{product.note}</p>
                  <div className="actions">
                    <a
                      className="btn btn-sm"
                      href={buildWhatsAppUrl(buildSingleProductMessage(product.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`اطلب ${product.name} عبر واتساب`}
                    >
                      <WhatsAppIcon width={18} height={18} />
                      اطلب<span className="label-long">&nbsp;عبر واتساب</span>
                    </a>
                    <button
                      type="button"
                      className="add-btn"
                      aria-pressed={isAdded}
                      aria-label={
                        isAdded
                          ? `إزالة ${product.name} من رسالة الطلب`
                          : `إضافة ${product.name} إلى رسالة الطلب`
                      }
                      title={isAdded ? 'مضاف إلى رسالة الطلب' : 'أضف إلى رسالة الطلب'}
                      onClick={() => onToggle(product.id)}
                    >
                      {isAdded ? (
                        <CheckIcon width={18} height={18} />
                      ) : (
                        <PlusIcon width={18} height={18} />
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          <article className={`p-cta card-idx-${Math.min(visibleProducts.length, 7)}`}>
            <span className="eyebrow">لم تجد صنفك؟</span>
            <h3>على رفوف الفروع أصناف أكثر مما تتسع له هذه الصفحة.</h3>
            <p>
              من البن الطازج بالهال والبهارات والزعتر والأعشاب إلى الطحين والسميد والطحينية
              ودبس الرمان والتمور — اسألنا عن أي صنف أو كمية، ويصلك الرد على واتساب.
            </p>
            <a
              className="btn btn-gold btn-sm"
              href={buildWhatsAppUrl(
                'مرحباً الضياء، أبحث عن صنف معيّن، هل هو متوفر لديكم؟'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon width={18} height={18} />
              اسأل عن صنف
            </a>
          </article>
        </div>

        <div className="catalog-note" data-reveal="true">
          <span>
            الأصناف المعروضة مأخوذة من منشورات الضياء، والتشكيلة الكاملة والأسعار الحالية
            متوفرة في الفروع وعبر واتساب.
          </span>
          <a className="btn btn-outline btn-sm" href="#contact">
            جهّز رسالة طلب
          </a>
        </div>
      </div>
    </section>
  );
}
