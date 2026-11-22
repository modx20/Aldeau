import { MARQUEE_ITEMS } from '../data/aldiaaData';
import { SparkleIcon } from './Icons';

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="band-group" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="contents">
          <span>{item}</span>
          <SparkleIcon />
        </span>
      ))}
    </div>
  );
}

export function MarqueeBand() {
  return (
    <div className="band" role="presentation">
      <div className="band-track">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
