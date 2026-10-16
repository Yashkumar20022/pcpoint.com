import Reveal from "../Reveal/Reveal";
import "./Features.css";

export default function Features({ t }) {
  return (
    <section id="why">
      <div className="wrap">
        <Reveal><h2 className="h2">{t.whyT}</h2><p className="sub">{t.whyS}</p></Reveal>
        <Reveal>
          <div className="grid">
            {t.why.map(([icon, title, text]) => (
              <div className="card" key={title}>
                <div className="ico">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
