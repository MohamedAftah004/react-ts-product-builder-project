import { useState } from "react";
import {ProductCard} from "./components/ProductCard";
import {productList} from "./data";
import Modal from "./components/ui/Modal";
import { Button } from "@headlessui/react";

const App = () => {
 
 
  // STATE
  const [isOpen, setIsOpen] = useState(false)

  // HANDLER
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }



  //Render product list
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />);


  
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
      <div className="flex items-center ">
        {/* Submit */}
      <Button className="bg-yellow-500 w-full h-10 rounded-md  m-1 hover:bg-slate-300"
      onClick={()=>{close();}}
      >Submit</Button>  
        {/* Cancel */}
      <Button className="bg-emerald-500 w-full h-10 rounded-md m-1 hover:bg-sky-300"
      onClick={()=>{close();}}
      >Cancel</Button>  
      </div>
     </Modal>


  {/* <Button onClick={openModal} className="bg-blue-500">Open Modal</Button>

  <Modal isOpen={isOpen} close={close} title="My Modal">
    <Button onClick={close} className="bg-green-500">Submit</Button>
  </Modal> */}
</main>
  );
};

export default App;






