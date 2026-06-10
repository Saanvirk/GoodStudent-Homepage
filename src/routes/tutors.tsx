import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  Pencil,
  Wrench,
  Globe,
  Search,
  Plus,
  ChevronsUpDown,
  User,
  Settings,
  LogOut,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/tutors")({
  head: () => ({
    meta: [
      { title: "Tutors — Good Student" },
      { name: "description", content: "Browse pre-created tutors and build your own personalised AI tutors." },
      { property: "og:title", content: "Tutors — Good Student" },
      { property: "og:description", content: "Browse pre-created tutors and build your own." },
    ],
  }),
  component: TutorsPage,
});

/* Shared logo mark — matches the homepage mascot face */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tp-lg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#E04E07" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="16" fill="url(#tp-lg-grad)" />
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

/* Full mascot — same as homepage, for character on the page */
function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 246" className={`tp-ms ${className}`} aria-hidden="true">
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
      <circle className="gl" cx="93" cy="80" r="17" />
      <circle className="gl" cx="127" cy="80" r="17" />
      <path className="gl" d="M109 79 q1 -4 2 0" />
      <path className="gl" d="M76 78 h-8 M144 78 h8" />
      <circle className="gh" cx="88" cy="74" r="4" />
      <circle className="gh" cx="122" cy="74" r="4" />
      <ellipse className="bl" cx="80" cy="98" rx="7" ry="4" />
      <ellipse className="bl" cx="140" cy="98" rx="7" ry="4" />
      <ellipse className="mo" cx="110" cy="100" rx="6" ry="5" />
    </svg>
  );
}

type Tutor = { icon: string; title: string; subtitle?: string; tint: string; meta?: string };

const preCreated: Tutor[] = [
  { icon: "📝", title: "DSE English", subtitle: "Writing • Reading • Speaking", tint: "linear-gradient(150deg,#FF8A3D,#FB6A1E)" },
  { icon: "🧮", title: "DSE Maths", subtitle: "Core • M1 • M2", tint: "linear-gradient(150deg,#3F95E6,#2E7BD0)" },
  { icon: "🏛️", title: "DSE Citizenship", subtitle: "Hong Kong & the world", tint: "linear-gradient(150deg,#37C2A0,#13A483)" },
  { icon: "📖", title: "DSE 中文", subtitle: "閱讀 • 寫作 • 聆聽說話", tint: "linear-gradient(150deg,#E86A9A,#C84A7E)" },
];

const myTutors: Tutor[] = [
  { icon: "🧬", title: "Biology · my notes", subtitle: "Built from 24 pages", tint: "linear-gradient(150deg,#8A7BE8,#6F5FE0)", meta: "Last edited 2d ago" },
];

function TutorCard({ t }: { t: Tutor }) {
  return (
    <button className="tp-card">
      <div className="tp-card-ic" style={{ background: t.tint }}>
        <span>{t.icon}</span>
      </div>
      <h3 className="tp-card-title">{t.title}</h3>
      {t.subtitle && <p className="tp-card-sub">{t.subtitle}</p>}
      <span className="tp-card-arrow"><ArrowRight size={16} /></span>
    </button>
  );
}

function MyTutorCard({ t }: { t: Tutor }) {
  return (
    <button className="tp-mycard">
      <div className="tp-card-ic tp-card-ic--sm" style={{ background: t.tint }}>
        <span>{t.icon}</span>
      </div>
      <div className="tp-mycard-body">
        <h3 className="tp-mycard-title">{t.title}</h3>
        <p className="tp-mycard-sub">{t.subtitle}</p>
        <span className="tp-mycard-meta">{t.meta}</span>
      </div>
      <ArrowRight size={16} className="tp-mycard-arrow" />
    </button>
  );
}

