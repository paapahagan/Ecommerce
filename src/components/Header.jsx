import { useContext } from "react";

import { SidebarContext } from "../contexts/SidebarContext";

import { BsBag } from "react-icons/bs";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className="flex justify-between p-4 bg-pink-200">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" cursor-pointer flex relative"
      >
        <BsBag className=" text-2xl" />
      </div>
    </div>
  );
}

export default Header;
