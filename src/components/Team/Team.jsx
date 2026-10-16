import Reveal from "../Reveal/Reveal";
import { TEAM, RING_COLORS } from "../../data/team";
import "./Team.css";

export default function Team({ t, i }) {
  return (
    <section id="team" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal><h2 className="h2">{t.teT}</h2><p className="sub">{t.teS}</p></Reveal>
        <Reveal>
          <div className="team">
            {TEAM.map((m, k) => {
              const isHead = k === 0;
              const femaleIdx = [7, 8];
              const roleText = isHead
                ? t.dir
                : (femaleIdx.includes(k) ? t.roleFemale : t.roleTeacher);

              return (
                <div className={"mem" + (isHead ? " head" : "")} key={m[0]} style={{ "--c": RING_COLORS[k % 5] }}>
                  <img className="av" src={m[2]} alt={m[i]} loading="lazy" />
                  <b>{m[i]}</b>
                  <div className="role">{roleText}</div>
                  {isHead && <><br /><small>{t.dir}</small></>}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
