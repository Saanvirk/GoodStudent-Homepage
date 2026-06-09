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

/* tiny mascot with glasses, same vibe as landing */
function MiniMascot() {
  return (
    <svg viewBox="0 0 64 64" className="mm" aria-hidden="true">
      <rect x="10" y="10" width="44" height="44" rx="14" fill="#FB6A1E" />
      <rect x="16" y="18" width="32" height="22" rx="9" fill="#FFF7EF" />
      <circle cx="24" cy="29" r="5" fill="#311C10" />
      <circle cx="40" cy="29" r="5" fill="#311C10" />
      <circle cx="24" cy="29" r="1.6" fill="#fff" />
      <circle cx="40" cy="29" r="1.6" fill="#fff" />
      {/* glasses */}
      <circle cx="24" cy="29" r="7" fill="none" stroke="#311C10" strokeWidth="2" />
      <circle cx="40" cy="29" r="7" fill="none" stroke="#311C10" strokeWidth="2" />
      <path d="M31 29 h2" stroke="#311C10" strokeWidth="2" />
      <rect x="26" y="44" width="12" height="3" rx="1.5" fill="#311C10" />
    </svg>
  );
}

type Tutor = { emoji: string; title: string; subtitle?: string; tint?: string };

const preCreated: Tutor[] = [
  { emoji: "📝", title: "DSE English", subtitle: "Writing • Reading • Speaking", tint: "#FFE6D2" },
  { emoji: "🧮", title: "DSE Maths", subtitle: "Core • M1 • M2", tint: "#E4F0FF" },
  { emoji: "🏛️", title: "DSE Citizenship", subtitle: "Hong Kong & the world", tint: "#E9F7E4" },
  { emoji: "📖", title: "DSE 中文", subtitle: "閱讀 • 寫作 • 聆聽說話", tint: "#FDE4EC" },
];

const myTutors: Tutor[] = [
  { emoji: "🧬", title: "Biology · my notes", subtitle: "Built from 24 pages", tint: "#FFF0DC" },
];

function TutorCard({ t }: { t: Tutor }) {
  return (
    <button className="t-card" style={{ ["--tint" as never]: t.tint }}>
      <div className="t-emoji">{t.emoji}</div>
      <div className="t-meta">
        <div className="t-title">{t.title}</div>
        {t.subtitle && <div className="t-sub">{t.subtitle}</div>}
      </div>
      <span className="t-arrow">→</span>
    </button>
  );
}

