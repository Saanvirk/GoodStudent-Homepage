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
  Flame,
  Sparkles,
  Clock,
  Crown,
  TrendingUp,
  Layers,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Good Student" },
      { name: "description", content: "Your study home — streak, time today, today's favourite tutor and the tool of the week." },
      { property: "og:title", content: "Home — Good Student" },
      { property: "og:description", content: "Your study home." },
    ],
  }),
  component: HomePage,
});

/* ===== Brand mark ===== */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gh-lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#E04E07" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="16" fill="url(#gh-lg)" />
      <rect x="10" y="11" width="36" height="32" rx="14" fill="#FFF7EF" />
      <rect x="14" y="17" width="28" height="22" rx="9" fill="#222F38" />
      <circle cx="22" cy="28" r="5.6" fill="none" stroke="#2FB39A" strokeWidth="1.7" />
      <circle cx="34" cy="28" r="5.6" fill="none" stroke="#2FB39A" strokeWidth="1.7" />
      <circle cx="22.7" cy="28.6" r="1.6" fill="#222F38" />
      <circle cx="33.3" cy="28.6" r="1.6" fill="#222F38" />
    </svg>
  );
}

/* ===== Shared mascot symbol (matches tutors page) ===== */
function BotSymbols() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <symbol id="gh-bot" viewBox="0 0 220 250">
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

