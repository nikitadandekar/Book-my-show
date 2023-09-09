import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card4 from "./Components2.jsx/Card4";
const data4 = [
  {
    id: 1,
    img_url:
      " https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-zsrmxqxakh-portrait.jpg",
    title: "MotoGP Bharat 2023",
    name: "Buddh International",
    heading: "Greater Noida ",
  },
  {
    id: 2,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-qmfyvyaefq-portrait.jpg",
    title: "Online Game - Lost",
    name: "Treasure of Sundarbans",
    heading: "Online (Play From Home)",
  },
  {
    id: 3,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-wyrhslrdpz-portrait.jpg",
    title: "Online Game - Flight",
    name: "9032 Murder Mystery",
    heading: "Online (Play From Home)",
  },
  {
    id: 4,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363720-mxaeqbfyhs-portrait.jpg",
    title: "ONLINE HOUSIE WITH",
    name: "KASA KAI MUMBAI",
    heading: "Watch on Zoom.",
  },
  {
    id: 5,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336076-mlyrblabfu-portrait.jpg",
    title: "ONLINE HOUSIE WITH",
    name: "KASA KAI MUMBAI ",
    heading: "Watch on Zoom.",
  },
  {
    id: 6,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339877-uygyrtckvl-portrait.jpg",
    title: "Samurai Sudoku ",
    name: "Championship by Malsar",
    heading: "Watch on Zoom.",
  },
  {
    id: 7,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348054-kguvwzufka-portrait.jpg",
    title: "All India Quick Chess ",
    name: "Championship",
    heading: "Watch on Zoom.",
  },
  {
    id: 8,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363814-rxbtlreanf-portrait.jpg",
    title: "ONLINE HOUSIE WITH",
    name: "KASA KAI MUMBAI ",
    heading: "Watch on Zoom.",
  },
  {
    id: 9,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354868-ejdhwlppta-portrait.jpg",
    title: "All India Blitz Chess ",
    name: "Championship",
    heading: "Watch on Zoom.",
  },
  {
    id: 10,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340999-hzewlffagd-portrait.jpg",
    title: "Ludo Tournament by ",
    name: "Malsar",
    heading: "Watch on Zoom.",
  },
];
function Games({ Movies }) {
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
          <div className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17] relative right-56 top-8">
            Top Games & Sports Events
          </div>

          <div className="text-[rgb(258,53,88)] leading=[1.43] font-sans relative left-52 top-8">
            {Movies}
          </div>
        </div>
        <div>
          <Carousel responsive={responsive}>
            {data4.map((item) => (
              <Card4
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

export default Games;
