import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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

/* ===== Mini scene illustrations (one per experiment) ===== */
/* Each is a small playful scene drawn directly in SVG, not a flat icon. */
type SceneProps = { bg: string };

function S_Create({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <circle cx="170" cy="22" r="14" fill="#FFD79A" />
      <rect x="30" y="32" width="110" height="78" rx="8" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.2"/>
      <path d="M36 96 L66 64 L86 84 L106 70 L134 102 Z" fill="#FFB07A"/>
      <circle cx="58" cy="52" r="6" fill="#FF6B5A"/>
      <rect x="120" y="92" width="46" height="20" rx="10" fill="#fff" stroke="#2A1F18" strokeWidth="2"/>
      <rect x="126" y="98" width="12" height="8" rx="2" fill="#FB6A1E"/>
      <rect x="142" y="98" width="12" height="8" rx="2" fill="#5BD0B4"/>
    </svg>
  );
}
function S_Edit({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="34" y="28" width="86" height="68" rx="6" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.2" transform="rotate(-6 77 62)"/>
      <circle cx="64" cy="50" r="6" fill="#FFB454"/>
      <path d="M48 80 L66 62 L82 78 L98 70" stroke="#2A1F18" strokeWidth="2" fill="none" transform="rotate(-6 77 62)"/>
      <path d="M120 96 L160 56 L172 68 L132 108 Z" fill="#5BD0B4" stroke="#2A1F18" strokeWidth="2"/>
      <path d="M158 54 L172 40 L186 54 L172 68 Z" fill="#FB6A1E" stroke="#2A1F18" strokeWidth="2"/>
      <path d="M120 108 L132 108 L120 120 Z" fill="#2A1F18"/>
      <circle cx="40" cy="22" r="3" fill="#FF6B5A"/><circle cx="50" cy="18" r="2" fill="#5BD0B4"/><circle cx="60" cy="22" r="2" fill="#FFB454"/>
    </svg>
  );
}
function S_Extract({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="40" y="24" width="58" height="80" rx="6" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.2" transform="rotate(-8 69 64)"/>
      <line x1="46" y1="46" x2="92" y2="38" stroke="#C8553D" strokeWidth="2.4" transform="rotate(-8 69 64)"/>
      <line x1="46" y1="58" x2="88" y2="50" stroke="#C8553D" strokeWidth="2.4" transform="rotate(-8 69 64)"/>
      <line x1="46" y1="70" x2="80" y2="62" stroke="#C8553D" strokeWidth="2.4" transform="rotate(-8 69 64)"/>
      <rect x="110" y="38" width="64" height="68" rx="10" fill="#26323B" stroke="#2A1F18" strokeWidth="2.2"/>
      <circle cx="142" cy="56" r="14" fill="none" stroke="#46D6AE" strokeWidth="2.4"/>
      <path d="M152 66 L168 80" stroke="#46D6AE" strokeWidth="2.6"/>
      <text x="142" y="98" textAnchor="middle" fontFamily="Fredoka,system-ui" fontSize="11" fontWeight="700" fill="#46D6AE">abc</text>
    </svg>
  );
}
function S_Poem({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="44" y="22" width="100" height="86" rx="6" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.2"/>
      <line x1="54" y1="40" x2="118" y2="40" stroke="#3D7068" strokeWidth="2.2"/>
      <line x1="54" y1="54" x2="132" y2="54" stroke="#3D7068" strokeWidth="2.2"/>
      <line x1="54" y1="68" x2="108" y2="68" stroke="#3D7068" strokeWidth="2.2"/>
      <line x1="54" y1="82" x2="124" y2="82" stroke="#3D7068" strokeWidth="2.2"/>
      <path d="M150 30 q12 -8 18 6 q4 14 -10 18 q-8 -2 -8 -10 z" fill="#5BD0B4" stroke="#2A1F18" strokeWidth="2"/>
      <path d="M152 50 L168 36" stroke="#2A1F18" strokeWidth="1.6"/>
    </svg>
  );
}
function S_Haiku({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <circle cx="44" cy="32" r="14" fill="#FFD79A"/>
      <path d="M0 96 q40 -20 80 0 q40 20 80 0 q20 -10 40 0 L200 130 L0 130 Z" fill="#6B8E4E"/>
      <path d="M0 108 q50 -10 100 0 q50 10 100 0 L200 130 L0 130 Z" fill="#4A6B36"/>
      <path d="M110 70 q10 -30 30 -10 q14 14 -4 28" fill="none" stroke="#2A1F18" strokeWidth="2"/>
      <ellipse cx="118" cy="72" rx="4" ry="6" fill="#9CCB7E"/>
      <ellipse cx="132" cy="64" rx="4" ry="6" fill="#9CCB7E"/>
      <ellipse cx="142" cy="78" rx="4" ry="6" fill="#9CCB7E"/>
    </svg>
  );
}
function S_Joke({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <circle cx="100" cy="68" r="38" fill="#FFD261" stroke="#2A1F18" strokeWidth="2.4"/>
      <circle cx="86" cy="60" r="3.5" fill="#2A1F18"/>
      <circle cx="114" cy="60" r="3.5" fill="#2A1F18"/>
      <path d="M82 76 q18 18 36 0 q-18 8 -36 0 z" fill="#fff" stroke="#2A1F18" strokeWidth="2"/>
      <path d="M82 76 q18 18 36 0" fill="none" stroke="#2A1F18" strokeWidth="2"/>
      <path d="M40 30 L48 38 M52 24 L56 32 M160 26 L154 34 M168 34 L160 40" stroke="#FB6A1E" strokeWidth="2.4" strokeLinecap="round"/>
    </svg>
  );
}
function S_Comic({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="22" y="20" width="74" height="44" rx="4" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.2"/>
      <rect x="104" y="20" width="74" height="44" rx="4" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.2"/>
      <rect x="22" y="72" width="156" height="40" rx="4" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.2"/>
      <path d="M34 30 q14 -8 24 0 L60 42 L54 38 Z" fill="#fff" stroke="#2A1F18" strokeWidth="1.6"/>
      <path d="M124 32 q18 -8 30 4 L150 50 L144 44 Z" fill="#fff" stroke="#2A1F18" strokeWidth="1.6"/>
      <circle cx="42" cy="52" r="6" fill="#FFB454"/>
      <circle cx="140" cy="52" r="6" fill="#5BD0B4"/>
      <path d="M40 88 q24 -12 48 0 q24 12 48 0" stroke="#2A1F18" strokeWidth="1.8" fill="none"/>
    </svg>
  );
}
function S_Twist({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="86" y="34" width="28" height="46" rx="14" fill="#FB6A1E" stroke="#2A1F18" strokeWidth="2.4"/>
      <path d="M70 70 a30 30 0 0 0 60 0" fill="none" stroke="#2A1F18" strokeWidth="2.4"/>
      <line x1="100" y1="98" x2="100" y2="110" stroke="#2A1F18" strokeWidth="2.4"/>
      <line x1="84" y1="110" x2="116" y2="110" stroke="#2A1F18" strokeWidth="2.4"/>
      <path d="M30 56 q10 -8 0 -16 M30 76 q14 -10 0 -22 M30 96 q18 -14 0 -28" stroke="#3D5A6C" strokeWidth="2.2" fill="none"/>
      <path d="M170 56 q-10 -8 0 -16 M170 76 q-14 -10 0 -22 M170 96 q-18 -14 0 -28" stroke="#3D5A6C" strokeWidth="2.2" fill="none"/>
    </svg>
  );
}
function S_Hear({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <path d="M40 56 L62 56 L92 32 V100 L62 76 L40 76 Z" fill="#5BD0B4" stroke="#2A1F18" strokeWidth="2.4"/>
      <path d="M108 44 q14 14 0 44" fill="none" stroke="#2A1F18" strokeWidth="2.4"/>
      <path d="M124 32 q22 22 0 68" fill="none" stroke="#2A1F18" strokeWidth="2.4"/>
      <path d="M140 22 q30 30 0 88" fill="none" stroke="#FB6A1E" strokeWidth="2.6"/>
    </svg>
  );
}
function S_Phrases({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <circle cx="100" cy="66" r="36" fill="#A8D7C9" stroke="#2A1F18" strokeWidth="2.4"/>
      <ellipse cx="100" cy="66" rx="14" ry="36" fill="none" stroke="#2A1F18" strokeWidth="1.6"/>
      <line x1="64" y1="66" x2="136" y2="66" stroke="#2A1F18" strokeWidth="1.6"/>
      <path d="M40 30 q16 -6 24 4 L60 44 L54 42 Z" fill="#fff" stroke="#2A1F18" strokeWidth="1.8"/>
      <text x="52" y="38" fontFamily="Fredoka,system-ui" fontSize="9" fontWeight="700" fill="#2A1F18">Hi</text>
      <path d="M158 96 q-16 -6 -24 4 L138 110 L144 108 Z" fill="#fff" stroke="#2A1F18" strokeWidth="1.8"/>
      <text x="146" y="106" fontFamily="Fredoka,system-ui" fontSize="9" fontWeight="700" fill="#2A1F18">你好</text>
    </svg>
  );
}
function S_News({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="30" y="22" width="140" height="86" rx="6" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.4"/>
      <rect x="40" y="32" width="58" height="40" rx="3" fill="#9C6B3F"/>
      <circle cx="60" cy="50" r="8" fill="#FFD79A"/>
      <path d="M44 70 q14 -10 26 0 q14 8 28 -2" stroke="#FFD79A" strokeWidth="2.4" fill="none"/>
      <line x1="106" y1="36" x2="160" y2="36" stroke="#2A1F18" strokeWidth="2.2"/>
      <line x1="106" y1="48" x2="158" y2="48" stroke="#2A1F18" strokeWidth="1.6"/>
      <line x1="106" y1="56" x2="152" y2="56" stroke="#2A1F18" strokeWidth="1.6"/>
      <line x1="106" y1="64" x2="156" y2="64" stroke="#2A1F18" strokeWidth="1.6"/>
      <line x1="40" y1="84" x2="160" y2="84" stroke="#2A1F18" strokeWidth="1.6"/>
      <line x1="40" y1="94" x2="140" y2="94" stroke="#2A1F18" strokeWidth="1.6"/>
    </svg>
  );
}
function S_Riddle({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <circle cx="100" cy="62" r="36" fill="#A04545" stroke="#2A1F18" strokeWidth="2.4"/>
      <path d="M88 54 a14 14 0 0 1 24 8 c0 8 -12 8 -12 18" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round"/>
      <circle cx="100" cy="92" r="3.4" fill="#fff"/>
      <path d="M40 30 L48 38 M152 30 L144 38 M40 100 L48 92 M152 100 L144 92" stroke="#FFB454" strokeWidth="2.4" strokeLinecap="round"/>
    </svg>
  );
}
function S_Faf({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="30" y="38" width="62" height="60" rx="6" fill="#6B5B95" stroke="#2A1F18" strokeWidth="2.4" transform="rotate(-6 61 68)"/>
      <text x="61" y="78" textAnchor="middle" fontFamily="Fredoka,system-ui" fontSize="22" fontWeight="700" fill="#fff" transform="rotate(-6 61 68)">✓</text>
      <rect x="108" y="38" width="62" height="60" rx="6" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.4" transform="rotate(6 139 68)"/>
      <text x="139" y="78" textAnchor="middle" fontFamily="Fredoka,system-ui" fontSize="22" fontWeight="700" fill="#A04545" transform="rotate(6 139 68)">✗</text>
    </svg>
  );
}
function S_Finish({ bg }: SceneProps) {
  return (
    <svg className="ex-scene" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ background: bg }}>
      <rect x="34" y="34" width="132" height="62" rx="8" fill="#FFF6EC" stroke="#2A1F18" strokeWidth="2.4"/>
      <line x1="44" y1="52" x2="120" y2="52" stroke="#7A6B4F" strokeWidth="2.2"/>
      <line x1="44" y1="64" x2="138" y2="64" stroke="#7A6B4F" strokeWidth="2.2"/>
      <line x1="44" y1="76" x2="100" y2="76" stroke="#7A6B4F" strokeWidth="2.2"/>
      <rect x="104" y="72" width="2" height="10" fill="#FB6A1E">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      <circle cx="155" cy="78" r="2" fill="#7A6B4F"/>
      <circle cx="162" cy="78" r="2" fill="#7A6B4F"/>
    </svg>
  );
}

