import { useContext } from "react";
import { Link } from "react-router-dom";
//icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
//import cartContext
import { CartContext } from "../contexts/CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // destructive item
  const { id, title, image, price, amount } = item;

  return (
    <div className=" flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light w-full text-gray-500">
      <div className=" w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className=" w-full flex flex-col">
          {/* title and remove icon */}
          <div className=" flex justify-between">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium hover:underline text-gray-600 max-w-[240px] mb-2"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="cursor-pointer text-xl"
            >
              <IoMdClose className=" text-gray-500 hover:text-red-600 transition " />
            </div>
          </div>
          {/* price and quantity */}
          <div className=" flex gap-x-2 h-[36px]  text-sm">
            <div className=" flex flex-1 max-w-[100px] items-center  h-full font-medium border">
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="">{amount}</div>
              {/* add icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* price */}
            <div className="flex justify-around items-center">{price}</div>
            {/*final price */}
            {/* price at 2 decimal */}
            <div className="flex flex-1 justify-end items-center font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
