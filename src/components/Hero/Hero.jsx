import "./Hero.css";

export default function Hero({ t }) {
  return (
    <header className="hero" id="home">
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
      <div className="wrap">
        <div>
          <span className="badge">{t.badge}</span>
          <h1>{t.h1}</h1>
          <div className="mscit">MS-CIT</div>
          <p>{t.hp}</p>
          <div className="cta">
            <a className="btn" href="#contact">{t.c1}</a>
            <a className="btn ghost" href="#courses">{t.c2}</a>
          </div>
        </div>
        <div className="award">
          <div className="medal">25</div>
          <h3>{t.aw}</h3>
          <small>{t.as}</small>
          <div className="stats">
            {t.st.map(([a, b]) => <div key={b}><b>{a}</b><small>{b}</small></div>)}
          </div>
        </div>
      </div>
    </header>
  );
}
