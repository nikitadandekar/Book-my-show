import React from "react";
import List3 from "./List3";

function List2() {
  return (
    <div className="bg-[rgb(255,255,255)]  h-fit">
      <div className="w-[917px]  mt-40 ml-[500px]">
        <div className="mt-11">
          <h1 className="text-[rgb(14,16,22)] text-center text-[48px] font-bold mb-[16px]">
            What can you host ?
          </h1>
          <p className="text-[rgb(14,16,22)] text-center text-[18px] font-normal leading-[20px] font-serif">
            After successful collaborations with the best event organisers over
            the past decade and a half, we’re well equipped to bring your vision
            to life.
          </p>
          <div className="flex flex-wrap gap-6 justify-center  p-[34px]">
            <div className="w-64 h-72 bg-[rgb(252,241,241)] rounded-md ">
              <div className="flex flex-wrap justify-center pt-5 pb-5">
                <img
                  className="w-[40%] h-[40%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/online-saless.png"
                ></img>

                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px] ">
                  online Sales & Marketing
                </p>

                <img
                  className="w-[10%] h-[10%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-72 bg-[rgb(252,241,241)] rounded-md ">
              <div className="flex flex-wrap justify-center pt-7">
                <img
                  className="w-[55%] h-[10%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/pricings.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Pricing
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-14 right-14"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-72 bg-[rgb(252,241,241)] rounded-md ">
              <div className="flex flex-wrap justify-center  pt-7  pb-5">
                <img
                  className="w-[30%] h-[30%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/food.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Food & beverages, stalls and the works!
                </p>
                <img
                  className="w-[10%] h-[10%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-72 bg-[rgb(252,241,241)] rounded-md">
              <div className="flex flex-wrap justify-center  pt-5  pb-5">
                <img
                  className="w-[30%] h-[30%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/on-ground-support.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  On ground support & gate entry management
                </p>
                <img
                  className="w-[10%] h-[10%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-72 bg-[rgb(252,241,241)] rounded-md">
              <div className="flex flex-wrap justify-center  pt-5 pb-5">
                <img
                  className="w-[30%] h-[30%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/report.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Reports & business insights
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-9"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-72 bg-[rgb(252,241,241)] rounded-md">
              <div className="flex flex-wrap justify-center  pt-5  pb-5">
                <img
                  className="w-[30%] h-[30%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/rfids.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  POS, RFID, Turnstiles & more...
                </p>
                <img
                  className="w-[10%] h-[10%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>
          </div>
          <p className="text-[rgb(14,16,22)] text-center text-[18px] font-normal leading-[20px] font-serif">
            Apart form these must haves for any event, we also support a host of
            other services like SEO for your event, custom pricing for your
            tickets and this and also this.
          </p>
          <div className="flex justify-center mt-20">
            <button className="text-[16px] flex justify-center font-medium leading-[20px] w-60 h-12 rounded-md p-4 text-[rgb(255,255,255)] bg-[rgb(236,94,113)] hover:bg-red-500">
              List Your Show
            </button>
          </div>
        </div>
      </div>
      <List3 />
    </div>
  );
}

export default List2;
