"use client";

import { useEffect, useState } from "react";

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

const CSS = `
html{scroll-behavior:smooth}
.bn a{color:inherit;text-decoration:none}
.bn h2{color:#f4f4f4;letter-spacing:normal}
.bn p{color:inherit}
.bn a:focus-visible,.bn video:focus-visible{outline:3px solid #ffffff;outline-offset:3px}
.bn .btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;box-sizing:border-box;text-align:center}
.bn .cd-box{min-width:0;flex:1 1 0}
@media (max-width:720px){
.bn .nav{display:none !important}
.bn .topbar{font-size:12px !important;padding:8px 16px !important}
.bn .btn{width:100% !important;align-self:stretch !important}
.bn .hero-btns{flex-direction:column !important;width:100%}
.bn .pbody{padding:24px 20px !important}
.bn .pimg{max-width:none !important;flex-basis:100% !important}
.bn .pbox{padding:24px 20px !important;width:100%;box-sizing:border-box}
.bn .cats{display:flex !important;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px !important;padding-bottom:8px;-webkit-overflow-scrolling:touch}
.bn .cats a{flex:0 0 74% !important;scroll-snap-align:start}
.bn .hdr-cta{padding:10px 16px !important}
}
`;

export default function BlackPage() {
  const [cd, setCd] = useState({ d: "--", h: "--", m: "--", s: "--" });

  useEffect(() => {
    setCd(calcular(Date.now()));
    const t = setInterval(() => setCd(calcular(Date.now())), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800;900&family=Inter:wght@400;500;600&display=swap"
        precedence="default"
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bn" style={{ background: "#0b0b0b", color: "#f4f4f4", fontFamily: "Inter,system-ui,sans-serif", width: "100%", boxSizing: "border-box" }}>
        <div className="topbar" style={{ background: "#FFC400", color: "#0b0b0b", textAlign: "center", padding: "10px 24px", fontWeight: "600", fontSize: "14px" }}>
          Black November: até 50% off · parcele em até 36x no boleto · consulte condições · até 30/11
        </div>
        <header style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px clamp(20px,5vw,64px)", borderBottom: "1px solid #2a2a2a" }}>
          <a href="#" aria-label="Impacto Móveis e Colchões - início" style={{ display: "flex", alignItems: "center" }}>
            <img src="/black/logo-impacto.png" alt="Impacto Móveis e Colchões - Conforto e Estilo para Seu Lar" width="714" height="645" style={{ display: "block", height: "clamp(52px,13vw,68px)", width: "auto" }} />
          </a>
          <nav className="nav" aria-label="Principal" style={{ display: "flex", flexWrap: "wrap", gap: "28px", fontSize: "15px", color: "#d0d0d0" }}>
            <a href="#ofertas">
              Ofertas
            </a>
            <a href="#categorias">
              Categorias
            </a>
            <a href="#como-comprar">
              Como comprar
            </a>
            <a href="#loja">
              Onde estamos
            </a>
            <a href="#faq">
              Dúvidas
            </a>
          </nav>
          <a className="btn hdr-cta" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Vi%20as%20ofertas%20da%20Black%20November%20da%20Impacto%20M%C3%B3veis%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" style={{ background: "#FFC400", color: "#0b0b0b", padding: "12px 22px", fontWeight: "700", fontSize: "14px" }}>
            Ver ofertas
          </a>
        </header>
        <main>
          <section style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", padding: "clamp(40px,8vw,96px) clamp(20px,5vw,64px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ margin: "0", color: "#FFC400", fontWeight: "700", letterSpacing: "0.14em", fontSize: "13px", textTransform: "uppercase" }}>
                Black November · oferta por tempo limitado
              </p>
              <h1 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "clamp(36px,8.5vw,76px)", lineHeight: "1", letterSpacing: "-0.02em" }}>
                Black November:{" "}
                <span style={{ color: "#FFC400" }}>
                  até 50% off
                </span>
                {" "}em móveis selecionados
              </h1>
              <p style={{ margin: "0", fontSize: "clamp(16px,4.2vw,19px)", lineHeight: "1.55", color: "#c8c8c8", maxWidth: "560px" }}>
                Mesa com cadeiras a partir de R$ 1.599, em até 36x no boleto. Consulte condições para ver quais móveis fazem parte da promoção. Ofertas válidas até 30/11.
              </p>
              <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <a className="btn" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Vi%20as%20ofertas%20da%20Black%20November%20da%20Impacto%20M%C3%B3veis%20e%20gostaria%20de%20ver%20os%20m%C3%B3veis%20em%20oferta." target="_blank" rel="noopener noreferrer" style={{ background: "#FFC400", color: "#0b0b0b", padding: "18px 32px", fontWeight: "800", fontSize: "16px" }}>
                  Ver móveis em oferta
                </a>
                <a className="btn" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento%20%28at%C3%A9%2036x%20no%20boleto%29%20da%20Black%20November." target="_blank" rel="noopener noreferrer" style={{ border: "1px solid #5a5a5a", padding: "18px 32px", fontWeight: "600", fontSize: "16px" }}>
                  Condição de pagamento
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#d0d0d0" }}>
                  A Black November termina em
                </span>
                <div role="timer" aria-label="Tempo restante da Black November" style={{ display: "flex", gap: "10px", maxWidth: "420px" }}>
                  <div className="cd-box" style={{ background: "#181818", border: "1px solid #2a2a2a", padding: "12px 6px", textAlign: "center" }}>
                    <strong style={{ display: "block", fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "clamp(24px,7vw,34px)", lineHeight: "1", color: "#FFC400" }}>
                      {cd.d}
                    </strong>
                    <span style={{ fontSize: "12px", color: "#c0c0c0" }}>
                      dias
                    </span>
                  </div>
                  <div className="cd-box" style={{ background: "#181818", border: "1px solid #2a2a2a", padding: "12px 6px", textAlign: "center" }}>
                    <strong style={{ display: "block", fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "clamp(24px,7vw,34px)", lineHeight: "1", color: "#FFC400" }}>
                      {cd.h}
                    </strong>
                    <span style={{ fontSize: "12px", color: "#c0c0c0" }}>
                      horas
                    </span>
                  </div>
                  <div className="cd-box" style={{ background: "#181818", border: "1px solid #2a2a2a", padding: "12px 6px", textAlign: "center" }}>
                    <strong style={{ display: "block", fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "clamp(24px,7vw,34px)", lineHeight: "1", color: "#FFC400" }}>
                      {cd.m}
                    </strong>
                    <span style={{ fontSize: "12px", color: "#c0c0c0" }}>
                      min
                    </span>
                  </div>
                  <div className="cd-box" style={{ background: "#181818", border: "1px solid #2a2a2a", padding: "12px 6px", textAlign: "center" }}>
                    <strong style={{ display: "block", fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "clamp(24px,7vw,34px)", lineHeight: "1", color: "#FFC400" }}>
                      {cd.s}
                    </strong>
                    <span style={{ fontSize: "12px", color: "#c0c0c0" }}>
                      seg
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <video controls playsInline preload="metadata" poster="/black/video-poster.jpg" aria-label="Vídeo da Black November da Impacto Móveis" style={{ display: "block", width: "100%", maxWidth: "min(400px,100%)", aspectRatio: "9/16", background: "#000", objectFit: "contain", border: "1px solid #2a2a2a" }}>
                <source src="/black/video-black-november.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
          <section aria-label="Benefícios" style={{ borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a", background: "#121212" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "20px 24px", padding: "28px clamp(20px,5vw,64px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "16px" }}>
                  Frete: DF e regiões próximas
                </strong>
                <span style={{ fontSize: "14px", color: "#b8b8b8" }}>
                  Entre em contato para mais informações
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "16px" }}>
                  Parcele em até 36x
                </strong>
                <span style={{ fontSize: "14px", color: "#b8b8b8" }}>
                  No boleto, consulte condições
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "16px" }}>
                  1 ano de garantia
                </strong>
                <span style={{ fontSize: "14px", color: "#b8b8b8" }}>
                  Exclusivo na loja
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "16px" }}>
                  Entrega e montagem grátis
                </strong>
                <span style={{ fontSize: "14px", color: "#b8b8b8" }}>
                  Em compras a partir de R$ 4.000
                </span>
              </div>
            </div>
          </section>
          <section id="categorias" style={{ padding: "clamp(44px,8vw,72px) clamp(20px,5vw,64px) 40px", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box" }}>
            <h2 style={{ margin: "0 0 32px", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)" }}>
              Ofertas da Black November por categoria
            </h2>
            <div className="cats" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "20px" }}>
              <a href="#ofertas" style={{ background: "#181818", border: "1px solid #2a2a2a", display: "flex", flexDirection: "column" }}>
                <img src="/black/poltrona.jpg" alt="Poltrona cinza com puff estofado e mesas laterais, Impacto Móveis" width="900" height="1200" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center" }} />
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h3 style={{ margin: "0", fontSize: "26px", fontFamily: "Archivo,sans-serif", fontWeight: "800" }}>
                    Poltronas
                  </h3>
                  <span style={{ color: "#FFC400", fontWeight: "600", fontSize: "15px" }}>
                    Até 50% off
                  </span>
                </div>
              </a>
              <a href="#ofertas" style={{ background: "#181818", border: "1px solid #2a2a2a", display: "flex", flexDirection: "column" }}>
                <img src="/black/sofa-categoria.jpg" alt="Sofá retrátil e reclinável em tecido marrom, Impacto Móveis" width="900" height="1200" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center" }} />
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h3 style={{ margin: "0", fontSize: "26px", fontFamily: "Archivo,sans-serif", fontWeight: "800" }}>
                    Sofás
                  </h3>
                  <span style={{ color: "#FFC400", fontWeight: "600", fontSize: "15px" }}>
                    Até 50% off
                  </span>
                </div>
              </a>
              <a href="#ofertas" style={{ background: "#181818", border: "1px solid #2a2a2a", display: "flex", flexDirection: "column" }}>
                <img src="/black/mesa-anita.jpg" alt="Mesa de jantar em madeira com cadeiras estofadas, Impacto Móveis" width="900" height="1200" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center" }} />
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h3 style={{ margin: "0", fontSize: "26px", fontFamily: "Archivo,sans-serif", fontWeight: "800" }}>
                    Mesas e cadeiras
                  </h3>
                  <span style={{ color: "#FFC400", fontWeight: "600", fontSize: "15px" }}>
                    Até 50% off
                  </span>
                </div>
              </a>
            </div>
          </section>
          <section id="ofertas" style={{ padding: "clamp(36px,7vw,56px) clamp(20px,5vw,64px) clamp(36px,7vw,56px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "16px", marginBottom: "32px" }}>
              <h2 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)" }}>
                Produtos em oferta na Black November
              </h2>
              <p style={{ margin: "0", color: "#FFC400", fontSize: "15px", fontWeight: "600" }}>
                Até 50% off · consulte condições
              </p>
            </div>
            <article style={{ display: "flex", flexWrap: "wrap", background: "#181818", border: "1px solid #2a2a2a" }}>
              <div className="pimg" style={{ flex: "1 1 360px", maxWidth: "560px", minWidth: "0", background: "#000" }}>
                <img src="/black/mesa-cadeiras.jpg" alt="Mesa com tampo de vidro branco e quatro cadeiras estofadas cinza, Impacto Móveis" width="1080" height="1350" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
              <div className="pbody" style={{ flex: "1 1 320px", minWidth: "0", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
                <span style={{ alignSelf: "flex-start", background: "#FFC400", color: "#0b0b0b", fontWeight: "800", fontSize: "13px", padding: "5px 10px" }}>
                  Até 50% off
                </span>
                <h3 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(26px,6.5vw,36px)", lineHeight: "1.1" }}>
                  Mesa com cadeiras
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#c8c8c8" }}>
                  Mesa com tampo de vidro branco e cadeiras estofadas em tecido cinza. Exclusivo na loja, com 1 ano de garantia.
                </p>
                <span style={{ fontSize: "16px", color: "#c8c8c8" }}>
                  A partir de{" "}
                  <strong style={{ display: "block", fontSize: "clamp(38px,10vw,52px)", lineHeight: "1.1", fontFamily: "Archivo,sans-serif", fontWeight: "900", color: "#f4f4f4" }}>
                    R$ 1.599
                  </strong>
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#FFC400" }}>
                  Parcele em até 36x no boleto
                </span>
                <span style={{ fontSize: "14px", color: "#b0b0b0" }}>
                  Consulte condições
                </span>
                <a className="btn" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Tenho%20interesse%20na%20mesa%20com%20cadeiras%20da%20Black%20November%20%28a%20partir%20de%20R%24%201.599%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento." target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start", marginTop: "8px", background: "#FFC400", color: "#0b0b0b", padding: "16px 28px", fontWeight: "800", fontSize: "15px" }}>
                  Ver condição de pagamento
                </a>
              </div>
            </article>
            <article style={{ display: "flex", flexWrap: "wrap", background: "#181818", border: "1px solid #2a2a2a", marginTop: "24px" }}>
              <div className="pimg" style={{ flex: "1 1 360px", maxWidth: "560px", minWidth: "0", background: "#000" }}>
                <img src="/black/sofa-retratil.jpg" alt="Sofá retrátil e reclinável de três lugares em suede marrom, Impacto Móveis" width="1080" height="1350" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
              <div className="pbody" style={{ flex: "1 1 320px", minWidth: "0", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
                <span style={{ alignSelf: "flex-start", background: "#FFC400", color: "#0b0b0b", fontWeight: "800", fontSize: "13px", padding: "5px 10px" }}>
                  36x sem entrada
                </span>
                <h3 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(26px,6.5vw,36px)", lineHeight: "1.1" }}>
                  Sofá retrátil e reclinável
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#c8c8c8" }}>
                  Sofá de três lugares em tecido marrom, com assento retrátil e encosto reclinável. Entrega e montagem grátis no DF e entorno.
                </p>
                <span style={{ fontSize: "16px", color: "#c8c8c8" }}>
                  A partir de{" "}
                  <strong style={{ display: "block", fontSize: "clamp(38px,10vw,52px)", lineHeight: "1.1", fontFamily: "Archivo,sans-serif", fontWeight: "900", color: "#f4f4f4" }}>
                    R$ 1.299,00
                  </strong>
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#FFC400" }}>
                  Parcele em até 36x no boleto, sem entrada
                </span>
                <span style={{ fontSize: "14px", color: "#b0b0b0" }}>
                  Sujeito a análise de crédito · Consulte condições
                </span>
                <a className="btn" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20sof%C3%A1%20retr%C3%A1til%20e%20reclin%C3%A1vel%20da%20Black%20November%20%28a%20partir%20de%20R%24%201.299%2C00%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento." target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start", marginTop: "8px", background: "#FFC400", color: "#0b0b0b", padding: "16px 28px", fontWeight: "800", fontSize: "15px" }}>
                  Ver condição de pagamento
                </a>
              </div>
            </article>
            <article style={{ display: "flex", flexWrap: "wrap", background: "#181818", border: "1px solid #2a2a2a", marginTop: "24px" }}>
              <div className="pimg" style={{ flex: "1 1 360px", maxWidth: "560px", minWidth: "0", background: "#000" }}>
                <img src="/black/sofa-210.jpg" alt="Sofá de 2,10 m em tecido cinza com duas almofadas, Impacto Móveis" width="1080" height="1350" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
              <div className="pbody" style={{ flex: "1 1 320px", minWidth: "0", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
                <span style={{ alignSelf: "flex-start", background: "#FFC400", color: "#0b0b0b", fontWeight: "800", fontSize: "13px", padding: "5px 10px" }}>
                  Sem entrada
                </span>
                <h3 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(26px,6.5vw,36px)", lineHeight: "1.1" }}>
                  Sofá 2,10 m
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#c8c8c8" }}>
                  Sofá de 2,10 m em tecido, nas cores bege e cinza. Entrega e montagem grátis no DF e entorno.
                </p>
                <span style={{ fontSize: "16px", color: "#c8c8c8" }}>
                  A partir de{" "}
                  <strong style={{ display: "block", fontSize: "clamp(38px,10vw,52px)", lineHeight: "1.1", fontFamily: "Archivo,sans-serif", fontWeight: "900", color: "#f4f4f4" }}>
                    R$ 2.990{" "}
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>
                      no pix
                    </span>
                  </strong>
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#FFC400" }}>
                  Até 36x no boleto ou 10x no cartão, sem entrada
                </span>
                <span style={{ fontSize: "14px", color: "#b0b0b0" }}>
                  Sujeito a análise de crédito · Consulte condições
                </span>
                <a className="btn" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20sof%C3%A1%20de%202%2C10%20m%20da%20Black%20November%20%28a%20partir%20de%20R%24%202.990%20no%20pix%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento." target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start", marginTop: "8px", background: "#FFC400", color: "#0b0b0b", padding: "16px 28px", fontWeight: "800", fontSize: "15px" }}>
                  Ver condição de pagamento
                </a>
              </div>
            </article>
            <article style={{ display: "flex", flexWrap: "wrap", background: "#181818", border: "1px solid #2a2a2a", marginTop: "24px" }}>
              <div className="pimg" style={{ flex: "1 1 360px", maxWidth: "560px", minWidth: "0", background: "#000" }}>
                <img src="/black/mesa-8-cadeiras.jpg" alt="Mesa de jantar em madeira com 8 cadeiras estofadas com braços em madeira, Impacto Móveis" width="1148" height="1435" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
              <div className="pbody" style={{ flex: "1 1 320px", minWidth: "0", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
                <h3 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(26px,6.5vw,36px)", lineHeight: "1.1" }}>
                  Mesa de jantar com 8 cadeiras
                </h3>
                <span style={{ fontSize: "16px", color: "#b8b8b8", textDecoration: "line-through" }}>
                  De R$ 19.990
                </span>
                <span style={{ fontSize: "16px", color: "#c8c8c8" }}>
                  Por apenas{" "}
                  <strong style={{ display: "block", fontSize: "clamp(38px,10vw,52px)", lineHeight: "1.1", fontFamily: "Archivo,sans-serif", fontWeight: "900", color: "#FFC400" }}>
                    R$ 12.990
                  </strong>
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#FFC400" }}>
                  Parcele em até 36x no boleto, sem entrada
                </span>
                <a className="btn" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Tenho%20interesse%20na%20mesa%20de%20jantar%20com%208%20cadeiras%20da%20Black%20November%20%28R%24%2012.990%29.%20Gostaria%20de%20saber%20a%20condi%C3%A7%C3%A3o%20de%20pagamento." target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start", marginTop: "8px", background: "#FFC400", color: "#0b0b0b", padding: "16px 28px", fontWeight: "800", fontSize: "15px" }}>
                  Ver condição de pagamento
                </a>
              </div>
            </article>
            <p style={{ margin: "24px 0 0", padding: "20px 24px", background: "#181818", border: "1px solid #2a2a2a", borderLeft: "0", fontSize: "15px", lineHeight: "1.6", color: "#d0d0d0" }}>
              <strong style={{ color: "#FFC400" }}>
                Consulte condições.
              </strong>
              {" "}O desconto de até 50% off vale para os móveis selecionados da promoção. Fale com a loja para saber quais modelos fazem parte da Black November.
            </p>
          </section>
          <section id="conheca" style={{ padding: "clamp(44px,8vw,72px) clamp(20px,5vw,64px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
              <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", color: "#FFC400", fontWeight: "700", letterSpacing: "0.14em", fontSize: "13px", textTransform: "uppercase" }}>
                  Conheça
                </p>
                <h2 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)", lineHeight: "1.1" }}>
                  Mesa Anita e Cadeira Isabela
                </h2>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#d0d0d0" }}>
                  Sabe aquele momento em que a casa pede mais aconchego e mais presença?
                </p>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#c8c8c8" }}>
                  A Mesa Anita (1,60 x 0,90 m) é o equilíbrio perfeito entre espaço, sofisticação e funcionalidade. Seus pés em madeira trazem firmeza e um toque natural que transforma qualquer ambiente.
                </p>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#c8c8c8" }}>
                  Para completar, a Cadeira Isabela, totalmente em madeira, une conforto e elegância em cada detalhe, perfeita para quem valoriza beleza sem abrir mão da durabilidade.
                </p>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#c8c8c8" }}>
                  Mais do que um conjunto, é o cenário ideal para reunir quem você ama e viver momentos que realmente importam.
                </p>
                <p style={{ margin: "0", padding: "16px 20px", border: "1px solid #FFC400", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                  Entrega e montagem grátis em todo o DF e entorno. Fale com a gente e garanta a sua.
                </p>
              </div>
              <div style={{ flex: "1 1 440px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "16px", alignItems: "start" }}>
                <img src="/black/mesa-anita.jpg" alt="Mesa Anita de 1,60 x 0,90 m com pés em madeira e cadeiras Isabela estofadas" width="899" height="1124" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", border: "1px solid #2a2a2a" }} />
                <img src="/black/cadeira-isabela.jpg" alt="Cadeira Isabela em madeira com assento e encosto estofados" width="899" height="1124" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", border: "1px solid #2a2a2a" }} />
              </div>
            </div>
          </section>
          <section id="pagamento" style={{ background: "#121212", borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a" }}>
            <div style={{ padding: "clamp(44px,8vw,72px) clamp(20px,5vw,64px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "640px" }}>
                <h2 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)" }}>
                  Parcele em até 36x no boleto
                </h2>
                <p style={{ margin: "0", fontSize: "clamp(16px,4.2vw,18px)", lineHeight: "1.6", color: "#c8c8c8" }}>
                  Leve seus móveis na Black November e divida em até 36x no boleto. Para saber a parcela do móvel que você escolheu e as regras do parcelamento, consulte condições na loja. Sujeito a análise de crédito. Em compras a partir de R$ 4.000, a entrega e a montagem são grátis.
                </p>
              </div>
              <div className="pbox" style={{ display: "flex", flexDirection: "column", gap: "6px", border: "2px solid #FFC400", padding: "28px 40px" }}>
                <span style={{ fontSize: "15px", color: "#c8c8c8" }}>
                  Mesa com cadeiras a partir de
                </span>
                <strong style={{ fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "clamp(38px,10vw,52px)", lineHeight: "1" }}>
                  R$ 1.599
                </strong>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#FFC400" }}>
                  em até 36x no boleto
                </span>
              </div>
            </div>
          </section>
          <section id="como-comprar" style={{ background: "#121212", borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a" }}>
            <div style={{ padding: "clamp(48px,9vw,88px) clamp(20px,5vw,64px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box" }}>
              <h2 style={{ margin: "0 0 40px", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)" }}>
                Como comprar na Black November
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "48px", color: "#FFC400" }}>
                    01
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px" }}>
                    Escolha a oferta
                  </h3>
                  <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.55", fontSize: "16px" }}>
                    Veja os produtos em destaque e compare preços e condições.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "48px", color: "#FFC400" }}>
                    02
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px" }}>
                    Finalize o pedido
                  </h3>
                  <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.55", fontSize: "16px" }}>
                    Informe o endereço, escolha o frete e a forma de pagamento.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "Archivo,sans-serif", fontWeight: "900", fontSize: "48px", color: "#FFC400" }}>
                    03
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px" }}>
                    Receba em casa
                  </h3>
                  <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.55", fontSize: "16px" }}>
                    Acompanhe a entrega pelo código de rastreio enviado por [CANAL].
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="sobre" style={{ padding: "clamp(48px,9vw,88px) clamp(20px,5vw,64px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
              <div style={{ flex: "0 1 440px", minWidth: "0", width: "100%", margin: "0 auto" }}>
                <img src="/black/socios.jpg" alt="Sócios da Impacto Móveis na loja, em Taguatinga-DF" width="896" height="1200" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", border: "1px solid #2a2a2a" }} />
              </div>
              <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)", lineHeight: "1.1" }}>
                  Impacto Móveis: mais de 20 anos no mercado
                </h2>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#c8c8c8" }}>
                  Há mais de 20 anos no mercado, a Impacto Móveis se destaca pela qualidade, sofisticação e compromisso com o conforto dos nossos clientes. Com um histórico de mais de 1.000 vendas bem-sucedidas e uma alta qualificação no Google, garantimos não apenas produtos excepcionais, mas também uma experiência de compra que supera expectativas.
                </p>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#c8c8c8" }}>
                  Nosso compromisso vai além de oferecer móveis e colchões de alto padrão. Trabalhamos exclusivamente com fornecedores certificados, que utilizam madeira de reflorestamento e seguem rigorosos padrões ambientais. Assim, garantimos que cada peça que chega até você carrega não só durabilidade e elegância, mas também a responsabilidade de um consumo consciente.
                </p>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#c8c8c8" }}>
                  Aqui, a satisfação do cliente é a nossa prioridade. Por isso, oferecemos garantia de qualidade e um atendimento dedicado para ajudar você a transformar sua casa com móveis que unem design, conforto e sustentabilidade.
                </p>
              </div>
            </div>
          </section>
          <section id="loja" style={{ background: "#121212", borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a" }}>
            <div style={{ padding: "clamp(48px,9vw,88px) clamp(20px,5vw,64px)", maxWidth: "1360px", margin: "0 auto", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
              <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", color: "#FFC400", fontWeight: "700", letterSpacing: "0.14em", fontSize: "13px", textTransform: "uppercase" }}>
                  Visite a loja
                </p>
                <h2 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)", lineHeight: "1.1" }}>
                  Está montando ou renovando a casa? Venha ver os móveis pessoalmente
                </h2>
                <p style={{ margin: "0", fontSize: "clamp(16px,4.2vw,18px)", lineHeight: "1.6", color: "#c8c8c8" }}>
                  Sentar, tocar no tecido e conferir o tamanho de cada peça faz diferença na hora de escolher. Nossa loja em Taguatinga espera você.
                </p>
                <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.5", color: "#e4e4e4" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span aria-hidden="true" style={{ width: "10px", height: "10px", background: "#FFC400", flex: "none", marginTop: "7px" }}>
                    </span>
                    Quem está de mudança ou montando a casa nova e precisa de sofá, mesa e cadeiras.
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span aria-hidden="true" style={{ width: "10px", height: "10px", background: "#FFC400", flex: "none", marginTop: "7px" }}>
                    </span>
                    Quem quer trocar os móveis da sala de estar ou da sala de jantar por peças de qualidade.
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span aria-hidden="true" style={{ width: "10px", height: "10px", background: "#FFC400", flex: "none", marginTop: "7px" }}>
                    </span>
                    Quem quer parcelar em até 36x no boleto, com modelos sem entrada.
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span aria-hidden="true" style={{ width: "10px", height: "10px", background: "#FFC400", flex: "none", marginTop: "7px" }}>
                    </span>
                    Quem mora em Taguatinga e região e prefere ver tudo de perto antes de comprar.
                  </li>
                </ul>
              </div>
              <div className="pbox" style={{ flex: "1 1 340px", minWidth: "0", maxWidth: "520px", border: "2px solid #FFC400", padding: "36px", display: "flex", flexDirection: "column", gap: "14px", boxSizing: "border-box" }}>
                <h3 style={{ margin: "0", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(22px,5.5vw,28px)" }}>
                  Onde estamos
                </h3>
                <address style={{ margin: "0", fontStyle: "normal", fontSize: "17px", lineHeight: "1.6", color: "#e4e4e4" }}>
                  <strong>
                    Impacto Móveis e Colchões
                  </strong>
                  <br />
                  QNE 07, Lote 16, Loja 1
                  <br />
                  Taguatinga Norte, Taguatinga - DF
                </address>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#c0c0c0" }}>
                  Chame no WhatsApp para confirmar o horário de funcionamento antes de vir.
                </p>
                <a className="btn" href="https://www.google.com/maps/search/?api=1&query=Impacto%20M%C3%B3veis%20e%20Colch%C3%B5es%20QNE%207%20Lote%2016%20Loja%201%20Taguatinga%20Norte%20Bras%C3%ADlia%20DF" target="_blank" rel="noopener noreferrer" style={{ background: "#FFC400", color: "#0b0b0b", padding: "16px 28px", fontWeight: "800", fontSize: "15px", alignSelf: "flex-start" }}>
                  Como chegar
                </a>
                <a className="btn" href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Quero%20visitar%20a%20loja%20da%20Impacto%20M%C3%B3veis.%20Qual%20o%20hor%C3%A1rio%20de%20funcionamento%3F" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid #5a5a5a", padding: "16px 28px", fontWeight: "600", fontSize: "15px", alignSelf: "flex-start" }}>
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </section>
          <section id="faq" style={{ padding: "clamp(48px,9vw,88px) clamp(20px,5vw,64px)", maxWidth: "960px", margin: "0 auto", boxSizing: "border-box" }}>
            <h2 style={{ margin: "0 0 32px", fontFamily: "Archivo,sans-serif", fontWeight: "800", fontSize: "clamp(28px,5.5vw,40px)" }}>
              Perguntas frequentes sobre a Black November
            </h2>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #2a2a2a" }}>
              <div style={{ padding: "24px 0", borderBottom: "1px solid #2a2a2a" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "19px" }}>
                  Quais móveis fazem parte da promoção da Black November?
                </h3>
                <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.6", fontSize: "16px" }}>
                  O desconto de até 50% off vale para os móveis selecionados. Consulte condições na loja para ver quais modelos participam.
                </p>
              </div>
              <div style={{ padding: "24px 0", borderBottom: "1px solid #2a2a2a" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "19px" }}>
                  Como funciona o parcelamento em 36x no boleto?
                </h3>
                <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.6", fontSize: "16px" }}>
                  Você pode parcelar em até 36x no boleto. Consulte condições para saber a parcela do móvel escolhido. Sujeito a análise de crédito.
                </p>
              </div>
              <div style={{ padding: "24px 0", borderBottom: "1px solid #2a2a2a" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "19px" }}>
                  Qual o preço da mesa com cadeiras?
                </h3>
                <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.6", fontSize: "16px" }}>
                  A mesa com cadeiras da Black November sai a partir de R$ 1.599. O valor varia conforme o modelo.
                </p>
              </div>
              <div style={{ padding: "24px 0", borderBottom: "1px solid #2a2a2a" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "19px" }}>
                  Como funciona o frete?
                </h3>
                <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.6", fontSize: "16px" }}>
                  O frete é para o DF e regiões próximas. Entre em contato para mais informações sobre a condição para o seu endereço.
                </p>
              </div>
              <div style={{ padding: "24px 0", borderBottom: "1px solid #2a2a2a" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "19px" }}>
                  Tem entrega e montagem grátis?
                </h3>
                <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.6", fontSize: "16px" }}>
                  Sim, em compras a partir de R$ 4.000 a entrega e a montagem são grátis.
                </p>
              </div>
              <div style={{ padding: "24px 0", borderBottom: "1px solid #2a2a2a" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "19px" }}>
                  Até quando valem as ofertas da Black November?
                </h3>
                <p style={{ margin: "0", color: "#c0c0c0", lineHeight: "1.6", fontSize: "16px" }}>
                  Por tempo limitado, até 30/11 ou enquanto durarem os estoques.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer style={{ borderTop: "1px solid #2a2a2a", padding: "32px clamp(20px,5vw,64px)", display: "flex", flexWrap: "wrap", gap: "16px 24px", justifyContent: "space-between", color: "#b0b0b0", fontSize: "14px", lineHeight: "1.6" }}>
          <img src="/black/logo-impacto.png" alt="Impacto Móveis e Colchões" width="714" height="645" loading="lazy" decoding="async" style={{ display: "block", height: "110px", width: "auto" }} />
          <span>
            Impacto Móveis · Desde 2006 · QNE 07, Taguatinga-DF · CNPJ [00.000.000/0000-00]
          </span>
          <span>
            Consulte condições · Política de privacidade · WhatsApp{" "}
            <a href="https://wa.me/5561993529881?text=Ol%C3%A1%21%20Vi%20as%20ofertas%20da%20Black%20November%20da%20Impacto%20M%C3%B3veis%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
              (61) 99352-9881
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
