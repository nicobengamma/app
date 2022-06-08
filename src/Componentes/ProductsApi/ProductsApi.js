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
    description: "its a beautiful notebooks",
  },
  {
    id: "8",
    name: "lenovo legion 5i gamer",
    price: 920,
    category: "notebooks",
    img: "https://www.lenovo.com/medias/lenovo-laptop-legion-5-15-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzA2MjM2fGltYWdlL3BuZ3xoOGUvaDI2LzE0MzMyNjk1MzE0NDYyLnBuZ3w0NTQ5M2UyMWNkNjIyYmEzNmI0MWM0YTU4MjM0YjcxZmZhNTAxZThiZWE2OTUwNDJjOTQ2MDI3NWY3YzA3NzNm",
    stock: 15,
    description: "its a beautiful notebooks",
  },
  {
    id: "9",
    name: "smart tv xiaomi mi tv 55' 4k",
    price: 420,
    category: "smartTv",
    img: "https://http2.mlstatic.com/D_NQ_NP_674955-MLA48939441770_012022-O.jpg",
    stock: 15,
    description: "its a beautiful tv",
  },
  {
    id: "10",
    name: "smart tv samsung tu7000 65' 4k",
    price: 700,
    category: "smartTv",
    img: "https://images.samsung.com/is/image/samsung/ar-uhd-tu7000-un65tu7000gczb-l-perspective--316414168?$720_576_PNG$",
    stock: 15,
    description: "its a beautiful tv",
  },
  {
    id: "11",
    name: "smart tv lg oled 55' 4k",
    price: 800,
    category: "smartTv",
    img: "https://www.lg.com/cac/images/televisores/md07529735/gallery/D1.jpg",
    stock: 15,
    description: "its a beautiful tv",
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
