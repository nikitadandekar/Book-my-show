import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card3 from "./Components2.jsx/Card3";
const data3 = [
  {
    id: 1,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356910-dsrwsnbtca-portrait.jpg",
    title: "Vipul Goyal Live in Nagpur",
    name: "Chitnavis Center: Nagpur",
  },
  {
    id: 2,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00309320-tlklzqwjdr-portrait.jpg",
    title: "Monali Thakur Teaches Singing",
    name: "Singing",
    heading: " Online Streaming",
  },
  {
    id: 3,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338070-wcgctewsaa-portrait.jpg",
    title: "High Probable 1 to 30 min Nifty Options ",
    name: "Scalping",
    heading: " Online Streaming",
  },
  {
    id: 4,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00318756-grekfkebra-portrait.jpg",
    title: "Prasad from Somnath Ji",
    name: "Online",
  },
  {
    id: 5,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317512-unlypgvpam-portrait.jpg",
    title: "Sameer Anjaan Teaches ",
    name: "Lyrics Writing",
    heading: " Online Streaming",
  },
  {
    id: 6,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362735-unxqqaxeyk-portrait.jpg",
    title: "Hilltop Goa presents ",
    name: "Monsoon Blast",
    heading: "HillTop Vagator: Goa",
  },
  {
    id: 7,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364720-emwbfwsdya-portrait.jpg",
    title: "Shrimad Bhagwad Gita",
    name: "Watch on Zoom.",
  },
  {
    id: 8,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361707-cujwutvfvy-portrait.jpg",
    title: "Online Prasad From",
    name: "Vindhyachal",
    heading: " Online",
  },
  {
    id: 9,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00318752-ghrmyvqlvs-portrait.jpg",
    title: "Ashlesha Bali Puja in Udupi on 19th July",
    name: "Udupi on 19th July",
    heading: "Watch on Zoom.",
  },
  {
    id: 10,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363205-wdpbastnuy-portrait.jpg",
    title: "Talk Session in Culinary ",
    name: "Arts (Ft. Joao Garcia)",
    heading: "Watch on Zoom.",
  },
];
function Popular({ Movies }) {
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
      <div className="bg-[rgb(245,245,245)] w-[72%] ml-80 pt-14">
        <div className="flex justify-around  ">
          <div className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17] relative right-64 top-8">
            Popular Events
          </div>

          <div className="text-[rgb(258,53,88)] leading=[1.43] font-sans relative left-60 top-8">
            {Movies}
          </div>
        </div>
        <div>
          <Carousel responsive={responsive}>
            {data3.map((item) => (
              <Card3
                url={item.img_url}
                title={item.title}
                name={item.name}
                heading={item.heading}
                key={item.id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Popular;
