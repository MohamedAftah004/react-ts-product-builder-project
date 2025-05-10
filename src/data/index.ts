import type {IFormInput, IProduct} from "../interfaces";

export const productList: IProduct[] = [
  {
    id: "1",
    title: "Stylish Black T-Shirt",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00"],
    description: "Stylish black T-shirt with comfortable fabric.",
    imageURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 19.99,
    category: {
      name: "men's clothing",
      imageURL: "https://picsum.photos/id/109/4287/2392",
    },
  },
  {
    id: "2",
    title: "Elegant Gold-Plated Necklace",
    colors: ["#FFD700", "#C0C0C0", "#FF69B4", "#000000"],
    description: "Elegant gold-plated necklace with intricate design.",
    imageURL:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 168,
    category: {
      name: "jewelery",
      imageURL: "https://picsum.photos/id/137/4752/3168",
    },
  },
  {
    id: "3",
    title: "High-Performance Gaming Monitor",
    colors: ["#000000", "#808080", "#A9A9A9", "#1E90FF"],
    description: "High-performance gaming monitor with ultra-wide display.",
    imageURL: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    price: 999.99,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/168/1920/1280",
    },
  },
  {
    id: "4",
    title: "Women's 3-in-1 Snowboard Jacket",
    colors: ["#FF69B4", "#FFC0CB", "#FFFFFF", "#000000"],
    description: "Women's 3-in-1 snowboard jacket with removable hood.",
    imageURL: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    price: 56.99,
    category: {
      name: "women's clothing",
      imageURL: "https://picsum.photos/id/137/4752/3168",
    },
  },
  {
    id: "5",
    title: "White Gold Princess Ring",
    colors: ["#C0C0C0", "#FFD700", "#FFFFFF", "#FF0000"],
    description: "White gold plated princess ring with cubic zirconia.",
    imageURL:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    price: 9.99,
    category: {
      name: "jewelery",
      imageURL: "https://picsum.photos/id/170/2500/1667",
    },
  },
  {
    id: "6",
    title: "SanDisk SSD PLUS 1TB",
    colors: ["#000000", "#808080", "#A9A9A9", "#FFFFFF"],
    description:
      "SanDisk SSD PLUS 1TB Internal SSD with high-speed performance.",
    imageURL: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    price: 109,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/179/2048/1365",
    },
  },
  {
    id: "7",
    title: "WD 4TB Gaming Drive",
    colors: ["#000000", "#1E90FF", "#00CED1", "#FFFFFF"],
    description: "WD 4TB Gaming Drive compatible with PlayStation 4.",
    imageURL: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    price: 114,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/137/4752/3168",
    },
  },
  {
    id: "8",
    title: "Acer SB220Q Full HD Monitor",
    colors: ["#000000", "#FFFFFF", "#808080", "#A9A9A9"],
    description:
      "Acer SB220Q bi 21.5 inches Full HD monitor with ultra-thin design.",
    imageURL: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    price: 599,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/179/2048/1365",
    },
  },
  {
    id: "9",
    title: "Samsung 49' Curved LED Monitor",
    colors: ["#000000", "#1E90FF", "#A9A9A9", "#00CED1"],
    description: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor.",
    imageURL: "https://images.samsung.com/is/image/samsung/ca-c49hg90-lc49hg90dmnxza-black-69799355?$684_547_PNG$",
    price: 999.99,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/179/2048/1365",
    },
  },
  {
    id: "10",
    title: "Men's Cotton Jacket",
    colors: ["#A52A2A", "#8B4513", "#D2691E", "#FFFFFF"],
    description: "Men's cotton jacket with a comfortable fit.",
    imageURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55.99,
    category: {
      name: "men's clothing",
      imageURL: "https://picsum.photos/id/188/2896/1936",
    },
  },
  {
    id: "11",
    title: "Men's Slim Fit Jeans",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
    description: "Men's slim fit jeans with classic style.",
    imageURL: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 39.99,
    category: {
      name: "men's clothing",
      imageURL: "https://picsum.photos/id/116/3504/2336",
    },
  },
  {
    id: "12",
    title: "Women's Casual Floral Blouse",
    colors: ["#FF1493", "#FF69B4", "#FFC0CB", "#FFFFFF"],
    description: "Women's casual loose floral blouse.",
    imageURL: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    price: 29.99,
    category: {
      name: "women's clothing",
      imageURL: "https://picsum.photos/id/116/3504/2336",
    },
  },
  {
    id: "13",
    title: "Foldable Bluetooth Headphones",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00"],
    description: "Foldable Bluetooth headphones with deep bass.",
    imageURL: "https://picsum.photos/id/147/2448/2448",
    price: 49.99,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/188/2896/1936",
    },
  },
  {
    id: "14",
    title: "Silver-Plated Men's Bracelet",
    colors: ["#A9A9A9", "#FFD700", "#C0C0C0", "#000000"],
    description: "Silver-plated men's bracelet with minimalist design.",
    imageURL:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 22.5,
    category: {
      name: "jewelery",
      imageURL: "https://picsum.photos/id/147/2448/2448",
    },
  },
  {
    id: "15",
    title: "Professional DSLR Camera",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
    description: "Professional DSLR camera with 24MP sensor.",
    imageURL: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    price: 750,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/147/2448/2448",
    },
  },
  {
    id: "16",
    title: "Women's Knitted Cardigan",
    colors: ["#FF69B4", "#FFC0CB", "#FFFFFF", "#000000"],
    description: "Women's knitted cardigan with front pockets.",
    imageURL: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    price: 45.99,
    category: {
      name: "women's clothing",
      imageURL: "https://picsum.photos/id/147/2448/2448",
    },
  },
  {
    id: "17",
    title: "Gold-Plated Stud Earrings",
    colors: ["#FFD700", "#FFFFFF", "#FF0000", "#000000"],
    description: "Gold-plated stud earrings with pearls.",
    imageURL:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    price: 15.99,
    category: {
      name: "jewelery",
      imageURL: "https://picsum.photos/id/196/2048/1536",
    },
  },
  {
    id: "18",
    title: "Noise-Canceling Headphones",
    colors: ["#000000", "#1E90FF", "#00CED1", "#FFFFFF"],
    description: "Noise-canceling over-ear headphones.",
    imageURL: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    price: 199.99,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/196/2048/1536",
    },
  },
  {
    id: "19",
    title: "Compact Action Camera",
    colors: ["#000000", "#FFFFFF", "#A9A9A9", "#FF0000"],
    description: "Compact action camera with 4K video recording.",
    imageURL: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    price: 299.99,
    category: {
      name: "electronics",
      imageURL: "https://fakestoreapi.com/img/electronics-category.jpg",
    },
  },
  {
    id: "20",
    title: "Men's Leather Belt",
    colors: ["#A52A2A", "#8B4513", "#D2691E", "#FFFFFF"],
    description: "Men's leather belt with metal buckle.",
    imageURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 25.99,
    category: {
      name: "men's clothing",
      imageURL: "https://picsum.photos/id/200/1920/1280",
    },
  },

  {
    id: "20",
    title: "Men's Leather Belt",
    colors: ["#A52A2A", "#8B4513", "#D2691E", "#FFFFFF"],
    description: "Men's leather belt with metal buckle.",
    imageURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 25.99,
    category: {
      name: "men's clothing",
      imageURL: "https://fakestoreapi.com/img/men-category.jpg",
    },
  },
  {
    id: "21",
    title: "Men's Classic Watch",
    colors: ["#000000", "#FFFFFF", "#FFD700", "#C0C0C0"],
    description: "Men's classic wristwatch with leather strap.",
    imageURL:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 149.99,
    category: {
      name: "jewelery",
      imageURL: "https://fakestoreapi.com/img/jewelery-category.jpg",
    },
  },
  {
    id: "22",
    title: "Wireless Bluetooth Speaker",
    colors: ["#000000", "#1E90FF", "#FF0000", "#FFFFFF"],
    description: "Portable wireless Bluetooth speaker with rich bass.",
    imageURL: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    price: 89.99,
    category: {
      name: "electronics",
      imageURL: "https://fakestoreapi.com/img/electronics-category.jpg",
    },
  },
  {
    id: "23",
    title: "Women's Elegant Handbag",
    colors: ["#FFC0CB", "#FF69B4", "#FFFFFF", "#000000"],
    description: "Women's elegant handbag with spacious interior.",
    imageURL: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    price: 75.5,
    category: {
      name: "women's clothing",
      imageURL: "https://fakestoreapi.com/img/women-category.jpg",
    },
  },
  {
    id: "24",
    title: "Men's Running Shoes",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00"],
    description: "Men's lightweight running shoes with cushioned sole.",
    imageURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 65.99,
    category: {
      name: "men's clothing",
      imageURL: "https://fakestoreapi.com/img/men-category.jpg",
    },
  },
  {
    id: "25",
    title: "Gold Hoop Earrings",
    colors: ["#FFD700", "#C0C0C0", "#FFFFFF", "#000000"],
    description: "Gold hoop earrings with polished finish.",
    imageURL:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    price: 19.99,
    category: {
      name: "jewelery",
      imageURL: "https://fakestoreapi.com/img/jewelery-category.jpg",
    },
  },
  {
    id: "26",
    title: "Smart Fitness Band",
    colors: ["#000000", "#1E90FF", "#FF0000", "#FFFFFF"],
    description: "Smart fitness band with heart rate monitor.",
    imageURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 49.99,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/116/3504/2336",
    },
  },
  {
    id: "27",
    title: "Women's Summer Dress",
    colors: ["#FF69B4", "#FFC0CB", "#FFFFFF", "#000000"],
    description: "Women's summer dress with floral pattern.",
    imageURL: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    price: 34.99,
    category: {
      name: "women's clothing",
      imageURL: "https://picsum.photos/id/116/3504/2336",
    },
  },
  {
    id: "28",
    title: "Men's Casual Sneakers",
    colors: ["#000000", "#FFFFFF", "#1E90FF", "#FF0000"],
    description: "Men's casual sneakers for everyday wear.",
    imageURL: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 59.99,
    category: {
      name: "men's clothing",
      imageURL: "https://picsum.photos/id/131/4698/3166",
    },
  },
  {
    id: "29",
    title: "Pearl Pendant Necklace",
    colors: ["#FFFFFF", "#C0C0C0", "#FFD700", "#000000"],
    description: "Elegant pearl pendant necklace with silver chain.",
    imageURL:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 35.5,
    category: {
      name: "jewelery",
      imageURL: "https://picsum.photos/id/131/4698/3166",
    },
  },
  {
    id: "30",
    title: "Noise-Isolating Earbuds",
    colors: ["#000000", "#1E90FF", "#FFFFFF", "#FF0000"],
    description: "Noise-isolating in-ear earbuds with mic.",
    imageURL: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    price: 29.99,
    category: {
      name: "electronics",
      imageURL: "https://picsum.photos/id/131/4698/3166",
    },
  },
];


export const formInputsList:IFormInput[] = [
  {
    id: "title" ,
    name:"title"  , 
    label: "Product Title",
    type: "text",
  },
  {
    id: "description" ,
    name:"description"  , 
    label: "Product Description",
    type: "text",
  },
  {
    id: "image" ,
    name:"imageURL"  , 
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price" ,
    name:"price"  , 
    label: "Product Price",
    type: "text",
  },
  
];