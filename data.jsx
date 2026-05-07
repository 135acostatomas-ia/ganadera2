// Product catalog — Spanish, butcher chain
const PRODUCTS = [
  // Vacuno
  { id: 'p01', name: 'Bife de Chorizo', cat: 'vacuno', catLabel: 'Vacuno', price: 8900, unit: 'kg', badge: 'Premium', c1:'#7a1812', c2:'#3b0c08', desc:'Corte clásico argentino, sabor intenso y jugoso. Madurado al vacío 21 días.', origin:'Pampa Húmeda', cut:'Lomo bajo', weight:'500–800 g promedio' },
  { id: 'p02', name: 'Ojo de Bife', cat: 'vacuno', catLabel: 'Vacuno', price: 9800, unit: 'kg', badge: 'Top venta', c1:'#8a1a14', c2:'#420f0a', desc:'Corte tierno con marmoleo abundante. Ideal a la parrilla, sellado y reposo.', origin:'Pampa Húmeda', cut:'Costilla', weight:'400–700 g' },
  { id: 'p03', name: 'Lomo', cat: 'vacuno', catLabel: 'Vacuno', price: 12500, unit: 'kg', badge: 'Premium', c1:'#5e120e', c2:'#26060a', desc:'El corte más tierno de la res. Magro, suave, perfecto para ocasiones especiales.', origin:'Selección', cut:'Lomo fino', weight:'1.2–1.8 kg' },
  { id: 'p04', name: 'Asado de Tira', cat: 'vacuno', catLabel: 'Vacuno', price: 6900, unit: 'kg', c1:'#6e1a14', c2:'#310a08', desc:'El clásico para el asado familiar. Costilla cortada en tiras de 4 cm.', origin:'Selección', cut:'Costillar', weight:'1.5–2 kg' },
  { id: 'p05', name: 'Vacío', cat: 'vacuno', catLabel: 'Vacuno', price: 7500, unit: 'kg', c1:'#7d1a13', c2:'#3a0c08', desc:'Corte sabroso con cubierta de grasa. Cocción lenta para máxima ternura.', origin:'Pampa Húmeda', cut:'Falda', weight:'1.8–2.5 kg' },
  { id: 'p06', name: 'Matambre', cat: 'vacuno', catLabel: 'Vacuno', price: 6500, unit: 'kg', c1:'#811a13', c2:'#3a0a07', desc:'Fino y versátil. Ideal relleno, a la pizza o a la parrilla.', origin:'Selección', cut:'Costillar superficial', weight:'1.5–2.2 kg' },

  // Cerdo
  { id: 'p07', name: 'Bondiola', cat: 'cerdo', catLabel: 'Cerdo', price: 5800, unit: 'kg', c1:'#a83830', c2:'#4d1612', desc:'Cuello de cerdo, jugoso y sabroso. Ideal al horno o brasa.', origin:'Granja certificada', cut:'Cuello', weight:'1.5–2 kg' },
  { id: 'p08', name: 'Costillar de Cerdo', cat: 'cerdo', catLabel: 'Cerdo', price: 4900, unit: 'kg', badge: 'Oferta', c1:'#9c2c25', c2:'#4d1410', desc:'Costillar entero, perfecto para el asado del fin de semana.', origin:'Granja certificada', cut:'Costillar', weight:'2–3 kg' },
  { id: 'p09', name: 'Pechito de Cerdo', cat: 'cerdo', catLabel: 'Cerdo', price: 5200, unit: 'kg', c1:'#b03830', c2:'#581814', desc:'Corte premium del costillar, con vetas de grasa que aportan sabor.', origin:'Selección', cut:'Costilla baja', weight:'1.2–1.8 kg' },

  // Pollo
  { id: 'p10', name: 'Pollo Entero', cat: 'pollo', catLabel: 'Pollo', price: 3200, unit: 'kg', c1:'#c8924a', c2:'#5e3a18', desc:'Pollo de campo, criado sin antibióticos. Listo para horno.', origin:'Granja libre', cut:'Entero', weight:'1.8–2.5 kg' },
  { id: 'p11', name: 'Pechuga Deshuesada', cat: 'pollo', catLabel: 'Pollo', price: 4500, unit: 'kg', badge: 'Top venta', c1:'#d4a05a', c2:'#664020', desc:'Pechuga sin hueso ni piel. Lista para cocinar.', origin:'Granja libre', cut:'Pechuga', weight:'400–600 g' },
  { id: 'p12', name: 'Muslos de Pollo', cat: 'pollo', catLabel: 'Pollo', price: 3500, unit: 'kg', c1:'#bb8a44', c2:'#553414', desc:'Pieza jugosa y económica. Excelente al horno o guisado.', origin:'Granja libre', cut:'Muslo', weight:'200–300 g c/u' },

  // Embutidos / Achuras
  { id: 'p13', name: 'Chorizo Parrillero', cat: 'embutidos', catLabel: 'Embutidos', price: 4200, unit: 'kg', badge: 'Casa', c1:'#7a2418', c2:'#330c08', desc:'Receta de la casa, elaborado diariamente. Mezcla de cerdo y vacuno.', origin:'Elaboración propia', cut:'Tripa natural', weight:'~120 g c/u' },
  { id: 'p14', name: 'Morcilla Vasca', cat: 'embutidos', catLabel: 'Embutidos', price: 3800, unit: 'kg', c1:'#3a1614', c2:'#0e0606', desc:'Morcilla cremosa con cebolla y especias. Receta tradicional.', origin:'Elaboración propia', cut:'Tripa natural', weight:'~100 g c/u' },
  { id: 'p15', name: 'Mollejas', cat: 'embutidos', catLabel: 'Achuras', price: 8200, unit: 'kg', badge: 'Premium', c1:'#a96a4a', c2:'#5a3018', desc:'La reina de las achuras. Limpia, lista para parrilla.', origin:'Selección', cut:'Glándula', weight:'400–600 g' },

  // Cordero
  { id: 'p16', name: 'Costillar de Cordero', cat: 'cordero', catLabel: 'Cordero', price: 11900, unit: 'kg', badge: 'Premium', c1:'#5e1a16', c2:'#240808', desc:'Cordero patagónico, criado en pasturas naturales.', origin:'Patagonia', cut:'Costillar', weight:'1.2–1.8 kg' },
  { id: 'p17', name: 'Pierna de Cordero', cat: 'cordero', catLabel: 'Cordero', price: 10800, unit: 'kg', c1:'#6a1c18', c2:'#2a0a08', desc:'Pieza ideal al horno con romero y ajo. Cordero de exportación.', origin:'Patagonia', cut:'Pierna', weight:'2–3 kg' },

  // Hamburguesas / preparados
  { id: 'p18', name: 'Hamburguesa Casera ×4', cat: 'preparados', catLabel: 'Preparados', price: 3600, unit: 'pack', c1:'#6e2218', c2:'#2a0a07', desc:'Medallones de carne 100% vacuna. Sin conservantes. 150g c/u.', origin:'Elaboración propia', cut:'Molida especial', weight:'600 g (4 unid.)' },
];

const CATEGORIES = [
  { id: 'all',        label: 'Todos' },
  { id: 'vacuno',     label: 'Vacuno' },
  { id: 'cerdo',      label: 'Cerdo' },
  { id: 'pollo',      label: 'Pollo' },
  { id: 'cordero',    label: 'Cordero' },
  { id: 'embutidos',  label: 'Embutidos · Achuras' },
  { id: 'preparados', label: 'Preparados' },
];

const formatARS = (n) => '$' + n.toLocaleString('es-AR');

window.PRODUCTS = PRODUCTS;
window.CATEGORIES = CATEGORIES;
window.formatARS = formatARS;
