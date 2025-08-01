import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import {productList} from "./data";
import {useState} from "react";
import Input from "./components/ui/input";

const App = () => {
  // ------------ STATE ------------
  const [isOpen, setIsOpen] = useState(false);

  // ------------ HANDLER ------------
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const formInputsList = [
    {id: "name", label: "Name", name: "name"},
    {id: "price", label: "Price", name: "price"},
    {id: "description", label: "Description", name: "description"},
  ];

  const renderFormInputList = formInputsList.map((input) => (
    <div>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-md font-medium text-orange-50"
      >
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} />
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
        <form className="flex-col space-y-6">
          <div className="flex flex-col items-stretch space-y-2">
            {renderFormInputList}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-green-700 text-white px-4 hover:bg-green-800 py-2  rounded-md flex-1">
              Submit
            </Button>
            <Button
              className="bg-slate-400 text-white px-4 hover:bg-slate-500 py-2 rounded-md flex-1"
              onClick={() => {
                close();
              }}
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
