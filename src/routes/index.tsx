import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Good Student — An AI study tutor for P1 to DSE" },
      {
        name: "description",
        content:
          "A tutor that helps you work it out — in Cantonese, English & Mandarin. Quizzes, flashcards, speaking practice and DSE-ready tutors.",
      },
      { property: "og:title", content: "Good Student — An AI study tutor" },
      {
        property: "og:description",
        content: "A tutor that helps you work it out — in Cantonese, English & Mandarin.",
      },
    ],
  }),
  component: Index,
});

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
.gs-root{font-family:var(--font-body);color:var(--ink);background:var(--cream);line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden;min-height:100vh;scroll-behavior:smooth}
.gs-root::before{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55;
  background:radial-gradient(58% 48% at 86% -6%,rgba(255,138,61,.32),transparent 60%),radial-gradient(45% 40% at -6% 14%,rgba(255,180,84,.30),transparent 60%),radial-gradient(60% 45% at 50% 112%,rgba(19,164,131,.10),transparent 60%)}
.gs-root .noise{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.045;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.gs-root .wrap{max-width:1140px;margin:0 auto;padding:0 24px;position:relative;z-index:1}
.gs-root h1,.gs-root h2,.gs-root h3,.gs-root .display{font-family:var(--font-display);font-weight:600;line-height:1.04;letter-spacing:-.01em}
.gs-root a{color:inherit;text-decoration:none}
.gs-root .eyebrow{font-family:var(--font-display);font-weight:600;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}

.gs-root .scrollbar{position:fixed;top:0;left:0;height:4px;width:0;background:linear-gradient(90deg,var(--amber),var(--orange),var(--orange-deep));z-index:99;transition:width .1s linear}

.gs-root nav{position:sticky;top:0;z-index:60;backdrop-filter:blur(14px);background:rgba(255,247,239,.8);border-bottom:1px solid rgba(240,222,201,.7)}
.gs-root .nav-in{display:flex;align-items:center;justify-content:space-between;height:70px}
.gs-root .logo{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-weight:700;font-size:1.3rem}
.gs-root .logo .mk{width:44px;height:44px;border-radius:14px;background:linear-gradient(150deg,var(--orange),var(--orange-2));display:grid;place-items:center;box-shadow:var(--shadow-sm);transform:rotate(-6deg);transition:transform .3s;overflow:hidden}
.gs-root .logo:hover .mk{transform:rotate(6deg) scale(1.06)}
.gs-root .logo .mk svg{width:34px;height:34px}
.gs-root .nav-links{display:flex;gap:28px;font-weight:500;color:var(--ink-soft);font-size:.96rem}
.gs-root .nav-links a{position:relative;transition:color .2s}
.gs-root .nav-links a::after{content:"";position:absolute;left:0;right:100%;bottom:-4px;height:2px;background:var(--orange);border-radius:2px;transition:right .25s}
.gs-root .nav-links a:hover{color:var(--orange-deep)}
.gs-root .nav-links a:hover::after{right:0}
.gs-root .nav-right{display:flex;align-items:center;gap:14px}
.gs-root .lang{display:flex;align-items:center;gap:7px;font-size:.84rem;font-weight:500;color:var(--ink-soft);background:var(--paper);border:1px solid var(--line);padding:7px 12px;border-radius:999px}
.gs-root .lang b{color:var(--orange-deep)}
.gs-root .btn{font-family:var(--font-display);font-weight:600;border:none;cursor:pointer;border-radius:999px;transition:transform .18s,box-shadow .18s,background .18s}
.gs-root .btn-primary{background:linear-gradient(160deg,var(--orange-2),var(--orange));color:#fff;padding:13px 24px;font-size:1rem;box-shadow:var(--shadow-sm)}
.gs-root .btn-primary:hover{transform:translateY(-2px) scale(1.02);box-shadow:var(--shadow)}
.gs-root .btn-ghost{background:#fff;color:var(--ink);padding:13px 24px;font-size:1rem;border:1.5px solid var(--line);box-shadow:var(--shadow-sm)}
.gs-root .btn-ghost:hover{transform:translateY(-2px);border-color:var(--orange-2);color:var(--orange-deep)}
.gs-root .btn-sm{padding:9px 18px;font-size:.9rem}

.gs-root .hero{position:relative;padding:60px 0 96px}
.gs-root .hero-grid{display:grid;grid-template-columns:1.04fr .96fr;gap:50px;align-items:center}
.gs-root .hero h1{font-size:clamp(2.7rem,5.6vw,4.4rem)}
.gs-root .hero h1 .hl{color:var(--orange-deep);position:relative;white-space:nowrap}
.gs-root .hero h1 .hl::after{content:"";position:absolute;left:-2px;right:-2px;bottom:.06em;height:.32em;background:var(--amber);opacity:.45;border-radius:6px;z-index:-1;transform:scaleX(0);transform-origin:left;animation:gs-underline 1s .7s forwards cubic-bezier(.2,.7,.2,1)}
@keyframes gs-underline{to{transform:scaleX(1)}}
.gs-root .hero p.lead{margin:22px 0 30px;font-size:1.18rem;color:var(--ink-soft);max-width:26em}
.gs-root .hero-cta{display:flex;gap:14px;flex-wrap:wrap}
.gs-root .up{opacity:0;transform:translateY(22px);animation:gs-up .7s forwards cubic-bezier(.2,.7,.2,1)}
.gs-root .up.d1{animation-delay:.05s}.gs-root .up.d2{animation-delay:.18s}.gs-root .up.d3{animation-delay:.32s}.gs-root .up.d4{animation-delay:.46s}
@keyframes gs-up{to{opacity:1;transform:none}}

.gs-root .stage{position:relative}
.gs-root .blob{position:absolute;border-radius:50%;filter:blur(10px);z-index:-1}
.gs-root .blob.b1{width:240px;height:240px;background:radial-gradient(circle,var(--amber),transparent 70%);top:-50px;right:-40px;opacity:.6;animation:gs-float 7s ease-in-out infinite}
.gs-root .blob.b2{width:190px;height:190px;background:radial-gradient(circle,var(--teal-soft),transparent 70%);bottom:-40px;left:-40px;opacity:.85;animation:gs-float 9s ease-in-out infinite reverse}
@keyframes gs-float{0%,100%{transform:translate(0,0)}50%{transform:translate(14px,-18px)}}
.gs-root .device{background:var(--paper);border-radius:30px;border:1px solid var(--line);box-shadow:var(--shadow-lift);overflow:hidden;animation:gs-up .8s .25s both cubic-bezier(.2,.7,.2,1)}
.gs-root .dev-bar{display:flex;align-items:center;gap:7px;padding:13px 16px;background:linear-gradient(180deg,#fff,#fff8f1);border-bottom:1px solid var(--line)}
.gs-root .dot{width:10px;height:10px;border-radius:50%}
.gs-root .dev-bar .dev-title{margin-left:8px;font-family:var(--font-display);font-weight:600;font-size:.84rem;color:var(--ink-soft)}
.gs-root .dev-bar .play{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:.76rem;font-weight:600;color:var(--orange-deep);background:var(--cream-2);padding:5px 11px;border-radius:999px;cursor:pointer}
.gs-root .dev-bar .play i{animation:gs-pulse 2s infinite}
@keyframes gs-pulse{0%,100%{opacity:1}50%{opacity:.4}}
.gs-root .dev-body{padding:18px;min-height:292px;background:linear-gradient(180deg,#fffdfa,#fff7ef)}
.gs-root .toggle{display:flex;gap:6px;background:var(--cream-2);padding:5px;border-radius:14px;margin-bottom:16px}
.gs-root .toggle button{flex:1;border:none;background:transparent;font-family:var(--font-display);font-weight:600;font-size:.86rem;color:var(--ink-soft);padding:8px;border-radius:10px;cursor:pointer;transition:.2s}
.gs-root .toggle button.on{background:#fff;color:var(--orange-deep);box-shadow:var(--shadow-sm)}
.gs-root .view{display:none}.gs-root .view.on{display:block;animation:gs-fade .45s ease}
@keyframes gs-fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.gs-root .tool-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.gs-root .tcell{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:12px;font-size:.85rem;font-weight:500;transition:transform .2s}
.gs-root .tcell:hover{transform:translateY(-3px)}
.gs-root .tcell i{font-size:1.25rem}
.gs-root .tutor-row{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:11px 13px;margin-bottom:9px;transition:transform .2s}
.gs-root .tutor-row:hover{transform:translateX(4px)}
.gs-root .tutor-row .ic{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;color:#fff;flex-shrink:0;font-size:1.05rem}
.gs-root .tutor-row .nm{font-weight:500;font-size:.9rem}
.gs-root .tutor-row .go{margin-left:auto;font-size:.8rem;color:var(--orange-deep);font-weight:600}
.gs-root .tutor-build{border:1.5px dashed var(--orange-2);color:var(--orange-deep);justify-content:center;font-weight:600;font-family:var(--font-display);background:var(--cream)}
.gs-root .hero-mascot{position:absolute;width:130px;right:-10px;bottom:-70px;z-index:3;filter:drop-shadow(0 16px 22px rgba(120,40,0,.22))}

.gs-root .doodle{position:absolute;z-index:0;opacity:.85}
.gs-root .spin{animation:gs-spin 14s linear infinite}@keyframes gs-spin{to{transform:rotate(360deg)}}
.gs-root .drift{animation:gs-float 8s ease-in-out infinite}

.gs-root .reveal{opacity:0;transform:translateY(36px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
.gs-root .reveal.in{opacity:1;transform:none}
.gs-root .pop{opacity:0;transform:scale(.85);transition:opacity .55s,transform .55s cubic-bezier(.3,1.4,.5,1)}
.gs-root .pop.in{opacity:1;transform:none}
.gs-root .pop.p2{transition-delay:.1s}.gs-root .pop.p3{transition-delay:.2s}
.gs-root .sec-head{text-align:center;max-width:38rem;margin:0 auto 46px}
.gs-root .sec-head h2{font-size:clamp(2rem,4vw,3rem);margin-top:12px}

.gs-root .intro{padding:24px 0 90px}
.gs-root .pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.gs-root .pillar{background:linear-gradient(165deg,#fff,#fff7ef);border:1px solid var(--line);border-radius:26px;padding:30px 24px;text-align:center;box-shadow:var(--shadow-sm);transition:transform .25s,box-shadow .25s}
.gs-root .pillar:hover{transform:translateY(-6px);box-shadow:var(--shadow)}
.gs-root .pillar .pic{width:64px;height:64px;border-radius:19px;margin:0 auto 16px;display:grid;place-items:center;font-size:1.8rem;color:#fff;box-shadow:var(--shadow-sm)}
.gs-root .pillar:hover .pic{animation:gs-wiggle .5s}
@keyframes gs-wiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}}
.gs-root .pillar h3{font-size:1.16rem}
.gs-root .pillar p{margin-top:6px;color:var(--ink-soft);font-size:.94rem}

.gs-root .features{padding:40px 0 70px;position:relative}
.gs-root .stage-wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:start}
.gs-root .presenter{position:sticky;top:96px;display:flex;flex-direction:column;align-items:center}
.gs-root .bubble{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px 24px;box-shadow:var(--shadow);max-width:300px;text-align:center;position:relative;min-height:100px;display:flex;align-items:center;justify-content:center}
.gs-root .bubble::after{content:"";position:absolute;bottom:-13px;left:50%;transform:translateX(-50%) rotate(45deg);width:24px;height:24px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
.gs-root .bubble .line{font-family:var(--font-display);font-weight:500;font-size:1.16rem;color:var(--ink);opacity:0;transition:opacity .4s,transform .4s;position:absolute;padding:0 24px;transform:translateY(8px)}
.gs-root .bubble .line.show{opacity:1;position:relative;transform:none}
.gs-root .presenter .mascot-wrap{width:170px;margin-top:22px;filter:drop-shadow(0 16px 22px rgba(120,40,0,.2))}
.gs-root .feat-steps{display:flex;flex-direction:column;gap:18px}
.gs-root .fstep{background:linear-gradient(165deg,#fff,#fff8f1);border:1px solid var(--line);border-radius:24px;padding:26px 28px;display:flex;gap:20px;align-items:center;box-shadow:var(--shadow-sm);transition:transform .3s,box-shadow .3s,border-color .3s;cursor:pointer}
.gs-root .fstep.active{border-color:var(--orange-2);box-shadow:var(--shadow);transform:scale(1.02)}
.gs-root .fstep .fic{width:60px;height:60px;border-radius:18px;display:grid;place-items:center;font-size:1.7rem;color:#fff;flex-shrink:0;box-shadow:var(--shadow-sm)}
.gs-root .fstep.active .fic{animation:gs-wiggle .5s}
.gs-root .fstep h3{font-size:1.3rem}
.gs-root .fstep p{color:var(--ink-soft);font-size:.96rem;margin-top:3px}
.gs-root .fstep .tags{margin-top:10px;display:flex;flex-wrap:wrap;gap:7px}
.gs-root .tag{font-size:.78rem;font-weight:500;background:var(--cream-2);color:var(--ink-soft);padding:4px 11px;border-radius:999px;display:flex;align-items:center;gap:5px}
.gs-root .tag i{color:var(--orange);font-size:.92rem}

.gs-root .honesty{padding:30px 0 100px}
.gs-root .honesty-inner{background:linear-gradient(155deg,var(--orange),var(--orange-deep));border-radius:38px;padding:64px 52px;color:#fff;position:relative;overflow:hidden;box-shadow:var(--shadow-lift)}
.gs-root .honesty-inner::before{content:"";position:absolute;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 65%);top:-150px;left:-70px}
.gs-root .honesty-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:36px;align-items:center;position:relative;z-index:1}
.gs-root .honesty .eyebrow{color:#ffe2c9}
.gs-root .honesty h2{font-size:clamp(2rem,4.2vw,3.2rem);margin:12px 0 14px}
.gs-root .honesty p{font-size:1.18rem;opacity:.95;max-width:24em}
.gs-root .honesty-art{position:relative;display:grid;place-items:center;min-height:240px}
.gs-root .honesty-art .ring{position:absolute;width:236px;height:236px;border-radius:50%;border:2px dashed rgba(255,255,255,.5);animation:gs-spin 22s linear infinite}
.gs-root .honesty-art .mascot-wrap{width:200px;z-index:2;filter:drop-shadow(0 18px 26px rgba(120,40,0,.4))}
.gs-root .banana{position:absolute;width:54px;bottom:6px;left:8%;transform:rotate(18deg);z-index:3}
.gs-root .mug{position:absolute;width:48px;top:14px;right:8%;z-index:3;animation:gs-bob 3.5s ease-in-out infinite}

.gs-root .faq{padding:0 0 100px}
.gs-root .faq-list{max-width:740px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.gs-root .qa{background:var(--paper);border:1px solid var(--line);border-radius:18px;overflow:hidden;transition:box-shadow .25s,border-color .25s}
.gs-root .qa.open{box-shadow:var(--shadow);border-color:var(--orange-2)}
.gs-root .qa button{width:100%;text-align:left;background:none;border:none;cursor:pointer;padding:19px 22px;display:flex;align-items:center;gap:14px;font-family:var(--font-display);font-weight:600;font-size:1.04rem;color:var(--ink)}
.gs-root .qa button .qi{width:32px;height:32px;border-radius:10px;background:var(--cream-2);display:grid;place-items:center;color:var(--orange-deep);flex-shrink:0}
.gs-root .qa .chev{margin-left:auto;transition:transform .3s;color:var(--ink-faint)}
.gs-root .qa.open .chev{transform:rotate(180deg)}
.gs-root .qa .ans{max-height:0;overflow:hidden;transition:max-height .35s ease}
.gs-root .qa .ans p{padding:0 22px 20px 68px;color:var(--ink-soft)}

.gs-root footer{background:linear-gradient(180deg,var(--cream),var(--cream-2));border-top:1px solid var(--line);padding:56px 0 36px;position:relative;z-index:1}
.gs-root .foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr;gap:36px;margin-bottom:40px}
.gs-root .foot-brand .logo{margin-bottom:14px}
.gs-root .foot-brand p{color:var(--ink-soft);max-width:22em;font-size:.94rem}
.gs-root .foot-col h4{font-family:var(--font-display);font-weight:600;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:14px}
.gs-root .foot-col a{display:block;color:var(--ink-soft);margin-bottom:10px;font-size:.94rem;transition:color .2s}
.gs-root .foot-col a:hover{color:var(--orange-deep)}
.gs-root .foot-bottom{border-top:1px solid var(--line);padding-top:24px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;color:var(--ink-faint);font-size:.84rem}
.gs-root .foot-mascot{width:58px}

/* mascot kit */
.gs-root .ms{width:100%;height:auto;transform-origin:center}
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

.gs-root .a-bob   .ms{animation:gs-mbob 3s ease-in-out infinite}
.gs-root .a-float .ms{animation:gs-mflo 5s ease-in-out infinite}
.gs-root .a-wave  .ms .armr{animation:gs-mwave 1.1s ease-in-out infinite}
.gs-root .a-blink .ms .ew,.gs-root .a-blink .ms .ep{animation:gs-mblink 3s ease-in-out infinite}
.gs-root .a-talk  .ms .mo{animation:gs-mtalk .4s ease-in-out infinite}
.gs-root .a-talk  .ms{animation:gs-mbob 3s ease-in-out infinite}

@keyframes gs-mbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-11px)}}
@keyframes gs-mflo{0%,100%{transform:translate(0,0) rotate(0)}50%{transform:translate(6px,-12px) rotate(2deg)}}
@keyframes gs-mwave{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(10deg)}}
@keyframes gs-mblink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(.08)}}
@keyframes gs-mtalk{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}
@keyframes gs-bob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-12px) rotate(3deg)}}

.gs-root .hero-mascot{animation:gs-bob 4s ease-in-out infinite}

@media(max-width:880px){
  .gs-root .nav-links,.gs-root .hero-mascot,.gs-root .nav-right .lang{display:none}
  .gs-root .hero-grid,.gs-root .honesty-grid,.gs-root .pillars,.gs-root .stage-wrap,.gs-root .foot-grid{grid-template-columns:1fr}
  .gs-root .presenter{position:static;flex-direction:row;gap:16px;margin-bottom:24px;align-items:center}
  .gs-root .presenter .mascot-wrap{width:110px;margin-top:0}
  .gs-root .bubble{max-width:none;min-height:0;flex:1}
  .gs-root .honesty-inner{padding:40px 26px}
}
@media(prefers-reduced-motion:reduce){.gs-root *{animation:none!important}}
`;

function Mascot() {
  return (
    <svg viewBox="0 0 220 246" className="ms" aria-hidden="true">
      <ellipse className="sh" cx="110" cy="234" rx="52" ry="8" />
      <rect className="bf st" x="86" y="186" width="15" height="40" rx="7.5" />
      <rect className="bf st" x="119" y="186" width="15" height="40" rx="7.5" />
      <ellipse className="bf st" cx="92" cy="228" rx="13" ry="7" />
      <ellipse className="bf st" cx="128" cy="228" rx="13" ry="7" />
      {/* left arm */}
      <g className="arml" transform="rotate(20 52 132)">
        <rect className="bf st" x="44.5" y="126" width="15" height="48" rx="7.5" />
        <circle className="bf st" cx="52" cy="176" r="9.5" />
      </g>
      {/* right arm (waves) */}
      <g className="armr" transform="rotate(-20 168 132)">
        <rect className="bf st" x="160.5" y="126" width="15" height="48" rx="7.5" />
        <circle className="bf st" cx="168" cy="176" r="9.5" />
      </g>
      <rect className="bf st" x="66" y="118" width="88" height="82" rx="30" />
      <rect className="scr" x="85" y="138" width="50" height="36" rx="11" />
      <text className="scrt" x="110" y="162" textAnchor="middle">{"</>"}</text>
      <path className="or" d="M110 116 L92 108 L92 124 Z" />
      <path className="or" d="M110 116 L128 108 L128 124 Z" />
      <circle className="ord" cx="110" cy="116" r="5" />
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
      <circle className="gl" cx="93" cy="80" r="16" />
      <circle className="gl" cx="127" cy="80" r="16" />
      <path className="gl" d="M109 78 q1 -3 2 0" />
      <ellipse className="bl" cx="80" cy="98" rx="7" ry="4" />
      <ellipse className="bl" cx="140" cy="98" rx="7" ry="4" />
      <ellipse className="mo" cx="110" cy="100" rx="6" ry="5" />
    </svg>
  );
}

function Index() {
  useEffect(() => {
    // Scroll progress bar
    const sb = document.getElementById("gs-sb");
    const onScroll = () => {
      const h = document.documentElement;
      const st = h.scrollTop;
      const sh = h.scrollHeight - h.clientHeight;
      if (sb) sb.style.width = (st / sh) * 100 + "%";
    };
    window.addEventListener("scroll", onScroll);

    // Reveal animations
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".gs-root .reveal,.gs-root .pop").forEach((el) => io.observe(el));

    // Feature step / mascot bubble sync
    const steps = document.querySelectorAll<HTMLElement>(".gs-root .fstep");
    const lines = document.querySelectorAll<HTMLElement>(".gs-root .bubble .line");
    const activate = (i: number) => {
      steps.forEach((s, k) => s.classList.toggle("active", k === i));
      lines.forEach((l) => l.classList.toggle("show", Number(l.dataset.i) === i));
    };
    const fio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) activate(Number((e.target as HTMLElement).dataset.i));
        }),
      { threshold: 0.6, rootMargin: "-18% 0px -18% 0px" },
    );
    const hoverHandlers: Array<[HTMLElement, () => void]> = [];
    steps.forEach((s) => {
      fio.observe(s);
      const h = () => activate(Number(s.dataset.i));
      s.addEventListener("mouseenter", h);
      hoverHandlers.push([s, h]);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      fio.disconnect();
      hoverHandlers.forEach(([el, h]) => el.removeEventListener("mouseenter", h));
    };
  }, []);

  const setView = (v: "tools" | "tutors") => {
    document.getElementById("view-tools")?.classList.toggle("on", v === "tools");
    document.getElementById("view-tutors")?.classList.toggle("on", v === "tutors");
    document.getElementById("tg-tools")?.classList.toggle("on", v === "tools");
    document.getElementById("tg-tutors")?.classList.toggle("on", v === "tutors");
  };

  const toggleQa = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const qa = btn.parentElement as HTMLElement;
    const ans = qa.querySelector(".ans") as HTMLElement;
    const open = qa.classList.contains("open");
    document.querySelectorAll<HTMLElement>(".gs-root .qa").forEach((q) => {
      q.classList.remove("open");
      const a = q.querySelector(".ans") as HTMLElement;
      a.style.maxHeight = "";
    });
    if (!open) {
      qa.classList.add("open");
      ans.style.maxHeight = ans.scrollHeight + "px";
    }
  };

  return (
    <div className="gs-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="scrollbar" id="gs-sb" />
      <div className="noise" />

      <nav>
        <div className="wrap nav-in">
          <a className="logo" href="#top">
            <span className="mk"><Mascot /></span> Good Student
          </a>
          <div className="nav-links">
            <a href="#features">Tools</a>
            <a href="#features">Tutors</a>
            <a href="#features">Explore</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-right">
            <span className="lang"><i className="ti ti-world" /> <b>粵</b> · EN · 普</span>
            <button className="btn btn-primary btn-sm">Open app</button>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <i className="ti ti-sparkles doodle drift" style={{ top: "14%", left: "6%", fontSize: "1.8rem", color: "var(--amber)" }} />
        <i className="ti ti-star-filled doodle spin" style={{ top: "62%", left: "2%", fontSize: "1.4rem", color: "var(--teal)" }} />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow up d1">An AI study tutor · P1 to DSE</div>
            <h1 className="up d2">
              A tutor that helps you <span className="hl">work it out</span>.
            </h1>
            <p className="lead up d3">
              It works through problems with you — in Cantonese, English &amp; Mandarin.
            </p>
            <div className="hero-cta up d4">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                <i className="ti ti-tools" style={{ verticalAlign: "-2px" }} /> Explore the tools
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Meet your tutors
              </button>
            </div>
          </div>
          <div className="stage">
            <span className="blob b1" />
            <span className="blob b2" />
            <div className="device">
              <div className="dev-bar">
                <span className="dot" style={{ background: "#FB6A1E" }} />
                <span className="dot" style={{ background: "#FFB454" }} />
                <span className="dot" style={{ background: "#46D6AE" }} />
                <span className="dev-title">Good Student</span>
                <span className="play"><i className="ti ti-player-play-filled" /> See it move</span>
              </div>
              <div className="dev-body">
                <div className="toggle">
                  <button id="tg-tools" className="on" onClick={() => setView("tools")}>Tools</button>
                  <button id="tg-tutors" onClick={() => setView("tutors")}>Tutors</button>
                </div>
                <div id="view-tools" className="view on">
                  <div className="tool-grid">
                    <div className="tcell"><i className="ti ti-list-check" style={{ color: "#13A483" }} /> Quizzes</div>
                    <div className="tcell"><i className="ti ti-cards" style={{ color: "#E86A9A" }} /> Flashcards</div>
                    <div className="tcell"><i className="ti ti-microphone" style={{ color: "#8A7BE8" }} /> Say it Right</div>
                    <div className="tcell"><i className="ti ti-ear" style={{ color: "#3F95E6" }} /> Hear it Right</div>
                    <div className="tcell"><i className="ti ti-sitemap" style={{ color: "#E04E07" }} /> Mind map</div>
                    <div className="tcell"><i className="ti ti-book-2" style={{ color: "#C77A0A" }} /> Reading</div>
                  </div>
                </div>
                <div id="view-tutors" className="view">
                  <div className="tutor-row"><span className="ic" style={{ background: "#3F95E6" }}><i className="ti ti-abc" /></span><span className="nm">DSE English</span><span className="go">Open →</span></div>
                  <div className="tutor-row"><span className="ic" style={{ background: "#C77A0A" }}><i className="ti ti-calculator" /></span><span className="nm">DSE Maths</span><span className="go">Open →</span></div>
                  <div className="tutor-row"><span className="ic" style={{ background: "#E86A9A" }}><i className="ti ti-language" /></span><span className="nm">DSE 中文</span><span className="go">Open →</span></div>
                  <div className="tutor-row tutor-build"><i className="ti ti-plus" /> Build your own</div>
                </div>
              </div>
            </div>
            <div className="hero-mascot a-blink"><Mascot /></div>
          </div>
        </div>
      </header>

      <section className="intro">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Why it exists</div>
            <h2>For when you don't have a tutor.</h2>
          </div>
          <div className="pillars">
            <div className="pillar pop">
              <div className="pic" style={{ background: "linear-gradient(150deg,#FF8A3D,#FB6A1E)" }}><i className="ti ti-bulb" /></div>
              <h3>Guides, doesn't tell</h3>
              <p>It asks the next question, so the learning is yours.</p>
            </div>
            <div className="pillar pop p2">
              <div className="pic" style={{ background: "linear-gradient(150deg,#37C2A0,#13A483)" }}><i className="ti ti-stairs-up" /></div>
              <h3>P1 to the DSE</h3>
              <p>One tutor that grows with you, on your phone.</p>
            </div>
            <div className="pillar pop p3">
              <div className="pic" style={{ background: "linear-gradient(150deg,#FFC56B,#FFB454)" }}><i className="ti ti-language" /></div>
              <h3>Three languages</h3>
              <p>Cantonese, English or Mandarin.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Take the tour</div>
            <h2>Here's what I can do.</h2>
          </div>
          <div className="stage-wrap">
            <div className="presenter">
              <div className="bubble">
                <span className="line show" data-i="0">"Give me your notes — I'll become your tutor."</span>
                <span className="line" data-i="1">"Pick a tool. Quiz, flashcards, speaking… whatever helps."</span>
                <span className="line" data-i="2">"Doing the DSE? These are ready to go."</span>
                <span className="line" data-i="3">"Or learn something just for fun."</span>
              </div>
              <div className="mascot-wrap a-talk"><Mascot /></div>
            </div>
            <div className="feat-steps">
              <div className="fstep active" data-i="0">
                <div className="fic" style={{ background: "linear-gradient(150deg,#FF8A3D,#FB6A1E)" }}><i className="ti ti-wand" /></div>
                <div>
                  <h3>Make your own tutor</h3>
                  <p>Built from your notes &amp; past papers.</p>
                  <div className="tags">
                    <span className="tag"><i className="ti ti-upload" />Upload</span>
                    <span className="tag"><i className="ti ti-scan" />Scan</span>
                  </div>
                </div>
              </div>
              <div className="fstep" data-i="1">
                <div className="fic" style={{ background: "linear-gradient(150deg,#8A7BE8,#6F5FE0)" }}><i className="ti ti-tools" /></div>
                <div>
                  <h3>A whole toolbox</h3>
                  <p>Open whatever fits today.</p>
                  <div className="tags">
                    <span className="tag"><i className="ti ti-cards" />Flashcards</span>
                    <span className="tag"><i className="ti ti-microphone" />Speaking</span>
                    <span className="tag"><i className="ti ti-sitemap" />Mind maps</span>
                  </div>
                </div>
              </div>
              <div className="fstep" data-i="2">
                <div className="fic" style={{ background: "linear-gradient(150deg,#3F95E6,#2E7BD0)" }}><i className="ti ti-school" /></div>
                <div>
                  <h3>Ready for the DSE</h3>
                  <p>Tutors for every core subject.</p>
                  <div className="tags">
                    <span className="tag"><i className="ti ti-abc" />Eng</span>
                    <span className="tag"><i className="ti ti-calculator" />Maths</span>
                    <span className="tag"><i className="ti ti-language" />中文</span>
                  </div>
                </div>
              </div>
              <div className="fstep" data-i="3">
                <div className="fic" style={{ background: "linear-gradient(150deg,#37C2A0,#13A483)" }}><i className="ti ti-puzzle" /></div>
                <div>
                  <h3>Learn for fun</h3>
                  <p>Chess, music, coding — your plan.</p>
                  <div className="tags">
                    <span className="tag"><i className="ti ti-chess" />Chess</span>
                    <span className="tag"><i className="ti ti-music" />Music</span>
                    <span className="tag"><i className="ti ti-code" />Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="honesty">
        <div className="wrap">
          <div className="honesty-inner reveal">
            <div className="honesty-grid">
              <div>
                <div className="eyebrow">What's different</div>
                <h2>It tells you when it's not sure.</h2>
                <p>It shows where answers come from — so you learn to use AI, not just trust it.</p>
              </div>
              <div className="honesty-art">
                <span className="ring" />
                <svg className="mug" viewBox="0 0 60 60">
                  <rect x="10" y="18" width="34" height="30" rx="6" fill="#FFF6EC" stroke="#26323B" strokeWidth="2" />
                  <path d="M44 24 h6 a6 6 0 0 1 0 14 h-6" fill="none" stroke="#26323B" strokeWidth="3" />
                  <text x="27" y="38" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#E04E07" fontWeight="700">404</text>
                </svg>
                <div className="mascot-wrap a-wave"><Mascot /></div>
                <svg className="banana" viewBox="0 0 60 40">
                  <path d="M6 10 q4 22 28 24 q18 0 20 -8 q-10 6 -22 0 q-16 -8 -16 -18 q-6 -2 -10 2z" fill="#FFC93C" stroke="#E0A800" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Good to know</div>
            <h2>Quick questions.</h2>
          </div>
          <div className="faq-list reveal">
            {[
              { i: "ti-shield-check", q: "Is it safe for my child?", a: "Yes — made for students, no ads, private by design." },
              { i: "ti-bulb", q: "Will it just give the answers?", a: "No. It guides them to work it out, like a good tutor." },
              { i: "ti-stairs-up", q: "What ages and levels?", a: "Primary 1 through Secondary 6, including the DSE." },
              { i: "ti-device-mobile", q: "What device do we need?", a: "A phone — the one most families already have." },
              { i: "ti-language", q: "Which languages?", a: "Cantonese, English and Mandarin." },
            ].map((qa, k) => (
              <div className="qa" key={k}>
                <button onClick={toggleQa}>
                  <span className="qi"><i className={`ti ${qa.i}`} /></span>
                  {qa.q}
                  <i className="ti ti-chevron-down chev" />
                </button>
                <div className="ans"><p>{qa.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="logo" href="#top"><span className="mk"><Mascot /></span> Good Student</a>
              <p>An AI study tutor for Hong Kong students — built to guide, not to do the work for you.</p>
            </div>
            <div className="foot-col">
              <h4>Product</h4>
              <a href="#features">Tools</a>
              <a href="#features">Tutors</a>
              <a href="#features">Explore</a>
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
            <span className="lang"><i className="ti ti-world" /> <b>粵</b> · English · 普通話</span>
            <div className="foot-mascot a-bob"><Mascot /></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
