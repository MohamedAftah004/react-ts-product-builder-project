import Image from "./ui/Image";
import Button from "./ui/Button";
import type {IProduct} from "../interfaces";
import CircleItemColor from "./ui/CircleItemColor";
import {txtSlicer} from "../utils/function";

interface IProps {
  product: IProduct;
}


const ProductCard = ({product}: IProps) => {
  const {title, description, imageURL, price, colors, category} = product;



  // ------------- RENDER ---------------
// render product color:
const renderProductColors = colors.map(color => 
      <CircleItemColor key={color} colorHash={color}/>)


  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto border rounded-xl p-4 shadow-sm flex flex-col bg-white">
      {/* Product Image */}
      <div className="w-full h-[200px] overflow-hidden rounded-md mb-3">
        <Image
          imageUrl={imageURL}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{txtSlicer(description)}</p>

      {/* Color Circles */}
      <div className="flex items-center gap-2 mb-4">
        {renderProductColors}
        
      </div>

      {/* Price & Category Icon */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-blue-600 font-bold text-lg">${price}</h3>

        <div className="w-10 h-10 rounded-full overflow-hidden border">
          <Image
            imageUrl={imageURL}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Action Buttons */}

      <div className="flex justify-between items-center gap-2 mt-auto">
        <Button type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex-1"
          onClick={() => alert("Edit Clicked Now!")}
        >
          Edit
        </Button>
        <Button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md flex-1">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
