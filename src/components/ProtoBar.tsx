import { useEffect, useState } from 'react';
import { SITE_INFO } from '../data/aldiaaData';
import { CloseIcon, SparkleIcon } from './Icons';

export function ProtoBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('proto-bar') === 'closed') {
        setVisible(false);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  if (!visible) {
    return null;
  }

  const handleClose = () => {
    try {
      sessionStorage.setItem('proto-bar', 'closed');
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  return (
    <div className="proto-bar" role="note" aria-label="تنويه النموذج الأولي">
      <div className="container">
        <span className="tag">
          <SparkleIcon width={11} height={11} />
          نموذج أولي
        </span>
        <span className="msg">
          تصميم مقترح لموقع {SITE_INFO.name}، معروض على إدارة الشركة، وليس الموقع الرسمي المعتمد.
        </span>
        <span className="by">
          تصميم وتطوير
          <img
            src={SITE_INFO.assets.designerMark}
            alt="شعار المصمم"
            width={22}
            height={22}
          />
        </span>
      </div>
      <button
        type="button"
        className="close"
        aria-label="إخفاء التنويه"
        onClick={handleClose}
      >
        <CloseIcon width={16} height={16} />
      </button>
    </div>
  );
}
