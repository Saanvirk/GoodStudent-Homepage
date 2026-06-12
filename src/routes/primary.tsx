import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Sparkles,
  Star,
  Heart,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/primary")({
  head: () => ({
    meta: [
      { title: "Primary Home — Good Student" },
      { name: "description", content: "A cosy starting place for younger learners — pick a subject and collect stars." },
      { property: "og:title", content: "Primary Home — Good Student" },
      { property: "og:description", content: "Pick a subject and collect stars." },
    ],
  }),
  component: PrimaryHomePage,
});

/* ===== Brand mark (matches /) ===== */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ph-lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#E04E07" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="16" fill="url(#ph-lg)" />
      <rect x="10" y="11" width="36" height="32" rx="14" fill="#FFF7EF" />
      <rect x="14" y="17" width="28" height="22" rx="9" fill="#222F38" />
      <circle cx="22" cy="28" r="5.6" fill="none" stroke="#2FB39A" strokeWidth="1.7" />
      <circle cx="34" cy="28" r="5.6" fill="none" stroke="#2FB39A" strokeWidth="1.7" />
      <circle cx="22.7" cy="28.6" r="1.6" fill="#222F38" />
      <circle cx="33.3" cy="28.6" r="1.6" fill="#222F38" />
    </svg>
  );
}

/* ===== Mascot (same vibe as /) ===== */
function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 246" className={`ph-ms ${className}`} aria-hidden="true">
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

/* ===== Shared bot symbol for subject tiles (reused from /) ===== */
function BotSymbols() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <symbol id="ph-bot" viewBox="0 0 220 250">
        <ellipse cx="110" cy="238" rx="54" ry="8" fill="rgba(60,40,20,.12)" />
        <rect x="86" y="190" width="15" height="40" rx="7.5" fill="#F4EFE3" stroke="#E2D6BD" strokeWidth="2" />
        <rect x="119" y="190" width="15" height="40" rx="7.5" fill="#F4EFE3" stroke="#E2D6BD" strokeWidth="2" />
        <ellipse cx="92" cy="232" rx="13" ry="7" fill="#FBF7EE" stroke="#E2D6BD" strokeWidth="2" />
        <ellipse cx="128" cy="232" rx="13" ry="7" fill="#FBF7EE" stroke="#E2D6BD" strokeWidth="2" />
        <rect x="48" y="130" width="15" height="46" rx="7.5" fill="#F4EFE3" stroke="#E2D6BD" strokeWidth="2" transform="rotate(16 55 153)" />
        <circle cx="52" cy="178" r="9" fill="#FBF7EE" stroke="#E2D6BD" strokeWidth="2" />
        <rect x="157" y="130" width="15" height="46" rx="7.5" fill="#F4EFE3" stroke="#E2D6BD" strokeWidth="2" transform="rotate(-16 165 153)" />
        <circle cx="168" cy="178" r="9" fill="#FBF7EE" stroke="#E2D6BD" strokeWidth="2" />
        <rect x="64" y="120" width="92" height="82" rx="30" fill="#F4EFE3" stroke="#E2D6BD" strokeWidth="2.4" />
        <rect x="86" y="140" width="48" height="34" rx="10" fill="#26323B" />
        <text x="110" y="164" textAnchor="middle" fontFamily="monospace" fontSize="16" fill="#46D6AE" fontWeight="700">{"</>"}</text>
        <path d="M110 38 C108 26 118 24 113 14" stroke="#E2D6BD" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="112" cy="12" r="7" fill="#FB6A1E" />
        <rect x="56" y="36" width="108" height="92" rx="40" fill="#F7F2E8" stroke="#E2D6BD" strokeWidth="2.4" />
        <circle cx="56" cy="84" r="9" fill="#5BD0B4" />
        <circle cx="164" cy="84" r="9" fill="#5BD0B4" />
        <rect x="68" y="52" width="84" height="62" rx="26" fill="#26323B" />
        <circle cx="93" cy="82" r="13" fill="#fff" />
        <circle cx="96" cy="84" r="6" fill="#1F2A30" />
        <circle cx="127" cy="82" r="13" fill="#fff" />
        <circle cx="124" cy="84" r="6" fill="#1F2A30" />
        <circle cx="89" cy="78" r="2.4" fill="#fff" />
        <circle cx="120" cy="78" r="2.4" fill="#fff" />
        <circle cx="93" cy="82" r="18" fill="none" stroke="#2FB39A" strokeWidth="6" />
        <circle cx="127" cy="82" r="18" fill="none" stroke="#2FB39A" strokeWidth="6" />
        <path d="M110 82 q1 -3 2 0" stroke="#2FB39A" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="80" cy="98" rx="7" ry="4" fill="#C77E5A" opacity=".5" />
        <ellipse cx="140" cy="98" rx="7" ry="4" fill="#C77E5A" opacity=".5" />
        <ellipse cx="110" cy="100" rx="5" ry="4" fill="#FB6A1E" />
      </symbol>
    </svg>
  );
}

