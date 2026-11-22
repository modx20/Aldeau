import { NAV_ITEMS, SITE_INFO } from '../data/aldiaaData';
import { buildWhatsAppUrl } from '../utils/aldiaa';
import { BrandMark, SocialRow } from './Header';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <BrandMark lazy />
            <p>{SITE_INFO.tagline}</p>
            <SocialRow />
          </div>

          <div>
            <h4>أقسام الصفحة</h4>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>تواصل</h4>
            <ul>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  واتساب: <span className="ltr">{SITE_INFO.whatsapp.display}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_INFO.email}`}>
                  <span className="ltr">{SITE_INFO.email}</span>
                </a>
              </li>
              <li>الإدارة والمصنع: أبو علندا، عمّان</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="disclaimer">
            <span className="tag">نموذج أولي</span>
            <span>
              هذا الموقع تصميم مقترح أُعدّ للعرض على إدارة {SITE_INFO.name}، وليس
              الموقع الرسمي المعتمد للشركة. آراء العملاء المعروضة نماذج توضيحية. ©{' '}
              {year} {SITE_INFO.name}.
            </span>
          </div>

          <div className="credit">
            <span>صُمّم وطُوّر بواسطة</span>
            <img
              src={SITE_INFO.assets.designerMark}
              alt="شعار المصمم"
              width={46}
              height={46}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
