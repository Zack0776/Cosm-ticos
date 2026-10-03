/* =========================================================
   SAMMÈ COSMETICS — script.js
   Para adicionar produtos, basta incluir novos objetos
   nos arrays HERO_SLIDES e PRODUCTS abaixo.
   ========================================================= */

/* ---------- CONFIGURAÇÃO ---------- */
// Número da loja no WhatsApp (código do país + DDD + número, só dígitos).
// Os pedidos finalizados no site chegam direto nesse número.
const WHATSAPP_NUMBER = "5511962841319";

const ICONS = {
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z"/></svg>',
  drop: '<svg viewBox="0 0 24 24"><path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11Z"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 2l2 7 7 3-7 3-2 7-2-7-7-3 7-3 2-7Z"/></svg>',
  flower: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5"/><path d="M12 9.5C10 6 10 3 12 3s2 3 0 6.5Zm0 5c2 3.5 2 6.5 0 6.5s-2-3 0-6.5ZM9.5 12C6 14 3 14 3 12s3-2 6.5 0Zm5 0c3.5-2 6.5-2 6.5 0s-3 2-6.5 0Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  minus: '<svg viewBox="0 0 24 24"><path d="M6 12h12"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M6 12h12M12 6v12"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
};

const HERO_SLIDES = [
  {
    image: "assets/images/rotina.jpg", theme: "light",
    eyebrow: "Cuidado real", title: 'Sua rotina<br/>de cuidado<br/><em>começa aqui.</em>',
    desc: "Hyaluclean — espuma de limpeza com aloe vera, camomila e calêndula. 150ml.",
    cta: "Conheça os produtos", product: "hyaluclean",
    features: [["shield","Protege","a sua pele"],["drop","Hidrata","profundamente"],["spark","Realça","sua beleza natural"]],
  },
  {
    image: "assets/images/hyalu.jpg", theme: "light", pos: "70% 40%",
    eyebrow: "Hidratação", title: 'Hyalucare<br/><em>gel creme.</em>',
    sub: "Hidratante · 30g",
    desc: "Ácido hialurônico, pantenol e vitamina E para uma pele macia e nutrida.",
    cta: "Saiba mais", product: "hyalucare",
    features: [["drop","Hidratação","intensa"],["shield","Antioxidante","vitamina E"],["spark","Nutrição","diária"]],
  },
  {
    image: "assets/images/bbcream.jpg", theme: "dark",
    eyebrow: "Conheça", title: "O novo", sub: "BB Cream FPS 60",
    desc: "Cobertura natural, hidratação e proteção para o seu dia a dia. Adaptive Color Technology.",
    cta: "Saiba mais", product: "bb-cream",
    features: [["shield","Proteção","FPS 60"],["spark","Cor","adaptativa"],["drop","Hidratação","30ml"]],
  },
  {
    image: "assets/images/floral.jpg", theme: "dark",
    eyebrow: "Pré-venda", title: 'Floral<br/><em>Secret.</em>', sub: "Hair & Body Splash",
    desc: "Fragrância envolvente com brilho natural e hidratação prolongada. 200ml.",
    cta: "Garanta o seu", product: "floral-secret",
    features: [["spark","Brilho","natural"],["drop","Hidratação","profunda"],["flower","Fragrância","exclusiva"]],
  },
];

/* Campos de cada produto:
   id, cat, name, type (nome curto para pedido/pesquisa), sub, desc, price ("R$ 89,90"),
   img + pos (recorte do card), long (descrição completa), benefits, gallery (imagens/recortes da tela do produto).
   Em gallery: z = zoom do recorte, o = ponto de origem do zoom. */
const PRODUCTS = [
  {
    id: "hyaluclean", cat: "Limpeza", name: "Hyaluclean", type: "Espuma de Limpeza",
    sub: "Espuma de limpeza · 150ml", desc: "Limpeza profunda e revitalizante.", price: "R$ 89,90",
    img: "assets/images/hyalu.jpg", pos: "30% 50%",
    long: "Espuma de limpeza com ácido hialurônico e extratos de aloe vera, camomila e calêndula. Limpeza profunda e revitalizante, para todos os tipos de pele.",
    benefits: [["drop","Limpeza","profunda"],["flower","Extratos","aloe, camomila e calêndula"],["shield","Para todos","os tipos de pele"]],
    gallery: [
      { img: "assets/images/hyalu.jpg", pos: "30% 50%", z: 1.4, o: "30% 50%" },
      { img: "assets/images/hyalu.jpg", pos: "30% 50%", z: 2.1, o: "36% 46%" },
      { img: "assets/images/hyalu.jpg", pos: "30% 50%", z: 2.0, o: "18% 22%" },
    ],
  },
  {
    id: "bb-cream", cat: "Tratamento", name: "BB Cream FPS 60", type: "Adaptive Color Technology",
    sub: "Adaptive Color Technology · 30ml", desc: "Proteção, hidratação e adaptação ao seu tom de pele.", price: "R$ 149,90",
    img: "assets/images/bbcream.jpg", pos: "62% 50%",
    long: "Cobertura natural, hidratação e proteção para o seu dia a dia. Com Adaptive Color Technology, a cor se adapta ao seu tom de pele. FPS 60. 30ml.",
    benefits: [["shield","Proteção","FPS 60"],["spark","Cor","adaptativa"],["drop","Hidratação","30ml"]],
    gallery: [
      { img: "assets/images/bbcream.jpg", pos: "66% 50%" },
      { img: "assets/images/bbcream.jpg", pos: "66% 50%", z: 2.0, o: "63% 60%" },
      { img: "assets/images/bbcream.jpg", pos: "66% 50%", z: 2.3, o: "60% 28%" },
    ],
  },
  {
    id: "hyalucare", cat: "Hidratação", name: "Hyalucare", type: "Gel Creme Hidratante",
    sub: "Gel creme hidratante · 30g", desc: "Ácido hialurônico, pantenol e vitamina E.", price: "R$ 119,90",
    img: "assets/images/hyalu.jpg", pos: "75% 50%",
    long: "Gel creme hidratante com ácido hialurônico, pantenol e vitamina E. Hidratação, ação antioxidante e nutrição para uma pele macia e nutrida. 30g.",
    benefits: [["drop","Hidratação","intensa"],["shield","Antioxidante","vitamina E"],["spark","Nutrição","diária"]],
    gallery: [
      { img: "assets/images/hyalu.jpg", pos: "75% 50%", z: 1.45, o: "74% 60%" },
      { img: "assets/images/hyalu.jpg", pos: "75% 50%", z: 2.2, o: "75% 57%" },
      { img: "assets/images/hyalu.jpg", pos: "75% 50%", z: 2.0, o: "88% 12%" },
    ],
  },
  {
    id: "floral-secret", cat: "Perfume corporal", name: "Floral Secret", type: "Hair and Body Splash",
    sub: "Hair and body splash · 200ml", desc: "Fragrância envolvente com hidratação prolongada.", price: "R$ 99,90",
    img: "assets/images/floral.jpg", pos: "63% 50%", tag: "Pré-venda",
    long: "Hair & Body Splash com fragrância envolvente, brilho natural e hidratação prolongada. 200ml.",
    benefits: [["spark","Brilho","natural"],["drop","Hidratação","prolongada"],["flower","Fragrância","exclusiva"]],
    gallery: [
      { img: "assets/images/floral.jpg", pos: "64% 50%" },
      { img: "assets/images/floral.jpg", pos: "64% 50%", z: 2.0, o: "63% 50%" },
      { img: "assets/images/floral.jpg", pos: "64% 50%", z: 2.3, o: "61% 20%" },
    ],
  },
  {
    id: "kit-rotina", cat: "Kit", name: "Kit Rotina", type: "Limpeza + proteção",
    sub: "Limpeza + proteção", desc: "O cuidado completo para uma pele limpa e protegida.", price: "R$ 219,90",
    img: "assets/images/rotina.jpg", pos: "60% 50%",
    long: "O cuidado completo para uma pele limpa e protegida: limpeza e proteção reunidas em um único kit Sammè.",
    benefits: [["drop","Limpeza","diária"],["shield","Proteção","para o dia a dia"],["spark","Rotina","completa"]],
    gallery: [
      { img: "assets/images/rotina.jpg", pos: "60% 50%" },
      { img: "assets/images/rotina.jpg", pos: "60% 50%", z: 1.7, o: "55% 55%" },
      { img: "assets/images/rotina.jpg", pos: "60% 50%", z: 1.7, o: "70% 55%" },
    ],
  },
];

