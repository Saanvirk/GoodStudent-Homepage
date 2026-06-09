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

function MiniMascot() {
  return (
    <div className="tp-mascot">
      <div className="tp-mascot-face">
        <div className="tp-mascot-eyes">
          <span /><span />
        </div>
        <div className="tp-mascot-mouth" />
      </div>
    </div>
  );
}

type Tutor = { emoji: string; title: string; subtitle?: string; tint: string; rotate?: number; meta?: string };

const preCreated: Tutor[] = [
  { emoji: "📝", title: "DSE English", subtitle: "Writing • Reading • Speaking", tint: "#FFE6D2", rotate: 0 },
  { emoji: "🧮", title: "DSE Maths", subtitle: "Core • M1 • M2", tint: "#E4F0FF", rotate: -1 },
  { emoji: "🏛️", title: "DSE Citizenship", subtitle: "Hong Kong & the world", tint: "#E9F7E4", rotate: 1 },
  { emoji: "📖", title: "DSE 中文", subtitle: "閱讀 • 寫作 • 聆聽說話", tint: "#FDE4EC", rotate: 0 },
];

const myTutors: Tutor[] = [
  { emoji: "🧬", title: "Biology · my notes", subtitle: "Built from 24 pages", tint: "#EFE3FF", meta: "Last edited · 2d ago" },
];

function TutorCard({ t }: { t: Tutor }) {
  return (
    <div className="tp-card-wrap" style={{ transform: t.rotate ? `rotate(${t.rotate}deg)` : undefined }}>
      <div className="tp-card-shadow" />
      <button className="tp-card">
        <div className="tp-emoji" style={{ background: t.tint }}>{t.emoji}</div>
        <h3 className="tp-card-title">{t.title}</h3>
        {t.subtitle && <p className="tp-card-sub">{t.subtitle}</p>}
        <div className="tp-card-foot">
          <span className="tp-arrow"><ArrowRight size={16} /></span>
        </div>
      </button>
    </div>
  );
}

