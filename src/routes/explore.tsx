import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Home,
  Pencil,
  Wrench,
  Globe,
  Search,
  ChevronsUpDown,
  User,
  Settings,
  LogOut,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Good Student" },
      { name: "description", content: "A playful menu of AI experiments — make pictures, words, voices and surprises. Pick one and go." },
      { property: "og:title", content: "Explore — Good Student" },
      { property: "og:description", content: "A playful menu of AI experiments — make pictures, words, voices and surprises." },
    ],
  }),
  component: ExplorePage,
});

/* ===== Shared brand mark (same as tools/tutors page) ===== */
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

/* ===== Mascot (same as index/tutors) ===== */
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

/* ===== Data ===== */
type Cat = "picture" | "words" | "voice" | "surprise";

type Item = {
  id: string;
  title: string;
  sub: string;
  glyph: GKey;
  tint: string;
  ink: string;
  verb: string;
};

type GKey =
  | "frame" | "wand" | "scanner"
  | "feather" | "leaf" | "smile" | "panel"
  | "twist" | "speaker" | "phrases" | "news"
  | "riddle" | "faf" | "dots";

const SECTIONS: { id: Cat; title: string; tag: string; sub: string; rail: string; items: Item[] }[] = [
  {
    id: "picture",
    tag: "Picture Lab",
    title: "Make a picture",
    sub: "Paint with words, remix a photo, or pull text out of a snap.",
    rail: "#C8553D",
    items: [
      { id: "create",  title: "Create",       sub: "Describe anything — watch the AI paint it.",     glyph: "frame",   tint: "#C8553D", ink: "#FBEFE8", verb: "Start painting" },
      { id: "edit",    title: "Edit",         sub: "Upload a photo or drawing and transform it.",    glyph: "wand",    tint: "#A65A4B", ink: "#F3E4DF", verb: "Remix a photo" },
      { id: "extract", title: "Extract text", sub: "Snap a picture and pull the words inside.",      glyph: "scanner", tint: "#7A4A5A", ink: "#F0E2E8", verb: "Read a snap" },
    ],
  },
  {
    id: "words",
    tag: "Word Play",
    title: "Play with words",
    sub: "Poems, haiku, jokes and comic strips — written together.",
    rail: "#3D7068",
    items: [
      { id: "poem",   title: "Poem",        sub: "A playful poem about anything you like.",    glyph: "feather", tint: "#3D7068", ink: "#E2EDE9", verb: "Write a poem" },
      { id: "haiku",  title: "Haiku",       sub: "Tiny three-line poems — 5, 7, 5.",           glyph: "leaf",    tint: "#6B8E4E", ink: "#EEF3E6", verb: "Try a haiku" },
      { id: "joke",   title: "Jokes",       sub: "Silly jokes that'll make you laugh.",        glyph: "smile",   tint: "#B8893A", ink: "#F5EBD9", verb: "Tell me one" },
      { id: "comic",  title: "Comic strip", sub: "A short comic with speech bubbles.",         glyph: "panel",   tint: "#8C5E7A", ink: "#F2E8EE", verb: "Draw a strip" },
    ],
  },
  {
    id: "voice",
    tag: "Sound Zone",
    title: "Listen & speak",
    sub: "Train your ear, your tongue, and meet voices from around the world.",
    rail: "#3D5A6C",
    items: [
      { id: "twist",   title: "Tongue Twister",          sub: "Pronunciation challenge — say it right, fast.", glyph: "twist",   tint: "#3D5A6C", ink: "#E8EEF2", verb: "Take the challenge" },
      { id: "hear",    title: "Hear It Spoken",          sub: "Type a word or phrase, hear it spoken aloud.",  glyph: "speaker", tint: "#506B7A", ink: "#E6EEF2", verb: "Play it" },
      { id: "phrases", title: "Common Phrases",          sub: "Everyday phrases in many languages.",           glyph: "phrases", tint: "#4A5D52", ink: "#E5ECE7", verb: "Pick a language" },
      { id: "news",    title: "Kidz News Network",       sub: "Today's news, told friendly for kids.",         glyph: "news",    tint: "#9C6B3F", ink: "#F2E6D8", verb: "Read today" },
    ],
  },
  {
    id: "surprise",
    tag: "Surprise Me",
    title: "Try something curious",
    sub: "Little prompts that twist your brain in a happy way.",
    rail: "#A04545",
    items: [
      { id: "riddle",  title: "Riddle Me",          sub: "A riddle a minute — guess before the timer.",     glyph: "riddle", tint: "#A04545", ink: "#F2E0E0", verb: "Solve a riddle" },
      { id: "faf",     title: "Fact or Fiction?",   sub: "Real fact or a clever made-up one?",              glyph: "faf",    tint: "#6B5B95", ink: "#ECE8F2", verb: "Take a guess" },
      { id: "finish",  title: "Finish the Sentence", sub: "We start, you finish — story unfolds together.", glyph: "dots",   tint: "#7A6B4F", ink: "#EFEAD9", verb: "Keep going" },
    ],
  },
];

