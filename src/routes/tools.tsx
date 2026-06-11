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
  Heart,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Tools — Good Student" },
      { name: "description", content: "All your study tools — language, STEM, content generation and summarising — in one playful workspace." },
      { property: "og:title", content: "Tools — Good Student" },
      { property: "og:description", content: "All your study tools in one playful workspace." },
    ],
  }),
  component: ToolsPage,
});

/* ===== Shared brand mark (same as tutors page) ===== */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tl-lg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#E04E07" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="16" fill="url(#tl-lg-grad)" />
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

type Cat = "languages" | "stem" | "content" | "summary";
type GKey =
  | "ear" | "mic" | "book" | "pen"
  | "abacus" | "flask"
  | "cards" | "branch" | "camera" | "frame"
  | "doc" | "globe" | "play";

type Tool = {
  id: string;
  title: string;
  sub: string;
  glyph: GKey;
  cat: Cat;
  tint: string;
  ink: string;
  badge?: string;
};

const CATEGORIES: { id: Cat | "all"; label: string }[] = [
  { id: "all", label: "All tools" },
  { id: "languages", label: "Languages" },
  { id: "stem", label: "STEM" },
  { id: "content", label: "Content generation" },
  { id: "summary", label: "Content summary" },
];

/* Editorial palette — flat muted colors, no saturated AI-gradient bubbles */
const TOOLS: Tool[] = [
  { id: "hear",  title: "Hear It Right!",            sub: "Listening comprehension practice",                glyph: "ear",    cat: "languages", tint: "#C8553D", ink: "#FBEFE8" },
  { id: "say",   title: "Say It Right!",             sub: "Speaking & pronunciation feedback",               glyph: "mic",    cat: "languages", tint: "#3D5A6C", ink: "#E8EEF2" },
  { id: "read",  title: "DSE Reading Comprehension", sub: "Exam-style reading practice",                     glyph: "book",   cat: "languages", tint: "#B8893A", ink: "#F5EBD9" },
  { id: "write", title: "Writing Genie",             sub: "Grammar & writing — English / 中文",              glyph: "pen",    cat: "languages", tint: "#6B5B95", ink: "#ECE8F2" },
  { id: "math",  title: "Math Quiz Generator",       sub: "Maths practice at any level",                     glyph: "abacus", cat: "stem",      tint: "#506B7A", ink: "#E6EEF2" },
  { id: "lab",   title: "Lab Report Generator",      sub: "Write up science experiments cleanly",            glyph: "flask",  cat: "stem",      tint: "#6B8E4E", ink: "#EEF3E6", badge: "New" },
  { id: "flash", title: "Flashcards Generator",      sub: "Flashcards from any topic or text",               glyph: "cards",  cat: "content",   tint: "#8C5E7A", ink: "#F2E8EE" },
  { id: "mind",  title: "Mind Map Generator",        sub: "Map a topic for revision or brainstorming",       glyph: "branch", cat: "content",   tint: "#9C6B3F", ink: "#F2E6D8" },
  { id: "ocr",   title: "OCR Tool",                  sub: "Snap homework or notes — bring them into tools",  glyph: "camera", cat: "content",   tint: "#4A5D52", ink: "#E5ECE7", badge: "On-ramp" },
  { id: "img",   title: "Image Studio",              sub: "Generate images for your assignments",            glyph: "frame",  cat: "content",   tint: "#A65A4B", ink: "#F3E4DF", badge: "New" },
  { id: "doc",   title: "Document Summariser",       sub: "Long notes & PDFs → key points",                  glyph: "doc",    cat: "summary",   tint: "#7A6B4F", ink: "#EFEAD9" },
  { id: "web",   title: "Website Summariser",        sub: "Summarise key points from any website",           glyph: "globe",  cat: "summary",   tint: "#3D7068", ink: "#E2EDE9" },
  { id: "yt",    title: "YouTube Summariser",        sub: "Summarise a lesson video",                        glyph: "play",   cat: "summary",   tint: "#A04545", ink: "#F2E0E0" },
];

