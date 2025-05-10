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


export interface IFormInput{
  id:string ;
  name:string ;
  label:string ;
  type:string;
}