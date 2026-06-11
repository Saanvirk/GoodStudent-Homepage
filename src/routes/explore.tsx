import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useMemo, useState } from "react";
import {
  Home,
  Pencil,
  Wrench,
  Globe,
  ChevronsUpDown,
  User,
  Settings,
  LogOut,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Good Student" },
      { name: "description", content: "A playful menu of AI experiments — paint pictures, play with words, hear voices, and try curious challenges." },
      { property: "og:title", content: "Explore — Good Student" },
      { property: "og:description", content: "Paint pictures, play with words, hear voices and try curious challenges." },
    ],
  }),
  component: ExplorePage,
});

/* ===== Logo (same as other pages) ===== */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ex-lg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#E04E07" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="16" fill="url(#ex-lg-grad)" />
      <path d="M28 11 C26.5 7 32 6 29 2" fill="none" stroke="#FFF7EF" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="29" cy="2.5" r="2.2" fill="#FFF7EF" />
      <rect x="10" y="11" width="36" height="32" rx="14" fill="#FFF7EF" />
      <rect x="14" y="17" width="28" height="22" rx="9" fill="#222F38" />
      <circle cx="22" cy="28" r="3.4" fill="#fff" />
      <circle cx="22.7" cy="28.6" r="1.6" fill="#222F38" />
      <circle cx="34" cy="28" r="3.4" fill="#fff" />
      <circle cx="33.3" cy="28.6" r="1.6" fill="#222F38" />
      <circle cx="22" cy="28" r="5.6" fill="none" stroke="#46D6AE" strokeWidth="1.7" />
      <circle cx="34" cy="28" r="5.6" fill="none" stroke="#46D6AE" strokeWidth="1.7" />
      <path d="M27.5 28 q.5 -1.7 1 0" fill="none" stroke="#46D6AE" strokeWidth="1.7" />
      <ellipse cx="17" cy="35" rx="2.4" ry="1.3" fill="#FF9A57" opacity=".7" />
      <ellipse cx="39" cy="35" rx="2.4" ry="1.3" fill="#FF9A57" opacity=".7" />
    </svg>
  );
}

/* ===== Mascot ===== */
function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 246" className={`ex-ms ${className}`} aria-hidden="true">
      <ellipse className="sh" cx="110" cy="234" rx="54" ry="7" />
      <rect className="bf st" x="88" y="188" width="14" height="36" rx="7" />
      <rect className="bf st" x="118" y="188" width="14" height="36" rx="7" />
      <ellipse className="bf st" cx="95" cy="226" rx="13" ry="6" />
      <ellipse className="bf st" cx="125" cy="226" rx="13" ry="6" />
      <g><rect className="bf st" x="50" y="138" width="14" height="46" rx="7" transform="rotate(14 57 161)" /><circle className="bf st" cx="52" cy="184" r="10" /></g>
      <g><rect className="bf st" x="156" y="138" width="14" height="46" rx="7" transform="rotate(-14 163 161)" /><circle className="bf st" cx="168" cy="184" r="10" /></g>
      <rect className="bf st" x="66" y="118" width="88" height="82" rx="30" />
      <rect className="scr" x="85" y="138" width="50" height="36" rx="11" />
      <text className="scrt" x="110" y="162" textAnchor="middle">{"</>"}</text>
      <rect className="bf st" x="104" y="110" width="12" height="12" rx="3" />
      <path className="st" d="M110 36 C108 24 118 22 113 12" fill="none" strokeLinecap="round" />
      <circle className="ant" cx="112" cy="10" r="7" />
      <rect className="bf st" x="56" y="34" width="108" height="92" rx="40" />
      <circle className="ac" cx="56" cy="82" r="9" />
      <circle className="ac" cx="164" cy="82" r="9" />
      <rect className="fc" x="68" y="50" width="84" height="62" rx="26" />
      <circle className="ew" cx="93" cy="80" r="11" />
      <circle className="ep" cx="96" cy="82" r="5" />
      <circle className="ew" cx="127" cy="80" r="11" />
      <circle className="ep" cx="124" cy="82" r="5" />
      <circle className="gl" cx="93" cy="80" r="15" />
      <circle className="gl" cx="127" cy="80" r="15" />
      <path className="gl" d="M108 78 q1 -3 4 0" />
      <ellipse className="bl" cx="80" cy="98" rx="7" ry="4" />
      <ellipse className="bl" cx="140" cy="98" rx="7" ry="4" />
      <ellipse className="mo" cx="110" cy="100" rx="6" ry="5" />
    </svg>
  );
}

/* ===== Mascot tile scene =====
 * Every tile uses the same mascot for brand consistency, paired with a small
 * themed prop and a subtle hand-drawn pattern in the background. */

type PropKey =
  | "brush" | "wand" | "scan"
  | "scroll" | "leaf" | "laugh" | "panels"
  | "twister" | "waves" | "globe" | "news"
  | "qmark" | "checkx" | "ellipsis";

type CatIconKey = "palette" | "pencil" | "mic" | "spark";

type SceneProps = { bg: string; accent: string };

function PatternDefs() {
  return (
    <defs>
      <pattern id="ex-pat-dot" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.1" fill="currentColor" opacity=".18" />
      </pattern>
      <pattern id="ex-pat-wave" width="28" height="14" patternUnits="userSpaceOnUse">
        <path d="M0 7 q7 -6 14 0 t14 0" fill="none" stroke="currentColor" strokeWidth="1.1" opacity=".22" />
      </pattern>
      <pattern id="ex-pat-cross" width="18" height="18" patternUnits="userSpaceOnUse">
        <path d="M9 5v8M5 9h8" stroke="currentColor" strokeWidth="1" opacity=".22" />
      </pattern>
    </defs>
  );
}

