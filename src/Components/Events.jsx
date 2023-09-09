import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "../Event.json";
function Events({ heading, title, desc, subtitle, location, distance }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <div className="bg-[rgb(245,245,245)] w-[72%] ml-80 ">
        <h1 className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17] pt-20">
          {heading}
        </h1>
        <Carousel responsive={responsive}>
          {Event.map((e, index) => {
            return (
              <div className="mt-4 " key={index}>
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
                    <div className="text-[16px] overflow-hidden leading-5 text-ellipsis ">
                      {e.distance}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Events;