function TutorsPage() {
  const [active, setActive] = useState("tutor");
  const [userOpen, setUserOpen] = useState(false);

  const nav = [
    { id: "home", label: "Home", icon: Home, to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil },
    { id: "tools", label: "Tools", icon: Wrench, to: "/tools" as const },
    { id: "explore", label: "Explore", icon: Globe },
  ];

  return (
    <div className="tp-root">
      <aside className="tp-side">
        <div className="tp-brand">
          <LogoMark className="tp-brand-mark" />
          <span className="tp-brand-name">Good Student</span>
        </div>

        <nav className="tp-nav">
          {nav.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            const cls = `tp-nav-item${isActive ? " is-active" : ""}`;
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

        <div className="tp-side-foot">
          {userOpen && (
            <div className="tp-user-card">
              <div className="tp-user-head">
                <div className="tp-ava">TC</div>
                <div>
                  <div className="tp-user-name">Tiffany Chiu</div>
                  <div className="tp-user-mail">tks@goodstudent.app</div>
                </div>
              </div>
              <div className="tp-user-actions">
                <button><User size={15} /> My profile</button>
                <button><Settings size={15} /> Settings</button>
              </div>
              <button className="tp-signout"><LogOut size={15} /> Sign out</button>
            </div>
          )}
          <button className="tp-user-switch" onClick={() => setUserOpen((v) => !v)}>
            <div className="tp-ava tp-ava-sm">TC</div>
            <div className="tp-user-switch-meta">
              <div className="tp-user-name">Tiffany Chiu</div>
              <div className="tp-user-mail">Student · Yr 12</div>
            </div>
            <ChevronsUpDown size={15} />
          </button>
        </div>
      </aside>

      <main className="tp-main">
        <header className="tp-top">
          <div className="tp-top-copy">
            <div className="tp-eyebrow"><span className="tp-dot" /> Your tutors</div>
            <h1 className="tp-title">
              Pick a tutor, or <span className="tp-hl">build your own</span>.
            </h1>
            <p className="tp-subtitle">Start with a ready-made DSE tutor, or upload your notes and I'll become one.</p>
          </div>

          <div className="tp-mascot-card">
            <div className="tp-mascot-art"><Mascot /></div>
            <div className="tp-mascot-bubble">
              <b>Hi again!</b>
              <span>Which one should we work on today?</span>
            </div>
          </div>
        </header>

        <div className="tp-top-actions">
          <button className="tp-btn tp-btn-ghost"><Search size={15} /> Search tutors</button>
          <button className="tp-btn tp-btn-primary"><Plus size={15} /> New tutor</button>
        </div>

        <section className="tp-section">
          <div className="tp-section-head">
            <span className="tp-section-label">Pre-created tutors</span>
            <span className="tp-section-count">{preCreated.length}</span>
          </div>
          <div className="tp-grid">
            {preCreated.map((t) => <TutorCard key={t.title} t={t} />)}
          </div>
        </section>

        <section className="tp-section">
          <div className="tp-section-head">
            <span className="tp-section-label">My tutors</span>
            <span className="tp-section-count">{myTutors.length}</span>
          </div>
          <div className="tp-mygrid">
            {myTutors.map((t) => <MyTutorCard key={t.title} t={t} />)}
            <button className="tp-build">
              <div className="tp-build-ic"><Plus size={22} strokeWidth={2.4} /></div>
              <div>
                <p className="tp-build-title">Build a new tutor</p>
                <p className="tp-build-sub">Upload notes, pick a vibe, go <Sparkles size={12} /></p>
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
.tp-root{
  --orange:#FB6A1E;--orange-deep:#E04E07;--orange-2:#FF8A3D;--amber:#FFB454;
  --cream:#FFF7EF;--cream-2:#FFEEDD;--paper:#FFFCF8;
  --ink:#311C10;--ink-soft:#7A6453;--ink-faint:#A8978A;
  --teal:#13A483;--line:#F0DEC9;
  --shadow-sm:0 4px 16px -6px rgba(120,60,20,.22);
  --shadow:0 22px 50px -24px rgba(176,72,12,.42);
  --font-display:'Fredoka',system-ui,sans-serif;
  --font-body:'DM Sans',system-ui,sans-serif;
  font-family:var(--font-body);color:var(--ink);background:var(--cream);
  min-height:100vh;display:flex;-webkit-font-smoothing:antialiased;
  line-height:1.55;
}
.tp-root *{box-sizing:border-box}
.tp-root::before{
  content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55;
  background:radial-gradient(50% 42% at 88% -4%,rgba(255,138,61,.28),transparent 60%),
             radial-gradient(40% 38% at -4% 12%,rgba(255,180,84,.26),transparent 60%);
}
.tp-root h1,.tp-root h2,.tp-root h3{font-family:var(--font-display);font-weight:600;letter-spacing:-.015em;line-height:1.1;margin:0}

/* ===== sidebar ===== */
.tp-side{
  width:248px;flex-shrink:0;position:sticky;top:0;height:100vh;
  display:flex;flex-direction:column;
  padding:22px 18px;background:rgba(255,247,239,.7);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-right:1px solid var(--line);z-index:5;
}
.tp-brand{display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:32px}
.tp-brand-mark{width:38px;height:38px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.tp-brand:hover .tp-brand-mark{transform:rotate(-10deg) scale(1.08)}
.tp-brand-name{font-family:var(--font-display);font-weight:700;font-size:1.18rem;letter-spacing:-.02em;
  background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
}

.tp-nav{display:flex;flex-direction:column;gap:3px;flex:1}
.tp-nav-item{
  display:flex;align-items:center;gap:12px;
  padding:10px 14px;border-radius:12px;
  font-family:var(--font-body);font-weight:500;font-size:.94rem;color:var(--ink-soft);
  background:transparent;border:none;cursor:pointer;text-align:left;
  text-decoration:none;transition:background .18s,color .18s;
}
.tp-nav-item:hover{background:rgba(255,255,255,.7);color:var(--ink)}
.tp-nav-item.is-active{
  background:#fff;color:var(--orange-deep);
  box-shadow:var(--shadow-sm);font-weight:600;
}
.tp-nav-item.is-active svg{color:var(--orange)}

.tp-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.tp-user-card{
  background:#fff;border:1px solid var(--line);border-radius:18px;
  padding:14px;box-shadow:var(--shadow-sm);
  display:flex;flex-direction:column;gap:10px;
}
.tp-user-head{display:flex;align-items:center;gap:10px}
.tp-ava{
  width:36px;height:36px;border-radius:11px;
  background:linear-gradient(150deg,var(--orange-2),var(--orange));
  color:#fff;font-weight:600;font-family:var(--font-display);
  display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;
  box-shadow:var(--shadow-sm);
}
.tp-ava-sm{width:34px;height:34px;font-size:.76rem;border-radius:10px}
.tp-user-name{font-family:var(--font-display);font-weight:600;font-size:.9rem;color:var(--ink)}
.tp-user-mail{font-size:.76rem;color:var(--ink-soft)}
.tp-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px}
.tp-user-actions button,.tp-signout{
  display:flex;align-items:center;gap:10px;
  background:transparent;border:none;cursor:pointer;
  padding:8px 6px;border-radius:8px;font-size:.86rem;color:var(--ink-soft);text-align:left;
  font-family:var(--font-body);
}
.tp-user-actions button:hover,.tp-signout:hover{background:var(--cream);color:var(--ink)}
.tp-signout{border-top:1px solid var(--line);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.tp-user-switch{
  display:flex;align-items:center;gap:10px;
  background:#fff;border:1px solid var(--line);border-radius:14px;
  padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-sm);
  transition:transform .15s,box-shadow .15s,border-color .15s;
  font-family:inherit;
}
.tp-user-switch:hover{transform:translateY(-1px);border-color:var(--orange-2)}
.tp-user-switch-meta{flex:1;text-align:left;min-width:0;overflow:hidden}
.tp-user-switch-meta .tp-user-name,.tp-user-switch-meta .tp-user-mail{
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.tp-user-switch>svg{color:var(--ink-faint);flex-shrink:0}

/* ===== main ===== */
.tp-main{flex:1;min-width:0;padding:38px 56px 80px;position:relative;z-index:1}

.tp-top{
  display:grid;grid-template-columns:1.4fr .9fr;gap:36px;align-items:center;
  margin-bottom:24px;
}
.tp-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  font-family:var(--font-display);font-weight:600;
  font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);
  margin-bottom:14px;
}
.tp-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);
  box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:tp-ping 2s infinite;}