/* ===== Glyphs ===== */
function Glyph({ k }: { k: GKey }) {
  const s = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  switch (k) {
    case "frame":   return (<svg viewBox="0 0 32 32" {...s}><rect x="5" y="6" width="22" height="20" rx="2" fill="rgba(255,255,255,.25)"/><circle cx="11" cy="12" r="1.6" fill="currentColor"/><path d="M5 22l6-6 5 5 4-3 7 7"/></svg>);
    case "wand":    return (<svg viewBox="0 0 32 32" {...s}><path d="M6 26l14-14M19 7l2 2M24 4l1 1M26 9l1 1" /><path d="M22 13l3 3" /><circle cx="9" cy="9" r="1.5" fill="currentColor"/><circle cx="27" cy="20" r="1.5" fill="currentColor"/></svg>);
    case "scanner": return (<svg viewBox="0 0 32 32" {...s}><path d="M8 6h12l4 4v16H8z" fill="rgba(255,255,255,.25)"/><path d="M20 6v4h4"/><path d="M12 16h10M12 20h8M12 24h6"/><circle cx="6" cy="14" r="2" fill="currentColor" stroke="none"/></svg>);
    case "feather": return (<svg viewBox="0 0 32 32" {...s}><path d="M6 26l4-1L24 11a5 5 0 0 0-7-7L4 17l-1 8z" fill="rgba(255,255,255,.3)"/><path d="M10 22l6-6M14 18h4M16 14h4"/></svg>);
    case "leaf":    return (<svg viewBox="0 0 32 32" {...s}><path d="M6 26c0-11 6-19 20-20-1 14-9 20-20 20z" fill="rgba(255,255,255,.3)"/><path d="M6 26L20 12"/></svg>);
    case "smile":   return (<svg viewBox="0 0 32 32" {...s}><circle cx="16" cy="16" r="11" fill="rgba(255,255,255,.25)"/><circle cx="12" cy="14" r="1.4" fill="currentColor"/><circle cx="20" cy="14" r="1.4" fill="currentColor"/><path d="M11 19c1.5 2.5 8.5 2.5 10 0"/></svg>);
    case "panel":   return (<svg viewBox="0 0 32 32" {...s}><rect x="4" y="6" width="10" height="9" rx="2" fill="rgba(255,255,255,.25)"/><rect x="16" y="6" width="12" height="9" rx="2" fill="rgba(255,255,255,.25)"/><rect x="4" y="17" width="14" height="9" rx="2" fill="rgba(255,255,255,.25)"/><rect x="20" y="17" width="8" height="9" rx="2" fill="rgba(255,255,255,.25)"/></svg>);
    case "twist":   return (<svg viewBox="0 0 32 32" {...s}><path d="M6 11c4-4 16-4 20 0s-4 4-10 8 4 6-4 6c-6 0-6-4-2-6"/><circle cx="11" cy="9" r="1.4" fill="currentColor"/><circle cx="22" cy="13" r="1.4" fill="currentColor"/></svg>);
    case "speaker": return (<svg viewBox="0 0 32 32" {...s}><path d="M5 12h5l7-5v18l-7-5H5z" fill="rgba(255,255,255,.3)"/><path d="M22 11c2 2 2 8 0 10M25 8c4 3 4 13 0 16"/></svg>);
    case "phrases": return (<svg viewBox="0 0 32 32" {...s}><path d="M5 8h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-6l-5 4v-4H8a3 3 0 0 1-3-3z" fill="rgba(255,255,255,.3)"/><path d="M27 14h-3M27 18h-3M27 22h-3M27 26h-3"/></svg>);
    case "news":    return (<svg viewBox="0 0 32 32" {...s}><rect x="5" y="7" width="22" height="18" rx="2" fill="rgba(255,255,255,.3)"/><path d="M9 12h7v6H9zM18 12h6M18 16h6M9 21h15"/></svg>);
    case "riddle":  return (<svg viewBox="0 0 32 32" {...s}><circle cx="16" cy="14" r="9" fill="rgba(255,255,255,.3)"/><path d="M12 12a4 4 0 0 1 8 0c0 3-4 3-4 6"/><circle cx="16" cy="24" r="1.3" fill="currentColor"/></svg>);
    case "faf":     return (<svg viewBox="0 0 32 32" {...s}><path d="M16 4l3 9h9l-7 5 3 9-8-5-8 5 3-9-7-5h9z" fill="rgba(255,255,255,.3)"/></svg>);
    case "dots":    return (<svg viewBox="0 0 32 32" {...s}><path d="M5 14h22M5 20h14"/><circle cx="23" cy="20" r="1.6" fill="currentColor"/><circle cx="27" cy="20" r="1.6" fill="currentColor"/></svg>);
  }
}

