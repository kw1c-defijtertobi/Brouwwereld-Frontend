export interface IProduct {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
}

export const products: IProduct[] = [
  {
    id: 0,
    name: "Hertog Jan",
    type: "Lentebock",
    image: "product1.png",
    price: 1.49,
  },
  {
    id: 1,
    name: "Hertog Jan",
    type: "Bockbier",
    image: "product2.png",
    price: 1.30,
  },
  {
    id: 2,
    name: "Hertog Jan",
    type: "Karakter",
    image: "product3.png",
    price: 1.49,
  },
  {
    id: 3,
    name: "Leffe",
    type: "Tripel-Tripel",
    image: "product4.png",
    price: 2.10,
  },
  {
    id: 4,
    name: "La Chouffe",
    type: "Blonde blond",
    image: "product5.png",
    price: 1.75,
  },
  {
    id: 5,
    name: "Apple Bandit",
    type: "Cider",
    image: "product6.png",
    price: 1.69,
  },
  {
    id: 6,
    name: "La Trappe",
    type: "Dubbel",
    image: "product7.png",
    price: 1.79,
  },
  {
    id: 7,
    name: "Texels",
    type: "Skuumkoppe",
    image: "product8.png",
    price: 1.99,
  },
]