/* ---------- HELPERS ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const E_INOUT = "cubic-bezier(.77,0,.18,1)", E_OUT = "cubic-bezier(.16,1,.3,1)";
const norm = (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }).replace(/\u00a0/g, " ");
const parsePrice = (s) => parseFloat(String(s).replace(/[^\d,]/g, "").replace(",", ".")) || 0;
const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
const AfterLoad = [];
const live = (msg) => { const l = $("#live"); if (l) { l.textContent = ""; setTimeout(() => (l.textContent = msg), 30); } };

// completa campos que faltarem (facilita adicionar produtos novos)
PRODUCTS.forEach((p) => {
  p.id = p.id || slug(p.name);
  p.value = parsePrice(p.price);
  p.type = p.type || (p.sub || "").split("·")[0].trim();
  p.benefits = p.benefits || [];
  p.gallery = p.gallery && p.gallery.length ? p.gallery : [{ img: p.img, pos: p.pos }];
  p.long = p.long || p.desc;
});
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const media = (g) => `<img src="${g.img}" alt="" draggable="false" style="object-position:${g.pos || "50% 50%"};${g.z ? `transform:scale(${g.z});transform-origin:${g.o || "50% 50%"}` : ""}">`;

// link de WhatsApp do rodapé usa o mesmo número configurável
(() => { const a = document.getElementById("footWa"), n = String(WHATSAPP_NUMBER).replace(/\D/g, ""); if (a && n) a.href = `https://wa.me/${n}`; })();

/* ---------- CAMADAS (carrinho, pesquisa, produto…) ---------- */
const Layers = (() => {
  const stack = [];
  const sync = () => document.documentElement.classList.toggle("lock", stack.length > 0);
  return {
    open(name, el, close) { this.remove(name); stack.push({ name, el, close }); sync(); },
    remove(name) { const i = stack.findIndex((l) => l.name === name); if (i > -1) stack.splice(i, 1); sync(); },
    top() { return stack[stack.length - 1]; },
    any() { return stack.length > 0; },
  };
})();
function trapTab(el, e) {
  const f = $$('a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])', el).filter((x) => x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1], inside = el.contains(document.activeElement);
  if (e.shiftKey && (document.activeElement === first || !inside)) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && (document.activeElement === last || !inside)) { e.preventDefault(); first.focus(); }
}
document.addEventListener("keydown", (e) => {
  const t = Layers.top(); if (!t) return;
  if (e.key === "Escape") { e.preventDefault(); t.close(); }
  else if (e.key === "Tab" && t.el) trapTab(t.el, e);
});

/* ---------- LOADER ---------- */
(function loader() {
  document.body.classList.add("loading");
  const bar = $("#loaderBar");
  let p = 0;
  const srcs = [...new Set([...HERO_SLIDES.map(s => s.image), ...PRODUCTS.map(p => p.img)])];
  let loaded = 0;
  srcs.forEach(src => { const i = new Image(); i.onload = i.onerror = () => loaded++; i.src = src; });
  const tick = setInterval(() => {
    const target = (loaded / srcs.length) * 100;
    p += Math.max(1, (target - p) * 0.15);
    p = Math.min(p, target === 100 ? 100 : 92);
    bar.style.width = p + "%";
    $("#loaderLiquid").style.transform = `translateY(${150 - p * 1.5}px)`; $("#loaderPct").textContent = Math.round(p);
    if (p >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        $("#loader").classList.add("done");
        document.body.classList.remove("loading");
        Hero.start();
        AfterLoad.forEach((f) => f());
      }, 400);
    }
  }, 60);
})();