/* ===== Row (the "ticket" — replaces a card) ===== */
function Row({ item, num }: { item: Item; num: string }) {
  return (
    <button className="ex-row">
      <span className="ex-row-num">{num}</span>
      <span className="ex-row-glyph" style={{ background: item.tint, color: item.ink }}>
        <Glyph k={item.glyph} />
      </span>
      <span className="ex-row-text">
        <span className="ex-row-title">{item.title}</span>
        <span className="ex-row-sub">{item.sub}</span>
      </span>
      <span className="ex-row-leader" aria-hidden="true" />
      <span className="ex-row-cta">
        {item.verb} <ArrowUpRight size={14} />
      </span>
    </button>
  );
}

function ExplorePage() {
  const [active, setActive] = useState("explore");
  const [userOpen, setUserOpen] = useState(false);
  const [query, setQuery] = useState("");

  const nav = [
    { id: "home",  label: "Home",  icon: Home,   to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil, to: "/tutors" as const },
    { id: "tools", label: "Tools", icon: Wrench, to: "/tools" as const },
    { id: "explore", label: "Explore", icon: Globe, to: "/explore" as const },
  ];

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTIONS;
    return SECTIONS
      .map((s) => ({ ...s, items: s.items.filter((i) => i.title.toLowerCase().includes(q) || i.sub.toLowerCase().includes(q)) }))
      .filter((s) => s.items.length > 0);
  }, [query]);

  const totalCount = SECTIONS.reduce((n, s) => n + s.items.length, 0);

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
        {/* Hero */}
        <header className="ex-top">
          <div className="ex-top-text">
            <div className="ex-eyebrow"><span className="ex-dot" /> Explore AI</div>
            <h1 className="ex-title">
              A little menu of <span className="ex-hl">curious things</span> to try.
            </h1>
            <p className="ex-subtitle">
              {totalCount} mini experiments — paint pictures, play with words, listen to voices and tease your brain.
            </p>
            <div className="ex-search-wrap">
              <Search size={15} className="ex-search-ic" />
              <input
                className="ex-search"
                placeholder="Search the menu — try ‘haiku’ or ‘riddle’…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="ex-mascot-card">
            <div className="ex-mascot-bubble">
              <b>Where to today?</b>
              <span>Maybe a riddle, or a quick haiku?</span>
            </div>
            <div className="ex-mascot-art"><Mascot /></div>
          </div>
        </header>

        {/* Sections */}
        <div className="ex-menu">
          {filteredSections.map((sec, sIdx) => (
            <section className="ex-sec" key={sec.id} style={{ ["--rail" as never]: sec.rail }}>
              <aside className="ex-sec-aside">
                <span className="ex-sec-tag">{sec.tag}</span>
                <h2 className="ex-sec-title">{sec.title}</h2>
                <p className="ex-sec-sub">{sec.sub}</p>
                <span className="ex-sec-count">{sec.items.length} to try</span>
              </aside>

              <div className="ex-rows">
                {sec.items.map((item, i) => (
                  <Row key={item.id} item={item} num={`${sIdx + 1}.${(i + 1).toString().padStart(2, "0")}`} />
                ))}
              </div>
            </section>
          ))}

          {filteredSections.length === 0 && (
            <div className="ex-empty">
              <Sparkles size={20} />
              <p>Nothing on the menu matches "<b>{query}</b>" — try another word.</p>
            </div>
          )}
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

