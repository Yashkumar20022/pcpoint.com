import "./Footer.css";
import roundLogo from "../../assets/pcpoint-logo-round.svg";

export default function Footer({ t }) {
  // fallback for potential encoding issues: prefer t.copy if valid otherwise use hardcoded unicode string
  const copyText = (typeof t.copy === 'string' && !/\?{2,}/.test(t.copy))
    ? t.copy
    : "© ??.??.????? ????????? ????????? | MKCL ?????? ??????? ?????";

  return (
    <footer>
      <div className="footer-top wrap">
        <div className="footer-left">
          <img src={roundLogo} alt="PC Point" className="footer-round" />
          <div className="footer-info">
            <div className="footer-name">PC-Point Computer Education</div>
            <div className="footer-tag">{t.h1}</div>
          </div>
        </div>

        <div className="footer-contacts">
          <h4>{t.conT}</h4>
          <p>{t.con[0]}: {t.owner}</p>
          <p>{t.con[1]}: <a href="tel:+918055219979">80552 19979</a>, <a href="tel:+919765979404">97659 79404</a></p>
          <p>{t.con[2]}: <a href="mailto:54210105@mkcl.org">54210105@mkcl.org</a></p>
        </div>

        <div className="footer-centres">
          <h4>{t.cenT}</h4>
          {t.cen.map((c) => <p key={c}>{c}</p>)}
        </div>
      </div>

      <div className="soc wrap">
        <a href="https://instagram.com/pcpointcomputer1" target="_blank" rel="noreferrer" className="soc-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <linearGradient id="ig" x1="0" x2="1"><stop offset="0" stopColor="#f58529"/><stop offset="0.5" stopColor="#dd2a7b"/><stop offset="1" stopColor="#515bd4"/></linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)" />
            <circle cx="12" cy="12" r="3.2" fill="#fff" />
            <circle cx="17.5" cy="6.5" r="0.9" fill="#fff" />
          </svg>
          <span>Instagram</span>
        </a>

        <a href="https://facebook.com/pcpointcomputer1" target="_blank" rel="noreferrer" className="soc-link">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <rect width="24" height="24" rx="4" fill="#1877F2" />
            <path d="M15 9.5h-1.4c-.2 0-.6.1-.6.6V11h2l-.3 2h-1.7v6h-2.2v-6H9.9v-2h1.5v-1.4c0-1.6.9-2.6 2.4-2.6.7 0 1.5.1 1.8.2v2z" fill="#fff" />
          </svg>
          <span>Facebook</span>
        </a>

        <a href="https://youtube.com/@PcPointComputer" target="_blank" rel="noreferrer" className="soc-link">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <rect width="24" height="24" rx="4" fill="#FF0000" />
            <path d="M10 8l6 4-6 4V8z" fill="#fff" />
          </svg>
          <span>YouTube</span>
        </a>
      </div>

      <div className="wrap footer-copy">{copyText}</div>
    </footer>
  );
}
