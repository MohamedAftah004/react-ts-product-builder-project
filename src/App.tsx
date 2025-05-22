import { useState, type ChangeEvent } from "react";
import {ProductCard} from "./components/ProductCard";
import {formInputsList, productList} from "./data";
import Modal from "./components/ui/Modal";
import { Button, Input } from "@headlessui/react";
import type { IProduct } from "./interfaces";

const App = () => {
 

  // STATE

  const [product,setProduct] = useState<IProduct>({
      id: "",
      title: "",
      colors:[],
      description:"",
      imageURL:"",
      price:"",
      category:{
        name : "",
        imageURL:""
      }
  })

  const [isOpen, setIsOpen] = useState(false)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {}

  // HANDLER
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }



  //-----------------RENDER-----------------
      //Rendering ProductList[]
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />);
      //Rendering Input []  
  const renderFormInputList = formInputsList.map(input => 
    <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700" >{input.label}</label>
      <Input id={input.id} type={input.type} name={input.name} className="h-11 p-2 rounded-md " />
    {/* <Input type="text" id={input. id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/> */}
    </div>
  );


  
  return (
  // Container
  <main className="container xl:p-4  m-auto">

    {/* Add New Product Button */}
  <Button className="bg-yellow-500 w-full h-10 rounded-md  m-1 hover:bg-slate-300"
  onClick={()=>{
    open();
  }}
  >Add New Product</Button>  

  <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 rounded-md">
    {renderProductList}
  </div>

    

    <Modal isOpen={isOpen} close={close} title="Add New Product">
     
     <form className="space-y-3">
     {renderFormInputList}
      <div className="flex items-center ">
        {/* Submit */}
      <Button className="bg-indigo-600 text-white w-full h-10 rounded-md  m-1 hover:bg-indigo-500"
      onClick={()=>{close();}}
      >Submit</Button>  
        {/* Cancel */}
      <Button className="bg-gray-500 text-white w-full h-10 rounded-md m-1 hover:bg-gray-400"
      onClick={()=>{close();}}
      >Cancel</Button>  
      </div>
      </form>
     </Modal>


  {/* <Button onClick={openModal} className="bg-blue-500">Open Modal</Button>

  <Modal isOpen={isOpen} close={close} title="My Modal">
    <Button onClick={close} className="bg-green-500">Submit</Button>
  </Modal> */}
</main>
  );
};

export default App;