/* Scenes for direction cards — bot doing something themed */
function SceneTutors() {
  return (
    <svg viewBox="0 0 280 220" className="gh-scene">
      <rect width="280" height="220" rx="16" fill="#F7E4DE" />
      <circle cx="140" cy="116" r="100" fill="none" stroke="#B5462F" strokeDasharray="2 7" opacity=".35" />
      <use href="#gh-bot" x="65" y="40" width="150" height="170" />
      <rect x="94" y="150" width="92" height="36" rx="4" fill="#9E3B27" />
      <path d="M100 152 h38 v32 h-38 z" fill="#FBF6EC" />
      <path d="M142 152 h38 v32 h-38 z" fill="#FFFDF7" />
      <line x1="140" y1="150" x2="140" y2="186" stroke="#7E2C1C" strokeWidth="2" />
      <g stroke="#C9B3AC" strokeWidth="2" strokeLinecap="round">
        <line x1="106" y1="160" x2="132" y2="160" />
        <line x1="106" y1="168" x2="132" y2="168" />
        <line x1="106" y1="176" x2="126" y2="176" />
        <line x1="148" y1="160" x2="174" y2="160" />
        <line x1="148" y1="168" x2="174" y2="168" />
      </g>
      <g>
        <rect x="210" y="26" width="46" height="32" rx="9" fill="#fff" stroke="#E6CFC8" strokeWidth="1.5" />
        <text x="233" y="48" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="17" fontWeight="700" fill="#B5462F">Aa</text>
      </g>
    </svg>
  );
}
function SceneTools() {
  return (
    <svg viewBox="0 0 280 220" className="gh-scene">
      <rect width="280" height="220" rx="16" fill="#EDE6FA" />
      <circle cx="140" cy="116" r="100" fill="none" stroke="#6F5FE0" strokeDasharray="2 7" opacity=".35" />
      <use href="#gh-bot" x="65" y="40" width="150" height="170" />
      <g transform="translate(28 60) rotate(-14)">
        <rect width="40" height="40" rx="11" fill="#8A7BE8" />
        <path d="M12 20 h16 M20 12 v16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(220 40) rotate(10)">
        <rect width="38" height="38" rx="11" fill="#FFB454" />
        <circle cx="19" cy="19" r="9" fill="none" stroke="#fff" strokeWidth="3" />
        <line x1="25" y1="25" x2="32" y2="32" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(220 140) rotate(-8)">
        <rect width="42" height="42" rx="12" fill="#37C2A0" />
        <path d="M11 30 L21 12 L31 30 Z" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      </g>
      <g transform="translate(22 150) rotate(8)">
        <rect width="38" height="38" rx="11" fill="#FB6A1E" />
        <path d="M10 14 h18 M10 20 h18 M10 26 h12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
function SceneExplore() {
  return (
    <svg viewBox="0 0 280 220" className="gh-scene">
      <rect width="280" height="220" rx="16" fill="#D9F0E8" />
      <circle cx="140" cy="116" r="100" fill="none" stroke="#13A483" strokeDasharray="2 7" opacity=".35" />
      <use href="#gh-bot" x="65" y="40" width="150" height="170" />
      <g transform="translate(28 30)">
        <circle cx="32" cy="32" r="28" fill="#37C2A0" />
        <ellipse cx="32" cy="32" rx="28" ry="11" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="11" ry="28" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
        <circle cx="32" cy="6" r="3" fill="#FB6A1E" />
      </g>
      <g transform="translate(220 30)">
        <path d="M0 8 Q14 -2 28 8 L28 44 Q14 34 0 44 Z" fill="#FFFDF7" stroke="#C9B89A" strokeWidth="1.5" />
        <path d="M14 6 L14 42" stroke="#C9B89A" strokeWidth="1.5" />
        <circle cx="7" cy="20" r="2" fill="#FB6A1E" />
        <path d="M19 14 l3 3 l-3 3 l-3 -3 z" fill="#13A483" />
      </g>
      <g transform="translate(208 150)">
        <path d="M16 0 a14 14 0 1 1 -0.01 0 z M16 6 a8 8 0 1 0 0.01 0z" fill="#FB6A1E" />
        <path d="M16 28 l-6 14 h12 z" fill="#FB6A1E" />
      </g>
    </svg>
  );
}

/* Tutor scene (English) for tutor-of-day featured panel */
function SceneEnglish() {
  return (
    <svg viewBox="0 0 280 220" className="gh-scene">
      <rect width="280" height="220" rx="16" fill="#F7E4DE" />
      <circle cx="140" cy="116" r="100" fill="none" stroke="#B5462F" strokeDasharray="2 7" opacity=".35" />
      <use href="#gh-bot" x="65" y="40" width="150" height="170" />
      <rect x="94" y="150" width="92" height="36" rx="4" fill="#9E3B27" />
      <path d="M100 152 h38 v32 h-38 z" fill="#FBF6EC" />
      <path d="M142 152 h38 v32 h-38 z" fill="#FFFDF7" />
      <line x1="140" y1="150" x2="140" y2="186" stroke="#7E2C1C" strokeWidth="2" />
      <g stroke="#C9B3AC" strokeWidth="2" strokeLinecap="round">
        <line x1="106" y1="160" x2="132" y2="160" />
        <line x1="106" y1="168" x2="132" y2="168" />
        <line x1="106" y1="176" x2="126" y2="176" />
        <line x1="148" y1="160" x2="174" y2="160" />
        <line x1="148" y1="168" x2="174" y2="168" />
      </g>
    </svg>
  );
}

/* ===== data ===== */
const weekLabels = ["M", "T", "W", "T", "F", "S", "S"];
const streakDays = [true, true, true, true, true, true, true];
const todayIdx = 3;
const timeMinutes = 64;
const timeGoal = 90;
const weekUsage = [22, 38, 14, 46, 30, 12, 20];

/* ===== page ===== */
function HomePage() {
  const [active, setActive] = useState("home");
  const [userOpen, setUserOpen] = useState(false);

  const nav = [
    { id: "home",  label: "Home",  icon: Home,   to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil, to: "/tutors" as const },
    { id: "tools", label: "Tools", icon: Wrench, to: "/tools" as const },
    { id: "explore", label: "Explore", icon: Globe },
  ];

  const streak = streakDays.filter(Boolean).length;
  const timePct = Math.min(100, Math.round((timeMinutes / timeGoal) * 100));
  const ringR = 38;
  const ringC = 2 * Math.PI * ringR;
  const ringOffset = ringC - (ringC * timePct) / 100;
  const peakUsage = Math.max(...weekUsage);

  const directions: Array<{
    id: string;
    tag: string;
    title: string;
    sub: string;
    to?: "/tutors" | "/tools";
    scene: React.ReactNode;
    icon: typeof Pencil;
  }> = [
    { id: "tut", tag: "Tutors", title: "Sit with a tutor", sub: "Ready-made DSE tutors or build your own.", to: "/tutors", scene: <SceneTutors />, icon: Pencil },
    { id: "tol", tag: "Tools", title: "Grab a tool", sub: "Flashcards, mind maps, speaking practice.", to: "/tools", scene: <SceneTools />, icon: Wrench },
    { id: "exp", tag: "Explore", title: "Discover what's new", sub: "Curated packs and fresh experiments.", scene: <SceneExplore />, icon: Globe },
  ];

  return (
    <div className="gh-root">
      <BotSymbols />

      {/* Sidebar */}
      <aside className="gh-side">
        <Link to="/" className="gh-brand">
          <LogoMark className="gh-brand-mark" />
          <span className="gh-brand-name">Good Student</span>
        </Link>

        <nav className="gh-nav">
          {nav.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            const cls = `gh-nav-item${isActive ? " is-active" : ""}`;
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

        <div className="gh-side-foot">
          {userOpen && (
            <div className="gh-user-card">
              <div className="gh-user-head">
                <div className="gh-ava">TC</div>
                <div>
                  <div className="gh-user-name">Tiffany Chiu</div>
                  <div className="gh-user-mail">tks@goodstudent.app</div>
                </div>
              </div>
              <div className="gh-user-actions">
                <button><User size={15} /> My profile</button>
                <button><Settings size={15} /> Settings</button>
              </div>
              <button className="gh-signout"><LogOut size={15} /> Sign out</button>
            </div>
          )}
          <button className="gh-user-switch" onClick={() => setUserOpen((v) => !v)}>
            <div className="gh-ava gh-ava-sm">TC</div>
            <div className="gh-user-switch-meta">
              <div className="gh-user-name">Tiffany Chiu</div>
              <div className="gh-user-mail">Student · Yr 12</div>
            </div>
            <ChevronsUpDown size={15} />
          </button>
        </div>
      </aside>

      <main className="gh-main">
        {/* Hero */}
        <header className="gh-hero">
          <div className="gh-eyebrow"><span className="gh-dot" /> Thursday · Welcome back</div>
          <h1 className="gh-title">
            Hi Tiffany — your <span className="gh-hl">{streak}-day streak</span> is alive.
          </h1>
          <p className="gh-subtitle">A quick look at today and the week — then pick your direction.</p>
        </header>

        {/* Row 1: streak + time */}
        <section className="gh-row-2">
          <article className="gh-card gh-card--streak">
            <div className="gh-card-head">
              <span className="gh-card-eyebrow"><Flame size={12} /> Study streak</span>
              <span className="gh-card-chip">+1 today</span>
            </div>
            <div className="gh-card-body">
              <div className="gh-streak-num">
                <span className="gh-streak-big">{streak}</span>
                <span className="gh-streak-unit">days<br/>in a row</span>
              </div>
              <div className="gh-week">
                {weekLabels.map((d, i) => (
                  <div key={i} className={`gh-day${streakDays[i] ? " on" : ""}${i === todayIdx ? " is-today" : ""}`}>
                    <span className="gh-day-dot">{streakDays[i] ? <Flame size={12} /> : null}</span>
                    <span className="gh-day-lbl">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="gh-card gh-card--time">
            <div className="gh-card-head">
              <span className="gh-card-eyebrow"><Clock size={12} /> Time today</span>
              <span className="gh-card-chip gh-card-chip--soft">Goal {timeGoal}m</span>
            </div>
            <div className="gh-card-body gh-time-body">
              <div className="gh-ring-wrap">
                <svg viewBox="0 0 100 100" className="gh-ring">
                  <defs>
                    <linearGradient id="gh-ring-g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FFD56B" />
                      <stop offset="100%" stopColor="#FB6A1E" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r={ringR} fill="none" stroke="#FFEEDD" strokeWidth="10" />
                  <circle cx="50" cy="50" r={ringR} fill="none" stroke="url(#gh-ring-g)" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={ringC} strokeDashoffset={ringOffset} transform="rotate(-90 50 50)" />
                </svg>
                <div className="gh-ring-text">
                  <div className="gh-ring-num">{timeMinutes}<span>m</span></div>
                  <div className="gh-ring-sub">{timePct}% of goal</div>
                </div>
              </div>
              <div className="gh-time-meta">
                <div className="gh-time-stat"><TrendingUp size={14} /> 18m more than yesterday</div>
                <div className="gh-time-stat gh-time-stat--muted"><Clock size={14} /> Best stretch: 32m</div>
                <div className="gh-time-stat gh-time-stat--muted">{timeGoal - timeMinutes}m left to hit your goal</div>
              </div>
            </div>
          </article>
        </section>

        {/* Row 2: tutor of the day + tool of the week (panel style, matching tutors/tools pages) */}
        <section className="gh-row-2">
          <article className="gh-feat gh-feat--tutor">
            <div className="gh-feat-head">
              <span className="gh-card-eyebrow"><Crown size={12} /> Tutor of the day</span>
            </div>
            <div className="gh-feat-body">
              <div className="gh-feat-media">
                <SceneEnglish />
                <span className="gh-feat-crown"><Crown size={14} /></span>
              </div>
              <div className="gh-feat-meta">
                <h3 className="gh-feat-title">DSE English</h3>
                <p className="gh-feat-sub">Paper 1–4 · with you for 42 minutes today</p>
                <div className="gh-feat-stats">
                  <div><b>3</b><span>sessions</span></div>
                  <div><b>12</b><span>questions</span></div>
                  <div><b>78%</b><span>recall</span></div>
                </div>
                <Link to="/tutors" className="gh-feat-cta">Open tutor <ArrowRight size={14} /></Link>
              </div>
            </div>
          </article>

          <article className="gh-feat gh-feat--tool">
            <div className="gh-feat-head">
              <span className="gh-card-eyebrow"><Sparkles size={12} /> Tool of the week</span>
            </div>
            <div className="gh-feat-body">
              <div className="gh-feat-tool">
                <div className="gh-feat-toolic"><Layers size={30} strokeWidth={1.8} /></div>
                <div className="gh-feat-meta">
                  <h3 className="gh-feat-title">Flashcards</h3>
                  <p className="gh-feat-sub">182 cards reviewed across 7 days</p>
                </div>
              </div>
              <div className="gh-spark">
                {weekUsage.map((v, i) => (
                  <div key={i} className="gh-spark-col">
                    <span className={`gh-spark-bar${i === todayIdx ? " is-today" : ""}`} style={{ height: `${24 + (v / peakUsage) * 60}px` }} />
                    <span className="gh-spark-lbl">{weekLabels[i]}</span>
                  </div>
                ))}
              </div>
              <Link to="/tools" className="gh-feat-cta">Open tool <ArrowRight size={14} /></Link>
            </div>
          </article>
        </section>

        {/* Pick your direction — tutor-card style */}
        <section className="gh-section">
          <div className="gh-section-head">
            <div>
              <div className="gh-section-eyebrow"><Compass size={13} /> Where to go next</div>
              <h2 className="gh-section-title">Pick your direction</h2>
            </div>
          </div>
          <div className="gh-dir-grid">
            {directions.map((d) => {
              const Inner = (
                <>
                  <div className="gh-dir-media">{d.scene}</div>
                  <div className="gh-dir-body">
                    <div className="gh-dir-tag"><d.icon size={11} /> {d.tag}</div>
                    <h3 className="gh-dir-title">{d.title}</h3>
                    <p className="gh-dir-sub">{d.sub}</p>
                    <span className="gh-dir-arrow"><ArrowRight size={16} /></span>
                  </div>
                </>
              );
              return d.to ? (
                <Link key={d.id} to={d.to} className="gh-dir">{Inner}</Link>
              ) : (
                <button key={d.id} type="button" className="gh-dir">{Inner}</button>
              );
            })}
          </div>
        </section>
      </main>

      <style>{css}</style>
    </div>
  );
}

const css = `
.gh-root{
  --orange:#FB6A1E;--orange-deep:#E04E07;--orange-2:#FF8A3D;--amber:#FFB454;
  --cream:#FFF7EF;--cream-2:#FFEEDD;--paper:#FFFCF8;
  --ink:#311C10;--ink-soft:#7A6453;--ink-faint:#A8978A;
  --teal:#13A483;--line:#F0DEC9;
  --violet:#6F5FE0;--violet-2:#8A7BE8;
  --shadow-sm:0 4px 16px -6px rgba(120,60,20,.22);
  --shadow:0 22px 50px -24px rgba(176,72,12,.42);
  --font-display:'Fredoka',system-ui,sans-serif;
  --font-body:'DM Sans',system-ui,sans-serif;
  font-family:var(--font-body);color:var(--ink);background:var(--cream);
  min-height:100vh;display:flex;-webkit-font-smoothing:antialiased;line-height:1.55;
}
.gh-root *{box-sizing:border-box}
.gh-root::before{
  content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55;
  background:radial-gradient(50% 42% at 88% -4%,rgba(255,138,61,.28),transparent 60%),
             radial-gradient(40% 38% at -4% 12%,rgba(255,180,84,.26),transparent 60%);
}
.gh-root h1,.gh-root h2,.gh-root h3{font-family:var(--font-display);font-weight:600;letter-spacing:-.015em;line-height:1.15;margin:0}

/* sidebar */
.gh-side{width:248px;flex-shrink:0;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;padding:22px 18px;background:rgba(255,247,239,.7);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-right:1px solid var(--line);z-index:5}
.gh-brand{display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:32px;text-decoration:none;color:inherit}
.gh-brand-mark{width:38px;height:38px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.gh-brand:hover .gh-brand-mark{transform:rotate(-10deg) scale(1.08)}
.gh-brand-name{font-family:var(--font-display);font-weight:700;font-size:1.18rem;letter-spacing:-.02em;background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.gh-nav{display:flex;flex-direction:column;gap:3px;flex:1}
.gh-nav-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;font-family:var(--font-body);font-weight:500;font-size:.94rem;color:var(--ink-soft);background:transparent;border:none;cursor:pointer;text-align:left;text-decoration:none;transition:background .18s,color .18s}
.gh-nav-item:hover{background:rgba(255,255,255,.7);color:var(--ink)}
.gh-nav-item.is-active{background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm);font-weight:600}
.gh-nav-item.is-active svg{color:var(--orange)}
.gh-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.gh-user-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:10px}
.gh-user-head{display:flex;align-items:center;gap:10px}
.gh-ava{width:36px;height:36px;border-radius:11px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;font-weight:600;font-family:var(--font-display);display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;box-shadow:var(--shadow-sm)}
.gh-ava-sm{width:34px;height:34px;font-size:.76rem;border-radius:10px}
.gh-user-name{font-family:var(--font-display);font-weight:600;font-size:.9rem;color:var(--ink)}
.gh-user-mail{font-size:.76rem;color:var(--ink-soft)}
.gh-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px}
.gh-user-actions button,.gh-signout{display:flex;align-items:center;gap:10px;background:transparent;border:none;cursor:pointer;padding:8px 6px;border-radius:8px;font-size:.86rem;color:var(--ink-soft);text-align:left;font-family:var(--font-body)}
.gh-user-actions button:hover,.gh-signout:hover{background:var(--cream);color:var(--ink)}
.gh-signout{border-top:1px solid var(--line);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.gh-user-switch{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-sm);transition:transform .15s,box-shadow .15s,border-color .15s;font-family:inherit}
.gh-user-switch:hover{transform:translateY(-1px);border-color:var(--orange-2)}
.gh-user-switch-meta{flex:1;text-align:left;min-width:0;overflow:hidden}
.gh-user-switch-meta .gh-user-name,.gh-user-switch-meta .gh-user-mail{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gh-user-switch>svg{color:var(--ink-faint);flex-shrink:0}

/* main */
.gh-main{flex:1;min-width:0;padding:40px 56px 80px;position:relative;z-index:1}

/* hero */
.gh-hero{margin-bottom:28px;max-width:780px}
.gh-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:14px}
.gh-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:gh-ping 2s infinite}
@keyframes gh-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.gh-title{font-size:clamp(2rem,3.4vw,2.85rem)}
.gh-hl{color:var(--orange-deep);position:relative;display:inline-block;white-space:nowrap}
.gh-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.gh-subtitle{margin-top:12px;color:var(--ink-soft);font-size:1rem;max-width:36em}

/* 2-column rows */
.gh-row-2{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px}

/* metric cards (streak / time) */
.gh-card{background:#fffdf9;border:1px solid var(--line);border-radius:22px;padding:22px 24px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:18px;min-height:220px;position:relative;overflow:hidden;transition:transform .2s,box-shadow .2s}
.gh-card:hover{transform:translateY(-2px);box-shadow:var(--shadow)}
.gh-card--streak{background:linear-gradient(165deg,#FFF1E0 0%,#FFFCF8 65%)}
.gh-card--time{background:linear-gradient(165deg,#FFF6E0 0%,#FFFCF8 65%)}
.gh-card-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.gh-card-eyebrow{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}
.gh-card-chip{font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;padding:4px 9px;border-radius:999px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;box-shadow:var(--shadow-sm)}
.gh-card-chip--soft{background:var(--cream-2);color:var(--orange-deep);box-shadow:none}
.gh-card-body{flex:1;display:flex;flex-direction:column;gap:20px}

/* streak body */
.gh-streak-num{display:flex;align-items:flex-end;gap:10px}
.gh-streak-big{font-family:var(--font-display);font-weight:700;font-size:4.2rem;line-height:.85;background:linear-gradient(160deg,var(--orange-deep),#B33D04);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.gh-streak-unit{font-size:.78rem;color:var(--ink-soft);line-height:1.2;padding-bottom:8px;letter-spacing:.02em}
.gh-week{display:flex;gap:8px;margin-top:auto}
.gh-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 0 8px;border-radius:13px;background:var(--cream);border:1px solid transparent;transition:background .2s}
.gh-day.on{background:#fff;border-color:var(--line)}
.gh-day.is-today{background:linear-gradient(160deg,var(--orange-2),var(--orange));border-color:transparent;box-shadow:var(--shadow-sm)}
.gh-day-dot{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,180,84,.25);color:var(--orange-deep)}
.gh-day.on .gh-day-dot{background:linear-gradient(150deg,#FFD56B,var(--orange));color:#fff}
.gh-day.is-today .gh-day-dot{background:#fff;color:var(--orange-deep)}
.gh-day-lbl{font-family:var(--font-display);font-weight:600;font-size:.7rem;color:var(--ink-faint);letter-spacing:.05em}
.gh-day.is-today .gh-day-lbl{color:#fff}

/* time body */
.gh-time-body{flex-direction:row;align-items:center;gap:24px}
.gh-ring-wrap{position:relative;width:150px;height:150px;flex-shrink:0}
.gh-ring{width:100%;height:100%}
.gh-ring-text{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.gh-ring-num{font-family:var(--font-display);font-weight:700;font-size:2.1rem;color:var(--ink);line-height:1;display:flex;align-items:baseline;gap:2px}
.gh-ring-num span{font-size:.9rem;color:var(--ink-soft);font-weight:500}
.gh-ring-sub{font-size:.72rem;color:var(--ink-soft);margin-top:4px}
.gh-time-meta{flex:1;display:flex;flex-direction:column;gap:10px}
.gh-time-stat{display:inline-flex;align-items:center;gap:7px;font-size:.85rem;color:var(--teal);font-weight:600;font-family:var(--font-display)}
.gh-time-stat--muted{color:var(--ink-soft);font-weight:500}

/* featured panels (tutor of day / tool of week) */
.gh-feat{background:#fffdf9;border:1px solid var(--line);border-radius:22px;padding:22px 24px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:18px;min-height:260px;transition:transform .2s,box-shadow .2s,border-color .2s}
.gh-feat:hover{transform:translateY(-2px);box-shadow:var(--shadow);border-color:var(--orange-2)}
.gh-feat-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.gh-feat-body{display:flex;gap:18px;align-items:stretch;flex:1;flex-direction:column}

.gh-feat--tutor .gh-feat-body{flex-direction:row;align-items:center}
.gh-feat-media{position:relative;flex-shrink:0;width:190px;border-radius:18px;overflow:hidden;border:1px solid var(--line)}
.gh-scene{width:100%;height:100%;display:block}
.gh-feat-crown{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;background:linear-gradient(150deg,#FFD56B,#F2A93D);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);border:2px solid #fff}
.gh-feat-meta{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.gh-feat-title{font-family:var(--font-display);font-weight:700;font-size:1.3rem;color:var(--ink)}
.gh-feat-sub{font-size:.85rem;color:var(--ink-soft);margin:0}
.gh-feat-stats{display:flex;gap:14px;margin-top:8px}
.gh-feat-stats > div{display:flex;flex-direction:column;padding:8px 14px;background:var(--cream);border-radius:12px;border:1px solid var(--line)}
.gh-feat-stats b{font-family:var(--font-display);font-weight:700;font-size:1.1rem;color:var(--ink);line-height:1}
.gh-feat-stats span{font-size:.68rem;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.08em;margin-top:3px}
.gh-feat-cta{margin-top:auto;align-self:flex-start;font-family:var(--font-display);font-weight:600;font-size:.85rem;color:var(--orange-deep);text-decoration:none;display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;background:#fff;border:1px solid var(--line);box-shadow:var(--shadow-sm);transition:gap .15s,background .15s}
.gh-feat-cta:hover{gap:9px;background:var(--cream-2)}

/* tool of week */
.gh-feat-tool{display:flex;align-items:center;gap:14px}
.gh-feat-toolic{width:60px;height:60px;border-radius:16px;background:linear-gradient(150deg,var(--violet-2),var(--violet));color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);flex-shrink:0}
.gh-spark{display:flex;align-items:flex-end;gap:10px;flex:1;padding:8px 0}
.gh-spark-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px}
.gh-spark-bar{width:100%;max-width:32px;border-radius:8px 8px 4px 4px;background:linear-gradient(180deg,var(--violet-2),var(--violet));opacity:.7;transition:transform .2s}
.gh-spark-bar.is-today{opacity:1;background:linear-gradient(180deg,#FFD56B,var(--orange));box-shadow:0 4px 12px -4px rgba(251,106,30,.5)}
.gh-feat:hover .gh-spark-bar{transform:translateY(-2px)}
.gh-spark-lbl{font-family:var(--font-display);font-weight:600;font-size:.66rem;color:var(--ink-faint);letter-spacing:.05em}

/* section header */
.gh-section{margin-top:28px;margin-bottom:48px}
.gh-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}
.gh-section-eyebrow{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:6px}
.gh-section-title{font-size:1.55rem;color:var(--ink)}

/* direction cards — match tutor-row aesthetic */
.gh-dir-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:20px}
.gh-dir{display:flex;background:#fffdf9;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:var(--shadow-sm);text-decoration:none;color:inherit;cursor:pointer;text-align:left;font:inherit;padding:0;transition:transform .22s,box-shadow .22s,border-color .22s}
.gh-dir:hover{transform:translateY(-3px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.gh-dir-media{position:relative;flex-shrink:0;width:44%;max-width:200px;min-width:150px;background:var(--cream-2);overflow:hidden;display:flex;align-items:stretch}
.gh-dir-media .gh-scene{height:100%;object-fit:cover}
.gh-dir-body{flex:1;min-width:0;padding:18px 22px;display:flex;flex-direction:column;gap:6px;position:relative}
.gh-dir-tag{align-self:flex-start;display:inline-flex;align-items:center;gap:5px;font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);background:var(--cream-2);padding:4px 10px;border-radius:999px;margin-bottom:6px}
.gh-dir-title{font-family:var(--font-display);font-weight:700;font-size:1.2rem;color:var(--ink);line-height:1.2}
.gh-dir-sub{font-size:.85rem;color:var(--ink-soft);margin:0;line-height:1.4}
.gh-dir-arrow{margin-top:auto;align-self:flex-start;width:34px;height:34px;border-radius:50%;background:#fff;border:1px solid var(--line);color:var(--orange-deep);display:inline-flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);transition:transform .2s,background .2s}
.gh-dir:hover .gh-dir-arrow{transform:translateX(4px);background:var(--cream-2)}

/* responsive */
@media (max-width:1180px){
  .gh-row-2{grid-template-columns:1fr}
  .gh-dir-grid{grid-template-columns:1fr}
}
@media (max-width:820px){
  .gh-main{padding:28px 24px 64px}
  .gh-time-body{flex-direction:column;align-items:flex-start}
  .gh-feat--tutor .gh-feat-body{flex-direction:column;align-items:stretch}
  .gh-feat-media{width:100%;max-width:none;height:180px}
}
@media (max-width:560px){
  .gh-side{display:none}
  .gh-dir{flex-direction:column}
  .gh-dir-media{width:100%;max-width:none;height:160px}
}
`;
