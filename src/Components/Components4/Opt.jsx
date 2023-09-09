import React from "react";

function Opt() {
  return (
    <div
      className="w-[860px] h-72 z-50  bg-[rgb(245,245,245)] relative top-11 right-[960px]"
      data-aos="fade-down"
    >
      <div className="Input ">
        <img
          className="w-4 text-[#333] relative top-7 left-9 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
        ></img>
        <input
          className=" h-10 w-[800px] rounded-md text-[14px]  text-[#333] outline-none pl-9 font-serif ml-7"
          type="text"
          placeholder=" Search for your city"
        ></input>
        <h2 className="text-[15px] text-[rgb(51,51,51)] text-center mt-8">
          Popular Cities
        </h2>
        <div className="flex mt-7  ml-7 gap-6">
          <img
            className="w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"
          ></img>
          <img
            className="w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png"
          ></img>
          <img
            className="w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png"
          ></img>
          <img
            className="w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png"
          ></img>
          <img
            className="relative left-5 w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png"
          ></img>
          <img
            className="relative left-8 w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png"
          ></img>
          <img
            className="relative left-8 w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png"
          ></img>
          <img
            className="relative left-8 w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png"
          ></img>
          <img
            className="relative left-8 w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png"
          ></img>
          <img
            className="relative left-8 w-14 h-14"
            src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png"
          ></img>
        </div>
        <div className="flex gap-12 ml-6">
          <span className="text-[14px] text-[rgb(102,102,102)] text-center">
            Mumbai
          </span>
          <span className="text-[14px] text-[rgb(102,102,102)]">Delhi-NCR</span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-6">
            Bengaluru
          </span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-14">
            Hyderabad
          </span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-20">
            Ahmedabad
          </span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-28">
            Chandigarh
          </span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-36">
            Chennai
          </span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-36">
            pune
          </span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-36 ">
            Kolkata
          </span>

          <span className="text-[14px] text-[rgb(102,102,102)] relative right-40">
            Kochi
          </span>
        </div>
        <button className="text-[14px] cursor-pointer text-[rgb(220,53,88)] ml-[390px]">
          View All Cities
        </button>
      </div>
    </div>
  );
}

export default Opt;
