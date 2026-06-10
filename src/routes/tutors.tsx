import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
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
  Heart,
  ImagePlus,
  X,
  ArrowLeft,
  Check,
  UploadCloud,
  FileText,
  Trash2,
  Target,
  MessageSquare,
  Image as ImageIcon,
  Type as TypeIcon,
} from "lucide-react";

/* ===== Shared mascot symbol (with glasses) used inside scene cards ===== */
function BotSymbols() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <symbol id="tp-bot" viewBox="0 0 220 250">
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

type SceneKey = "english" | "maths" | "civics" | "chinese" | "notes";

function Scene({ k }: { k: SceneKey }) {
  const bot = <use href="#tp-bot" x="45" y="40" width="150" height="170" />;
  if (k === "english") return (
    <svg viewBox="0 0 240 220" className="tp-scene">
      <rect width="240" height="220" rx="16" fill="#F7E4DE" />
      <circle cx="120" cy="116" r="94" fill="none" stroke="#B5462F" strokeDasharray="2 7" opacity=".35" />
      {bot}
      <rect x="74" y="150" width="92" height="36" rx="4" fill="#9E3B27" />
      <path d="M80 152 h38 v32 h-38 z" fill="#FBF6EC" /><path d="M122 152 h38 v32 h-38 z" fill="#FFFDF7" />
      <line x1="120" y1="150" x2="120" y2="186" stroke="#7E2C1C" strokeWidth="2" />
      <g stroke="#C9B3AC" strokeWidth="2" strokeLinecap="round"><line x1="86" y1="160" x2="112" y2="160" /><line x1="86" y1="168" x2="112" y2="168" /><line x1="86" y1="176" x2="106" y2="176" /><line x1="128" y1="160" x2="154" y2="160" /><line x1="128" y1="168" x2="154" y2="168" /></g>
      <g><rect x="172" y="24" width="46" height="32" rx="9" fill="#fff" stroke="#E6CFC8" strokeWidth="1.5" /><path d="M186 54 l-2 9 l10 -7 z" fill="#fff" stroke="#E6CFC8" strokeWidth="1.5" /><text x="195" y="46" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="17" fontWeight="700" fill="#B5462F">Aa</text></g>
    </svg>
  );
  if (k === "maths") return (
    <svg viewBox="0 0 240 220" className="tp-scene">
      <rect width="240" height="220" rx="16" fill="#FBEED1" />
      <circle cx="120" cy="116" r="94" fill="none" stroke="#C98C2E" strokeDasharray="2 7" opacity=".4" />
      {bot}
      <rect x="74" y="150" width="92" height="38" rx="6" fill="#2E3B33" />
      <rect x="74" y="150" width="92" height="38" rx="6" fill="none" stroke="#A07A3A" strokeWidth="3" />
      <path d="M88 178 l11 -18 l11 18 z" fill="none" stroke="#F3E7CC" strokeWidth="2.2" strokeLinejoin="round" />
      <text x="138" y="176" textAnchor="middle" fontFamily="serif" fontSize="20" fill="#F3E7CC">π</text>
      <text x="34" y="44" fontFamily="Fredoka,sans-serif" fontSize="18" fontWeight="700" fill="#C98C2E">7+</text>
      <path d="M196 30 l16 0 l0 16 z" fill="none" stroke="#C98C2E" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  );
  if (k === "civics") return (
    <svg viewBox="0 0 240 220" className="tp-scene">
      <rect width="240" height="220" rx="16" fill="#DBF0EA" />
      <circle cx="120" cy="116" r="94" fill="none" stroke="#15897A" strokeDasharray="2 7" opacity=".4" />
      {bot}
      <path d="M110 192 h20 l-3 -16 h-14 z" fill="#9A6A3A" />
      <circle cx="120" cy="160" r="28" fill="#7FB8D6" stroke="#3E7E9E" strokeWidth="2" />
      <path d="M104 150 q10 6 6 18 q-8 6 -14 -2 q2 -10 8 -16z" fill="#5FA86E" />
      <path d="M128 148 q12 2 16 12 q-6 8 -16 4 q-4 -8 0 -16z" fill="#5FA86E" />
      <path d="M118 174 q8 4 14 12" fill="none" stroke="#5FA86E" strokeWidth="4" strokeLinecap="round" />
      <path d="M94 160 h52 M120 132 v56" stroke="#EAF6FA" strokeWidth="1.5" opacity=".7" />
      <g transform="translate(192 30)"><circle r="4" fill="#E8709A" /><g fill="#F4A8C2"><ellipse cx="0" cy="-9" rx="4" ry="7" /><ellipse cx="9" cy="-3" rx="4" ry="7" transform="rotate(72 9 -3)" /><ellipse cx="5" cy="8" rx="4" ry="7" transform="rotate(144 5 8)" /><ellipse cx="-5" cy="8" rx="4" ry="7" transform="rotate(216 -5 8)" /><ellipse cx="-9" cy="-3" rx="4" ry="7" transform="rotate(288 -9 -3)" /></g></g>
    </svg>
  );
  if (k === "chinese") return (
    <svg viewBox="0 0 240 220" className="tp-scene">
      <rect width="240" height="220" rx="16" fill="#F7E2DD" />
      <circle cx="120" cy="116" r="94" fill="none" stroke="#9E2B2B" strokeDasharray="2 7" opacity=".35" />
      {bot}
      <rect x="66" y="138" width="58" height="62" rx="3" fill="#FBF6EC" stroke="#E6D9C0" strokeWidth="2" />
      <text x="95" y="180" textAnchor="middle" fontFamily="serif" fontSize="36" fill="#9E2B2B">學</text>
      <g transform="rotate(34 150 150)"><rect x="146" y="120" width="8" height="48" rx="3" fill="#B6884E" /><path d="M146 168 q4 18 8 0 z" fill="#2A2A2A" /><rect x="146" y="116" width="8" height="6" fill="#9E2B2B" /></g>
      <rect x="190" y="28" width="26" height="26" rx="3" fill="#9E2B2B" /><text x="203" y="47" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#FBE3DC">福</text>
    </svg>
  );
  return (
    <svg viewBox="0 0 240 220" className="tp-scene">
      <rect width="240" height="220" rx="16" fill="#FAE6E8" />
      <circle cx="120" cy="116" r="94" fill="none" stroke="#D2789A" strokeDasharray="2 7" opacity=".4" />
      {bot}
      <rect x="74" y="150" width="92" height="36" rx="4" fill="#fff" stroke="#EAD3DA" strokeWidth="2" />
      <line x1="120" y1="150" x2="120" y2="186" stroke="#EAD3DA" strokeWidth="1.5" />
      <rect x="84" y="166" width="26" height="6" rx="3" fill="#FCE08A" />
      <g stroke="#B9A6AE" strokeWidth="2" strokeLinecap="round"><path d="M84 159 q8 -3 16 0 q8 3 12 0" /><path d="M84 178 q8 -3 14 0" /><path d="M128 159 q8 -3 16 0 q6 3 10 0" /><path d="M128 168 q8 -3 16 0" /><path d="M128 177 q6 -3 12 0" /></g>
      <rect x="150" y="146" width="7" height="34" rx="3" fill="#F4A8C2" transform="rotate(30 153 163)" />
      <g transform="translate(190 26) rotate(8)"><rect width="34" height="32" rx="3" fill="#FCE08A" stroke="#E9C95E" strokeWidth="1.5" /><path d="M17 7 l3 7 l7 1 l-5 5 l1 7 l-6 -4 l-6 4 l1 -7 l-5 -5 l7 -1 z" fill="#E8A33A" /></g>
    </svg>
  );
}

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