/* ---------- HERO CINEMATIC CAROUSEL ---------- */
const Hero = (() => {
  const slidesEl = $("#heroSlides"), contentEl = $("#heroContent"), featEl = $("#heroFeatures"), dotsEl = $("#heroDots");
  const hero = $(".hero"), nav = $("#nav"), progress = $("#progress");
  let idx = 0, busy = false, timer, t0;
  const DURATION = 7000;

  HERO_SLIDES.forEach((s, i) => {
    slidesEl.insertAdjacentHTML("beforeend",
      `<div class="slide ${s.theme === "light" ? "light" : ""}"><div class="slide__img" style="background-image:url('${s.image}');${s.pos ? `background-position:${s.pos}` : ""}"></div></div>`);
    contentEl.insertAdjacentHTML("beforeend", `
      <div class="hc">
        <p class="eyebrow">${s.eyebrow}</p>
        <h1 class="title">${s.title}</h1>
        ${s.sub ? `<p class="sub">${s.sub}</p>` : "<span></span>"}
        <p class="desc">${s.desc}</p>
        <a href="#produtos" class="btn" ${s.product ? `data-open="${s.product}"` : ""}>${s.cta} ${ICONS.arrow}</a>
      </div>`);
    dotsEl.insertAdjacentHTML("beforeend", `<button aria-label="Slide ${i + 1}"></button>`);
  });
  $("#tot").textContent = pad(HERO_SLIDES.length);
  const slides = [...slidesEl.children], contents = [...contentEl.children], dots = [...dotsEl.children];
  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));

  function renderFeatures(s) {
    featEl.classList.remove("show");
    setTimeout(() => {
      featEl.innerHTML = s.features.map(([ic, a, b]) => `<div class="feat">${ICONS[ic]}<br/>${a}<br/><small>${b}</small></div>`).join("");
      requestAnimationFrame(() => featEl.classList.add("show"));
    }, 400);
  }

  function apply(i, dir) {
    const prev = slides[idx];
    slides.forEach(s => s.classList.remove("is-leaving", "dir-prev"));
    if (prev !== slides[i]) { prev.classList.remove("is-active"); prev.classList.add("is-leaving"); }
    const next = slides[i];
    next.classList.remove("is-active"); void next.offsetWidth;
    next.classList.toggle("dir-prev", dir < 0);
    next.classList.add("is-active");
    contents.forEach(c => c.classList.remove("is-active"));
    void contents[i].offsetWidth; contents[i].classList.add("is-active");
    dots.forEach((d, k) => d.classList.toggle("on", k === i));
    const light = HERO_SLIDES[i].theme === "light";
    hero.classList.toggle("light", light);
    nav.classList.toggle("light", light);
    animateCounter(i + 1);
    renderFeatures(HERO_SLIDES[i]);
    idx = i;
    setTimeout(() => { prev.classList.remove("is-leaving"); busy = false; }, 1600);
    restart();
  }
  function animateCounter(n) {
    const cur = $("#cur");
    cur.animate([{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(-10px)", opacity: 0 }], { duration: 300, easing: "ease-in" })
      .onfinish = () => { cur.textContent = pad(n); cur.animate([{ transform: "translateY(10px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 500, easing: "cubic-bezier(.16,1,.3,1)" }); };
  }
  function go(i, dir) {
    if (busy || i === idx) return;
    busy = true;
    const n = HERO_SLIDES.length;
    apply((i + n) % n, dir ?? (i > idx ? 1 : -1));
  }
  function restart() { t0 = performance.now(); }
  function loop(now) {
    // pausa o avanço automático enquanto há carrinho/pesquisa/produto abertos
    if (Layers.any()) t0 += now - (loop.last || now);
    loop.last = now;
    const p = Math.min((now - t0) / DURATION, 1);
    progress.style.transform = `scaleX(${p})`;
    if (p >= 1) go(idx + 1, 1);
    timer = requestAnimationFrame(loop);
  }
  $("#next").addEventListener("click", () => go(idx + 1, 1));
  $("#prev").addEventListener("click", () => go(idx - 1, -1));
  document.addEventListener("keydown", e => {
    if (Layers.any() || e.target.matches("input,textarea")) return;
    if (e.key === "ArrowRight") go(idx + 1, 1);
    if (e.key === "ArrowLeft") go(idx - 1, -1);
  });

  // swipe
  let sx = null;
  hero.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
  hero.addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) dx < 0 ? go(idx + 1, 1) : go(idx - 1, -1); sx = null; });

  // mouse parallax (simulated camera)
  hero.addEventListener("mousemove", e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    slidesEl.style.transform = `translate(${x * -18}px, ${y * -12}px) scale(1.02)`;
    contentEl.style.translate = `${x * 10}px ${y * 8}px`;
  });
  slidesEl.style.transition = "transform 1.2s cubic-bezier(.16,1,.3,1)";

  return {
    start() {
      slides[0].classList.add("is-active"); contents[0].classList.add("is-active"); dots[0].classList.add("on");
      const light = HERO_SLIDES[0].theme === "light"; hero.classList.toggle("light", light); nav.classList.toggle("light", light);
      renderFeatures(HERO_SLIDES[0]); restart(); timer = requestAnimationFrame(loop);
    },
  };
})();

/* ---------- PARTICLES (poeira dourada + bolhas) ---------- */
function Particles(c, { density = 18000 } = {}) {
  const ctx = c.getContext("2d");
  let w, h, ps = [], on = true, raf = 0;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  function size() {
    w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((w * h) / density);
    ps = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: Math.random() < .08 ? 3 + Math.random() * 6 : .6 + Math.random() * 1.6,
      vx: (Math.random() - .5) * .15, vy: -.1 - Math.random() * .3, a: Math.random() * Math.PI * 2, s: .005 + Math.random() * .02,
    }));
  }
  function draw() {
    if (!on) { raf = 0; return; }
    ctx.clearRect(0, 0, w, h);
    for (const p of ps) {
      p.x += p.vx + Math.sin(p.a) * .2; p.y += p.vy; p.a += p.s;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      const o = .25 + Math.sin(p.a) * .25 + .25;
      if (p.r > 3) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
        ctx.strokeStyle = `rgba(255,235,205,${o * .5})`; ctx.lineWidth = .8; ctx.stroke();
        ctx.beginPath(); ctx.arc(p.x - p.r * .35, p.y - p.r * .35, p.r * .25, 0, 7); ctx.fillStyle = `rgba(255,255,255,${o})`; ctx.fill();
      } else {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        g.addColorStop(0, `rgba(255,228,180,${o})`); g.addColorStop(1, "rgba(255,228,180,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3, 0, 7); ctx.fill();
      }
    }
    raf = requestAnimationFrame(draw);
  }
  size(); addEventListener("resize", size);
  // só anima quando visível
  new IntersectionObserver(([en]) => { on = en.isIntersecting; if (on && !raf) draw(); }).observe(c);
  draw();
}
Particles($("#particles"));

/* =========================================================
   CARRINHO (estado + localStorage)
   ========================================================= */
const Cart = (() => {
  const KEY = "samme.cart.v1";
  let items = [];
  const subs = [];
  const emit = () => subs.forEach((f) => f());
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "[]");
      items = raw.filter((i) => i && byId(i.id) && i.qty > 0).map((i) => ({ id: i.id, qty: clamp(i.qty | 0, 1, 99) }));
    } catch { items = []; }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* sem storage: segue em memória */ } }
  load();
  addEventListener("storage", (e) => { if (e.key === KEY) { load(); emit(); } });
  return {
    items: () => items,
    count: () => items.reduce((n, i) => n + i.qty, 0),
    total: () => items.reduce((n, i) => n + byId(i.id).value * i.qty, 0),
    add(id, qty = 1) {
      const it = items.find((i) => i.id === id);
      if (it) it.qty = clamp(it.qty + qty, 1, 99); else items.push({ id, qty: clamp(qty, 1, 99) });
      save(); emit();
    },
    set(id, qty) { const it = items.find((i) => i.id === id); if (!it) return; it.qty = clamp(qty, 1, 99); save(); emit(); },
    remove(id) { items = items.filter((i) => i.id !== id); save(); emit(); },
    clear() { items = []; save(); emit(); },
    onChange(f) { subs.push(f); },
  };
})();

const cartBtn = $("#cartBtn"), badge = $("#cartCount");

function bumpCart() {
  cartBtn.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.28) rotate(-8deg)" }, { transform: "scale(.94)" }, { transform: "scale(1)" }],
    { duration: 650, easing: E_OUT });
  const pulse = $("#cartPulse"); pulse.classList.remove("go"); void pulse.offsetWidth; pulse.classList.add("go");
}

/* voo do produto até o ícone do carrinho */
function flyToCart(srcRect, g, done) {
  const finish = () => { done(); bumpCart(); };
  if (REDUCED) return finish();
  const cartR = cartBtn.getBoundingClientRect();
  const w = 96, h = 120;
  const sx = srcRect.left + srcRect.width / 2, sy = srcRect.top + srcRect.height / 2;
  const dx = cartR.left + cartR.width / 2 - sx, dy = cartR.top + cartR.height / 2 - sy;
  const el = document.createElement("div");
  el.className = "fly"; el.innerHTML = media({ ...g, z: g.z ? Math.min(g.z, 1.4) : undefined });
  Object.assign(el.style, { left: sx - w / 2 + "px", top: sy - h / 2 + "px", width: w + "px", height: h + "px" });
  document.body.appendChild(el);
  const cx = dx * 0.1, cy = dy * 0.15 - 150, N = 28, LIFT = .16;
  const frames = [
    { transform: "translate(0px,0px) scale(1) rotate(0deg)", opacity: 1, offset: 0 },
    { transform: "translate(0px,-14px) scale(1.08) rotate(-2deg)", opacity: 1, offset: LIFT },
  ];
  for (let i = 1; i <= N; i++) {
    const t = i / N, e = t * t * (3 - 2 * t);
    const x = 2 * (1 - e) * e * cx + e * e * dx;
    const y = 2 * (1 - e) * e * cy + e * e * dy - 14 * (1 - e);
    const s = 1.08 + (0.1 - 1.08) * e;
    frames.push({ transform: `translate(${x}px,${y}px) scale(${s}) rotate(${10 * e}deg)`, opacity: e > .88 ? 1 - (e - .88) / .12 * .7 : 1, offset: LIFT + (1 - LIFT) * t });
  }
  el.animate(frames, { duration: 1150, easing: "linear", fill: "forwards" }).onfinish = () => { el.remove(); finish(); };
}

