// Page sections — hero, about, services, mayoreo, payment, contact, footer

const Hero = ({ onShop }) => (
  <section id="top" className="hero" style={{ borderBottom: 0 }}>
    <div className="wrap">
      <div className="hero__grid">
        <div>
          <div className="eyebrow"><span className="dot"/>Carnicería Premium · Desde 1972</div>
          <h1 className="h-display hero__title" style={{ marginTop: 24 }}>
            La carne<br/>
            <em>como debe</em><br/>
            <span className="stroke">saberse</span>.
          </h1>
          <p className="hero__lede">
            Cuatro generaciones cortando carne. Cinco sucursales, un mismo estándar:
            cadena de frío, cortes precisos y atención de barrio. Pedí online, recibí en casa.
          </p>
          <div className="hero__cta">
            <button className="btn btn--primary btn--lg" onClick={onShop}>
              Ver catálogo <Icon name="arrow" size={16}/>
            </button>
            <a className="btn btn--ghost btn--lg" href="#mayoreo">Vender por mayor</a>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-item"><div className="hero__meta-num">52</div><div className="hero__meta-lbl">Años de oficio</div></div>
            <div className="hero__meta-item"><div className="hero__meta-num">5</div><div className="hero__meta-lbl">Sucursales</div></div>
            <div className="hero__meta-item"><div className="hero__meta-num">24h</div><div className="hero__meta-lbl">Envío CABA</div></div>
          </div>
        </div>
        <div className="hero__media" style={{ background:'linear-gradient(135deg,#3a1410,#0d0504)' }}>
          <div style={{ position:'absolute', inset:0, display:'grid', placeItems:'center', color:'#d8b890', fontFamily:'var(--mono)', fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', opacity:.7 }}>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontSize:9, marginBottom:8, opacity:.6 }}>— foto editorial —</div>
              <div>Bife madurado · Vista cenital</div>
            </div>
          </div>
          <div style={{ position:'absolute', left:24, top:24, color:'#fff', fontFamily:'var(--mono)', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase' }}>N°01 / Bife</div>
          <div style={{ position:'absolute', right:24, bottom:24, color:'#fff', fontFamily:'var(--serif)', fontStyle:'italic', fontSize:14 }}>«madurado 21 días»</div>
        </div>
      </div>
      <div className="hero__marquee">
        <div className="marquee-track">
          <span>Madurado al vacío</span><span>Pampa Húmeda</span><span>Cordero patagónico</span><span>Embutidos de la casa</span><span>Cadena de frío 24h</span>
          <span>Madurado al vacío</span><span>Pampa Húmeda</span><span>Cordero patagónico</span><span>Embutidos de la casa</span><span>Cadena de frío 24h</span>
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = ({ onOpen, onAdd }) => {
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('rec');
  const filtered = useMemo(() => {
    let arr = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    if (sort === 'price-asc') arr = [...arr].sort((a,b) => a.price - b.price);
    if (sort === 'price-desc') arr = [...arr].sort((a,b) => b.price - a.price);
    if (sort === 'name') arr = [...arr].sort((a,b) => a.name.localeCompare(b.name));
    return arr;
  }, [cat, sort]);

  return (
    <section id="productos" className="scroll-mt">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"/>Catálogo</div>
            <h2 style={{ marginTop:18 }}>Cortes <em>al detalle</em>.</h2>
          </div>
          <p className="section-head__copy">
            Selección semanal de carnes vacunas, cerdo, cordero patagónico, pollo de campo
            y embutidos de elaboración propia. Cortes a medida sin costo adicional.
          </p>
        </div>
        <div className="filter-bar">
          {CATEGORIES.map(c => (
            <button key={c.id} className={"chip " + (cat === c.id ? 'is-active' : '')} onClick={() => setCat(c.id)}>
              {c.label}
            </button>
          ))}
          <span className="spacer"/>
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="rec">Recomendados</option>
            <option value="price-asc">Precio ↑</option>
            <option value="price-desc">Precio ↓</option>
            <option value="name">Nombre A–Z</option>
          </select>
        </div>
        <div className="products">
          {filtered.map(p => <ProductCard key={p.id} p={p} onOpen={onOpen} onAdd={onAdd}/>)}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="nosotros" className="about scroll-mt">
    <div className="wrap">
      <div className="about__grid">
        <div className="about__media">
          <div style={{ position:'absolute', inset:0, display:'grid', placeItems:'center', color:'#d8b890', fontFamily:'var(--mono)', fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', opacity:.7 }}>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontSize:9, marginBottom:8, opacity:.6 }}>— retrato —</div>
              <div>Don Salvador, 1974</div>
            </div>
          </div>
          <span className="label">Archivo · Mercado de Liniers</span>
        </div>
        <div>
          <div className="eyebrow"><span className="dot"/>Nuestra historia</div>
          <h2 style={{ marginTop:18 }}>Cuatro <em>generaciones</em><br/>al frente del mostrador.</h2>
          <p>
            Empezamos en 1972 con un mostrador de roble y un cuchillo afilado a mano.
            Hoy somos cinco sucursales, un equipo de 38 personas y un compromiso
            que no cambió: trabajar sólo con productores que conocemos por nombre.
          </p>
          <p>
            Carne madurada al vacío, achuras frescas todos los días, embutidos
            que se hacen en casa. Sin atajos, sin promesas que no podamos cumplir.
          </p>
          <div className="about__stats">
            <div className="about__stat"><div className="n">38</div><div className="l">Personas</div></div>
            <div className="about__stat"><div className="n">12</div><div className="l">Productores</div></div>
            <div className="about__stat"><div className="n">5</div><div className="l">Sucursales</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicios" className="scroll-mt" style={{ paddingBottom: 0 }}>
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Servicios</div>
          <h2 style={{ marginTop:18 }}>Cómo te <em>llegamos</em>.</h2>
        </div>
        <p className="section-head__copy">
          Mostrador, envío a domicilio o pedido para parrilla del finde.
          Hacemos los cortes a medida y coordinamos la entrega con vos.
        </p>
      </div>
    </div>
    <div className="svc-grid">
      <div className="svc">
        <div className="svc__num">01 — Envío</div>
        <h3 className="svc__title">Envío a domicilio en 24 hs</h3>
        <p className="svc__desc">
          CABA y GBA. Envasado al vacío con cadena de frío garantizada hasta tu puerta.
          Coordinamos franja horaria por WhatsApp.
        </p>
        <ul className="svc__list">
          <li>Gratis sobre $25.000</li>
          <li>Cobertura 30 km</li>
          <li>Empaque al vacío</li>
        </ul>
      </div>
      <div className="svc">
        <div className="svc__num">02 — Mostrador</div>
        <h3 className="svc__title">Cortes a medida en sucursal</h3>
        <p className="svc__desc">
          Pedí el grosor que prefieras, dejá la pieza entera o pedí porciones individuales.
          Cinco locales abiertos siete días.
        </p>
        <ul className="svc__list">
          <li>Cortes personalizados</li>
          <li>Asesoramiento</li>
          <li>Reservá por WhatsApp</li>
        </ul>
      </div>
      <div className="svc">
        <div className="svc__num">03 — Eventos</div>
        <h3 className="svc__title">Asados, eventos y cátering</h3>
        <p className="svc__desc">
          Calculamos la cantidad por persona, te armamos el combo y si querés
          conseguimos el asador. Mínimo 15 personas.
        </p>
        <ul className="svc__list">
          <li>Combos por persona</li>
          <li>Asador a coordinar</li>
          <li>Logística incluida</li>
        </ul>
      </div>
    </div>
  </section>
);

const Mayoreo = () => (
  <section id="mayoreo" className="scroll-mt" style={{ background:'var(--paper)' }}>
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Venta por mayor</div>
          <h2 style={{ marginTop:18 }}>Para <em>restaurantes</em><br/>y reventa.</h2>
        </div>
        <p className="section-head__copy">
          Trabajamos con parrillas, restaurantes y minimercados. Listas de precio
          actualizadas semanalmente, entregas programadas y cuenta corriente
          para clientes habituales.
        </p>
      </div>
      <div className="pricing">
        <div className="tier">
          <div className="tier__name">Gastronomía</div>
          <h3 className="tier__title">Cuenta Restaurante</h3>
          <div className="tier__price">desde 15% off <small>sobre lista</small></div>
          <ul>
            <li>Lista de precios semanal</li>
            <li>Entrega programada 3× semana</li>
            <li>Facturación A · cuenta corriente</li>
            <li>Asesor de cuenta dedicado</li>
            <li>Cortes a especificación</li>
          </ul>
          <a className="btn btn--ghost" href="#contacto">Solicitar alta</a>
        </div>
        <div className="tier tier--feat">
          <div className="tier__name">Reventa</div>
          <h3 className="tier__title">Mayorista Pleno</h3>
          <div className="tier__price">desde 22% off <small className="muted">sobre lista</small></div>
          <ul>
            <li>Pedido mínimo 50 kg</li>
            <li>Logística incluida (CABA + GBA)</li>
            <li>Facturación A · 30 días</li>
            <li>Catálogo completo + ofertas semanales</li>
            <li>Soporte 7 días</li>
          </ul>
          <a className="btn btn--red" href="#contacto">Pedir lista mayorista <Icon name="arrow" size={16}/></a>
        </div>
      </div>
    </div>
  </section>
);

const Payment = () => {
  const methods = [
    { title: 'Visa', sub: 'Crédito y débito · 1, 3 y 6 cuotas', logo: 'assets/visa.jpg', pill: 'Tarjeta' },
    { title: 'Mastercard', sub: 'Crédito y débito · 1, 3 y 6 cuotas', logo: 'assets/mastercard.png', pill: 'Tarjeta' },
    { title: 'Mercado Pago', sub: 'QR, link de pago, billetera virtual', icon: 'wallet', pill: 'Billetera' },
    { title: 'MODO', sub: 'Bancos adheridos · descuentos vigentes', icon: 'wallet', pill: 'Billetera' },
    { title: 'Transferencia', sub: 'CBU / Alias · 5% off pago anticipado', icon: 'bank', pill: 'Bancaria' },
    { title: 'Efectivo', sub: 'Al recibir el pedido o en sucursal', icon: 'cash', pill: 'Local' },
  ];
  const renderIcon = (m) => {
    if (m.logo) {
      return <img src={m.logo} alt={m.title} style={{ height: m.title === 'Visa' ? 18 : 26 }}/>;
    }
    if (m.icon === 'wallet') return (
      <div style={{ width:36, height:24, border:'1.4px solid var(--ink)', borderRadius:4, position:'relative' }}>
        <div style={{ position:'absolute', right:-4, top:5, width:12, height:14, background:'var(--bg)', border:'1.4px solid var(--ink)', borderRadius:3 }}/>
      </div>
    );
    if (m.icon === 'bank') return (
      <svg width="32" height="22" viewBox="0 0 32 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 8L16 2L30 8M4 8h24v10H4zM8 10v6M14 10v6M18 10v6M24 10v6M2 20h28"/>
      </svg>
    );
    return (
      <svg width="30" height="22" viewBox="0 0 30 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="4" width="26" height="14" rx="2"/><circle cx="15" cy="11" r="3"/>
      </svg>
    );
  };

  return (
    <section id="pago" className="scroll-mt">
      <div className="wrap">
        <div className="pay">
          <div className="pay__info">
            <div className="eyebrow"><span className="dot"/>Pago & envío</div>
            <h3 style={{ marginTop:18 }}>Pagás como <em style={{ fontFamily:'var(--serif)', fontStyle:'italic', color:'var(--red)' }}>te queda cómodo</em>.</h3>
            <p>
              Aceptamos todas las tarjetas, billeteras virtuales y transferencias.
              Para pagos online procesamos con Mercado Pago: tu información
              de tarjeta nunca pasa por nuestros servidores.
            </p>
            <div style={{ marginTop:28, display:'grid', gap:16 }}>
              <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                <Icon name="shield" size={22}/>
                <div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:18 }}>Pago 100% seguro</div>
                  <div style={{ fontSize:13, color:'var(--muted)', marginTop:2 }}>Procesado por Mercado Pago, certificado PCI-DSS.</div>
                </div>
              </div>
              <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                <Icon name="truck" size={22}/>
                <div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:18 }}>Envío gratis sobre $25.000</div>
                  <div style={{ fontSize:13, color:'var(--muted)', marginTop:2 }}>CABA & GBA, 24 hs hábiles.</div>
                </div>
              </div>
              <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                <Icon name="clock" size={22}/>
                <div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:18 }}>Coordiná tu franja</div>
                  <div style={{ fontSize:13, color:'var(--muted)', marginTop:2 }}>Mañana, tarde o noche, por WhatsApp.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="methods">
            {methods.map(m => (
              <div className="method" key={m.title}>
                <div className="method__head">
                  <div style={{ minHeight:28, display:'flex', alignItems:'center' }}>{renderIcon(m)}</div>
                  <span className="pill">{m.pill}</span>
                </div>
                <div>
                  <div className="method__title">{m.title}</div>
                  <div className="method__sub">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); };
  return (
    <section id="contacto" className="scroll-mt">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"/>Contacto</div>
            <h2 style={{ marginTop:18 }}>Charlemos <em>de carne</em>.</h2>
          </div>
          <p className="section-head__copy">
            ¿Pedido grande? ¿Restaurante? ¿Una consulta de cortes para el asado del sábado?
            Escribinos, te respondemos en horas hábiles.
          </p>
        </div>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={submit}>
            <div className="field"><label>Nombre</label><input required placeholder="Tu nombre" defaultValue=""/></div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              <div className="field"><label>Email</label><input required type="email" placeholder="vos@email.com"/></div>
              <div className="field"><label>Teléfono</label><input placeholder="+54 11 ..."/></div>
            </div>
            <div className="field">
              <label>Tipo de consulta</label>
              <select>
                <option>Pedido a domicilio</option>
                <option>Restaurante / mayorista</option>
                <option>Evento o asado</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="field"><label>Mensaje</label><textarea placeholder="Contanos qué necesitás..."/></div>
            <button className="btn btn--primary btn--lg" type="submit" style={{ justifySelf:'start' }}>
              {sent ? '✓ Recibido — te escribimos pronto' : 'Enviar mensaje'} <Icon name="arrow" size={16}/>
            </button>
          </form>
          <div className="contact-info">
            <h3>Casa central</h3>
            <dl>
              <div><dt>Dirección</dt><dd>Av. Boedo 1234<br/>C1239ABC · CABA</dd></div>
              <div><dt>Teléfono · WhatsApp</dt><dd>+54 11 4000 0000</dd></div>
              <div><dt>Horarios</dt><dd>Lun–Sáb · 8 a 21 hs<br/>Domingo · 9 a 14 hs</dd></div>
              <div><dt>Sucursales</dt><dd style={{ fontSize:14, fontFamily:'var(--sans)', color:'var(--ink-2)', lineHeight:1.7 }}>
                Boedo · Caballito · Palermo<br/>Vicente López · La Plata
              </dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="foot">
    <div className="wrap">
      <div>
        <div className="foot-brand">La <em>Ganadera</em></div>
        <p style={{ marginTop:18, fontSize:14, color:'rgba(255,255,255,.6)', maxWidth:'34ch', lineHeight:1.6 }}>
          Carnicerías premium en Buenos Aires desde 1972. Cuatro generaciones, un mismo oficio.
        </p>
      </div>
      <div>
        <h4>Tienda</h4>
        <ul>
          <li><a href="#productos">Catálogo</a></li>
          <li><a href="#mayoreo">Mayorista</a></li>
          <li><a href="#pago">Métodos de pago</a></li>
          <li><a href="#servicios">Envíos</a></li>
        </ul>
      </div>
      <div>
        <h4>Empresa</h4>
        <ul>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#">Sucursales</a></li>
          <li><a href="#">Trabajá con nosotros</a></li>
        </ul>
      </div>
      <div>
        <h4>Seguinos</h4>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">WhatsApp</a></li>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>
    </div>
    <div className="wrap foot-base">
      <span>© 2026 La Ganadera S.A. · Todos los derechos reservados</span>
      <span>Diseño & catálogo actualizado semanalmente</span>
    </div>
  </footer>
);

Object.assign(window, { Hero, ProductsSection, About, Services, Mayoreo, Payment, Contact, Footer });