const CAT_LABEL: Record<Cat, string> = {
  languages: "Languages",
  stem: "STEM",
  content: "Content generation",
  summary: "Content summary",
};

function Glyph({ k }: { k: GKey }) {
  const s = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  switch (k) {
    case "ear":    return (<svg viewBox="0 0 32 32" {...s}><path d="M11 22c-2 2-2 5 1 6 4 1 6-3 6-6 0-3 4-3 4-7a6 6 0 0 0-12 0c0 2 1 3 1 5" fill="rgba(255,255,255,.3)"/><path d="M14 14a3 3 0 0 1 5 1"/></svg>);
    case "mic":    return (<svg viewBox="0 0 32 32" {...s}><rect x="13" y="5" width="6" height="14" rx="3" fill="rgba(255,255,255,.3)"/><path d="M9 15a7 7 0 0 0 14 0M16 22v5M11 27h10"/></svg>);
    case "book":   return (<svg viewBox="0 0 32 32" {...s}><path d="M7 7h8a3 3 0 0 1 3 3v17M25 7h-8a3 3 0 0 0-3 3v17" fill="rgba(255,255,255,.3)"/><path d="M9 12h5M9 16h5M21 12h-4M21 16h-4"/></svg>);
    case "pen":    return (<svg viewBox="0 0 32 32" {...s}><path d="M6 26l4-1 14-14-3-3L7 22l-1 4z" fill="rgba(255,255,255,.3)"/><path d="M18 9l5 5"/></svg>);
    case "abacus": return (<svg viewBox="0 0 32 32" {...s}><rect x="5" y="6" width="22" height="20" rx="2" fill="rgba(255,255,255,.25)"/><path d="M5 13h22M5 19h22"/><circle cx="11" cy="13" r="1.6" fill="currentColor"/><circle cx="17" cy="13" r="1.6" fill="currentColor"/><circle cx="13" cy="19" r="1.6" fill="currentColor"/><circle cx="20" cy="19" r="1.6" fill="currentColor"/></svg>);
    case "flask":  return (<svg viewBox="0 0 32 32" {...s}><path d="M13 5h6M14 5v8L8 24a3 3 0 0 0 3 4h10a3 3 0 0 0 3-4l-6-11V5" fill="rgba(255,255,255,.3)"/><circle cx="14" cy="20" r="1.3" fill="currentColor"/><circle cx="18" cy="23" r="1.3" fill="currentColor"/></svg>);
    case "cards":  return (<svg viewBox="0 0 32 32" {...s}><rect x="5" y="10" width="15" height="18" rx="2" transform="rotate(-8 12 19)" fill="rgba(255,255,255,.25)"/><rect x="12" y="6" width="15" height="18" rx="2" transform="rotate(6 19 15)" fill="rgba(255,255,255,.35)"/><path d="M17 12h6M17 16h4"/></svg>);
    case "branch": return (<svg viewBox="0 0 32 32" {...s}><circle cx="16" cy="16" r="3.2" fill="rgba(255,255,255,.3)"/><circle cx="6" cy="7" r="2.4"/><circle cx="26" cy="7" r="2.4"/><circle cx="6" cy="25" r="2.4"/><circle cx="26" cy="25" r="2.4"/><path d="M14 14l-6-6M18 14l6-6M14 18l-6 6M18 18l6 6"/></svg>);
    case "camera": return (<svg viewBox="0 0 32 32" {...s}><path d="M5 11h4l2-3h10l2 3h4v14H5z" fill="rgba(255,255,255,.3)"/><circle cx="16" cy="18" r="4.5"/><circle cx="23" cy="13" r=".9" fill="currentColor"/></svg>);
    case "frame":  return (<svg viewBox="0 0 32 32" {...s}><rect x="5" y="6" width="22" height="20" rx="2" fill="rgba(255,255,255,.25)"/><circle cx="11" cy="12" r="1.6" fill="currentColor"/><path d="M5 22l6-6 5 5 4-3 7 7"/></svg>);
    case "doc":    return (<svg viewBox="0 0 32 32" {...s}><path d="M9 4h11l5 5v19H9z" fill="rgba(255,255,255,.3)"/><path d="M20 4v5h5"/><path d="M13 14h10M13 18h10M13 22h7"/></svg>);
    case "globe":  return (<svg viewBox="0 0 32 32" {...s}><circle cx="16" cy="16" r="11" fill="rgba(255,255,255,.25)"/><ellipse cx="16" cy="16" rx="5" ry="11"/><path d="M5 16h22"/></svg>);
    case "play":   return (<svg viewBox="0 0 32 32" {...s}><rect x="4" y="7" width="24" height="18" rx="4" fill="rgba(255,255,255,.3)"/><path d="M14 12l6 4-6 4z" fill="currentColor" stroke="none"/></svg>);
  }
}

