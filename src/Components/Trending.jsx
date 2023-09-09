import React from "react";

function Trending() {
  return (
    <div className="bg-[rgb(245,245,245)]  ">
      <h1 className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17]  relative top-16 left-80">
        Trending Searches Right Now
      </h1>

      <div className="ml-9">
        <div className=" flex  justify-start mt-24 gap-6">
          <div className="w-44 rounded-md h-16 pt-2 pl-2 pb-2 ml-72 bg-white">
            <div>
              <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
                Baipan Bhari Deva
              </p>
              <p className="text-[rgb(102,102,102)]">Movies</p>
            </div>
          </div>
          <div className="w-40 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
            <div>
              <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
                Oppenheimer
              </p>
              <p className="text-[rgb(102,102,102)]">Movies</p>
            </div>
          </div>
          <div className="w-56 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
            <div>
              <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
                Insidious: The Red Door
              </p>
              <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
                Movies
              </p>
            </div>
          </div>
          <div className="w-40 rounded-md h-16 pt-2 pl-2 pb-2 bg-white ">
            <div>
              <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
                Adipurush
              </p>
              <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
                Movies
              </p>
            </div>
          </div>
          <div className="w-56 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
            <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
              Satyaprem Ki Katha
            </p>
            <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
              Movies
            </p>
          </div>
          <div className="w-24 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
            <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
              Jwan
            </p>
            <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
              Movies
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-10 gap-6 ml-80 pb-8">
        <div className="w-24 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
          <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
            Flash
          </p>
          <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
            Movies
          </p>
        </div>
        <div className="w-24 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
          <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
            Gadar2
          </p>
          <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
            Movies
          </p>
        </div>
        <div className="w-24 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
          <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
            Barbie
          </p>
          <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
            Movies
          </p>
        </div>
        <div className="w-24 rounded-md h-16 pt-2 pl-2 pb-2 bg-white">
          <p className="text-[rgb(248,68,100)] font-medium text-[16px] leading-[1.25]">
            King
          </p>
          <p className="text-[rgb(102,102,102)] text-[14px] font-sans lading-[1.43] font-normal">
            Movies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