/* The mascot, scaled to fit inside the tile scene. Uses the .ex-ms theme classes. */
function MascotInScene({ x, y, scale = 0.42 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse className="sh" cx="110" cy="234" rx="54" ry="7" />
      <rect className="bf st" x="88" y="188" width="14" height="36" rx="7" />
      <rect className="bf st" x="118" y="188" width="14" height="36" rx="7" />
      <ellipse className="bf st" cx="95" cy="226" rx="13" ry="6" />
      <ellipse className="bf st" cx="125" cy="226" rx="13" ry="6" />
      <g><rect className="bf st" x="50" y="138" width="14" height="46" rx="7" transform="rotate(14 57 161)" /><circle className="bf st" cx="52" cy="184" r="10" /></g>
      <g><rect className="bf st" x="156" y="138" width="14" height="46" rx="7" transform="rotate(-14 163 161)" /><circle className="bf st" cx="168" cy="184" r="10" /></g>
      <rect className="bf st" x="66" y="118" width="88" height="82" rx="30" />
      <rect className="scr" x="85" y="138" width="50" height="36" rx="11" />
      <text className="scrt" x="110" y="162" textAnchor="middle">{"</>"}</text>
      <rect className="bf st" x="104" y="110" width="12" height="12" rx="3" />
      <path className="st" d="M110 36 C108 24 118 22 113 12" fill="none" strokeLinecap="round" />
      <circle className="ant" cx="112" cy="10" r="7" />
      <rect className="bf st" x="56" y="34" width="108" height="92" rx="40" />
      <circle className="ac" cx="56" cy="82" r="9" />
      <circle className="ac" cx="164" cy="82" r="9" />
      <rect className="fc" x="68" y="50" width="84" height="62" rx="26" />
      <circle className="ew" cx="93" cy="80" r="11" />
      <circle className="ep" cx="96" cy="82" r="5" />
      <circle className="ew" cx="127" cy="80" r="11" />
      <circle className="ep" cx="124" cy="82" r="5" />
      <circle className="gl" cx="93" cy="80" r="15" />
      <circle className="gl" cx="127" cy="80" r="15" />
      <path className="gl" d="M108 78 q1 -3 4 0" />
      <ellipse className="bl" cx="80" cy="98" rx="7" ry="4" />
      <ellipse className="bl" cx="140" cy="98" rx="7" ry="4" />
      <ellipse className="mo" cx="110" cy="100" rx="6" ry="5" />
    </g>
  );
}