function ToolCard({ t, favorited, onFav }: { t: Tool; favorited: boolean; onFav: () => void }) {
  return (
    <button className="tl-card">
      <div className="tl-card-ic" style={{ background: t.tint, color: t.ink }}>
        <Glyph k={t.glyph} />
      </div>
      <div className="tl-card-body">
        <div className="tl-card-head">
          <h3 className="tl-card-title">{t.title}</h3>
          {t.badge && <span className="tl-card-badge">{t.badge}</span>}
        </div>
        <p className="tl-card-sub">{t.sub}</p>
      </div>
      <span
        className={`tl-card-fav${favorited ? " is-on" : ""}`}
        onClick={(e) => { e.stopPropagation(); e.preventDefault(); onFav(); }}
        aria-label="Favourite"
        role="button"
      >
        <Heart size={15} fill={favorited ? "currentColor" : "none"} />
      </span>
    </button>
  );
}

function ToolsPage() {
  const [active, setActive] = useState("tools");
  const [userOpen, setUserOpen] = useState(false);
  const [filter, setFilter] = useState<Cat | "all">("all");
  const [query, setQuery] = useState("");
  const [favs, setFavs] = useState<Record<string, boolean>>({});

  const nav = [
    { id: "home", label: "Home", icon: Home, to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil, to: "/tutors" as const },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "explore", label: "Explore", icon: Globe, to: "/explore" as const },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((t) => {
      if (filter !== "all" && t.cat !== filter) return false;
      if (!q) return true;
      return t.title.toLowerCase().includes(q) || t.sub.toLowerCase().includes(q);
    });
  }, [filter, query]);

  const grouped = useMemo(() => {
    const g: Record<Cat, Tool[]> = { languages: [], stem: [], content: [], summary: [] };
    filtered.forEach((t) => g[t.cat].push(t));
    return g;
  }, [filtered]);

  const favList = TOOLS.filter((t) => favs[t.id]);

  const toggleFav = (id: string) =>
    setFavs((f) => ({ ...f, [id]: !f[id] }));

  return (
    <div className="tl-root">
      <aside className="tl-side">
        <div className="tl-brand">
          <LogoMark className="tl-brand-mark" />
          <span className="tl-brand-name">Good Student</span>
        </div>

        <nav className="tl-nav">
          {nav.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            const cls = `tl-nav-item${isActive ? " is-active" : ""}`;
            if (n.to) {
              return (
                <Link key={n.id} to={n.to} className={cls} onClick={() => setActive(n.id)}>
                  <Icon size={17} /> <span>{n.label}</span>
                </Link>
              );
            }
            return (
              <button key={n.id} className={cls} onClick={() => setActive(n.id)}>
                <Icon size={17} /> <span>{n.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="tl-side-foot">
          {userOpen && (
            <div className="tl-user-card">
              <div className="tl-user-head">
                <div className="tl-ava">TC</div>
                <div>
                  <div className="tl-user-name">Tiffany Chiu</div>
                  <div className="tl-user-mail">tks@goodstudent.app</div>
                </div>
              </div>
              <div className="tl-user-actions">
                <button><User size={15} /> My profile</button>
                <button><Settings size={15} /> Settings</button>
              </div>
              <button className="tl-signout"><LogOut size={15} /> Sign out</button>
            </div>
          )}
          <button className="tl-user-switch" onClick={() => setUserOpen((v) => !v)}>
            <div className="tl-ava tl-ava-sm">TC</div>
            <div className="tl-user-switch-meta">
              <div className="tl-user-name">Tiffany Chiu</div>
              <div className="tl-user-mail">Student · Yr 12</div>
            </div>
            <ChevronsUpDown size={15} />
          </button>
        </div>
      </aside>

      <main className="tl-main">
        <header className="tl-top">
          <div>
            <div className="tl-eyebrow"><span className="tl-dot" /> Your toolbox</div>
            <h1 className="tl-title">
              Tiny tools for <span className="tl-hl">big study days</span>.
            </h1>
            <p className="tl-subtitle">Pick a tool to start, or snap a page with OCR and the right tool will pop up.</p>
          </div>
          <div className="tl-search-wrap">
            <Search size={15} className="tl-search-ic" />
            <input
              className="tl-search"
              placeholder="Search tools…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="tl-chips">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`tl-chip${filter === c.id ? " is-on" : ""}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
              <span className="tl-chip-count">
                {c.id === "all" ? TOOLS.length : TOOLS.filter((t) => t.cat === c.id).length}
              </span>
            </button>
          ))}
        </div>

        {favList.length > 0 && filter === "all" && !query && (
          <section className="tl-section">
            <div className="tl-section-head">
              <span className="tl-section-label"><Heart size={11} fill="currentColor" /> Favourites</span>
              <span className="tl-section-count">{favList.length}</span>
            </div>
            <div className="tl-grid">
              {favList.map((t) => (
                <ToolCard key={t.id} t={t} favorited onFav={() => toggleFav(t.id)} />
              ))}
            </div>
          </section>
        )}

        {(["languages", "stem", "content", "summary"] as Cat[])
          .filter((cat) => filter === "all" || filter === cat)
          .map((cat) => {
            const list = grouped[cat];
            if (!list.length) return null;
            return (
              <section className="tl-section" key={cat}>
                <div className="tl-section-head">
                  <span className="tl-section-label">{CAT_LABEL[cat]}</span>
                  <span className="tl-section-count">{list.length}</span>
                </div>
                <div className="tl-grid">
                  {list.map((t) => (
                    <ToolCard key={t.id} t={t} favorited={!!favs[t.id]} onFav={() => toggleFav(t.id)} />
                  ))}
                </div>
              </section>
            );
          })}

        {filtered.length === 0 && (
          <div className="tl-empty">
            <Sparkles size={20} />
            <p>No tools match "<b>{query}</b>" yet — try a different word.</p>
          </div>
        )}
      </main>

      <style>{css}</style>
    </div>
  );
}

