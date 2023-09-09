import React from "react";

function Filter2() {
  return (
    <div>
      <div className="flex ml-5 mt-7 ">
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-16 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Drama
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Comedy
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Romantic
        </button>
      </div>
      <div className="flex ml-5 mt-3 cursor-pointer">
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-24 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Adventure
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Historical
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Action
        </button>
      </div>
      <div className="flex ml-5 mt-3 ">
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-24 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Biography
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Crime
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Family
        </button>
      </div>
      <div className="flex ml-5 mt-3 ">
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-24 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Fantasy
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Musical
        </button>
        <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Mystery
        </button>
      </div>
      <button className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-5 mt-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
        Thriller
      </button>
    </div>
  );
}

export default Filter2;
