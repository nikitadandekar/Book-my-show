import React from "react";
import Filter3 from "./Filter3";
import Card1 from "./Sportcard/Card1";
import Sport1 from "./Sport1";
import Sport6 from "./Sport6";

function Sport() {
  const data1 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-vmlrnvgjgx-portrait.jpg",
      title: "MotoGP Bharat 2023",
      name: "",
      heading: "Buddh International ",
      subcontent: "Circuit: Greater Noida",

      subheading: "Moto GP",
      content: "₹ 800 onwards",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-qmfyvyaefq-portrait.jpg",
      title: "Online Game - Lost ",
      name: "Treasure of Sundarbans",
      heading: " Online (Play From Home)",
      subheading: "E Sports",
      content: "₹ 199",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-wyrhslrdpz-portrait.jpg",
      title: "Online Game - Flight",
      name: " 9032 Murder Mystery",
      heading: " Online (Play From Home)",
      subheading: "E Sports",
      content: "₹ 199",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336076-mlyrblabfu-portrait.jpg",
      title: "Family Housie Night ",
      name: "by Malsar Events",
      heading: "Watch on Zoom. ",
      subheading: "Online Games",
      content: "₹ 99",
    },
  ];
  return (
    <div>
      <div className=" cursor-pointer bg-[rgb(235,235,235)] pt-3 pb-4 ml-64 ">
        <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1690785991917_motogpbharatdesktop.jpg"></img>
      </div>
      <div className="flex justify-evenly bg-[rgb(245,245,245)] h-fit  w-screen ">
        <Filter3 />
        <div className="mr-64 ml-8 w-[200%] mb-28">
          <h1 className="capitalize text-[rgb(51,51,51)] font-bold text-[24px] leading-6">
            Sports in Nagpur
          </h1>

          <div className="leading-4 text-[rgb(220,53,75)] text-[12px] pt-10 cursor-pointer font-normal flex gap-6 ">
            <button className="w-28 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Online Games
            </button>
            <button className="w-20 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              E Sports
            </button>
            <button className="w-16 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Chess
            </button>
            <button className="w-28 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Motorsports
            </button>
            <button className="w-28 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Online Sports
            </button>
          </div>

          <div className="w-[95%] h-96 flex gap-6 mt-9 ">
            {data1.map((item) => (
              <Card1
                url={item.img_url}
                title={item.title}
                name={item.name}
                heading={item.heading}
                subcontent={item.subcontent}
                subheading={item.subheading}
                content={item.content}
                key={item.id}
              />
            ))}
          </div>
          <Sport1 />
        </div>
      </div>
      <Sport6 />
    </div>
  );
}

export default Sport;
