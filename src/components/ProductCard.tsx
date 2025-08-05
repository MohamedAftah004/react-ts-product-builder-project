import Image from "./ui/Image";
import Button from "./ui/Button";
import type {IProduct} from "../interfaces";
import CircleItemColor from "./ui/CircleItemColor";
import {txtSlicer} from "../utils/function";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  setProductToEditIdx: (value: number) => void;
  idx: number;
  openEditModal: (product: IProduct) => void;
  onDelete: (id: string) => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  setProductToEditIdx,
  idx,
  openEditModal,
  onDelete,
}: IProps) => {
  const {title, description, imageURL, price, colors, category, id} = product;

  const onEdit = () => {
    setProductToEdit(product);
    setProductToEditIdx(idx);
    openEditModal(product);
  };

  return (
    <div className="flex flex-col rounded-2xl shadow-md overflow-hidden border border-gray-200 bg-white transition-all hover:shadow-xl duration-300 ease-in-out max-w-full">
      <div className="w-full aspect-[4/3] sm:aspect-video bg-gray-100 overflow-hidden">
        <Image
          imageUrl={imageURL}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-md md:text-md font-medium text-gray-700 truncate">
            {title}
          </h3>
          <p className="text-gray-500 text-sm md:text-base line-clamp-2">
            {txtSlicer(description)}
          </p>
        </div>

        {colors.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <CircleItemColor key={color} colorHash={color} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-base md:text-lg font-bold text-blue-600">
            ${price}
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden border">
            <Image
              imageUrl={category.imageURL}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <Button
            type="button"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm md:text-base"
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            type="button"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm md:text-base"
            onClick={() => onDelete(id!)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
