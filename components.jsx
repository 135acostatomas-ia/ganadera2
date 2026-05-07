// Reusable components — Ganadera site

const { useState, useEffect, useRef, useMemo } = React;

// --- Icon set (SVG, line) ---
const Icon = ({ name, size = 18, stroke = 1.6 }) => {
  const paths = {
    cart: <><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M3 4h2.4l2.6 11.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.5L21 8H6"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    close: <><path d="M6 6l12 12M6 18L18 6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    arrowDown: <><path d="M12 5v14M6 13l6 6 6-6"/></>,
    check: <path d="M5 12.5l4.5 4.5L19 7"/>,
    star: <path d="M12 3l2.6 5.6L20.5 9.5l-4.4 4.1 1.1 5.9L12 16.8 6.8 19.5l1.1-5.9L3.5 9.5l5.9-.9L12 3z"/>,
    truck: <><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM7.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></>,
    package: <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10"/></>,
    shield: <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z"/>,
    flame: <path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4-.2 2 .8 3 2 3 0-3 1-5 1-8z"/>,
    chat: <path d="M5 5h14v10H9l-4 4V5z"/>,
    pin: <><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></>,
    phone: <path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    leaf: <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l8-8"/>,
    knife: <path d="M3 14l9-9 6 6-9 9H6l-3-3zM12 5l6 6"/>,
    search: <><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></>,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="0.6" fill="currentColor"/></>,
    whatsapp: <><path d="M5 19l1.4-4.2A7.5 7.5 0 1 1 9.5 18L5 19z"/><path d="M9 10c.5 2 2 3.5 4 4l1-1.4c.4-.6 1-.5 1.6 0l.8.6c.4.3.5.7.2 1.1-.5.7-1.4 1.2-2.4 1-2.6-.5-5.3-3.2-5.8-5.8-.2-1 .3-1.9 1-2.4.4-.3.8-.2 1.1.2l.6.8c.5.6.6 1.2 0 1.6L9 10z" fill="currentColor" stroke="none"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

// --- Logo (cow-in-oval, redrawn original) ---
const Logo = ({ size = 42 }) => (
  <svg viewBox="0 0 100 110" width={size} height={size * 1.1}>
    {/* Outer navy oval ring (open at bottom-left) */}
    <path d="M 30 100 A 42 50 0 1 1 28 12" fill="none" stroke="#1F3A8A" strokeWidth="6" strokeLinecap="round"/>
    {/* Red oval body */}
    <ellipse cx="48" cy="55" rx="32" ry="42" fill="#C8202E"/>
    {/* Cow silhouette negative-space (white) */}
    <path d="M30 30 Q34 22 40 22 L42 18 Q46 14 50 18 L52 22 Q60 22 64 30 L68 26 Q72 26 70 32 L66 36 Q70 44 66 52 L62 58 Q60 66 64 72 Q66 78 60 80 L52 82 Q44 82 40 78 L36 74 Q32 76 30 72 Q26 68 28 60 L26 52 Q22 44 28 38 Z" fill="#fbf7f0"/>
  </svg>
);

// --- Placeholder image with cut-name overlay (since user said placeholders) ---
const Placeholder = ({ label, c1, c2 }) => (
  <div className="card__img" style={{ '--c1': c1, '--c2': c2 }}>
    <div className="card__placeholder">
      <div style={{ fontSize: 9, opacity: .55, marginBottom: 6 }}>— foto —</div>
      <div style={{ fontSize: 11, opacity: .9 }}>{label}</div>
    </div>
  </div>
);

// --- Header / Nav ---
const Header = ({ cartCount, onCart, onMenu, menuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    { href: '#productos', label: 'Productos' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#mayoreo',   label: 'Mayoreo' },
    { href: '#pago',      label: 'Pago & Envío' },
    { href: '#contacto',  label: 'Contacto' },
  ];
  return (
    <header className="header" style={scrolled ? { borderBottomColor: 'var(--line-strong)' } : {}}>
      <div className="wrap header__inner">
        <a href="#top" className="brand">
          <span className="brand__mark"><Logo /></span>
          <span className="brand__name">La <em>Ganadera</em></span>
        </a>
        <nav className="nav">
          {items.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}
        </nav>
        <div className="header__cta">
          <a className="btn btn--ghost" href="#contacto">Reservar</a>
          <button className="cart-btn" onClick={onCart}>
            <Icon name="cart" size={16}/>
            <span>Carrito</span>
            {cartCount > 0 && <span className="dot">{cartCount}</span>}
          </button>
          <button className="menu-btn" onClick={onMenu} aria-label="Menú">
            <Icon name={menuOpen ? 'close' : 'menu'} size={18}/>
          </button>
        </div>
      </div>
      <div className={"mobile-menu " + (menuOpen ? 'open' : '')}>
        {items.map(i => <a key={i.href} href={i.href} onClick={onMenu}>{i.label}</a>)}
      </div>
    </header>
  );
};

// --- Product card ---
const ProductCard = ({ p, onOpen, onAdd }) => (
  <article className="card" onClick={() => onOpen(p)}>
    <div className="card__media">
      <Placeholder label={p.name + ' · ' + p.catLabel} c1={p.c1} c2={p.c2}/>
      {p.badge && <span className={"card__badge" + (p.badge === 'Oferta' ? ' card__badge--red' : '')}>{p.badge}</span>}
      <button className="card__add" onClick={(e) => { e.stopPropagation(); onAdd(p); }} aria-label="Agregar al carrito">
        <Icon name="plus" size={18}/>
      </button>
    </div>
    <div className="card__body">
      <div className="card__cat">{p.catLabel}</div>
      <h3 className="card__name">{p.name}</h3>
      <div className="card__row">
        <span className="card__price">{formatARS(p.price)} <span className="card__unit">/ {p.unit}</span></span>
      </div>
    </div>
  </article>
);

// --- Product modal ---
const ProductModal = ({ product, onClose, onAdd }) => {
  const [qty, setQty] = useState(1);
  useEffect(() => { setQty(1); }, [product]);
  const open = !!product;
  return (
    <>
      <div className={"modal-bg " + (open ? 'open' : '')} onClick={onClose}/>
      <div className="modal" style={{ pointerEvents: open ? 'auto' : 'none' }}>
        {product && (
          <div className="modal__panel" onClick={e => e.stopPropagation()}>
            <div className="modal__media" style={{ '--c1': product.c1, '--c2': product.c2 }}>
              <button className="modal__close" onClick={onClose}><Icon name="close" size={18}/></button>
              <div style={{ position:'absolute', left:24, bottom:24, color:'#fff', fontFamily:'var(--mono)', fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', opacity:.8 }}>
                {product.catLabel} · {product.cut}
              </div>
            </div>
            <div className="modal__body">
              <div className="modal__cat">{product.catLabel}</div>
              <h2 className="modal__title">{product.name}</h2>
              <div className="modal__price">{formatARS(product.price)} <small>por {product.unit}</small></div>
              <p className="modal__desc">{product.desc}</p>
              <dl className="spec"><dt>Origen</dt><dd>{product.origin}</dd></dl>
              <dl className="spec"><dt>Corte</dt><dd>{product.cut}</dd></dl>
              <dl className="spec"><dt>Peso aprox.</dt><dd>{product.weight}</dd></dl>
              <div className="modal__actions">
                <div className="qty">
                  <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <button className="btn btn--primary btn--lg" onClick={() => { onAdd(product, qty); onClose(); }}>
                  Agregar al carrito · {formatARS(product.price * qty)}
                </button>
              </div>
              <div style={{ marginTop:12, fontSize:12, color:'var(--muted)', display:'flex', gap:18, flexWrap:'wrap' }}>
                <span><Icon name="truck" size={14}/> Envío 24h CABA & GBA</span>
                <span><Icon name="shield" size={14}/> Cadena de frío garantizada</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// --- Cart drawer ---
const CartDrawer = ({ open, onClose, cart, onInc, onDec, onRemove }) => {
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = subtotal > 0 ? (subtotal > 25000 ? 0 : 1800) : 0;
  const total = subtotal + shipping;

  const sendToWhats = () => {
    const lines = cart.map(i => `• ${i.qty} × ${i.product.name}  —  ${formatARS(i.product.price * i.qty)}`);
    const msg =
      `*Pedido — La Ganadera*\n\n` +
      lines.join('\n') +
      `\n\nSubtotal: ${formatARS(subtotal)}` +
      `\nEnvío: ${shipping === 0 ? 'A coordinar / gratis' : formatARS(shipping)}` +
      `\n*Total: ${formatARS(total)}*\n\n` +
      `Hola, quisiera confirmar este pedido. Mis datos:\nNombre:\nDirección:\nMétodo de pago:`;
    const url = `https://wa.me/5491100000000?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className={"drawer-bg " + (open ? 'open' : '')} onClick={onClose}/>
      <aside className={"drawer " + (open ? 'open' : '')} aria-hidden={!open}>
        <div className="drawer__head">
          <h3>Tu carrito {cart.length > 0 && <span style={{ color:'var(--muted)', fontSize:14, fontFamily:'var(--mono)', marginLeft:8 }}>({cart.length})</span>}</h3>
          <button onClick={onClose} aria-label="Cerrar"><Icon name="close" size={20}/></button>
        </div>
        <div className="drawer__items">
          {cart.length === 0 && (
            <div className="drawer__empty">
              <span className="ic">∅</span>
              <p style={{ fontFamily:'var(--serif)', fontSize:22, color:'var(--ink)' }}>Tu carrito está vacío</p>
              <p style={{ marginTop:8, fontSize:14 }}>Sumá cortes desde el catálogo.</p>
            </div>
          )}
          {cart.map(i => (
            <div className="drawer__item" key={i.product.id}>
              <div className="drawer__thumb" style={{ '--c1': i.product.c1, '--c2': i.product.c2 }}/>
              <div>
                <div className="drawer__name">{i.product.name}</div>
                <div className="drawer__sub">{formatARS(i.product.price)} / {i.product.unit}</div>
                <div className="drawer__qty">
                  <button onClick={() => onDec(i.product.id)}>−</button>
                  <span>{i.qty}</span>
                  <button onClick={() => onInc(i.product.id)}>+</button>
                  <button className="drawer__remove" onClick={() => onRemove(i.product.id)} style={{ marginLeft:12 }}>Quitar</button>
                </div>
              </div>
              <div className="drawer__price">{formatARS(i.product.price * i.qty)}</div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="drawer__foot">
            <div className="drawer__row"><span>Subtotal</span><span>{formatARS(subtotal)}</span></div>
            <div className="drawer__row"><span>Envío</span><span>{shipping === 0 ? 'Gratis' : formatARS(shipping)}</span></div>
            <div className="drawer__row total"><span>Total</span><span className="num">{formatARS(total)}</span></div>
            <div className="drawer__cta">
              <button className="wsbtn" onClick={sendToWhats}>
                <Icon name="whatsapp" size={20} stroke={1.6}/> Confirmar por WhatsApp
              </button>
              <p style={{ fontSize:11, color:'var(--muted)', textAlign:'center', fontFamily:'var(--mono)', letterSpacing:'.05em', marginTop:4 }}>
                Te respondemos en minutos · Pago al recibir o transferencia
              </p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

// --- Toast ---
const Toast = ({ msg }) => (
  <div className={"toast " + (msg ? 'show' : '')}>
    <span className="dot"/>{msg}
  </div>
);

Object.assign(window, { Icon, Logo, Placeholder, Header, ProductCard, ProductModal, CartDrawer, Toast });
