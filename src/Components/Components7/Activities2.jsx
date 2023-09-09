import React from "react";
import Card3 from "./Activitiescard/Card3";
import Activities3 from "./Activities3";

function Activities2() {
  const data3 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00064007-mhtvrvdfkr-portrait.jpg",
      title: "Meher Retreat -",
      name: " Day Picnic",
      heading: " ",
      subcontent: "Meher Retreat: Pune",

      subheading: "Resorts",
      content: "₹ 590 onwards",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355866-cqlfxwauyc-portrait.jpg",
      title: "Samyog - Art ",
      name: "Science Gallery",
      heading: " ",
      subcontent: "Watch on Zoom.",

      subheading: "Unique Tours",
      content: "₹ 10",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355870-cpyunbzkkk-portrait.jpg",
      title: "ANOKHI - The Science ",
      name: "Illusion Gallery",
      heading: " ",
      subcontent: "Watch on Zoom.",

      subheading: "Unique Tours",
      content: "₹ 10",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358946-huyqkdxkxl-portrait.jpg",
      title: "Explore Kashmir ",
      name: "(5 Nights/6 Days)",
      heading: "Srinagar International ",
      subcontent: " Airport: Srinagar",

      subheading: "Unique Tours",
      content: "₹ 32000 onwards",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-32 ">
        {data3.map((item) => (
          <Card3
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
      <Activities3 />
    </div>
  );
}

export default Activities2;