/* ===== Data ===== */
type Cat = "picture" | "words" | "voice" | "surprise";

type Item = {
  id: string;
  title: string;
  sub: string;
  Scene: (p: SceneProps) => JSX.Element;
  bg: string;
};

const SECTIONS: Record<Cat, { tag: string; title: string; sub: string; rail: string; items: Item[] }> = {
  picture: {
    tag: "Picture Lab",
    title: "Make a picture",
    sub: "Paint with words, remix a photo, or pull text from a snap.",
    rail: "#C8553D",
    items: [
      { id: "create",  title: "Create",       sub: "Describe anything — watch the AI paint it.",   Scene: S_Create,  bg: "#FBE5D8" },
      { id: "edit",    title: "Edit",         sub: "Upload a photo or drawing and transform it.",  Scene: S_Edit,    bg: "#F8D6CE" },
      { id: "extract", title: "Extract text", sub: "Snap a picture and pull the words inside.",    Scene: S_Extract, bg: "#F2E0DA" },
    ],
  },
  words: {
    tag: "Word Play",
    title: "Play with words",
    sub: "Poems, haiku, jokes and comic strips — written together.",
    rail: "#3D7068",
    items: [
      { id: "poem",   title: "Poem",        sub: "A playful poem about anything you like.",    Scene: S_Poem,  bg: "#E2EDE9" },
      { id: "haiku",  title: "Haiku",       sub: "Tiny three-line poems — 5, 7, 5.",           Scene: S_Haiku, bg: "#E8EFD9" },
      { id: "joke",   title: "Jokes",       sub: "Silly jokes that'll make you laugh.",        Scene: S_Joke,  bg: "#FBEFD3" },
      { id: "comic",  title: "Comic strip", sub: "A short comic with speech bubbles.",         Scene: S_Comic, bg: "#F2E5EE" },
    ],
  },
  voice: {
    tag: "Sound Zone",
    title: "Listen & speak",
    sub: "Train your ear, your tongue, and meet voices from around the world.",
    rail: "#3D5A6C",
    items: [
      { id: "twist",   title: "Tongue Twister", sub: "Say it right, fast — pronunciation challenge.", Scene: S_Twist,   bg: "#E5ECF1" },
      { id: "hear",    title: "Hear It Spoken", sub: "Type a word or phrase, hear it spoken aloud.",  Scene: S_Hear,    bg: "#DEEAEF" },
      { id: "phrases", title: "Common Phrases", sub: "Everyday phrases in many languages.",           Scene: S_Phrases, bg: "#E0EBE6" },
      { id: "news",    title: "Kidz News",      sub: "Today's news, told friendly for kids.",         Scene: S_News,    bg: "#F2E6D8" },
    ],
  },
  surprise: {
    tag: "Surprise Me",
    title: "Curious challenges",
    sub: "Little prompts that twist your brain in a happy way.",
    rail: "#A04545",
    items: [
      { id: "riddle", title: "Riddle Me",           sub: "Guess before the timer runs out.",            Scene: S_Riddle, bg: "#F2DDDD" },
      { id: "faf",    title: "Fact or Fiction?",    sub: "Real fact or a clever made-up one?",          Scene: S_Faf,    bg: "#E5E0EE" },
      { id: "finish", title: "Finish the Sentence", sub: "We start, you finish — story unfolds.",       Scene: S_Finish, bg: "#EFEAD9" },
    ],
  },
};