/* Themed prop drawn next to the mascot. Coordinates relative to a 260x180 viewBox. */
function Prop({ k, accent }: { k: PropKey; accent: string }) {
  const ink = "#2A1F18";
  switch (k) {
    case "brush":
      return (
        <g>
          <rect x="32" y="44" width="76" height="56" rx="6" fill="#FFF6EC" stroke={ink} strokeWidth="2.2"/>
          <path d="M38 92 L60 70 L74 84 L92 72 L102 92 Z" fill={accent} opacity=".85"/>
          <circle cx="58" cy="58" r="4.5" fill="#FF6B5A"/>
          <g transform="rotate(28 36 132)">
            <rect x="22" y="128" width="44" height="6" rx="3" fill={ink}/>
            <path d="M66 128 q12 -2 18 4 q-6 8 -18 6 z" fill={accent} stroke={ink} strokeWidth="1.6"/>
          </g>
        </g>
      );
    case "wand":
      return (
        <g>
          <rect x="28" y="40" width="78" height="58" rx="6" fill="#FFF6EC" stroke={ink} strokeWidth="2.2" transform="rotate(-5 67 69)"/>
          <circle cx="56" cy="60" r="6" fill="#FFB454"/>
          <path d="M40 88 L60 70 L78 86 L96 76" stroke={ink} strokeWidth="1.8" fill="none" transform="rotate(-5 67 69)"/>
          <g transform="rotate(28 30 130)">
            <rect x="14" y="126" width="42" height="6" rx="3" fill={ink}/>
            <path d="M56 122 L72 116 L66 132 Z" fill={accent} stroke={ink} strokeWidth="1.6"/>
          </g>
          <path d="M84 124 l4 4 M92 118 l3 3 M86 134 l3 -3" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      );
    case "scan":
      return (
        <g>
          <rect x="28" y="36" width="64" height="80" rx="6" fill="#FFF6EC" stroke={ink} strokeWidth="2.2"/>
          <line x1="36" y1="54" x2="84" y2="54" stroke={accent} strokeWidth="2.2"/>
          <line x1="36" y1="66" x2="80" y2="66" stroke={accent} strokeWidth="2.2"/>
          <line x1="36" y1="78" x2="72" y2="78" stroke={accent} strokeWidth="2.2"/>
          <line x1="36" y1="90" x2="78" y2="90" stroke={accent} strokeWidth="2.2"/>
          <rect x="22" y="68" width="78" height="3" rx="1.5" fill="#FB6A1E" opacity=".85"/>
        </g>
      );
    case "scroll":
      return (
        <g>
          <path d="M28 40 q0 -8 8 -8 h60 q8 0 8 8 v52 q0 8 -8 8 h-60 q-8 0 -8 -8 z" fill="#FFF6EC" stroke={ink} strokeWidth="2.2"/>
          <line x1="38" y1="50" x2="92" y2="50" stroke={accent} strokeWidth="2"/>
          <line x1="38" y1="60" x2="96" y2="60" stroke={accent} strokeWidth="2"/>
          <line x1="38" y1="70" x2="86" y2="70" stroke={accent} strokeWidth="2"/>
          <line x1="38" y1="80" x2="90" y2="80" stroke={accent} strokeWidth="2"/>
          <g transform="rotate(34 40 124)">
            <path d="M18 122 L62 122 L64 128 L20 128 Z" fill="#FFB454" stroke={ink} strokeWidth="1.6"/>
            <path d="M62 122 L72 116 L76 124 L66 130 L64 128 Z" fill={accent} stroke={ink} strokeWidth="1.6"/>
            <path d="M72 116 L76 110 L80 118 L76 124 Z" fill={ink}/>
          </g>
        </g>
      );
    case "leaf":
      return (
        <g>
          <circle cx="58" cy="56" r="22" fill="#FFD79A"/>
          <path d="M20 102 q22 -10 44 0 q22 10 44 0 L108 132 L20 132 Z" fill={accent} opacity=".55"/>
          <path d="M28 110 q22 -8 44 0 q22 8 44 0 L116 132 L28 132 Z" fill={accent}/>
          <path d="M88 70 q12 -16 28 -4 q12 12 -4 24" fill="#9CCB7E" stroke={ink} strokeWidth="1.8"/>
          <path d="M104 78 L120 64" stroke={ink} strokeWidth="1.6"/>
        </g>
      );
    case "laugh":
      return (
        <g>
          <circle cx="62" cy="64" r="28" fill="#FFD261" stroke={ink} strokeWidth="2.2"/>
          <circle cx="52" cy="58" r="3" fill={ink}/>
          <circle cx="74" cy="58" r="3" fill={ink}/>
          <path d="M50 72 q12 14 26 0 q-12 6 -26 0 z" fill="#fff" stroke={ink} strokeWidth="1.8"/>
          <path d="M22 30 l6 6 M30 22 l4 8 M104 22 l-4 8 M108 32 l-6 6" stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
        </g>
      );
    case "panels":
      return (
        <g>
          <rect x="22" y="40" width="42" height="34" rx="4" fill="#FFF6EC" stroke={ink} strokeWidth="2"/>
          <rect x="70" y="40" width="42" height="34" rx="4" fill="#FFF6EC" stroke={ink} strokeWidth="2"/>
          <rect x="22" y="82" width="90" height="32" rx="4" fill="#FFF6EC" stroke={ink} strokeWidth="2"/>
          <path d="M30 48 q10 -6 18 0 L46 58 L42 56 Z" fill="#fff" stroke={ink} strokeWidth="1.4"/>
          <path d="M82 48 q12 -6 22 2 L98 60 L94 58 Z" fill="#fff" stroke={ink} strokeWidth="1.4"/>
          <path d="M30 96 q20 -10 40 0 q20 10 40 0" stroke={accent} strokeWidth="2" fill="none"/>
        </g>
      );
    case "twister":
      return (
        <g>
          <path d="M28 50 q24 -14 50 0 t-50 18 q24 -14 50 0 t-50 18" stroke={accent} strokeWidth="3.2" fill="none" strokeLinecap="round"/>
          <circle cx="32" cy="46" r="3.4" fill={accent}/>
          <circle cx="100" cy="106" r="3.4" fill={accent}/>
        </g>
      );
    case "waves":
      return (
        <g>
          <path d="M22 50 L42 50 L70 26 V104 L42 78 L22 78 Z" fill={accent} stroke={ink} strokeWidth="2.2"/>
          <path d="M84 38 q12 14 0 44" fill="none" stroke={ink} strokeWidth="2.2"/>
          <path d="M98 28 q18 22 0 64" fill="none" stroke={ink} strokeWidth="2.2"/>
          <path d="M112 18 q26 32 0 84" fill="none" stroke="#FB6A1E" strokeWidth="2.4"/>
        </g>
      );
    case "globe":
      return (
        <g>
          <circle cx="62" cy="68" r="34" fill={accent} opacity=".55" stroke={ink} strokeWidth="2.2"/>
          <ellipse cx="62" cy="68" rx="13" ry="34" fill="none" stroke={ink} strokeWidth="1.5"/>
          <ellipse cx="62" cy="68" rx="34" ry="13" fill="none" stroke={ink} strokeWidth="1.5"/>
          <line x1="28" y1="68" x2="96" y2="68" stroke={ink} strokeWidth="1.5"/>
          <path d="M14 28 q14 -4 22 4 L34 42 L28 40 Z" fill="#fff" stroke={ink} strokeWidth="1.6"/>
          <text x="22" y="36" fontFamily="Fredoka,system-ui" fontSize="9" fontWeight="700" fill={ink}>Hi</text>
        </g>
      );
    case "news":
      return (
        <g>
          <rect x="20" y="32" width="92" height="80" rx="5" fill="#FFF6EC" stroke={ink} strokeWidth="2.2"/>
          <rect x="28" y="40" width="36" height="28" rx="3" fill={accent}/>
          <circle cx="46" cy="54" r="6" fill="#FFD79A"/>
          <line x1="70" y1="44" x2="104" y2="44" stroke={ink} strokeWidth="2"/>
          <line x1="70" y1="54" x2="100" y2="54" stroke={ink} strokeWidth="1.4"/>
          <line x1="70" y1="62" x2="104" y2="62" stroke={ink} strokeWidth="1.4"/>
          <line x1="28" y1="80" x2="104" y2="80" stroke={ink} strokeWidth="1.4"/>
          <line x1="28" y1="90" x2="92" y2="90" stroke={ink} strokeWidth="1.4"/>
          <line x1="28" y1="100" x2="100" y2="100" stroke={ink} strokeWidth="1.4"/>
        </g>
      );
    case "qmark":
      return (
        <g>
          <circle cx="62" cy="64" r="32" fill={accent} stroke={ink} strokeWidth="2.4"/>
          <path d="M50 56 a12 12 0 0 1 22 6 c0 8 -10 8 -10 16" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round"/>
          <circle cx="62" cy="86" r="3" fill="#fff"/>
          <path d="M16 30 L24 38 M104 30 L96 38 M16 100 L24 92 M104 100 L96 92" stroke="#FFB454" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
      );
    case "checkx":
      return (
        <g>
          <rect x="20" y="44" width="46" height="50" rx="5" fill={accent} stroke={ink} strokeWidth="2.2" transform="rotate(-7 43 69)"/>
          <text x="43" y="78" textAnchor="middle" fontFamily="Fredoka,system-ui" fontSize="20" fontWeight="700" fill="#fff" transform="rotate(-7 43 69)">✓</text>
          <rect x="70" y="44" width="46" height="50" rx="5" fill="#FFF6EC" stroke={ink} strokeWidth="2.2" transform="rotate(7 93 69)"/>
          <text x="93" y="78" textAnchor="middle" fontFamily="Fredoka,system-ui" fontSize="20" fontWeight="700" fill={accent} transform="rotate(7 93 69)">✗</text>
        </g>
      );
    case "ellipsis":
      return (
        <g>
          <rect x="20" y="44" width="100" height="56" rx="6" fill="#FFF6EC" stroke={ink} strokeWidth="2.2"/>
          <line x1="30" y1="58" x2="100" y2="58" stroke={accent} strokeWidth="2"/>
          <line x1="30" y1="70" x2="110" y2="70" stroke={accent} strokeWidth="2"/>
          <line x1="30" y1="82" x2="78" y2="82" stroke={accent} strokeWidth="2"/>
          <rect x="82" y="78" width="2.2" height="10" fill="#FB6A1E">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
          </rect>
          <circle cx="94" cy="84" r="2" fill={accent}/>
          <circle cx="102" cy="84" r="2" fill={accent}/>
          <circle cx="110" cy="84" r="2" fill={accent}/>
        </g>
      );
  }
}

