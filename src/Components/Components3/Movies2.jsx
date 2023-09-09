import React from "react";
import Card2 from "./Musiccard/Card2";
import Card3 from "./Musiccard/Card3";
import Movies3 from "./Movies3";

function Movies2() {
  const data7 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICAxMy4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-uxewjtfjhg-portrait.jpg",
      title: "Barbie",
      name: "",
      heading: "UA",
      subheading: "English",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICAxLjhLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360617-dbpzmfxhfz-portrait.jpg",
      title: "Ajmer 92",
      name: "",
      heading: "A",
      subheading: "Hindi",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni44LzEwICA0LjFLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363708-drlrcwsdjn-portrait.jpg",
      title: "Minus 31 : The Nagpur",
      name: "Files",
      heading: "A",
      subheading: "Hindi",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni45LzEwICAxLjdLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363093-ngburlpudc-portrait.jpg",
      title: "Aflatoon",
      name: "",
      heading: "UA",
      subheading: "Marathi",
    },
  ];

  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-20 ">
        {data7.map((item) => (
          <Card2
            url={item.img_url}
            title={item.title}
            name={item.name}
            heading={item.heading}
            subheading={item.subheading}
            key={item.id}
          />
        ))}
      </div>
      <Movies3 />
    </div>
  );
}

export default Movies2;
