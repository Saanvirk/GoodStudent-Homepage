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
  PlayCircle,
  BookOpen,
  Layers,
  Crown,
  TrendingUp,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Good Student" },
      { name: "description", content: "Your study home — keep your streak alive, see today's favourite tutor and the tool of the week, and choose where to head next." },
      { property: "og:title", content: "Home — Good Student" },
      { property: "og:description", content: "Your study home — streak, time today, favourites and where to go next." },
    ],
  }),
  component: HomePage,
});

/* ===== Brand mark + mascot ===== */
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

function Mascot({ scale = 1 }: { scale?: number }) {
  return (
    <svg viewBox="0 0 220 246" className="gh-ms" aria-hidden="true" style={{ transform: `scale(${scale})` }}>
      <ellipse cx="110" cy="234" rx="54" ry="7" fill="rgba(60,40,20,.12)" />
      <rect x="88" y="188" width="14" height="36" rx="7" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" />
      <rect x="118" y="188" width="14" height="36" rx="7" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" />
      <ellipse cx="95" cy="226" rx="13" ry="6" fill="#FFFCF5" stroke="#E2D6BD" strokeWidth="2" />
      <ellipse cx="125" cy="226" rx="13" ry="6" fill="#FFFCF5" stroke="#E2D6BD" strokeWidth="2" />
      <g><rect x="50" y="138" width="14" height="46" rx="7" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" transform="rotate(14 57 161)" /><circle cx="52" cy="184" r="10" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" /></g>
      <g><rect x="156" y="138" width="14" height="46" rx="7" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" transform="rotate(-14 163 161)" /><circle cx="168" cy="184" r="10" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" /></g>
      <rect x="66" y="118" width="88" height="82" rx="30" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" />
      <rect x="85" y="138" width="50" height="36" rx="11" fill="#26323B" />
      <text x="110" y="162" textAnchor="middle" fontFamily="monospace" fontSize="16" fill="#46D6AE" fontWeight="700">{"</>"}</text>
      <rect x="104" y="110" width="12" height="12" rx="3" fill="#FFF7EF" stroke="#E2D6BD" strokeWidth="2" />
      <path d="M110 36 C108 24 118 22 113 12" stroke="#E2D6BD" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="112" cy="10" r="7" fill="#FB6A1E" />
      <rect x="56" y="34" width="108" height="92" rx="40" fill="#FFFCF5" stroke="#E2D6BD" strokeWidth="2" />
      <circle cx="56" cy="82" r="9" fill="#5BD0B4" />
      <circle cx="164" cy="82" r="9" fill="#5BD0B4" />
      <rect x="68" y="50" width="84" height="62" rx="26" fill="#26323B" />
      <circle cx="93" cy="80" r="11" fill="#fff" />
      <circle cx="96" cy="82" r="5" fill="#1F2A30" />
      <circle cx="127" cy="80" r="11" fill="#fff" />
      <circle cx="124" cy="82" r="5" fill="#1F2A30" />
      <circle cx="93" cy="80" r="15" fill="none" stroke="#2FB39A" strokeWidth="5" />
      <circle cx="127" cy="80" r="15" fill="none" stroke="#2FB39A" strokeWidth="5" />
      <path d="M108 78 q1 -3 4 0" stroke="#2FB39A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="80" cy="98" rx="7" ry="4" fill="#C77E5A" opacity=".5" />
      <ellipse cx="140" cy="98" rx="7" ry="4" fill="#C77E5A" opacity=".5" />
      <ellipse cx="110" cy="100" rx="6" ry="5" fill="#FB6A1E" />
    </svg>
  );
}

