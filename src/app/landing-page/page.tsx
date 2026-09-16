export default function ImpactoMoveisLanding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Impacto Móveis e Colchões",
    image: "/preview-landing/impacto-logo-full.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Quadra QNE 7",
      addressLocality: "Taguatinga Norte, Brasília",
      addressRegion: "DF",
      postalCode: "72125-070",
      addressCountry: "BR",
    },
    areaServed: "Distrito Federal",
    priceRange: "$$",
  };

  return (
    <>
      <style>{`
  :root{
    --bg:#EEEAE2;
    --bg-alt:#E4DECE;
    --surface:#F8F5EE;
    --ink:#241F1A;
    --ink-soft:#645C4D;
    --border:#D8D0BC;
    --green:#4E5C3D;
    --green-ink:#3B4630;
    --green-tint:#DCE2D1;
    --walnut:#A80D0D;
    --walnut-ink:#6E0808;
    --walnut-tint:#F3D6D6;
    --brand-red-deep:#1C0202;
    --shadow: 0 1px 2px rgba(36,31,26,0.06), 0 8px 24px -12px rgba(36,31,26,0.18);
  }
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]){
      --bg:#1B1712;
      --bg-alt:#221D16;
      --surface:#26211A;
      --ink:#ECE4D6;
      --ink-soft:#B4A995;
      --border:#3B3427;
      --green:#93A87A;
      --green-ink:#AABF90;
      --green-tint:#31392A;
      --walnut:#E4413F;
      --walnut-ink:#FF7A72;
      --walnut-tint:#3D1414;
      --brand-red-deep:#1C0202;
      --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 28px -12px rgba(0,0,0,0.55);
    }
  }
  :root[data-theme="dark"]{
    --bg:#1B1712;
    --bg-alt:#221D16;
    --surface:#26211A;
    --ink:#ECE4D6;
    --ink-soft:#B4A995;
    --border:#3B3427;
    --green:#93A87A;
    --green-ink:#AABF90;
    --green-tint:#31392A;
    --walnut:#E4413F;
    --walnut-ink:#FF7A72;
    --walnut-tint:#3D1414;
    --brand-red-deep:#1C0202;
    --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 28px -12px rgba(0,0,0,0.55);
  }

  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    background:var(--bg);
    color:var(--ink);
    font-family:"Montserrat",system-ui,-apple-system,sans-serif;
    -webkit-font-smoothing:antialiased;
    padding-inline:0;
  }
  img{max-width:100%;}
  [hidden]{display:none!important;}
  a{color:inherit;}
  h1,h2,h3{
    font-family:"Playfair Display",Georgia,"Times New Roman",serif;
    font-weight:600;
    line-height:1.08;
    text-wrap:balance;
    margin:0;
  }
  p{line-height:1.65;margin:0;}
  .eyebrow{
    font-size:0.72rem;
    font-weight:700;
    letter-spacing:0.14em;
    text-transform:uppercase;
    color:var(--green-ink);
  }
  .wrap{
    max-width:1220px;
    margin-inline:auto;
    padding-inline:20px;
  }
  .section{padding-block:clamp(48px,7vw,88px);}
  .btn{
    display:inline-flex;
    align-items:center;
    gap:8px;
    font-family:"Montserrat",sans-serif;
    font-weight:600;
    font-size:0.92rem;
    letter-spacing:0.01em;
    padding:13px 26px;
    border-radius:3px;
    text-decoration:none;
    border:1px solid transparent;
    cursor:pointer;
    transition:transform .15s ease, background-color .15s ease, border-color .15s ease;
  }
  .btn:active{transform:translateY(1px);}
  .btn-primary{background:linear-gradient(100deg, var(--brand-red-deep), var(--walnut));color:#FBF6EE;}
  .btn-primary:hover{background:linear-gradient(100deg, var(--brand-red-deep), var(--walnut-ink));}
  .btn-ghost{
    background:transparent;
    color:var(--ink);
    border-color:var(--ink);
  }
  :root:not([data-theme="light"]) .btn-ghost{border-color:var(--ink-soft);}
  .btn-ghost:hover{border-color:var(--walnut);color:var(--walnut);}
  .btn-onwood{background:#F8F5EE;color:#241F1A;}
  .btn-onwood:hover{background:#fff;}

  /* ---------- nav ---------- */
  header{
    position:sticky;
    top:env(safe-area-inset-top,0px);
    z-index:20;
    background:var(--bg);
    border-bottom:1px solid var(--border);
  }
  .navbar{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:24px;
    padding-block:16px;
  }
  .wordmark{
    font-family:"Playfair Display",serif;
    font-weight:700;
    font-size:1.28rem;
    letter-spacing:0.01em;
    white-space:nowrap;
  }
  .wordmark em{color:var(--walnut);font-style:normal;}
  .logo-nav{height:40px;width:auto;display:block;}
  .logo-footer{width:168px;height:auto;display:block;}
  :root[data-theme="dark"] .logo-nav,
  :root[data-theme="dark"] .logo-footer{filter:brightness(1.18);}
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]) .logo-nav,
    :root:not([data-theme="light"]) .logo-footer{filter:brightness(1.18);}
  }
  .navlinks{
    display:flex;
    gap:32px;
    list-style:none;
    margin:0;padding:0;
    font-size:0.86rem;
    font-weight:500;
    color:var(--ink-soft);
  }
  .navlinks a{text-decoration:none;}
  .navlinks a:hover{color:var(--walnut);}
  .nav-actions{display:flex;align-items:center;gap:16px;}
  .nav-toggle{display:none;}
  .nav-burger{
    display:none;
    align-items:center;
    justify-content:center;
    width:38px;height:38px;
    border:1px solid var(--border);
    border-radius:3px;
    cursor:pointer;
    color:var(--ink);
    flex:none;
  }
  @media (max-width:760px){
    .navbar{position:relative;flex-wrap:wrap;}
    .navlinks{
      display:none;
      position:absolute;
      top:100%;
      left:0;
      right:0;
      flex-direction:column;
      gap:0;
      background:var(--bg);
      border-bottom:1px solid var(--border);
      box-shadow:var(--shadow);
      padding-inline:20px;
      padding-block:6px 14px;
      z-index:30;
    }
    .navlinks li{padding-block:11px;border-top:1px solid var(--border);}
    .navlinks li:first-child{border-top:none;}
    .nav-toggle:checked ~ .navlinks{display:flex;}
    .nav-burger{display:inline-flex;}
    .nav-actions .btn-primary{padding:11px 18px;font-size:0.86rem;}
  }

  /* ---------- hero ---------- */
  .hero{
    position:relative;
    background:
      radial-gradient(ellipse 120% 80% at 15% 0%, rgba(168,13,13,0.35), transparent 55%),
      linear-gradient(150deg, var(--green-ink) 0%, #2E3524 46%, #221D16 100%);
    color:#F6F1E6;
    overflow:hidden;
  }
  .hero::after{
    content:"";
    position:absolute; inset:0;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
    mix-blend-mode:overlay;
    opacity:0.5;
    pointer-events:none;
  }
  .hero-inner{
    position:relative;
    display:grid;
    grid-template-columns:1.15fr 0.85fr;
    gap:48px;
    align-items:center;
    padding-block:clamp(56px,9vw,104px);
  }
  @media (max-width:1024px){ .hero-inner{grid-template-columns:1fr;} }
  .hero h1{
    font-size:clamp(2.2rem,4.2vw,3.9rem);
    max-width:16ch;
  }
  @media (max-width:1024px){ .hero h1{max-width:22ch;} }
  .hero h1 em{font-style:italic;color:var(--walnut-ink);}
  .hero p.lede{
    margin-top:20px;
    font-size:1.06rem;
    max-width:44ch;
    color:#E4DCC8;
  }
  .hero-cta{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    margin-top:32px;
  }
  .hero-fineprint{
    margin-top:22px;
    font-size:0.8rem;
    color:#C9BFA6;
    letter-spacing:0.02em;
  }
  .swatch-panel{
    position:relative;
    border-radius:2px;
    overflow:hidden;
    box-shadow:var(--shadow);
  }
  .hero .swatch-panel{
    aspect-ratio:4/5;
    border:1px solid rgba(246,241,230,0.18);
  }

  /* material textures, used as honest stand-ins for product photography */
  .tex-grain{
    background:
      repeating-linear-gradient(178deg,
        rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px,
        transparent 1px, transparent 3px),
      repeating-linear-gradient(182deg,
        #8A5836 0px, #7A4A2C 14px, #6E4025 26px, #90603C 40px, #7A4A2C 55px, #64391F 70px);
    background-size:auto, 100% 160px;
  }
  .tex-weave{
    background-color:#5B4B3A;
    background-image:
      repeating-linear-gradient(45deg, rgba(0,0,0,0.16) 0, rgba(0,0,0,0.16) 2px, transparent 2px, transparent 9px),
      repeating-linear-gradient(-45deg, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 2px, transparent 2px, transparent 9px),
      linear-gradient(135deg,#6B5642,#4A3B2C);
  }
  .tex-quilt{
    background-color:#DCD3BE;
    background-image:
      radial-gradient(circle at 50% 50%, rgba(74,60,44,0.22) 0 2px, transparent 3px),
      repeating-linear-gradient(45deg, rgba(74,60,44,0.10) 0, transparent 1px 26px),
      repeating-linear-gradient(-45deg, rgba(74,60,44,0.10) 0, transparent 1px 26px);
    background-size:26px 26px, 26px 26px, 26px 26px;
  }
  .swatch-tag{
    position:absolute;
    left:12px; bottom:12px;
    font-size:0.68rem;
    font-weight:700;
    letter-spacing:0.09em;
    text-transform:uppercase;
    color:#F6F1E6;
    background:rgba(20,17,12,0.45);
    padding:5px 9px;
    border-radius:2px;
  }

  /* ---------- trust strip ---------- */
  .trust{
    background:var(--surface);
    border-bottom:1px solid var(--border);
  }
  .trust-row{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:28px;
    padding-block:26px;
  }
  @media (max-width:860px){ .trust-row{grid-template-columns:repeat(2,1fr);} }
  .trust-item{
    display:flex;
    align-items:flex-start;
    gap:12px;
    font-size:0.84rem;
    color:var(--ink-soft);
  }
  .trust-item strong{
    display:block;
    color:var(--ink);
    font-size:0.9rem;
    font-weight:600;
    margin-bottom:2px;
  }
  .trust-item svg{flex:none;margin-top:2px;color:var(--green);}

  /* ---------- product pillars ---------- */
  .pillar{
    display:grid;
    grid-template-columns:0.9fr 1.1fr;
    gap:56px;
    align-items:center;
    padding-block:clamp(40px,6vw,64px);
  }
  .pillar:not(:last-child){border-bottom:1px solid var(--border);}
  .pillar.flip{grid-template-columns:1.1fr 0.9fr;}
  .pillar.flip .pillar-art{order:2;}
  @media (max-width:860px){
    .pillar, .pillar.flip{grid-template-columns:1fr;}
    .pillar.flip .pillar-art{order:0;}
  }
  .pillar-art{aspect-ratio:5/4;}
  .pillar-num{
    font-family:"Playfair Display",serif;
    font-style:italic;
    font-size:1rem;
    color:var(--walnut);
  }
  .pillar h3{
    font-size:clamp(1.6rem,3vw,2.15rem);
    margin-top:10px;
  }
  .pillar p{
    margin-top:16px;
    max-width:52ch;
    color:var(--ink-soft);
    font-size:0.98rem;
  }
  .pillar .btn{margin-top:22px;}

  /* ---------- location ---------- */
  .location-card{
    display:flex;
    align-items:flex-start;
    gap:22px;
  }
  .location-icon{flex:none;color:var(--walnut);margin-top:2px;}

  /* ---------- owners ---------- */
  .owners{
    display:grid;
    grid-template-columns:0.56fr 1fr;
    gap:48px;
    align-items:center;
  }
  @media (max-width:760px){ .owners{grid-template-columns:1fr;} }
  .owners-photo{
    border-radius:4px;
    overflow:hidden;
    box-shadow:var(--shadow);
    border:1px solid var(--border);
    max-width:360px;
  }
  .owners-photo img{width:100%;height:100%;object-fit:cover;display:block;}

  /* ---------- whatsapp proof ---------- */
  .chat-proof-body{
    max-width:480px;
    margin-inline:auto;
  }
  .chat-thread{
    display:flex;
    flex-direction:column;
    gap:8px;
    margin-top:16px;
    max-width:34ch;
  }
  .bubble{
    display:flex;
    align-items:baseline;
    gap:8px;
    padding:9px 14px;
    border-radius:14px;
    font-size:0.92rem;
    line-height:1.4;
    width:fit-content;
  }
  .bubble.sent{
    align-self:flex-end;
    background:var(--walnut);
    color:#FBF6EE;
    border-bottom-right-radius:3px;
  }
  .bubble.recv{
    align-self:flex-start;
    background:var(--surface);
    border:1px solid var(--border);
    color:var(--ink);
    border-bottom-left-radius:3px;
  }
  .bubble-time{
    font-size:0.68rem;
    opacity:0.7;
    white-space:nowrap;
  }
  .chat-proof-name{
    margin-top:16px;
    font-size:0.85rem;
    font-weight:600;
    color:var(--ink-soft);
  }

  /* ---------- process ---------- */
  .process{background:var(--bg-alt);}
  .process-head{max-width:56ch;}
  .process-head p{margin-top:14px;color:var(--ink-soft);}
  .process-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:1px;
    background:var(--border);
    margin-top:44px;
    border:1px solid var(--border);
  }
  @media (max-width:760px){ .process-grid{grid-template-columns:repeat(2,1fr);} }
  .process-step{
    background:var(--bg-alt);
    padding:26px 22px;
  }
  .process-step .pillar-num{display:block;margin-bottom:14px;}
  .process-step h4{
    font-family:"Montserrat",sans-serif;
    font-weight:600;
    font-size:0.98rem;
    margin:0 0 8px;
  }
  .process-step p{font-size:0.85rem;color:var(--ink-soft);}

  /* ---------- proof ---------- */
  .proof-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:22px;
    margin-top:40px;
  }
  @media (max-width:860px){ .proof-grid{grid-template-columns:1fr;} }
  .proof-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:3px;
    padding:24px;
  }
  .proof-head{
    display:flex;
    align-items:center;
    gap:12px;
    margin-bottom:14px;
  }
  .avatar{
    flex:none;
    width:40px;height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#FBF6EE;
    font-family:"Montserrat",sans-serif;
    font-weight:700;
    font-size:1rem;
  }
  .proof-name{display:block;font-size:0.88rem;font-weight:600;}
  .proof-time{display:block;font-size:0.76rem;color:var(--ink-soft);margin-top:1px;}
  .stars{color:var(--walnut);letter-spacing:2px;font-size:0.95rem;}
  .proof-card p{margin-top:12px;font-size:0.92rem;color:var(--ink-soft);}
  .proof-note{
    margin-top:18px;
    font-size:0.76rem;
    color:var(--ink-soft);
    font-style:italic;
  }

  /* ---------- final cta ---------- */
  .cta-band{
    background:linear-gradient(135deg, var(--green-ink), #232A1B);
    color:#F3EEDF;
    border-radius:4px;
    padding:clamp(36px,6vw,56px);
    display:flex;
    flex-wrap:wrap;
    gap:28px;
    align-items:center;
    justify-content:space-between;
  }
  .cta-band h2{font-size:clamp(1.6rem,3.4vw,2.2rem);max-width:20ch;}
  .cta-band p{margin-top:10px;color:#D6CFB8;max-width:42ch;}
  .cta-actions{display:flex;gap:14px;flex-wrap:wrap;}

  /* ---------- footer ---------- */
  footer.site{
    border-top:1px solid var(--border);
    padding-block:clamp(36px,5vw,52px) calc(env(safe-area-inset-bottom,0px) + 30px);
  }
  .foot-grid{
    display:grid;
    grid-template-columns:1.3fr 1fr 1fr;
    gap:36px;
  }
  @media (max-width:760px){ .foot-grid{grid-template-columns:1fr;} }
  .foot-grid h5{
    font-size:0.74rem;
    font-weight:700;
    letter-spacing:0.1em;
    text-transform:uppercase;
    color:var(--ink-soft);
    margin:0 0 14px;
  }
  .foot-grid ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;font-size:0.9rem;}
  .foot-grid ul a{text-decoration:none;}
  .foot-grid ul a:hover{color:var(--walnut);}
  .foot-bottom{
    margin-top:40px;
    padding-top:20px;
    border-top:1px solid var(--border);
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    justify-content:space-between;
    font-size:0.78rem;
    color:var(--ink-soft);
  }
      `}</style>

      <header>
        <nav className="navbar wrap">
          <img className="logo-nav" src="/preview-landing/impacto-logo-nav.png" alt="Impacto Móveis e Colchões" />
          <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" />
          <ul className="navlinks">
            <li><a href="#estofados">Estofados</a></li>
            <li><a href="#madeira">Madeira maciça</a></li>
            <li><a href="#colchoes">Colchões</a></li>
            <li><a href="#como-fazemos">Como fazemos</a></li>
          </ul>
          <div className="nav-actions">
            <a className="btn btn-primary" href="#contato">Pedir orçamento</a>
            <label className="nav-burger" htmlFor="nav-toggle" aria-label="Abrir menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </label>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-inner">
            <div>
              <p className="eyebrow" style={{ color: "#C7C0A2" }}>Taguatinga · Distrito Federal</p>
              <h1 style={{ marginTop: "14px", color: "#F6F1E6" }}>Móveis feitos <em>sob medida</em> para a casa que você tem hoje</h1>
              <p className="lede">Estofados, mesas em madeira maciça e colchões desenhados na sua medida, com madeira de origem sustentável e acabamento de marcenaria — não de fábrica em série.</p>
              <div className="hero-cta">
                <a className="btn btn-onwood" href="#contato">Falar com um especialista</a>
                <a className="btn btn-ghost" style={{ borderColor: "#8A8265", color: "#F6F1E6" }} href="#estofados">Ver coleções</a>
              </div>
              <p className="hero-fineprint">Entrega e montagem grátis em todo o DF · Garantia de 1 ano · Parcelamento em até 36x no boleto</p>
            </div>
            <div className="swatch-panel">
              <img
                src="/preview-landing/madeira-nogueira.jpg"
                alt="Mesa e cadeiras em madeira maciça nogueira, com veio à mostra e assento estofado em couro"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <span className="swatch-tag">Madeira maciça · Nogueira</span>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="wrap trust-row">
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>
              <span><strong>Entrega e montagem grátis</strong>Em qualquer ponto do DF</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/></svg>
              <span><strong>Garantia de 1 ano</strong>Em estrutura e estofamento</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21c-4-1-7-4.5-7-9 0-3.5 2.5-7 7-9 4.5 2 7 5.5 7 9 0 4.5-3 8-7 9z"/></svg>
              <span><strong>Madeira de origem sustentável</strong>Rastreada até a floresta manejada</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18"/></svg>
              <span><strong>Parcelamento facilitado</strong>Em até 36x no boleto ou 10x no cartão</span>
            </div>
          </div>
        </section>

        <section className="section" id="estofados">
          <div className="wrap">
            <div className="pillar">
              <div className="pillar-art swatch-panel">
                <img
                  src="/preview-landing/estofado-veludo-azul.jpg"
                  alt="Sofá retrátil estofado em veludo azul, com almofadas em couro caramelo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <span className="swatch-tag">Estofamento · Veludo azul</span>
              </div>
              <div>
                <span className="pillar-num">01</span>
                <h3>Estofados sob medida</h3>
                <p>Sofás, poltronas e cabeceiras desenhados para o seu espaço — não o contrário. Escolha o comprimento, a espuma e o tecido; a estrutura é construída em nossa marcenaria, uma peça de cada vez.</p>
                <a className="btn btn-ghost" href="#contato">Montar meu sofá →</a>
              </div>
            </div>

            <div className="pillar flip" id="madeira">
              <div className="pillar-art swatch-panel">
                <img
                  src="/preview-landing/mesa-madeira-freijo.jpg"
                  alt="Mesa de jantar em madeira maciça com base em X, madeira de tom claro"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <span className="swatch-tag">Madeira maciça · Freijó</span>
              </div>
              <div>
                <span className="pillar-num">02</span>
                <h3>Mesas e painéis em madeira maciça</h3>
                <p>Mesas de jantar e painéis de TV em madeira maciça de origem certificada, com o veio à mostra — cada peça carrega o desenho natural da árvore de onde veio.</p>
                <a className="btn btn-ghost" href="#contato">Ver medidas disponíveis →</a>
              </div>
            </div>

            <div className="pillar" id="colchoes">
              <div className="pillar-art swatch-panel">
                <img
                  src="/preview-landing/colchao-box.jpg"
                  alt="Cama box baú com colchão feito, cabeceira estofada e nichos internos de armazenamento"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <span className="swatch-tag" style={{ color: "#241F1A", background: "rgba(255,255,255,0.55)" }}>Colchão · Acabamento em box</span>
              </div>
              <div>
                <span className="pillar-num">03</span>
                <h3>Colchões para cada tipo de sono</h3>
                <p>Da espuma D33 ao molejo ensacado — ajudamos você a escolher pela forma como dorme, não pelo nome comercial da tecnologia.</p>
                <a className="btn btn-ghost" href="#contato">Comparar modelos →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-alt)", borderBlock: "1px solid var(--border)" }}>
          <div className="wrap">
            <div className="chat-proof">
              <div className="chat-proof-body">
                <p className="eyebrow">Direto do WhatsApp</p>
                <div className="chat-thread">
                  <div className="bubble sent">Gostou do sofá?<span className="bubble-time">09:32</span></div>
                  <div className="bubble recv">eu ameeeeeeeeeei<span className="bubble-time">09:33</span></div>
                  <div className="bubble recv">super confortável e não afunda<span className="bubble-time">09:34</span></div>
                  <div className="bubble recv">tô apaixonada<span className="bubble-time">09:34</span></div>
                  <div className="bubble recv">melhor compra<span className="bubble-time">09:34</span></div>
                  <div className="bubble recv">quero comprar logo a mesa 😄<span className="bubble-time">09:34</span></div>
                </div>
                <p className="chat-proof-name">— Fabiele, cliente do sofá sob medida</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section process" id="como-fazemos">
          <div className="wrap">
            <div className="process-head">
              <p className="eyebrow">Como fazemos</p>
              <h2 style={{ marginTop: "10px" }}>Da medida da sua sala até a entrega, sem passar por atacado</h2>
              <p>Cada pedido é uma peça de marcenaria, feita depois que você aprova a medida — não um item tirado do estoque de uma fábrica em série.</p>
            </div>
            <div className="process-grid">
              <div className="process-step">
                <span className="pillar-num">01</span>
                <h4>Medida e escolha</h4>
                <p>Você define dimensão, madeira e tecido com um de nossos consultores, presencial ou por WhatsApp.</p>
              </div>
              <div className="process-step">
                <span className="pillar-num">02</span>
                <h4>Marcenaria sob encomenda</h4>
                <p>Cada peça é cortada, montada e estofada especialmente para o seu pedido.</p>
              </div>
              <div className="process-step">
                <span className="pillar-num">03</span>
                <h4>Entrega e montagem</h4>
                <p>Levamos e montamos em qualquer ponto do DF, sem custo adicional.</p>
              </div>
              <div className="process-step">
                <span className="pillar-num">04</span>
                <h4>1 ano de garantia</h4>
                <p>Estrutura e estofamento cobertos — qualquer ajuste, voltamos até você.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="owners">
              <div className="owners-photo">
                <img src="/preview-landing/donos-impacto.jpg" alt="Os dois sócios da Impacto Móveis e Colchões, de camisa vermelha da marca, na loja em Taguatinga" />
              </div>
              <div className="owners-body">
                <p className="eyebrow">Quem toca a loja</p>
                <h2 style={{ marginTop: "10px" }}>Um sonho que virou loja em 2006</h2>
                <p style={{ marginTop: "16px", color: "var(--ink-soft)", maxWidth: "46ch" }}>A Impacto Móveis nasceu em 2006, com muita persistência e comprometimento com quem compra. O mesmo cuidado segue guiando cada peça sob medida — dos sócios até a sua sala.</p>
                <a className="btn btn-ghost" style={{ marginTop: "22px" }} href="#contato">Falar com a loja →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="location-card">
              <svg className="location-icon" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z"/><circle cx="12" cy="9" r="2.6"/></svg>
              <div>
                <p className="eyebrow">Onde estamos</p>
                <h2 style={{ marginTop: "10px" }}>Quadra QNE 7 · Taguatinga Norte</h2>
                <p style={{ marginTop: "12px", color: "var(--ink-soft)", maxWidth: "46ch" }}>
                  Brasília – DF · CEP 72.125-070<br />
                  Loja física com estoque para visita e retirada. Entrega e montagem grátis em qualquer ponto do Distrito Federal.
                </p>
                <a
                  className="btn btn-ghost"
                  style={{ marginTop: "20px" }}
                  href="https://www.google.com/maps/search/?api=1&query=Impacto+M%C3%B3veis+e+Colch%C3%B5es%2C+Quadra+QNE+7%2C+Taguatinga+Norte%2C+Bras%C3%ADlia+-+DF%2C+72125-070"
                  target="_blank"
                  rel="noopener"
                >
                  Ver rota no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0, marginTop: 20 }} id="contato">
          <div className="wrap">
            <div className="cta-band">
              <div>
                <h2>Pronto para desenhar o seu móvel?</h2>
                <p>Fale com um especialista pelo WhatsApp e leve o orçamento em minutos, com entrega, montagem e garantia inclusas.</p>
              </div>
              <div className="cta-actions">
                <a
                  className="btn btn-onwood"
                  href="https://wa.me/5561993529881?text=Ol%C3%A1!+Quero+um+or%C3%A7amento+de+um+m%C3%B3vel+sob+medida."
                  target="_blank"
                  rel="noopener"
                >
                  Chamar no WhatsApp
                </a>
                <a className="btn btn-ghost" style={{ borderColor: "#8A8265", color: "#F3EEDF" }} href="#contato">Ver formas de pagamento</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <img className="logo-footer" src="/preview-landing/impacto-logo-full.png" alt="Impacto Móveis e Colchões" />
              <p style={{ marginTop: "14px", color: "var(--ink-soft)", fontSize: "0.88rem", maxWidth: "32ch" }}>Marcenaria e estofamento sob medida em Taguatinga, DF. Entrega e montagem grátis em todo o Distrito Federal.</p>
            </div>
            <div>
              <h5>Coleções</h5>
              <ul>
                <li><a href="#estofados">Estofados sob medida</a></li>
                <li><a href="#madeira">Mesas em madeira maciça</a></li>
                <li><a href="#colchoes">Colchões</a></li>
              </ul>
            </div>
            <div>
              <h5>Loja</h5>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Impacto+M%C3%B3veis+e+Colch%C3%B5es%2C+Quadra+QNE+7%2C+Taguatinga+Norte%2C+Bras%C3%ADlia+-+DF%2C+72125-070"
                    target="_blank"
                    rel="noopener"
                  >
                    Quadra QNE 7 · Taguatinga Norte, DF · 72.125-070
                  </a>
                </li>
                <li>Segunda a sábado, 9h às 18h30</li>
                <li><a href="https://www.instagram.com/impactomoveis_/" target="_blank" rel="noopener">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© Impacto Móveis e Colchões</span>
            <span>Protótipo de layout — conteúdo de exemplo</span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
