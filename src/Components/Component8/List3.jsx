import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List4 from "./List4";
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
function List3() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
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
    <div className=" mt-52">
      <div className=" cursor-pointer bg-[rgb(255,255,255)] pt-3 pb-4 ml-2 ">
        <Slider {...settings}>
          <div className="mt-24 ml-44 ">
            <img src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png"></img>
            <p className="font-normal text-[20px] leading-[26px]">
              The NCPA shares a cherished 13 year bond with BMS, its online
              ticketing partner that has helped art lovers book their seats for
              their favourite shows in a seamless manner. The presence of a team
              from Bookmyshow in the NCPA premises on the day of the event
              further ensures the smooth-functioning of ticket-related
              formalities.”
            </p>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              NCPA- National Centre for the
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              {" "}
              Performing Arts.
            </h2>
          </div>
          <img
            className="h-[500px] w-[500px]"
            src="https://assets-in.bmscdn.com/static/2021/06/ncpas.jpeg"
          ></img>
          <div className="mt-24 ml-44">
            <img src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png"></img>
            <p className="font-normal text-[20px] leading-[26px]">
              Felicity Theatre feels immensely proud and honoured to have
              partnered with Book My Show in releasing some of our most loved
              plays including Selfie, Patte Khul Gaye and the magnum opus
              Mahabharat, each witnessing phenomenal openings. We’d like to
              safely assume that no other brand would’ve helped open the doors
              of theatre to a wider audience than Book My Show, bringing the joy
              and excshare-itement of watching theatre to millions of Indians!
              Book My Show has indeed made entertainment a part and parcel of
              the daily lives of Indians and continues to make it grow bigger by
              the year, with new innovations and additions to the events,
              movies, concerts and entertainment world.
              <p className="font-normal text-[20px] leading-[26px] pt-10">
                It’ll be thrilling to see them grow more in the years to come
                and possibly become either an OTT platform themselves, produce
                the best cinema, or open new arenas for entertainment by
                becoming the only platform of their kind to offer cinema, music,
                events, sports and live concerts on their platform!”
              </p>
            </p>
            <img
              className="w-[20%] h-[20%] rounded-full "
              src="https://assets-in.bmscdn.com/static/2021/06/rah.jpeg"
            ></img>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Rahul Bhuchar
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              CEO - Felicity theatre
            </h2>
          </div>
          <img
            className="h-64 w-96 ml-52 mt-40"
            src="https://assets-in.bmscdn.com/static/2021/06/felicit.jpeg"
          ></img>
          <div className="mt-24 ml-44">
            <img src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png"></img>
            <p className="font-normal text-[20px] leading-[26px]">
              BMS and Prithvi Theatre’s partnership goes back many years - to
              the very beginning -&nbsp;We are proud to be one of the first
              theatres to go online with our bookings.
            </p>
            <p className="font-normal text-[20px] leading-[26px]">
              BMS&nbsp;has been our backbone for our online presence, a phone
              call away for all troubleshooting and continue to guide and
              support our endeavours online.&nbsp;BMS has evolved into a
              multinational success but at the same time been loyal to all the
              independent players in the arts and culture scene.{" "}
            </p>
            <p className="font-normal text-[20px] leading-[26px]">
              We hope that BMS will continue to empower performers and audiences
              alike.&nbsp;We,&nbsp;Prithvi Theatre, are grateful toward the BMS
              team for their support and are proud to have BMS as part of our
              family!”
            </p>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Trustees
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Prithvi Theatre
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Shri Prithviraj Kapoor Memorial Trust &amp; Research Foundation.
            </h2>
          </div>
          <img
            className="h-64  ml-52 mt-40"
            src="https://assets-in.bmscdn.com/static/2021/06/prithvi.jpeg"
          ></img>
          <div className="mt-24 ml-44">
            <img src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png"></img>
            <p className="font-normal text-[20px] leading-[26px]">
              We at Jio MAMI Mumbai Film Festival with Star are proud of our
              partnership with BMS. They turned around the registration to the
              festival and the on ground management of delegates at our venues
              altering visitor experience at the festival which is the
              cornerstone of engagement at any LIVE event. BMS is an integral
              part of building MAMI and its growth in the last 6 years. Despite
              being a huge corporate their commitment to independent
              institutions in cultural spaces is unflinching. Our gratitude to
              Ashish Hemrajani and his team at BMS for their faith and support.”
            </p>

            <img
              className="w-[20%] h-[20%] rounded-full"
              src="https://assets-in.bmscdn.com/static/2021/06/smrit.jpeg"
            ></img>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Smriti Kiran
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Artistic Director - Mumbai Academy of Moving
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Image (MAMI)
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Jio MAMI Mumbai Film Festival with Star
            </h2>
          </div>
          <img
            className=" ml-52 mt-40"
            src="https://assets-in.bmscdn.com/static/2021/06/jio.jpeg"
          ></img>
          <div className="mt-24 ml-44">
            <img src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png"></img>
            <p className="font-normal text-[20px] leading-[26px]">
              It’s been eight fantastic years of RED FM working with Bookmyshow
              for listing and promoting its events and IPs through BMS. It has
              never felt like a client-vendor relationship. Both the brands have
              been equal partners, bringing incredible synergies to the
              projects. And both being leaders in their respective industries,
              RED FM and BMS have always set examples for other brands to
              follow.”
            </p>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Rajat Uppal{" "}
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              National Marketing Head - RED FM
            </h2>
          </div>
          <img
            className=" ml-52 mt-40"
            src="https://assets-in.bmscdn.com/static/2021/06/red-fmm.jpeg"
          ></img>
          <div className="mt-24 ml-44">
            <img src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png"></img>
            <p className="font-normal text-[20px] leading-[26px]">
              Apart from being market leaders and pioneers of the entertainment
              segment, Bookmyshow has also helped evolve Indian markets to
              consume fresh and different content. Sunburn and Bookmyshow’s
              association are years strong, and we will continue to work
              together, and grow together. Bookmyshow today not just offers to
              be a ticketing platform for Sunburn, put a partner with many more
              integrated offerings like marketing, planning and on ground
              operations support. We at Sunburn are proud and grateful to be
              associated with Bookmyshow!”
            </p>
            <img
              className="w-[20%] h-[20%] rounded-full"
              src="https://assets-in.bmscdn.com/static/2021/06/kar.jpeg"
            ></img>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              Karan Singh &
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              COO - Percept Live
            </h2>
            <h2 className="font-extrabold text-[20px]  text-[rgb(26,26,26)] leading-[36px]">
              CEO - Sunburn Percept Live Pvt. Ltd.
            </h2>
          </div>
          <img
            className=" ml-52 mt-40"
            src="https://assets-in.bmscdn.com/static/2021/06/perceptn.jpeg"
          ></img>
        </Slider>
      </div>
      <List4 />
    </div>
  );
}

export default List3;
