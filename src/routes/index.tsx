import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Languages,
  Lightbulb,
  TrendingUp,
  Wand2,
  Wrench,
  GraduationCap,
  Puzzle,
  Upload,
  ScanLine,
  Layers,
  Mic,
  Network,
  BookOpen,
  Calculator,
  Music,
  Code2,
  Crown,
  ChevronDown,
  ShieldCheck,
  Tablet,
  Play,
  ArrowRight,
  Star,
  Heart,
  MonitorPlay,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Good Student — An AI study tutor for P1 to DSE" },
      {
        name: "description",
        content:
          "A tutor that works through problems with you — in Cantonese, English & Mandarin. Quizzes, flashcards, speaking practice and DSE-ready tutors.",
      },
      { property: "og:title", content: "Good Student — An AI study tutor" },
      {
        property: "og:description",
        content: "A tutor that works through problems with you — in Cantonese, English & Mandarin.",
      },
    ],
  }),
  component: Index,
});

/* -------- mascot (clean symmetric arms) -------- */
function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 246" className={`ms ${className}`} aria-hidden="true">
      <ellipse className="sh" cx="110" cy="234" rx="54" ry="7" />
      {/* legs */}
      <rect className="bf st" x="88" y="188" width="14" height="36" rx="7" />
      <rect className="bf st" x="118" y="188" width="14" height="36" rx="7" />
      <ellipse className="bf st" cx="95" cy="226" rx="13" ry="6" />
      <ellipse className="bf st" cx="125" cy="226" rx="13" ry="6" />
      {/* arms — symmetric, gently angled to body */}
      <g className="arml">
        <rect className="bf st" x="50" y="138" width="14" height="46" rx="7" transform="rotate(14 57 161)" />
        <circle className="bf st" cx="52" cy="184" r="10" />
      </g>
      <g className="armr">
        <rect className="bf st" x="156" y="138" width="14" height="46" rx="7" transform="rotate(-14 163 161)" />
        <circle className="bf st" cx="168" cy="184" r="10" />
      </g>
      {/* body */}
      <rect className="bf st" x="66" y="118" width="88" height="82" rx="30" />
      <rect className="scr" x="85" y="138" width="50" height="36" rx="11" />
      <text className="scrt" x="110" y="162" textAnchor="middle">{"</>"}</text>
      {/* neck */}
      <rect className="bf st" x="104" y="110" width="12" height="12" rx="3" />
      {/* antenna */}
      <path className="st" d="M110 36 C108 24 118 22 113 12" fill="none" strokeLinecap="round" />
      <circle className="ant" cx="112" cy="10" r="7" />
      {/* head */}
      <rect className="bf st" x="56" y="34" width="108" height="92" rx="40" />
      <circle className="ac" cx="56" cy="82" r="9" />
      <circle className="ac" cx="164" cy="82" r="9" />
      <rect className="fc" x="68" y="50" width="84" height="62" rx="26" />
      <circle className="ew" cx="93" cy="80" r="11" />
      <circle className="ep" cx="96" cy="82" r="5" />
      <circle className="ew" cx="127" cy="80" r="11" />
      <circle className="ep" cx="124" cy="82" r="5" />
      <circle className="gl" cx="93" cy="80" r="16" />
      <circle className="gl" cx="127" cy="80" r="16" />
      <path className="gl" d="M109 78 q1 -3 2 0" />
      <ellipse className="bl" cx="80" cy="98" rx="7" ry="4" />
      <ellipse className="bl" cx="140" cy="98" rx="7" ry="4" />
      <ellipse className="mo" cx="110" cy="100" rx="6" ry="5" />
    </svg>
  );
}

/* -------- logo mark: tiny mascot face -------- */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#E04E07" />
        </linearGradient>
      </defs>
      {/* rounded squircle backdrop */}
      <rect x="2" y="2" width="52" height="52" rx="16" fill="url(#lg-grad)" />
      {/* antenna */}
      <path d="M28 11 C26.5 7 32 6 29 2" fill="none" stroke="#FFF7EF" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="29" cy="2.5" r="2.2" fill="#FFF7EF" />
      {/* head */}
      <rect x="10" y="11" width="36" height="32" rx="14" fill="#FFF7EF" />
      {/* face screen */}
      <rect x="14" y="17" width="28" height="22" rx="9" fill="#222F38" />
      {/* eyes */}
      <circle cx="22" cy="28" r="3.4" fill="#fff" />
      <circle cx="22.7" cy="28.6" r="1.6" fill="#222F38" />
      <circle cx="34" cy="28" r="3.4" fill="#fff" />
      <circle cx="33.3" cy="28.6" r="1.6" fill="#222F38" />
      {/* glasses */}
      <circle cx="22" cy="28" r="5" fill="none" stroke="#46D6AE" strokeWidth="1.3" />
      <circle cx="34" cy="28" r="5" fill="none" stroke="#46D6AE" strokeWidth="1.3" />
      <path d="M27 28 q1 -1.5 2 0" fill="none" stroke="#46D6AE" strokeWidth="1.3" />
      {/* cheeks */}
      <ellipse cx="17" cy="35" rx="2.4" ry="1.3" fill="#FF9A57" opacity=".7" />
      <ellipse cx="39" cy="35" rx="2.4" ry="1.3" fill="#FF9A57" opacity=".7" />
    </svg>
  );
}