/* ===== Mini tutor head (matches tutor cards) ===== */
function TutorHead({ accent = "#F7B27A" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="gh-th" aria-hidden="true">
      <circle cx="60" cy="60" r="56" fill={accent} opacity=".35" />
      <rect x="30" y="36" width="60" height="56" rx="22" fill="#FFFCF5" stroke="#E2D6BD" strokeWidth="2" />
      <path d="M60 28 C58 20 66 18 62 12" stroke="#E2D6BD" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="62" cy="10" r="6" fill="#FB6A1E" />
      <rect x="40" y="46" width="40" height="34" rx="14" fill="#26323B" />
      <circle cx="52" cy="63" r="7" fill="#fff" />
      <circle cx="54" cy="65" r="3" fill="#1F2A30" />
      <circle cx="68" cy="63" r="7" fill="#fff" />
      <circle cx="66" cy="65" r="3" fill="#1F2A30" />
      <circle cx="52" cy="63" r="9" fill="none" stroke="#2FB39A" strokeWidth="3" />
      <circle cx="68" cy="63" r="9" fill="none" stroke="#2FB39A" strokeWidth="3" />
      <circle cx="30" cy="58" r="6" fill="#5BD0B4" />
      <circle cx="90" cy="58" r="6" fill="#5BD0B4" />
      <ellipse cx="60" cy="80" rx="4" ry="3" fill="#FB6A1E" />
    </svg>
  );
}

/* ===== data ===== */
const weekLabels = ["M", "T", "W", "T", "F", "S", "S"];
const streakDays = [true, true, true, true, true, true, true]; // 7-day streak
const todayIdx = 3; // Thursday highlight

const timeMinutes = 64;
const timeGoal = 90;

