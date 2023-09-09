import React from "react";
import Card3 from "./Musiccard/Card3";
import Music4 from "./Movies4";

function Music3() {
  const data8 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICAzNC42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338378-flxyehczgl-portrait.jpg",
      title: "Satyaprem Ki Katha",
      heading: "UA",
      subheading: "Hindi",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxLjlLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357595-wspgmtrnnr-portrait.jpg",
      title: "Trailers Screening ",
      name: "Show",
      heading: "UA",
      subheading: "Multi Language",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Mi45LzEwICBFYXJseSBSYXRpbmdz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364676-xfbfpumcjn-portrait.jpg",
      title: "Tuzyat Mee",
      name: "",
      heading: "UA",
      subheading: "Marathi",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-20 ">
        {data8.map((item) => (
          <Card3
            url={item.img_url}
            title={item.title}
            name={item.name}
            heading={item.heading}
            subheading={item.subheading}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Music3;