/* ===== Per-subject prop badges ===== */
function PropEnglish() {
  return (
    <g transform="translate(150 96)">
      <rect width="44" height="34" rx="10" fill="#fff" stroke="#E6CFC8" strokeWidth="2" />
      <text x="22" y="24" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="18" fontWeight="700" fill="#B5462F">Aa</text>
    </g>
  );
}
function PropMaths() {
  return (
    <g transform="translate(154 96)">
      <rect width="40" height="34" rx="10" fill="#fff" stroke="#E6CFC8" strokeWidth="2" />
      <text x="13" y="24" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="16" fontWeight="700" fill="#C28028">7+</text>
      <path d="M28 9 l8 8 l-8 8 l-8 -8 z" fill="none" stroke="#C28028" strokeWidth="2" />
    </g>
  );
}
function PropChinese() {
  return (
    <g transform="translate(154 96)">
      <rect width="36" height="36" rx="8" fill="#B0402E" />
      <text x="18" y="26" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#FFE8D6">福</text>
    </g>
  );
}
function PropGeneral() {
  return (
    <g transform="translate(150 88)">
      <circle cx="22" cy="22" r="10" fill="#F08AB1" />
      <circle cx="22" cy="22" r="3.5" fill="#FFDFB5" />
      <g stroke="#F08AB1" strokeWidth="3" strokeLinecap="round">
        <line x1="22" y1="6" x2="22" y2="12" />
        <line x1="22" y1="32" x2="22" y2="38" />
        <line x1="6" y1="22" x2="12" y2="22" />
        <line x1="32" y1="22" x2="38" y2="22" />
      </g>
    </g>
  );
}

function SubjectScene({ bg, ring, prop }: { bg: string; ring: string; prop: React.ReactNode }) {
  return (
    <svg viewBox="0 0 280 220" className="ph-scene">
      <rect width="280" height="220" rx="20" fill={bg} />
      <circle cx="140" cy="120" r="98" fill="none" stroke={ring} strokeDasharray="2 7" opacity=".45" />
      <use href="#ph-bot" x="78" y="32" width="124" height="170" />
      {prop}
    </svg>
  );
}

/* ===== page ===== */
type Subject = {
  id: string;
  name: string;
  bg: string;
  ring: string;
  accent: string;
  prop: React.ReactNode;
};

const SUBJECTS: Subject[] = [
  { id: "english", name: "English",          bg: "#F7E4DE", ring: "#B5462F", accent: "#B5462F", prop: <PropEnglish /> },
  { id: "maths",   name: "Maths",            bg: "#FBEFD3", ring: "#D9912A", accent: "#C77F1F", prop: <PropMaths /> },
  { id: "chinese", name: "Chinese",          bg: "#F4DCDA", ring: "#B0402E", accent: "#B0402E", prop: <PropChinese /> },
  { id: "general", name: "General Studies",  bg: "#D9F0E8", ring: "#13A483", accent: "#13A483", prop: <PropGeneral /> },
];

