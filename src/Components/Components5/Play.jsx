import React from "react";

import Filter2 from "./Filter2";
import Card1 from "./Playcard/Card1";
import Play1 from "./Play1";
import Play3 from "./Play3";

function Play() {
  const data1 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364826-nbcmtzqcqv-portrait.jpg",
      title: "Aamne Saamne - Nagpur",
      name: "",
      heading: "Vasantrao Deshpande Hall: Nagpur ",
      subheading: "Marathi",
      content: "₹ 300 onwards",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00098092-kxqpghhxlv-portrait.jpg",
      title: "Moruchi Mavshi",
      name: "",
      heading: "Vasantrao Deshpande Hall: Nagpur ",
      subheading: "Marathi",
      content: "₹ 300 onwards",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361868-byrzbjauxj-portrait.jpg",
      title: "Sandhya Chaaya",
      name: "",
      heading: "Vasantrao Deshpande Hall: Nagpur  ",
      subheading: "Marathi",
      content: "₹ 300 onwards",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNyBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359309-gbguhdzdbl-portrait.jpg",
      title: "PAW Patrol Live!",
      name: "Race to the Rescue",
      heading: "Grand Theatre, Nita Mukesh Ambani Cultural Centre ",
      subheading: "English",
      content: "₹ 750 onwards",
    },
  ];

  return (
    <div>
      <div className="flex justify-evenly bg-[rgb(245,245,245)] h-fit  w-screen pt-11">
        <Filter2 />
        <div className="mr-64 ml-8 w-[200%] mb-28">
          <h1 className="capitalize text-[rgb(51,51,51)] font-bold text-[24px] leading-6">
            Plays in Nagpur
          </h1>
          <div className="leading-4 text-[rgb(220,53,75)] text-[12px] pt-10 cursor-pointer font-normal flex gap-6 ">
            <button className="w-16 h-8 rounded-2xl bg-[rgb(255,255,255)] px-4 py-2">
              Theatre
            </button>
          </div>

          <div className="w-[95%] h-96 flex gap-6 mt-9 ">
            {data1.map((item) => (
              <Card1
                url={item.img_url}
                title={item.title}
                name={item.name}
                heading={item.heading}
                subheading={item.subheading}
                content={item.content}
                key={item.id}
              />
            ))}
          </div>
          <Play1 />
        </div>
      </div>
      <Play3 />
    </div>
  );
}

export default Play;
