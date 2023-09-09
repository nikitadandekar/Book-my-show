import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carporates6 from "./Carporates6";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
function Carporates5() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" cursor-pointer bg-[rgb(245,245,245)]  border-t-8 ">
      <h1 className="pt-11  pl-12 text-[rgb(51,51,51)] pb-11 text-[16px] font-medium">
        CAMPAIGNS WE’RE PROUD OF
      </h1>
      <Slider {...settings}>
        <img
          className="h-96 w-24 pl-6 pr-6 bg-[rgb(245,245,245)] "
          src="https://in.bmscdn.com/webin/corporate/acuvue-offer.jpg"
        ></img>
        <img
          className="h-96 w-24 pl-6 pr-6 bg-[rgb(245,245,245)] "
          src="https://in.bmscdn.com/webin/corporate/hp-offer.jpg"
        ></img>
        <img
          className="h-96 w-24 pl-6 pr-6 bg-[rgb(245,245,245)] "
          src="https://in.bmscdn.com/webin/corporate/croma-promotions.png"
        ></img>
        <img
          className="h-96 w-24 pl-6 pr-6 bg-[rgb(245,245,245)] "
          src="https://in.bmscdn.com/webin/corporate/addidas-offer.jpg"
        ></img>
      </Slider>
      <Carporates6 />
    </div>
  );
}

export default Carporates5;