/* ===== Logo (homepage mascot face) ===== */
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
      <rect x="10" y="11" width="36" height="32" rx="14" fill="#FFF7EF" />
      <rect x="14" y="17" width="28" height="22" rx="9" fill="#222F38" />
      <circle cx="22" cy="28" r="5.6" fill="none" stroke="#46D6AE" strokeWidth="1.7" />
      <circle cx="34" cy="28" r="5.6" fill="none" stroke="#46D6AE" strokeWidth="1.7" />
      <circle cx="22.7" cy="28.6" r="1.6" fill="#222F38" />
      <circle cx="33.3" cy="28.6" r="1.6" fill="#222F38" />
    </svg>
  );
}

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
      <circle className="gl" cx="93" cy="80" r="15" />
      <circle className="gl" cx="127" cy="80" r="15" />
      <path className="gl" d="M108 78 q1 -3 4 0" />
      <ellipse className="bl" cx="80" cy="98" rx="7" ry="4" />
      <ellipse className="bl" cx="140" cy="98" rx="7" ry="4" />
      <ellipse className="mo" cx="110" cy="100" rx="6" ry="5" />

    </svg>
  );
}

type Tutor = {
  id: string;
  title: string;
  subtitle?: string;
  support?: string;
  scene: SceneKey;
  meta?: string;
};

const preCreated: Tutor[] = [
  { id: "eng", title: "DSE English", subtitle: "Paper 1–4",
    support: "Plan essays, and train for all 4 papers to ace your HKDSE English exams.",
    scene: "english" },
  { id: "mat", title: "DSE Maths", subtitle: "Core · M1 · M2",
    support: "Step-by-step working, past-paper drills and intuition for tricky proofs.",
    scene: "maths" },
  { id: "civ", title: "DSE Citizenship", subtitle: "HK & the world",
    support: "Frameworks for source questions, case studies and short-answer structure.",
    scene: "civics" },
  { id: "chi", title: "DSE 中文", subtitle: "閱讀 · 寫作 · 聆聽說話",
    support: "範文精讀、作文骨架同說話卷練習，一齊由零開始拆解。",
    scene: "chinese" },
];

const myTutors: Tutor[] = [
  { id: "eng-notes", title: "English · my notes", subtitle: "Built from 24 pages",
    support: "Your custom tutor built on your notes and resources.",
    scene: "notes" },
];

function TutorRow({
  t, fav, onFav, customImage, onImage, isMine,
}: {
  t: Tutor; fav: boolean; onFav: () => void;
  customImage?: string; onImage: (url: string) => void; isMine?: boolean;
}) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const pick = () => fileRef.current?.click();
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    onImage(URL.createObjectURL(f));
  };

  return (
    <article className="tp-row">
      <div className="tp-row-media">
        {customImage
          ? <img src={customImage} alt="" loading="lazy" />
          : <Scene k={t.scene} />}
        <button
          type="button"
          className="tp-row-editimg"
          onClick={(e) => { e.stopPropagation(); pick(); }}
          aria-label="Change image"
          title="Change image"
        >
          <ImagePlus size={14} />
          <span>Edit</span>
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onFile}
        />
      </div>
      <div className="tp-row-body">
        <div className="tp-row-head">
          <div>
            <h3 className="tp-row-title">{t.title}</h3>
            {t.subtitle && <p className="tp-row-sub">{t.subtitle}</p>}
          </div>
          <button
            type="button"
            className={`tp-card-fav tp-card-fav--inline${fav ? " is-on" : ""}`}
            onClick={(e) => { e.stopPropagation(); onFav(); }}
            aria-label="Favourite tutor"
          >
            <Heart size={14} fill={fav ? "currentColor" : "none"} />
          </button>
        </div>
        {t.support && <p className="tp-row-support">{t.support}</p>}
        <div className="tp-row-foot">
          <button className="tp-card-act tp-card-act--primary">Open <ArrowRight size={13} /></button>
        </div>
      </div>
    </article>
  );
}

