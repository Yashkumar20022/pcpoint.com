import Reveal from "../Reveal/Reveal";
import "./Warning.css";

export default function Warning({ t }) {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="warn">
            <h2>{t.wT}</h2>
            <ul>{t.w.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
