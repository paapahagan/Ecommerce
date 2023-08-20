import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

function Home() {
  // get product from product context
  const { products } = useContext(ProductContext);

  //get only men's and women's category

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <section className=" py-16">
        <div className=" container mx-auto p-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* map through the array of items */}
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
