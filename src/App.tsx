import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import {productList} from "./data";
import {useState, type ChangeEvent, type FormEvent} from "react";
import Input from "./components/ui/Input";
import type {IProduct} from "./interfaces";
import {productValidation} from "./validation";
import ErrrorMessage from "./components/ui/ErrrorMessage";
import {Description} from "@headlessui/react";

const App = () => {
  // ------------ STATE ------------

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

  const [product, setProduct] = useState<IProduct>(defaultProductObject);

  const [isOpen, setIsOpen] = useState(false);

  // error handler useState
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

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
    console.log("Send this data to out server");
  };

  const onCancel = () => {
    console.log("Canceled");
    setProduct(defaultProductObject);
  };

  const formInputsList = [
    {id: "title", label: "Product Title", name: "title"},
    {id: "description", label: "Product Description", name: "description"},
    {id: "imageUrl", label: "Product Image Url", name: "imageURL"},
    {id: "price", label: "Product Price", name: "price"},
  ];

  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-md font-medium text-orange-50"
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

  // Renders
  const renderProductList = productList.map((p) => (
    <ProductCard key={p.id} product={p} />
  ));

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
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