/* ---------- Carrinho lateral ---------- */
const Drawer = (() => {
  const root = $("#drawer"), list = $("#cartList");
  let opener = null, tmr;

  function lineHTML(it, i) {
    const p = byId(it.id);
    return `<li class="ci" data-id="${p.id}" style="--i:${i}">
      <button class="ci__img" data-open="${p.id}" aria-label="Ver ${esc(p.name)}">${media(p.gallery[0])}</button>
      <div class="ci__info">
        <h3>${esc(p.name.toUpperCase())}</h3>
        <p>${esc(p.type)}</p>
        <p class="ci__unit">${fmt(p.value)} <small>cada</small></p>
        <div class="qty qty--sm" role="group" aria-label="Quantidade de ${esc(p.name)}">
          <button data-act="dec" ${it.qty <= 1 ? "disabled" : ""} aria-label="Diminuir quantidade">${ICONS.minus}</button>
          <output>${it.qty}</output>
          <button data-act="inc" aria-label="Aumentar quantidade">${ICONS.plus}</button>
        </div>
      </div>
      <div class="ci__side">
        <button class="ci__rm" data-act="rm" aria-label="Remover ${esc(p.name)}">${ICONS.close}</button>
        <span class="ci__sub">${fmt(p.value * it.qty)}</span>
      </div>
    </li>`;
  }
  function render() {
    const its = Cart.items(), n = Cart.count();
    badge.textContent = n; badge.classList.toggle("on", n > 0);
    $("#cartHeadCount").textContent = n ? `${n} ${n === 1 ? "item" : "itens"}` : "";
    root.classList.toggle("is-empty", !its.length);
    list.innerHTML = its.map(lineHTML).join("");
    $("#cartSub").textContent = $("#cartTotal").textContent = fmt(Cart.total());
  }
  Cart.onChange(render); render();

  list.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    const row = b.closest(".ci"), id = row.dataset.id, it = Cart.items().find((i) => i.id === id);
    if (b.dataset.act === "inc") Cart.set(id, it.qty + 1);
    if (b.dataset.act === "dec") Cart.set(id, it.qty - 1);
    if (b.dataset.act === "rm") {
      if (REDUCED) return Cart.remove(id);
      row.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateX(48px)" }], { duration: 380, easing: E_OUT, fill: "forwards" }).onfinish = () => Cart.remove(id);
    }
  });

  function open() {
    if (root.classList.contains("open")) return;
    opener = document.activeElement;
    root.classList.add("open", "opening"); root.setAttribute("aria-hidden", "false");
    cartBtn.setAttribute("aria-expanded", "true");
    Layers.open("cart", $(".drawer__panel", root), close);
    clearTimeout(tmr); tmr = setTimeout(() => root.classList.remove("opening"), 1800);
    setTimeout(() => $("#drawerClose").focus({ preventScroll: true }), 120);
  }
  function close() {
    if (!root.classList.contains("open")) return;
    root.classList.remove("open"); root.setAttribute("aria-hidden", "true");
    cartBtn.setAttribute("aria-expanded", "false");
    Layers.remove("cart");
    if (opener && opener.focus) opener.focus({ preventScroll: true });
  }
  cartBtn.addEventListener("click", open);
  $("#drawerClose").addEventListener("click", close);
  $("#drawerVeil").addEventListener("click", close);
  $("#drawerShop").addEventListener("click", () => { close(); PV.hideIfOpen(); setTimeout(() => $("#produtos").scrollIntoView({ behavior: "smooth" }), 300); });
  $("#cartCheckout").addEventListener("click", (e) => Checkout.open(e.currentTarget));
  return { open, close };
})();

/* =========================================================
   CHECKOUT → WHATSAPP
   ========================================================= */
const Checkout = (() => {
  const root = $("#co"), form = $("#coForm"), nameEl = $("#coName"), errEl = $("#coErr");
  let opener = null, lastUrl = "";

  function render() {
    const its = Cart.items();
    $("#coVisual").innerHTML = `<div class="co__stack n${Math.min(its.length, 3)}">${its.slice(0, 3).map((it, i) => `<figure class="co__card" style="--k:${i}">${media(byId(it.id).gallery[0])}</figure>`).join("")}</div>`;
    $("#coSum").innerHTML = `
      <div class="co__row co__row--head"><span>Produto</span><span>Quantidade</span><span>Valor unitário</span><span>Total</span></div>
      ${its.map((it) => { const p = byId(it.id); return `<div class="co__row">
        <span class="co__prod"><b>${esc(p.name.toUpperCase())}</b><small>${esc(p.type)}</small></span>
        <span data-l="Quantidade">${it.qty}</span>
        <span data-l="Valor unitário">${fmt(p.value)}</span>
        <span data-l="Total">${fmt(p.value * it.qty)}</span></div>`; }).join("")}`;
    $("#coTotal").textContent = fmt(Cart.total());
  }
  Cart.onChange(() => { if (root.classList.contains("open") && !root.classList.contains("is-done")) { if (!Cart.items().length) close(); else render(); } });

  function message(name) {
    const its = Cart.items().map((i) => ({ p: byId(i.id), q: i.qty }));
    const total = fmt(Cart.total()), line = "─".repeat(31);
    const head = "PRODUTO".padEnd(15) + " " + "QTD".padStart(3) + " " + "TOTAL".padStart(11);
    const rows = its.map(({ p, q }) =>
      `${p.name.toUpperCase().slice(0, 15).padEnd(15)} ${(q + "x").padStart(3)} ${fmt(p.value * q).padStart(11)}\n ${p.type.slice(0, 29)}\n ${fmt(p.value)} cada`).join("\n\n");
    const table = "```" + [head, line, rows, line, "TOTAL".padEnd(19) + total.padStart(12)].join("\n") + "```";
    return ["✨ *NOVO PEDIDO · SAMMÈ COSMETICS*", "",
      "Olá! Gostaria de verificar a disponibilidade deste pedido:", "",
      `👤 *Cliente:* ${name}`, "", table, "", `💰 *Total do pedido: ${total}*`, "",
      its.length > 1 ? "Gostaria de confirmar se os produtos estão disponíveis e como posso finalizar a compra." : "Gostaria de confirmar se o produto está disponível e como posso finalizar a compra."].join("\n");
  }
  function waURL(name) {
    const num = String(WHATSAPP_NUMBER).replace(/\D/g, "");
    if (!num) console.warn("[Sammè] Defina WHATSAPP_NUMBER em assets/js/script.js para enviar os pedidos ao número da loja.");
    return `https://wa.me/${num}?text=${encodeURIComponent(message(name))}`;
  }

  function open(fromEl) {
    if (!Cart.items().length) return;
    opener = document.activeElement;
    const r = (fromEl || cartBtn).getBoundingClientRect();
    root.style.setProperty("--cx", r.left + r.width / 2 + "px"); root.style.setProperty("--cy", r.top + r.height / 2 + "px");
    root.classList.remove("is-done"); errEl.textContent = ""; $(".field", root).classList.remove("err");
    render();
    root.classList.add("open"); root.setAttribute("aria-hidden", "false");
    Layers.open("checkout", root, close);
    setTimeout(() => nameEl.focus({ preventScroll: true }), 900);
  }
  function close() {
    if (!root.classList.contains("open")) return;
    root.classList.remove("open"); root.setAttribute("aria-hidden", "true");
    Layers.remove("checkout");
    if (opener && opener.focus) opener.focus({ preventScroll: true });
  }
  function closeAll() { close(); Drawer.close(); PV.hideIfOpen(); }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameEl.value.replace(/\s+/g, " ").trim();
    if (name.length < 2) {
      errEl.textContent = "Digite seu nome para enviar o pedido.";
      $(".field", root).classList.add("err");
      $(".field", root).animate([{ translate: "0" }, { translate: "-8px" }, { translate: "8px" }, { translate: "-5px" }, { translate: "0" }], { duration: 450, easing: E_OUT });
      nameEl.focus(); return;
    }
    lastUrl = waURL(name);
    const w = window.open(lastUrl, "_blank", "noopener");
    if (!w) location.href = lastUrl; // pop-up bloqueado: abre na mesma aba
    $("#coRetry").href = lastUrl;
    root.classList.add("is-done");
    live("WhatsApp aberto com a mensagem do pedido.");
  });
  nameEl.addEventListener("input", () => { errEl.textContent = ""; $(".field", root).classList.remove("err"); });
  $("#coBack").addEventListener("click", close);
  $("#coClose").addEventListener("click", close);
  $("#coShop").addEventListener("click", () => { closeAll(); });
  $("#coClear").addEventListener("click", () => { Cart.clear(); closeAll(); });
  return { open, close };
})();