const TABS: { id: Cat; label: string; emoji: string }[] = [
  { id: "picture",  label: "Picture",  emoji: "🎨" },
  { id: "words",    label: "Words",    emoji: "✏️" },
  { id: "voice",    label: "Voice",    emoji: "🎙" },
  { id: "surprise", label: "Surprise", emoji: "✨" },
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
              <span className="ex-tab-emoji" aria-hidden="true">{t.emoji}</span>
              <span className="ex-tab-label">{t.label}</span>
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
                <item.Scene bg={item.bg} />
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

/* tabs */
.ex-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.ex-tab{
  display:flex;align-items:center;gap:10px;
  background:#fffdf9;border:1px solid var(--line);border-radius:16px;
  padding:12px 16px;cursor:pointer;font-family:inherit;color:var(--ink-soft);
  box-shadow:var(--shadow-sm);
  transition:transform .2s,border-color .2s,color .2s,background .2s;
  text-align:left;position:relative;overflow:hidden;
}
.ex-tab:hover{transform:translateY(-2px);color:var(--ink);border-color:var(--orange-2)}
.ex-tab.is-on{background:#fff;color:var(--ink);border-color:transparent;box-shadow:0 14px 26px -16px color-mix(in oklab,var(--rail) 70%,transparent),var(--shadow-sm)}
.ex-tab.is-on::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--rail)}
.ex-tab-emoji{font-size:1.3rem;flex-shrink:0;filter:saturate(.9)}
.ex-tab-label{flex:1;font-family:var(--font-display);font-weight:600;font-size:.98rem;letter-spacing:-.01em}
.ex-tab-count{font-family:var(--font-display);font-weight:600;font-size:.72rem;background:var(--cream-2);color:var(--orange-deep);padding:3px 9px;border-radius:999px}
.ex-tab.is-on .ex-tab-count{background:color-mix(in oklab,var(--rail) 14%,#fff);color:var(--rail)}

/* section strip */
.ex-sec-strip{
  display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:center;
  padding:0 4px;
}
.ex-sec-tag{font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--rail);margin-bottom:2px}
.ex-sec-title{font-size:1.4rem;color:var(--ink)}
.ex-sec-sub{font-size:.88rem;color:var(--ink-soft);margin:0;text-align:right;max-width:32em;justify-self:end}

/* tile grid — matches home page direction cards */
.ex-grid{display:grid;gap:16px}
.ex-grid-3{grid-template-columns:repeat(3,1fr)}
.ex-grid-4{grid-template-columns:repeat(4,1fr)}
.ex-tile{
  display:flex;flex-direction:column;background:#fffdf9;border:1px solid var(--line);
  border-radius:18px;overflow:hidden;box-shadow:var(--shadow-sm);
  text-decoration:none;color:inherit;cursor:pointer;text-align:left;font:inherit;padding:0;
  transition:transform .22s,box-shadow .22s,border-color .22s;
}
.ex-tile:hover{transform:translateY(-3px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.ex-tile-media{position:relative;width:100%;overflow:hidden;display:block;aspect-ratio:5/3}
.ex-scene{width:100%;height:100%;display:block}
.ex-tile-body{flex:1;padding:14px 16px 16px;display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.ex-tile-body > div{min-width:0;flex:1}
.ex-tile-title{font-family:var(--font-display);font-weight:700;font-size:1.08rem;color:var(--ink);line-height:1.2}
.ex-tile-sub{font-size:.8rem;color:var(--ink-soft);margin:4px 0 0;line-height:1.4}
.ex-tile-arrow{flex-shrink:0;width:30px;height:30px;border-radius:50%;background:#fff;border:1px solid var(--line);color:var(--orange-deep);display:inline-flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);transition:transform .2s,background .2s}
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
