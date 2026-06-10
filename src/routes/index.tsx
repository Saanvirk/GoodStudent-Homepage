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
  Trophy,
  Target,
  Sparkles,
  Zap,
  Star,
  Calendar,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  Calculator,
  Languages,
  Layers,
  Mic,
  FileText,
  Brain,
  Headphones,
  PenTool,
  Award,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Good Student" },
      { name: "description", content: "Your study home — pick up where you left off, jump into a tutor, open a favourite tool, and keep your streak alive." },
      { property: "og:title", content: "Home — Good Student" },
      { property: "og:description", content: "Your study home — tutors, tools and daily quests." },
    ],
  }),
  component: HomePage,
});

/* ===== Brand mark + mascot (matched to tutors page) ===== */
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

function Mascot() {
  return (
    <svg viewBox="0 0 220 246" className="gh-ms" aria-hidden="true">
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

/* ===== data ===== */
const quickTutors = [
  { id: "eng", title: "DSE English", sub: "Paper 1–4", tint: "#F7E4DE", ink: "#9E3B27", icon: BookOpen, last: "Resumed yesterday" },
  { id: "mat", title: "DSE Maths", sub: "Core · M1 · M2", tint: "#FBEED1", ink: "#A4742A", icon: Calculator, last: "2 quizzes today" },
  { id: "chi", title: "DSE 中文", sub: "閱讀 · 寫作", tint: "#FAE6E8", ink: "#9E2B2B", icon: Languages, last: "New past paper" },
  { id: "notes", title: "English · my notes", sub: "Built from 24 pages", tint: "#E6EEF7", ink: "#3D5A6C", icon: PenTool, last: "Custom tutor" },
];

const favTools = [
  { id: "flash", title: "Flashcards", sub: "From any topic", tint: "#F2E8EE", ink: "#8C5E7A", icon: Layers },
  { id: "say",   title: "Say It Right!", sub: "Speaking practice", tint: "#E8EEF2", ink: "#3D5A6C", icon: Mic },
  { id: "hear",  title: "Hear It Right!", sub: "Listening drills", tint: "#FBEFE8", ink: "#C8553D", icon: Headphones },
  { id: "doc",   title: "Doc Summariser", sub: "PDFs → key points", tint: "#EFEAD9", ink: "#7A6B4F", icon: FileText },
  { id: "mind",  title: "Mind Maps", sub: "Revise visually", tint: "#F2E6D8", ink: "#9C6B3F", icon: Brain },
];

const quests = [
  { id: "q1", label: "Finish 1 English reading set", xp: 40, done: true },
  { id: "q2", label: "5 Maths quiz questions", xp: 30, done: true },
  { id: "q3", label: "Try a speaking prompt", xp: 50, done: false },
];

const badges = [
  { id: "b1", label: "7-day streak", icon: Flame, on: true,  tint: "linear-gradient(150deg,#FF8A3D,#E04E07)" },
  { id: "b2", label: "First quiz",   icon: Star,  on: true,  tint: "linear-gradient(150deg,#FFD56B,#F2A93D)" },
  { id: "b3", label: "Note ninja",   icon: PenTool, on: true, tint: "linear-gradient(150deg,#8A7BE8,#6F5FE0)" },
  { id: "b4", label: "Listener",     icon: Headphones, on: false, tint: "linear-gradient(150deg,#A8B8C2,#7C8A95)" },
  { id: "b5", label: "Polyglot",     icon: Languages, on: false, tint: "linear-gradient(150deg,#A8B8C2,#7C8A95)" },
];

/* ===== page ===== */
function HomePage() {
  const [active, setActive] = useState("home");
  const [userOpen, setUserOpen] = useState(false);
  const [questState, setQuestState] = useState(quests);

  const nav = [
    { id: "home",  label: "Home",  icon: Home,   to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil, to: "/tutors" as const },
    { id: "tools", label: "Tools", icon: Wrench, to: "/tools" as const },
    { id: "explore", label: "Explore", icon: Globe },
  ];

  const totalXp = questState.reduce((s, q) => s + q.xp, 0);
  const earnedXp = questState.filter((q) => q.done).reduce((s, q) => s + q.xp, 0);
  const pct = Math.round((earnedXp / totalXp) * 100);
  const level = 6;
  const streak = 7;

  const toggleQuest = (id: string) =>
    setQuestState((qs) => qs.map((q) => (q.id === id ? { ...q, done: !q.done } : q)));

  return (
    <div className="gh-root">
      {/* Sidebar (matches tutors/tools) */}
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
        {/* ===== Hero greeting + gamification ===== */}
        <header className="gh-hero">
          <div className="gh-hero-copy">
            <div className="gh-eyebrow"><span className="gh-dot" /> Welcome back</div>
            <h1 className="gh-title">
              Hi Tiffany — let's keep that <span className="gh-hl">streak</span> alive.
            </h1>
            <p className="gh-subtitle">
              You're {100 - pct}% away from finishing today's quests. Pick up where you left
              off, or jump into something new.
            </p>
            <div className="gh-hero-cta">
              <button className="gh-btn gh-btn-primary">
                <PlayCircle size={17} /> Resume English · Paper 2
              </button>
              <Link to="/tutors" className="gh-btn gh-btn-ghost">
                Browse tutors <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="gh-mascot-card">
            <div className="gh-mascot-art"><Mascot /></div>
            <div className="gh-mascot-bubble">
              <b>Day {streak} — nice!</b>
              <span>Two quick wins and you'll level up to <b>Lv {level + 1}</b>.</span>
            </div>
          </div>
        </header>

        {/* ===== Gamification strip ===== */}
        <section className="gh-stats">
          <div className="gh-stat gh-stat--streak">
            <div className="gh-stat-ic"><Flame size={20} /></div>
            <div className="gh-stat-body">
              <div className="gh-stat-num">{streak}<span>days</span></div>
              <div className="gh-stat-lbl">Study streak</div>
            </div>
            <div className="gh-streak-row">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className={`gh-streak-dot${i < streak ? " on" : ""}`} />
              ))}
            </div>
          </div>

          <div className="gh-stat gh-stat--xp">
            <div className="gh-stat-ic"><Zap size={20} /></div>
            <div className="gh-stat-body">
              <div className="gh-stat-num">{earnedXp}<span>/ {totalXp} XP</span></div>
              <div className="gh-stat-lbl">Today's progress</div>
            </div>
            <div className="gh-bar"><span style={{ width: `${pct}%` }} /></div>
          </div>

          <div className="gh-stat gh-stat--lv">
            <div className="gh-stat-ic"><Trophy size={20} /></div>
            <div className="gh-stat-body">
              <div className="gh-stat-num">Lv {level}<span>Scholar</span></div>
              <div className="gh-stat-lbl">240 XP to Lv {level + 1}</div>
            </div>
            <div className="gh-bar gh-bar--alt"><span style={{ width: "62%" }} /></div>
          </div>

          <div className="gh-stat gh-stat--quest">
            <div className="gh-stat-ic"><Target size={20} /></div>
            <div className="gh-stat-body">
              <div className="gh-stat-num">{questState.filter(q=>q.done).length}<span>/ {questState.length} quests</span></div>
              <div className="gh-stat-lbl">Daily quests</div>
            </div>
            <div className="gh-quest-mini">
              {questState.map((q) => (
                <span key={q.id} className={`gh-quest-pill${q.done ? " done" : ""}`} title={q.label}>
                  {q.done ? <CheckCircle2 size={12} /> : <span className="gh-quest-empty" />}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Quick access tutors ===== */}
        <section className="gh-section">
          <div className="gh-section-head">
            <div>
              <div className="gh-section-eyebrow"><Sparkles size={13} /> Quick access</div>
              <h2 className="gh-section-title">Your tutors</h2>
            </div>
            <Link to="/tutors" className="gh-section-link">See all <ArrowRight size={14} /></Link>
          </div>
          <div className="gh-tutor-grid">
            {quickTutors.map((t) => {
              const Icon = t.icon;
              return (
                <Link key={t.id} to="/tutors" className="gh-tutor-card">
                  <div className="gh-tutor-media" style={{ background: t.tint, color: t.ink }}>
                    <Icon size={34} strokeWidth={1.8} />
                  </div>
                  <div className="gh-tutor-body">
                    <h3>{t.title}</h3>
                    <p className="gh-tutor-sub">{t.sub}</p>
                    <p className="gh-tutor-last"><Calendar size={11} /> {t.last}</p>
                  </div>
                  <ArrowRight size={16} className="gh-tutor-arrow" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ===== Favourite tools ===== */}
        <section className="gh-section">
          <div className="gh-section-head">
            <div>
              <div className="gh-section-eyebrow"><Star size={13} /> Favourites</div>
              <h2 className="gh-section-title">Tools you keep coming back to</h2>
            </div>
            <Link to="/tools" className="gh-section-link">All tools <ArrowRight size={14} /></Link>
          </div>
          <div className="gh-tool-grid">
            {favTools.map((t) => {
              const Icon = t.icon;
              return (
                <Link key={t.id} to="/tools" className="gh-tool-card">
                  <div className="gh-tool-ic" style={{ background: t.tint, color: t.ink }}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="gh-tool-title">{t.title}</div>
                    <div className="gh-tool-sub">{t.sub}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ===== Quests + Badges (two-up) ===== */}
        <section className="gh-twoup">
          <div className="gh-panel">
            <div className="gh-panel-head">
              <div>
                <div className="gh-section-eyebrow"><Target size={13} /> Daily quests</div>
                <h2 className="gh-section-title">Knock these out for XP</h2>
              </div>
              <span className="gh-panel-meta">Resets at midnight</span>
            </div>
            <ul className="gh-quest-list">
              {questState.map((q) => (
                <li key={q.id} className={`gh-quest${q.done ? " is-done" : ""}`}>
                  <button
                    type="button"
                    className="gh-quest-check"
                    aria-label={q.done ? "Mark incomplete" : "Mark complete"}
                    onClick={() => toggleQuest(q.id)}
                  >
                    {q.done ? <CheckCircle2 size={20} /> : <span className="gh-quest-empty gh-quest-empty--lg" />}
                  </button>
                  <div className="gh-quest-text">{q.label}</div>
                  <span className="gh-quest-xp">+{q.xp} XP</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="gh-panel">
            <div className="gh-panel-head">
              <div>
                <div className="gh-section-eyebrow"><Award size={13} /> Achievements</div>
                <h2 className="gh-section-title">Badges you've earned</h2>
              </div>
              <span className="gh-panel-meta">{badges.filter(b=>b.on).length} / {badges.length}</span>
            </div>
            <div className="gh-badges">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.id} className={`gh-badge${b.on ? "" : " is-locked"}`}>
                    <div className="gh-badge-ic" style={{ background: b.tint }}>
                      {b.on ? <Icon size={22} /> : <Lock size={18} />}
                    </div>
                    <div className="gh-badge-lbl">{b.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== About the app (no Explore) ===== */}
        <section className="gh-section">
          <div className="gh-section-head">
            <div>
              <div className="gh-section-eyebrow"><BookOpen size={13} /> Around the app</div>
              <h2 className="gh-section-title">Where to go next</h2>
            </div>
          </div>
          <div className="gh-about-grid">
            <Link to="/tutors" className="gh-about-card">
              <div className="gh-about-ic" style={{ background: "linear-gradient(150deg,#FF8A3D,#E04E07)" }}>
                <Pencil size={20} />
              </div>
              <h3>Tutors</h3>
              <p>Pick a ready-made DSE tutor or build your own from notes, past papers and slides.</p>
              <span className="gh-about-cta">Open tutors <ArrowRight size={14} /></span>
            </Link>
            <Link to="/tools" className="gh-about-card">
              <div className="gh-about-ic" style={{ background: "linear-gradient(150deg,#8A7BE8,#6F5FE0)" }}>
                <Wrench size={20} />
              </div>
              <h3>Tools</h3>
              <p>Flashcards, mind maps, speaking practice, summarisers — open the right tool for now.</p>
              <span className="gh-about-cta">Open tools <ArrowRight size={14} /></span>
            </Link>
            <Link to="/welcome" className="gh-about-card">
              <div className="gh-about-ic" style={{ background: "linear-gradient(150deg,#37C2A0,#13A483)" }}>
                <Sparkles size={20} />
              </div>
              <h3>About Good Student</h3>
              <p>What we believe about AI literacy, how the tutor thinks, and the team behind it.</p>
              <span className="gh-about-cta">Read more <ArrowRight size={14} /></span>
            </Link>
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
.gh-main{flex:1;min-width:0;padding:38px 56px 80px;position:relative;z-index:1}

/* hero */
.gh-hero{display:grid;grid-template-columns:1.5fr .9fr;gap:36px;align-items:center;margin-bottom:28px}
.gh-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:14px}
.gh-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:gh-ping 2s infinite}
@keyframes gh-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.gh-title{font-size:clamp(2rem,3.4vw,2.85rem)}
.gh-hl{color:var(--orange-deep);position:relative;display:inline-block;white-space:nowrap}
.gh-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.gh-subtitle{margin-top:12px;color:var(--ink-soft);font-size:1rem;max-width:34em}
.gh-hero-cta{display:flex;gap:12px;margin-top:22px;flex-wrap:wrap}
.gh-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:999px;font-weight:600;font-size:.92rem;cursor:pointer;border:none;font-family:var(--font-display);transition:transform .18s,box-shadow .18s,border-color .18s;text-decoration:none}
.gh-btn-ghost{background:#fff;color:var(--ink);border:1.5px solid var(--line);box-shadow:var(--shadow-sm)}
.gh-btn-ghost:hover{transform:translateY(-2px);border-color:var(--orange-2);color:var(--orange-deep)}
.gh-btn-primary{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;box-shadow:var(--shadow-sm)}
.gh-btn-primary:hover{transform:translateY(-2px) scale(1.02);box-shadow:var(--shadow)}

.gh-mascot-card{position:relative;display:flex;justify-content:flex-end;align-items:flex-end;min-height:170px}
.gh-mascot-art{width:150px;filter:drop-shadow(0 14px 22px rgba(120,40,0,.22));animation:gh-bob 4s ease-in-out infinite}
@keyframes gh-bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}
.gh-mascot-bubble{position:absolute;top:6px;left:0;max-width:230px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:12px 16px;box-shadow:var(--shadow)}
.gh-mascot-bubble b{font-family:var(--font-display);font-weight:600;color:var(--ink);font-size:.95rem;display:block;margin-bottom:2px}
.gh-mascot-bubble span{font-size:.82rem;color:var(--ink-soft);line-height:1.45}
.gh-mascot-bubble::after{content:"";position:absolute;bottom:-9px;right:32px;width:18px;height:18px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}

/* stats strip */
.gh-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:44px}
.gh-stat{background:#fffdf9;border:1px solid var(--line);border-radius:20px;padding:16px 18px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden;display:flex;flex-direction:column;gap:10px;min-height:128px}
.gh-stat::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,138,61,.05),transparent 60%);pointer-events:none}
.gh-stat-ic{width:36px;height:36px;border-radius:11px;display:flex;align-items:center;justify-content:center;color:#fff;background:linear-gradient(150deg,var(--orange-2),var(--orange));box-shadow:var(--shadow-sm)}
.gh-stat--xp .gh-stat-ic{background:linear-gradient(150deg,#FFD56B,#F2A93D)}
.gh-stat--lv .gh-stat-ic{background:linear-gradient(150deg,#8A7BE8,#6F5FE0)}
.gh-stat--quest .gh-stat-ic{background:linear-gradient(150deg,#37C2A0,#13A483)}
.gh-stat-body{display:flex;flex-direction:column;gap:1px}
.gh-stat-num{font-family:var(--font-display);font-weight:700;font-size:1.45rem;line-height:1;color:var(--ink);display:flex;align-items:baseline;gap:6px}
.gh-stat-num span{font-size:.72rem;font-weight:500;color:var(--ink-faint);letter-spacing:.02em;text-transform:uppercase}
.gh-stat-lbl{font-size:.78rem;color:var(--ink-soft)}
.gh-streak-row{display:flex;gap:5px;margin-top:auto}
.gh-streak-dot{flex:1;height:6px;border-radius:999px;background:var(--cream-2)}
.gh-streak-dot.on{background:linear-gradient(90deg,var(--orange-2),var(--orange))}
.gh-bar{height:8px;border-radius:999px;background:var(--cream-2);overflow:hidden;margin-top:auto}
.gh-bar span{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#FFD56B,#F2A93D);transition:width .3s}
.gh-bar--alt span{background:linear-gradient(90deg,#8A7BE8,#6F5FE0)}
.gh-quest-mini{display:flex;gap:6px;margin-top:auto}
.gh-quest-pill{width:24px;height:24px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:var(--cream-2);color:var(--ink-faint)}
.gh-quest-pill.done{background:linear-gradient(150deg,#37C2A0,#13A483);color:#fff}
.gh-quest-empty{width:10px;height:10px;border-radius:50%;border:1.6px solid currentColor;display:block}
.gh-quest-empty--lg{width:16px;height:16px;border-width:2px}

/* generic section */
.gh-section{margin-bottom:44px}
.gh-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:18px}
.gh-section-eyebrow{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:6px}
.gh-section-title{font-size:1.35rem;color:var(--ink)}
.gh-section-link{font-family:var(--font-display);font-weight:600;font-size:.82rem;color:var(--orange-deep);text-decoration:none;display:inline-flex;align-items:center;gap:5px;padding:6px 10px;border-radius:999px;transition:background .15s}
.gh-section-link:hover{background:var(--cream-2)}

/* tutor quick cards */
.gh-tutor-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.gh-tutor-card{display:flex;align-items:center;gap:14px;padding:14px;background:#fffdf9;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-sm);text-decoration:none;color:inherit;transition:transform .2s,box-shadow .2s,border-color .2s;position:relative}
.gh-tutor-card:hover{transform:translateY(-2px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.gh-tutor-media{flex-shrink:0;width:64px;height:64px;border-radius:14px;display:flex;align-items:center;justify-content:center}
.gh-tutor-body{flex:1;min-width:0}
.gh-tutor-body h3{font-size:1rem;color:var(--ink)}
.gh-tutor-sub{font-size:.76rem;color:var(--ink-faint);margin-top:2px}
.gh-tutor-last{font-size:.72rem;color:var(--ink-soft);margin-top:6px;display:inline-flex;align-items:center;gap:5px}
.gh-tutor-arrow{color:var(--ink-faint);transition:color .15s,transform .15s}
.gh-tutor-card:hover .gh-tutor-arrow{color:var(--orange-deep);transform:translateX(3px)}

/* tool grid */
.gh-tool-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
.gh-tool-card{display:flex;align-items:center;gap:12px;padding:13px 14px;background:#fffdf9;border:1px solid var(--line);border-radius:16px;text-decoration:none;color:inherit;transition:transform .18s,border-color .18s,box-shadow .18s;box-shadow:var(--shadow-sm)}
.gh-tool-card:hover{transform:translateY(-2px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.gh-tool-ic{flex-shrink:0;width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center}
.gh-tool-title{font-family:var(--font-display);font-weight:600;font-size:.94rem;color:var(--ink)}
.gh-tool-sub{font-size:.76rem;color:var(--ink-faint);margin-top:1px}

/* two-up: quests + badges */
.gh-twoup{display:grid;grid-template-columns:1.1fr 1fr;gap:18px;margin-bottom:44px}
.gh-panel{background:#fffdf9;border:1px solid var(--line);border-radius:22px;padding:22px;box-shadow:var(--shadow-sm)}
.gh-panel-head{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-bottom:14px}
.gh-panel-meta{font-size:.72rem;font-family:var(--font-display);font-weight:600;color:var(--ink-faint);background:var(--cream-2);padding:4px 10px;border-radius:999px}

.gh-quest-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.gh-quest{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:14px;background:var(--cream);border:1px solid var(--line);transition:background .18s}
.gh-quest:hover{background:#fff}
.gh-quest-check{background:transparent;border:none;cursor:pointer;color:var(--ink-faint);display:flex;align-items:center;justify-content:center;padding:0}
.gh-quest.is-done .gh-quest-check{color:var(--teal)}
.gh-quest-text{flex:1;font-size:.92rem;color:var(--ink)}
.gh-quest.is-done .gh-quest-text{color:var(--ink-soft);text-decoration:line-through}
.gh-quest-xp{font-family:var(--font-display);font-weight:600;font-size:.76rem;color:var(--orange-deep);background:var(--cream-2);padding:4px 10px;border-radius:999px}

.gh-badges{display:grid;grid-template-columns:repeat(auto-fill,minmax(86px,1fr));gap:12px}
.gh-badge{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}
.gh-badge-ic{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:var(--shadow-sm);transition:transform .2s}
.gh-badge:hover .gh-badge-ic{transform:scale(1.06) rotate(-4deg)}
.gh-badge.is-locked .gh-badge-ic{filter:saturate(.3) opacity(.7)}
.gh-badge-lbl{font-size:.72rem;color:var(--ink-soft);font-weight:500}
.gh-badge.is-locked .gh-badge-lbl{color:var(--ink-faint)}

/* about cards */
.gh-about-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.gh-about-card{display:flex;flex-direction:column;gap:8px;padding:20px;background:#fffdf9;border:1px solid var(--line);border-radius:20px;text-decoration:none;color:inherit;box-shadow:var(--shadow-sm);transition:transform .2s,border-color .2s,box-shadow .2s}
.gh-about-card:hover{transform:translateY(-2px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.gh-about-ic{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:var(--shadow-sm);margin-bottom:6px}
.gh-about-card h3{font-size:1.08rem;color:var(--ink)}
.gh-about-card p{font-size:.86rem;color:var(--ink-soft);line-height:1.5;margin:0}
.gh-about-cta{margin-top:6px;font-family:var(--font-display);font-weight:600;font-size:.82rem;color:var(--orange-deep);display:inline-flex;align-items:center;gap:5px}

/* responsive */
@media (max-width:1080px){
  .gh-stats{grid-template-columns:repeat(2,1fr)}
  .gh-twoup{grid-template-columns:1fr}
}
@media (max-width:820px){
  .gh-main{padding:28px 24px 64px}
  .gh-hero{grid-template-columns:1fr}
  .gh-mascot-card{justify-content:flex-start}
}
@media (max-width:640px){
  .gh-side{display:none}
  .gh-stats{grid-template-columns:1fr 1fr}
}
`;
