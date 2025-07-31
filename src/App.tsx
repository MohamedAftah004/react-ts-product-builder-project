import ProductCard from "./components/ProductCard";
import {productList} from "./data";

const App = () => {
  // Renders
  const renderProductList = productList.map((p) => (
    <ProductCard key={p.id} product={p} />
  ));

  return (
    <main className="container  ">
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
