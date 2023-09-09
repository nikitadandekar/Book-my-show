import React from "react";
import List2 from "./List2";
import Adv2 from "./Adv2";

function List() {
  return (
    <div>
      <Adv2 />
      <div className="bg-[rgb(255,255,255)] ">
        <div className="w-[917px]   mt-32 ml-[500px]">
          <h1 className="text-[rgb(14,16,22)] text-center text-[48px] font-bold mb-[16px]">
            What can you host ?
          </h1>
          <p className="text-[rgb(14,16,22)] text-center text-[18px] font-normal leading-[20px] font-serif">
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>
          <div className="flex flex-wrap gap-6 justify-center  p-[34px]">
            <div className="w-64 h-64 bg-[rgb(236,245,255)] rounded-md hover:opacity-100 hover:shadow-lg transition-all 0.3s ease-in-out  cursor-pointer">
              <div className="flex flex-wrap justify-center pt-5 pb-5">
                <img
                  className="w-[40%] h-[40%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/online-stream-play.png"
                ></img>

                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  online Streaming
                </p>

                <img
                  className="w-[10%] h-[10%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-64 bg-[rgb(236,245,255)] rounded-md hover:opacity-100 hover:shadow-lg transition-all 0.3s ease-in-out  cursor-pointer">
              <div className="flex flex-wrap justify-center pt-5 pb-5">
                <img
                  className="w-[40%] h-[40%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/perf.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Performances
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-16 right-24"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-64 bg-[rgb(236,245,255)] rounded-md hover:opacity-100 hover:shadow-lg transition-all 0.3s ease-in-out  cursor-pointer">
              <div className="flex flex-wrap justify-center  pt-5  pb-5">
                <img
                  className="w-[40%] h-[40%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/experiencess.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Experiences
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-16 right-24"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-64 bg-[rgb(236,245,255)] rounded-md hover:opacity-100 hover:shadow-lg transition-all 0.3s ease-in-out  cursor-pointer">
              <div className="flex flex-wrap justify-center  pt-5  pb-5">
                <img
                  className="w-[40%] h-[40%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/expositionss.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Expositions
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-16 right-24"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-64 bg-[rgb(236,245,255)] rounded-md hover:opacity-100 hover:shadow-lg transition-all 0.3s ease-in-out  cursor-pointer">
              <div className="flex flex-wrap justify-center  pt-5 pb-5">
                <img
                  className="w-[55%] h-[53%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/partiess.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Parties
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-16 right-16"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-60 bg-[rgb(236,245,255)] rounded-md hover:opacity-100 hover:shadow-lg transition-all 0.3s ease-in-out  cursor-pointer">
              <div className="flex flex-wrap justify-center  pt-5  pb-5">
                <img
                  className="w-[60%] h-[60%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/sport.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px]">
                  Sports
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-16 right-16"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>

            <div className="w-64 h-60 bg-[rgb(236,245,255)]  rounded-md hover:opacity-100 hover:shadow-lg transition-all 0.3s ease-in-out  cursor-pointer">
              <div className="flex flex-wrap justify-center  pt-5 pb-5 ">
                <img
                  className="w-[40%] h-[40%] "
                  src="https://assets-in.bmscdn.com/static/2021/06/conferencess.png"
                ></img>
                <p className="text-[24px] font-bold leading-[30px] text-center p-[20px] ">
                  conferences
                </p>
                <img
                  className="w-[10%] h-[10%] relative top-16 right-20"
                  src="https://assets-in.bmscdn.com/static/2021/06/info.png"
                ></img>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-24">
            <button className="text-[16px] flex justify-center font-medium leading-[20px] w-60 h-12 rounded-md p-4 text-[rgb(255,255,255)] bg-[rgb(236,94,113)]">
              List Your Show
            </button>
          </div>
        </div>
        <List2 />
      </div>
    </div>
  );
}

export default List;