/* =========================================================
   TELA DE PRODUTO (com transição cinematográfica)
   ========================================================= */
const PV = (() => {
  const el = $("#pv"), frame = $("#pvFrame"), zoomEl = $("#pvZoom"), stage = $("#pvStage"), gloss = $("#pvGloss");
  const ring = $("#pvRing"), shadow = $("#pvShadow"), glow = $("#pvGlow");
  let cur = null, gi = 0, qty = 1, source = null, opener = null, isOpen = false, pushed = false, busy = false;

  const visibleRect = (r) => {
    const l = Math.max(0, r.left), t = Math.max(0, r.top), rr = Math.min(innerWidth, r.right), b = Math.min(innerHeight, r.bottom);
    return { left: l, top: t, width: Math.max(1, rr - l), height: Math.max(1, b - t) };
  };
  function makeClone(g, rect, radius, scaleFrom) {
    const c = document.createElement("div");
    c.className = "fx-clone";
    c.innerHTML = `<img src="${g.img}" alt="" style="object-position:${g.pos || "50% 50%"};transform-origin:${g.o || "50% 50%"};transform:scale(${scaleFrom})">`;
    Object.assign(c.style, { left: rect.left + "px", top: rect.top + "px", width: rect.width + "px", height: rect.height + "px", borderRadius: radius });
    document.body.appendChild(c);
    return c;
  }
  const FRAME_RADIUS = () => getComputedStyle(frame).borderRadius || "0px";

  function renderThumbs() {
    $("#pvThumbs").innerHTML = cur.gallery.length > 1 ? cur.gallery.map((g, i) => `<button type="button" class="${i === gi ? "on" : ""}" data-i="${i}" aria-label="Imagem ${i + 1} de ${cur.gallery.length}">${media(g)}</button>`).join("") : "";
  }
  function fill(p) {
    $("#pvCat").textContent = p.cat;
    $("#pvName").textContent = p.name;
    $("#pvSub").textContent = p.sub + (p.tag ? " · " + p.tag : "");
    $("#pvDesc").textContent = p.long;
    $("#pvBen").innerHTML = p.benefits.map(([ic, a, b]) => `<li>${ICONS[ic] || ""}<b>${esc(a)}</b><small>${esc(b)}</small></li>`).join("");
    $("#pvPrice").textContent = fmt(p.value);
    $("#pvQty").textContent = qty;
    zoomEl.innerHTML = media(p.gallery[0]);
    renderThumbs();
    el.setAttribute("aria-label", p.name);
    $("#pvAdd span").textContent = "Adicionar ao carrinho";
  }

  async function show(id, { from = null, fromPop = false } = {}) {
    const p = byId(id); if (!p || busy) return;
    if (isOpen) { // troca direta de produto (ex.: pesquisa dentro da tela de produto)
      cur = p; gi = 0; qty = 1; fill(p);
      try { history.replaceState({ pv: id }, "", `#produto/${id}`); } catch { /* ok */ }
      el.scrollTop = 0; return;
    }
    busy = true; cur = p; gi = 0; qty = 1; source = from; opener = (from && from.opener) || document.activeElement;
    fill(p); el.scrollTop = 0;
    if (!fromPop) { try { history.pushState({ pv: id }, "", `#produto/${id}`); pushed = true; } catch { pushed = false; } }
    document.body.classList.add("pv-open");
    el.classList.remove("shown");
    el.classList.add("open"); el.setAttribute("aria-hidden", "false");
    isOpen = true; Layers.open("pv", null, close);

    const rect0 = from ? (from.rect || from.el.getBoundingClientRect()) : null;
    if (!rect0 || REDUCED) { requestAnimationFrame(() => el.classList.add("shown")); busy = false; setTimeout(() => $("#pvBack").focus({ preventScroll: true }), 300); return; }

    frame.style.opacity = 0; shadow.style.opacity = 0;
    await nextFrame();
    const g = p.gallery[0], from_ = visibleRect(rect0), to = frame.getBoundingClientRect();
    const clone = makeClone(g, from_, from.r || "0px", 1);
    const dur = 1050;
    const a = clone.animate([
      { left: from_.left + "px", top: from_.top + "px", width: from_.width + "px", height: from_.height + "px", borderRadius: from.r || "0px" },
      { left: to.left + "px", top: to.top + "px", width: to.width + "px", height: to.height + "px", borderRadius: FRAME_RADIUS() },
    ], { duration: dur, easing: E_INOUT, fill: "forwards" });
    $("img", clone).animate([{ transform: "scale(1)" }, { transform: `scale(${g.z || 1})` }], { duration: dur, easing: E_INOUT, fill: "forwards" });
    setTimeout(() => el.classList.add("shown"), 520);
    try { await a.finished; } catch { /* cancelado */ }
    frame.style.opacity = ""; shadow.style.opacity = "";
    clone.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, fill: "forwards" }).onfinish = () => clone.remove();
    busy = false;
    $("#pvBack").focus({ preventScroll: true });
  }

  // fecha por ação do usuário (volta no histórico se foi aberto por ele)
  function close() {
    if (!isOpen || busy) return;
    if (pushed && history.state && history.state.pv) { pushed = false; history.back(); return; }
    hide();
  }
  async function hide({ instant = false } = {}) {
    if (!isOpen) return;
    isOpen = false; busy = true; pushed = false;
    Layers.remove("pv");
    el.classList.remove("shown");
    const src = source && source.el && source.el.isConnected && source.back !== false ? source.el.getBoundingClientRect() : null;
    const canFly = src && !instant && !REDUCED && src.width > 0 && src.bottom > 0 && src.top < innerHeight && src.right > 0 && src.left < innerWidth;
    if (canFly) {
      const g = cur.gallery[0], from_ = frame.getBoundingClientRect(), to = visibleRect(src);
      const clone = makeClone(g, from_, FRAME_RADIUS(), g.z || 1);
      frame.style.opacity = 0; shadow.style.opacity = 0;
      el.classList.remove("open");
      const a = clone.animate([
        { left: from_.left + "px", top: from_.top + "px", width: from_.width + "px", height: from_.height + "px", borderRadius: FRAME_RADIUS() },
        { left: to.left + "px", top: to.top + "px", width: to.width + "px", height: to.height + "px", borderRadius: source.r || "0px" },
      ], { duration: 900, easing: E_INOUT, fill: "forwards" });
      $("img", clone).animate([{ transform: `scale(${g.z || 1})` }, { transform: "scale(1)" }], { duration: 900, easing: E_INOUT, fill: "forwards" });
      try { await a.finished; } catch { /* ok */ }
      clone.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, fill: "forwards" }).onfinish = () => clone.remove();
    } else {
      el.classList.remove("open");
    }
    document.body.classList.remove("pv-open");
    el.setAttribute("aria-hidden", "true");
    if (/^#produto\//.test(location.hash)) { try { history.replaceState(null, "", location.pathname + location.search); } catch { /* ok */ } }
    setTimeout(() => { frame.style.opacity = ""; shadow.style.opacity = ""; busy = false; }, instant ? 0 : 450);
    if (opener && opener.focus && opener.isConnected) opener.focus({ preventScroll: true });
  }
  addEventListener("popstate", (e) => {
    if (isOpen) { pushed = false; hide(); }
    else if (e.state && e.state.pv && byId(e.state.pv)) show(e.state.pv, { fromPop: true });
  });

  /* galeria */
  $("#pvThumbs").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const i = +b.dataset.i; if (i === gi) return;
    gi = i; renderThumbs();
    const old = zoomEl.firstElementChild;
    const anim = old.animate([{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(8px)" }], { duration: 260, fill: "forwards" });
    anim.onfinish = () => {
      zoomEl.innerHTML = media(cur.gallery[gi]);
      zoomEl.firstElementChild.animate([{ opacity: 0, filter: "blur(10px)", scale: "1.06" }, { opacity: 1, filter: "blur(0px)", scale: "1" }], { duration: 700, easing: E_OUT });
    };
  });

  /* quantidade + ações */
  $("#pvDec").addEventListener("click", () => { qty = clamp(qty - 1, 1, 99); $("#pvQty").textContent = qty; });
  $("#pvInc").addEventListener("click", () => { qty = clamp(qty + 1, 1, 99); $("#pvQty").textContent = qty; });
  $("#pvAdd").addEventListener("click", () => {
    const btn = $("#pvAdd"), id = cur.id, n = qty, label = $("span", btn);
    flyToCart(frame.getBoundingClientRect(), cur.gallery[0], () => { Cart.add(id, n); live(`${cur.name} adicionado ao carrinho.`); });
    label.textContent = "Adicionado"; btn.classList.add("ok");
    setTimeout(() => { label.textContent = "Adicionar ao carrinho"; btn.classList.remove("ok"); }, 1700);
  });
  $("#pvBuy").addEventListener("click", (e) => { Cart.add(cur.id, qty); Checkout.open(e.currentTarget); });
  $("#pvBack").addEventListener("click", close);

  /* 3D: inclinação + zoom + paralaxe + luz */
  let tx = 0, ty = 0, cx = 0, cy = 0, zt = 0, zc = 0, raf = 0;
  function loop() {
    cx += (tx - cx) * .09; cy += (ty - cy) * .09; zc += (zt - zc) * .08;
    frame.style.transform = `rotateX(${-cy * 9}deg) rotateY(${cx * 11}deg)`;
    zoomEl.style.transform = `translate(${-cx * 22}px, ${-cy * 22}px) scale(${1 + zc * .14})`;
    gloss.style.setProperty("--gx", 50 + cx * 90 + "%"); gloss.style.setProperty("--gy", 50 + cy * 90 + "%");
    ring.style.transform = `translate(${cx * -36}px, ${cy * -28}px) rotate(${cx * 6}deg)`;
    shadow.style.transform = `translate(${cx * 30}px, 0) scaleX(${1 - Math.abs(cx) * .1})`;
    glow.style.transform = `translate(${cx * -80}px, ${cy * -60}px)`;
    if (Math.abs(tx - cx) > .001 || Math.abs(ty - cy) > .001 || Math.abs(zt - zc) > .001) raf = requestAnimationFrame(loop); else raf = 0;
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
  el.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch" || REDUCED) return;
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    const inside = Math.abs(x) < .5 && Math.abs(y) < .5;
    tx = clamp(x, -.8, .8) * (inside ? 1 : .4); ty = clamp(y, -.8, .8) * (inside ? 1 : .4); zt = inside ? 1 : 0; kick();
  });
  el.addEventListener("pointerleave", () => { tx = ty = zt = 0; kick(); });

  return { show, close, hideIfOpen: () => { if (isOpen) { if (pushed && history.state && history.state.pv) { pushed = false; history.back(); } else hide(); } }, isOpen: () => isOpen };
})();

