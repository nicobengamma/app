const productos = [
  {
    id: "1",
    name: "samsung s21 FE",
    price: 450,
    category: "smartphone",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ph/sm-g990elvgphl/gallery/ph-galaxy-s21-fe-g990-sm-g990elvgphl-thumb-530598919",
    stock: 60,
    description: "its amazing smartphone",
  },
  {
    id: "2",
    name: "samsung s22",
    price: 550,
    category: "smartphone",
    img: "https://d500.epimg.net/cincodias/imagenes/2022/02/09/smartphones/1644422190_105239_1644433302_sumario_normal.jpg",
    stock: 80,
    description: "its amazing smartphone",
  },
  {
    id: "3",
    name: "samsung s22 plus",
    price: 650,
    category: "smartphone",
    img: "https://cdn.phonemore.com/content/2022/jpg/18013.jpg",
    stock: 40,
    description: "its a beautiful telephone",
  },
  {
    id: "4",
    name: "samsung s22 ultra",
    price: 900,
    category: "smartphone",
    img: "https://images.fravega.com/f300/d4a816336e4caa131e1c1204bee7cfbe.jpg.webp",
    stock: 20,
    description: "its a beautiful telephone",
  },
  {
    id: "5",
    name: "samsung z flip3",
    price: 1020,
    category: "smartphone",
    img: "https://tienda.movistar.com.ar/media/catalog/product/s/m/sm-f711_zflip3_openfront_phantomblack_4_1.png",
    stock: 15,
    description: "its a beautiful telephone",
  },
];
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