function MascotScene({ bg, accent, prop }: SceneProps & { prop: PropKey }) {
  return (
    <svg className="ex-scene" viewBox="0 0 260 180" preserveAspectRatio="xMidYMid slice" style={{ background: bg, color: accent }}>
      <PatternDefs />
      {/* soft backdrop pattern */}
      <rect x="0" y="0" width="260" height="180" fill="url(#ex-pat-dot)" />
      {/* prop on the left */}
      <g transform="translate(8 14)">
        <Prop k={prop} accent={accent} />
      </g>
      {/* mascot on the right — sized so arms & feet stay inside the frame */}
      <MascotInScene x={122} y={22} scale={0.6} />
    </svg>
  );
}

/* ===== Category tab icons — custom drawn, not emoji ===== */
function CatIcon({ k, color }: { k: CatIconKey; color: string }) {
  // Chunky cartoon illustrations — black outlines, off-white shape highlights,
  // tiny faces for personality. Tuned for ~56px tab plates.
  const ink = "#2A1F18";
  switch (k) {
    case "palette":
      return (
        <svg viewBox="0 0 48 48" width="38" height="38" aria-hidden="true">
          {/* drop shadow */}
          <ellipse cx="24" cy="42" rx="14" ry="2" fill={ink} opacity=".12"/>
          {/* palette body */}
          <path d="M24 7C14 7 6 13 6 22c0 6 5 10 11 10 2 0 3-1 3-3 0-2 1-3 3-3h5a9 9 0 0 0 9-9c0-6-5-10-13-10z"
                fill={color} stroke={ink} strokeWidth="2.2" strokeLinejoin="round"/>
          {/* highlight */}
          <path d="M11 16c2-3 6-5 10-5" stroke="#FFF6EC" strokeWidth="2" strokeLinecap="round" opacity=".5" fill="none"/>
          {/* paint dabs */}
          <circle cx="13" cy="22" r="2.6" fill="#FFF6EC" stroke={ink} strokeWidth="1.4"/>
          <circle cx="20" cy="14" r="2.6" fill="#FFD261" stroke={ink} strokeWidth="1.4"/>
          <circle cx="28" cy="14" r="2.6" fill="#5BD0B4" stroke={ink} strokeWidth="1.4"/>
          <circle cx="32" cy="21" r="2.6" fill="#A06CC9" stroke={ink} strokeWidth="1.4"/>
          {/* brush */}
          <g transform="rotate(38 32 36)">
            <rect x="22" y="34" width="16" height="4" rx="2" fill="#A86A3A" stroke={ink} strokeWidth="1.6"/>
            <rect x="36" y="33.5" width="3" height="5" fill="#E7C58A" stroke={ink} strokeWidth="1.4"/>
            <path d="M39 33 l8 1 l-8 5 z" fill={color} stroke={ink} strokeWidth="1.6" strokeLinejoin="round"/>
          </g>
        </svg>
      );
    case "pencil":
      return (
        <svg viewBox="0 0 48 48" width="38" height="38" aria-hidden="true">
          <ellipse cx="24" cy="44" rx="14" ry="2" fill={ink} opacity=".12"/>
          {/* paper with face */}
          <path d="M9 10 q0 -3 3 -3 h18 q3 0 3 3 v28 q0 3 -3 3 h-18 q-3 0 -3 -3 z"
                fill="#FFF6EC" stroke={ink} strokeWidth="2.2"/>
          <line x1="13" y1="17" x2="28" y2="17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          <line x1="13" y1="22" x2="26" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".7"/>
          {/* tiny smile on the paper */}
          <circle cx="17" cy="30" r="1.2" fill={ink}/>
          <circle cx="25" cy="30" r="1.2" fill={ink}/>
          <path d="M17 33 q4 3 8 0" stroke={ink} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          {/* pencil */}
          <g transform="rotate(38 36 22)">
            <rect x="22" y="19" width="20" height="6.5" rx="1.6" fill={color} stroke={ink} strokeWidth="1.8"/>
            <rect x="22" y="19" width="5" height="6.5" fill="#FFD261" stroke={ink} strokeWidth="1.8"/>
            <rect x="20" y="20" width="2.5" height="4.5" rx=".8" fill="#E07A5F" stroke={ink} strokeWidth="1.4"/>
            <path d="M42 19 l5 3.2 l-5 3.3 z" fill="#F2C48C" stroke={ink} strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M46 21.5 l1.6 1 l-1.6 1 z" fill={ink}/>
          </g>
          {/* sparkle */}
          <path d="M40 8 l1.4 3.2 l3.4 .4 l-2.4 2.2 l.6 3.2 l-3 -1.7 l-3 1.7 l.6 -3.2 l-2.4 -2.2 l3.4 -.4 z"
                fill="#FFD261" stroke={ink} strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 48 48" width="38" height="38" aria-hidden="true">
          <ellipse cx="24" cy="44" rx="14" ry="2" fill={ink} opacity=".12"/>
          {/* mic body */}
          <rect x="17" y="6" width="14" height="22" rx="7" fill={color} stroke={ink} strokeWidth="2.2"/>
          <path d="M19 9 q5 -3 10 0" stroke="#FFF6EC" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity=".55"/>
          {/* face on mic */}
          <circle cx="21" cy="17" r="1.4" fill={ink}/>
          <circle cx="27" cy="17" r="1.4" fill={ink}/>
          <path d="M21 21 q3 3 6 0" stroke={ink} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          <circle cx="21" cy="17" r=".5" fill="#fff"/>
          <circle cx="27" cy="17" r=".5" fill="#fff"/>
          {/* stand */}
          <path d="M10 22 a14 14 0 0 0 28 0" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="24" y1="36" x2="24" y2="41" stroke={ink} strokeWidth="2.4" strokeLinecap="round"/>
          <line x1="17" y1="41" x2="31" y2="41" stroke={ink} strokeWidth="2.4" strokeLinecap="round"/>
          {/* sound waves */}
          <path d="M38 14 q4 6 0 14" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          <path d="M43 9 q6 11 0 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".55"/>
          <path d="M10 14 q-4 6 0 14" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 48 48" width="38" height="38" aria-hidden="true">
          <ellipse cx="24" cy="44" rx="14" ry="2" fill={ink} opacity=".12"/>
          {/* gift box */}
          <rect x="8" y="20" width="32" height="22" rx="2.5" fill="#FFF6EC" stroke={ink} strokeWidth="2.2"/>
          <rect x="7" y="16" width="34" height="7" rx="2" fill={color} stroke={ink} strokeWidth="2.2"/>
          <rect x="21" y="16" width="6" height="26" fill={color} stroke={ink} strokeWidth="2"/>
          {/* tiny face on the box */}
          <circle cx="15" cy="32" r="1.2" fill={ink}/>
          <circle cx="33" cy="32" r="1.2" fill={ink}/>
          <path d="M16 36 q8 4 16 0" stroke={ink} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          {/* bow */}
          <path d="M24 16 c-5 -7 -12 -2 -7 3 z" fill={color} stroke={ink} strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M24 16 c5 -7 12 -2 7 3 z" fill={color} stroke={ink} strokeWidth="1.8" strokeLinejoin="round"/>
          <circle cx="24" cy="16" r="2" fill="#FFD261" stroke={ink} strokeWidth="1.4"/>
          {/* sparkles */}
          <path d="M41 7 l1.2 2.8 l2.8 1.2 l-2.8 1.2 l-1.2 2.8 l-1.2 -2.8 l-2.8 -1.2 l2.8 -1.2 z"
                fill="#FFD261" stroke={ink} strokeWidth="1.1" strokeLinejoin="round"/>
          <circle cx="6" cy="10" r="2" fill="#5BD0B4" stroke={ink} strokeWidth="1.2"/>
        </svg>
      );
  }
}


