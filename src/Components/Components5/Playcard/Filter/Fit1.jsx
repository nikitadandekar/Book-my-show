import React from "react";

function Fit1() {
  return (
    <div>
      <div className="flex ml-5 mt-3">
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-16 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Today
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Tomorrow
        </button>
      </div>
      <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-32 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-5 mt-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
        This Weekend
      </button>
      <div className=" text-[14px]  text-[rgb(51,51,51)]  font-normal leading-[1.43] pt-3 pl-9 cursor-pointer">
        Date Range
      </div>
    </div>
  );
}

export default Fit1;
