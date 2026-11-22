import { useEffect, useState } from 'react';
import { buildWhatsAppUrl, getOrderTrayItemNoun } from '../utils/aldiaa';
import { WhatsAppIcon } from './Icons';

export function FloatingControls({ count }: { count: number }) {
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById('contact');
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {count > 0 && !contactVisible && (
        <div className="order-tray" role="status">
          <span>
            في رسالتك <b>{count}</b> {getOrderTrayItemNoun(count)}
          </span>
          <a className="btn btn-gold" href="#contact">
            أكمل الطلب
          </a>
        </div>
      )}

      <a
        className={`fab${contactVisible ? ' is-hidden' : ''}`}
        href={buildWhatsAppUrl('مرحباً الضياء، أودّ الطلب.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="راسلنا على واتساب"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