/* sidebar */
.ex-side{
  width:248px;flex-shrink:0;position:sticky;top:0;height:100vh;
  display:flex;flex-direction:column;padding:22px 18px;
  background:rgba(255,247,239,.7);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-right:1px solid var(--line);z-index:5;
}
.ex-brand{display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:32px;text-decoration:none}
.ex-brand-mark{width:38px;height:38px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.ex-brand:hover .ex-brand-mark{transform:rotate(-10deg) scale(1.08)}
.ex-brand-name{font-family:var(--font-display);font-weight:700;font-size:1.18rem;letter-spacing:-.02em;
  background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.ex-nav{display:flex;flex-direction:column;gap:3px;flex:1}
.ex-nav-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;
  font-family:var(--font-body);font-weight:500;font-size:.94rem;color:var(--ink-soft);
  background:transparent;border:none;cursor:pointer;text-align:left;text-decoration:none;
  transition:background .18s,color .18s;}
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
.ex-main{flex:1;min-width:0;padding:34px 56px 80px;position:relative;z-index:1}

/* Hero */
.ex-top{display:grid;grid-template-columns:1fr auto;gap:36px;align-items:end;margin-bottom:34px}
.ex-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:14px}
.ex-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:ex-ping 2s infinite}
@keyframes ex-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.ex-title{font-size:clamp(2.1rem,3.8vw,3.1rem)}
.ex-hl{color:var(--orange-deep);position:relative;display:inline-block}
.ex-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.ex-subtitle{margin-top:12px;color:var(--ink-soft);font-size:1.02rem;max-width:38em}

.ex-search-wrap{position:relative;display:flex;align-items:center;margin-top:18px;max-width:440px}
.ex-search-ic{position:absolute;left:16px;color:var(--ink-faint);pointer-events:none}
.ex-search{width:100%;background:#fff;border:1px solid var(--line);border-radius:999px;padding:12px 16px 12px 40px;font-family:inherit;font-size:.93rem;color:var(--ink);box-shadow:var(--shadow-sm);outline:none;transition:border-color .15s,box-shadow .15s}
.ex-search:focus{border-color:var(--orange-2);box-shadow:0 0 0 4px rgba(251,106,30,.12),var(--shadow-sm)}

/* mascot card */
.ex-mascot-card{position:relative;display:flex;align-items:flex-end;gap:10px;flex-shrink:0}
.ex-mascot-art{width:118px;filter:drop-shadow(0 14px 22px rgba(120,40,0,.22));animation:ex-bob 4s ease-in-out infinite}
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

/* menu sections — editorial, NOT cards */
.ex-menu{display:flex;flex-direction:column;gap:18px}
.ex-sec{
  position:relative;
  display:grid;grid-template-columns:260px 1fr;gap:32px;
  padding:26px 4px 26px 22px;
  border-top:1px solid var(--line);
}
.ex-sec:first-child{border-top:none;padding-top:6px}
.ex-sec::before{
  content:"";position:absolute;left:0;top:30px;bottom:30px;width:3px;border-radius:3px;
  background:var(--rail);opacity:.85;
}
.ex-sec-aside{position:sticky;top:24px;align-self:start;display:flex;flex-direction:column;gap:8px}
.ex-sec-tag{font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--rail)}
.ex-sec-title{font-size:1.7rem;color:var(--ink)}
.ex-sec-sub{font-size:.9rem;color:var(--ink-soft);max-width:22em;line-height:1.5}
.ex-sec-count{margin-top:6px;font-family:var(--font-display);font-weight:600;font-size:.72rem;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.12em}

