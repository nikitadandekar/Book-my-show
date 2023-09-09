import React, { useState } from "react";
import Categories1 from "./Activitiescard/Categories/Categories1";
import Categories2 from "./Activitiescard/Categories/Categories2";
import Categories3 from "./Activitiescard/Categories/Categories3";
import Categories4 from "./Activitiescard/Categories/Categories4";

function Filter4() {
  const [show, setShow] = useState(false);
  const [get, setget] = useState(false);
  const [value, setvalue] = useState(false);
  const [off, setoff] = useState(false);

  return (
    <div>
      <div className="w-96 ml-80">
        <h1 className="capitalize text-[rgb(51,51,51)] font-bold text-[24px] leading-6">
          Filters
        </h1>
        <div
          className="relative top-20 left-5 w-7 "
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
        <div className="w-80 bg-[rgb(255,255,255)] rounded-md mt-10 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              Date
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {show ? <Categories1 /> : null}
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
              Categories
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {get ? <Categories2 /> : null}
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
        <div className="w-80  bg-[rgb(255,255,255)]  rounded-md mt-4 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-12 cursor-pointer">
              More Fliters
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {value ? <Categories3 /> : null}
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
              Price
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">
              Clear
            </h1>
          </div>
          {off ? <Categories4 /> : null}
        </div>
      </div>
    </div>
  );
}

export default Filter4;
