import Reveal from "../Reveal/Reveal";
import { PILLARS } from "../../data/pillars";
import "./Skills.css";

export default function Skills({ t }) {
  return (
    <section className="band">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">{t.skT}</h2>
          <p className="sub">{t.skS}</p>
          <div className="pills">{PILLARS.map((p) => <span key={p}>{p}</span>)}</div>
        </Reveal>
      </div>
    </section>
  );
}
