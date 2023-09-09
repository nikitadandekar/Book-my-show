import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Stm from "./Stm.json";
function Online({ Movies, heading, img, title, desc, subtitle }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
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
          <div className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17] relative right-60 top-8">
            {heading}
          </div>

          <div className="text-[rgb(258,53,88)] leading=[1.43] font-sans relative left-56 top-8">
            {Movies}
          </div>
        </div>
        <div>
          <Carousel responsive={responsive}>
            {Stm.map((e, index) => {
              return (
                <div className=" mt-14   " key={index}>
                  <img className="w-60  rounded-lg  " src={e.img}></img>

                  <div className=" font-sans  break-words  ">
                    <div className="text-[rgb(34,34,34)] text-[18px] font-medium leading-snug text-ellipsis pt-2">
                      {e.title}
                    </div>
                    <div className="text-[18px] font-medium leading-snug text-ellipsis">
                      {e.desc}
                    </div>

                    <div className="text-[16px] overflow-hidden leading-5 text-ellipsis text-[rgb(102,102,102)]">
                      {e.subtitle}
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

export default Online;