// abrir produto por [data-open] (hero, carrinho…)
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-open]"); if (!t) return;
  const id = t.dataset.open; if (!byId(id)) return;
  e.preventDefault();
  if (t.closest(".drawer")) {
    Drawer.close();
    PV.show(id, { from: { rect: t.getBoundingClientRect(), r: "8px" } });
  } else if (t.closest(".band")) {
    PV.show(id, { from: { el: $(".band__arch"), r: "215px 215px 14px 14px" } });
  } else if (t.closest(".hero")) {
    PV.show(id, { from: { el: $("#heroSlides"), r: "0px" } });
  } else {
    PV.show(id, { from: { el: t, r: "999px" } });
  }
});
// deep link
AfterLoad.push(() => { const m = location.hash.match(/^#produto\/(.+)$/); if (m && byId(m[1])) PV.show(m[1], { fromPop: true }); });
// links do menu enquanto a tela de produto está aberta
$$(".nav a[href^='#'],.mobile-menu a[href^='#']").forEach((a) => a.addEventListener("click", (e) => {
  if (!PV.isOpen()) return;
  e.preventDefault(); const target = a.getAttribute("href");
  PV.hideIfOpen();
  setTimeout(() => { const t = $(target); if (t) t.scrollIntoView({ behavior: "smooth" }); }, 500);
}));

/* =========================================================
   PESQUISA EM TEMPO REAL
   ========================================================= */
const Search = (() => {
  const root = $("#sr"), input = $("#srInput"), list = $("#srList"), empty = $("#srEmpty"), hints = $("#srHints");
  let results = [], active = -1, prevIds = new Set(), opener = null;

  hints.insertAdjacentHTML("beforeend", ["Hyalu", "BB Cream", "Floral", "Kit"].map((h) => `<button type="button" data-q="${h}">${h}</button>`).join(""));

  function highlight(text, tokens) {
    const n = norm(text), ranges = [];
    tokens.forEach((t) => { const i = n.indexOf(t); if (i > -1) ranges.push([i, i + t.length]); });
    ranges.sort((a, b) => a[0] - b[0]);
    let out = "", pos = 0;
    for (const [s, e] of ranges) { if (s < pos) continue; out += esc(text.slice(pos, s)) + "<mark>" + esc(text.slice(s, e)) + "</mark>"; pos = e; }
    return out + esc(text.slice(pos));
  }
  function find(q) {
    const tokens = norm(q).split(/\s+/).filter(Boolean);
    if (!tokens.length) return { tokens, found: [] };
    const found = PRODUCTS.map((p, order) => {
      const nameN = norm(p.name), hay = norm([p.name, p.cat, p.type, p.sub].join(" "));
      if (!tokens.every((t) => hay.includes(t))) return null;
      const score = nameN.startsWith(tokens[0]) ? 0 : nameN.includes(tokens[0]) ? 1 : 2;
      return { p, score, order };
    }).filter(Boolean).sort((a, b) => a.score - b.score || a.order - b.order).map((x) => x.p);
    return { tokens, found };
  }
  function run() {
    const q = input.value.trim(), { tokens, found } = find(q);
    results = found; active = found.length ? 0 : -1;
    let k = 0;
    list.innerHTML = found.map((p, i) => {
      const isNew = !prevIds.has(p.id);
      return `<li role="option" id="sr-${i}" data-i="${i}" class="sr__item ${isNew ? "enter" : ""} ${i === active ? "is-on" : ""}" style="--i:${isNew ? k++ : 0}" aria-selected="${i === active}">
        <span class="sr__thumb">${media(p.gallery[0])}</span>
        <span class="sr__txt"><b>${highlight(p.name.toUpperCase(), tokens)}</b><small>${esc(p.type)} · ${esc(p.cat)}</small></span>
        <span class="sr__price">${fmt(p.value)}</span>${ICONS.arrow}</li>`;
    }).join("");
    prevIds = new Set(found.map((p) => p.id));
    empty.hidden = !(q && !found.length);
    if (q && !found.length) empty.textContent = `Nenhum produto encontrado para “${q}”. Tente outro nome.`;
    hints.hidden = !!found.length;
    input.setAttribute("aria-activedescendant", active > -1 ? "sr-" + active : "");
    if (q) live(found.length ? `${found.length} ${found.length === 1 ? "produto encontrado" : "produtos encontrados"}.` : "Nenhum produto encontrado.");
  }
  function setActive(i) {
    if (!results.length) return;
    active = (i + results.length) % results.length;
    $$(".sr__item", list).forEach((li, k) => { li.classList.toggle("is-on", k === active); li.setAttribute("aria-selected", k === active); });
    input.setAttribute("aria-activedescendant", "sr-" + active);
    $$(".sr__item", list)[active].scrollIntoView({ block: "nearest" });
  }
  function select(i) {
    const p = results[i]; if (!p) return;
    const li = $$(".sr__item", list)[i], rect = $(".sr__thumb", li).getBoundingClientRect();
    close({ restoreFocus: false });
    PV.show(p.id, { from: { rect, r: "10px", opener: $("#searchBtn") } });
  }
  function open() {
    if (root.classList.contains("open")) return;
    opener = document.activeElement;
    if (document.body.classList.contains("pv-open")) { /* pesquisa funciona também dentro do produto */ }
    root.classList.add("open"); root.setAttribute("aria-hidden", "false");
    $("#searchBtn").setAttribute("aria-expanded", "true");
    Layers.open("search", $(".sr__card", root), close);
    input.value = ""; prevIds = new Set(); run();
    setTimeout(() => input.focus({ preventScroll: true }), 80);
  }
  function close({ restoreFocus = true } = {}) {
    if (!root.classList.contains("open")) return;
    root.classList.remove("open"); root.setAttribute("aria-hidden", "true");
    $("#searchBtn").setAttribute("aria-expanded", "false");
    Layers.remove("search");
    if (restoreFocus && opener && opener.focus) opener.focus({ preventScroll: true });
  }
  input.addEventListener("input", run);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter") { e.preventDefault(); if (active > -1) select(active); }
  });
  list.addEventListener("click", (e) => { const li = e.target.closest(".sr__item"); if (li) select(+li.dataset.i); });
  list.addEventListener("pointermove", (e) => { const li = e.target.closest(".sr__item"); if (li && +li.dataset.i !== active) setActive(+li.dataset.i); });
  hints.addEventListener("click", (e) => { const b = e.target.closest("[data-q]"); if (!b) return; input.value = b.dataset.q; run(); input.focus(); });
  $("#srVeil").addEventListener("click", () => close());
  $("#srClose").addEventListener("click", () => close());
  $("#searchBtn").addEventListener("click", open);
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !e.target.matches("input,textarea") && !Layers.top()) { e.preventDefault(); open(); }
  });
  return { open, close };
})();

