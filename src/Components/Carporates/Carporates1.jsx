import React from "react";
import Carporates2 from "./Carporates2";

function Carporates1() {
  return (
    <div className="bg-[rgb(7,7,8)]">
      <div className="flex">
        <div className="pt-11 ">
          <h1 className="font-semibold text-[36px] text-[rgb(255,255,255)] pl-96">
            Entertainment you can gift.
          </h1>
          <h2 className="text-[20px] leading-[30px] text-[rgb(255,255,255)] pl-80">
            A variety of solutions to skyrocket your business with vouchers,{" "}
          </h2>
          <h2 className="text-[20px] leading-[30px] text-[rgb(255,255,255)] pl-96">
            promotions, loyalty, employee recognition &amp; rewards.
          </h2>
          <div className=" ml-96 mt-8 bg-black flex gap-4">
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UAKUEEZa4xKQxgZyQ2UbFps0vfIYw6WgOw&usqp=CAU"
            ></img>
            <p className="text-[20px] leading-[30px] text-[rgb(255,255,255)] ">
              Watch Video
            </p>
            <img
              className="w-8 h-8 ml-16"
              src="https://static.vecteezy.com/system/resources/previews/000/574/204/original/vector-sign-of-download-icon.jpg"
            ></img>
            <p className="text-[20px] leading-[30px] text-[rgb(255,255,255)] ">
              Download Brochure
            </p>
          </div>
        </div>

        <div className="w-[380px] h-[450px] rounded-md bg-[rgb(255,255,255)] mt-7 ml-44 mb-7">
          <form className="w-[300px] pl-5 ">
            <div className="pt-5">
              <label className="w-[100%] text-[12px] font-normal text-[rgb(51,51,51)] ">
                Full Name
              </label>
            </div>
            <div>
              <input
                className="w-[120%] h-[36px] rounded-md pl-[10px] border-[rgb(204,204,204)] border-[1px]  border-solid mt-1"
                type="email"
                placeholder="Name"
              ></input>
            </div>
            <div className="pt-5">
              <label className="w-[100%] text-[12px] font-normal text-[rgb(51,51,51)]">
                Company Email
              </label>
            </div>
            <div>
              <input
                className="w-[120%] h-[36px] rounded-md pl-[10px] border-[rgb(204,204,204)] border-[1px]  border-solid mt-1"
                type=""
                placeholder="Company Email"
              ></input>
            </div>
            <div className="pt-5">
              <label className="w-[100%] text-[12px] font-normal text-[rgb(51,51,51)]">
                Company Name
              </label>
            </div>
            <div>
              <input
                className="w-[120%] h-[36px] rounded-md pl-[10px] border-[rgb(204,204,204)] border-[1px]  border-solid  mt-1"
                type=""
                placeholder="Company Name"
              ></input>
            </div>
            <div className="pt-5">
              <label className="w-[100%] text-[12px] font-normal text-[rgb(51,51,51)]">
                Mobile Number
              </label>
            </div>
            <div>
              <input
                className="w-[120%] h-[36px] rounded-md pl-[10px] border-[rgb(204,204,204)] border-[1px]  border-solid mt-1"
                type="number"
                placeholder="e.g:91480XXXXX"
                minLength={5}
                maxLength={5}
              ></input>
            </div>
            <button
              className="text-[16px] font-medium bg-[rgb(225,225,225)] border[1px] border-solid w-[120%] h-[38px] rounded-md mt-11"
              type="default"
              disabled=""
            >
              <span class="text">Receive a callback</span>
            </button>
          </form>
        </div>
      </div>
      <Carporates2 />
    </div>
  );
}

export default Carporates1;
// bg-[rgb(7,7,8)]
