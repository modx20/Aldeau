import { useEffect, useState } from 'react';
import { SITE_MEDIA } from '../assets/media';
import { NAV_ITEMS, SITE_INFO } from '../data/aldiaaData';
import { buildWhatsAppUrl } from '../utils/aldiaa';
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  SnapchatIcon,
  WhatsAppIcon,
} from './Icons';

export function BrandMark({ lazy = false }: { lazy?: boolean }) {
  return (
    <a href="#top" className="brand" aria-label={`${SITE_INFO.name} — العودة للأعلى`}>
      <img
        className="brand-logo"
        src={SITE_MEDIA.logo}
        alt="شعار مطاحن ومحامص الضياء"
        width={52}
        height={52}
        loading={lazy ? 'lazy' : undefined}
      />
      <span className="brand-text">
        <strong>{SITE_INFO.name}</strong>
        <small>
          {SITE_INFO.city} · منذ {SITE_INFO.since}
        </small>
      </span>
    </a>
  );
}

export function SocialRow({ size = 18 }: { size?: number }) {
  return (
    <div className="social-row">
      <a
        href={SITE_INFO.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="إنستقرام الضياء"
      >
        <InstagramIcon width={size} height={size} />
      </a>
      <a
        href={SITE_INFO.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="فيسبوك الضياء"
      >
        <FacebookIcon width={size} height={size} />
      </a>
      <a
        href={SITE_INFO.social.snapchat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="سناب شات الضياء"
      >
        <SnapchatIcon width={size} height={size} />
      </a>
    </div>
  );
}

export function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const defaultWhatsAppHref = buildWhatsAppUrl('مرحباً الضياء، أودّ الطلب.');

  return (
    <>
      <header className={`site-header${solid ? ' is-solid' : ''}`}>
        <div className="container">
          <BrandMark />
          <nav className="main-nav" aria-label="أقسام الصفحة">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? 'is-active' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="btn btn-gold btn-sm"
              href={defaultWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon width={18} height={18} />
              اطلب عبر واتساب
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`drawer${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="القائمة"
        aria-hidden={!menuOpen}
      >
        <div className="drawer-top">
          <BrandMark />
          <button
            type="button"
            className="menu-btn drawer-close-btn"
            aria-label="إغلاق القائمة"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="أقسام الصفحة">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-idx-${idx}`}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{idx + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="drawer-foot">
          <a
            className="btn btn-gold"
            href={defaultWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            <WhatsAppIcon />
            اطلب عبر واتساب
          </a>
          <SocialRow />
        </div>
      </div>
    </>
  );
}
