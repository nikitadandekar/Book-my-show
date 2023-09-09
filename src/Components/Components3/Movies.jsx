import React from "react";
import Card1 from "./Musiccard/Card1";

import Movies2 from "./Movies2";
import Filter from "./Filter";
import Movies4 from "./Movies4";
import Adv1 from "./Adv1";

function Movies() {
  const data6 = [
    {
      id: 1,
      img_url:
        " https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyNy44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355365-lzflppmver-portrait.jpg",
      title: "Baipan Bhari Deva",
      name: "",
      heading: "UA ",
      subheading: "Marathi",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICA0OUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-zklzrdqjwu-portrait.jpg",
      title: "Oppenheimer",
      name: "",
      heading: "UA",
      SUBHEADING: "English,Hindi",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTAuNksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-azdlcgruwe-portrait.jpg",
      title: "Rocky Aur Rani Kii ",
      name: "Prem Kahaani",
      heading: "UA",
      subheading: "Hindi",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4My41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
      title: "Mission Impossible: ",
      name: "Dead Reckoning - Part One",
      heading: "UA",
      subheding: "English,Hindi,Tamil,Telgu",
    },
  ];

  return (
    <div>
      <Adv1 />
      <div className="flex justify-evenly bg-[rgb(245,245,245)] h-fit  w-screen pt-11">
        <Filter />
        <div className="mr-64 ml-8 w-[200%] mb-28">
          <h1 className="capitalize text-[rgb(51,51,51)] font-bold text-[24px] leading-6">
            Movies in Nagpur
          </h1>
          <div className="leading-4 text-[rgb(220,53,75)] text-[12px] pt-10 cursor-pointer font-normal flex gap-6 ">
            <button className="w-16 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Hindi
            </button>
            <button className="w-16 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              English
            </button>
            <button className="w-16 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Marathi
            </button>
            <button className="w-32 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Multi Language
            </button>
          </div>
          <div className="mt-10">
            <img
              className="w-[94%] "
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/coming-soon-web-collection-202012090733.png"
            ></img>
          </div>
          <div className="w-[95%] h-96 flex gap-6 mt-9 ">
            {data6.map((item) => (
              <Card1
                url={item.img_url}
                title={item.title}
                name={item.name}
                heading={item.heading}
                subheading={item.subheading}
                key={item.id}
              />
            ))}
          </div>
          <Movies2 />
        </div>
      </div>
      <Movies4 />
    </div>
  );
}

export default Movies;
