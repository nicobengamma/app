const productos = [
  {
    id: "1",
    name: "samsung s21 FE",
    price: 450,
    category: "smartphones",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ph/sm-g990elvgphl/gallery/ph-galaxy-s21-fe-g990-sm-g990elvgphl-thumb-530598919",
    stock: 60,
    description: "its amazing smartphone",
  },
  {
    id: "2",
    name: "samsung s22",
    price: 550,
    category: "smartphones",
    img: "https://d500.epimg.net/cincodias/imagenes/2022/02/09/smartphones/1644422190_105239_1644433302_sumario_normal.jpg",
    stock: 80,
    description: "its amazing smartphone",
  },
  {
    id: "3",
    name: "samsung s22 plus",
    price: 650,
    category: "smartphones",
    img: "https://cdn.phonemore.com/content/2022/jpg/18013.jpg",
    stock: 40,
    description: "its a beautiful telephone",
  },
  {
    id: "4",
    name: "samsung s22 ultra",
    price: 900,
    category: "smartphones",
    img: "https://images.fravega.com/f300/d4a816336e4caa131e1c1204bee7cfbe.jpg.webp",
    stock: 20,
    description: "its a beautiful telephone",
  },
  {
    id: "5",
    name: "samsung z flip3",
    price: 1020,
    category: "smartphones",
    img: "https://tienda.movistar.com.ar/media/catalog/product/s/m/sm-f711_zflip3_openfront_phantomblack_4_1.png",
    stock: 15,
    description: "its a beautiful telephone",
  },
  {
    id: "6",
    name: "hp envy R9",
    price: 670,
    category: "notebooks",
    img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04836405.png",
    stock: 10,
    description: "its a beautiful notebook",
  },
  {
    id: "7",
    name: "asus rog strix gamer",
    price: 800,
    category: "notebooks",
    img: "https://www.samuraitech.com.uy/1307-large_default/notebook-gamer-asus-rog-strix-g-core-i7-50ghz-8gb-512gb-ssd-156-fhd-gtx-1650ti-4gb.jpg",
    stock: 15,
    description: "Pantalla Diagonal de la pantalla 39,6 cm (15.6) Resolución de la pantalla 1920 x 1080 Pixeles Tipo HD Full HD Tipo de pantalla IPS Procesador Familia de procesador AMD Ryzen 7 Modelo del procesador 4800H Frecuencia del procesador 2,9 GHz Frecuencia del procesador turbo 4,2 GHz Número de núcleos de procesador 8 Memoria interna 16 GB Memoria interna máxima 32 GB Tipo de memoria interna DDR4-SDRAM Velocidad de memoria del reloj 3200 MHz Forma de factor de memoria SO-DIMM Ranuras de memoria 2x SO-DIMM Capacidad total de almacenaje 512 GB Unidad de almacenamiento SSD Capacidad total de SSD 512 GB Número de unidades SSD instalados 1 Interfaces del SDD NVMe,PCI Express 3.0 Factor de forma de disco SSD M.2 Gráficos NVIDIA GeForce RTX 3050 Ti Capacidad memoria de adaptador gráfico 4 GB Tipo de memoria de gráficos discretos GDDR6",
  },
  {
    id: "8",
    name: "lenovo legion 5i gamer",
    price: 920,
    category: "notebooks",
    img: "https://www.lenovo.com/medias/lenovo-laptop-legion-5-15-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzA2MjM2fGltYWdlL3BuZ3xoOGUvaDI2LzE0MzMyNjk1MzE0NDYyLnBuZ3w0NTQ5M2UyMWNkNjIyYmEzNmI0MWM0YTU4MjM0YjcxZmZhNTAxZThiZWE2OTUwNDJjOTQ2MDI3NWY3YzA3NzNm",
    stock: 15,
    description: "Caracterisiticas: Processor AMD Ryzen 5 5600H (6C / 12T, 3.3 / 4.2GHz, 3MB L2 / 16MB L3) Graphics NVIDIA GeForce GTX 1650 4GB GDDR6 Chipset AMD SoC Platform Memory 2x 8GB SO-DIMM DDR4-3200 Memory Slots DDR4 SO-DIMM slots, dual-channel capable Max Memory Up to 16GB DDR4-3200 offering Storage 25 GB SSD M.2 2242 PCIe 3.0x4 NVMe + 1TB HDD Storage Support Up to two drives, 1x 2.5 HDD 1x M.2 SSD • 2.5 HDD up to 1TB • M.2 2242 SSD up to 512GB • M.2 2280 SSD up to 1TB",
  },
  {
    id: "9",
    name: "smart tv xiaomi mi tv 55' 4k",
    price: 420,
    category: "smartTv",
    img: "https://http2.mlstatic.com/D_NQ_NP_674955-MLA48939441770_012022-O.jpg",
    stock: 15,
    description: "Su resolución es 4K.Tecnología HDR para una calidad de imagen mejorada.Modo de sonido: Dolby Audio, DTS-HD.Manejalo por comando de voz.Tiene función Screen Share.Con Netflix, Prime Video.Google Assistant incorporado.Sistema operativo Android 10.Capacidad de almacenamiento de 16GB.Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB.Dimensiones: 1234.9mm de ancho, 724.6mm de alto, 89.2mm de profundidad.Entretenimiento y conectividad en un mismo lugar.",
  },
  {
    id: "10",
    name: "smart tv samsung tu7000 65' 4k",
    price: 700,
    category: "smartTv",
    img: "https://images.samsung.com/is/image/samsung/ar-uhd-tu7000-un65tu7000gczb-l-perspective--316414168?$720_576_PNG$",
    stock: 15,
    description: "Su resolución es 4K, Tecnología HDR para una calidad de imagen mejorada. Modo de sonido: Dolby Audio. Tiene función Screen Share. Con Web browser, Netflix, YouTube, Prime Video, Apple TV, Google Play Movies & TV, Samsung Promotion, Gallery. Sistema operativo Tizen. Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB. Con sistema de cables ocultos. Dimensiones: 144.94cm de ancho, 83.03cm de alto, 5.99cm de profundidad. Entretenimiento y conectividad en un mismo lugar.",
  },
  {
    id: "11",
    name: "smart tv lg oled 55' 4k",
    price: 800,
    category: "smartTv",
    img: "https://www.lg.com/cac/images/televisores/md07529735/gallery/D1.jpg",
    stock: 15,
    description: "Su resolución es 4K.Tecnología HDR para una calidad de imagen mejorada.Modo de sonido: Dolby Atmos, AI Acoustic Tuning, LG Sound Sync, Dolby Digital, Sound Alive, AI Sound, AI Sound Pro, Clear Voice, Sound Share, Sound Mode Sync, Clear Voice III, OLED Surround.Manejalo por comando de voz.Tiene función Screen Share.Con Gallery, Web browser, LG Channels, Music Player, Netflix, Apple TV, YouTube, LG Content Store, HBO Go, Spotify, Movistar Play, Zapping TV, Disney+.ThinQ AI, Google Assistant y Alexa incorporados.Control LG Magic Remote incluido.Sistema operativo webOS 6.0.Conectá tus dispositivos mediante sus 2 puertos USB.Dimensiones: 1228mm de ancho, 706mm de alto, 46.9mm de profundidad.Entretenimiento y conectividad en un mismo lugar.",
  },
];
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
export const getProductsById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.find(prod => prod.id === id));
    }, 500);
  });
};
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.filter(prod => prod.category === categoryId));
    }, 500);
  });
};
