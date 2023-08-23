import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function ProductDetails() {
  // get product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get a signle item based on the id
  const product = products.find((item) => {
    return item.id === parseFloat(id);
  });

  if (!product) {
    return <section>Loading..</section>;
  }
  console.log(product);

  const { title, price, description, image } = product;

  return (
    <section className=" pt-32 pb-12 lg:py-12 h-screen flex items-center">
      <div className=" container mx-auto">
        {/* wrapper */}
        <div className=" flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className=" flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className=" max-w-[200px] lg:max-w-sm" src={image} alt="/" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450] mx-auto">
              {title}
            </h1>
            <div className=" text-xl font-medium mb-6 text-red-500">
              $ {price}
            </div>
            <p className=" mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className=" py-2 px-8 bg-gray-800 text-white  hover:bg-slate-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
