import React from "react";
import Carporates4 from "./Carporates4";

function Carporates3() {
  return (
    <div className="w-[1090px]">
      <div className=" bg-white mt-11 border-t-8 border-b-8 pt-7 pb-7">
        <h1 className="text-[rgb(51,51,51)] text-[16px] font-medium leading-[20px] pl-12">
          OUR SUITE OF BUSINESS SOLUTIONS:
        </h1>
        <div className="flex mt-4">
          <div className="bg-[url(https://assets-in.bmscdn.com/webin/corporate/green.jpg)] h-[25rem]  w-100% ">
            <h1 className="text-[34px] font-medium text-[rgb(255,255,255)] leading-[46px] pl-8 pt-36 pr-8">
              End-to-End Creative
            </h1>
            <h1 className="text-[34px] font-medium text-[rgb(255,255,255)] leading-[46px]  pl-12 pr-12">
              Support
            </h1>
          </div>
          <div className="bg-[url(https://assets-in.bmscdn.com/webin/corporate/red.jpg)] h-[25rem]  w-100%">
            <h1 className="text-[34px] font-medium text-[rgb(255,255,255)] leading-[46px]  pl-12 pt-36 pr-12">
              Marketing & E-mail
            </h1>
            <h1 className="text-[34px] font-medium text-[rgb(255,255,255)] leading-[46px] pl-12 pr-12 ">
              Guidance
            </h1>
          </div>
          <div className="bg-[url(https://assets-in.bmscdn.com/webin/corporate/yellow.jpg)] h-[25rem]  w-100%">
            <h1 className="text-[34px] font-medium text-[rgb(255,255,255)] leading-[46px]  pl-12 pt-36 pr-12">
              Bulk SMS
            </h1>
            <h1 className="text-[34px] font-medium text-[rgb(255,255,255)] leading-[46px] pl-12 pr-12">
              Communication
            </h1>
          </div>
        </div>
        <Carporates4 />
      </div>
    </div>
  );
}

export default Carporates3;
