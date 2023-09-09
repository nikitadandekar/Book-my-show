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
function Carporates7() {
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
    <div className=" cursor-pointer  border-t-8 h-56">
      <Slider {...settings}>
        <img
          className=" w-4 pl-6 pr-6 bg-[rgb(245,245,245)] "
          src="https://in.bmscdn.com/webin/corporate/mastercard-logo.jpg"
        ></img>
        <div className="pl-8 pt-8">
          <p className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)] text-justify">
            “Through our partnership, we have been able to create waves of
            excitement and interest amongst our customers. It has helped us to
            build a long lasting relationship &amp; a special bond with our
            clients as movies is something that appeals to everyone. Thank you,
            BookMyShow!“
          </p>
          <h2 className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)] pt-6">
            Vikas Verma
          </h2>
          <h2 className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)]">
            Executive Director
          </h2>
          <h2 className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)]">
            MasterCard (South Asia)
          </h2>
        </div>
        <img
          className=" w-4 pl-6 pr-6  "
          src="https://in.bmscdn.com/webin/corporate/cm-logo.png"
        ></img>
        <div className="pl-8 pt-8">
          <p className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)] text-justify">
            “As a token of our appreciation to the prospects who visit our
            Holiday World, we offer them BMS vouchers. These vouchers helps us
            further reinforce our core thought of creating Magical Moments for
            them and instantly put a smile on their faces“
          </p>
          <h2 className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)] pt-6">
            Vikas Verma
          </h2>
          <h2 className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)]">
            Executive Director
          </h2>
          <h2 className="font-normal text-[13px] leading-[24px] text-[rgb(51,51,51)]">
            MasterCard (South Asia)
          </h2>
        </div>
        <img
          className=" w-1 h-40"
          src="https://in.bmscdn.com/webin/corporate/hp-new-logo.png"
        ></img>
        <div>
          <p className="font-normal text-[12px] leading-[24px] text-[rgb(51,51,51)]">
            “Our association with BookMyShow has helped us reach out to specific
            set of consumers who have varied interests in Movies, Sports and
            Plays. We have been able to engage with our consumers by offering
            them tailor made promotions and delight them by bringing more value
            when they buy an HP product. We at HP, truly value this association
            and look forward to many such initiatives that benefit our
            consumers.“
          </p>

          <h2 className="font-normal text-[8px] leading-[24px] text-[rgb(51,51,51)] ">
            Lloyd Mathias
          </h2>
          <h2 className="font-normal text-[8px] leading-[24px] text-[rgb(51,51,51)] ">
            Head Marketing
          </h2>
          <h2 className="font-normal text-[8px] leading-[24px] text-[rgb(51,51,51)] ">
            \HP Printing and Personal Systems, India
          </h2>
        </div>
      </Slider>
    </div>
  );
}

export default Carporates7;
