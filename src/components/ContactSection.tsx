import { useState } from 'react';
import { BRANCHES, PRODUCTS, SITE_INFO } from '../data/aldiaaData';
import { buildComposerMessage, buildWhatsAppUrl } from '../utils/aldiaa';
import {
  ArrowLeftIcon,
  CheckIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PlusIcon,
  SnapchatIcon,
  WhatsAppIcon,
} from './Icons';

interface ContactSectionProps {
  selected: Set<string>;
  onToggle: (productId: string) => void;
  branchId: string;
  onBranchChange: (branchId: string) => void;
}

export function ContactSection({
  selected,
  onToggle,
  branchId,
  onBranchChange,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const selectedItems = PRODUCTS.filter((p) => selected.has(p.id)).map((p) => p.name);
  const selectedBranchName = BRANCHES.find((b) => b.id === branchId)?.name;

  const messagePreview = buildComposerMessage({
    name,
    items: selectedItems,
    branch: selectedBranchName,
    notes,
  });

  const whatsappHref = buildWhatsAppUrl(messagePreview);

  const channels = [
    {
      href: `mailto:${SITE_INFO.email}`,
      icon: <MailIcon />,
      title: 'البريد الإلكتروني',
      sub: <span className="ltr">{SITE_INFO.email}</span>,
      external: false,
    },
    {
      href: SITE_INFO.social.instagram,
      icon: <InstagramIcon />,
      title: 'إنستقرام',
      sub: <span className="ltr">@aldiaaroastery</span>,
      external: true,
    },
    {
      href: SITE_INFO.social.facebook,
      icon: <FacebookIcon />,
      title: 'فيسبوك',
      sub: 'صفحة الضياء الرسمية',
      external: true,
    },
    {
      href: SITE_INFO.social.snapchat,
      icon: <SnapchatIcon />,
      title: 'سناب شات',
      sub: <span className="ltr">@aldiaaroastery</span>,
      external: true,
    },
  ];

  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-shell on-dark">
          <div className="contact-grid">
            <div>
              <span className="eyebrow" data-reveal="true">
                تواصل واطلب
              </span>
              <h2
                className="display contact-title delay-08"
                id="contact-title"
                data-reveal="true"
              >
                طلبك على بُعد <em>رسالة واحدة</em>
              </h2>
              <p className="lead contact-lead delay-12" data-reveal="true">
                راسلنا على واتساب لطلب الأصناف أو السؤال عن الأسعار والعروض، أو تواصل
                معنا عبر البريد ومنصاتنا.
              </p>

              <a
                className="wa-big delay-16"
                href={buildWhatsAppUrl('مرحباً الضياء، أودّ الطلب.')}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="true"
              >
                <span className="ic">
                  <WhatsAppIcon width={26} height={26} />
                </span>
                <span className="ltr">{SITE_INFO.whatsapp.display}</span>
              </a>

              <div className="channels">
                {channels.map((ch, idx) => (
                  <a
                    key={ch.title}
                    className={`channel ${
                      idx === 0
                        ? 'delay-18'
                        : idx === 1
                        ? 'delay-23'
                        : idx === 2
                        ? 'delay-28'
                        : 'delay-33'
                    }`}
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    data-reveal="true"
                  >
                    <span className="ic">{ch.icon}</span>
                    <span>
                      <b>{ch.title}</b>
                      <span>{ch.sub}</span>
                    </span>
                    <ArrowLeftIcon className="go" width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>

            <form
              className="composer delay-12"
              data-reveal="true"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3>جهّز رسالة طلبك</h3>
              <p>
                اختر الأصناف والفرع، ونجهّز لك الرسالة لترسلها على واتساب بضغطة واحدة.
              </p>

              <label className="field">
                <span>الاسم (اختياري)</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="given-name"
                  placeholder="مثال: سارة"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <div className="field" role="group" aria-labelledby="chips-label">
                <span id="chips-label">الأصناف</span>
                <div className="chips">
                  {PRODUCTS.map((product) => {
                    const isPressed = selected.has(product.id);
                    return (
                      <button
                        key={product.id}
                        type="button"
                        aria-pressed={isPressed}
                        onClick={() => onToggle(product.id)}
                      >
                        {isPressed ? <CheckIcon /> : <PlusIcon />}
                        {product.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="field">
                <span>الفرع الأقرب</span>
                <select
                  value={branchId}
                  onChange={(e) => onBranchChange(e.target.value)}
                >
                  <option value="">بدون تحديد</option>
                  {BRANCHES.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.note ? `${branch.name} (${branch.note})` : branch.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>ملاحظات (الكمية، وقت الاستلام...)</span>
                <textarea
                  name="notes"
                  placeholder="مثال: نصف كيلو من كل صنف، استلام بعد العصر"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>

              <div className="preview" aria-live="polite">
                <small>معاينة الرسالة</small>
                {messagePreview}
              </div>

              <a
                className="btn"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                أرسل الطلب عبر واتساب
              </a>

              <p className="hint">
                تُفتح المحادثة في واتساب، ولا تُحفظ أي بيانات على هذا الموقع.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
