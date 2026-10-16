import { useState } from "react";
import "./styles/global.css";
import { L } from "./data/translations";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Features from "./components/Features/Features";
import Skills from "./components/Skills/Skills";
import Courses from "./components/Courses/Courses";
import Toppers from "./components/Toppers/Toppers";
import Team from "./components/Team/Team";
import Warning from "./components/Warning/Warning";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [lang, setLang] = useState("en"); // "mr" = Marathi, "en" = English
  const t = L[lang];               // all text for the chosen language
  const i = lang === "mr" ? 0 : 1; // index for [marathi, english] name pairs

  return (
    <div lang={lang}>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Marquee i={i} />
      <Features t={t} />
      <Skills t={t} />
      <Courses t={t} />
      <Toppers t={t} i={i} />
      <Team t={t} i={i} />
      <Warning t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