/* ===== Data ===== */
type Cat = "picture" | "words" | "voice" | "surprise";

type Item = {
  id: string;
  title: string;
  sub: string;
  prop: PropKey;
  bg: string;
  accent: string;
};

const SECTIONS: Record<Cat, { tag: string; title: string; sub: string; rail: string; items: Item[] }> = {
  picture: {
    tag: "Picture Lab",
    title: "Make a picture",
    sub: "Paint with words, remix a photo, or pull text from a snap.",
    rail: "#C8553D",
    items: [
      { id: "create",  title: "Create",       sub: "Describe anything — watch the AI paint it.",   prop: "brush", bg: "#FBE5D8", accent: "#C8553D" },
      { id: "edit",    title: "Edit",         sub: "Upload a photo or drawing and transform it.",  prop: "wand",  bg: "#F8D6CE", accent: "#A65A4B" },
      { id: "extract", title: "Extract text", sub: "Snap a picture and pull the words inside.",    prop: "scan",  bg: "#F2E0DA", accent: "#7A4A5A" },
    ],
  },
  words: {
    tag: "Word Play",
    title: "Play with words",
    sub: "Poems, haiku, jokes and comic strips — written together.",
    rail: "#3D7068",
    items: [
      { id: "poem",  title: "Poem",        sub: "A playful poem about anything you like.", prop: "scroll", bg: "#E2EDE9", accent: "#3D7068" },
      { id: "haiku", title: "Haiku",       sub: "Tiny three-line poems — 5, 7, 5.",        prop: "leaf",   bg: "#E8EFD9", accent: "#6B8E4E" },
      { id: "joke",  title: "Jokes",       sub: "Silly jokes that'll make you laugh.",     prop: "laugh",  bg: "#FBEFD3", accent: "#B8893A" },
      { id: "comic", title: "Comic strip", sub: "A short comic with speech bubbles.",      prop: "panels", bg: "#F2E5EE", accent: "#8C5E7A" },
    ],
  },
  voice: {
    tag: "Sound Zone",
    title: "Listen & speak",
    sub: "Train your ear, your tongue, and meet voices from around the world.",
    rail: "#3D5A6C",
    items: [
      { id: "twist",   title: "Tongue Twister", sub: "Say it right, fast — pronunciation challenge.", prop: "twister", bg: "#E5ECF1", accent: "#3D5A6C" },
      { id: "hear",    title: "Hear It Spoken", sub: "Type a word or phrase, hear it spoken aloud.",  prop: "waves",   bg: "#DEEAEF", accent: "#506B7A" },
      { id: "phrases", title: "Common Phrases", sub: "Everyday phrases in many languages.",           prop: "globe",   bg: "#E0EBE6", accent: "#4A5D52" },
      { id: "news",    title: "Kidz News",      sub: "Today's news, told friendly for kids.",         prop: "news",    bg: "#F2E6D8", accent: "#9C6B3F" },
    ],
  },
  surprise: {
    tag: "Surprise Me",
    title: "Curious challenges",
    sub: "Little prompts that twist your brain in a happy way.",
    rail: "#A04545",
    items: [
      { id: "riddle", title: "Riddle Me",           sub: "Guess before the timer runs out.",      prop: "qmark",    bg: "#F2DDDD", accent: "#A04545" },
      { id: "faf",    title: "Fact or Fiction?",    sub: "Real fact or a clever made-up one?",    prop: "checkx",   bg: "#E5E0EE", accent: "#6B5B95" },
      { id: "finish", title: "Finish the Sentence", sub: "We start, you finish — story unfolds.", prop: "ellipsis", bg: "#EFEAD9", accent: "#7A6B4F" },
    ],
  },
};

