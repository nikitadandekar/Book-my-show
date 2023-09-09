import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
function Adv1() {
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
    <div className=" cursor-pointer bg-[rgb(235,235,235)] pt-3 pb-4 ml-2 ">
      <Slider {...settings}>
        <img
          className="h-72"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691040121412_gadar2desktop.jpg"
        ></img>
        <img
          className="h-72"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691400052868_spidermandesktop.jpg"
        ></img>
        <img
          className="h-72"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1690629469326_webbannernpa.jpg"
        ></img>
        <img
          className="h-72"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1689081127835_shazamflashsaledesktop.jpg"
        ></img>
      </Slider>
    </div>
  );
}

export default Adv1;
