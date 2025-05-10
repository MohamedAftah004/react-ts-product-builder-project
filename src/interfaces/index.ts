export interface IProduct {
  id?: string | undefined;
  title: string;
  colors: string[];
  description: string;
  imageURL: string;
  price: number;
  category: {
    name: string;
    imageURL: string;
  };
}
