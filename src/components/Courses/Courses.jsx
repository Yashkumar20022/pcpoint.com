import Reveal from "../Reveal/Reveal";
import "./Courses.css";

export default function Courses({ t }) {
  return (
    <section id="courses">
      <div className="wrap">
        <Reveal><h2 className="h2">{t.cT}</h2><p className="sub">{t.cS}</p></Reveal>
        <Reveal>
          <div className="courses">
            {t.cs.map(([name, tag, text], k) => (
              <div className={"course" + (k === 0 ? " main" : "")} key={name}>
                <h3>{name}</h3>
                <p className="tag">{tag}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
