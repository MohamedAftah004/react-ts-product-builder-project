import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import {Colors, productList} from "./data";
import {useState, type ChangeEvent, type FormEvent} from "react";
import Input from "./components/ui/Input";
import type {IProduct} from "./interfaces";
import {productValidation} from "./validation";
import ErrrorMessage from "./components/ui/ErrrorMessage";
import CircleItemColor from "./components/ui/CircleItemColor";
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };



  
  // ------------ STATE ------------
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObject);

  const [isOpen, setIsOpen] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  const [tempColors, setTempColors] = useState<string[]>([]);





  // ------------ HANDLER ------------
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validations

  // Submit and cancel
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price,
    });
    const hasErrorMessage =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMessage) {
      setErrors(errors);
      return;
    }

  
  setProducts(prev => [
    { ...product, id: uuidv4(), colors: tempColors },
    ...prev
  ]
  );

  onCancel();

  };

  const onCancel = () => {
    setProduct(defaultProductObject);
    setTempColors([]);
    close();
  };

  const formInputsList = [
    {id: "title", label: "Product Title", name: "title"},
    {id: "description", label: "Product Description", name: "description"},
    {id: "imageUrl", label: "Product Image Url", name: "imageURL"},
    {id: "price", label: "Product Price", name: "price"},
  ];

  // print selected color on console


  // ------------- RENDERS -------------

  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-md font-light text-gray-900"
      >
        {input.label}
      </label>
      {/* Here Is The Error Should Solved          :) */}
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name as keyof IProduct] as string}
        onChange={onChangeHandler}
      />
      <ErrrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductList = products.map((p) => (
    <ProductCard key={p.id} product={p} />
  ));

    const renderProductColors = Colors.map(color => 
      <CircleItemColor colorHash={color} onClick={()=>{
        if(tempColors.includes(color))
          setTempColors(prev =>prev.filter(item=>item !== color))
        else
          setTempColors((prev)=>[...prev,color])
      }}/>)


  return (
    <main className="container  ">
      <Button
        className="bg-slate-400 text-white px-4 hover:bg-slate-500 py-2 rounded-md flex-1"
        onClick={() => {
          open();
        }}
      >
        Add
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} close={close} title="Add New Product">
        {/* list of inputs */}
        <form className="flex-col space-y-6" onSubmit={submitHandler}>
          <div className="flex flex-col items-stretch space-y-2">
            {renderFormInputList}
            <div className="flex item-center flex-wrap space-x-1   ">{renderProductColors}</div>
            
            <div className="flex flex-item-center space-x-1 flex-wrap "
            style={{}}
            >
              {tempColors.map(color=>(
                <span className="p-1 mr-1 mt-2 mb-1 border border-black text-xs rounded-md text-white"
                  key={color}  style={{backgroundColor:color}}  >{color}</span>
              ))}</div>
              </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-green-700 text-white px-4 hover:bg-green-800 py-2  rounded-md flex-1">
              Submit
            </Button>
            <Button
              type="button"
              className="bg-slate-400 text-white px-4 hover:bg-slate-500 py-2 rounded-md flex-1"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
     
    </main>
  );
};

export default App;
