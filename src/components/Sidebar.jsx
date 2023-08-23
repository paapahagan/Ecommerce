import { Link } from "react-router-dom";
// icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// components
import CartItem from "../components/CartItem";
// sidebar
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-80 lg:w-96 xl:w-4/12 transition-all duration-300 z-20 px-5`}
    >
      <div className=" flex justify-between items-center py-6 border-b">
        <div className=" uppercase text-sm font-semibold">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className=" text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=" flex flex-col py-4 gap-y-3 mt-4">
        <div className="flex  justify-between items-center">
          {/* total */}
          <div className=" font-semibold capitalize">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart */}
          <div
            onClick={clearCart}
            className=" bg-red-500 py-4 text-white w-12 h-12 flex justify-center text-xl cursor-pointer"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className=" bg-gray-200 hover:bg-gray-300 p-2 w-full font-medium flex justify-center"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className=" bg-gray-800 text-white p-2 w-full font-medium flex justify-center"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