const TABS: { id: Cat; label: string; sub: string; icon: CatIconKey }[] = [
  { id: "picture",  label: "Picture Lab",   sub: "Create, edit, extract", icon: "palette" },
  { id: "words",    label: "Word Play",     sub: "Poems, jokes, comics",  icon: "pencil"  },
  { id: "voice",    label: "Sound Zone",    sub: "Listen, speak, learn",  icon: "mic"     },
  { id: "surprise", label: "Surprise Me",   sub: "Riddles & challenges",  icon: "spark"   },
];

/* ===== Page ===== */
function ExplorePage() {
  const [active, setActive] = useState("explore");
  const [userOpen, setUserOpen] = useState(false);
  const [tab, setTab] = useState<Cat>("picture");

  const nav = [
    { id: "home",  label: "Home",  icon: Home,   to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil, to: "/tutors" as const },
    { id: "tools", label: "Tools", icon: Wrench, to: "/tools" as const },
    { id: "explore", label: "Explore", icon: Globe, to: "/explore" as const },
  ];

  const section = useMemo(() => SECTIONS[tab], [tab]);
  const totalCount = useMemo(
    () => (Object.values(SECTIONS) as { items: Item[] }[]).reduce((n, s) => n + s.items.length, 0),
    [],
  );

  return (
    <div className="ex-root">
      <aside className="ex-side">
        <Link to="/" className="ex-brand">
          <LogoMark className="ex-brand-mark" />
          <span className="ex-brand-name">Good Student</span>
        </Link>

        <nav className="ex-nav">
          {nav.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            const cls = `ex-nav-item${isActive ? " is-active" : ""}`;
            return (
              <Link key={n.id} to={n.to} className={cls} onClick={() => setActive(n.id)}>
                <Icon size={17} /> <span>{n.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ex-side-foot">
          {userOpen && (
            <div className="ex-user-card">
              <div className="ex-user-head">
                <div className="ex-ava">SK</div>
                <div>
                  <div className="ex-user-name">Saanvi K</div>
                  <div className="ex-user-mail">sk@goodstudent.app</div>
                </div>
              </div>
              <div className="ex-user-actions">
                <button><User size={15} /> My profile</button>
                <button><Settings size={15} /> Settings</button>
              </div>
              <button className="ex-signout"><LogOut size={15} /> Sign out</button>
            </div>
          )}
          <button className="ex-user-switch" onClick={() => setUserOpen((v) => !v)}>
            <div className="ex-ava ex-ava-sm">SK</div>
            <div className="ex-user-switch-meta">
              <div className="ex-user-name">Saanvi K</div>
              <div className="ex-user-mail">Student · Yr 6</div>
            </div>
            <ChevronsUpDown size={15} />
          </button>
        </div>
      </aside>

      <main className="ex-main">
        {/* Hero — same shape as home page */}
        <header className="ex-hero">
          <div className="ex-hero-text">
            <div className="ex-eyebrow"><span className="ex-dot" /> Explore AI</div>
            <h1 className="ex-title">
              A little menu of <span className="ex-hl">curious things</span>.
            </h1>
            <p className="ex-subtitle">
              {totalCount} mini experiments to try — paint, write, listen, or be surprised.
            </p>
          </div>
          <div className="ex-mascot-card">
            <div className="ex-mascot-bubble">
              <b>Where to today?</b>
              <span>Try a haiku, or maybe a riddle?</span>
            </div>
            <div className="ex-mascot-art"><Mascot /></div>
          </div>
        </header>

        {/* Tabs */}
        <div className="ex-tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`ex-tab${tab === t.id ? " is-on" : ""}`}
              onClick={() => setTab(t.id)}
              style={{ ["--rail" as never]: SECTIONS[t.id].rail }}
            >
              <span className="ex-tab-ic" aria-hidden="true">
                <CatIcon k={t.icon} color={SECTIONS[t.id].rail} />
              </span>
              <span className="ex-tab-meta">
                <span className="ex-tab-label">{t.label}</span>
                <span className="ex-tab-sub">{t.sub}</span>
              </span>
              <span className="ex-tab-count">{SECTIONS[t.id].items.length}</span>
            </button>
          ))}
        </div>

        {/* Section header strip */}
        <div className="ex-sec-strip" style={{ ["--rail" as never]: section.rail }}>
          <div>
            <div className="ex-sec-tag">{section.tag}</div>
            <h2 className="ex-sec-title">{section.title}</h2>
          </div>
          <p className="ex-sec-sub">{section.sub}</p>
        </div>

        {/* Tiles — same anatomy as home page direction cards */}
        <div className={`ex-grid ex-grid-${section.items.length}`}>
          {section.items.map((item) => (
            <button key={item.id} className="ex-tile">
              <div className="ex-tile-media">
                <MascotScene bg={item.bg} accent={item.accent} prop={item.prop} />
              </div>
              <div className="ex-tile-body">
                <div>
                  <h3 className="ex-tile-title">{item.title}</h3>
                  <p className="ex-tile-sub">{item.sub}</p>
                </div>
                <span className="ex-tile-arrow"><ArrowRight size={16} /></span>
              </div>
            </button>
          ))}
        </div>
      </main>

      <style>{css}</style>
    </div>
  );
}

