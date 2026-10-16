import { useState } from "react";
import Reveal from "../Reveal/Reveal";
import "./Contact.css";

const WHATSAPP_NUMBER = "918055219979";

export default function Contact({ t }) {
  const [f, setF] = useState({ name: "", phone: "", course: "MS-CIT", ci: 0 });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = () => {
    if (!f.name.trim() || f.phone.replace(/\D/g, "").length < 10) return alert(t.err);
    const text = t.msg({ ...f, centre: t.centres[f.ci] });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal><h2 className="h2">{t.fT}</h2><p className="sub">{t.fS}</p></Reveal>
        <Reveal>
          <div className="contact">
            <div className="box">
              <label htmlFor="n">{t.name}</label>
              <input id="n" value={f.name} onChange={set("name")} placeholder={t.np} />
              <label htmlFor="p">{t.ph}</label>
              <input id="p" type="tel" value={f.phone} onChange={set("phone")} placeholder={t.pp} />
              <label htmlFor="c">{t.course}</label>
              <select id="c" value={f.course} onChange={set("course")}>
                {t.cs.map(([h]) => <option key={h}>{h}</option>)}
              </select>
              <label htmlFor="k">{t.centre}</label>
              <select id="k" value={f.ci} onChange={(e) => setF({ ...f, ci: +e.target.value })}>
                {t.centres.map((c, k) => <option key={c} value={k}>{c}</option>)}
              </select>
              <button className="btn" onClick={send}>{t.send}</button>
            </div>

            <div className="box info">
              <h3>{t.cenT}</h3>
              {t.cen.map((c) => <p key={c}>{c}</p>)}
              <h3 style={{ marginTop: 20 }}>{t.conT}</h3>
              <p>{t.con[0]}: {t.owner}</p>
              <p>{t.con[1]}: <a href="tel:+918055219979">80552 19979</a>, <a href="tel:+919765979404">97659 79404</a></p>
              <p>{t.con[2]}: <a href="mailto:54210105@mkcl.org">54210105@mkcl.org</a></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
