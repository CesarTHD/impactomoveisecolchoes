"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  MapPin,
  MessageCircle,
  Plus,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

// Página Black November da Impacto Móveis (rota /black).
// Contagem regressiva até 30/11/2026 às 23:59:59.
const FIM = new Date(2026, 10, 30, 23, 59, 59).getTime();

const pad = (n: number) => (n < 10 ? "0" + n : "" + n);

function calcular(agora: number) {
  let resto = Math.max(0, Math.floor((FIM - agora) / 1000));
  const d = Math.floor(resto / 86400);
  resto -= d * 86400;
  const h = Math.floor(resto / 3600);
  resto -= h * 3600;
  const m = Math.floor(resto / 60);
  resto -= m * 60;
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(resto) };
}

const WA = "https://wa.me/5561993529881?text=";
const WA_GERAL = WA + "Ol%C3%A1%21%20Vi%20as%20ofertas%20da%20Black%20November%20da%20Impacto%20M%C3%B3veis%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
const WA_OFERTAS = WA + "Ol%C3%A1%21%20Vi%20as%20ofertas%20da%20Black%20November%20da%20Impacto%20M%C3%B3veis%20e%20gostaria%20de%20ver%20os%20m%C3%B3veis%20em%20oferta.";
const WA_PAGAMENTO = WA + "Ol%C3%A1%21%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento%20%28at%C3%A9%2036x%20no%20boleto%29%20da%20Black%20November.";
const WA_VISITA = WA + "Ol%C3%A1%21%20Quero%20visitar%20a%20loja%20da%20Impacto%20M%C3%B3veis.%20Qual%20o%20hor%C3%A1rio%20de%20funcionamento%3F";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Impacto%20M%C3%B3veis%20e%20Colch%C3%B5es%20QNE%207%20Lote%2016%20Loja%201%20Taguatinga%20Norte%20Bras%C3%ADlia%20DF";

const TOPBAR = "Black November: até 50% off · parcele em até 36x no boleto · consulte condições · até 30/11";

const BENEFICIOS = [
  { Icon: Truck, t: "Frete: DF e regiões próximas", s: "Entre em contato para mais informações" },
  { Icon: CreditCard, t: "Parcele em até 36x", s: "No boleto, consulte condições" },
  { Icon: ShieldCheck, t: "1 ano de garantia", s: "Exclusivo na loja" },
  { Icon: Wrench, t: "Entrega e montagem grátis", s: "Em compras a partir de R$ 4.000" },
];

const CATEGORIAS = [
  { img: "/black/poltrona.jpg", alt: "Poltrona cinza com puff estofado e mesas laterais, Impacto Móveis", t: "Poltronas" },
  { img: "/black/sofa-categoria.jpg", alt: "Sofá retrátil e reclinável em tecido marrom, Impacto Móveis", t: "Sofás" },
  { img: "/black/mesa-anita.jpg", alt: "Mesa de jantar em madeira com cadeiras estofadas, Impacto Móveis", t: "Mesas e cadeiras" },
];

type Produto = {
  img: string;
  w: number;
  h: number;
  alt: string;
  badge?: string;
  t: string;
  desc?: string;
  de?: string;
  prefixo: string;
  preco: string;
  sufixo?: string;
  destaque?: boolean;
  cond: string;
  nota?: string;
  href: string;
};

const PRODUTOS: Produto[] = [
  {
    img: "/black/mesa-cadeiras.jpg", w: 1080, h: 1350,
    alt: "Mesa com tampo de vidro branco e quatro cadeiras estofadas cinza, Impacto Móveis",
    badge: "Até 50% off",
    t: "Mesa com cadeiras",
    desc: "Mesa com tampo de vidro branco e cadeiras estofadas em tecido cinza. Exclusivo na loja, com 1 ano de garantia.",
    prefixo: "A partir de", preco: "R$ 1.599",
    cond: "Parcele em até 36x no boleto",
    nota: "Consulte condições",
    href: WA + "Ol%C3%A1%21%20Tenho%20interesse%20na%20mesa%20com%20cadeiras%20da%20Black%20November%20%28a%20partir%20de%20R%24%201.599%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento.",
  },
  {
    img: "/black/sofa-retratil.jpg", w: 1080, h: 1350,
    alt: "Sofá retrátil e reclinável de três lugares em suede marrom, Impacto Móveis",
    badge: "36x sem entrada",
    t: "Sofá retrátil e reclinável",
    desc: "Sofá de três lugares em tecido marrom, com assento retrátil e encosto reclinável. Entrega e montagem grátis no DF e entorno.",
    prefixo: "A partir de", preco: "R$ 1.299,00",
    cond: "Parcele em até 36x no boleto, sem entrada",
    nota: "Sujeito a análise de crédito · Consulte condições",
    href: WA + "Ol%C3%A1%21%20Tenho%20interesse%20no%20sof%C3%A1%20retr%C3%A1til%20e%20reclin%C3%A1vel%20da%20Black%20November%20%28a%20partir%20de%20R%24%201.299%2C00%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento.",
  },
  {
    img: "/black/sofa-210.jpg", w: 1080, h: 1350,
    alt: "Sofá de 2,10 m em tecido cinza com duas almofadas, Impacto Móveis",
    badge: "Sem entrada",
    t: "Sofá 2,10 m",
    desc: "Sofá de 2,10 m em tecido, nas cores bege e cinza. Entrega e montagem grátis no DF e entorno.",
    prefixo: "A partir de", preco: "R$ 2.990", sufixo: "no pix",
    cond: "Até 36x no boleto ou 10x no cartão, sem entrada",
    nota: "Sujeito a análise de crédito · Consulte condições",
    href: WA + "Ol%C3%A1%21%20Tenho%20interesse%20no%20sof%C3%A1%20de%202%2C10%20m%20da%20Black%20November%20%28a%20partir%20de%20R%24%202.990%20no%20pix%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento.",
  },
  {
    img: "/black/mesa-8-cadeiras.jpg", w: 1148, h: 1435,
    alt: "Mesa de jantar em madeira com 8 cadeiras estofadas com braços em madeira, Impacto Móveis",
    t: "Mesa de jantar com 8 cadeiras",
    de: "De R$ 19.990",
    prefixo: "Por apenas", preco: "R$ 12.990", destaque: true,
    cond: "Parcele em até 36x no boleto, sem entrada",
    href: WA + "Ol%C3%A1%21%20Tenho%20interesse%20na%20mesa%20de%20jantar%20com%208%20cadeiras%20da%20Black%20November%20%28R%24%2012.990%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento.",
  },
];

