import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Order from "./Order.json";
function Out({ heading, Movies }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-[rgb(245,245,245)]">
      <div className="bg-[rgb(245,245,245)] w-[72%] ml-80 pt-14">
        <div className="flex justify-around  ">
          <div className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17] relative right-64 top-8">
            {heading}
          </div>

          <div className="text-[rgb(258,53,88)] leading=[1.43] font-sans relative left-60 top-8">
            {Movies}
          </div>
        </div>
        <img
          className="relative top-2 left-56"
          src="https://in.bmscdn.com/discovery-catalog/lib/tr:w-37/new-tag-icon.png"
        ></img>
        <div>
          <Carousel responsive={responsive}>
            {Order.map((e, index) => {
              return (
                <div className="  mt-14" key={index}>
                  <img className="w-60  rounded-lg " src={e.img}></img>

                  <div className=" font-sans  break-words  ">
                    <div className="text-[18px] font-medium leading-snug text-ellipsis pt-2">
                      {e.title}
                    </div>
                    <div className="text-[18px] font-medium leading-snug text-ellipsis">
                      {e.desc}
                    </div>
                    <div className="text-[rgb(102,102,102)]">
                      <div className="text-[16px] overflow-hidden leading-5 text-ellipsis ">
                        {e.subtitle}
                      </div>
                      <div className="text-[16px] overflow-hidden leading-5 text-ellipsis ">
                        {e.location}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Out;
