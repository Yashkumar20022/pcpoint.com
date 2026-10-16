

import { useState } from "react";
import "./Navbar.css";
import roundLogo from "../../assets/pcpoint-logo-round.svg";

const SECTION_IDS = ["why", "courses", "toppers", "team", "contact"];

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const toggleLang = (e) => {
    e.stopPropagation();
    setLang(lang === "mr" ? "en" : "mr");
  };

  return (
    <>
      <div className="topbar">{t.top}</div>
      <nav>
        <div className="wrap">
          <div className="left-brand">
            <a href="#home" aria-label="Home"><img src={roundLogo} alt="PC Point" className="logo-round" /></a>
          </div>
          <a href="#home" className="logo">{t.brand[0]}<span>{t.brand[1]}</span>{t.brand[2]}</a>
          <button className="menu" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
          <div className={"links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
            {t.nav.map((n, k) => <a key={n} href={"#" + SECTION_IDS[k]}>{n}</a>)}
            <button className="lang" aria-label="Switch language" onClick={toggleLang}>
              <span className={lang === "mr" ? "on" : ""}>मराठी</span>
              <span className={lang === "en" ? "on" : ""}>EN</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
