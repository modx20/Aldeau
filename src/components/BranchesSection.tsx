import { BRANCHES } from '../data/aldiaaData';
import {
  buildBranchOrderMessage,
  buildGoogleMapsBranchUrl,
  buildWhatsAppUrl,
} from '../utils/aldiaa';
import { PinIcon, WhatsAppIcon } from './Icons';

interface BranchesSectionProps {
  activeBranchId: string;
  onSelectBranch: (branchId: string) => void;
}

function SchematicMapSvg() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M20 0H0V20"
            fill="none"
            stroke="rgba(252,249,242,0.05)"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#map-grid)" />
      <g fill="none" stroke="rgba(229,177,69,0.16)" strokeWidth="0.8">
        <path d="M-10 70 C 60 40, 120 90, 190 60 S 330 20, 420 60" />
        <path d="M-10 110 C 70 80, 140 130, 210 100 S 340 70, 420 105" />
        <path d="M-10 160 C 80 130, 150 190, 230 150 S 350 130, 420 160" />
        <path d="M-10 210 C 60 190, 160 240, 240 205 S 350 190, 420 215" />
        <path d="M-10 255 C 90 235, 170 280, 250 250 S 360 240, 420 262" />
      </g>
      <g
        fill="none"
        stroke="rgba(252,249,242,0.12)"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <path d="M30 140 C 120 150, 200 145, 260 130 S 340 90, 390 60" />
        <path d="M150 20 C 170 90, 190 170, 230 290" />
        <path d="M60 260 C 160 220, 250 200, 380 230" />
      </g>
    </svg>
  );
}

export function BranchesSection({
  activeBranchId,
  onSelectBranch,
}: BranchesSectionProps) {
  const activeBranch =
    BRANCHES.find((b) => b.id === activeBranchId) ?? BRANCHES[0];
  const retailBranches = BRANCHES.filter((b) => !b.hq);
  const hqBranch = BRANCHES.find((b) => b.hq);
  const orderedBranches = hqBranch
    ? [...retailBranches, hqBranch]
    : retailBranches;

  return (
    <section
      className="section branches"
      id="branches"
      aria-labelledby="branches-title"
    >
      <div className="container">
        <div className="section-head split">
          <div className="section-head-stack">
            <span className="eyebrow" data-reveal="true">
              فروعنا
            </span>
            <h2 className="display delay-08" id="branches-title" data-reveal="true">
              ثمانية فروع في عمّان، <em>وفرع قريب منك غالباً</em>
            </h2>
          </div>

          <p className="lead delay-12" data-reveal="true">
            اختر الفرع الأقرب إليك لتفتح موقعه على الخرائط، أو أرسل طلبك مباشرة باسم
            الفرع ليجهّزه الفريق.
          </p>
        </div>

        <div className="branches-grid">
          <ul className="branch-list" data-reveal="true">
            {orderedBranches.map((branch, idx) => (
              <li key={branch.id} className={branch.hq ? 'hq' : undefined}>
                <button
                  type="button"
                  aria-pressed={activeBranch.id === branch.id}
                  onClick={() => onSelectBranch(branch.id)}
                >
                  <span className="idx">
                    {branch.hq ? <PinIcon width={14} height={14} /> : idx + 1}
                  </span>
                  <span className="nm">
                    {branch.name}
                    {branch.note && <small>{branch.note}</small>}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="map-panel delay-10" data-reveal="true">
            <div className="map-canvas">
              <SchematicMapSvg />
              <span className="map-label">
                <PinIcon width={14} height={14} />
                مخطط توضيحي · المواقع تقريبية
              </span>
              <span className="map-compass" aria-hidden="true">
                ش
              </span>

              {BRANCHES.map((branch) => (
                <button
                  key={branch.id}
                  type="button"
                  className={`pin ${branch.pinClass}${branch.hq ? ' hq' : ''}${
                    branch.id === activeBranch.id ? ' is-active' : ''
                  }`}
                  aria-label={`فرع ${branch.name}`}
                  onClick={() => onSelectBranch(branch.id)}
                >
                  <span className="dot" />
                  <span className="tip">{branch.name}</span>
                </button>
              ))}
            </div>

            <div className="map-card" aria-live="polite">
              <div>
                <h3>
                  {activeBranch.hq
                    ? activeBranch.name
                    : `فرع ${activeBranch.name}`}
                </h3>
                <p>{activeBranch.note ?? 'عمّان، الأردن'}</p>
              </div>
              <div className="acts">
                <a
                  className="btn btn-gold btn-sm"
                  href={buildWhatsAppUrl(
                    buildBranchOrderMessage(activeBranch.name)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon width={18} height={18} />
                  اطلب من الفرع
                </a>
                <a
                  className="btn btn-ghost btn-sm"
                  href={buildGoogleMapsBranchUrl(activeBranch.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PinIcon width={18} height={18} />
                  الخرائط
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