/* -------- main -------- */
function Index() {
  const [stepIdx, setStepIdx] = useState(0);
  const [openQ, setOpenQ] = useState<number | null>(0);

  // Scroll progress bar + reveal-on-scroll
  useEffect(() => {
    const sb = document.getElementById("gs-sb");
    const onScroll = () => {
      const h = document.documentElement;
      const sh = h.scrollHeight - h.clientHeight;
      if (sb && sh > 0) sb.style.width = (h.scrollTop / sh) * 100 + "%";
      // parallax for hero stage
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
        el.style.setProperty("--py", `${off}px`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // Auto-cycle feature speech
  useEffect(() => {
    const t = setInterval(() => setStepIdx((i) => (i + 1) % 4), 4200);
    return () => clearInterval(t);
  }, []);

  const steps = [
    {
      icon: Wand2,
      grad: "linear-gradient(150deg,#FF8A3D,#FB6A1E)",
      title: "Make your own tutor",
      blurb: "Built from your notes & past papers.",
      tags: [
        { icon: Upload, label: "Upload" },
        { icon: ScanLine, label: "Scan" },
      ],
      line: "“Give me your notes — I'll become your tutor.”",
    },
    {
      icon: Wrench,
      grad: "linear-gradient(150deg,#8A7BE8,#6F5FE0)",
      title: "A whole toolbox",
      blurb: "Open whatever fits today.",
      tags: [
        { icon: Layers, label: "Flashcards" },
        { icon: Mic, label: "Speaking" },
        { icon: Network, label: "Mind maps" },
      ],
      line: "“Pick a tool. Quiz, flashcards, speaking… whatever helps.”",
    },
    {
      icon: GraduationCap,
      grad: "linear-gradient(150deg,#3F95E6,#2E7BD0)",
      title: "Ready for the DSE",
      blurb: "Tutors for every core subject.",
      tags: [
        { icon: BookOpen, label: "Eng" },
        { icon: Calculator, label: "Maths" },
        { icon: Languages, label: "中文" },
      ],
      line: "“Doing the DSE? These are ready to go.”",
    },
    {
      icon: Puzzle,
      grad: "linear-gradient(150deg,#37C2A0,#13A483)",
      title: "Learn for fun",
      blurb: "Chess, music, coding — your plan.",
      tags: [
        { icon: Crown, label: "Chess" },
        { icon: Music, label: "Music" },
        { icon: Code2, label: "Code" },
      ],
      line: "“Or learn something just for fun.”",
    },
  ];

  const faqs = [
    { icon: ShieldCheck, q: "Is it safe for students?", a: "Yes — built for students, no ads, private by design." },
    { icon: Lightbulb, q: "Will it just give the answers?", a: "No. It guides you to work it out, like a good tutor would." },
    { icon: TrendingUp, q: "What ages and levels?", a: "Primary 1 through Secondary 6, including the DSE." },
    { icon: Tablet, q: "What do I need to use it?", a: "Any modern browser — works beautifully on iPad, laptop and phone." },
    { icon: Languages, q: "Which languages?", a: "Cantonese, English and Mandarin." },
  ];

  return (
    <div className="gs-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="scrollbar" id="gs-sb" />

      {/* NAV */}
      <nav>
        <div className="wrap nav-in">
          <a className="logo" href="#top">
            <LogoMark className="mk" />
            <span>Good Student</span>
          </a>
          <div className="nav-links">
            <a href="#features">Tools</a>
            <a href="#tutors">Tutors</a>
            <a href="#honesty">Why us</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-right">
            <button className="btn btn-ghost btn-sm">Log in</button>
            <button className="btn btn-primary btn-sm">Sign up <ArrowRight size={16} /></button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero snap-sec" id="top">
        <Sparkles className="doodle drift" style={{ top: "14%", left: "6%", color: "var(--amber)" }} size={26} />
        <Star className="doodle spin" style={{ top: "72%", left: "4%", color: "var(--teal)" }} size={18} />
        <Heart className="doodle drift" style={{ top: "22%", right: "5%", color: "#E86A9A" }} size={20} />

        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow up d1">
              <span className="dot-live" /> Meet Good Student
            </div>
            <h1 className="up d2">
              An AI study buddy that helps you <span className="hl">work it out</span>.
            </h1>
            <p className="lead up d3">
              A patient tutor that thinks through problems with you, becomes a tutor from your own
              notes, and grows real <b>AI literacy</b> while you learn.
            </p>
            <div className="hero-cta up d4">
              <button className="btn btn-primary" onClick={() => scrollTo("features")}>
                <Sparkles size={18} /> Explore tools
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo("demo")}>
                <Play size={16} /> See how it works
              </button>
            </div>
            <div className="trust up d4">
              <span className="chip"><GraduationCap size={14} /> Built on HKDSE curriculum</span>
              <span className="chip"><Lightbulb size={14} /> AI literacy first</span>
              <span className="chip"><Tablet size={14} /> Beautiful on iPad</span>
            </div>
          </div>

          {/* Mascot stage */}
          <div className="stage">
            <span className="blob b1" data-parallax="0.08" />
            <span className="blob b2" data-parallax="-0.06" />
            <div className="spotlight">
              <span className="ring r1" />
              <span className="ring r2" />
              <div className="hero-mascot a-wave a-blink a-bob"><Mascot /></div>
              <div className="bubble-pop">
                <b>Hi! I'm Good Student.</b>
                <span>Let's work it out together — one good question at a time.</span>
              </div>
              <div className="name-tag">
                <LogoMark className="nt-ic" />
                <span><b>Good Student</b><br /><i>your AI study buddy</i></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DEMO — video placeholder */}
      <section className="demo" id="demo">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">See it in action</div>
            <h2>A two-minute tour of Good Student.</h2>
            <p className="sec-sub">A peek at the website — drop your demo video into the frame below.</p>
          </div>
          <div className="demo-frame reveal">
            <div className="df-bar">
              <span className="dot" style={{ background: "#FF6B6B" }} />
              <span className="dot" style={{ background: "#FFD93D" }} />
              <span className="dot" style={{ background: "#6BCB77" }} />
              <span className="df-url">goodstudent.hk</span>
            </div>
            <div className="df-stage">
              {/* Replace this block with your <video> or <iframe> */}
              <div className="df-placeholder">
                <div className="df-play"><Play size={34} /></div>
                <b>Drop your demo video here</b>
                <span>Replace this placeholder in <code>src/routes/index.tsx</code> · <code>.df-stage</code></span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* PILLARS */}
      <section className="intro">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Why it exists</div>
            <h2>For when you don't have a tutor.</h2>
            <p className="sec-sub">Real tutoring shouldn't be a luxury. Good Student is built around three quiet ideas.</p>
          </div>
          <div className="pillars">
            {[
              {
                icon: Lightbulb,
                grad: "linear-gradient(150deg,#FF8A3D,#FB6A1E)",
                title: "Guides, doesn't tell",
                body: "It asks the next question, so the learning stays yours.",
              },
              {
                icon: TrendingUp,
                grad: "linear-gradient(150deg,#37C2A0,#13A483)",
                title: "P1 to the DSE",
                body: "One tutor that grows with you, all the way through school.",
              },
              {
                icon: Tablet,
                grad: "linear-gradient(150deg,#FFC56B,#FFB454)",
                title: "Made for iPad",
                body: "A calm, focused website that feels right on iPad, laptop or phone.",
              },
            ].map((p) => (
              <div key={p.title} className="pillar">
                <div className="pic" style={{ background: p.grad }}>
                  <p.icon size={28} strokeWidth={2.2} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — talking mascot */}
      <section className="features" id="features">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Take the tour</div>
            <h2>Here's what I can do.</h2>
            <p className="sec-sub">Hover any card — I'll tell you about it.</p>
          </div>
          <div className="stage-wrap">
            <div className="presenter">
              <div className="bubble">
                {steps.map((s, i) => (
                  <span key={i} className={`line ${i === stepIdx ? "show" : ""}`}>{s.line}</span>
                ))}
              </div>
              <div className="mascot-wrap a-talk"><Mascot /></div>
              <div className="presenter-dots">
                {steps.map((_, i) => (
                  <button key={i} className={i === stepIdx ? "on" : ""} onClick={() => setStepIdx(i)} aria-label={`Step ${i + 1}`} />
                ))}
              </div>
            </div>

            <div className="feat-steps" id="tutors">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={`fstep ${i === stepIdx ? "active" : ""}`}
                  onMouseEnter={() => setStepIdx(i)}
                  onClick={() => setStepIdx(i)}
                >
                  <div className="fic" style={{ background: s.grad }}>
                    <s.icon size={26} strokeWidth={2.2} />
                  </div>
                  <div className="fbody">
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                    <div className="tags">
                      {s.tags.map((t) => (
                        <span className="tag" key={t.label}><t.icon size={12} /> {t.label}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="fstep-arrow" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HONESTY band */}
      <section className="honesty" id="honesty">
        <div className="wrap">
          <div className="honesty-inner">
            <div className="honesty-grid">
              <div>
                <div className="eyebrow">What's different</div>
                <h2>It tells you when it's not sure.</h2>
                <p>
                  It shows where answers come from — so students learn to <i>use</i> AI,
                  not just trust it.
                </p>
                <div className="honesty-stats">
                  <div><b>iPad</b><span>ready</span></div>
                  <div><b>12+</b><span>subjects</span></div>
                  <div><b>P1–S6</b><span>every level</span></div>
                </div>
              </div>
              <div className="honesty-art">
                <span className="ring" />
                <span className="ring r2" />
                <div className="mascot-wrap a-wave"><Mascot /></div>
                <svg className="mug" viewBox="0 0 60 60">
                  <rect x="10" y="18" width="34" height="30" rx="6" fill="#FFF6EC" stroke="#26323B" strokeWidth="2" />
                  <path d="M44 24 h6 a6 6 0 0 1 0 14 h-6" fill="none" stroke="#26323B" strokeWidth="3" />
                  <text x="27" y="38" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#E04E07" fontWeight="700">404</text>
                </svg>
                <svg className="banana" viewBox="0 0 60 40">
                  <path d="M6 10 q4 22 28 24 q18 0 20 -8 q-10 6 -22 0 q-16 -8 -16 -18 q-6 -2 -10 2z" fill="#FFC93C" stroke="#E0A800" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Good to know</div>
            <h2>Quick questions.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`qa ${openQ === i ? "open" : ""}`}>
                <button onClick={() => setOpenQ(openQ === i ? null : i)}>
                  <span className="qi"><f.icon size={16} /></span>
                  <span className="qt">{f.q}</span>
                  <ChevronDown className="chev" size={18} />
                </button>
                <div className="ans" style={{ maxHeight: openQ === i ? 120 : 0 }}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div className="cta-card">
            <div className="cta-mascot a-bob"><Mascot /></div>
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Let's work through one together.</h2>
              <p>Free to start. No ads. Built for students — works great on iPad.</p>
            </div>
            <button className="btn btn-primary btn-lg" onClick={() => scrollTo("features")}>
              Start exploring <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="logo" href="#top">
                <LogoMark className="mk" />
                <span>Good Student</span>
              </a>
              <p>An AI study tutor for Hong Kong students — a website built to guide, not to do the work for you.</p>
            </div>
            <div className="foot-col">
              <h4>Product</h4>
              <a href="#features">Tools</a>
              <a href="#tutors">Tutors</a>
              <a href="#honesty">Why us</a>
            </div>
            <div className="foot-col">
              <h4>Support</h4>
              <a href="#faq">FAQ</a>
              <a href="#">Privacy &amp; safety</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© Good Student · A community education programme</span>
            <span className="foot-note"><Tablet size={14} /> Works on iPad, laptop & phone</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ===== styles ===== */
const STYLES = `
:root{
  --orange:#FB6A1E;--orange-deep:#E04E07;--orange-2:#FF8A3D;--amber:#FFB454;
  --cream:#FFF7EF;--cream-2:#FFEEDD;--paper:#FFFCF8;
  --ink:#311C10;--ink-soft:#7A6453;--ink-faint:#A8978A;
  --teal:#13A483;--teal-soft:#D6F0E8;--line:#F0DEC9;
  --pink:#E86A9A;--violet:#8A7BE8;--blue:#3F95E6;
  --shadow-sm:0 4px 16px -6px rgba(120,60,20,.22);
  --shadow:0 22px 50px -24px rgba(176,72,12,.42);
  --shadow-lift:0 34px 80px -30px rgba(176,72,12,.55);
  --font-display:'Fredoka',system-ui,sans-serif;--font-body:'DM Sans',system-ui,sans-serif;
}
.gs-root *{margin:0;padding:0;box-sizing:border-box}
.gs-root{font-family:var(--font-body);color:var(--ink);background:var(--cream);line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden;min-height:100vh}
.gs-root::before{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.6;
  background:radial-gradient(58% 48% at 86% -6%,rgba(255,138,61,.32),transparent 60%),
             radial-gradient(45% 40% at -6% 14%,rgba(255,180,84,.30),transparent 60%),
             radial-gradient(60% 45% at 50% 112%,rgba(19,164,131,.10),transparent 60%)}
.gs-root .wrap{max-width:1180px;margin:0 auto;padding:0 28px;position:relative;z-index:1}
.gs-root h1,.gs-root h2,.gs-root h3{font-family:var(--font-display);font-weight:600;line-height:1.04;letter-spacing:-.015em}
.gs-root a{color:inherit;text-decoration:none}
.gs-root .eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}
.gs-root .dot-live{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(19,164,131,.22);animation:gs-ping 2s infinite}
@keyframes gs-ping{0%,100%{box-shadow:0 0 0 4px rgba(19,164,131,.22)}50%{box-shadow:0 0 0 8px rgba(19,164,131,0)}}

.gs-root .scrollbar{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--amber),var(--orange),var(--orange-deep));z-index:99;transition:width .1s linear}

/* NAV */
.gs-root nav{position:sticky;top:0;z-index:60;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);background:rgba(255,247,239,.82);border-bottom:1px solid rgba(240,222,201,.7)}
.gs-root .nav-in{display:flex;align-items:center;justify-content:space-between;height:72px}
.gs-root .logo{display:flex;align-items:center;gap:12px;font-family:var(--font-display);font-weight:700;font-size:1.35rem;letter-spacing:-.02em;color:var(--ink)}
.gs-root .logo .mk{width:42px;height:42px;display:block;filter:drop-shadow(0 6px 14px rgba(224,78,7,.32));transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.gs-root .logo:hover .mk{transform:rotate(-10deg) scale(1.1)}
.gs-root .logo span{background:linear-gradient(180deg,var(--ink) 60%,var(--orange-deep));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.gs-root .nav-links{display:flex;gap:30px;font-weight:500;color:var(--ink-soft);font-size:.95rem}
.gs-root .nav-links a{position:relative;transition:color .2s}
.gs-root .nav-links a::after{content:"";position:absolute;left:0;right:100%;bottom:-6px;height:2px;background:var(--orange);border-radius:2px;transition:right .25s}
.gs-root .nav-links a:hover{color:var(--orange-deep)}
.gs-root .nav-links a:hover::after{right:0}
.gs-root .nav-right{display:flex;align-items:center;gap:14px}
.gs-root .lang,.gs-root .foot-note{display:inline-flex;align-items:center;gap:8px;font-size:.82rem;font-weight:500;color:var(--ink-soft);background:var(--paper);border:1px solid var(--line);padding:7px 13px;border-radius:999px}
.gs-root .lang b,.gs-root .foot-note svg{color:var(--orange-deep)}

/* Buttons */
.gs-root .btn{font-family:var(--font-display);font-weight:600;border:none;cursor:pointer;border-radius:999px;transition:transform .18s,box-shadow .18s;display:inline-flex;align-items:center;gap:8px;justify-content:center}
.gs-root .btn-primary{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;padding:14px 24px;font-size:1rem;box-shadow:var(--shadow-sm)}
.gs-root .btn-primary:hover{transform:translateY(-2px) scale(1.02);box-shadow:var(--shadow)}
.gs-root .btn-ghost{background:#fff;color:var(--ink);padding:14px 22px;font-size:1rem;border:1.5px solid var(--line);box-shadow:var(--shadow-sm)}
.gs-root .btn-ghost:hover{transform:translateY(-2px);border-color:var(--orange-2);color:var(--orange-deep)}
.gs-root .btn-sm{padding:9px 16px;font-size:.88rem}
.gs-root .btn-lg{padding:18px 30px;font-size:1.08rem}

/* HERO */
.gs-root .hero{position:relative;padding:72px 0 80px}
.gs-root .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}
.gs-root .hero-copy{position:relative;z-index:2}
.gs-root .hero h1{font-size:clamp(2.8rem,5.4vw,4.4rem);margin-top:18px}
.gs-root .hero h1 .hl{color:var(--orange-deep);position:relative;white-space:nowrap;display:inline-block}
.gs-root .hero h1 .hl::after{content:"";position:absolute;left:-3px;right:-3px;bottom:.06em;height:.34em;background:var(--amber);opacity:.5;border-radius:8px;z-index:-1;transform:scaleX(0);transform-origin:left;animation:gs-underline 1s .7s forwards cubic-bezier(.2,.7,.2,1)}
@keyframes gs-underline{to{transform:scaleX(1)}}
.gs-root .hero p.lead{margin:20px 0 32px;font-size:1.18rem;color:var(--ink-soft);max-width:30em}
.gs-root .hero-cta{display:flex;gap:14px;flex-wrap:wrap}
.gs-root .up{opacity:0;transform:translateY(22px);animation:gs-up .7s forwards cubic-bezier(.2,.7,.2,1)}
.gs-root .up.d1{animation-delay:.05s}.gs-root .up.d2{animation-delay:.18s}.gs-root .up.d3{animation-delay:.32s}.gs-root .up.d4{animation-delay:.46s}
@keyframes gs-up{to{opacity:1;transform:none}}

.gs-root .trust{display:flex;align-items:center;gap:10px;margin-top:34px;flex-wrap:wrap}
.gs-root .chip{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-body);font-weight:500;font-size:.82rem;color:var(--ink-soft);background:var(--paper);border:1px solid var(--line);padding:8px 13px;border-radius:999px;box-shadow:var(--shadow-sm)}
.gs-root .chip svg{color:var(--orange-deep)}

/* Device */
.gs-root .stage{position:relative}
.gs-root .blob{position:absolute;border-radius:50%;filter:blur(14px);z-index:0;pointer-events:none}
.gs-root .blob.b1{width:280px;height:280px;background:radial-gradient(circle,var(--amber),transparent 70%);top:-60px;right:-50px;opacity:.55;animation:gs-float 7s ease-in-out infinite}
.gs-root .blob.b2{width:220px;height:220px;background:radial-gradient(circle,var(--teal-soft),transparent 70%);bottom:-50px;left:-50px;opacity:.85;animation:gs-float 9s ease-in-out infinite reverse}
@keyframes gs-float{0%,100%{transform:translate(0,0)}50%{transform:translate(14px,-18px)}}
.gs-root .device{position:relative;z-index:1;background:var(--paper);border-radius:30px;border:1px solid var(--line);box-shadow:var(--shadow-lift);overflow:hidden;animation:gs-up .8s .25s both cubic-bezier(.2,.7,.2,1)}
.gs-root .dev-bar{display:flex;align-items:center;gap:7px;padding:14px 18px;background:linear-gradient(180deg,#fff,#fff8f1);border-bottom:1px solid var(--line)}
.gs-root .dot{width:11px;height:11px;border-radius:50%}
.gs-root .dev-bar .dev-title{margin-left:10px;font-family:var(--font-body);font-weight:500;font-size:.82rem;color:var(--ink-soft)}
.gs-root .dev-bar .play{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:.74rem;font-weight:600;color:var(--orange-deep);background:var(--cream-2);padding:5px 11px;border-radius:999px}
.gs-root .dev-body{padding:18px;min-height:300px;background:linear-gradient(180deg,#fffdfa,#fff7ef)}
.gs-root .toggle{display:flex;gap:6px;background:var(--cream-2);padding:5px;border-radius:14px;margin-bottom:16px}
.gs-root .toggle button{flex:1;border:none;background:transparent;font-family:var(--font-display);font-weight:600;font-size:.88rem;color:var(--ink-soft);padding:9px;border-radius:10px;cursor:pointer;transition:.2s}
.gs-root .toggle button.on{background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm)}
.gs-root .tool-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;animation:gs-fade .4s ease}
.gs-root .tcell{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:12px;font-size:.88rem;font-weight:500;transition:transform .2s,border-color .2s}
.gs-root .tcell:hover{transform:translateY(-3px);border-color:var(--orange-2)}
.gs-root .tcell-ic{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;flex-shrink:0}
@keyframes gs-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.gs-root .tutor-row{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:12px 14px;margin-bottom:9px;transition:transform .2s}
.gs-root .tutor-row:hover{transform:translateX(4px)}
.gs-root .tutor-row .ic{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;color:#fff;flex-shrink:0}
.gs-root .tutor-row .nm{font-weight:500;font-size:.92rem}
.gs-root .tutor-row .go{margin-left:auto;font-size:.82rem;color:var(--orange-deep);font-weight:600;display:inline-flex;align-items:center;gap:4px}
.gs-root .tutor-build{border:1.5px dashed var(--orange-2);color:var(--orange-deep);justify-content:center;font-weight:600;font-family:var(--font-display);background:var(--cream)}
.gs-root .dev-foot{padding:10px 18px;border-top:1px solid var(--line);background:#fff;display:flex;align-items:center;gap:8px;font-size:.76rem;color:var(--ink-faint)}
.gs-root .dev-foot .streak{margin-left:auto;color:var(--orange-deep);font-weight:600}
.gs-root .hero-mascot{width:280px;z-index:5;filter:drop-shadow(0 20px 30px rgba(120,40,0,.28));position:relative}
@keyframes gs-bob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-12px) rotate(3deg)}}

/* Hero spotlight stage */
.gs-root .spotlight{position:relative;display:grid;place-items:center;min-height:480px;z-index:1}
.gs-root .spotlight .ring{position:absolute;border-radius:50%;border:2px dashed rgba(224,78,7,.28);pointer-events:none}
.gs-root .spotlight .ring.r1{width:380px;height:380px;animation:gs-spin 28s linear infinite}
.gs-root .spotlight .ring.r2{width:460px;height:460px;border-style:dotted;border-color:rgba(70,214,174,.42);animation:gs-spin 40s linear infinite reverse}
.gs-root .spotlight::before{content:"";position:absolute;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(255,180,84,.55),rgba(255,247,239,0) 65%);z-index:0;animation:gs-float 8s ease-in-out infinite}

.gs-root .bubble-pop{position:absolute;top:30px;left:-20px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:14px 18px;box-shadow:var(--shadow);max-width:230px;z-index:6;animation:gs-up .8s .5s both cubic-bezier(.2,.7,.2,1)}
.gs-root .bubble-pop b{font-family:var(--font-display);font-weight:600;color:var(--ink);font-size:1rem;display:block;margin-bottom:3px}
.gs-root .bubble-pop span{font-size:.86rem;color:var(--ink-soft);line-height:1.45}
.gs-root .bubble-pop::after{content:"";position:absolute;bottom:-10px;right:32px;width:20px;height:20px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}

.gs-root .name-tag{position:absolute;bottom:6px;right:-10px;display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:999px;padding:8px 16px 8px 8px;box-shadow:var(--shadow);z-index:6;animation:gs-up .8s .65s both cubic-bezier(.2,.7,.2,1)}
.gs-root .name-tag .nt-ic{width:36px;height:36px}
.gs-root .name-tag span{font-size:.78rem;line-height:1.25;color:var(--ink-soft)}
.gs-root .name-tag b{font-family:var(--font-display);font-weight:600;color:var(--ink);font-size:.92rem}
.gs-root .name-tag i{font-style:normal;color:var(--orange-deep);font-weight:500}


/* Doodles */
.gs-root .doodle{position:absolute;z-index:0;opacity:.85}
.gs-root .spin{animation:gs-spin 14s linear infinite}@keyframes gs-spin{to{transform:rotate(360deg)}}
.gs-root .drift{animation:gs-float 8s ease-in-out infinite}

/* Section heads */
.gs-root .sec-head{text-align:center;max-width:42rem;margin:0 auto 48px}
.gs-root .sec-head h2{font-size:clamp(2.1rem,4vw,3rem);margin-top:14px}
.gs-root .sec-sub{margin-top:14px;color:var(--ink-soft);font-size:1.04rem}

/* PILLARS */
.gs-root .intro{padding:90px 0 70px;position:relative}
.gs-root .pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.gs-root .pillar{background:linear-gradient(165deg,#fff,#fff7ef);border:1px solid var(--line);border-radius:28px;padding:36px 28px 32px;text-align:center;box-shadow:var(--shadow-sm);transition:transform .25s,box-shadow .25s}
.gs-root .pillar:hover{transform:translateY(-6px);box-shadow:var(--shadow)}
.gs-root .pillar .pic{width:72px;height:72px;border-radius:22px;margin:0 auto 18px;display:grid;place-items:center;color:#fff;box-shadow:var(--shadow-sm);transform:rotate(-6deg);transition:transform .3s}
.gs-root .pillar:hover .pic{transform:rotate(8deg) scale(1.08)}
.gs-root .pillar h3{font-size:1.24rem}
.gs-root .pillar p{margin-top:8px;color:var(--ink-soft);font-size:.96rem}

/* FEATURES */
.gs-root .features{padding:60px 0 80px;position:relative}
.gs-root .stage-wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:start}
.gs-root .presenter{position:sticky;top:104px;display:flex;flex-direction:column;align-items:center}
.gs-root .bubble{background:#fff;border:1px solid var(--line);border-radius:24px;padding:24px 26px;box-shadow:var(--shadow);max-width:320px;text-align:center;position:relative;min-height:110px;display:flex;align-items:center;justify-content:center}
.gs-root .bubble::after{content:"";position:absolute;bottom:-13px;left:50%;transform:translateX(-50%) rotate(45deg);width:24px;height:24px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
.gs-root .bubble .line{font-family:var(--font-display);font-weight:500;font-size:1.14rem;color:var(--ink);opacity:0;transition:opacity .35s;position:absolute;padding:0 26px}
.gs-root .bubble .line.show{opacity:1;position:relative}
.gs-root .presenter .mascot-wrap{width:180px;margin-top:24px;filter:drop-shadow(0 16px 22px rgba(120,40,0,.2))}
.gs-root .presenter-dots{display:flex;gap:8px;margin-top:14px}
.gs-root .presenter-dots button{width:8px;height:8px;border-radius:50%;border:none;background:var(--line);cursor:pointer;transition:.2s;padding:0}
.gs-root .presenter-dots button.on{background:var(--orange);width:24px;border-radius:4px}
.gs-root .feat-steps{display:flex;flex-direction:column;gap:18px}
.gs-root .fstep{background:linear-gradient(165deg,#fff,#fff8f1);border:1px solid var(--line);border-radius:24px;padding:24px 26px;display:flex;gap:20px;align-items:center;box-shadow:var(--shadow-sm);transition:transform .3s,box-shadow .3s,border-color .3s;cursor:pointer;position:relative}
.gs-root .fstep:hover{transform:translateX(4px)}
.gs-root .fstep.active{border-color:var(--orange-2);box-shadow:var(--shadow);transform:scale(1.02)}
.gs-root .fstep .fic{width:62px;height:62px;border-radius:18px;display:grid;place-items:center;color:#fff;flex-shrink:0;box-shadow:var(--shadow-sm);transform:rotate(-4deg);transition:transform .3s}
.gs-root .fstep.active .fic{transform:rotate(8deg) scale(1.06)}
.gs-root .fbody{flex:1;min-width:0}
.gs-root .fstep h3{font-size:1.28rem}
.gs-root .fstep p{color:var(--ink-soft);font-size:.96rem;margin-top:4px}
.gs-root .fstep .tags{margin-top:12px;display:flex;flex-wrap:wrap;gap:7px}
.gs-root .tag{font-size:.78rem;font-weight:500;background:var(--cream-2);color:var(--ink-soft);padding:5px 11px;border-radius:999px;display:inline-flex;align-items:center;gap:5px}
.gs-root .tag svg{color:var(--orange)}
.gs-root .fstep-arrow{color:var(--ink-faint);opacity:0;transform:translateX(-6px);transition:.25s}
.gs-root .fstep.active .fstep-arrow,.gs-root .fstep:hover .fstep-arrow{opacity:1;transform:none;color:var(--orange-deep)}

/* HONESTY */
.gs-root .honesty{padding:40px 0 90px}
.gs-root .honesty-inner{background:linear-gradient(155deg,var(--orange),var(--orange-deep));border-radius:42px;padding:72px 60px;color:#fff;position:relative;overflow:hidden;box-shadow:var(--shadow-lift)}
.gs-root .honesty-inner::before{content:"";position:absolute;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 65%);top:-160px;left:-80px}
.gs-root .honesty-inner::after{content:"";position:absolute;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.12),transparent 65%);bottom:-100px;right:-60px}
.gs-root .honesty-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:40px;align-items:center;position:relative;z-index:1}
.gs-root .honesty .eyebrow{color:#ffe2c9}
.gs-root .honesty h2{font-size:clamp(2rem,4.2vw,3.2rem);margin:14px 0 16px}
.gs-root .honesty p{font-size:1.16rem;opacity:.95;max-width:26em}
.gs-root .honesty-stats{display:flex;gap:32px;margin-top:30px}
.gs-root .honesty-stats div{display:flex;flex-direction:column}
.gs-root .honesty-stats b{font-family:var(--font-display);font-weight:600;font-size:2rem;line-height:1}
.gs-root .honesty-stats span{font-size:.84rem;opacity:.85;margin-top:4px}
.gs-root .honesty-art{position:relative;display:grid;place-items:center;min-height:280px}
.gs-root .honesty-art .ring{position:absolute;width:260px;height:260px;border-radius:50%;border:2px dashed rgba(255,255,255,.5);animation:gs-spin 22s linear infinite}
.gs-root .honesty-art .ring.r2{width:340px;height:340px;border-color:rgba(255,255,255,.22);animation-duration:32s;animation-direction:reverse}
.gs-root .honesty-art .mascot-wrap{width:210px;z-index:2;filter:drop-shadow(0 18px 26px rgba(120,40,0,.4))}
.gs-root .banana{position:absolute;width:56px;bottom:10px;left:12%;transform:rotate(18deg);z-index:3}
.gs-root .mug{position:absolute;width:52px;top:18px;right:10%;z-index:3;animation:gs-bob 3.5s ease-in-out infinite}

/* FAQ */
.gs-root .faq{padding:30px 0 90px}
.gs-root .faq-list{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.gs-root .qa{background:var(--paper);border:1px solid var(--line);border-radius:18px;overflow:hidden;transition:box-shadow .25s,border-color .25s}
.gs-root .qa.open{box-shadow:var(--shadow);border-color:var(--orange-2)}
.gs-root .qa button{width:100%;text-align:left;background:none;border:none;cursor:pointer;padding:20px 22px;display:flex;align-items:center;gap:14px;font-family:var(--font-display);font-weight:600;font-size:1.05rem;color:var(--ink)}
.gs-root .qa button .qi{width:34px;height:34px;border-radius:11px;background:var(--cream-2);display:grid;place-items:center;color:var(--orange-deep);flex-shrink:0}
.gs-root .qa .qt{flex:1}
.gs-root .qa .chev{color:var(--ink-faint);transition:transform .3s}
.gs-root .qa.open .chev{transform:rotate(180deg);color:var(--orange-deep)}
.gs-root .qa .ans{max-height:0;overflow:hidden;transition:max-height .35s ease}
.gs-root .qa .ans p{padding:0 22px 20px 70px;color:var(--ink-soft)}

/* CTA band */
.gs-root .cta-band{padding:30px 0 100px}
.gs-root .cta-card{background:linear-gradient(160deg,#fff,#fff5e8);border:1px solid var(--line);border-radius:32px;padding:40px 44px;display:flex;align-items:center;gap:28px;box-shadow:var(--shadow);position:relative;overflow:hidden}
.gs-root .cta-card::before{content:"";position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(255,180,84,.35),transparent 65%);top:-140px;right:-80px;pointer-events:none}
.gs-root .cta-card>div{flex:1;position:relative;z-index:1}
.gs-root .cta-card h2{font-size:clamp(1.6rem,3vw,2.2rem);margin-top:10px}
.gs-root .cta-card p{margin-top:8px;color:var(--ink-soft)}
.gs-root .cta-mascot{width:104px;flex-shrink:0;filter:drop-shadow(0 12px 18px rgba(120,40,0,.2))}
.gs-root .cta-card .btn{position:relative;z-index:1;flex-shrink:0}

/* FOOTER */
.gs-root footer{background:linear-gradient(180deg,var(--cream),var(--cream-2));border-top:1px solid var(--line);padding:60px 0 36px;position:relative;z-index:1}
.gs-root .foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr;gap:40px;margin-bottom:42px}
.gs-root .foot-brand .logo{margin-bottom:16px}
.gs-root .foot-brand p{color:var(--ink-soft);max-width:24em;font-size:.94rem}
.gs-root .foot-col h4{font-family:var(--font-display);font-weight:600;font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:14px}
.gs-root .foot-col a{display:block;color:var(--ink-soft);margin-bottom:10px;font-size:.94rem;transition:color .2s}
.gs-root .foot-col a:hover{color:var(--orange-deep)}
.gs-root .foot-bottom{border-top:1px solid var(--line);padding-top:24px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;color:var(--ink-faint);font-size:.84rem}

/* MASCOT */
.gs-root .ms{width:100%;height:auto;transform-origin:center;display:block}
.gs-root .ms .sh{fill:rgba(49,28,16,.12)}
.gs-root .ms .bf{fill:#FFF6EC}
.gs-root .ms .st{stroke:#EBD2B6;stroke-width:2.2;fill:#FFF6EC}
.gs-root .ms .scr{fill:#26323B}
.gs-root .ms .scrt{fill:#46D6AE;font-family:monospace;font-size:17px;font-weight:700}
.gs-root .ms .or{fill:#FB6A1E}.gs-root .ms .ord{fill:#E04E07}.gs-root .ms .ant{fill:#FB6A1E}
.gs-root .ms .ac{fill:#46D6AE}.gs-root .ms .fc{fill:#222F38}
.gs-root .ms .ew{fill:#fff}.gs-root .ms .ep{fill:#222F38}
.gs-root .ms .gl{stroke:#46D6AE;stroke-width:3;fill:none}
.gs-root .ms .bl{fill:#FF9A57;opacity:.55}.gs-root .ms .mo{fill:#FF8A4C}
.gs-root .ms .ew,.gs-root .ms .ep,.gs-root .ms .mo{transform-box:fill-box;transform-origin:center}
.gs-root .ms .armr{transform-box:fill-box;transform-origin:50% 4%}

.gs-root .a-bob .ms{animation:gs-mbob 3s ease-in-out infinite}
.gs-root .a-wave .ms .armr{animation:gs-mwave 1.2s ease-in-out infinite}
.gs-root .a-blink .ms .ew,.gs-root .a-blink .ms .ep{animation:gs-mblink 3.4s ease-in-out infinite}
.gs-root .a-talk .ms .mo{animation:gs-mtalk .42s ease-in-out infinite}
.gs-root .a-talk .ms{animation:gs-mbob 3s ease-in-out infinite}

@keyframes gs-mbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes gs-mwave{0%,100%{transform:rotate(-70deg)}50%{transform:rotate(-100deg)}}
@keyframes gs-mblink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(.08)}}
@keyframes gs-mtalk{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}

/* Sticky/snap scroll + scroll reveals */
html{scroll-behavior:smooth}
.gs-root{scroll-snap-type:y proximity}
.gs-root .snap-sec,.gs-root section{scroll-snap-align:start;scroll-margin-top:80px}
.gs-root .reveal{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
.gs-root .reveal.in{opacity:1;transform:none}
.gs-root .hero-mascot{transform:translateY(var(--py,0))}
.gs-root .blob{transform:translate3d(0,var(--py,0),0)}
.gs-root .sec-head{position:relative}

/* Watch demo link (nav) */
.gs-root .nav-watch{display:inline-flex;align-items:center;gap:6px;font-size:.84rem;font-weight:600;color:var(--ink-soft);background:var(--paper);border:1px solid var(--line);padding:8px 13px;border-radius:999px;transition:.2s}
.gs-root .nav-watch:hover{color:var(--orange-deep);border-color:var(--orange-2);transform:translateY(-1px)}
.gs-root .nav-watch svg{color:var(--orange-deep)}

/* DEMO section */
.gs-root .demo{padding:70px 0 30px;position:relative}
.gs-root .demo-frame{max-width:1040px;margin:0 auto;background:linear-gradient(180deg,#fff,#fff8f1);border:1px solid var(--line);border-radius:28px;box-shadow:var(--shadow-lift);overflow:hidden;position:sticky;top:96px}
.gs-root .df-bar{display:flex;align-items:center;gap:8px;padding:14px 18px;background:linear-gradient(180deg,#fff,#fff6ec);border-bottom:1px solid var(--line)}
.gs-root .df-url{margin-left:14px;font-family:var(--font-body);font-size:.84rem;color:var(--ink-soft);background:var(--cream-2);padding:5px 14px;border-radius:999px}
.gs-root .df-stage{aspect-ratio:16/9;background:
  radial-gradient(60% 70% at 50% 40%,rgba(255,180,84,.22),transparent 70%),
  linear-gradient(160deg,#26323B,#1A2129);display:grid;place-items:center;color:#FFF7EF;position:relative;overflow:hidden}
.gs-root .df-stage::after{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:36px 36px;pointer-events:none}
.gs-root .df-placeholder{text-align:center;display:flex;flex-direction:column;align-items:center;gap:10px;z-index:1;padding:0 20px}
.gs-root .df-placeholder b{font-family:var(--font-display);font-weight:600;font-size:1.3rem}
.gs-root .df-placeholder span{font-size:.86rem;opacity:.7;max-width:30em}
.gs-root .df-placeholder code{background:rgba(255,255,255,.1);padding:2px 7px;border-radius:6px;font-size:.78rem}
.gs-root .df-play{width:84px;height:84px;border-radius:50%;background:linear-gradient(160deg,var(--orange-2),var(--orange-deep));display:grid;place-items:center;color:#fff;box-shadow:0 18px 40px rgba(0,0,0,.35),0 0 0 0 rgba(251,106,30,.6);animation:gs-pulseplay 2.4s ease-in-out infinite;cursor:pointer}
@keyframes gs-pulseplay{0%,100%{box-shadow:0 18px 40px rgba(0,0,0,.35),0 0 0 0 rgba(251,106,30,.55)}50%{box-shadow:0 18px 40px rgba(0,0,0,.35),0 0 0 22px rgba(251,106,30,0)}}


/* RESPONSIVE */
@media(max-width:960px){
  .gs-root .hero-grid,.gs-root .stage-wrap,.gs-root .honesty-grid,.gs-root .pillars,.gs-root .foot-grid{grid-template-columns:1fr;gap:40px}
  .gs-root .nav-links{display:none}
  .gs-root .hero-mascot{width:220px}
  .gs-root .spotlight{min-height:380px}
  .gs-root .bubble-pop{position:relative;top:0;left:0;max-width:none;margin-bottom:14px}
  .gs-root .name-tag{position:relative;right:0;bottom:0;margin-top:14px}
  .gs-root .presenter{position:static;flex-direction:row;gap:20px;margin-bottom:20px;align-items:center}
  .gs-root .presenter .mascot-wrap{width:120px;margin-top:0;order:-1}
  .gs-root .bubble{flex:1;min-height:0;max-width:none}
  .gs-root .presenter-dots{display:none}
  .gs-root .honesty-inner{padding:48px 30px}
  .gs-root .cta-card{flex-direction:column;text-align:center;padding:36px 28px}
  .gs-root .cta-mascot{width:100px}
}
@media(max-width:560px){
  .gs-root .nav-right .lang{display:none}
  .gs-root .hero{padding:50px 0 70px}
  .gs-root .fstep{padding:20px;gap:14px}
  .gs-root .trust{flex-wrap:wrap}
}
@media(prefers-reduced-motion:reduce){.gs-root *,.gs-root *::before,.gs-root *::after{animation:none!important;transition:none!important}}
`;