function PrimaryHomePage() {
  const [active, setActive] = useState("primary");
  const [userOpen, setUserOpen] = useState(false);
  const studentName = "Mei";

  // recommended (least-used) subject — pretend "Maths"
  const recommended = SUBJECTS.find((s) => s.id === "maths")!;

  const nav = [
    { id: "home",    label: "Home",         icon: Home,     to: "/" as const },
    { id: "primary", label: "Primary Home", icon: Sparkles, to: "/primary" as const },
    { id: "tutor",   label: "Tutor",        icon: Pencil,   to: "/tutors" as const },
    { id: "tools",   label: "Tools",        icon: Wrench,   to: "/tools" as const },
    { id: "explore", label: "Explore",      icon: Globe,    to: "/explore" as const },
  ];

  // collectible stars sky
  const TOTAL_STARS = 36;
  const COLLECTED = 14;
  const stars = Array.from({ length: TOTAL_STARS }).map((_, i) => {
    // deterministic pseudo-random scatter
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    const r2 = ((i * 7) % 17) / 17;
    const left = (r * 92) + 4;       // 4–96 %
    const top = ((r2 * 0.7) + r * 0.25) * 78 + 6; // 6–84 %
    const size = 14 + ((i * 13) % 18); // 14–32 px
    return {
      i,
      left,
      top,
      size,
      collected: i < COLLECTED,
      twinkleDelay: (i % 7) * 0.4,
    };
  });

  return (
    <div className="ph-root">
      <BotSymbols />

      {/* Sidebar — same as / */}
      <aside className="ph-side">
        <Link to="/" className="ph-brand">
          <LogoMark className="ph-brand-mark" />
          <span className="ph-brand-name">Good Student</span>
        </Link>

        <nav className="ph-nav">
          {nav.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            const cls = `ph-nav-item${isActive ? " is-active" : ""}`;
            return (
              <Link key={n.id} to={n.to} className={cls} onClick={() => setActive(n.id)}>
                <Icon size={17} /> <span>{n.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ph-side-foot">
          {userOpen && (
            <div className="ph-user-card">
              <div className="ph-user-head">
                <div className="ph-ava">M</div>
                <div>
                  <div className="ph-user-name">Mei</div>
                  <div className="ph-user-mail">P3 — primary</div>
                </div>
              </div>
              <div className="ph-user-actions">
                <button><User size={15} /> My profile</button>
                <button><Settings size={15} /> Settings</button>
              </div>
              <button className="ph-signout"><LogOut size={15} /> Sign out</button>
            </div>
          )}
          <button className="ph-user-switch" onClick={() => setUserOpen((v) => !v)}>
            <div className="ph-ava ph-ava-sm">M</div>
            <div className="ph-user-switch-meta">
              <div className="ph-user-name">Mei</div>
              <div className="ph-user-mail">P3</div>
            </div>
            <ChevronsUpDown size={15} />
          </button>
        </div>
      </aside>

      <main className="ph-main">
        {/* Hero — title + mascot only, no subtitle */}
        <header className="ph-hero">
          <div className="ph-hero-text">
            <div className="ph-eyebrow"><span className="ph-dot" /> Hi {studentName.toLowerCase()}</div>
            <h1 className="ph-title">
              Pick a <span className="ph-hl">subject</span> to start.
            </h1>
          </div>
          <div className="ph-mascot-card">
            <div className="ph-mascot-art"><Mascot /></div>
          </div>
        </header>

        {/* Tutor pick — recommended subject banner */}
        <section className="ph-pick">
          <div className="ph-pick-mascot" aria-hidden="true">
            <svg viewBox="0 0 220 250" width="64" height="72"><use href="#ph-bot" /></svg>
          </div>
          <div className="ph-pick-body">
            <div className="ph-pick-lbl"><Sparkles size={12} /> Your tutor picked this for you</div>
            <div className="ph-pick-title">
              Let's try <span style={{ color: recommended.accent }}>{recommended.name}</span> today —
              you haven't visited in a while.
            </div>
          </div>
          <button className="ph-pick-cta" type="button" style={{ background: recommended.accent }}>
            Start <ArrowRight size={15} />
          </button>
        </section>

        {/* Subjects grid */}
        <section className="ph-section">
          <div className="ph-section-head">
            <div>
              <div className="ph-section-eyebrow"><BookOpenSimple /> Your subjects</div>
              <h2 className="ph-section-title">Choose where to begin</h2>
            </div>
          </div>
          <div className="ph-sub-grid">
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`ph-sub${s.id === recommended.id ? " is-rec" : ""}`}
              >
                <div className="ph-sub-media">
                  <SubjectScene bg={s.bg} ring={s.ring} prop={s.prop} />
                  {s.id === recommended.id && (
                    <span className="ph-sub-rec-pill">
                      <Sparkles size={11} /> Picked for you
                    </span>
                  )}
                  <span className="ph-sub-fav" aria-hidden="true"><Heart size={16} /></span>
                </div>
                <div className="ph-sub-body">
                  <h3 className="ph-sub-name">{s.name}</h3>
                  <span className="ph-sub-open" style={{ color: s.accent }}>
                    Open <ArrowRight size={15} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Star sky */}
        <section className="ph-sky-section">
          <div className="ph-sky-head">
            <div>
              <div className="ph-section-eyebrow ph-sky-eyebrow"><Star size={13} /> Your sky</div>
              <h2 className="ph-section-title ph-sky-title">
                You've collected <span className="ph-sky-num">{COLLECTED}</span> stars
              </h2>
              <p className="ph-sky-sub">Keep practising — every win earns a star to fill your sky.</p>
            </div>
            <div className="ph-sky-from">
              <div className="ph-ava ph-ava-sm">M</div>
              <div>
                <div className="ph-sky-from-lbl">Latest gift</div>
                <div className="ph-sky-from-text">Mum sent you a star <Star size={12} fill="currentColor" /></div>
              </div>
            </div>
          </div>

          <div className="ph-sky">
            <div className="ph-sky-moon" aria-hidden="true" />
            <div className="ph-sky-cloud ph-sky-cloud-1" aria-hidden="true" />
            <div className="ph-sky-cloud ph-sky-cloud-2" aria-hidden="true" />
            <div className="ph-sky-stars">
              {stars.map((s) => (
                <span
                  key={s.i}
                  className={`ph-star${s.collected ? " on" : ""}`}
                  style={{
                    left: `${s.left}%`,
                    top: `${s.top}%`,
                    width: s.size,
                    height: s.size,
                    animationDelay: `${s.twinkleDelay}s`,
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24"><path d="M12 2 l2.9 6.6 l7.1 .7 l-5.4 4.8 l1.6 7 L12 17.5 L5.8 21.1 l1.6 -7 L2 9.3 l7.1 -.7 z" /></svg>
                </span>
              ))}
            </div>
            <div className="ph-sky-progress">
              <div className="ph-sky-progress-bar"><span style={{ width: `${(COLLECTED / TOTAL_STARS) * 100}%` }} /></div>
              <div className="ph-sky-progress-lbl">{COLLECTED} / {TOTAL_STARS} stars</div>
            </div>
          </div>
        </section>
      </main>

      <style>{css}</style>
    </div>
  );
}

/* small inline icon (avoids extra import) */
function BookOpenSimple() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h7a3 3 0 0 1 3 3v13" /><path d="M22 4h-7a3 3 0 0 0-3 3v13" />
    </svg>
  );
}

const css = `
.ph-root{
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
.ph-root *{box-sizing:border-box}
.ph-root::before{
  content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55;
  background:radial-gradient(50% 42% at 88% -4%,rgba(255,138,61,.28),transparent 60%),
             radial-gradient(40% 38% at -4% 12%,rgba(255,180,84,.26),transparent 60%);
}
.ph-root h1,.ph-root h2,.ph-root h3{font-family:var(--font-display);font-weight:600;letter-spacing:-.015em;line-height:1.15;margin:0}

/* sidebar — mirrors / */
.ph-side{width:248px;flex-shrink:0;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;padding:22px 18px;background:rgba(255,247,239,.7);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-right:1px solid var(--line);z-index:5}
.ph-brand{display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:32px;text-decoration:none;color:inherit}
.ph-brand-mark{width:38px;height:38px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.ph-brand:hover .ph-brand-mark{transform:rotate(-10deg) scale(1.08)}
.ph-brand-name{font-family:var(--font-display);font-weight:700;font-size:1.18rem;letter-spacing:-.02em;background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.ph-nav{display:flex;flex-direction:column;gap:3px;flex:1}
.ph-nav-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;font-family:var(--font-body);font-weight:500;font-size:.94rem;color:var(--ink-soft);background:transparent;border:none;cursor:pointer;text-align:left;text-decoration:none;transition:background .18s,color .18s}
.ph-nav-item:hover{background:rgba(255,255,255,.7);color:var(--ink)}
.ph-nav-item.is-active{background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm);font-weight:600}
.ph-nav-item.is-active svg{color:var(--orange)}
.ph-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.ph-user-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:10px}
.ph-user-head{display:flex;align-items:center;gap:10px}
.ph-ava{width:36px;height:36px;border-radius:11px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;font-weight:600;font-family:var(--font-display);display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;box-shadow:var(--shadow-sm)}
.ph-ava-sm{width:34px;height:34px;font-size:.76rem;border-radius:10px}
.ph-user-name{font-family:var(--font-display);font-weight:600;font-size:.9rem;color:var(--ink)}
.ph-user-mail{font-size:.76rem;color:var(--ink-soft)}
.ph-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px}
.ph-user-actions button,.ph-signout{display:flex;align-items:center;gap:10px;background:transparent;border:none;cursor:pointer;padding:8px 6px;border-radius:8px;font-size:.86rem;color:var(--ink-soft);text-align:left;font-family:var(--font-body)}
.ph-user-actions button:hover,.ph-signout:hover{background:var(--cream);color:var(--ink)}
.ph-signout{border-top:1px solid var(--line);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.ph-user-switch{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-sm);transition:transform .15s,box-shadow .15s,border-color .15s;font-family:inherit}
.ph-user-switch:hover{transform:translateY(-1px);border-color:var(--orange-2)}
.ph-user-switch-meta{flex:1;text-align:left;min-width:0;overflow:hidden}
.ph-user-switch-meta .ph-user-name,.ph-user-switch-meta .ph-user-mail{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ph-user-switch>svg{color:var(--ink-faint);flex-shrink:0}

/* main */
.ph-main{flex:1;min-width:0;padding:28px 48px 40px;position:relative;z-index:1;display:flex;flex-direction:column;min-height:100vh;gap:22px}

/* hero — title + mascot only */
.ph-hero{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.ph-hero-text{max-width:680px}
.ph-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.76rem;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:12px}
.ph-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:ph-ping 2s infinite}
@keyframes ph-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.ph-title{font-size:clamp(2rem,3.6vw,3.1rem);font-weight:700}
.ph-hl{color:var(--orange-deep);position:relative;display:inline-block;white-space:nowrap}
.ph-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.ph-mascot-card{position:relative;flex-shrink:0}
.ph-mascot-art{width:160px;filter:drop-shadow(0 18px 28px rgba(120,40,0,.22));animation:ph-bob 4s ease-in-out infinite}
@keyframes ph-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.ph-ms{width:100%;height:auto;display:block}
.ph-ms .sh{fill:rgba(49,28,16,.12)}
.ph-ms .bf{fill:#FFF6EC}
.ph-ms .st{stroke:#EBD2B6;stroke-width:2.2;fill:#FFF6EC}
.ph-ms .scr{fill:#26323B}
.ph-ms .scrt{fill:#46D6AE;font-family:monospace;font-size:17px;font-weight:700}
.ph-ms .ant{fill:var(--orange)}
.ph-ms .ac{fill:#5BD0B4}
.ph-ms .fc{fill:#26323B}
.ph-ms .ep{fill:#1F2A30}
.ph-ms .ew{fill:#fff}
.ph-ms .mo{fill:#FB6A1E}
.ph-ms .gl{fill:none;stroke:#2FB39A;stroke-width:5;stroke-linecap:round}
.ph-ms .bl{fill:#FF9A57;opacity:.7}

/* tutor pick banner */
.ph-pick{display:flex;align-items:center;gap:16px;padding:14px 18px 14px 14px;background:linear-gradient(120deg,#FFFBF4 0%,#FFEFD9 100%);border:1px solid #F4E0BD;border-radius:24px;box-shadow:0 8px 22px -16px rgba(180,110,60,.35)}
.ph-pick-mascot{flex-shrink:0;width:64px;height:72px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-sm)}
.ph-pick-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.ph-pick-lbl{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}
.ph-pick-title{font-family:var(--font-display);font-weight:600;font-size:1.08rem;color:var(--ink);line-height:1.3}
.ph-pick-cta{display:inline-flex;align-items:center;gap:6px;border:none;cursor:pointer;color:#fff;font-family:var(--font-display);font-weight:700;font-size:.85rem;padding:11px 18px;border-radius:999px;box-shadow:0 8px 18px -8px rgba(201,107,71,.45);transition:transform .15s}
.ph-pick-cta:hover{transform:translateY(-1px) scale(1.03)}

/* section header */
.ph-section{}
.ph-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:14px}
.ph-section-eyebrow{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:4px}
.ph-section-title{font-size:1.5rem;color:var(--ink)}

/* subjects grid */
.ph-sub-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.ph-sub{display:flex;flex-direction:column;background:#fffdf9;border:1px solid var(--line);border-radius:22px;overflow:hidden;box-shadow:var(--shadow-sm);text-align:left;font:inherit;padding:0;cursor:pointer;transition:transform .22s,box-shadow .22s,border-color .22s;color:inherit}
.ph-sub:hover{transform:translateY(-4px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.ph-sub.is-rec{border-color:#E0A24A;box-shadow:0 14px 30px -16px rgba(217,145,42,.45)}
.ph-sub-media{position:relative;width:100%;aspect-ratio:5/4;overflow:hidden}
.ph-sub-media .ph-scene{width:100%;height:100%;display:block}
.ph-sub-rec-pill{position:absolute;top:10px;left:10px;display:inline-flex;align-items:center;gap:5px;background:#fff;color:#C77F1F;font-family:var(--font-display);font-weight:700;font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;padding:5px 9px;border-radius:999px;box-shadow:var(--shadow-sm);border:1px solid #F4E0BD}
.ph-sub-fav{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--ink-faint);box-shadow:var(--shadow-sm);border:1px solid var(--line)}
.ph-sub-body{padding:14px 16px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px}
.ph-sub-name{font-family:var(--font-display);font-weight:700;font-size:1.15rem;color:var(--ink)}
.ph-sub-open{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:700;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase}

/* star sky */
.ph-sky-section{margin-top:6px}
.ph-sky-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:14px;flex-wrap:wrap}
.ph-sky-eyebrow{color:#7E62D9}
.ph-sky-title{font-size:1.55rem}
.ph-sky-num{color:#F0A93A;background:linear-gradient(160deg,#FFC76A,#E68B16);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.ph-sky-sub{margin:6px 0 0;color:var(--ink-soft);font-size:.92rem}
.ph-sky-from{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px 6px 6px;box-shadow:var(--shadow-sm)}
.ph-sky-from-lbl{font-family:var(--font-display);font-weight:600;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint)}
.ph-sky-from-text{font-family:var(--font-display);font-weight:600;font-size:.85rem;color:var(--ink);display:inline-flex;align-items:center;gap:6px}
.ph-sky-from-text svg{color:#F0A93A}

.ph-sky{
  position:relative;height:340px;border-radius:32px;overflow:hidden;
  background:
    radial-gradient(120% 90% at 80% 20%,rgba(255,200,120,.25),transparent 55%),
    radial-gradient(80% 60% at 10% 90%,rgba(126,98,217,.4),transparent 60%),
    linear-gradient(180deg,#1B1646 0%,#2A1F66 45%,#4A2978 100%);
  border:1px solid #3A2C7A;
  box-shadow:0 24px 50px -28px rgba(40,20,80,.6), inset 0 0 60px rgba(255,255,255,.04);
}
.ph-sky-moon{position:absolute;top:32px;right:50px;width:78px;height:78px;border-radius:50%;background:radial-gradient(circle at 32% 32%,#FFF6D9,#F2C66B 70%,#C28A2E);box-shadow:0 0 60px rgba(255,210,120,.45),inset -8px -10px 0 rgba(0,0,0,.08)}
.ph-sky-cloud{position:absolute;background:rgba(255,255,255,.06);border-radius:999px;filter:blur(2px)}
.ph-sky-cloud-1{width:220px;height:36px;bottom:42px;left:-40px}
.ph-sky-cloud-2{width:160px;height:28px;bottom:70px;left:180px;opacity:.7}
.ph-sky-stars{position:absolute;inset:0}
.ph-star{position:absolute;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.18);transform:translate(-50%,-50%);transition:transform .2s}
.ph-star svg{width:100%;height:100%;display:block;fill:currentColor}
.ph-star.on{
  color:#FFD86A;
  filter:drop-shadow(0 0 6px rgba(255,216,106,.7)) drop-shadow(0 0 14px rgba(255,170,60,.4));
  animation:ph-twinkle 3s ease-in-out infinite;
}
@keyframes ph-twinkle{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:1}50%{transform:translate(-50%,-50%) scale(1.12);opacity:.85}}
.ph-sky-progress{position:absolute;left:24px;right:24px;bottom:18px;display:flex;align-items:center;gap:12px}
.ph-sky-progress-bar{flex:1;height:8px;background:rgba(255,255,255,.12);border-radius:999px;overflow:hidden}
.ph-sky-progress-bar span{display:block;height:100%;background:linear-gradient(90deg,#FFD86A,#F0A93A);border-radius:999px;box-shadow:0 0 12px rgba(255,200,90,.6)}
.ph-sky-progress-lbl{font-family:var(--font-display);font-weight:700;font-size:.8rem;color:#FFF1D0;letter-spacing:.04em}

/* responsive */
@media (max-width:1200px){
  .ph-sub-grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:880px){
  .ph-hero{grid-template-columns:1fr;gap:14px}
  .ph-mascot-card{justify-self:flex-end}
  .ph-pick{flex-wrap:wrap}
  .ph-pick-cta{margin-left:auto}
}
@media (max-width:680px){
  .ph-main{padding:24px 20px 48px}
  .ph-sub-grid{grid-template-columns:1fr}
  .ph-sky{height:280px}
}
@media (max-width:560px){
  .ph-side{display:none}
}
`;