const css = `
.tl-root{
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
.tl-root *{box-sizing:border-box}
.tl-root::before{
  content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55;
  background:radial-gradient(50% 42% at 88% -4%,rgba(255,138,61,.28),transparent 60%),
             radial-gradient(40% 38% at -4% 12%,rgba(255,180,84,.26),transparent 60%);
}
.tl-root h1,.tl-root h2,.tl-root h3{font-family:var(--font-display);font-weight:600;letter-spacing:-.015em;line-height:1.1;margin:0}

/* sidebar */
.tl-side{
  width:248px;flex-shrink:0;position:sticky;top:0;height:100vh;
  display:flex;flex-direction:column;padding:22px 18px;
  background:rgba(255,247,239,.7);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-right:1px solid var(--line);z-index:5;
}
.tl-brand{display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:32px}
.tl-brand-mark{width:38px;height:38px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.tl-brand:hover .tl-brand-mark{transform:rotate(-10deg) scale(1.08)}
.tl-brand-name{font-family:var(--font-display);font-weight:700;font-size:1.18rem;letter-spacing:-.02em;
  background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.tl-nav{display:flex;flex-direction:column;gap:3px;flex:1}
.tl-nav-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;
  font-family:var(--font-body);font-weight:500;font-size:.94rem;color:var(--ink-soft);
  background:transparent;border:none;cursor:pointer;text-align:left;text-decoration:none;
  transition:background .18s,color .18s;}
.tl-nav-item:hover{background:rgba(255,255,255,.7);color:var(--ink)}
.tl-nav-item.is-active{background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm);font-weight:600}
.tl-nav-item.is-active svg{color:var(--orange)}

.tl-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.tl-user-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:10px}
.tl-user-head{display:flex;align-items:center;gap:10px}
.tl-ava{width:36px;height:36px;border-radius:11px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;font-weight:600;font-family:var(--font-display);display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;box-shadow:var(--shadow-sm)}
.tl-ava-sm{width:34px;height:34px;font-size:.76rem;border-radius:10px}
.tl-user-name{font-family:var(--font-display);font-weight:600;font-size:.9rem;color:var(--ink)}
.tl-user-mail{font-size:.76rem;color:var(--ink-soft)}
.tl-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px}
.tl-user-actions button,.tl-signout{display:flex;align-items:center;gap:10px;background:transparent;border:none;cursor:pointer;padding:8px 6px;border-radius:8px;font-size:.86rem;color:var(--ink-soft);text-align:left;font-family:var(--font-body)}
.tl-user-actions button:hover,.tl-signout:hover{background:var(--cream);color:var(--ink)}
.tl-signout{border-top:1px solid var(--line);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.tl-user-switch{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-sm);transition:transform .15s,box-shadow .15s,border-color .15s;font-family:inherit}
.tl-user-switch:hover{transform:translateY(-1px);border-color:var(--orange-2)}
.tl-user-switch-meta{flex:1;text-align:left;min-width:0;overflow:hidden}
.tl-user-switch-meta .tl-user-name,.tl-user-switch-meta .tl-user-mail{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tl-user-switch>svg{color:var(--ink-faint);flex-shrink:0}

/* main */
.tl-main{flex:1;min-width:0;padding:38px 56px 80px;position:relative;z-index:1}
.tl-top{display:grid;grid-template-columns:1.4fr .9fr;gap:36px;align-items:end;margin-bottom:22px}
.tl-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:14px}
.tl-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:tl-ping 2s infinite}
@keyframes tl-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.tl-title{font-size:clamp(2.1rem,3.6vw,3rem)}
.tl-hl{color:var(--orange-deep);position:relative;display:inline-block;white-space:nowrap}
.tl-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.tl-subtitle{margin-top:12px;color:var(--ink-soft);font-size:1.02rem;max-width:34em}

.tl-search-wrap{position:relative;display:flex;align-items:center}
.tl-search-ic{position:absolute;left:16px;color:var(--ink-faint);pointer-events:none}
.tl-search{
  width:100%;background:#fff;border:1px solid var(--line);
  border-radius:999px;padding:12px 16px 12px 40px;
  font-family:inherit;font-size:.93rem;color:var(--ink);
  box-shadow:var(--shadow-sm);outline:none;transition:border-color .15s,box-shadow .15s;
}
.tl-search:focus{border-color:var(--orange-2);box-shadow:0 0 0 4px rgba(251,106,30,.12),var(--shadow-sm)}

/* chips */
.tl-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px}
.tl-chip{
  display:inline-flex;align-items:center;gap:8px;
  background:#fff;border:1px solid var(--line);
  padding:8px 14px;border-radius:999px;cursor:pointer;
  font-family:var(--font-display);font-weight:600;font-size:.85rem;color:var(--ink-soft);
  box-shadow:var(--shadow-sm);transition:all .18s;
}
.tl-chip:hover{color:var(--ink);border-color:var(--orange-2);transform:translateY(-1px)}
.tl-chip.is-on{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;border-color:transparent}
.tl-chip-count{font-size:.7rem;padding:2px 7px;border-radius:999px;background:var(--cream-2);color:var(--orange-deep)}
.tl-chip.is-on .tl-chip-count{background:rgba(255,255,255,.25);color:#fff}

/* sections + grid */
.tl-section{margin-bottom:38px}
.tl-section-head{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.tl-section-label{font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);display:inline-flex;align-items:center;gap:6px}
.tl-section-count{font-size:.7rem;font-weight:600;color:var(--orange-deep);background:var(--cream-2);padding:3px 9px;border-radius:999px;font-family:var(--font-display)}

.tl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
.tl-card{
  position:relative;display:flex;align-items:flex-start;gap:14px;
  background:linear-gradient(165deg,#fff,#fff7ef);
  border:1px solid var(--line);border-radius:20px;padding:18px;
  cursor:pointer;font-family:inherit;color:inherit;text-align:left;
  box-shadow:var(--shadow-sm);
  transition:transform .25s,box-shadow .25s,border-color .25s;
}
.tl-card:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:var(--orange-2)}
.tl-card-ic{
  width:52px;height:52px;border-radius:14px;display:grid;place-items:center;
  flex-shrink:0;position:relative;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.18), 0 6px 14px -8px rgba(60,30,10,.35);
  transform:rotate(-3deg);transition:transform .3s;
}
.tl-card-ic svg{width:28px;height:28px;display:block}
.tl-card-ic::after{content:"";position:absolute;inset:4px;border-radius:11px;border:1px dashed rgba(255,255,255,.22);pointer-events:none}
.tl-card:hover .tl-card-ic{transform:rotate(5deg) scale(1.06)}

.tl-card-body{flex:1;min-width:0}
.tl-card-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.tl-card-title{font-family:var(--font-display);font-weight:600;font-size:1.04rem;color:var(--ink)}
.tl-card-badge{
  font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.04em;
  text-transform:uppercase;color:var(--orange-deep);
  background:var(--cream-2);padding:3px 8px;border-radius:999px;
}
.tl-card-sub{font-size:.85rem;color:var(--ink-soft);margin-top:4px;line-height:1.45}
.tl-card-fav{
  position:absolute;top:14px;right:14px;
  width:28px;height:28px;border-radius:9px;
  display:flex;align-items:center;justify-content:center;
  color:var(--ink-faint);background:rgba(255,255,255,.7);
  border:1px solid var(--line);cursor:pointer;transition:all .18s;
}
.tl-card-fav:hover{color:var(--orange-deep);border-color:var(--orange-2)}
.tl-card-fav.is-on{color:var(--orange-deep);background:var(--cream-2);border-color:var(--orange-2)}

.tl-empty{
  text-align:center;padding:60px 20px;color:var(--ink-soft);
  background:#fff;border:1px dashed var(--line);border-radius:20px;
}
.tl-empty svg{color:var(--orange);margin-bottom:8px}

@media (max-width:960px){
  .tl-main{padding:24px 22px 64px}
  .tl-top{grid-template-columns:1fr;gap:18px;align-items:start}
}
@media (max-width:720px){
  .tl-root{flex-direction:column}
  .tl-side{width:100%;height:auto;position:relative;border-right:none;border-bottom:1px solid var(--line);padding:14px 16px}
  .tl-nav{flex-direction:row;flex-wrap:wrap;gap:4px}
  .tl-side-foot{margin-top:12px}
  .tl-grid{grid-template-columns:1fr}
}
`;