const weekUsage = [22, 38, 14, 46, 30, 12, 20]; // tool usage minutes per day this week

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

  return (
    <div className="gh-root">
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
        {/* ===== Hero ===== */}
        <header className="gh-hero">
          <div className="gh-hero-copy">
            <div className="gh-eyebrow"><span className="gh-dot" /> Thursday · Welcome back</div>
            <h1 className="gh-title">
              Hi Tiffany — your <span className="gh-hl">{streak}-day streak</span> is on fire.
            </h1>
            <p className="gh-subtitle">
              A quick snapshot of today and the week — and three places to head next.
            </p>
          </div>

          <div className="gh-mascot-card">
            <div className="gh-mascot-art"><Mascot /></div>
            <div className="gh-mascot-bubble">
              <b>Looking good!</b>
              <span>{timeGoal - timeMinutes} more minutes today and you hit your goal.</span>
            </div>
          </div>
        </header>

        {/* ===== Four metric cards ===== */}
        <section className="gh-metrics">
          {/* Study streak */}
          <article className="gh-m gh-m--streak">
            <div className="gh-m-head">
              <span className="gh-m-eyebrow"><Flame size={12} /> Study streak</span>
              <span className="gh-m-chip">+1 today</span>
            </div>
            <div className="gh-m-streak-num">
              <span className="gh-m-big">{streak}</span>
              <span className="gh-m-unit">days<br/>in a row</span>
              <div className="gh-m-flame" aria-hidden="true">
                <Flame size={64} />
              </div>
            </div>
            <div className="gh-m-week">
              {weekLabels.map((d, i) => (
                <div key={i} className={`gh-m-day${streakDays[i] ? " on" : ""}${i === todayIdx ? " is-today" : ""}`}>
                  <span className="gh-m-day-dot">{streakDays[i] ? <Flame size={11} /> : null}</span>
                  <span className="gh-m-day-lbl">{d}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Time today */}
          <article className="gh-m gh-m--time">
            <div className="gh-m-head">
              <span className="gh-m-eyebrow"><Clock size={12} /> Time today</span>
              <span className="gh-m-chip gh-m-chip--soft">Goal {timeGoal}m</span>
            </div>
            <div className="gh-m-ring-wrap">
              <svg viewBox="0 0 100 100" className="gh-m-ring">
                <defs>
                  <linearGradient id="gh-ring-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFD56B" />
                    <stop offset="100%" stopColor="#FB6A1E" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r={ringR} fill="none" stroke="#FFEEDD" strokeWidth="10" />
                <circle
                  cx="50" cy="50" r={ringR} fill="none"
                  stroke="url(#gh-ring-g)" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={ringC} strokeDashoffset={ringOffset}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="gh-m-ring-text">
                <div className="gh-m-ring-num">{timeMinutes}<span>m</span></div>
                <div className="gh-m-ring-sub">{timePct}% of goal</div>
              </div>
            </div>
            <div className="gh-m-foot">
              <TrendingUp size={13} /> 18m more than yesterday
            </div>
          </article>

          {/* Tutor of the day */}
          <article className="gh-m gh-m--tutor">
            <div className="gh-m-head">
              <span className="gh-m-eyebrow"><Crown size={12} /> Tutor of the day</span>
              <span className="gh-m-chip gh-m-chip--gold">MVP</span>
            </div>
            <div className="gh-m-tutor">
              <div className="gh-m-tutor-art">
                <TutorHead accent="#F7B27A" />
                <span className="gh-m-tutor-crown" aria-hidden="true">
                  <Crown size={16} />
                </span>
              </div>
              <div className="gh-m-tutor-meta">
                <div className="gh-m-tutor-name">DSE English</div>
                <div className="gh-m-tutor-sub">3 sessions · 42 min</div>
                <div className="gh-m-tutor-bar"><span style={{ width: "78%" }} /></div>
              </div>
            </div>
            <Link to="/tutors" className="gh-m-link">Open tutor <ArrowRight size={13} /></Link>
          </article>

          {/* Tool of the week */}
          <article className="gh-m gh-m--tool">
            <div className="gh-m-head">
              <span className="gh-m-eyebrow"><Sparkles size={12} /> Tool of the week</span>
              <span className="gh-m-chip gh-m-chip--violet">Top pick</span>
            </div>
            <div className="gh-m-tool">
              <div className="gh-m-tool-ic"><Layers size={28} strokeWidth={1.8} /></div>
              <div className="gh-m-tool-meta">
                <div className="gh-m-tool-name">Flashcards</div>
                <div className="gh-m-tool-sub">182 cards reviewed</div>
              </div>
            </div>
            <div className="gh-m-spark" aria-hidden="true">
              {weekUsage.map((v, i) => (
                <span
                  key={i}
                  className={`gh-m-spark-bar${i === todayIdx ? " is-today" : ""}`}
                  style={{ height: `${20 + (v / peakUsage) * 36}px` }}
                />
              ))}
            </div>
            <div className="gh-m-spark-lbl">
              {weekLabels.map((d, i) => <span key={i}>{d}</span>)}
            </div>
          </article>
        </section>

        {/* ===== Where to go next ===== */}
        <section className="gh-section">
          <div className="gh-section-head">
            <div>
              <div className="gh-section-eyebrow"><Compass size={13} /> Where to go next</div>
              <h2 className="gh-section-title">Pick your direction</h2>
            </div>
          </div>
          <div className="gh-next-grid">
            {/* Tutors */}
            <Link to="/tutors" className="gh-next gh-next--tutors">
              <div className="gh-next-bg" aria-hidden="true">
                <div className="gh-next-blob gh-next-blob--1" />
                <div className="gh-next-blob gh-next-blob--2" />
              </div>
              <div className="gh-next-art">
                <div className="gh-next-mascot"><Mascot /></div>
              </div>
              <div className="gh-next-body">
                <div className="gh-next-tag"><Pencil size={11} /> Tutors</div>
                <h3>Sit with a tutor</h3>
                <p>Ready-made DSE tutors, or build your own from notes and past papers.</p>
                <span className="gh-next-cta">Meet your tutors <ArrowRight size={14} /></span>
              </div>
            </Link>

            {/* Tools */}
            <Link to="/tools" className="gh-next gh-next--tools">
              <div className="gh-next-bg" aria-hidden="true">
                <div className="gh-next-blob gh-next-blob--3" />
                <div className="gh-next-blob gh-next-blob--4" />
              </div>
              <div className="gh-next-art gh-next-art--tools">
                <span className="gh-tool-chip gh-tool-chip--a"><Layers size={18} /></span>
                <span className="gh-tool-chip gh-tool-chip--b"><BookOpen size={18} /></span>
                <span className="gh-tool-chip gh-tool-chip--c"><PlayCircle size={18} /></span>
                <span className="gh-tool-chip gh-tool-chip--d"><Sparkles size={16} /></span>
              </div>
              <div className="gh-next-body">
                <div className="gh-next-tag"><Wrench size={11} /> Tools</div>
                <h3>Grab a tool</h3>
                <p>Flashcards, mind maps, speaking practice, summarisers — one click to the right one.</p>
                <span className="gh-next-cta">Open the workshop <ArrowRight size={14} /></span>
              </div>
            </Link>

            {/* Explore */}
            <button type="button" className="gh-next gh-next--explore">
              <div className="gh-next-bg" aria-hidden="true">
                <div className="gh-next-blob gh-next-blob--5" />
                <div className="gh-next-blob gh-next-blob--6" />
              </div>
              <div className="gh-next-art gh-next-art--explore">
                <svg viewBox="0 0 160 160" className="gh-globe" aria-hidden="true">
                  <defs>
                    <radialGradient id="gh-globe-g" cx="35%" cy="30%">
                      <stop offset="0%" stopColor="#7BE3C8" />
                      <stop offset="100%" stopColor="#13A483" />
                    </radialGradient>
                  </defs>
                  <circle cx="80" cy="80" r="58" fill="url(#gh-globe-g)" />
                  <ellipse cx="80" cy="80" rx="58" ry="22" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2" />
                  <ellipse cx="80" cy="80" rx="22" ry="58" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2" />
                  <circle cx="80" cy="22" r="4" fill="#FB6A1E" />
                  <circle cx="42" cy="96" r="3" fill="#FFD56B" />
                  <circle cx="118" cy="64" r="3" fill="#FFD56B" />
                </svg>
                <span className="gh-explore-pin gh-explore-pin--a" />
                <span className="gh-explore-pin gh-explore-pin--b" />
                <span className="gh-explore-pin gh-explore-pin--c" />
              </div>
              <div className="gh-next-body">
                <div className="gh-next-tag"><Globe size={11} /> Explore</div>
                <h3>Discover what's new</h3>
                <p>Curated study packs, community tutors and fresh experiments from the Good Student team.</p>
                <span className="gh-next-cta">Start exploring <ArrowRight size={14} /></span>
              </div>
            </button>
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
.gh-main{flex:1;min-width:0;padding:38px 56px 80px;position:relative;z-index:1}

/* hero */
.gh-hero{display:grid;grid-template-columns:1.6fr .9fr;gap:36px;align-items:center;margin-bottom:30px}
.gh-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:14px}
.gh-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:gh-ping 2s infinite}
@keyframes gh-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.gh-title{font-size:clamp(2rem,3.4vw,2.85rem)}
.gh-hl{color:var(--orange-deep);position:relative;display:inline-block;white-space:nowrap}
.gh-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.gh-subtitle{margin-top:12px;color:var(--ink-soft);font-size:1rem;max-width:34em}

.gh-mascot-card{position:relative;display:flex;justify-content:flex-end;align-items:flex-end;min-height:170px}
.gh-mascot-art{width:150px;filter:drop-shadow(0 14px 22px rgba(120,40,0,.22));animation:gh-bob 4s ease-in-out infinite}
@keyframes gh-bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}
.gh-mascot-bubble{position:absolute;top:6px;left:0;max-width:230px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:12px 16px;box-shadow:var(--shadow)}
.gh-mascot-bubble b{font-family:var(--font-display);font-weight:600;color:var(--ink);font-size:.95rem;display:block;margin-bottom:2px}
.gh-mascot-bubble span{font-size:.82rem;color:var(--ink-soft);line-height:1.45}
.gh-mascot-bubble::after{content:"";position:absolute;bottom:-9px;right:32px;width:18px;height:18px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}

