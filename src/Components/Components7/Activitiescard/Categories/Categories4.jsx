import React from "react";

function Categories4() {
  return (
    <div>
      <div className="flex ml-5 mt-3">
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-14 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Free
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-16 h-[32px] pt-1 pl-1 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          0 - 500
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-24 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          501 - 2000
        </button>
      </div>
      <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-28 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-5 mt-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
        Above -2000
      </button>
      <button className="w-80 h-9 mt-9 border-[rgb(220,53,88)] border-[1px] border-solid text-[rgb(220,53,88)] text-center pt-1 bg-transparent cursor-pointer">
        Browse by Cinemas
      </button>
    </div>
  );
}

export default Categories4;
