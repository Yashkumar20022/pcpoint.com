import { TOP } from "../../data/toppers";
import "./Marquee.css";

// Scrolling strip with the 99% and 98% topper names. `i` = 0 Marathi, 1 English.
export default function Marquee({ i }) {
  const names = TOP["99"].concat(TOP["98"]).map((n) => n[i]);
  return (
    <div className="marq">
      <div>{[...names, ...names].map((n, k) => <span key={k}>⭐ {n}</span>)}</div>
    </div>
  );
}