/* ===== Metric cards ===== */
.gh-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:52px}
.gh-m{background:#fffdf9;border:1px solid var(--line);border-radius:24px;padding:18px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden;display:flex;flex-direction:column;gap:12px;min-height:240px;transition:transform .2s,box-shadow .2s}
.gh-m:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.gh-m-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.gh-m-eyebrow{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-display);font-weight:600;font-size:.7rem;letter-spacing:.13em;text-transform:uppercase;color:var(--orange-deep)}
.gh-m-chip{font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;padding:4px 8px;border-radius:999px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;box-shadow:var(--shadow-sm)}
.gh-m-chip--soft{background:var(--cream-2);color:var(--orange-deep);box-shadow:none}
.gh-m-chip--gold{background:linear-gradient(150deg,#FFD56B,#F2A93D)}
.gh-m-chip--violet{background:linear-gradient(150deg,var(--violet-2),var(--violet))}

/* streak card */
.gh-m--streak{background:linear-gradient(165deg,#FFF1E0 0%,#FFFCF8 60%)}
.gh-m-streak-num{position:relative;display:flex;align-items:flex-end;gap:8px;padding:6px 4px 0}
.gh-m-big{font-family:var(--font-display);font-weight:700;font-size:3.4rem;line-height:.9;color:var(--ink);background:linear-gradient(160deg,var(--orange-deep),#B33D04);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.gh-m-unit{font-size:.72rem;color:var(--ink-soft);line-height:1.2;padding-bottom:6px;letter-spacing:.02em}
.gh-m-flame{position:absolute;right:-6px;top:-8px;color:#FB6A1E;opacity:.25;transform:rotate(8deg)}
.gh-m-week{display:flex;gap:5px;margin-top:auto}
.gh-m-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;padding:8px 0 6px;border-radius:11px;background:var(--cream);border:1px solid transparent;transition:background .2s}
.gh-m-day.on{background:#fff;border-color:var(--line)}
.gh-m-day.is-today{background:linear-gradient(160deg,var(--orange-2),var(--orange));border-color:transparent;box-shadow:var(--shadow-sm)}
.gh-m-day-dot{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,180,84,.25);color:var(--orange-deep)}
.gh-m-day.on .gh-m-day-dot{background:linear-gradient(150deg,#FFD56B,var(--orange));color:#fff}
.gh-m-day.is-today .gh-m-day-dot{background:#fff;color:var(--orange-deep)}
.gh-m-day-lbl{font-family:var(--font-display);font-weight:600;font-size:.66rem;color:var(--ink-faint);letter-spacing:.05em}
.gh-m-day.is-today .gh-m-day-lbl{color:#fff}

/* time card */
.gh-m--time{background:linear-gradient(165deg,#FFF6E0 0%,#FFFCF8 60%)}
.gh-m-ring-wrap{position:relative;display:flex;align-items:center;justify-content:center;flex:1;padding:4px 0}
.gh-m-ring{width:140px;height:140px}
.gh-m-ring-text{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.gh-m-ring-num{font-family:var(--font-display);font-weight:700;font-size:2rem;color:var(--ink);line-height:1;display:flex;align-items:baseline;gap:2px}
.gh-m-ring-num span{font-size:.85rem;color:var(--ink-soft);font-weight:500}
.gh-m-ring-sub{font-size:.7rem;color:var(--ink-soft);margin-top:3px}
.gh-m-foot{display:inline-flex;align-items:center;gap:6px;font-size:.74rem;color:var(--teal);font-weight:600;font-family:var(--font-display)}

/* tutor of the day */
.gh-m--tutor{background:linear-gradient(165deg,#FFEDDD 0%,#FFFCF8 60%)}
.gh-m-tutor{display:flex;align-items:center;gap:14px;padding:4px 0;flex:1}
.gh-m-tutor-art{position:relative;width:78px;height:78px;flex-shrink:0}
.gh-th{width:100%;height:100%;filter:drop-shadow(0 8px 14px rgba(120,40,0,.18))}
.gh-m-tutor-crown{position:absolute;top:-6px;right:-4px;background:linear-gradient(150deg,#FFD56B,#F2A93D);color:#fff;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);border:2px solid #fffdf9}
.gh-m-tutor-meta{flex:1;min-width:0}
.gh-m-tutor-name{font-family:var(--font-display);font-weight:700;font-size:1.05rem;color:var(--ink)}
.gh-m-tutor-sub{font-size:.76rem;color:var(--ink-soft);margin-top:2px}
.gh-m-tutor-bar{height:6px;border-radius:999px;background:var(--cream-2);overflow:hidden;margin-top:10px}
.gh-m-tutor-bar span{display:block;height:100%;background:linear-gradient(90deg,#FFD56B,var(--orange))}
.gh-m-link{font-family:var(--font-display);font-weight:600;font-size:.78rem;color:var(--orange-deep);text-decoration:none;display:inline-flex;align-items:center;gap:5px;align-self:flex-start}
.gh-m-link:hover{gap:8px}

/* tool of the week */
.gh-m--tool{background:linear-gradient(165deg,#EFEAFB 0%,#FFFCF8 60%)}
.gh-m-tool{display:flex;align-items:center;gap:12px}
.gh-m-tool-ic{width:54px;height:54px;border-radius:14px;background:linear-gradient(150deg,var(--violet-2),var(--violet));color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);flex-shrink:0}
.gh-m-tool-name{font-family:var(--font-display);font-weight:700;font-size:1.05rem;color:var(--ink)}
.gh-m-tool-sub{font-size:.76rem;color:var(--ink-soft);margin-top:2px}
.gh-m-spark{display:flex;align-items:flex-end;gap:6px;height:56px;margin-top:auto}
.gh-m-spark-bar{flex:1;border-radius:6px 6px 3px 3px;background:linear-gradient(180deg,var(--violet-2),var(--violet));opacity:.7;transition:transform .2s}
.gh-m-spark-bar.is-today{opacity:1;background:linear-gradient(180deg,#FFD56B,var(--orange));box-shadow:0 4px 12px -4px rgba(251,106,30,.5)}
.gh-m:hover .gh-m-spark-bar{transform:translateY(-2px)}
.gh-m-spark-lbl{display:flex;gap:6px;font-family:var(--font-display);font-weight:600;font-size:.62rem;color:var(--ink-faint);letter-spacing:.05em}
.gh-m-spark-lbl span{flex:1;text-align:center}

/* section header */
.gh-section{margin-bottom:48px}
.gh-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}
.gh-section-eyebrow{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:6px}
.gh-section-title{font-size:1.55rem;color:var(--ink)}

/* ===== Where to go next cards ===== */
.gh-next-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.gh-next{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:14px;min-height:340px;padding:22px;border-radius:26px;border:1px solid var(--line);background:#fffdf9;box-shadow:var(--shadow-sm);text-decoration:none;color:inherit;cursor:pointer;text-align:left;font:inherit;transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s,border-color .25s}
.gh-next:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:var(--orange-2)}
.gh-next-bg{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.gh-next-blob{position:absolute;border-radius:50%;filter:blur(8px);opacity:.55;transition:transform .6s}
.gh-next:hover .gh-next-blob{transform:scale(1.1)}

/* Tutors variant */
.gh-next--tutors{background:linear-gradient(165deg,#FFE8D2 0%,#FFFCF8 70%)}
.gh-next-blob--1{width:200px;height:200px;background:radial-gradient(circle,#FF8A3D,transparent 70%);top:-60px;right:-40px}
.gh-next-blob--2{width:140px;height:140px;background:radial-gradient(circle,#FFD56B,transparent 70%);bottom:-30px;left:-30px}

/* Tools variant */
.gh-next--tools{background:linear-gradient(165deg,#EFEAFB 0%,#FFFCF8 70%)}
.gh-next-blob--3{width:200px;height:200px;background:radial-gradient(circle,#8A7BE8,transparent 70%);top:-60px;right:-40px}
.gh-next-blob--4{width:140px;height:140px;background:radial-gradient(circle,#B8AEEF,transparent 70%);bottom:-30px;left:-30px}

/* Explore variant */
.gh-next--explore{background:linear-gradient(165deg,#D9F3EA 0%,#FFFCF8 70%)}
.gh-next-blob--5{width:200px;height:200px;background:radial-gradient(circle,#37C2A0,transparent 70%);top:-60px;right:-40px}
.gh-next-blob--6{width:140px;height:140px;background:radial-gradient(circle,#7BE3C8,transparent 70%);bottom:-30px;left:-30px}

.gh-next-art{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;height:160px}
.gh-next-mascot{width:130px;filter:drop-shadow(0 14px 22px rgba(120,40,0,.22));animation:gh-bob 4.4s ease-in-out infinite}

/* tools art — floating chips */
.gh-next-art--tools{position:relative}
.gh-tool-chip{position:absolute;width:54px;height:54px;border-radius:16px;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:var(--shadow);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.gh-tool-chip--a{background:linear-gradient(150deg,#8A7BE8,#6F5FE0);top:20px;left:30%;transform:rotate(-8deg)}
.gh-tool-chip--b{background:linear-gradient(150deg,#FF8A3D,#E04E07);top:54px;left:54%;transform:rotate(6deg)}
.gh-tool-chip--c{background:linear-gradient(150deg,#37C2A0,#13A483);top:84px;left:30%;transform:rotate(4deg)}
.gh-tool-chip--d{background:linear-gradient(150deg,#FFD56B,#F2A93D);top:14px;left:62%;width:38px;height:38px;border-radius:12px;transform:rotate(-10deg)}
.gh-next--tools:hover .gh-tool-chip--a{transform:rotate(-12deg) translateY(-4px)}
.gh-next--tools:hover .gh-tool-chip--b{transform:rotate(10deg) translateY(-6px)}
.gh-next--tools:hover .gh-tool-chip--c{transform:rotate(8deg) translateY(-3px)}
.gh-next--tools:hover .gh-tool-chip--d{transform:rotate(-16deg) translateY(-5px)}

/* explore art — globe */
.gh-next-art--explore{position:relative}
.gh-globe{width:150px;height:150px;filter:drop-shadow(0 14px 22px rgba(19,164,131,.32));animation:gh-spin 22s linear infinite}
@keyframes gh-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
.gh-explore-pin{position:absolute;width:10px;height:10px;border-radius:50%;background:var(--orange);box-shadow:0 0 0 4px rgba(251,106,30,.25);animation:gh-ping 2s infinite}
.gh-explore-pin--a{top:30px;left:36%}
.gh-explore-pin--b{top:80px;left:70%;animation-delay:.4s;background:var(--amber);box-shadow:0 0 0 4px rgba(255,180,84,.3)}
.gh-explore-pin--c{top:118px;left:42%;animation-delay:.9s;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.3)}

.gh-next-body{position:relative;z-index:1;display:flex;flex-direction:column;gap:6px;margin-top:auto}
.gh-next-tag{display:inline-flex;align-items:center;gap:5px;align-self:flex-start;font-family:var(--font-display);font-weight:600;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;padding:4px 10px;border-radius:999px;background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm);margin-bottom:4px}
.gh-next h3{font-size:1.4rem;color:var(--ink)}
.gh-next p{font-size:.88rem;color:var(--ink-soft);line-height:1.5;margin:0}
.gh-next-cta{margin-top:8px;font-family:var(--font-display);font-weight:600;font-size:.86rem;color:var(--orange-deep);display:inline-flex;align-items:center;gap:6px;transition:gap .2s}
.gh-next:hover .gh-next-cta{gap:10px}

/* responsive */
@media (max-width:1180px){
  .gh-metrics{grid-template-columns:repeat(2,1fr)}
  .gh-next-grid{grid-template-columns:1fr}
}
@media (max-width:820px){
  .gh-main{padding:28px 24px 64px}
  .gh-hero{grid-template-columns:1fr}
  .gh-mascot-card{justify-content:flex-start}
}
@media (max-width:560px){
  .gh-side{display:none}
  .gh-metrics{grid-template-columns:1fr}
}
`;
