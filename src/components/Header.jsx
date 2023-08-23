import { useContext, useEffect, useState } from "react";

import { SidebarContext } from "../contexts/SidebarContext";

import { CartContext } from "../contexts/CartContext";

import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
//logo
import logo from "../img/logo.svg";

function Header() {
  // header active
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white shadow-lg py-4" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className=" container mx-auto flex justify-between p-4 ">
        <Link to="/">
          <div>
            <img src={logo} alt="" className=" w-6" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer flex relative max-w-[50px]"
        >
          <BsBag className=" text-2xl" />
          <div className=" bg-red-500 absolute -right-2 -bottom-2 rounded-full  text-white text-[12px] w-[18px] flex justify-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
