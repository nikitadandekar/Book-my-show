import React, { useState } from "react";
import Filter1 from "./Playcard/Filter/Fit1";
import Fit2 from "./Playcard/Filter/Fit2";
import Fit1 from "./Playcard/Filter/Fit1";
import Fit3 from "./Playcard/Filter/Fit3";
import Fit4 from "./Playcard/Filter/Fit4";
import Fit5 from "./Playcard/Filter/Fit5";
import Fit6 from "./Playcard/Filter/Fit6";

function Filter2() {
  const [show, setShow] = useState(false);
  const [get, setget] = useState(false);
  const [value, setvalue] = useState(false);
  const [off, setoff] = useState(false);
  const [on, seton] = useState(false);
  const [price, setprice] = useState(false);
  return (
    <div>
      <div className="w-96 ml-80">
        <h1 className="capitalize text-[rgb(51,51,51)] font-bold text-[24px] leading-6">
          Filters
        </h1>
        <div
          className="relative top-16 left-5 w-7 "
          onClick={() => setShow(!show)}
        >
          <div>
            {show ? (
              <img
                className="w-6 h-6 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHd0z5J6XnS1NrPH_UOPBB8qLbeuntEJAdkQ&usqp=CAU"
              ></img>
            ) : (
              <img
                className="w-6 h-6 fill-orange-700"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHo0BGKexnTV_dgf4N3sga_Fs1vK-8nm6w&usqp=CAU"
              ></img>
            )}
          </div>
        </div>
        <div className="w-80  bg-[rgb(255,255,255)] rounded-md mt-10 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              Date
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {show ? <Fit1 /> : null}
        </div>
        <div className="relative top-12 left-5 w-7">
          <p onClick={() => setget(!get)}>
            {get ? (
              <img
                className="w-6 h-6 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHd0z5J6XnS1NrPH_UOPBB8qLbeuntEJAdkQ&usqp=CAU"
              ></img>
            ) : (
              <img
                className="w-6 h-6 fill-orange-700"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHo0BGKexnTV_dgf4N3sga_Fs1vK-8nm6w&usqp=CAU"
              ></img>
            )}
          </p>
        </div>

        <div className="w-80  bg-[rgb(255,255,255)] rounded-md mt-4 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              Languages
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {get ? <Fit2 /> : null}
        </div>
        <div className="relative top-12 left-5 w-7">
          <p onClick={() => setvalue(!value)}>
            {value ? (
              <img
                className="w-6 h-6 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHd0z5J6XnS1NrPH_UOPBB8qLbeuntEJAdkQ&usqp=CAU"
              ></img>
            ) : (
              <img
                className="w-6 h-6 fill-orange-700"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHo0BGKexnTV_dgf4N3sga_Fs1vK-8nm6w&usqp=CAU"
              ></img>
            )}
          </p>
        </div>
        <div className="w-80  bg-[rgb(255,255,255)] rounded-md mt-4 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              Categories
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {value ? <Fit3 /> : null}
        </div>
        <div className="relative top-12 left-5 w-7">
          <p onClick={() => setoff(!off)}>
            {off ? (
              <img
                className="w-6 h-6 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHd0z5J6XnS1NrPH_UOPBB8qLbeuntEJAdkQ&usqp=CAU"
              ></img>
            ) : (
              <img
                className="w-6 h-6 fill-orange-700"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHo0BGKexnTV_dgf4N3sga_Fs1vK-8nm6w&usqp=CAU"
              ></img>
            )}
          </p>
        </div>
        <div className="w-80  bg-[rgb(255,255,255)] rounded-md mt-4 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              Genres
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {off ? <Fit4 /> : null}
        </div>
        <div className="relative top-12 left-5 w-7">
          <p onClick={() => seton(!on)}>
            {on ? (
              <img
                className="w-6 h-6 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHd0z5J6XnS1NrPH_UOPBB8qLbeuntEJAdkQ&usqp=CAU"
              ></img>
            ) : (
              <img
                className="w-6 h-6 fill-orange-700"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHo0BGKexnTV_dgf4N3sga_Fs1vK-8nm6w&usqp=CAU"
              ></img>
            )}
          </p>
        </div>

        <div className="w-80  bg-[rgb(255,255,255)]  rounded-md mt-4 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              More Fliters
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {on ? <Fit5 /> : null}
        </div>
        <div className="relative top-12 left-5 w-7">
          <p onClick={() => setprice(!price)}>
            {price ? (
              <img
                className="w-6 h-6 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHd0z5J6XnS1NrPH_UOPBB8qLbeuntEJAdkQ&usqp=CAU"
              ></img>
            ) : (
              <img
                className="w-6 h-6 fill-orange-700"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHo0BGKexnTV_dgf4N3sga_Fs1vK-8nm6w&usqp=CAU"
              ></img>
            )}
          </p>
        </div>
        <div className="w-80  bg-[rgb(255,255,255)] rounded-md mt-4 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              Price
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {price ? <Fit6 /> : null}
        </div>
        <button className="w-80 h-9 mt-9 border-[rgb(220,53,88)] border-[1px] border-solid text-[rgb(220,53,88)] text-center pt-1 bg-transparent cursor-pointer">
          Browse by Cinemas
        </button>
      </div>
    </div>
  );
}

export default Filter2;
