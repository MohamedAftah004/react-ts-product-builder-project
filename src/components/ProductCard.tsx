import Image from "./Image";
import Button from "./ui/Button";
import type {IProduct} from "../interfaces";
import { txtSlicer } from "../util/functions";


// interfaces
interface IProps {
  product: IProduct;
}


export const ProductCard = ({product}: IProps) => {
  // const {title , description , imageURL , price , category} = product; 
  // EXECUTION PROJECT START FROM HERE
  return (
    <div className="mx-0 max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL={product.imageURL}
        alt={"Product name"}
        className = "rounded-md mb-2 h-52 w-full lg:object-cover"
      />

      <h3> {product.title}</h3>
      <p className="h-12">
        {txtSlicer(product.description, 50)}
      </p>
     

  {/* Product Color Circles */}
    <div className="flex items-center my-4 space-x-2">
    <span className="w-5 h-5 bg-emerald-500 rounded-full cursor-pointer "/>
    <span className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer"/>
    <span className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer"/>
    </div>



      <div className="flex items-center justify-between">
        <span>{product.price}$</span>

        <img
          src={product.category.imageURL}
          alt={product.category.name}
          className="w-10 h-10 rounded-full"
        />
      </div>


    {/* Buttons */}
      <div className="flex items-center justify-between space-x-2 my-5">
        <button
          type="button"
          className="bg-indigo-700 text-white rounded-md w-full  h-10"
        >
          Edit
        </button>

        <button
          type="button"
          className="bg-red-700 text-white rounded-md w-full h-10"
        >
          Destroy
        </button>
      </div>
    </div>
  );
};