const css = `
.ex-root{
  --orange:#FB6A1E;--orange-deep:#E04E07;--orange-2:#FF8A3D;--amber:#FFB454;
  --cream:#FFF7EF;--cream-2:#FFEEDD;--paper:#FFFCF8;
  --ink:#311C10;--ink-soft:#7A6453;--ink-faint:#A8978A;
  --teal:#13A483;--line:#F0DEC9;
  --shadow-sm:0 4px 16px -6px rgba(120,60,20,.22);
  --shadow:0 22px 50px -24px rgba(176,72,12,.42);
  --font-display:'Fredoka',system-ui,sans-serif;
  --font-body:'DM Sans',system-ui,sans-serif;
  font-family:var(--font-body);color:var(--ink);background:var(--cream);
  min-height:100vh;display:flex;-webkit-font-smoothing:antialiased;line-height:1.55;
}
.ex-root *{box-sizing:border-box}
.ex-root::before{
  content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55;
  background:radial-gradient(50% 42% at 88% -4%,rgba(255,138,61,.28),transparent 60%),
             radial-gradient(40% 38% at -4% 12%,rgba(255,180,84,.26),transparent 60%);
}
.ex-root h1,.ex-root h2,.ex-root h3{font-family:var(--font-display);font-weight:600;letter-spacing:-.015em;line-height:1.1;margin:0}

/* sidebar (same as other pages) */
.ex-side{width:248px;flex-shrink:0;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;padding:22px 18px;background:rgba(255,247,239,.7);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-right:1px solid var(--line);z-index:5}
.ex-brand{display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:32px;text-decoration:none}
.ex-brand-mark{width:38px;height:38px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.ex-brand:hover .ex-brand-mark{transform:rotate(-10deg) scale(1.08)}
.ex-brand-name{font-family:var(--font-display);font-weight:700;font-size:1.18rem;letter-spacing:-.02em;background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.ex-nav{display:flex;flex-direction:column;gap:3px;flex:1}
.ex-nav-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;font-family:var(--font-body);font-weight:500;font-size:.94rem;color:var(--ink-soft);background:transparent;border:none;cursor:pointer;text-align:left;text-decoration:none;transition:background .18s,color .18s}
.ex-nav-item:hover{background:rgba(255,255,255,.7);color:var(--ink)}
.ex-nav-item.is-active{background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm);font-weight:600}
.ex-nav-item.is-active svg{color:var(--orange)}
.ex-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.ex-user-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:10px}
.ex-user-head{display:flex;align-items:center;gap:10px}
.ex-ava{width:36px;height:36px;border-radius:11px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;font-weight:600;font-family:var(--font-display);display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;box-shadow:var(--shadow-sm)}
.ex-ava-sm{width:34px;height:34px;font-size:.76rem;border-radius:10px}
.ex-user-name{font-family:var(--font-display);font-weight:600;font-size:.9rem;color:var(--ink)}
.ex-user-mail{font-size:.76rem;color:var(--ink-soft)}
.ex-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px}
.ex-user-actions button,.ex-signout{display:flex;align-items:center;gap:10px;background:transparent;border:none;cursor:pointer;padding:8px 6px;border-radius:8px;font-size:.86rem;color:var(--ink-soft);text-align:left;font-family:var(--font-body)}
.ex-user-actions button:hover,.ex-signout:hover{background:var(--cream);color:var(--ink)}
.ex-signout{border-top:1px solid var(--line);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.ex-user-switch{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-sm);transition:transform .15s,box-shadow .15s,border-color .15s;font-family:inherit}
.ex-user-switch:hover{transform:translateY(-1px);border-color:var(--orange-2)}
.ex-user-switch-meta{flex:1;text-align:left;min-width:0;overflow:hidden}
.ex-user-switch-meta .ex-user-name,.ex-user-switch-meta .ex-user-mail{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ex-user-switch>svg{color:var(--ink-faint);flex-shrink:0}

/* main */
.ex-main{flex:1;min-width:0;padding:26px 48px 36px;position:relative;z-index:1;display:flex;flex-direction:column;gap:18px}

/* hero — mirrors home page */
.ex-hero{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.ex-hero-text{max-width:640px}
.ex-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:10px}
.ex-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:ex-ping 2s infinite}
@keyframes ex-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.ex-title{font-size:clamp(1.9rem,3.2vw,2.6rem)}
.ex-hl{color:var(--orange-deep);position:relative;display:inline-block}
.ex-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.ex-subtitle{margin-top:8px;color:var(--ink-soft);font-size:.98rem;max-width:38em}

.ex-mascot-card{position:relative;display:flex;align-items:flex-end;gap:10px;flex-shrink:0}
.ex-mascot-art{width:110px;filter:drop-shadow(0 14px 22px rgba(120,40,0,.22));animation:ex-bob 4s ease-in-out infinite}
@keyframes ex-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.ex-mascot-bubble{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:10px 14px;box-shadow:var(--shadow-sm);max-width:180px;margin-bottom:36px}
.ex-mascot-bubble b{font-family:var(--font-display);font-weight:600;color:var(--ink);font-size:.88rem;display:block;margin-bottom:2px}
.ex-mascot-bubble span{font-size:.78rem;color:var(--ink-soft);line-height:1.4}
.ex-mascot-bubble::after{content:"";position:absolute;top:50%;right:-7px;transform:translateY(-50%) rotate(45deg);width:14px;height:14px;background:#fff;border-right:1px solid var(--line);border-top:1px solid var(--line)}
.ex-ms{width:100%;height:auto;display:block}
.ex-ms .sh{fill:rgba(49,28,16,.12)}
.ex-ms .bf{fill:#FFF6EC}
.ex-ms .st{stroke:#EBD2B6;stroke-width:2.2;fill:#FFF6EC}
.ex-ms .scr{fill:#26323B}
.ex-ms .scrt{fill:#46D6AE;font-family:monospace;font-size:17px;font-weight:700}
.ex-ms .ant{fill:var(--orange)}
.ex-ms .ac{fill:#5BD0B4}
.ex-ms .fc{fill:#26323B}
.ex-ms .ep{fill:#1F2A30}
.ex-ms .ew{fill:#fff}
.ex-ms .mo{fill:#FB6A1E}
.ex-ms .gl{fill:none;stroke:#2FB39A;stroke-width:5;stroke-linecap:round}
.ex-ms .bl{fill:#FF9A57;opacity:.7}

/* tabs — taller, two-line, drawn icon */
.ex-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.ex-tab{
  display:flex;align-items:center;gap:16px;
  background:#fffdf9;border:1px solid var(--line);border-radius:22px;
  padding:22px 26px;min-height:116px;cursor:pointer;font-family:inherit;color:var(--ink-soft);
  box-shadow:var(--shadow-sm);
  transition:transform .2s,border-color .2s,color .2s,background .2s,box-shadow .25s;
  text-align:left;position:relative;overflow:hidden;
}
.ex-tab:hover{transform:translateY(-2px);color:var(--ink);border-color:color-mix(in oklab,var(--rail) 35%,var(--line))}
.ex-tab.is-on{background:#fff;color:var(--ink);border-color:transparent;box-shadow:0 22px 36px -20px color-mix(in oklab,var(--rail) 70%,transparent),var(--shadow-sm)}
.ex-tab.is-on::before{content:"";position:absolute;left:0;top:0;bottom:0;width:6px;background:var(--rail)}
.ex-tab-ic{width:56px;height:56px;border-radius:16px;flex-shrink:0;display:grid;place-items:center;background:color-mix(in oklab,var(--rail) 16%,#fff);transition:transform .25s,background .25s}
.ex-tab.is-on .ex-tab-ic{background:color-mix(in oklab,var(--rail) 24%,#fff);transform:rotate(-5deg) scale(1.04)}
.ex-tab-meta{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.2}
.ex-tab-label{font-family:var(--font-display);font-weight:600;font-size:1.08rem;letter-spacing:-.01em;color:var(--ink)}
.ex-tab-sub{font-size:.78rem;color:var(--ink-faint);margin-top:3px}
.ex-tab.is-on .ex-tab-sub{color:var(--rail)}
.ex-tab-count{font-family:var(--font-display);font-weight:700;font-size:.74rem;background:var(--cream-2);color:var(--orange-deep);padding:4px 10px;border-radius:999px;flex-shrink:0}
.ex-tab.is-on .ex-tab-count{background:color-mix(in oklab,var(--rail) 16%,#fff);color:var(--rail)}

/* section strip */
.ex-sec-strip{
  display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:center;
  padding:4px 4px 0;
}
.ex-sec-tag{font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--rail);margin-bottom:2px}
.ex-sec-title{font-size:1.5rem;color:var(--ink)}
.ex-sec-sub{font-size:.9rem;color:var(--ink-soft);margin:0;text-align:right;max-width:32em;justify-self:end}

/* tile grid — taller media so mascot has room */
.ex-grid{display:grid;gap:16px}
.ex-grid-3{grid-template-columns:repeat(3,1fr)}
.ex-grid-4{grid-template-columns:repeat(4,1fr)}
.ex-tile{
  display:flex;flex-direction:column;background:#fffdf9;border:1px solid var(--line);
  border-radius:20px;overflow:hidden;box-shadow:var(--shadow-sm);
  text-decoration:none;color:inherit;cursor:pointer;text-align:left;font:inherit;padding:0;
  transition:transform .22s,box-shadow .22s,border-color .22s;
}
.ex-tile:hover{transform:translateY(-4px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.ex-tile-media{position:relative;width:100%;overflow:hidden;display:block;aspect-ratio:13/9}
.ex-scene{width:100%;height:100%;display:block}
.ex-scene .sh{fill:rgba(49,28,16,.12)}
.ex-scene .bf{fill:#FFF6EC}
.ex-scene .st{stroke:#E2D6BD;stroke-width:2.2;fill:#FFF6EC}
.ex-scene .scr{fill:#26323B}
.ex-scene .scrt{fill:#46D6AE;font-family:monospace;font-size:17px;font-weight:700}
.ex-scene .ant{fill:#FB6A1E}
.ex-scene .ac{fill:#5BD0B4}
.ex-scene .fc{fill:#26323B}
.ex-scene .ep{fill:#1F2A30}
.ex-scene .ew{fill:#fff}
.ex-scene .mo{fill:#FB6A1E}
.ex-scene .gl{fill:none;stroke:#2FB39A;stroke-width:5;stroke-linecap:round}
.ex-scene .bl{fill:#C77E5A;opacity:.5}
.ex-tile-body{flex:1;padding:16px 18px 18px;display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.ex-tile-body > div{min-width:0;flex:1}
.ex-tile-title{font-family:var(--font-display);font-weight:700;font-size:1.12rem;color:var(--ink);line-height:1.2}
.ex-tile-sub{font-size:.84rem;color:var(--ink-soft);margin:4px 0 0;line-height:1.45}
.ex-tile-arrow{flex-shrink:0;width:32px;height:32px;border-radius:50%;background:#fff;border:1px solid var(--line);color:var(--orange-deep);display:inline-flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);transition:transform .2s,background .2s}
.ex-tile:hover .ex-tile-arrow{transform:translateX(4px);background:var(--cream-2)}

@media (max-width:1100px){
  .ex-grid-4{grid-template-columns:repeat(2,1fr)}
  .ex-grid-3{grid-template-columns:repeat(3,1fr)}
}
@media (max-width:960px){
  .ex-main{padding:22px 22px 40px}
  .ex-hero{grid-template-columns:1fr;gap:14px}
  .ex-mascot-card{justify-content:flex-end}
  .ex-mascot-bubble{margin-bottom:24px}
  .ex-tabs{grid-template-columns:repeat(2,1fr)}
  .ex-sec-strip{grid-template-columns:1fr;gap:6px}
  .ex-sec-sub{text-align:left;justify-self:start}
  .ex-grid-3,.ex-grid-4{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:720px){
  .ex-root{flex-direction:column}
  .ex-side{width:100%;height:auto;position:relative;border-right:none;border-bottom:1px solid var(--line);padding:14px 16px}
  .ex-nav{flex-direction:row;flex-wrap:wrap;gap:4px}
  .ex-side-foot{margin-top:12px}
  .ex-grid-3,.ex-grid-4{grid-template-columns:1fr 1fr}
}
`;