/* ---------- PRODUCT CAROUSEL (drag + inertia + snap) ---------- */
(function productCarousel() {
  const track = $("#track"), dotsEl = $("#pDots");
  track.innerHTML = PRODUCTS.map(p => `
    <article class="card" data-id="${p.id}" tabindex="0" aria-label="${esc(p.name)} — ver detalhes">
      <div class="card__img"><img src="${p.img}" alt="${esc(p.name)}" style="object-position:${p.pos}" draggable="false" loading="lazy"/></div>
      <div class="card__body">
        <span class="card__cat">${p.cat}</span>
        <h3>${p.name.toUpperCase()}</h3>
        <p class="card__sub">${p.sub}</p>
        <p class="card__desc">${p.desc}</p>
        <div class="card__foot"><span class="card__price">${p.price}</span><button class="add" aria-label="Adicionar ${esc(p.name)} ao carrinho"><span>Adicionar</span>${ICONS.arrow}</button></div>
      </div>
    </article>`).join("");
  $("#pCount").textContent = PRODUCTS.length;

  const cards = [...track.children];
  const step = () => cards[0].offsetWidth + parseFloat(getComputedStyle(track).gap);
  const pages = () => Math.max(1, Math.ceil((track.scrollWidth - track.clientWidth) / step()) + 1);
  function buildDots() {
    const n = Math.min(pages(), 6);
    dotsEl.innerHTML = Array.from({ length: n }, (_, i) => `<button aria-label="Página ${i + 1}"></button>`).join("");
    [...dotsEl.children].forEach((d, i) => d.onclick = () => track.scrollTo({ left: i * step(), behavior: "smooth" }));
    sync();
  }
  function sync() {
    const max = track.scrollWidth - track.clientWidth;
    const n = dotsEl.children.length;
    const i = max <= 0 ? 0 : Math.round((track.scrollLeft / max) * (n - 1));
    [...dotsEl.children].forEach((d, k) => d.classList.toggle("on", k === i));
    // subtle parallax inside cards
    cards.forEach(c => {
      const r = c.getBoundingClientRect(), off = (r.left + r.width / 2 - innerWidth / 2) / innerWidth;
      c.querySelector("img").style.translate = `${off * -24}px 0`;
    });
  }
  track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
  addEventListener("resize", buildDots);
  buildDots();

  $("#pNext").onclick = () => track.scrollBy({ left: step(), behavior: "smooth" });
  $("#pPrev").onclick = () => track.scrollBy({ left: -step(), behavior: "smooth" });

  // mouse drag w/ inertia (touch uses native momentum + snap)
  let down = false, sx = 0, sl = 0, v = 0, lx = 0, raf, moved = false;
  track.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse") return;
    down = true; moved = false; sx = lx = e.clientX; sl = track.scrollLeft; v = 0; cancelAnimationFrame(raf);
  });
  addEventListener("pointermove", e => {
    if (!down) return;
    if (Math.abs(e.clientX - sx) > 4 && !moved) { moved = true; track.classList.add("dragging"); }
    v = e.clientX - lx; lx = e.clientX;
    track.scrollLeft = sl - (e.clientX - sx);
  });
  addEventListener("pointerup", () => {
    if (!down) return; down = false;
    const glide = () => {
      v *= .94; track.scrollLeft -= v;
      if (Math.abs(v) > .5) raf = requestAnimationFrame(glide);
      else { track.classList.remove("dragging"); const i = Math.round(track.scrollLeft / step()); track.scrollTo({ left: i * step(), behavior: "smooth" }); }
    };
    if (moved) glide(); else track.classList.remove("dragging");
  });

  // 3D tilt + brilho nos cards (somente mouse)
  cards.forEach((c) => {
    c.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse" || down || REDUCED) return;
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.setProperty("--ry", (x - .5) * 9 + "deg"); c.style.setProperty("--rx", (.5 - y) * 7 + "deg");
      c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
    });
    c.addEventListener("pointerleave", () => { c.style.setProperty("--ry", "0deg"); c.style.setProperty("--rx", "0deg"); });
  });

  // adicionar ao carrinho (voa até o ícone) + abrir detalhes ao clicar no card
  track.addEventListener("click", e => {
    if (moved) return;
    const card = e.target.closest(".card"); if (!card) return;
    const p = byId(card.dataset.id), b = e.target.closest(".add");
    if (b) {
      if (b.classList.contains("busy")) return;
      b.classList.add("busy");
      const lab = $("span", b), old = lab.textContent;
      lab.textContent = "Adicionado";
      flyToCart($(".card__img", card).getBoundingClientRect(), p.gallery[0], () => { Cart.add(p.id, 1); live(`${p.name} adicionado ao carrinho.`); });
      setTimeout(() => { lab.textContent = old; b.classList.remove("busy"); }, 1700);
      return;
    }
    PV.show(p.id, { from: { el: $(".card__img", card), r: "10px" } });
  });
  track.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || e.target.closest(".add")) return;
    const card = e.target.closest(".card"); if (card) PV.show(card.dataset.id, { from: { el: $(".card__img", card), r: "10px" } });
  });
})();

