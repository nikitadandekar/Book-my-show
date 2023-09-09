import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card1 from "./Components2.jsx/Card1";

const data = [
  {
    id: 1,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICBFYXJseSBSYXRpbmdz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359921-dnjpssrdlh-portrait.jpg",
    title: "Neeyat",
    name: "Crime Mystery/Thriller",
  },
  {
    id: 2,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICA1LjhLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355365-lzflppmver-portrait.jpg",
    title: "Baipan Bhari Deva",
    name: "Comedy/Drama",
  },
  {
    id: 2,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE5LjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-ulffbqyunn-portrait.jpg",
    title: "Mission Impossible: ",
    name: "Action/Adventure/Thriller",
  },
  {
    id: 3,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxOS4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338378-flxyehczgl-portrait.jpg",
    title: "Satyaprem Ki Katha",
    name: "Drama/Musical/Romantic",
  },

  {
    id: 5,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni41LzEwICA0LjlLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357727-gkcqddnxee-portrait.jpg",
    title: "Insidious:The Red Door",
    name: "Horror/Mystery/Thriller",
  },
  {
    id: 6,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS8xMCAgN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353537-yetvbfzxje-portrait.jpg",
    title: "1920:Horrors of the Heart",
    name: "Horror/Romantic/Thriller",
  },
  {
    id: 7,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS41LzEwICBFYXJseSBSYXRpbmdz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362248-udgulzbebr-portrait.jpg",
    title: "Zero Banhi Hero",
    name: "Comedy/Drama/Romantic",
  },
  {
    id: 8,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICAyLjZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346628-zxtbaykerr-portrait.jpg",
    title: "Virupaksha (Hindi)",
    name: " Action/Mystery/Thriller",
  },
  {
    id: 9,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICBFYXJseSBSYXRpbmdz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00300551-tuwxlpeuqs-portrait.jpg",
    title: "72 Hoorain",
    name: "Crime/Drama/Thriller",
  },
  {
    id: 10,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4xLzEwICAxOS4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359675-jtuuwzvsxh-portrait.jpg",
    title: "Spy",
    name: "Action/Thriller",
  },
];

function Recome({ heading, Movies }) {
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
      <div className="bg-[rgb(245,245,245)] w-[72%] ml-80">
        <div className="flex justify-around  ">
          <div className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17] relative right-64 top-8">
            {heading}
          </div>

          <div className="text-[rgb(258,53,88)] leading=[1.43] font-sans relative left-56 top-8">
            {Movies}
          </div>
        </div>

        <div>
          <Carousel responsive={responsive}>
            {data.map((item) => (
              <Card1
                url={item.img_url}
                title={item.title}
                name={item.name}
                key={item.id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Recome;