@keyframes tp-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}

.tp-title{font-size:clamp(2.1rem,3.6vw,3rem)}
.tp-hl{color:var(--orange-deep);position:relative;display:inline-block;white-space:nowrap}
.tp-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;
  background:var(--amber);opacity:.5;border-radius:8px;z-index:-1;}
.tp-subtitle{margin-top:12px;color:var(--ink-soft);font-size:1.02rem;max-width:32em}

/* small mascot card */
.tp-mascot-card{position:relative;display:flex;justify-content:flex-end;align-items:flex-end;min-height:160px}
.tp-mascot-art{width:140px;filter:drop-shadow(0 14px 22px rgba(120,40,0,.22));animation:tp-bob 4s ease-in-out infinite}
@keyframes tp-bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}
.tp-mascot-bubble{
  position:absolute;top:6px;left:0;max-width:220px;
  background:#fff;border:1px solid var(--line);border-radius:18px;padding:12px 16px;
  box-shadow:var(--shadow);
}
.tp-mascot-bubble b{font-family:var(--font-display);font-weight:600;color:var(--ink);font-size:.95rem;display:block;margin-bottom:2px}
.tp-mascot-bubble span{font-size:.82rem;color:var(--ink-soft);line-height:1.45}
.tp-mascot-bubble::after{content:"";position:absolute;bottom:-9px;right:32px;width:18px;height:18px;
  background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}

