import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { IoMdHelpBuoy } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <FaSearch />,
      name: "Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offer",
      sup: "NEW",
    },
    {
      icon: <IoMdHelpBuoy />,
      name: "Help",
    },
    {
      icon: <MdOutlineAssignmentInd />,
      name: "Sign In",
    },
    {
      icon: <MdOutlineShoppingCart />,
      name: "cart",
      sup:0,
    },
  ];
  return (
    <>
      <div
        className="fixed black-overlay w-full h-full duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] duration-[600ms] h-full absolute bg-white"
          style={{ left: toggle ? "0%" : "-100%" }}
        >
          <IoCloseSharp
            fontSize={25}
            className=" m-5  cursor-pointer"
            onClick={hideSideMenu}
          />
          Hello
        </div>
      </div>
      <header className="p-[15px] h-[80px] shadow-xl box-shadow-[0 15px 40px -20px rgba(40,44,63,.15)]">
        <div className="max-w-[1200px] mx-auto items-center flex">
          <div className="w-[40px]">
            <img src="images/swlogo.png" className="w-full" alt=""></img>
          </div>
          <div className="hover:text-[#fc8019] border-b-[3px] hover:border-orange-400 ml-[22px] border-[black]">
            Other
          </div>
          <RxCaretDown
            fontSize={25}
            onClick={showSideMenu}
            className="inline cursor-pointer text-[#fc8019]"
          />
          <div className=" flex list-none gap-4 ml-auto">
            {links.map((link, index) => {
              return (
                <li key={index} className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer ">
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