function TutorsPage() {
  const [active, setActive] = useState("tutor");
  const [userOpen, setUserOpen] = useState(false);

  const nav = [
    { id: "home", label: "Home", icon: Home, to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "explore", label: "Explore", icon: Globe },
  ];

  return (
    <div className="tp-root">
      {/* Sidebar */}
      <aside className="tp-side">
        <div className="tp-brand">
          <MiniMascot />
          <div className="tp-brand-name">
            Good <span>Student</span>
          </div>
        </div>

        <nav className="tp-nav">
          {nav.map((n) => {
            const Icon = n.icon;
            const cls = `tp-nav-item${active === n.id ? " is-active" : ""}`;
            if (n.to) {
              return (
                <Link key={n.id} to={n.to} className={cls} onClick={() => setActive(n.id)}>
                  <Icon size={18} /> <span>{n.label}</span>
                </Link>
              );
            }
            return (
              <button key={n.id} className={cls} onClick={() => setActive(n.id)}>
                <Icon size={18} /> <span>{n.label}</span>
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
            <div className="tp-ava tp-ava-sm">AJ</div>
            <div className="tp-user-switch-meta">
              <div className="tp-user-name">Tiffany Chiu</div>
              <div className="tp-user-mail">Student · Yr 12</div>
            </div>
            <ChevronsUpDown size={15} />
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="tp-main">
        <header className="tp-top">
          <div>
            <h1 className="tp-title">Tutors</h1>
            <p className="tp-subtitle">Pick a tutor to start studying, or build your own from notes ✨</p>
          </div>
          <div className="tp-top-actions">
            <button className="tp-search"><Search size={16} /> Search</button>
            <button className="tp-new"><Plus size={16} /> New tutor</button>
          </div>
        </header>

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
          <div className="tp-grid">
            {myTutors.map((t) => <TutorCard key={t.title} t={t} />)}
            <button className="t-card t-build">
              <div className="t-build-icon"><Plus size={22} /></div>
              <div className="t-meta">
                <div className="t-title">Build new</div>
                <div className="t-sub">Upload notes, pick a vibe, go</div>
              </div>
              <Sparkles size={16} className="t-build-spark" />
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
  --line:#F0E2D1;
  --shadow-sm:0 2px 8px -2px rgba(49,28,16,.10);
  --shadow-md:0 12px 32px -16px rgba(49,28,16,.22);
  font-family:'DM Sans',system-ui,sans-serif;
  color:var(--ink);background:var(--cream);
  min-height:100vh;display:flex;
}
.tp-side{
  width:260px;flex-shrink:0;background:var(--paper);
  border-right:1px solid var(--line);
  padding:22px 16px;display:flex;flex-direction:column;gap:18px;
  position:sticky;top:0;height:100vh;
}
.tp-brand{display:flex;align-items:center;gap:10px;padding:4px 8px}
.tp-brand .mm{width:38px;height:38px;border-radius:12px;box-shadow:var(--shadow-sm)}
.tp-brand-name{font-family:'Fredoka',system-ui,sans-serif;font-weight:700;font-size:1.18rem;color:var(--ink)}
.tp-brand-name span{background:linear-gradient(180deg,var(--ink) 50%,var(--orange-deep));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.tp-nav{display:flex;flex-direction:column;gap:4px;margin-top:8px}
.tp-nav-item{
  display:flex;align-items:center;gap:12px;
  padding:11px 14px;border-radius:12px;
  font-weight:500;font-size:.97rem;color:var(--ink-soft);
  background:transparent;border:none;cursor:pointer;text-align:left;
  transition:background .15s,color .15s;text-decoration:none;
}
.tp-nav-item:hover{background:var(--cream-2);color:var(--ink)}
.tp-nav-item.is-active{background:var(--cream-2);color:var(--orange-deep);font-weight:600}
.tp-nav-item.is-active svg{color:var(--orange-deep)}
.tp-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.tp-user-card{
  background:#fff;border:1px solid var(--line);border-radius:16px;
  padding:14px;box-shadow:var(--shadow-sm);
  display:flex;flex-direction:column;gap:10px;
}
.tp-user-head{display:flex;align-items:center;gap:10px}
.tp-ava{
  width:38px;height:38px;border-radius:50%;
  background:linear-gradient(160deg,var(--orange-2),var(--orange));
  color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;
  font-size:.85rem;flex-shrink:0;
}
.tp-ava-sm{width:32px;height:32px;font-size:.75rem}
.tp-user-name{font-weight:600;font-size:.92rem;color:var(--ink)}
.tp-user-mail{font-size:.78rem;color:var(--ink-soft)}
.tp-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px}
.tp-user-actions button,.tp-signout{
  display:flex;align-items:center;gap:10px;
  background:transparent;border:none;cursor:pointer;
  padding:8px 6px;border-radius:8px;font-size:.88rem;color:var(--ink-soft);text-align:left;
}
.tp-user-actions button:hover,.tp-signout:hover{background:var(--cream-2);color:var(--ink)}
.tp-signout{border-top:1px solid var(--line);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.tp-user-switch{
  display:flex;align-items:center;gap:10px;
  background:#fff;border:1px solid var(--line);border-radius:14px;
  padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-sm);
  transition:transform .15s,border-color .15s;
}
.tp-user-switch:hover{transform:translateY(-1px);border-color:var(--orange-2)}
.tp-user-switch-meta{flex:1;text-align:left;min-width:0}
.tp-user-switch svg{color:var(--ink-soft)}

.tp-main{flex:1;min-width:0;padding:34px 44px 80px;max-width:1280px}
.tp-top{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:32px;flex-wrap:wrap}
.tp-title{font-family:'Fredoka',system-ui,sans-serif;font-weight:700;font-size:2.1rem;letter-spacing:-.01em;margin:0;color:var(--ink)}
.tp-subtitle{margin:6px 0 0;color:var(--ink-soft);font-size:1rem}
.tp-top-actions{display:flex;gap:10px}
.tp-search,.tp-new{
  display:inline-flex;align-items:center;gap:8px;
  padding:11px 18px;border-radius:999px;font-weight:600;font-size:.92rem;
  cursor:pointer;border:1.5px solid var(--line);background:#fff;color:var(--ink);
  box-shadow:var(--shadow-sm);transition:transform .15s,border-color .15s;
}
.tp-search:hover{transform:translateY(-1px);border-color:var(--orange-2);color:var(--orange-deep)}
.tp-new{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;border-color:transparent}
.tp-new:hover{transform:translateY(-1px);box-shadow:var(--shadow-md)}

.tp-section{margin-bottom:36px}
.tp-section-head{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.tp-section-label{
  font-family:'Fredoka',system-ui,sans-serif;font-weight:600;font-size:.78rem;
  letter-spacing:.16em;text-transform:uppercase;color:var(--orange-deep);
}
.tp-section-count{
  font-size:.74rem;font-weight:600;color:var(--ink-soft);
  background:var(--cream-2);padding:2px 9px;border-radius:999px;
}
.tp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}

.t-card{
  --tint:#FFF0DC;
  display:flex;align-items:center;gap:14px;
  padding:18px;border-radius:18px;
  background:#fff;border:1.5px solid var(--line);
  box-shadow:var(--shadow-sm);cursor:pointer;text-align:left;
  transition:transform .18s,box-shadow .18s,border-color .18s;
  position:relative;overflow:hidden;
}
.t-card::before{
  content:"";position:absolute;inset:0;background:var(--tint);opacity:0;
  transition:opacity .2s;pointer-events:none;
}
.t-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-md);border-color:var(--orange-2)}
.t-card:hover::before{opacity:.45}
.t-card>*{position:relative;z-index:1}
.t-emoji{
  width:48px;height:48px;border-radius:14px;
  background:var(--tint);display:flex;align-items:center;justify-content:center;
  font-size:1.55rem;flex-shrink:0;
}
.t-meta{flex:1;min-width:0}
.t-title{font-family:'Fredoka',system-ui,sans-serif;font-weight:600;font-size:1.05rem;color:var(--ink);line-height:1.2}
.t-sub{font-size:.82rem;color:var(--ink-soft);margin-top:3px}
.t-arrow{color:var(--ink-faint);font-size:1.1rem;transition:transform .2s,color .2s}
.t-card:hover .t-arrow{color:var(--orange-deep);transform:translateX(3px)}

.t-build{
  background:transparent;border:2px dashed var(--orange-2);
  box-shadow:none;
}
.t-build:hover{background:var(--cream-2)}
.t-build-icon{
  width:48px;height:48px;border-radius:14px;flex-shrink:0;
  background:linear-gradient(160deg,var(--orange-2),var(--orange));
  color:#fff;display:flex;align-items:center;justify-content:center;
}
.t-build-spark{color:var(--orange-deep)}

@media (max-width: 860px){
  .tp-root{flex-direction:column}
  .tp-side{width:100%;height:auto;position:relative;border-right:none;border-bottom:1px solid var(--line);padding:14px}
  .tp-nav{flex-direction:row;flex-wrap:wrap}
  .tp-side-foot{margin-top:14px}
  .tp-main{padding:24px 18px 60px}
  .tp-title{font-size:1.6rem}
}
`;