.tp-top-actions{display:flex;gap:12px;margin-bottom:40px}
.tp-btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:11px 20px;border-radius:999px;font-weight:600;font-size:.92rem;
  cursor:pointer;border:none;
  font-family:var(--font-display);
  transition:transform .18s,box-shadow .18s,border-color .18s;
}
.tp-btn-ghost{background:#fff;color:var(--ink);border:1.5px solid var(--line);box-shadow:var(--shadow-sm)}
.tp-btn-ghost:hover{transform:translateY(-2px);border-color:var(--orange-2);color:var(--orange-deep)}
.tp-btn-primary{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;box-shadow:var(--shadow-sm)}
.tp-btn-primary:hover{transform:translateY(-2px) scale(1.02);box-shadow:var(--shadow)}

/* sections */
.tp-section{margin-bottom:44px}
.tp-section-head{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.tp-section-label{
  font-family:var(--font-display);font-weight:600;font-size:.78rem;
  letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);
}
.tp-section-count{
  font-size:.7rem;font-weight:600;color:var(--orange-deep);
  background:var(--cream-2);padding:3px 9px;border-radius:999px;
  font-family:var(--font-display);
}

/* pre-created grid */
.tp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px}
.tp-card{
  position:relative;
  background:linear-gradient(165deg,#fff,#fff7ef);
  border:1px solid var(--line);border-radius:22px;
  padding:22px;cursor:pointer;font-family:inherit;color:inherit;text-align:left;
  display:flex;flex-direction:column;align-items:flex-start;gap:0;
  min-height:182px;box-shadow:var(--shadow-sm);
  transition:transform .25s,box-shadow .25s,border-color .25s;
}
.tp-card:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:var(--orange-2)}
.tp-card-ic{
  width:54px;height:54px;border-radius:16px;
  display:grid;place-items:center;
  font-size:1.55rem;color:#fff;margin-bottom:18px;
  box-shadow:var(--shadow-sm);transform:rotate(-4deg);transition:transform .3s;
}
.tp-card:hover .tp-card-ic{transform:rotate(8deg) scale(1.06)}
.tp-card-ic--sm{width:46px;height:46px;font-size:1.3rem;margin-bottom:0;border-radius:14px}
.tp-card-title{font-family:var(--font-display);font-weight:600;font-size:1.12rem;color:var(--ink)}
.tp-card-sub{font-size:.86rem;color:var(--ink-soft);margin-top:4px}
.tp-card-arrow{
  position:absolute;top:22px;right:22px;
  width:30px;height:30px;border-radius:50%;
  background:var(--cream-2);
  display:flex;align-items:center;justify-content:center;color:var(--ink-faint);
  transition:all .2s;
}
.tp-card:hover .tp-card-arrow{background:var(--orange);color:#fff;transform:translateX(3px)}

/* my tutors */
.tp-mygrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px}
.tp-mycard{
  display:flex;align-items:center;gap:14px;
  background:linear-gradient(165deg,#fff,#fff7ef);
  border:1px solid var(--line);border-radius:18px;padding:16px;
  cursor:pointer;font-family:inherit;color:inherit;text-align:left;
  box-shadow:var(--shadow-sm);
  transition:transform .2s,box-shadow .2s,border-color .2s;
}
.tp-mycard:hover{transform:translateX(4px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.tp-mycard-body{flex:1;min-width:0}
.tp-mycard-title{font-family:var(--font-display);font-weight:600;font-size:1rem;color:var(--ink)}
.tp-mycard-sub{font-size:.82rem;color:var(--ink-soft);margin-top:2px}
.tp-mycard-meta{display:block;font-size:.72rem;color:var(--ink-faint);margin-top:6px;font-style:italic}
.tp-mycard-arrow{color:var(--ink-faint);transition:transform .2s,color .2s;flex-shrink:0}
.tp-mycard:hover .tp-mycard-arrow{color:var(--orange-deep);transform:translateX(3px)}

/* build new */
.tp-build{
  display:flex;align-items:center;gap:14px;
  background:var(--cream);
  border:1.5px dashed var(--orange-2);border-radius:18px;
  padding:16px;cursor:pointer;font-family:inherit;color:inherit;text-align:left;
  transition:background .2s,border-color .2s,transform .2s;
}
.tp-build:hover{background:var(--cream-2);border-color:var(--orange-deep);transform:translateY(-2px)}
.tp-build-ic{
  width:46px;height:46px;border-radius:14px;
  background:linear-gradient(160deg,var(--orange-2),var(--orange));
  color:#fff;display:grid;place-items:center;flex-shrink:0;
  box-shadow:var(--shadow-sm);
}
.tp-build-title{font-family:var(--font-display);font-weight:600;font-size:1rem;color:var(--orange-deep)}
.tp-build-sub{font-size:.8rem;color:var(--ink-soft);margin-top:2px;display:inline-flex;align-items:center;gap:5px}
.tp-build-sub svg{color:var(--amber)}

/* mascot SVG colors */
.tp-ms{width:100%;height:auto;display:block}
.tp-ms .sh{fill:rgba(49,28,16,.12)}
.tp-ms .bf{fill:#FFF6EC}
.tp-ms .st{stroke:#EBD2B6;stroke-width:2.2;fill:#FFF6EC}
.tp-ms .scr{fill:#26323B}
.tp-ms .scrt{fill:#46D6AE;font-family:monospace;font-size:17px;font-weight:700}
.tp-ms .ant{fill:#FFB454}
.tp-ms .ac{fill:#FFB454}
.tp-ms .fc{fill:#26323B}
.tp-ms .ew{fill:#fff}
.tp-ms .ep{fill:#26323B}
.tp-ms .gl{fill:none;stroke:#46D6AE;stroke-width:2.4}
.tp-ms .gh{fill:#fff;opacity:.7}
.tp-ms .bl{fill:#FF9A57;opacity:.7}
.tp-ms .mo{fill:#E04E07}

@media (max-width: 960px){
  .tp-main{padding:24px 22px 64px}
  .tp-top{grid-template-columns:1fr;gap:20px}
  .tp-mascot-card{justify-content:flex-start;min-height:0}
  .tp-mascot-art{width:110px}
}
@media (max-width: 720px){
  .tp-root{flex-direction:column}
  .tp-side{width:100%;height:auto;position:relative;border-right:none;border-bottom:1px solid var(--line);padding:14px 16px}
  .tp-nav{flex-direction:row;flex-wrap:wrap;gap:4px}
  .tp-side-foot{margin-top:12px}
  .tp-grid{grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}
}
`;
