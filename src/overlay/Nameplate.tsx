import { home } from '../content/portfolio';

export default function Nameplate() {
  return (
    <div className="nameplate interactive">
      <span className="sun-dot" />
      {home.nameplate}
    </div>
  );
}