/* ---------- SCROLL: reveals, parallax, nav ---------- */
(function scrollFx() {
  document.querySelectorAll(".reveal-lines span").forEach(s => { s.innerHTML = `<i>${s.innerHTML}</i>`; });
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: .15, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal,.reveal-lines").forEach(el => io.observe(el));
  // elementos recortados por clip-path não são detectados pelo IntersectionObserver (Chrome desktop): observa o contêiner
  const maskIO = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.querySelectorAll(".mask-reveal").forEach(m => m.classList.add("in")); maskIO.unobserve(en.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".mask-reveal").forEach(m => maskIO.observe(m.parentElement));
  // stagger siblings
  document.querySelectorAll(".pillars .reveal").forEach((el, i) => el.style.transitionDelay = i * .15 + "s");
  document.querySelectorAll(".products__head .reveal").forEach((el, i) => el.style.transitionDelay = i * .12 + "s");
  document.querySelectorAll(".ig__grid .reveal").forEach((el, i) => el.style.transitionDelay = i * .1 + "s");
  document.querySelectorAll(".finale__copy .reveal").forEach((el, i) => el.style.transitionDelay = (i * .14) + "s");

  const cardIO = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) {
      [...document.querySelectorAll(".card")].forEach((c, i) => {
        setTimeout(() => c.classList.add("in"), i * 140);
        setTimeout(() => c.classList.add("ready"), i * 140 + 1400);
      });
      cardIO.disconnect();
    }
  }), { threshold: .2 });
  cardIO.observe($("#track"));

  const nav = $("#nav");
  const pImgs = [...document.querySelectorAll("[data-parallax-img]")];
  const pBgs = [...document.querySelectorAll("[data-parallax]")];
  const heroSlides = $("#heroSlides"), heroContent = $("#heroContent");
  function onScroll() {
    const y = scrollY;
    nav.classList.toggle("scrolled", y > 60);
    nav.style.setProperty("--sp", clamp(y / Math.max(1, document.documentElement.scrollHeight - innerHeight), 0, 1));
    if (y < innerHeight) {
      heroContent.style.transform = innerWidth > 820 ? `translateY(calc(-50% + ${y * .3}px))` : `translateY(${y * .3}px)`;
      heroContent.style.opacity = 1 - y / (innerHeight * .8);
      heroSlides.style.scale = 1 + y / innerHeight * .08;
    }
    pImgs.forEach(img => {
      const r = img.parentElement.getBoundingClientRect();
      const k = parseFloat(img.dataset.parallaxImg);
      img.style.transform = `translateY(${(r.top + r.height / 2 - innerHeight / 2) * -k}px)`;
    });
    pBgs.forEach(el => { const r = el.parentElement.getBoundingClientRect(); el.style.transform = `translateY(${r.top * -parseFloat(el.dataset.parallax)}px)`; });
    // active link
    ["inicio", "produtos", "sobre", "contato"].forEach(id => {
      const s = document.getElementById(id), r = s.getBoundingClientRect();
      const a = document.querySelector(`.nav__links a[href="#${id}"]`);
      if (r.top < innerHeight * .4 && r.bottom > innerHeight * .4) {
        document.querySelectorAll(".nav__links a").forEach(l => l.classList.remove("is-active")); a.classList.add("is-active");
      }
    });
    // o finale (que antecede o rodapé) mantém "Contato" ativo
    const fin = $("#finale").getBoundingClientRect();
    if (fin.top < innerHeight * .4 && fin.bottom > innerHeight * .4) {
      document.querySelectorAll(".nav__links a").forEach(l => l.classList.remove("is-active")); $('.nav__links a[href="#contato"]').classList.add("is-active");
    }
  }
  addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
  onScroll();

  // mobile menu
  const burger = $("#burger"), menu = $("#mobileMenu");
  burger.onclick = () => { burger.classList.toggle("open"); menu.classList.toggle("open"); };
  menu.querySelectorAll("a").forEach(a => a.onclick = () => { burger.classList.remove("open"); menu.classList.remove("open"); });

  // botões magnéticos (mouse)
  document.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse" || REDUCED) return;
    const b = e.target.closest && e.target.closest(".btn:not([disabled])"); if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.translate = `${((e.clientX - r.left) / r.width - .5) * 10}px ${((e.clientY - r.top) / r.height - .5) * 8}px`;
  });
  document.addEventListener("pointerout", (e) => { const b = e.target.closest && e.target.closest(".btn"); if (b) b.style.translate = ""; });
})();

/* ---------- FINALE: câmera lenta, luz, água e partículas ---------- */
(function finale() {
  const sec = $("#finale"), world = $("#finaleWorld"), rays = $("#finaleRays");
  Particles($("#finaleParticles"), { density: 15000 });
  // posiciona as ondas na base do frasco, acompanhando o recorte (object-fit: cover)
  function place() {
    const w = sec.clientWidth, h = sec.clientHeight, iw = 1264, ih = 848;
    const s = Math.max(w / iw, h / ih), dw = iw * s, dh = ih * s;
    const ox = (w - dw) * .62, oy = (h - dh) * .5;
    sec.style.setProperty("--bx", ox + .672 * dw + "px"); sec.style.setProperty("--by", oy + .873 * dh + "px");
  }
  place(); addEventListener("resize", place);
  let mx = 0, my = 0, tx = 0, ty = 0, vis = false, raf = 0;
  function frame() {
    raf = 0; if (!vis) return;
    tx += (mx - tx) * .06; ty += (my - ty) * .06;
    const r = sec.getBoundingClientRect(), t = clamp(1 - r.top / innerHeight, 0, 1);
    world.style.transform = `translate3d(${tx * -18}px, ${(1 - t) * -36 + ty * -10}px, 0) scale(${1.16 - t * .14})`;
    rays.style.transform = `translate3d(${tx * 26}px, ${ty * 14}px, 0) rotate(${tx * 1.6}deg)`;
    raf = requestAnimationFrame(frame);
  }
  new IntersectionObserver(([en]) => { vis = en.isIntersecting; if (vis && !raf) frame(); }, { threshold: 0 }).observe(sec);
  if (!REDUCED) {
    sec.addEventListener("pointermove", (e) => { if (e.pointerType !== "mouse") return; const r = sec.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; });
    sec.addEventListener("pointerleave", () => { mx = my = 0; });
  }
})();