const PASSOS = [
  { t: "Escolha a oferta", s: "Veja os produtos em destaque e compare preços e condições." },
  { t: "Finalize o pedido", s: "Informe o endereço, escolha o frete e a forma de pagamento." },
  { t: "Receba em casa", s: "Acompanhe a entrega pelo código de rastreio enviado por [CANAL]." },
];

const PUBLICO = [
  "Quem está de mudança ou montando a casa nova e precisa de sofá, mesa e cadeiras.",
  "Quem quer trocar os móveis da sala de estar ou da sala de jantar por peças de qualidade.",
  "Quem quer parcelar em até 36x no boleto, com modelos sem entrada.",
  "Quem mora em Taguatinga e região e prefere ver tudo de perto antes de comprar.",
];

const FAQ = [
  { q: "Quais móveis fazem parte da promoção da Black November?", a: "O desconto de até 50% off vale para os móveis selecionados. Consulte condições na loja para ver quais modelos participam." },
  { q: "Como funciona o parcelamento em 36x no boleto?", a: "Você pode parcelar em até 36x no boleto. Consulte condições para saber a parcela do móvel escolhido. Sujeito a análise de crédito." },
  { q: "Qual o preço da mesa com cadeiras?", a: "A mesa com cadeiras da Black November sai a partir de R$ 1.599. O valor varia conforme o modelo." },
  { q: "Como funciona o frete?", a: "O frete é para o DF e regiões próximas. Entre em contato para mais informações sobre a condição para o seu endereço." },
  { q: "Tem entrega e montagem grátis?", a: "Sim, em compras a partir de R$ 4.000 a entrega e a montagem são grátis." },
  { q: "Até quando valem as ofertas da Black November?", a: "Por tempo limitado, até 30/11 ou enquanto durarem os estoques." },
];

