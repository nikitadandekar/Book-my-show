import React from "react";

function Filter1() {
  return (
    <div className="">
      <div className="flex pl-5 pt-7 ">
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-16 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Hindi
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          English
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Marathi
        </button>
      </div>
      <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-32 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-5 mt-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
        Multi Language
      </button>
    </div>
  );
}

export default Filter1;
