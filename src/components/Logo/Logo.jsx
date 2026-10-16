import React from "react";

export default function Logo({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 72" role="img" aria-label="PC Point logo">
      <defs>
        <linearGradient id="bg" x1="0" x2="1">
          <stop offset="0%" stopColor="#00c6ff" />
          <stop offset="100%" stopColor="#0072ff" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </radialGradient>
        <filter id="ds" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0b1220" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Icon */}
      <g transform="translate(8,8)">
        <rect x="0" y="0" width="56" height="56" rx="14" fill="url(#bg)" />
        <g filter="url(#ds)">
          <circle cx="34" cy="28" r="18" fill="url(#sun)" />
        </g>
        <text x="34" y="34" fontFamily="Baloo 2, Arial, sans-serif" fontWeight="800" fontSize="14" textAnchor="middle" fill="#fff">PC</text>
      </g>

      {/* Wordmark */}
      <g transform="translate(86,22)">
        <text x="0" y="0" fontFamily="Baloo 2, Arial, sans-serif" fontWeight="800" fontSize="26" fill="#0f1724">PC <tspan fill="#0072ff">Point</tspan></text>
        <text x="0" y="22" fontFamily="Inter, Arial, sans-serif" fontWeight="600" fontSize="12" fill="#6b6f76">Computer Education</text>
      </g>
    </svg>
  );
}