function TutorsPage() {
  const [active, setActive] = useState("tutor");
  const [userOpen, setUserOpen] = useState(false);
  const [favs, setFavs] = useState<Record<string, boolean>>({ eng: true });
  const [images, setImages] = useState<Record<string, string>>({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [builderOpen, setBuilderOpen] = useState(false);


  const nav = [
    { id: "home", label: "Home", icon: Home, to: "/" as const },
    { id: "tutor", label: "Tutor", icon: Pencil },
    { id: "tools", label: "Tools", icon: Wrench, to: "/tools" as const },
    { id: "explore", label: "Explore", icon: Globe },
  ];

  const toggleFav = (id: string) => setFavs((f) => ({ ...f, [id]: !f[id] }));
  const setImage = (id: string, url: string) => setImages((m) => ({ ...m, [id]: url }));
  const myIds = useMemo(() => new Set(myTutors.map((t) => t.id)), []);
  const q = query.trim().toLowerCase();
  const match = (t: Tutor) =>
    !q || t.title.toLowerCase().includes(q) || (t.subtitle ?? "").toLowerCase().includes(q) || (t.support ?? "").toLowerCase().includes(q);
  const preFiltered = preCreated.filter(match);
  const myFiltered = myTutors.filter(match);
  const favList = [...preCreated, ...myTutors].filter((t) => favs[t.id] && match(t));


  return (
    <div className="tp-root">
      <BotSymbols />

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
          <div className={`tp-search${searchOpen || query ? " is-open" : ""}`}>
            <Search size={15} />
            <input
              type="text"
              placeholder="Search tutors by name or topic…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              aria-label="Search tutors"
            />
            {query && (
              <button
                type="button"
                className="tp-search-clear"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setQuery("")}
                aria-label="Clear search"
              ><X size={13} /></button>
            )}
          </div>
          <button className="tp-btn tp-btn-primary" onClick={() => setBuilderOpen(true)}><Plus size={15} /> New tutor</button>
        </div>

        {favList.length > 0 && (
          <section className="tp-section">
            <div className="tp-section-head">
              <span className="tp-section-label"><Heart size={11} fill="currentColor" /> Favourites</span>
              <span className="tp-section-count">{favList.length}</span>
            </div>
            <div className="tp-rowgrid">
              {favList.map((t) => (
                <TutorRow
                  key={"fav-" + t.id} t={t} fav onFav={() => toggleFav(t.id)}
                  customImage={images[t.id]} onImage={(u) => setImage(t.id, u)}
                  isMine={myIds.has(t.id)}
                />
              ))}
            </div>
          </section>
        )}

        {preFiltered.length > 0 && (
          <section className="tp-section">
            <div className="tp-section-head">
              <span className="tp-section-label">Pre-made tutors</span>
              <span className="tp-section-count">{preFiltered.length}</span>
            </div>
            <div className="tp-rowgrid">
              {preFiltered.map((t) => (
                <TutorRow
                  key={t.id} t={t} fav={!!favs[t.id]} onFav={() => toggleFav(t.id)}
                  customImage={images[t.id]} onImage={(u) => setImage(t.id, u)}
                />
              ))}
            </div>
          </section>
        )}

        <section className="tp-section">
          <div className="tp-section-head">
            <span className="tp-section-label">My tutors</span>
            <span className="tp-section-count">{myFiltered.length}</span>
          </div>
          <div className="tp-rowgrid">
            {myFiltered.map((t) => (
              <TutorRow
                key={t.id} t={t} fav={!!favs[t.id]} onFav={() => toggleFav(t.id)}
                customImage={images[t.id]} onImage={(u) => setImage(t.id, u)} isMine
              />
            ))}
            {!q && (
              <button className="tp-build" onClick={() => setBuilderOpen(true)}>
                <div className="tp-build-ic"><Plus size={22} strokeWidth={2.4} /></div>
                <div>
                  <p className="tp-build-title">Build a new tutor</p>
                  <p className="tp-build-sub">Upload notes, pick a vibe, go <Sparkles size={12} /></p>
                </div>
              </button>
            )}
          </div>
        </section>

        {q && preFiltered.length === 0 && myFiltered.length === 0 && (
          <div className="tp-empty">
            <p>No tutors match "<b>{query}</b>".</p>
            <button className="tp-btn tp-btn-ghost" onClick={() => setQuery("")}>Clear search</button>
          </div>
        )}

      </main>

      {builderOpen && (
        <BuilderModal
          onClose={() => setBuilderOpen(false)}
          onCreate={() => setBuilderOpen(false)}
        />
      )}

      <style>{css}</style>
    </div>
  );
}

type BuilderData = {
  name: string;
  objectives: string;
  files: { name: string; size: number }[];
  instructions: string;
  image: { kind: "preset"; preset: "notes" } | { kind: "custom"; url: string };
};

function BuilderModal({ onClose, onCreate }: { onClose: () => void; onCreate: (d: BuilderData) => void }) {
  const [step, setStep] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [data, setData] = useState<BuilderData>({
    name: "",
    objectives: "",
    files: [],
    instructions: "",
    image: { kind: "preset", preset: "notes" },
  });
  const fileRef = useRef<HTMLInputElement | null>(null);
  const imgRef = useRef<HTMLInputElement | null>(null);

  const steps = [
    { id: "name", label: "Name", icon: TypeIcon },
    { id: "files", label: "Resources", icon: UploadCloud },
    { id: "obj", label: "Goals", icon: Target },
    { id: "inst", label: "Instructions", icon: MessageSquare },
    { id: "img", label: "Image", icon: ImageIcon },
  ];

  const bubbles = [
    { b: "First things first…", s: "What should we call your tutor?" },
    { b: "Feed me anything!", s: "Notes, past papers, slides — the more the merrier." },
    { b: "What's the goal?", s: data.files.length > 0 ? "Type it out, or let me draft it from your resources." : "Tell me what success looks like for you." },
    { b: "Any house rules?", s: "Tone, language, things to avoid — totally optional." },
    { b: "Almost there!", s: "Pick a look for your tutor." },
  ];

  const canNext = () => {
    if (step === 0) return data.name.trim().length > 0;
    if (step === 2) return data.objectives.trim().length > 0;
    return true;
  };

  const onAddFiles = (list: FileList | null) => {
    if (!list) return;
    const next = Array.from(list).map((f) => ({ name: f.name, size: f.size }));
    setData((d) => ({ ...d, files: [...d.files, ...next] }));
  };

  const removeFile = (i: number) =>
    setData((d) => ({ ...d, files: d.files.filter((_, idx) => idx !== i) }));

  const onPickImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setData((d) => ({ ...d, image: { kind: "custom", url: URL.createObjectURL(f) } }));
  };

  const generateObjectives = () => {
    if (data.files.length === 0) return;
    setGenerating(true);
    setTimeout(() => {
      const fileBits = data.files.slice(0, 3).map((f) => f.name.replace(/\.[^.]+$/, "")).join(", ");
      const draft =
        `Based on your resources (${fileBits}), the focus is to:\n` +
        `• Master the core concepts covered across your uploaded notes\n` +
        `• Drill exam-style questions and explain reasoning step by step\n` +
        `• Identify weak spots and revisit them with targeted practice\n` +
        `• Build confidence ahead of your next assessment`;
      setData((d) => ({ ...d, objectives: draft }));
      setGenerating(false);
    }, 900);
  };

  const next = () => (step < steps.length - 1 ? setStep(step + 1) : onCreate(data));
  const back = () => step > 0 && setStep(step - 1);

  return (
    <div className="tp-mo" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="tp-mo-card" onClick={(e) => e.stopPropagation()}>
        <button className="tp-mo-close" onClick={onClose} aria-label="Close"><X size={16} /></button>

        <div className="tp-mo-head">
          <div className="tp-eyebrow"><span className="tp-dot" /> Build a tutor</div>
          <h2 className="tp-mo-title">Let's spin up your new tutor</h2>
          <p className="tp-mo-sub">Five quick steps. You can edit anything later.</p>
        </div>

        <ol className="tp-stepper">
          {steps.map((s, i) => {
            const Ic = s.icon;
            const state = i < step ? "done" : i === step ? "now" : "todo";
            return (
              <li key={s.id} className={`tp-step is-${state}`}>
                <button type="button" className="tp-step-dot" onClick={() => i < step && setStep(i)} aria-label={s.label}>
                  {state === "done" ? <Check size={13} /> : <Ic size={13} />}
                </button>
                <span className="tp-step-label">{s.label}</span>
                {i < steps.length - 1 && <span className="tp-step-bar" />}
              </li>
            );
          })}
        </ol>

        <div className="tp-mo-grid">
          <aside className="tp-mo-guide">
            <div className="tp-mo-mascot"><Mascot /></div>
            <div className="tp-mo-bubble">
              <b>{bubbles[step].b}</b>
              <span>{bubbles[step].s}</span>
            </div>
          </aside>

          <div className="tp-mo-body">
            {step === 0 && (
              <div className="tp-field">
                <label className="tp-label">Tutor name</label>
                <p className="tp-help">Give your tutor a memorable name — like a study buddy.</p>
                <input
                  autoFocus
                  className="tp-input"
                  placeholder="e.g. Bio Buddy, Econ Coach…"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  maxLength={60}
                />
              </div>
            )}

            {step === 1 && (
              <div className="tp-field">
                <label className="tp-label">Upload resources</label>
                <p className="tp-help">Notes, past papers, slides, textbooks. PDFs, docs and images all work.</p>
                <button
                  type="button"
                  className="tp-drop"
                  onClick={() => fileRef.current?.click()}
                >
                  <UploadCloud size={24} />
                  <b>Drop files or click to upload</b>
                  <span>Up to 20MB each</span>
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  multiple
                  hidden
                  onChange={(e) => onAddFiles(e.target.files)}
                />
                {data.files.length > 0 && (
                  <ul className="tp-filelist">
                    {data.files.map((f, i) => (
                      <li key={i}>
                        <FileText size={15} />
                        <span className="tp-file-name">{f.name}</span>
                        <span className="tp-file-size">{(f.size / 1024).toFixed(0)} KB</span>
                        <button type="button" onClick={() => removeFile(i)} aria-label="Remove">
                          <Trash2 size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="tp-help tp-help--note">You can skip this and add resources later.</p>
              </div>
            )}

            {step === 2 && (
              <div className="tp-field">
                <div className="tp-label-row">
                  <label className="tp-label">Learning objectives</label>
                  <button
                    type="button"
                    className="tp-aigen"
                    onClick={generateObjectives}
                    disabled={data.files.length === 0 || generating}
                    title={data.files.length === 0 ? "Upload resources first to generate" : "Draft from your resources"}
                  >
                    <Sparkles size={13} /> {generating ? "Generating…" : "Generate with AI"}
                  </button>
                </div>
                <p className="tp-help">What do you want to get out of this tutor? Be specific.</p>
                <textarea
                  className="tp-textarea"
                  rows={6}
                  placeholder="e.g. Master IB Bio Unit 2, prep for end-of-term test, drill data-response questions…"
                  value={data.objectives}
                  onChange={(e) => setData({ ...data, objectives: e.target.value })}
                  maxLength={600}
                />
                <div className="tp-counter">{data.objectives.length}/600</div>
              </div>
            )}

            {step === 3 && (
              <div className="tp-field">
                <label className="tp-label">Any specific instructions?</label>
                <p className="tp-help">Tone, language, what to avoid, how to explain. Optional but helpful.</p>
                <textarea
                  autoFocus
                  className="tp-textarea"
                  rows={6}
                  placeholder="e.g. Be encouraging, use simple analogies, quiz me after each topic, reply in Cantonese when I ask…"
                  value={data.instructions}
                  onChange={(e) => setData({ ...data, instructions: e.target.value })}
                  maxLength={600}
                />
                <div className="tp-counter">{data.instructions.length}/600</div>
              </div>
            )}

            {step === 4 && (
              <div className="tp-field">
                <label className="tp-label">Customise tutor image</label>
                <p className="tp-help">Pick the default mascot scene or upload your own.</p>
                <div className="tp-imgpick">
                  <button
                    type="button"
                    className={`tp-imgopt${data.image.kind === "preset" ? " is-on" : ""}`}
                    onClick={() => setData({ ...data, image: { kind: "preset", preset: "notes" } })}
                  >
                    <div className="tp-imgopt-art"><Scene k="notes" /></div>
                    <span>Default mascot</span>
                  </button>
                  <button
                    type="button"
                    className={`tp-imgopt${data.image.kind === "custom" ? " is-on" : ""}`}
                    onClick={() => imgRef.current?.click()}
                  >
                    <div className="tp-imgopt-art tp-imgopt-art--upload">
                      {data.image.kind === "custom"
                        ? <img src={data.image.url} alt="" />
                        : <><ImagePlus size={22} /><b>Upload your own</b></>}
                    </div>
                    <span>{data.image.kind === "custom" ? "Change image" : "Upload image"}</span>
                  </button>
                  <input ref={imgRef} type="file" accept="image/*" hidden onChange={onPickImage} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="tp-mo-foot">
          <button
            type="button"
            className="tp-btn tp-btn-ghost"
            onClick={back}
            disabled={step === 0}
            style={step === 0 ? { visibility: "hidden" } : undefined}
          >
            <ArrowLeft size={15} /> Back
          </button>
          <div className="tp-mo-progress">Step {step + 1} of {steps.length}</div>
          <button
            type="button"
            className="tp-btn tp-btn-primary"
            onClick={next}
            disabled={!canNext()}
          >
            {step === steps.length - 1 ? (<>Create tutor <Sparkles size={14} /></>) : (<>Next <ArrowRight size={14} /></>)}
          </button>
        </div>
      </div>
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
  min-height:100vh;display:flex;-webkit-font-smoothing:antialiased;line-height:1.55;
}
.tp-root *{box-sizing:border-box}
.tp-root::before{
  content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55;
  background:radial-gradient(50% 42% at 88% -4%,rgba(255,138,61,.28),transparent 60%),
             radial-gradient(40% 38% at -4% 12%,rgba(255,180,84,.26),transparent 60%);
}
.tp-root h1,.tp-root h2,.tp-root h3{font-family:var(--font-display);font-weight:600;letter-spacing:-.015em;line-height:1.1;margin:0}

.tp-side{width:248px;flex-shrink:0;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;padding:22px 18px;background:rgba(255,247,239,.7);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-right:1px solid var(--line);z-index:5}
.tp-brand{display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:32px}
.tp-brand-mark{width:38px;height:38px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.tp-brand:hover .tp-brand-mark{transform:rotate(-10deg) scale(1.08)}
.tp-brand-name{font-family:var(--font-display);font-weight:700;font-size:1.18rem;letter-spacing:-.02em;background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}

.tp-nav{display:flex;flex-direction:column;gap:3px;flex:1}
.tp-nav-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;font-family:var(--font-body);font-weight:500;font-size:.94rem;color:var(--ink-soft);background:transparent;border:none;cursor:pointer;text-align:left;text-decoration:none;transition:background .18s,color .18s}
.tp-nav-item:hover{background:rgba(255,255,255,.7);color:var(--ink)}
.tp-nav-item.is-active{background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm);font-weight:600}
.tp-nav-item.is-active svg{color:var(--orange)}

.tp-side-foot{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.tp-user-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:10px}
.tp-user-head{display:flex;align-items:center;gap:10px}
.tp-ava{width:36px;height:36px;border-radius:11px;background:linear-gradient(150deg,var(--orange-2),var(--orange));color:#fff;font-weight:600;font-family:var(--font-display);display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;box-shadow:var(--shadow-sm)}
.tp-ava-sm{width:34px;height:34px;font-size:.76rem;border-radius:10px}
.tp-user-name{font-family:var(--font-display);font-weight:600;font-size:.9rem;color:var(--ink)}
.tp-user-mail{font-size:.76rem;color:var(--ink-soft)}
.tp-user-actions{display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px}
.tp-user-actions button,.tp-signout{display:flex;align-items:center;gap:10px;background:transparent;border:none;cursor:pointer;padding:8px 6px;border-radius:8px;font-size:.86rem;color:var(--ink-soft);text-align:left;font-family:var(--font-body)}
.tp-user-actions button:hover,.tp-signout:hover{background:var(--cream);color:var(--ink)}
.tp-signout{border-top:1px solid var(--line);padding-top:10px;margin-top:2px;color:var(--orange-deep)}
.tp-user-switch{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-sm);transition:transform .15s,box-shadow .15s,border-color .15s;font-family:inherit}
.tp-user-switch:hover{transform:translateY(-1px);border-color:var(--orange-2)}
.tp-user-switch-meta{flex:1;text-align:left;min-width:0;overflow:hidden}
.tp-user-switch-meta .tp-user-name,.tp-user-switch-meta .tp-user-mail{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tp-user-switch>svg{color:var(--ink-faint);flex-shrink:0}

.tp-main{flex:1;min-width:0;padding:38px 56px 80px;position:relative;z-index:1}
.tp-top{display:grid;grid-template-columns:1.4fr .9fr;gap:36px;align-items:center;margin-bottom:24px}
.tp-eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:14px}
.tp-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:tp-ping 2s infinite}
@keyframes tp-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}
.tp-title{font-size:clamp(2.1rem,3.6vw,3rem)}
.tp-hl{color:var(--orange-deep);position:relative;display:inline-block;white-space:nowrap}
.tp-hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.32em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1}
.tp-subtitle{margin-top:12px;color:var(--ink-soft);font-size:1.02rem;max-width:32em}

.tp-mascot-card{position:relative;display:flex;justify-content:flex-end;align-items:flex-end;min-height:160px}
.tp-mascot-art{width:140px;filter:drop-shadow(0 14px 22px rgba(120,40,0,.22));animation:tp-bob 4s ease-in-out infinite}
@keyframes tp-bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}
.tp-mascot-bubble{position:absolute;top:6px;left:0;max-width:220px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:12px 16px;box-shadow:var(--shadow)}
.tp-mascot-bubble b{font-family:var(--font-display);font-weight:600;color:var(--ink);font-size:.95rem;display:block;margin-bottom:2px}
.tp-mascot-bubble span{font-size:.82rem;color:var(--ink-soft);line-height:1.45}
.tp-mascot-bubble::after{content:"";position:absolute;bottom:-9px;right:32px;width:18px;height:18px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}

.tp-top-actions{display:flex;gap:12px;margin-bottom:40px}
.tp-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:999px;font-weight:600;font-size:.92rem;cursor:pointer;border:none;font-family:var(--font-display);transition:transform .18s,box-shadow .18s,border-color .18s}
.tp-btn-ghost{background:#fff;color:var(--ink);border:1.5px solid var(--line);box-shadow:var(--shadow-sm)}
.tp-btn-ghost:hover{transform:translateY(-2px);border-color:var(--orange-2);color:var(--orange-deep)}
.tp-btn-primary{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;box-shadow:var(--shadow-sm)}
.tp-btn-primary:hover{transform:translateY(-2px) scale(1.02);box-shadow:var(--shadow)}

.tp-section{margin-bottom:44px}
.tp-section-head{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.tp-section-label{font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);display:inline-flex;align-items:center;gap:6px}
.tp-section-label svg{color:var(--orange-deep)}
.tp-section-count{font-size:.7rem;font-weight:600;color:var(--orange-deep);background:var(--cream-2);padding:3px 9px;border-radius:999px;font-family:var(--font-display)}

/* ===== Unified horizontal tutor card ===== */
.tp-rowgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(440px,1fr));gap:20px}
.tp-row{
  display:flex;background:#fffdf9;border:1px solid var(--line);border-radius:20px;
  overflow:hidden;box-shadow:var(--shadow-sm);
  transition:transform .22s,box-shadow .22s,border-color .22s;
}
.tp-row:hover{transform:translateY(-2px);border-color:var(--orange-2);box-shadow:var(--shadow)}
.tp-row-media{
  position:relative;flex-shrink:0;width:38%;max-width:220px;min-width:150px;
  background:var(--cream-2);overflow:hidden;
}
.tp-row-media img{width:100%;height:100%;object-fit:cover;display:block}
.tp-row-editimg{
  position:absolute;left:10px;bottom:10px;display:inline-flex;align-items:center;gap:5px;
  padding:5px 9px;border-radius:999px;border:none;cursor:pointer;
  background:rgba(255,253,249,.94);color:var(--ink);
  font-family:var(--font-display);font-weight:600;font-size:.7rem;letter-spacing:.04em;text-transform:uppercase;
  box-shadow:0 2px 8px -2px rgba(0,0,0,.25);
  opacity:0;transform:translateY(4px);transition:opacity .18s,transform .18s,color .15s;
}
.tp-row:hover .tp-row-editimg{opacity:1;transform:translateY(0)}
.tp-row-editimg:hover{color:var(--orange-deep)}
.tp-row-body{flex:1;min-width:0;padding:18px 20px 16px;display:flex;flex-direction:column;gap:6px}
.tp-row-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.tp-row-title{font-family:var(--font-display);font-weight:600;font-size:1.12rem;color:var(--ink);line-height:1.2}
.tp-row-sub{font-size:.78rem;color:var(--ink-faint);font-weight:500;margin-top:2px;letter-spacing:.01em}
.tp-row-support{font-size:.88rem;color:var(--ink-soft);line-height:1.5;margin-top:2px}
.tp-row-foot{margin-top:auto;padding-top:12px;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;border-top:1px solid var(--line)}
.tp-row-meta{font-size:.72rem;color:var(--ink-faint);font-style:italic}

.tp-card-actions{display:flex;gap:4px}
.tp-card-act{
  font-family:var(--font-display);font-weight:600;font-size:.76rem;letter-spacing:.05em;text-transform:uppercase;
  background:transparent;border:none;color:var(--ink-soft);cursor:pointer;
  padding:6px 10px;border-radius:8px;display:inline-flex;align-items:center;gap:5px;
  transition:background .15s,color .15s;
}
.tp-card-act:hover{background:var(--cream);color:var(--ink)}
.tp-card-act--primary{color:var(--orange-deep)}
.tp-card-act--primary:hover{background:var(--cream-2);color:var(--orange-deep)}

.tp-card-fav{
  width:32px;height:32px;border-radius:50%;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;color:var(--ink-faint);
  background:transparent;border:none;cursor:pointer;transition:all .15s;
}
.tp-card-fav:hover{color:var(--orange-deep);background:var(--cream)}
.tp-card-fav.is-on{color:var(--orange-deep)}
.tp-card-fav--inline{}

.tp-build{display:flex;align-items:center;gap:14px;background:var(--cream);border:1.5px dashed var(--orange-2);border-radius:18px;padding:18px;cursor:pointer;font-family:inherit;color:inherit;text-align:left;transition:background .2s,border-color .2s,transform .2s}
.tp-build:hover{background:var(--cream-2);border-color:var(--orange-deep);transform:translateY(-2px)}
.tp-build-ic{width:46px;height:46px;border-radius:14px;background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;display:grid;place-items:center;flex-shrink:0;box-shadow:var(--shadow-sm)}
.tp-build-title{font-family:var(--font-display);font-weight:600;font-size:1rem;color:var(--orange-deep)}
.tp-build-sub{font-size:.8rem;color:var(--ink-soft);margin-top:2px;display:inline-flex;align-items:center;gap:5px}
.tp-build-sub svg{color:var(--amber)}

.tp-ms{width:100%;height:auto;display:block}
.tp-ms .sh{fill:rgba(49,28,16,.12)}
.tp-ms .bf{fill:#FFF6EC}
.tp-ms .st{stroke:#EBD2B6;stroke-width:2.2;fill:#FFF6EC}
.tp-ms .scr{fill:#26323B}
.tp-ms .scrt{fill:#46D6AE;font-family:monospace;font-size:17px;font-weight:700}
.tp-ms .ant{fill:var(--orange)}
.tp-ms .ac{fill:#5BD0B4}
.tp-ms .fc{fill:#26323B}
.tp-ms .ep{fill:#1F2A30}
.tp-ms .ew{fill:#fff}
.tp-ms .mo{fill:#FB6A1E}
.tp-ms .gl{fill:none;stroke:#2FB39A;stroke-width:5;stroke-linecap:round}
.tp-ms .bl{fill:#FF9A57;opacity:.7}

.tp-scene{width:100%;height:100%;display:block;object-fit:cover}
.tp-row-media:has(.tp-scene){background:transparent}

.tp-search{
  flex:1;max-width:420px;display:flex;align-items:center;gap:9px;
  background:#fff;border:1.5px solid var(--line);border-radius:999px;
  padding:9px 16px;box-shadow:var(--shadow-sm);color:var(--ink-soft);
  transition:border-color .18s,box-shadow .18s,transform .15s;
}
.tp-search.is-open,.tp-search:hover{border-color:var(--orange-2)}
.tp-search.is-open{box-shadow:0 0 0 4px rgba(255,138,61,.18),var(--shadow-sm)}
.tp-search>svg{color:var(--ink-faint);flex-shrink:0}
.tp-search input{
  flex:1;border:none;outline:none;background:transparent;
  font-family:var(--font-body);font-size:.92rem;color:var(--ink);min-width:0;
}
.tp-search input::placeholder{color:var(--ink-faint)}
.tp-search-clear{
  background:var(--cream);border:none;cursor:pointer;width:22px;height:22px;
  border-radius:50%;display:flex;align-items:center;justify-content:center;
  color:var(--ink-soft);flex-shrink:0;
}
.tp-search-clear:hover{background:var(--cream-2);color:var(--orange-deep)}

.tp-empty{
  background:#fff;border:1px dashed var(--line);border-radius:18px;
  padding:36px 24px;text-align:center;color:var(--ink-soft);
  display:flex;flex-direction:column;align-items:center;gap:14px;
}
.tp-empty p{font-size:.95rem}


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
  .tp-rowgrid{grid-template-columns:1fr;gap:14px}
  .tp-row-media{width:42%;max-width:160px}
}

/* ===== Builder modal ===== */
.tp-mo{position:fixed;inset:0;z-index:100;background:rgba(49,28,16,.42);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:24px;animation:tp-fade .2s ease}
@keyframes tp-fade{from{opacity:0}to{opacity:1}}
@keyframes tp-pop{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
.tp-mo-card{position:relative;background:var(--paper);border:1px solid var(--line);border-radius:28px;width:100%;max-width:600px;max-height:92vh;overflow:auto;box-shadow:0 30px 80px -20px rgba(120,40,0,.45);padding:30px 32px 24px;animation:tp-pop .25s cubic-bezier(.2,.8,.2,1)}
.tp-mo-close{position:absolute;top:16px;right:16px;width:34px;height:34px;border-radius:50%;border:1px solid var(--line);background:#fff;cursor:pointer;display:grid;place-items:center;color:var(--ink-soft);transition:all .15s}
.tp-mo-close:hover{color:var(--orange-deep);border-color:var(--orange-2);transform:rotate(90deg)}
.tp-mo-head{margin-bottom:22px}
.tp-mo-title{font-family:var(--font-display);font-weight:600;font-size:1.6rem;color:var(--ink);margin-top:8px;line-height:1.15}
.tp-mo-sub{margin-top:6px;color:var(--ink-soft);font-size:.92rem}

.tp-stepper{list-style:none;padding:0;margin:0 0 26px;display:flex;align-items:center;gap:0}
.tp-step{display:flex;align-items:center;flex:1;min-width:0;position:relative}
.tp-step:last-child{flex:0}
.tp-step-dot{width:30px;height:30px;border-radius:50%;border:1.5px solid var(--line);background:#fff;display:grid;place-items:center;color:var(--ink-faint);cursor:default;flex-shrink:0;transition:all .2s}
.tp-step.is-now .tp-step-dot{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;border-color:transparent;box-shadow:0 0 0 4px rgba(255,138,61,.22)}
.tp-step.is-done .tp-step-dot{background:var(--teal);color:#fff;border-color:transparent;cursor:pointer}
.tp-step-label{font-family:var(--font-display);font-weight:600;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-faint);margin-left:8px;white-space:nowrap}
.tp-step.is-now .tp-step-label{color:var(--orange-deep)}
.tp-step.is-done .tp-step-label{color:var(--ink-soft)}
.tp-step-bar{flex:1;height:2px;background:var(--line);margin:0 10px;border-radius:2px;min-width:14px}
.tp-step.is-done .tp-step-bar{background:var(--teal)}

.tp-mo-body{min-height:220px}
.tp-field{display:flex;flex-direction:column;gap:6px}
.tp-label{font-family:var(--font-display);font-weight:600;font-size:.95rem;color:var(--ink)}
.tp-help{font-size:.84rem;color:var(--ink-soft);margin-bottom:8px}
.tp-input,.tp-textarea{width:100%;font-family:var(--font-body);font-size:.95rem;color:var(--ink);background:#fff;border:1.5px solid var(--line);border-radius:14px;padding:12px 14px;outline:none;transition:border-color .15s,box-shadow .15s;resize:vertical}
.tp-input:focus,.tp-textarea:focus{border-color:var(--orange-2);box-shadow:0 0 0 4px rgba(255,138,61,.18)}
.tp-counter{align-self:flex-end;font-size:.72rem;color:var(--ink-faint);margin-top:4px}

.tp-drop{width:100%;border:2px dashed var(--orange-2);background:var(--cream);border-radius:18px;padding:28px 18px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;color:var(--ink);transition:background .15s,border-color .15s}
.tp-drop:hover{background:var(--cream-2);border-color:var(--orange-deep)}
.tp-drop svg{color:var(--orange-deep);margin-bottom:6px}
.tp-drop b{font-family:var(--font-display);font-weight:600;font-size:.98rem}
.tp-drop span{font-size:.8rem;color:var(--ink-soft)}
.tp-filelist{list-style:none;padding:0;margin:14px 0 0;display:flex;flex-direction:column;gap:6px}
.tp-filelist li{display:flex;align-items:center;gap:10px;padding:9px 12px;background:#fff;border:1px solid var(--line);border-radius:12px;font-size:.86rem}
.tp-filelist svg:first-child{color:var(--orange-deep);flex-shrink:0}
.tp-file-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--ink)}
.tp-file-size{font-size:.74rem;color:var(--ink-faint);flex-shrink:0}
.tp-filelist button{background:transparent;border:none;cursor:pointer;color:var(--ink-faint);padding:4px;border-radius:6px;display:grid;place-items:center}
.tp-filelist button:hover{color:var(--orange-deep);background:var(--cream)}

.tp-imgpick{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.tp-imgopt{background:#fff;border:2px solid var(--line);border-radius:18px;padding:10px;cursor:pointer;font-family:inherit;display:flex;flex-direction:column;gap:8px;transition:all .18s}
.tp-imgopt:hover{border-color:var(--orange-2);transform:translateY(-2px)}
.tp-imgopt.is-on{border-color:var(--orange);box-shadow:0 0 0 4px rgba(255,138,61,.18)}
.tp-imgopt-art{aspect-ratio:1;border-radius:12px;overflow:hidden;background:var(--cream-2);display:grid;place-items:center}
.tp-imgopt-art img{width:100%;height:100%;object-fit:cover}
.tp-imgopt-art--upload{flex-direction:column;color:var(--ink-soft);gap:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:8px}
.tp-imgopt-art--upload svg{color:var(--orange-deep)}
.tp-imgopt-art--upload b{font-family:var(--font-display);font-weight:600;font-size:.84rem;color:var(--ink)}
.tp-imgopt>span{font-family:var(--font-display);font-weight:600;font-size:.82rem;color:var(--ink);text-align:center}

.tp-mo-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:24px;padding-top:18px;border-top:1px solid var(--line)}
.tp-mo-progress{font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint)}
.tp-btn:disabled{opacity:.5;cursor:not-allowed;transform:none!important}

@media (max-width:560px){
  .tp-mo-card{padding:24px 20px}
  .tp-step-label{display:none}
  .tp-imgpick{grid-template-columns:1fr}
}
`;