const CSS = `
html{scroll-behavior:smooth}
.bn{--y:#FFC400;--y2:#ffd84d;--bg:#0b0b0b;--s1:#121212;--s2:#171717;--s3:#1f1f1f;--line:#262626;--line2:#333;--tx:#f4f4f4;--mut:#c8c8c8;--mut2:#a8a8a8;--r:20px;--rs:12px;--px:clamp(20px,5vw,64px);
background:var(--bg);color:var(--tx);font-family:Inter,system-ui,sans-serif;width:100%;box-sizing:border-box;overflow-x:clip;-webkit-font-smoothing:antialiased}
.bn *,.bn *::before,.bn *::after{box-sizing:border-box}
.bn a{color:inherit;text-decoration:none}
.bn h1,.bn h2,.bn h3{margin:0;color:var(--tx);letter-spacing:-0.02em}
.bn h2{font-family:Archivo,sans-serif;font-weight:800;font-size:clamp(28px,5.2vw,44px);line-height:1.08}
.bn p{margin:0;color:inherit}
.bn img{display:block;max-width:100%}
.bn a:focus-visible,.bn video:focus-visible,.bn summary:focus-visible{outline:3px solid #fff;outline-offset:3px;border-radius:6px}
.bn .wrap{max-width:1320px;margin:0 auto;padding-left:var(--px);padding-right:var(--px)}
.bn .sec{padding-top:clamp(56px,9vw,104px);padding-bottom:clamp(56px,9vw,104px)}
.bn .eyebrow{display:inline-flex;align-items:center;gap:10px;color:var(--y);font-weight:700;letter-spacing:.16em;font-size:12px;text-transform:uppercase}
.bn .eyebrow::before{content:"";width:22px;height:2px;background:var(--y);border-radius:2px}
.bn .y{color:var(--y)}
.bn .muted{color:var(--mut)}

/* botões */
.bn .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 28px;border-radius:999px;font-weight:700;font-size:15px;text-align:center;transition:transform .2s ease,box-shadow .25s ease,background .2s ease,border-color .2s ease;white-space:nowrap}
.bn .btn svg{width:18px;height:18px;transition:transform .2s ease}
.bn .btn:hover svg{transform:translateX(3px)}
.bn .btn-y{background:var(--y);color:#0b0b0b;box-shadow:0 8px 30px -8px rgba(255,196,0,.55)}
.bn .btn-y:hover{background:var(--y2);transform:translateY(-2px);box-shadow:0 14px 40px -10px rgba(255,196,0,.7)}
.bn .btn-o{border:1px solid var(--line2);background:rgba(255,255,255,.03)}
.bn .btn-o:hover{border-color:#777;background:rgba(255,255,255,.07);transform:translateY(-2px)}
.bn .btn-dk{background:#0b0b0b;color:var(--y)}
.bn .btn-dk:hover{transform:translateY(-2px);box-shadow:0 14px 34px -12px rgba(0,0,0,.6)}

/* topbar */
.bn .topbar{background:var(--y);color:#0b0b0b;font-weight:700;font-size:13px;overflow:hidden;white-space:nowrap;position:relative}
.bn .tb-track{display:flex;width:max-content;animation:bn-marq 38s linear infinite}
.bn .tb-track span{padding:10px 28px;display:inline-flex;align-items:center;gap:28px}
.bn .tb-track span::after{content:"✦";font-size:10px}
@keyframes bn-marq{to{transform:translateX(-50%)}}

/* header */
.bn .hdr{position:sticky;top:0;z-index:50;background:rgba(11,11,11,.72);backdrop-filter:saturate(160%) blur(14px);-webkit-backdrop-filter:saturate(160%) blur(14px);border-bottom:1px solid rgba(255,255,255,.06)}
.bn .hdr-in{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:12px;padding-bottom:12px}
.bn .hdr img{height:clamp(48px,11vw,60px);width:auto}
.bn .nav{display:flex;gap:6px;font-size:14px;color:#cfcfcf;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);padding:5px;border-radius:999px}
.bn .nav a{padding:8px 16px;border-radius:999px;transition:background .2s,color .2s}
.bn .nav a:hover{background:rgba(255,255,255,.08);color:#fff}
.bn .hdr .btn{min-height:44px;padding:0 20px;font-size:14px}

/* hero */
.bn .hero{position:relative;isolation:isolate}
.bn .hero::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(60% 55% at 85% 30%,rgba(255,196,0,.16),transparent 70%),radial-gradient(40% 40% at 5% 0%,rgba(255,196,0,.07),transparent 70%)}
.bn .hero::after{content:"";position:absolute;inset:0;z-index:-1;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(70% 70% at 50% 30%,#000,transparent);mask-image:radial-gradient(70% 70% at 50% 30%,#000,transparent)}
.bn .hero-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.85fr);gap:clamp(40px,6vw,80px);align-items:center;padding-top:clamp(48px,8vw,96px);padding-bottom:clamp(56px,8vw,104px)}
.bn .hero-copy{display:flex;flex-direction:column;gap:26px}
.bn .hero h1{font-family:Archivo,sans-serif;font-weight:900;font-size:clamp(40px,7.4vw,84px);line-height:.98;letter-spacing:-0.035em}
.bn .hero h1 .hl{position:relative;color:var(--y);white-space:nowrap}
.bn .hero h1 .hl::after{content:"";position:absolute;left:0;right:0;bottom:.04em;height:.12em;background:var(--y);opacity:.25;border-radius:4px}
.bn .lead{font-size:clamp(16px,4vw,19px);line-height:1.6;color:var(--mut);max-width:560px}
.bn .hero-btns{display:flex;flex-wrap:wrap;gap:12px}
.bn .cd{display:flex;flex-direction:column;gap:12px;margin-top:6px}
.bn .cd-lbl{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#d0d0d0}
.bn .dot{width:8px;height:8px;border-radius:50%;background:#ff3b3b;box-shadow:0 0 0 0 rgba(255,59,59,.6);animation:bn-pulse 1.8s infinite}
@keyframes bn-pulse{70%{box-shadow:0 0 0 10px rgba(255,59,59,0)}100%{box-shadow:0 0 0 0 rgba(255,59,59,0)}}
.bn .cd-row{display:flex;gap:10px;max-width:440px}
.bn .cd-box{flex:1 1 0;min-width:0;background:linear-gradient(180deg,#1c1c1c,#121212);border:1px solid var(--line);border-radius:16px;padding:14px 6px 12px;text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.05)}
.bn .cd-box strong{display:block;font-family:Archivo,sans-serif;font-weight:900;font-size:clamp(26px,7vw,38px);line-height:1;color:var(--y);font-variant-numeric:tabular-nums}
.bn .cd-box span{display:block;margin-top:6px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut2)}
.bn .vid-wrap{position:relative;justify-self:center;width:100%;max-width:400px}
.bn .vid-wrap::before{content:"";position:absolute;inset:-18px;border-radius:36px;background:radial-gradient(closest-side,rgba(255,196,0,.35),transparent);filter:blur(30px);z-index:-1}
.bn .vid-wrap video{display:block;width:100%;aspect-ratio:9/16;background:#000;object-fit:contain;border-radius:28px;border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 80px -30px rgba(0,0,0,.9)}
.bn .sticker{position:absolute;top:22px;left:-26px;background:var(--y);color:#0b0b0b;font-family:Archivo,sans-serif;font-weight:900;line-height:.95;text-align:center;width:104px;height:104px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;transform:rotate(-12deg);box-shadow:0 12px 30px -8px rgba(255,196,0,.6);pointer-events:none}
.bn .sticker small{font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
.bn .sticker b{font-size:34px;font-weight:900}

/* benefícios */
.bn .bens{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:-28px;position:relative;z-index:2}
.bn .ben{display:flex;gap:14px;align-items:flex-start;background:rgba(23,23,23,.85);backdrop-filter:blur(8px);border:1px solid var(--line);border-radius:var(--r);padding:20px;transition:border-color .25s,transform .25s}
.bn .ben:hover{border-color:rgba(255,196,0,.4);transform:translateY(-3px)}
.bn .ben-ic{flex:none;width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:rgba(255,196,0,.12);color:var(--y)}
.bn .ben-ic svg{width:22px;height:22px}
.bn .ben strong{display:block;font-size:15px;line-height:1.3}
.bn .ben span{display:block;margin-top:4px;font-size:13px;color:var(--mut2);line-height:1.45}

/* cabeçalho de seção */
.bn .sh{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px 32px;margin-bottom:clamp(28px,4vw,44px)}
.bn .sh>div{display:flex;flex-direction:column;gap:14px;max-width:760px}
.bn .pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,196,0,.35);background:rgba(255,196,0,.08);color:var(--y);font-size:13px;font-weight:600}

/* categorias */
.bn .cats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.bn .cat{position:relative;display:block;border-radius:var(--r);overflow:hidden;border:1px solid var(--line);background:var(--s2);isolation:isolate}
.bn .cat img{width:100%;height:auto;aspect-ratio:3/4;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.bn .cat:hover img{transform:scale(1.06)}
.bn .cat::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,0,0,.88));z-index:1}
.bn .cat-txt{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:24px;display:flex;align-items:flex-end;justify-content:space-between;gap:12px}
.bn .cat h3{font-family:Archivo,sans-serif;font-weight:800;font-size:clamp(22px,2.4vw,28px)}
.bn .cat-off{display:inline-block;margin-top:8px;background:var(--y);color:#0b0b0b;font-weight:800;font-size:12px;padding:5px 10px;border-radius:999px}
.bn .cat-arrow{flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.12);backdrop-filter:blur(6px);transition:background .25s,color .25s,transform .25s}
.bn .cat:hover .cat-arrow{background:var(--y);color:#0b0b0b;transform:rotate(45deg)}
.bn .cat-arrow svg{width:20px;height:20px}

/* produtos */
.bn .prods{display:flex;flex-direction:column;gap:22px}
.bn .prod{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);background:linear-gradient(135deg,#191919,#121212);border:1px solid var(--line);border-radius:28px;overflow:hidden;transition:border-color .3s}
.bn .prod:hover{border-color:#3a3a3a}
.bn .prod:nth-child(even) .pimg{order:2}
.bn .pimg{position:relative;background:#000;overflow:hidden}
.bn .pimg img{width:100%;height:100%;aspect-ratio:4/5;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.bn .prod:hover .pimg img{transform:scale(1.04)}
.bn .badge{position:absolute;top:18px;left:18px;z-index:2;background:var(--y);color:#0b0b0b;font-weight:800;font-size:13px;padding:7px 14px;border-radius:999px;box-shadow:0 8px 20px -6px rgba(0,0,0,.6)}
.bn .pbody{padding:clamp(28px,4.5vw,56px);display:flex;flex-direction:column;justify-content:center;gap:16px}
.bn .pbody h3{font-family:Archivo,sans-serif;font-weight:800;font-size:clamp(26px,3.4vw,40px);line-height:1.08}
.bn .pdesc{font-size:16px;line-height:1.65;color:var(--mut);max-width:520px}
.bn .price{display:flex;flex-direction:column;gap:2px;padding:18px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.bn .price .de{font-size:15px;color:var(--mut2);text-decoration:line-through}
.bn .price .pre{font-size:14px;color:var(--mut2)}
.bn .price strong{font-family:Archivo,sans-serif;font-weight:900;font-size:clamp(40px,6vw,58px);line-height:1.02;letter-spacing:-0.03em}
.bn .price strong small{font-size:20px;font-weight:600;letter-spacing:0;color:var(--mut)}
.bn .cond{display:flex;flex-direction:column;gap:4px}
.bn .cond b{font-size:16px;font-weight:600;color:var(--y)}
.bn .cond span{font-size:13px;color:var(--mut2)}
.bn .pbody .btn{align-self:flex-start;margin-top:6px}
.bn .aviso{margin-top:22px;padding:20px 24px;background:var(--s2);border:1px solid var(--line);border-left:4px solid var(--y);border-radius:var(--rs);font-size:15px;line-height:1.6;color:#d0d0d0}

/* conheça */
.bn .split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:clamp(40px,6vw,80px);align-items:center}
.bn .stack{display:flex;flex-direction:column;gap:20px}
.bn .stack p.big{font-size:19px;line-height:1.55;color:#e0e0e0;font-weight:500}
.bn .stack p.txt{font-size:17px;line-height:1.7;color:var(--mut)}
.bn .callout{display:flex;gap:14px;align-items:center;padding:18px 20px;border-radius:16px;background:rgba(255,196,0,.08);border:1px solid rgba(255,196,0,.35);font-size:16px;font-weight:600;line-height:1.5}
.bn .callout svg{flex:none;color:var(--y);width:24px;height:24px}
.bn .duo{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;align-items:start}
.bn .duo img{width:100%;height:auto;border-radius:var(--r);border:1px solid var(--line)}
.bn .duo img:last-child{margin-top:56px}

/* pagamento */
.bn .pay{position:relative;overflow:hidden;border-radius:32px;background:var(--y);color:#0b0b0b;padding:clamp(32px,6vw,72px);display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.9fr);gap:40px;align-items:center;isolation:isolate}
.bn .pay::before{content:"36x";position:absolute;right:-2%;bottom:-18%;font-family:Archivo,sans-serif;font-weight:900;font-size:clamp(160px,26vw,340px);line-height:1;color:rgba(0,0,0,.07);z-index:-1;letter-spacing:-0.05em}
.bn .pay h2{color:#0b0b0b}
.bn .pay p{font-size:clamp(16px,4vw,18px);line-height:1.6;color:#2a2200;max-width:620px;margin-top:14px}
.bn .pay-card{background:#0b0b0b;color:var(--tx);border-radius:24px;padding:32px;display:flex;flex-direction:column;gap:6px;box-shadow:0 30px 60px -25px rgba(0,0,0,.6)}
.bn .pay-card span{font-size:15px;color:var(--mut)}
.bn .pay-card strong{font-family:Archivo,sans-serif;font-weight:900;font-size:clamp(42px,8vw,60px);line-height:1;letter-spacing:-0.03em}
.bn .pay-card b{font-size:16px;font-weight:600;color:var(--y)}
.bn .pay-card .btn{margin-top:18px}

/* passos */
.bn .steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;counter-reset:st}
.bn .step{position:relative;background:var(--s2);border:1px solid var(--line);border-radius:var(--r);padding:28px;display:flex;flex-direction:column;gap:12px;overflow:hidden}
.bn .step-n{font-family:Archivo,sans-serif;font-weight:900;font-size:56px;line-height:1;color:transparent;-webkit-text-stroke:1.5px var(--y)}
.bn .step h3{font-size:20px;font-weight:700;letter-spacing:-0.01em}
.bn .step p{color:var(--mut2);line-height:1.6;font-size:15px}
.bn .step::after{content:"";position:absolute;top:0;left:28px;right:28px;height:2px;background:linear-gradient(90deg,var(--y),transparent);opacity:.7}

/* sobre */
.bn .about{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(40px,6vw,80px);align-items:center}
.bn .about-img{position:relative}
.bn .about-img img{width:100%;height:auto;border-radius:28px;border:1px solid var(--line)}
.bn .stats{position:absolute;left:16px;right:16px;bottom:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px}
.bn .stat{background:rgba(11,11,11,.78);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 16px}
.bn .stat b{display:block;font-family:Archivo,sans-serif;font-weight:900;font-size:28px;line-height:1;color:var(--y)}
.bn .stat span{display:block;margin-top:4px;font-size:12px;color:var(--mut)}

/* loja */
.bn .store{background:var(--s1);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.bn .ticks{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;font-size:16px;line-height:1.5;color:#e4e4e4}
.bn .ticks li{display:flex;gap:14px;align-items:flex-start}
.bn .ticks li::before{content:"";flex:none;width:22px;height:22px;margin-top:1px;border-radius:50%;background:var(--y) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230b0b0b' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L20 7'/%3E%3C/svg%3E") center/13px no-repeat}
.bn .loc{position:relative;border-radius:28px;padding:clamp(28px,4vw,40px);display:flex;flex-direction:column;gap:16px;background:linear-gradient(160deg,#1c1c1c,#111);border:1px solid rgba(255,196,0,.45);box-shadow:0 0 0 6px rgba(255,196,0,.05),0 30px 60px -30px rgba(0,0,0,.8)}
.bn .loc-ic{width:52px;height:52px;border-radius:16px;display:grid;place-items:center;background:var(--y);color:#0b0b0b}
.bn .loc h3{font-family:Archivo,sans-serif;font-weight:800;font-size:clamp(22px,5.5vw,28px)}
.bn .loc address{font-style:normal;font-size:17px;line-height:1.6;color:#e4e4e4}
.bn .loc p{font-size:14px;line-height:1.55;color:var(--mut2)}
.bn .loc-btns{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}

/* faq */
.bn .faq{max-width:900px;margin:0 auto}
.bn .faq h2{text-align:center;margin-bottom:clamp(28px,4vw,44px)}
.bn .qs{display:flex;flex-direction:column;gap:10px}
.bn details{background:var(--s2);border:1px solid var(--line);border-radius:16px;transition:border-color .25s,background .25s}
.bn details[open]{border-color:rgba(255,196,0,.4);background:#1a1a1a}
.bn summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 22px}
.bn summary::-webkit-details-marker{display:none}
.bn summary h3{font-size:clamp(16px,2vw,18px);font-weight:600;letter-spacing:-0.01em;line-height:1.4}
.bn .q-ic{flex:none;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.06);transition:transform .3s,background .25s,color .25s}
.bn details[open] .q-ic{transform:rotate(45deg);background:var(--y);color:#0b0b0b}
.bn .q-ic svg{width:18px;height:18px}
.bn details p{padding:0 22px 22px;color:var(--mut);line-height:1.65;font-size:16px}

/* footer */
.bn .ftr{border-top:1px solid var(--line);background:#080808}
.bn .ftr-in{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px 32px;padding-top:36px;padding-bottom:36px;color:var(--mut2);font-size:14px;line-height:1.6}
.bn .ftr img{height:96px;width:auto}
.bn .ftr a{text-decoration:underline;text-underline-offset:3px}

/* whatsapp flutuante */
.bn .fab{position:fixed;right:18px;bottom:18px;z-index:60;width:60px;height:60px;border-radius:50%;display:grid;place-items:center;background:#25D366;color:#fff;box-shadow:0 12px 30px -8px rgba(37,211,102,.6);transition:transform .2s}
.bn .fab:hover{transform:scale(1.07)}
.bn .fab svg{width:28px;height:28px}

/* animação de entrada */
.bn.rv-on .rv{opacity:0;transform:translateY(26px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.bn.rv-on .rv.in{opacity:1;transform:none}

@media (prefers-reduced-motion:reduce){
.bn *{animation:none !important;transition:none !important}
.bn.rv-on .rv{opacity:1;transform:none}
html{scroll-behavior:auto}
}

@media (max-width:1080px){
.bn .nav{display:none}
.bn .bens{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:900px){
.bn .hero-grid,.bn .split,.bn .about,.bn .pay{grid-template-columns:minmax(0,1fr)}
.bn .vid-wrap{max-width:360px}
.bn .prod{grid-template-columns:minmax(0,1fr)}
.bn .prod:nth-child(even) .pimg{order:0}
.bn .pimg img{aspect-ratio:4/4.4}
.bn .steps{grid-template-columns:minmax(0,1fr)}
.bn .about-img{max-width:480px;margin:0 auto;width:100%}
}
@media (max-width:720px){
.bn .tb-track span{padding:8px 20px;gap:20px}
.bn .topbar{font-size:12px}
.bn .btn{width:100%;white-space:normal}
.bn .hdr .btn{width:auto}
.bn .hero-btns{flex-direction:column}
.bn .sticker{width:84px;height:84px;left:-6px;top:14px}
.bn .sticker b{font-size:27px}
.bn .sticker small{font-size:9px}
.bn .bens{grid-template-columns:minmax(0,1fr);margin-top:0}
.bn .cats{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px;padding-bottom:8px;-webkit-overflow-scrolling:touch;margin-right:calc(var(--px) * -1);padding-right:var(--px);scrollbar-width:none}
.bn .cats::-webkit-scrollbar{display:none}
.bn .cat{flex:0 0 76%;scroll-snap-align:start}
.bn .pbody .btn{align-self:stretch}
.bn .duo img:last-child{margin-top:32px}
.bn .loc-btns{flex-direction:column}
.bn .ftr img{height:80px}
.bn .fab{width:54px;height:54px;right:14px;bottom:14px}
}
`;

