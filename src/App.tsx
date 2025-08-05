import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import {categories, Colors, productList} from "./data";
import Button from "./components/ui/Button";
import {useState, type ChangeEvent, type FormEvent} from "react";
import Input from "./components/ui/Input";
import type {IProduct} from "./interfaces";
import {productValidation} from "./validation";
import ErrrorMessage from "./components/ui/ErrrorMessage";
import CircleItemColor from "./components/ui/CircleItemColor";
import {v4 as uuidv4} from "uuid";
import {Select} from "./components/ui/Select";
import type {ICategory} from "./interfaces/index";
import ConfirmModal from "./components/ui/ConfirmModal";

const App = () => {
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      id: "", // ← أضف دي
      name: "",
      imageURL: "",
    },
  };

  // ------------ STATE ------------
  const [products, setProducts] = useState<IProduct[]>(productList);
  //  for adding new
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [isOpen, setIsOpen] = useState(false);
  // for edit
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObject);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories["0"]);
  const [productIdToDelete, setProductIdToDelete] = useState<string | null>(
    null
  );

  // ------------ HANDLER ------------
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const openEditModal = (product: IProduct) => {
    setTempColors(product.colors); // ✅ تحميل الألوان
    setSelectedCategory(product.category); // ✅ تحميل الكاتيجوري (لو حبيت)
    setIsOpenEditModal(true);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
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

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const deleteProductHandler = (id: string) => {
    setProductIdToDelete(id); // ← بدلاً من الحذف المباشر
  };

  // const deleteProductHandler = (id: string) => {
  //   setProducts((prev) => prev.filter((p) => p.id !== id));
  // };

  // Validations

  // Submit and cancel
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price,
      colors: tempColors,
    });
    const hasErrorMessage =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMessage) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuidv4(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    onCancel();
  };

  // داخل submitEditHandler:
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const errors = productValidation({
      title: productToEdit.title,
      description: productToEdit.description,
      imageURL: productToEdit.imageURL,
      price: productToEdit.price,
      colors: tempColors,
    });

    const hasErrorMessage =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMessage) {
      setErrors(errors);
      return;
    }

    setProducts((prev) =>
      prev.map((item, idx) =>
        idx === productToEditIdx
          ? {
              ...productToEdit,
              colors: tempColors,
              category: selectedCategory,
            }
          : item
      )
    );

    onCancelEdit();
  };

  const onCancel = () => {
    setProduct(defaultProductObject);
    setTempColors([]);
    setSelectedCategory(categories["0"]);
    close();
  };

  const onCancelEdit = () => {
    setProductToEdit(defaultProductObject);
    setTempColors([]);
    setSelectedCategory(categories[0]);
    closeEditModal(); // ✅ الصح
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
        value={String(product[input.name as keyof IProduct] ?? "")}
        onChange={onChangeHandler}
      />
      <ErrrorMessage msg={errors[input.name]} />
    </div>
  ));

  // داخل renderProductList:
  const renderProductList = products.map((p, idx) => (
    <ProductCard
      key={p.id}
      product={p}
      setProductToEdit={setProductToEdit}
      setProductToEditIdx={setProductToEditIdx}
      idx={idx}
      openEditModal={openEditModal}
      onDelete={deleteProductHandler} // ✅ أضف السطر ده
    />
  ));

  const renderProductColors = Colors.map((color) => (
    <CircleItemColor
      colorHash={color}
      onClick={() => {
        if (tempColors.includes(color))
          setTempColors((prev) => prev.filter((item) => item !== color));
        else setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: keyof IProduct
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-md font-light text-gray-900"
        ></label>
        {/* Here Is The Error Should Solved          :) */}
        <Input
          type="text"
          id={id}
          name={name}
          value={String(productToEdit[name])}
          onChange={onChangeEditHandler}
        />

        <ErrrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container  ">
      <div className="flex p-8 md:w-1/2 m-auto lg:w-1/3 xl:w-1/4">
        <Button
          className="bg-indigo-600 text-white px-4 hover:bg-indigo-500  rounded-md flex-1 content-center"
          onClick={() => {
            open();
          }}
        >
          Build Product
        </Button>
      </div>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      {/* Add Product Modal */}
      <Modal isOpen={isOpen} close={close} title="Add New Product">
        {/* list of inputs */}
        <form className="flex-col space-y-6" onSubmit={submitHandler}>
          <div className="flex flex-col items-stretch space-y-2">
            {renderFormInputList}
            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <div className="flex item-center flex-wrap space-x-1   ">
              {renderProductColors}
            </div>
            <ErrrorMessage msg={errors.colors} />
            <div
              className="flex flex-item-center space-x-1 flex-wrap "
              style={{}}
            >
              {tempColors.map((color) => (
                <span
                  className="p-1 mr-1 mt-2 mb-1 border border-black text-xs rounded-md text-white"
                  key={color}
                  style={{backgroundColor: color}}
                >
                  {color}
                </span>
              ))}
            </div>
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

      {/* Edit Product Modal */}
      <Modal
        isOpen={isOpenEditModal}
        close={closeEditModal}
        title="Edit Product"
      >
        {/* list of inputs */}
        <form className="flex-col space-y-6" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "product title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "product description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "product imageURL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "product price", "price")}
          <div className="flex flex-col items-stretch space-y-2">
            {/* <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            /> */}
            <div className="flex item-center flex-wrap space-x-1   ">
              {renderProductColors}
            </div>
            <ErrrorMessage msg={errors.colors} />
            <div
              className="flex flex-item-center space-x-1 flex-wrap "
              style={{}}
            >
              {tempColors.map((color) => (
                <span
                  className="p-1 mr-1 mt-2 mb-1 border border-black text-xs rounded-md text-white"
                  key={color}
                  style={{backgroundColor: color}}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-green-700 text-white px-4 hover:bg-green-800 py-2  rounded-md flex-1">
              Submit
            </Button>
            <Button
              type="button"
              className="bg-slate-400 text-white px-4 hover:bg-slate-500 py-2 rounded-md flex-1"
              onClick={closeEditModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmModal
        isOpen={!!productIdToDelete}
        onCancel={() => setProductIdToDelete(null)}
        onConfirm={() => {
          if (productIdToDelete) {
            setProducts((prev) =>
              prev.filter((p) => p.id !== productIdToDelete)
            );
            setProductIdToDelete(null);
          }
        }}
        message="Are you sure you want to delete this product from your store? "
      />
    </main>
  );
};

export default App;
