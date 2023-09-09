import React, { useState } from "react";
import Sign from "./Components4/Sign";
import Hamberger from "./Components4/Hamberger";
import Opt from "./Components4/Opt";

function Header() {
  const [location, Setlocation] = useState(false);
  const [isOpen, Setisopen] = useState(false);
  const [value, Setvalue] = useState(false);

  const HandleClick = () => {
    Setlocation(!location);
  };
  const handleClick = () => {
    setisClick(!isClick);
  };
  const hamberger = () => {
    Setvalue(!value);
  };

  return (
    <div className="nav bg-[rgb(51,53,69)] h-20">
      <div className="flex">
        <img
          className="w-28 h-40  bottom-11 text[16px] relative left-52"
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
        ></img>

        <div className="Input ml-72">
          <img
            className="w-4 text-[#333] relative top-7 left-9 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
          ></img>
          <input
            className=" h-10 w-[549px] rounded-md text-[14px]  text-[#333] outline-none pl-9 font-serif ml-7"
            type="text"
            placeholder=" Search for Movies,Events,Playes and Activities"
          ></input>
        </div>
        <div className="right flex ml-48 mt-5">
          <div className="w-20 h-8 flex text-white bg-[rgb(51,53,69)]">
            <p className="pl-36 pt-1 overflow-ellipsis text-[14px] leading-5 font-normal text-[rgb(204,204,204)]">
              Nagpur
            </p>
            <i
              className="fa-solid fa-chevron-down pt-2 pl-3 cursor-pointer"
              onClick={HandleClick}
            ></i>
            {location ? <Opt /> : null}
          </div>

          <div className="bg-[rgb(248,68,100)] text-[rgb(255,255,255)] h-[25px] w-[67px] rounded-md text-sm pl-1 ml-48 pt-1 pb-1 pr-1 text-center">
            <button
              className=""
              onClick={() => {
                Setisopen(true);
              }}
            >
              Sign In
            </button>
          </div>

          <i
            className="fa-solid fa-bars text-gray-50 ml-6  mt-1 cursor-pointer "
            onClick={hamberger}
          ></i>
          {value ? <Hamberger /> : null}
        </div>
      </div>
      <div className="bg-[rgb(34,37,57)]"></div>
      {isOpen ? <Sign Setisopen={Setisopen} /> : null}
    </div>
  );
}

export default Header;
