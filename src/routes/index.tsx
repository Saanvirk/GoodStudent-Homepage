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
  Compass,
  Quote,
  Play,
} from "lucide-react";
import sayItRight from "@/assets/say-it-right.png.asset.json";

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

/* Direction scenes — vertical orientation (tall) */
function SceneTutors() {
  return (
    <svg viewBox="0 0 280 260" className="gh-scene">
      <rect width="280" height="260" rx="16" fill="#F7E4DE" />
      <circle cx="140" cy="130" r="110" fill="none" stroke="#B5462F" strokeDasharray="2 7" opacity=".35" />
      <use href="#gh-bot" x="65" y="50" width="150" height="170" />
      <rect x="94" y="170" width="92" height="36" rx="4" fill="#9E3B27" />
      <path d="M100 172 h38 v32 h-38 z" fill="#FBF6EC" />
      <path d="M142 172 h38 v32 h-38 z" fill="#FFFDF7" />
      <line x1="140" y1="170" x2="140" y2="206" stroke="#7E2C1C" strokeWidth="2" />
      <g stroke="#C9B3AC" strokeWidth="2" strokeLinecap="round">
        <line x1="106" y1="180" x2="132" y2="180" />
        <line x1="106" y1="188" x2="132" y2="188" />
        <line x1="106" y1="196" x2="126" y2="196" />
        <line x1="148" y1="180" x2="174" y2="180" />
        <line x1="148" y1="188" x2="174" y2="188" />
      </g>
      <g transform="translate(28 36)">
        <rect width="46" height="32" rx="9" fill="#fff" stroke="#E6CFC8" strokeWidth="1.5" />
        <text x="23" y="22" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="17" fontWeight="700" fill="#B5462F">Aa</text>
      </g>
      <g transform="translate(208 38)">
        <rect width="44" height="32" rx="9" fill="#fff" stroke="#E6CFC8" strokeWidth="1.5" />
        <text x="22" y="22" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="14" fontWeight="700" fill="#B5462F">π</text>
      </g>
    </svg>
  );
}
function SceneTools() {
  return (
    <svg viewBox="0 0 280 260" className="gh-scene">
      <rect width="280" height="260" rx="16" fill="#FFE7CF" />
      <circle cx="140" cy="130" r="110" fill="none" stroke="#E04E07" strokeDasharray="2 7" opacity=".3" />
      <use href="#gh-bot" x="65" y="50" width="150" height="170" />
      {/* search */}
      <g transform="translate(22 50) rotate(-12)">
        <rect width="42" height="42" rx="12" fill="#37C2A0" />
        <circle cx="18" cy="18" r="8" fill="none" stroke="#fff" strokeWidth="3" />
        <line x1="24" y1="24" x2="32" y2="32" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* youtube */}
      <g transform="translate(218 38) rotate(10)">
        <rect width="46" height="34" rx="10" fill="#E63B2E" />
        <path d="M18 10 L34 17 L18 24 Z" fill="#fff" />
      </g>
      {/* flashcards */}
      <g transform="translate(216 150) rotate(-8)">
        <rect x="6" y="6" width="38" height="28" rx="6" fill="#FFB454" />
        <rect width="38" height="28" rx="6" fill="#fff" stroke="#E2D6BD" strokeWidth="1.5" />
        <line x1="8" y1="11" x2="28" y2="11" stroke="#A8978A" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="17" x2="22" y2="17" stroke="#C9B3AC" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="23" x2="26" y2="23" stroke="#C9B3AC" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* hearing / headphones */}
      <g transform="translate(20 160) rotate(8)">
        <rect width="44" height="44" rx="12" fill="#6FB3F2" />
        <path d="M10 26 a12 12 0 0 1 24 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <rect x="8" y="24" width="8" height="12" rx="3" fill="#fff" />
        <rect x="28" y="24" width="8" height="12" rx="3" fill="#fff" />
      </g>
    </svg>
  );
}
function SceneExplore() {
  return (
    <svg viewBox="0 0 280 260" className="gh-scene">
      <rect width="280" height="260" rx="16" fill="#D9F0E8" />
      <circle cx="140" cy="130" r="110" fill="none" stroke="#13A483" strokeDasharray="2 7" opacity=".35" />
      <use href="#gh-bot" x="65" y="50" width="150" height="170" />
      <g transform="translate(22 40)">
        <circle cx="32" cy="32" r="28" fill="#37C2A0" />
        <ellipse cx="32" cy="32" rx="28" ry="11" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="11" ry="28" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
        <circle cx="32" cy="6" r="3" fill="#FB6A1E" />
      </g>
      <g transform="translate(216 40)">
        <path d="M0 8 Q14 -2 28 8 L28 44 Q14 34 0 44 Z" fill="#FFFDF7" stroke="#C9B89A" strokeWidth="1.5" />
        <path d="M14 6 L14 42" stroke="#C9B89A" strokeWidth="1.5" />
        <circle cx="7" cy="20" r="2" fill="#FB6A1E" />
        <path d="M19 14 l3 3 l-3 3 l-3 -3 z" fill="#13A483" />
      </g>
      <g transform="translate(212 168)">
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
const monthLabel = "June 2026";
// Build a 4-week (28-day) trailing calendar ending today.
// streakSet marks which past days were studied.
const calendarDays: Array<{ d: number; on: boolean; today?: boolean; future?: boolean }> = (() => {
  // 4 rows x 7 = 28 days. today at row 3, col 3 (Thu).
  const arr: Array<{ d: number; on: boolean; today?: boolean; future?: boolean }> = [];
  const pattern = [
    [1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 0], // current week, today = idx 3 (Thu)
  ];
  let day = 14; // arbitrary start day in the month
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 7; c++) {
      const idx = r * 7 + c;
      const isToday = r === 3 && c === 3;
      const isFuture = r === 3 && c > 3;
      arr.push({ d: day, on: pattern[r][c] === 1 && !isFuture, today: isToday, future: isFuture });
      day++;
    }
  }
  return arr;
})();
const weekdayHeads = ["M", "T", "W", "T", "F", "S", "S"];
const weekUsage = [22, 38, 14, 46, 30, 12, 20];
const todayIdx = 3;
const timeMinutes = 64;
const timeGoal = 90;

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

  const streak = 17; // current streak (days in a row)
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

        {/* Mission Control — integrated activity bar (no cards) */}
        <section className="gh-mc">
          {/* Stats region: streak + time */}
          <div className="gh-mc-stats">
            <div className="gh-mc-stat gh-mc-streak">
              <div className="gh-mc-streak-num">
                <span className="gh-mc-big">{streak}</span>
                <span className="gh-mc-unit">days</span>
              </div>
              <div className="gh-mc-dots" aria-label="14-day activity">
                {Array.from({ length: 14 }).map((_, i) => {
                  // last 14 days from calendarDays
                  const cell = calendarDays[14 + i];
                  const on = cell?.on;
                  const today = cell?.today;
                  return (
                    <span
                      key={i}
                      className={`gh-mc-dot${on ? " on" : ""}${today ? " is-today" : ""}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="gh-mc-divider" />

            <div className="gh-mc-stat gh-mc-time">
              <div className="gh-mc-ring-wrap">
                <svg viewBox="0 0 100 100" className="gh-mc-ring">
                  <defs>
                    <linearGradient id="gh-mc-ring-g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FFD56B" />
                      <stop offset="100%" stopColor="#FB6A1E" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r={ringR} fill="none" stroke="#FFEEDD" strokeWidth="9" />
                  <circle cx="50" cy="50" r={ringR} fill="none" stroke="url(#gh-mc-ring-g)" strokeWidth="9" strokeLinecap="round"
                    strokeDasharray={ringC} strokeDashoffset={ringOffset} transform="rotate(-90 50 50)" />
                </svg>
                <span className="gh-mc-ring-pct">{timePct}%</span>
              </div>
              <div className="gh-mc-time-meta">
                <div className="gh-mc-time-num">
                  {timeMinutes}m <span>/ {timeGoal}m</span>
                </div>
                <div className="gh-mc-time-sub"><TrendingUp size={11} /> +18m vs yesterday</div>
              </div>
            </div>
          </div>

          {/* Spotlight region: tutor challenge + tool of the week */}
          <div className="gh-mc-spots">
            <Link to="/tutors" className="gh-mc-spot gh-mc-spot--tutor">
              <div className="gh-mc-spot-ic">
                <Crown size={20} />
              </div>
              <div className="gh-mc-spot-meta">
                <div className="gh-mc-spot-lbl">Favourite tutor challenge</div>
                <div className="gh-mc-spot-title">DSE English · AI tools in exams?</div>
              </div>
              <span className="gh-mc-spot-cta">Solve</span>
            </Link>

            <Link to="/tools" className="gh-mc-spot gh-mc-spot--tool">
              <div className="gh-mc-spot-ic gh-mc-spot-ic--img">
                <img src={sayItRight.url} alt="" />
              </div>
              <div className="gh-mc-spot-meta">
                <div className="gh-mc-spot-lbl">Tool of the week</div>
                <div className="gh-mc-spot-title">Say It Right <span>· AI Speech</span></div>
              </div>
              <div className="gh-mc-wave" aria-hidden="true">
                {weekUsage.map((v, i) => (
                  <span
                    key={i}
                    className={`gh-mc-wave-bar${i === todayIdx ? " is-today" : ""}`}
                    style={{ height: `${10 + (v / peakUsage) * 22}px` }}
                  />
                ))}
              </div>
            </Link>
          </div>
        </section>


        {/* Pick your direction — 3 vertical cards in one row */}
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
                    <div className="gh-dir-row">
                      <div>
                        <div className="gh-dir-tag"><d.icon size={11} /> {d.tag}</div>
                        <h3 className="gh-dir-title">{d.title}</h3>
                        <p className="gh-dir-sub">{d.sub}</p>
                      </div>
                      <span className="gh-dir-arrow"><ArrowRight size={16} /></span>
                    </div>
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

/* rows */
.gh-row-2{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px}
.gh-row-1{display:block;margin-bottom:24px}

/* metric cards (streak / time) */
.gh-card{background:#fffdf9;border:1px solid var(--line);border-radius:22px;padding:22px 24px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:18px;min-height:240px;position:relative;overflow:hidden;transition:transform .2s,box-shadow .2s}
.gh-card:hover{transform:translateY(-2px);box-shadow:var(--shadow)}
.gh-card--streak{background:linear-gradient(165deg,#FFF1E0 0%,#FFFCF8 65%)}
.gh-card--time{background:linear-gradient(165deg,#FFF6E0 0%,#FFFCF8 65%)}
.gh-card-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.gh-card-eyebrow{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}
.gh-card-chip{font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;padding:4px 9px;border-radius:999px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;box-shadow:var(--shadow-sm)}
.gh-card-chip--soft{background:var(--cream-2);color:var(--orange-deep);box-shadow:none}
.gh-card-body{flex:1;display:flex;flex-direction:column;gap:20px}

/* streak: number on the left + calendar on the right */
.gh-cal-month{font-family:var(--font-display);font-weight:600;font-size:.78rem;color:var(--ink-soft)}
.gh-streak-top{flex:1;display:flex;gap:22px;align-items:center}
.gh-streak-num{display:flex;flex-direction:column;align-items:flex-start;gap:2px;flex-shrink:0;padding-right:10px;border-right:1px dashed var(--line)}
.gh-streak-big{font-family:var(--font-display);font-weight:700;font-size:3.6rem;line-height:.9;background:linear-gradient(160deg,var(--orange-deep),#B33D04);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.gh-streak-unit{font-size:.72rem;color:var(--ink-soft);line-height:1.2;letter-spacing:.02em}

.gh-cal{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.gh-cal-heads{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
.gh-cal-heads span{text-align:center;font-family:var(--font-display);font-weight:600;font-size:.62rem;letter-spacing:.08em;color:var(--ink-faint)}
.gh-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
.gh-cal-cell{aspect-ratio:1/1;border-radius:8px;background:var(--cream);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;position:relative;border:1px solid transparent;transition:transform .15s}
.gh-cal-cell .gh-cal-d{font-family:var(--font-display);font-weight:600;font-size:.62rem;color:var(--ink-faint);line-height:1}
.gh-cal-cell.on{background:linear-gradient(160deg,#FFD56B,var(--orange));color:#fff;box-shadow:0 4px 10px -6px rgba(251,106,30,.55)}
.gh-cal-cell.on .gh-cal-d{color:#fff;opacity:.92}
.gh-cal-cell.on .gh-cal-flame{color:#fff;filter:drop-shadow(0 1px 1px rgba(150,50,0,.35))}
.gh-cal-cell.is-today{outline:2px solid var(--orange-deep);outline-offset:2px;transform:scale(1.05)}
.gh-cal-cell.is-future{background:transparent;border:1px dashed var(--line)}
.gh-cal-cell.is-future .gh-cal-d{opacity:.55}

/* time body */
.gh-time-body{flex-direction:row;align-items:center;gap:24px}
.gh-ring-wrap{position:relative;width:150px;height:150px;flex-shrink:0}
.gh-ring{width:100%;height:100%}
.gh-ring-text{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.gh-ring-num{font-family:var(--font-display);font-weight:700;font-size:2.1rem;color:var(--ink);line-height:1;display:flex;align-items:baseline;gap:2px}
.gh-ring-num span{font-size:.9rem;color:var(--ink-soft);font-weight:500}
.gh-ring-sub{font-size:.72rem;color:var(--ink-soft);margin-top:4px}
.gh-time-meta{flex:1;display:flex;flex-direction:column;gap:10px}
.gh-time-stat{display:inline-flex;align-items:center;gap:7px;font-size:.88rem;color:var(--teal);font-weight:600;font-family:var(--font-display)}
.gh-time-stat--muted{color:var(--ink-soft);font-weight:500}

/* featured panels (tutor of day) */
.gh-feat{background:#fffdf9;border:1px solid var(--line);border-radius:22px;padding:22px 24px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:18px;transition:transform .2s,box-shadow .2s,border-color .2s}
.gh-feat:hover{transform:translateY(-2px);box-shadow:var(--shadow);border-color:var(--orange-2)}
.gh-feat-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.gh-feat-body{display:flex;gap:22px;align-items:stretch;flex:1}
.gh-feat-media{position:relative;flex-shrink:0;width:230px;border-radius:18px;overflow:hidden;border:1px solid var(--line)}
.gh-scene{width:100%;height:100%;display:block}
.gh-feat-crown{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;background:linear-gradient(150deg,#FFD56B,#F2A93D);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);border:2px solid #fff}
.gh-feat-meta{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.gh-feat-title{font-family:var(--font-display);font-weight:700;font-size:1.4rem;color:var(--ink)}

/* challenge */
.gh-challenge{background:var(--cream);border:1px solid var(--line);border-radius:16px;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.gh-challenge-tag{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);align-self:flex-start}
.gh-challenge-text{margin:0;font-size:.96rem;color:var(--ink);font-family:var(--font-display);font-weight:500;line-height:1.4}
.gh-quote{display:flex;gap:7px;align-items:flex-start;color:var(--ink-soft);font-size:.82rem;font-style:italic;border-top:1px dashed var(--line);padding-top:8px}
.gh-quote svg{flex-shrink:0;margin-top:3px;color:var(--orange)}

.gh-feat-cta{align-self:flex-start;font-family:var(--font-display);font-weight:600;font-size:.88rem;color:#fff;text-decoration:none;display:inline-flex;align-items:center;gap:6px;padding:10px 16px;border-radius:999px;background:linear-gradient(150deg,var(--orange-2),var(--orange));box-shadow:var(--shadow-sm);transition:gap .15s,transform .15s}
.gh-feat-cta:hover{gap:9px;transform:translateY(-1px)}

/* tool of the week — banner (no card) */
.gh-tow-section{margin-bottom:36px}
.gh-tow-head{margin-bottom:12px}
.gh-tow{display:flex;align-items:center;justify-content:space-between;gap:28px;padding:24px 28px;border-radius:24px;background:linear-gradient(120deg,#FFF1DE 0%,#FFE2C9 55%,#FFD2B0 100%);border:1px solid var(--line);box-shadow:var(--shadow-sm);position:relative;overflow:hidden}
.gh-tow::before{content:"";position:absolute;right:-40px;top:-40px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.55),transparent 70%);pointer-events:none}
.gh-tow-left{display:flex;align-items:center;gap:20px;flex:1;min-width:0;position:relative;z-index:1}
.gh-tow-ic{width:84px;height:84px;border-radius:22px;background:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 12px 28px -10px rgba(176,72,12,.28);border:1px solid var(--line)}
.gh-tow-ic img{width:62px;height:62px;object-fit:contain}
.gh-tow-meta{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.gh-tow-title{font-family:var(--font-display);font-weight:700;font-size:1.55rem;color:var(--ink)}
.gh-tow-sub{margin:0;color:var(--ink-soft);font-size:.92rem}
.gh-tow-phrase{margin-top:6px;background:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.9);border-radius:12px;padding:9px 13px;display:flex;flex-direction:column;gap:2px;backdrop-filter:blur(6px)}
.gh-tow-phrase-lbl{font-family:var(--font-display);font-weight:600;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}
.gh-tow-phrase-text{font-family:var(--font-display);font-weight:500;color:var(--ink);font-size:.92rem;font-style:italic}
.gh-tow-right{display:flex;flex-direction:column;align-items:flex-end;gap:14px;flex-shrink:0;position:relative;z-index:1}
.gh-wave{display:flex;align-items:flex-end;gap:5px;height:84px}
.gh-wave-bar{width:8px;border-radius:6px;background:linear-gradient(180deg,#FFD56B,var(--orange));opacity:.85;transition:transform .2s}
.gh-wave-bar.is-today{background:linear-gradient(180deg,var(--orange),var(--orange-deep));box-shadow:0 4px 12px -4px rgba(251,106,30,.5);transform:scaleY(1.08)}
.gh-tow:hover .gh-wave-bar{transform:translateY(-2px)}
.gh-tow:hover .gh-wave-bar.is-today{transform:translateY(-2px) scaleY(1.08)}
.gh-tow-cta{font-family:var(--font-display);font-weight:600;font-size:.9rem;color:#fff;text-decoration:none;display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:999px;background:linear-gradient(150deg,var(--orange-2),var(--orange));box-shadow:var(--shadow-sm);transition:transform .15s,gap .15s}
.gh-tow-cta:hover{transform:translateY(-1px);gap:10px}

/* section header */
.gh-section{margin-top:28px;margin-bottom:48px}
.gh-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}
.gh-section-eyebrow{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:6px}
.gh-section-title{font-size:1.55rem;color:var(--ink)}

/* direction cards — 3 in same row, vertical layout */
.gh-dir-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.gh-dir{display:flex;flex-direction:column;background:#fffdf9;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:var(--shadow-sm);text-decoration:none;color:inherit;cursor:pointer;text-align:left;font:inherit;padding:0;transition:transform .22s,box-shadow .22s,border-color .22s}
.gh-dir:hover{transform:translateY(-3px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.gh-dir-media{position:relative;width:100%;background:var(--cream-2);overflow:hidden;display:block;aspect-ratio:280/260}
.gh-dir-media .gh-scene{width:100%;height:100%}
.gh-dir-body{flex:1;padding:18px 20px 20px;display:flex;flex-direction:column}
.gh-dir-row{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;width:100%}
.gh-dir-row > div{min-width:0;flex:1}
.gh-dir-tag{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);background:var(--cream-2);padding:4px 10px;border-radius:999px;margin-bottom:8px}
.gh-dir-title{font-family:var(--font-display);font-weight:700;font-size:1.18rem;color:var(--ink);line-height:1.2}
.gh-dir-sub{font-size:.82rem;color:var(--ink-soft);margin:4px 0 0;line-height:1.4}
.gh-dir-arrow{flex-shrink:0;width:34px;height:34px;border-radius:50%;background:#fff;border:1px solid var(--line);color:var(--orange-deep);display:inline-flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);transition:transform .2s,background .2s}
.gh-dir:hover .gh-dir-arrow{transform:translateX(4px);background:var(--cream-2)}

/* responsive */
@media (max-width:1180px){
  .gh-row-2{grid-template-columns:1fr}
  .gh-streak-top{flex-direction:column;align-items:stretch;gap:18px}
  .gh-streak-num{flex-direction:row;align-items:flex-end;gap:10px;border-right:none;border-bottom:1px dashed var(--line);padding-right:0;padding-bottom:10px}
}
@media (max-width:980px){
  .gh-dir-grid{grid-template-columns:1fr 1fr}
  .gh-tow{flex-direction:column;align-items:stretch}
  .gh-tow-right{align-items:center}
}
@media (max-width:820px){
  .gh-main{padding:28px 24px 64px}
  .gh-time-body{flex-direction:column;align-items:flex-start}
  .gh-feat-body{flex-direction:column;align-items:stretch}
  .gh-feat-media{width:100%;height:200px}
}
@media (max-width:560px){
  .gh-side{display:none}
  .gh-dir-grid{grid-template-columns:1fr}
}
`;