.ex-rows{display:flex;flex-direction:column}

/* the "ticket" row — replaces a card */
.ex-row{
  display:grid;
  grid-template-columns:56px 50px 1fr auto auto;
  align-items:center;gap:14px;
  padding:18px 4px;
  border:none;background:transparent;cursor:pointer;
  font-family:inherit;color:inherit;text-align:left;
  border-bottom:1px dashed var(--line);
  transition:transform .25s, background .25s;
  border-radius:14px;
}
.ex-row:last-child{border-bottom:none}
.ex-row:hover{background:linear-gradient(90deg,rgba(255,255,255,.85),rgba(255,255,255,0));transform:translateX(4px)}
.ex-row-num{
  font-family:var(--font-display);font-weight:600;font-size:1.25rem;
  color:transparent;-webkit-text-stroke:1.2px var(--orange-deep);
  letter-spacing:.04em;
}
.ex-row:hover .ex-row-num{color:var(--orange-deep);-webkit-text-stroke:1.2px transparent}
.ex-row-glyph{
  width:46px;height:46px;border-radius:13px;display:grid;place-items:center;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.18), 0 6px 14px -8px rgba(60,30,10,.35);
  transform:rotate(-3deg);transition:transform .3s;
}
.ex-row-glyph svg{width:24px;height:24px;display:block}
.ex-row:hover .ex-row-glyph{transform:rotate(5deg) scale(1.06)}
.ex-row-text{display:flex;flex-direction:column;min-width:0}
.ex-row-title{font-family:var(--font-display);font-weight:600;font-size:1.06rem;color:var(--ink)}
.ex-row-sub{font-size:.85rem;color:var(--ink-soft);margin-top:2px}
.ex-row-leader{
  height:1px;min-width:30px;
  background-image:radial-gradient(circle,var(--ink-faint) 1px,transparent 1.5px);
  background-size:6px 6px;background-repeat:repeat-x;background-position:center;
  opacity:.4;
}
.ex-row-cta{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--font-display);font-weight:600;font-size:.82rem;color:var(--orange-deep);
  padding:8px 12px;border-radius:999px;background:transparent;border:1px solid transparent;
  transition:background .18s,border-color .18s,transform .18s;
  white-space:nowrap;
}
.ex-row:hover .ex-row-cta{background:#fff;border-color:var(--orange-2);box-shadow:var(--shadow-sm)}

.ex-empty{text-align:center;padding:60px 20px;color:var(--ink-soft);background:#fff;border:1px dashed var(--line);border-radius:20px}
.ex-empty svg{color:var(--orange);margin-bottom:8px}

@media (max-width:1020px){
  .ex-sec{grid-template-columns:1fr;gap:14px}
  .ex-sec-aside{position:static}
}
@media (max-width:960px){
  .ex-main{padding:24px 22px 64px}
  .ex-top{grid-template-columns:1fr;gap:18px;align-items:start}
  .ex-mascot-card{justify-content:flex-end}
  .ex-mascot-bubble{margin-bottom:24px}
}
@media (max-width:720px){
  .ex-root{flex-direction:column}
  .ex-side{width:100%;height:auto;position:relative;border-right:none;border-bottom:1px solid var(--line);padding:14px 16px}
  .ex-nav{flex-direction:row;flex-wrap:wrap;gap:4px}
  .ex-side-foot{margin-top:12px}
  .ex-row{grid-template-columns:42px 42px 1fr;grid-auto-flow:row}
  .ex-row-leader,.ex-row-cta{display:none}
}
`;
