import type {ICategory, IProduct} from "../interfaces";
export const productList: IProduct[] = [
  {
    id: "1",
    title: "Camaro LSX by Reggie Jackson",
    description: "Chevrolet - 1969",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/2933/chevrolet-camaro-lsx-by-reggie-jackson-1969-247866.jpg",
    price: "45000",
    colors: ["#FF0000", "#000000", "#FFFF00"],
    category: {
      name: "Classic",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "2",
    title: "Silverado Midnight Edition",
    description: "Chevrolet - 2015",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/14737/chevrolet-silverado-midnight-edition-2015-422827.jpg",
    price: "52000",
    colors: ["#000000", "#808080", "#A52A2A"],
    category: {
      name: "Pickup",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "3",
    title: "Corvette (C6) Z06",
    description: "Chevrolet - 2013",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/11067/chevrolet-corvette-c6-z06-2013-354507.jpg",
    price: "61000",
    colors: ["#FFFF00", "#000000", "#00FF00"],
    category: {
      name: "Sport",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "4",
    title: "Corvette (C4) Grand Sport",
    description: "Chevrolet - 1996",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/21033/chevrolet-corvette-c4-grand-sport-1996-759065.jpg",
    price: "39000",
    colors: ["#0000FF", "#FFFFFF", "#ADD8E6"],
    category: {
      name: "Sport",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "5",
    title: "Corvette C6 convertible",
    description: "Chevrolet - 2005",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/618/chevrolet-corvette-c6-convertible-2005-486695.jpg",
    price: "43000",
    colors: ["#000000", "#808080", "#FFD700"],
    category: {
      name: "Convertible",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "6",
    title: "Malibu LTZ - China version",
    description: "Chevrolet - 2011",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/7959/chevrolet-malibu-ltz-china-version-2011-302956.jpg",
    price: "27000",
    colors: ["#FFFFFF", "#808080", "#00FFFF"],
    category: {
      name: "Sedan",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "7",
    title: "Corvette (C7) Stingray by Hennessey",
    description: "Chevrolet - 2014",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/13541/chevrolet-corvette-c7-stingray-by-hennessey-2014-396210.jpg",
    price: "67000",
    colors: ["#000000", "#FF0000", "#800080"],
    category: {
      name: "Sport",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "8",
    title: "Trax Red Line Series concept",
    description: "Chevrolet - 2015",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/15165/chevrolet-trax-red-line-series-concept-2015-438147.jpg",
    price: "31000",
    colors: ["#808080", "#ADD8E6", "#AFA1CB"],
    category: {
      name: "Crossover",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "9",
    title: "Corvette (C7) Stingray",
    description: "Chevrolet - 2013",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/12123/chevrolet-corvette-c7-stingray-2013-388938.jpg",
    price: "64000",
    colors: ["#0000FF", "#FF0000", "#000000", "#F000BA"],
    category: {
      name: "Sport",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
  {
    id: "10",
    title: "Corvette (C7) Stingray convertible",
    description: "Chevrolet - 2013",
    imageURL:
      "https://www.mad4wheels.com/img/free-car-images/mobile/12453/chevrolet-corvette-c7-stingray-convertible-2013-377107.jpg",
    price: "66000",
    colors: ["#FF0000", "#FFFFFF", "#FFD700"],
    category: {
      name: "Convertible",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
  },
];

export const Colors = [
  "#000000", // Black
  "#FF0000", // Red
  "#00FF00", // Lime
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FFA500", // Orange
  "#800080", // Purple
  "#00FFFF", // Cyan / Aqua
  "#FFC0CB", // Pink
  "#AFA1CB", // Pink
  "#F000BA", // Pink
  "#808080", // Gray
  "#008000", // Green
  "#A52A2A", // Brown
  "#ADD8E6", // Light Blue
  "#FFD700", // Gold
];

export const categories: ICategory[] = [
  {
    id: "1",
    name: "Sedan",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "2",
    name: "Hatchback",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "3",
    name: "SUV",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "4",
    name: "Pickup",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "5",
    name: "Coupe",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "6",
    name: "Crossover",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "7",
    name: "Minivan",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "8",
    name: "Convertible",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "9",
    name: "Sport",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
  {
    id: "10",
    name: "Classic",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
  },
];
