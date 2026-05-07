// Main App
const { useState, useEffect, useCallback } = React;

function App() {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState('');

  // restore from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('ganadera_cart') || '[]');
      if (Array.isArray(saved)) {
        const hydrated = saved.map(s => ({ qty: s.qty, product: PRODUCTS.find(p => p.id === s.id) })).filter(i => i.product);
        setCart(hydrated);
      }
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem('ganadera_cart', JSON.stringify(cart.map(i => ({ id: i.product.id, qty: i.qty }))));
  }, [cart]);

  const showToast = (m) => { setToast(m); clearTimeout(window.__t); window.__t = setTimeout(() => setToast(''), 2200); };

  const addToCart = useCallback((product, qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { product, qty }];
    });
    showToast(`Agregado: ${product.name}`);
  }, []);

  const inc = (id) => setCart(prev => prev.map(i => i.product.id === id ? { ...i, qty: i.qty + 1 } : i));
  const dec = (id) => setCart(prev => prev.map(i => i.product.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
  const remove = (id) => setCart(prev => prev.filter(i => i.product.id !== id));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const goShop = () => {
    const el = document.getElementById('productos');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        cartCount={cartCount}
        onCart={() => setDrawerOpen(true)}
        onMenu={() => setMenuOpen(o => !o)}
        menuOpen={menuOpen}
      />
      <main>
        <Hero onShop={goShop}/>
        <ProductsSection onOpen={setModalProduct} onAdd={addToCart}/>
        <About/>
        <Services/>
        <Mayoreo/>
        <Payment/>
        <Contact/>
      </main>
      <Footer/>
      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} onAdd={addToCart}/>
      <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        onInc={inc} onDec={dec} onRemove={remove}
      />
      <Toast msg={toast}/>
    </>
  );
}

// I noted the system rule against scrollIntoView; use window.scrollTo instead
const _origGo = App;
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
