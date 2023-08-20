import { useContext } from "react";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  // destructive product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className=" border border-gray-200 h-72 mb-4 relative overflow-hidden group transition ">
        <div className=" w-full h-full flex justify-center">
          {/* image */}
          <div className="  mx-auto flex items-center">
            <img
              className=" max-h-48 group hover:scale-110 transition duration-500 "
              src={image}
              alt=""
            />
          </div>
          {/* button */}
          <div className=" absolute top-5 right-10 group-hover:right-5 flex flex-col justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className=" bg-white w-12 h-12 flex justify-center items-center drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className=" text-sm capitalize text-gray-500">{category}</div>
        <Link to={`product/${id}`}>
          <h2 className=" font-semibold">{title}</h2>
        </Link>

        <div className=" font-semibold">$ {price}</div>
      </div>
    </div>
  );
}

export default Product;