export default function BlackPage() {
  const [cd, setCd] = useState({ d: "--", h: "--", m: "--", s: "--" });
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCd(calcular(Date.now()));
    const t = setInterval(() => setCd(calcular(Date.now())), 1000);
    return () => clearInterval(t);
  }, []);

  // Animação de entrada ao rolar (desativada para quem prefere movimento reduzido).
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("rv-on");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    root.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const unidades: [keyof typeof cd, string][] = [
    ["d", "dias"],
    ["h", "horas"],
    ["m", "min"],
    ["s", "seg"],
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800;900&family=Inter:wght@400;500;600;700&display=swap"
        precedence="default"
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bn" ref={rootRef}>
        <div className="topbar">
          <p className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
            {TOPBAR}
          </p>
          <div className="tb-track" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>{TOPBAR}</span>
            ))}
          </div>
        </div>

        <header className="hdr">
          <div className="wrap hdr-in">
            <a href="#" aria-label="Impacto Móveis e Colchões - início" style={{ display: "flex", alignItems: "center" }}>
              <img src="/black/logo-impacto.png" alt="Impacto Móveis e Colchões - Conforto e Estilo para Seu Lar" width="714" height="645" />
            </a>
            <nav className="nav" aria-label="Principal">
              <a href="#ofertas">Ofertas</a>
              <a href="#categorias">Categorias</a>
              <a href="#como-comprar">Como comprar</a>
              <a href="#loja">Onde estamos</a>
              <a href="#faq">Dúvidas</a>
            </nav>
            <a className="btn btn-y" href={WA_GERAL} target="_blank" rel="noopener noreferrer">
              Ver ofertas
            </a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="wrap hero-grid">
              <div className="hero-copy rv">
                <p className="eyebrow">Black November · oferta por tempo limitado</p>
                <h1>
                  Black November: <span className="hl">até 50% off</span> em móveis selecionados
                </h1>
                <p className="lead">
                  Mesa com cadeiras a partir de R$ 1.599, em até 36x no boleto. Consulte condições para ver quais móveis fazem parte da promoção. Ofertas válidas até 30/11.
                </p>
                <div className="hero-btns">
                  <a className="btn btn-y" href={WA_OFERTAS} target="_blank" rel="noopener noreferrer">
                    Ver móveis em oferta <ArrowRight aria-hidden="true" />
                  </a>
                  <a className="btn btn-o" href={WA_PAGAMENTO} target="_blank" rel="noopener noreferrer">
                    Condição de pagamento
                  </a>
                </div>
                <div className="cd">
                  <span className="cd-lbl">
                    <span className="dot" aria-hidden="true" />A Black November termina em
                  </span>
                  <div className="cd-row" role="timer" aria-label="Tempo restante da Black November">
                    {unidades.map(([k, lbl]) => (
                      <div className="cd-box" key={k}>
                        <strong>{cd[k]}</strong>
                        <span>{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="vid-wrap rv">
                <video controls playsInline preload="metadata" poster="/black/video-poster.jpg" aria-label="Vídeo da Black November da Impacto Móveis">
                  <source src="/black/video-black-november.mp4" type="video/mp4" />
                </video>
                <div className="sticker" aria-hidden="true">
                  <small>até</small>
                  <b>50%</b>
                  <small>off</small>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Benefícios">
            <div className="wrap">
              <div className="bens">
                {BENEFICIOS.map(({ Icon, t, s }) => (
                  <div className="ben rv" key={t}>
                    <div className="ben-ic" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <strong>{t}</strong>
                      <span>{s}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="categorias" className="wrap sec" style={{ paddingBottom: "clamp(32px,5vw,56px)" }}>
            <div className="sh rv">
              <div>
                <p className="eyebrow">Categorias</p>
                <h2>Ofertas da Black November por categoria</h2>
              </div>
            </div>
            <div className="cats">
              {CATEGORIAS.map((c) => (
                <a href="#ofertas" className="cat rv" key={c.t}>
                  <img src={c.img} alt={c.alt} width="900" height="1200" loading="lazy" decoding="async" />
                  <div className="cat-txt">
                    <div>
                      <h3>{c.t}</h3>
                      <span className="cat-off">Até 50% off</span>
                    </div>
                    <span className="cat-arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="ofertas" className="wrap sec" style={{ paddingTop: "clamp(32px,5vw,56px)" }}>
            <div className="sh rv">
              <div>
                <p className="eyebrow">Destaques</p>
                <h2>Produtos em oferta na Black November</h2>
              </div>
              <span className="pill">Até 50% off · consulte condições</span>
            </div>
            <div className="prods">
              {PRODUTOS.map((p) => (
                <article className="prod rv" key={p.t}>
                  <div className="pimg">
                    <img src={p.img} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
                    {p.badge && <span className="badge">{p.badge}</span>}
                  </div>
                  <div className="pbody">
                    <h3>{p.t}</h3>
                    {p.desc && <p className="pdesc">{p.desc}</p>}
                    <div className="price">
                      {p.de && <span className="de">{p.de}</span>}
                      <span className="pre">{p.prefixo}</span>
                      <strong className={p.destaque ? "y" : undefined}>
                        {p.preco}
                        {p.sufixo && <small> {p.sufixo}</small>}
                      </strong>
                    </div>
                    <div className="cond">
                      <b>{p.cond}</b>
                      {p.nota && <span>{p.nota}</span>}
                    </div>
                    <a className="btn btn-y" href={p.href} target="_blank" rel="noopener noreferrer">
                      Ver condição de pagamento <ArrowRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="aviso rv">
              <strong className="y">Consulte condições.</strong> O desconto de até 50% off vale para os móveis selecionados da promoção. Fale com a loja para saber quais modelos fazem parte da Black November.
            </p>
          </section>

          <section id="conheca" className="wrap sec" style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
            <div className="split">
              <div className="stack rv">
                <p className="eyebrow">Conheça</p>
                <h2>Mesa Anita e Cadeira Isabela</h2>
                <p className="big">Sabe aquele momento em que a casa pede mais aconchego e mais presença?</p>
                <p className="txt">
                  A Mesa Anita (1,60 x 0,90 m) é o equilíbrio perfeito entre espaço, sofisticação e funcionalidade. Seus pés em madeira trazem firmeza e um toque natural que transforma qualquer ambiente.
                </p>
                <p className="txt">
                  Para completar, a Cadeira Isabela, totalmente em madeira, une conforto e elegância em cada detalhe, perfeita para quem valoriza beleza sem abrir mão da durabilidade.
                </p>
                <p className="txt">
                  Mais do que um conjunto, é o cenário ideal para reunir quem você ama e viver momentos que realmente importam.
                </p>
                <p className="callout">
                  <Truck aria-hidden="true" />
                  Entrega e montagem grátis em todo o DF e entorno. Fale com a gente e garanta a sua.
                </p>
              </div>
              <div className="duo rv">
                <img src="/black/mesa-anita.jpg" alt="Mesa Anita de 1,60 x 0,90 m com pés em madeira e cadeiras Isabela estofadas" width="899" height="1124" loading="lazy" decoding="async" />
                <img src="/black/cadeira-isabela.jpg" alt="Cadeira Isabela em madeira com assento e encosto estofados" width="899" height="1124" loading="lazy" decoding="async" />
              </div>
            </div>
          </section>

          <section id="pagamento" className="wrap" style={{ paddingBottom: "clamp(56px,9vw,104px)" }}>
            <div className="pay rv">
              <div>
                <h2>Parcele em até 36x no boleto</h2>
                <p>
                  Leve seus móveis na Black November e divida em até 36x no boleto. Para saber a parcela do móvel que você escolheu e as regras do parcelamento, consulte condições na loja. Sujeito a análise de crédito. Em compras a partir de R$ 4.000, a entrega e a montagem são grátis.
                </p>
              </div>
              <div className="pay-card">
                <span>Mesa com cadeiras a partir de</span>
                <strong>R$ 1.599</strong>
                <b>em até 36x no boleto</b>
                <a className="btn btn-y" href={WA_PAGAMENTO} target="_blank" rel="noopener noreferrer">
                  Condição de pagamento <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <section id="como-comprar" className="store">
            <div className="wrap sec">
              <div className="sh rv">
                <div>
                  <p className="eyebrow">Passo a passo</p>
                  <h2>Como comprar na Black November</h2>
                </div>
              </div>
              <div className="steps">
                {PASSOS.map((p, i) => (
                  <div className="step rv" key={p.t}>
                    <span className="step-n">{pad(i + 1)}</span>
                    <h3>{p.t}</h3>
                    <p>{p.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="sobre" className="wrap sec">
            <div className="about">
              <div className="about-img rv">
                <img src="/black/socios.jpg" alt="Sócios da Impacto Móveis na loja, em Taguatinga-DF" width="896" height="1200" loading="lazy" decoding="async" />
                <div className="stats">
                  <div className="stat">
                    <b>+20</b>
                    <span>anos no mercado</span>
                  </div>
                  <div className="stat">
                    <b>+1.000</b>
                    <span>vendas bem-sucedidas</span>
                  </div>
                </div>
              </div>
              <div className="stack rv">
                <p className="eyebrow">Sobre nós</p>
                <h2>Impacto Móveis: mais de 20 anos no mercado</h2>
                <p className="txt">
                  Há mais de 20 anos no mercado, a Impacto Móveis se destaca pela qualidade, sofisticação e compromisso com o conforto dos nossos clientes. Com um histórico de mais de 1.000 vendas bem-sucedidas e uma alta qualificação no Google, garantimos não apenas produtos excepcionais, mas também uma experiência de compra que supera expectativas.
                </p>
                <p className="txt">
                  Nosso compromisso vai além de oferecer móveis e colchões de alto padrão. Trabalhamos exclusivamente com fornecedores certificados, que utilizam madeira de reflorestamento e seguem rigorosos padrões ambientais. Assim, garantimos que cada peça que chega até você carrega não só durabilidade e elegância, mas também a responsabilidade de um consumo consciente.
                </p>
                <p className="txt">
                  Aqui, a satisfação do cliente é a nossa prioridade. Por isso, oferecemos garantia de qualidade e um atendimento dedicado para ajudar você a transformar sua casa com móveis que unem design, conforto e sustentabilidade.
                </p>
              </div>
            </div>
          </section>

          <section id="loja" className="store">
            <div className="wrap sec split">
              <div className="stack rv">
                <p className="eyebrow">Visite a loja</p>
                <h2>Está montando ou renovando a casa? Venha ver os móveis pessoalmente</h2>
                <p className="txt">
                  Sentar, tocar no tecido e conferir o tamanho de cada peça faz diferença na hora de escolher. Nossa loja em Taguatinga espera você.
                </p>
                <ul className="ticks">
                  {PUBLICO.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="loc rv">
                <div className="loc-ic" aria-hidden="true">
                  <MapPin />
                </div>
                <h3>Onde estamos</h3>
                <address>
                  <strong>Impacto Móveis e Colchões</strong>
                  <br />
                  QNE 07, Lote 16, Loja 1
                  <br />
                  Taguatinga Norte, Taguatinga - DF
                </address>
                <p>Chame no WhatsApp para confirmar o horário de funcionamento antes de vir.</p>
                <div className="loc-btns">
                  <a className="btn btn-y" href={MAPS} target="_blank" rel="noopener noreferrer">
                    Como chegar <ArrowRight aria-hidden="true" />
                  </a>
                  <a className="btn btn-o" href={WA_VISITA} target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="wrap sec">
            <div className="faq">
              <h2 className="rv">Perguntas frequentes sobre a Black November</h2>
              <div className="qs">
                {FAQ.map((f, i) => (
                  <details className="rv" key={f.q} open={i === 0}>
                    <summary>
                      <h3>{f.q}</h3>
                      <span className="q-ic" aria-hidden="true">
                        <Plus />
                      </span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="ftr">
          <div className="wrap ftr-in">
            <img src="/black/logo-impacto.png" alt="Impacto Móveis e Colchões" width="714" height="645" loading="lazy" decoding="async" />
            <span>Impacto Móveis · Desde 2006 · QNE 07, Taguatinga-DF · CNPJ [00.000.000/0000-00]</span>
            <span>
              Consulte condições · Política de privacidade · WhatsApp{" "}
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer">
                (61) 99352-9881
              </a>
            </span>
          </div>
        </footer>

        <a className="fab" href={WA_GERAL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
          <MessageCircle aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
