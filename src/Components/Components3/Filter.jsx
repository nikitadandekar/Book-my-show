import React, { useState } from "react";
import Filter1 from "./Musiccard/Filter/Filter1";
import Filter2 from "./Musiccard/Filter/Filter2";
import Filter3 from "./Musiccard/Filter/Filter3";

function Filter() {
  const [show, setShow] = useState(false);
  const [get, setget] = useState(false);
  const [value, setvalue] = useState(false);

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
        <div className="w-80  bg-[rgb(255,255,255)] rounded-md mt-10 pt-4 pb-4">
          <div className="">
            <div className="flex justify-between ">
              <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43]  pl-14 cursor-pointer">
                Languages
              </h1>
              <h1 className="text-[12px] text-[rgb(102.102,102)]  pr-4  cursor-pointer">
                Clear
              </h1>
            </div>
          </div>
          {show ? <Filter1 /> : null}
        </div>

        <div className="relative top-9 left-5 w-7">
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

        <div className="w-80  bg-[rgb(255,255,255)]  rounded-md  pt-4 pb-4">
          <div className="flex justify-between">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43]  pl-14 cursor-pointer">
              Genres
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 ">
              Clear
            </h1>
          </div>
          {get ? <Filter2 /> : null}
        </div>

        <div className="relative top-14 left-5 w-7">
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
        <div className="w-80  bg-[rgb(255,255,255)]  rounded-md  mt-4 pb-4">
          <div className="flex justify-between pt-4">
            <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43]  pl-14 cursor-pointer">
              Format
            </h1>
            <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 ">
              Clear
            </h1>
          </div>
          {value ? <Filter3 /> : null}
        </div>

        <button className="w-80 h-9 mt-9 border-[rgb(220,53,88)] border-[1px] border-solid text-[rgb(220,53,88)] text-center pt-1 bg-transparent ">
          Browse by Cinemas
        </button>
      </div>
    </div>
  );
}

export default Filter;
