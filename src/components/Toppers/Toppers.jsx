import { useState } from "react";
import Reveal from "../Reveal/Reveal";
import { TOP } from "../../data/toppers";
import "./Toppers.css";

export default function Toppers({ t, i }) {
  const [score, setScore] = useState("99");
  return (
    <section id="toppers" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <h2 className="h2">{t.tT}</h2>
          <p className="sub">{t.tS}</p>
          <div className="tabs">
            {Object.keys(TOP).reverse().map((k) => (
              <button key={k} className={"tab" + (score === k ? " on" : "")} onClick={() => setScore(k)}>
                {k}% {t.scorer}
              </button>
            ))}
          </div>
          <div className="tops">
            {TOP[score].map((n) => (
              <div className="top" key={n[0]}><span className="score">{score}</span><b>{n[i]}</b></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