function MyTutorCard({ t }: { t: Tutor }) {
  return (
    <div className="tp-mycard-wrap">
      <div className="tp-card-shadow tp-card-shadow--sm" />
      <div className="tp-tape" />
      <button className="tp-mycard">
        <div className="tp-mycard-head">
          <div className="tp-emoji tp-emoji--sm" style={{ background: t.tint }}>{t.emoji}</div>
          <div>
            <h3 className="tp-mycard-title">{t.title}</h3>
            <p className="tp-mycard-sub">{t.subtitle}</p>
          </div>
        </div>
        <div className="tp-mycard-foot">
          <span className="tp-meta">{t.meta}</span>
          <ArrowRight size={16} className="tp-mycard-arrow" />
        </div>
      </button>
    </div>
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
            <div className="tp-ava tp-ava-sm">TC</div>
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
            <h1 className="tp-title">
              Tutors
              <span className="tp-title-highlight" />
            </h1>
            <p className="tp-subtitle">Pick a tutor to start studying, or build your own from notes ✨</p>
          </div>
          <div className="tp-top-actions">
            <button className="tp-btn"><Search size={16} /> Search</button>
            <button className="tp-btn tp-btn--primary"><Plus size={16} /> New tutor</button>
          </div>
        </header>

        <section className="tp-section">
          <div className="tp-section-head">
            <span className="tp-section-label">Pre-created tutors</span>
            <span className="tp-section-count">{preCreated.length}</span>
            <svg className="tp-squiggle" viewBox="0 0 120 8" aria-hidden="true">
              <path d="M2 4 Q 12 -2, 22 4 T 42 4 T 62 4 T 82 4 T 102 4 T 118 4" fill="none" stroke="#FB6A1E" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            </svg>
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
          <div className="tp-scrap">
            {myTutors.map((t) => <MyTutorCard key={t.title} t={t} />)}
            <button className="tp-build">
              <div className="tp-build-star">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" />
                </svg>
              </div>
              <div className="tp-build-plus">
                <Plus size={26} strokeWidth={3} />
              </div>
              <div>
                <p className="tp-build-title">Build new</p>
                <p className="tp-build-sub">Upload notes, pick a vibe, go</p>
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
  --orange:#FB6A1E;--orange-deep:#E04E07;
  --cream:#FFF7EF;--paper:#fff;
  --ink:#311C10;--ink-60:rgba(49,28,16,.6);--ink-40:rgba(49,28,16,.4);
  --ink-10:rgba(49,28,16,.1);--ink-05:rgba(49,28,16,.05);
  font-family:'DM Sans',system-ui,sans-serif;
  color:var(--ink);background:var(--cream);
  min-height:100vh;display:flex;padding:16px;gap:0;
}

/* sidebar */
.tp-side{
  width:248px;flex-shrink:0;
  display:flex;flex-direction:column;
  padding:20px 24px 20px 8px;
  border-right:2px solid var(--ink-10);
}
.tp-brand{display:flex;align-items:center;gap:12px;padding:0 12px;margin-bottom:48px}
.tp-mascot{
  width:40px;height:40px;border-radius:12px;background:var(--orange);
  box-shadow:3px 3px 0 var(--ink);
  display:flex;align-items:center;justify-content:center;
}
.tp-mascot-face{width:22px;height:22px;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.tp-mascot-eyes{display:flex;gap:3px}
.tp-mascot-eyes span{width:3px;height:3px;border-radius:50%;background:var(--ink)}
.tp-mascot-mouth{width:8px;height:2px;border-radius:2px;background:var(--ink)}
.tp-brand-name{font-family:'Fredoka',system-ui,sans-serif;font-weight:700;font-size:1.18rem;letter-spacing:-.01em}

.tp-nav{display:flex;flex-direction:column;gap:6px;flex:1}
.tp-nav-item{
  display:flex;align-items:center;gap:14px;
  padding:11px 16px;border-radius:14px;
  font-weight:500;font-size:.97rem;color:var(--ink-60);
  background:transparent;border:2px solid transparent;cursor:pointer;text-align:left;
  text-decoration:none;transition:all .15s;
}
.tp-nav-item:hover{background:rgba(255,255,255,.6);color:var(--ink)}
.tp-nav-item.is-active{
  background:#fff;color:var(--orange);
  border-color:var(--ink);box-shadow:4px 4px 0 var(--ink);
  font-family:'Fredoka',system-ui,sans-serif;font-weight:600;
}

.tp-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.tp-user-card{
  background:#fff;border:2px solid var(--ink);border-radius:18px;
  padding:14px;box-shadow:4px 4px 0 var(--ink);
  display:flex;flex-direction:column;gap:10px;
}
.tp-user-head{display:flex;align-items:center;gap:10px}
.tp-ava{
  width:38px;height:38px;border-radius:12px;
  background:var(--orange);color:#fff;font-weight:700;
  display:flex;align-items:center;justify-content:center;font-size:.82rem;flex-shrink:0;
}
.tp-ava-sm{width:36px;height:36px;font-size:.78rem;border-radius:12px}
.tp-user-name{font-weight:700;font-size:.92rem}
.tp-user-mail{font-size:.78rem;color:var(--ink-60)}
.tp-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--ink-10);padding-top:8px}
.tp-user-actions button,.tp-signout{
  display:flex;align-items:center;gap:10px;
  background:transparent;border:none;cursor:pointer;
  padding:8px 6px;border-radius:8px;font-size:.88rem;color:var(--ink-60);text-align:left;
}
.tp-user-actions button:hover,.tp-signout:hover{background:var(--cream);color:var(--ink)}
.tp-signout{border-top:1px solid var(--ink-10);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.tp-user-switch{
  display:flex;align-items:center;gap:10px;
  background:#fff;border:2px solid var(--ink);border-radius:16px;
  padding:10px 12px;cursor:pointer;box-shadow:4px 4px 0 var(--ink);
  transition:transform .12s,box-shadow .12s;
}
.tp-user-switch:hover{transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
.tp-user-switch-meta{flex:1;text-align:left;min-width:0;overflow:hidden}
.tp-user-switch-meta .tp-user-name,.tp-user-switch-meta .tp-user-mail{
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.tp-user-switch svg{color:var(--ink-40);flex-shrink:0}

/* main */
.tp-main{flex:1;min-width:0;overflow-y:auto;padding:16px 48px 80px}
.tp-top{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:56px;flex-wrap:wrap}
.tp-title{
  font-family:'Fredoka',system-ui,sans-serif;font-weight:700;
  font-size:3.4rem;letter-spacing:-.02em;line-height:1;
  margin:0 0 14px;position:relative;display:inline-block;
}
.tp-title-highlight{
  position:absolute;left:0;right:0;bottom:4px;height:14px;
  background:rgba(251,106,30,.22);border-radius:999px;
  transform:skewX(-12deg);z-index:-1;
}
.tp-subtitle{margin:0;color:var(--ink-60);font-size:1.05rem}
.tp-top-actions{display:flex;gap:12px}
.tp-btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:11px 22px;border-radius:999px;font-weight:700;font-size:.92rem;
  cursor:pointer;border:2px solid var(--ink);background:#fff;color:var(--ink);
  box-shadow:4px 4px 0 var(--ink);transition:transform .12s,box-shadow .12s;
  font-family:'DM Sans',sans-serif;
}
.tp-btn:hover{transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
.tp-btn--primary{background:var(--orange);color:#fff}

/* sections */
.tp-section{margin-bottom:56px}
.tp-section-head{display:flex;align-items:center;gap:12px;margin-bottom:28px}
.tp-section-label{
  font-family:'Fredoka',system-ui,sans-serif;font-weight:700;font-size:.78rem;
  letter-spacing:.2em;text-transform:uppercase;color:var(--ink-40);
}
.tp-section-count{
  font-size:.7rem;font-weight:700;color:#fff;
  background:var(--ink);padding:3px 10px;border-radius:999px;
}
.tp-squiggle{width:80px;height:8px;margin-left:6px;flex-shrink:0}

/* pre-created grid */
.tp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:28px}
.tp-card-wrap{position:relative;transition:transform .2s}
.tp-card-wrap:hover{transform:translate(-2px,-2px) !important}
.tp-card-shadow{
  position:absolute;inset:0;background:var(--ink);border-radius:24px;
  transform:translate(6px,6px);transition:transform .2s;
}
.tp-card-wrap:hover .tp-card-shadow{transform:translate(4px,4px)}
.tp-card-shadow--sm{border-radius:18px}
.tp-card{
  position:relative;width:100%;
  background:#fff;border:2px solid var(--ink);border-radius:24px;
  padding:22px;display:flex;flex-direction:column;align-items:flex-start;
  text-align:left;cursor:pointer;font-family:inherit;color:inherit;
  min-height:200px;
}
.tp-emoji{
  width:52px;height:52px;border-radius:16px;
  display:flex;align-items:center;justify-content:center;
  font-size:1.65rem;margin-bottom:24px;
}
.tp-emoji--sm{width:48px;height:48px;font-size:1.45rem;margin-bottom:0}
.tp-card-title{font-family:'Fredoka',system-ui,sans-serif;font-weight:600;font-size:1.18rem;margin:0 0 4px;line-height:1.2}
.tp-card-sub{font-size:.85rem;color:var(--ink-60);margin:0 0 24px}
.tp-card-foot{margin-top:auto;width:100%;display:flex;justify-content:flex-end}
.tp-arrow{
  width:32px;height:32px;border-radius:50%;
  border:1.5px solid var(--ink-10);
  display:flex;align-items:center;justify-content:center;color:var(--ink-60);
  transition:all .15s;
}
.tp-card-wrap:hover .tp-arrow{background:var(--orange);border-color:var(--orange);color:#fff}

/* my tutors - scrapbook row */
.tp-scrap{display:flex;flex-wrap:wrap;gap:40px}
.tp-mycard-wrap{position:relative;width:300px}
.tp-tape{
  position:absolute;top:-10px;left:50%;transform:translateX(-50%) rotate(-3deg);
  width:64px;height:22px;background:rgba(251,106,30,.35);border-radius:3px;z-index:2;
  box-shadow:0 1px 2px rgba(0,0,0,.06);
}
.tp-tape::before,.tp-tape::after{
  content:"";position:absolute;top:50%;width:24px;height:1px;background:rgba(251,106,30,.2);
}
.tp-tape::before{left:8px}.tp-tape::after{right:8px}
.tp-mycard{
  position:relative;width:100%;
  background:#fff;border:2px solid var(--ink);border-radius:18px;
  padding:22px;cursor:pointer;font-family:inherit;color:inherit;text-align:left;
  display:flex;flex-direction:column;gap:18px;min-height:176px;
  transition:transform .2s;
}
.tp-mycard-wrap:hover .tp-mycard{transform:translate(-2px,-2px)}
.tp-mycard-wrap:hover .tp-card-shadow{transform:translate(4px,4px)}
.tp-mycard-head{display:flex;align-items:center;gap:14px}
.tp-mycard-title{font-family:'Fredoka',system-ui,sans-serif;font-weight:600;font-size:1rem;margin:0}
.tp-mycard-sub{font-size:.78rem;color:var(--ink-60);margin:2px 0 0;font-style:italic}
.tp-mycard-foot{margin-top:auto;display:flex;justify-content:space-between;align-items:center}
.tp-meta{
  font-size:.65rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
  color:var(--ink-40);
}
.tp-mycard-arrow{color:var(--ink-40);transition:transform .15s,color .15s}
.tp-mycard-wrap:hover .tp-mycard-arrow{color:var(--orange);transform:translateX(2px)}

/* build new */
.tp-build{
  position:relative;width:300px;min-height:176px;
  border:2px dashed rgba(251,106,30,.4);border-radius:18px;
  background:transparent;cursor:pointer;font-family:inherit;color:inherit;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:8px;text-align:center;padding:22px;
  transition:background .15s,border-color .15s;
}
.tp-build:hover{background:rgba(251,106,30,.05);border-color:var(--orange)}
.tp-build-star{
  position:absolute;top:10px;right:14px;color:var(--orange);opacity:.4;
}
.tp-build-plus{
  width:54px;height:54px;border-radius:16px;background:var(--orange);
  color:#fff;display:flex;align-items:center;justify-content:center;
  box-shadow:4px 4px 0 var(--ink);
  transition:transform .15s;
}
.tp-build:hover .tp-build-plus{transform:scale(1.08)}
.tp-build-title{font-family:'Fredoka',system-ui,sans-serif;font-weight:600;font-size:1.1rem;color:var(--orange);margin:6px 0 0}
.tp-build-sub{font-size:.78rem;color:var(--ink-60);margin:0}

@media (max-width: 860px){
  .tp-root{flex-direction:column;padding:8px}
  .tp-side{width:100%;border-right:none;border-bottom:2px solid var(--ink-10);padding:12px}
  .tp-brand{margin-bottom:16px}
  .tp-nav{flex-direction:row;flex-wrap:wrap}
  .tp-side-foot{margin-top:14px}
  .tp-main{padding:16px}
  .tp-title{font-size:2.4rem}
  .tp-grid{grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:20px}
  .tp-scrap{gap:24px;justify-content:center}
  .tp-mycard-wrap,.tp-build{width:100%;max-width:340px}
}
`;
