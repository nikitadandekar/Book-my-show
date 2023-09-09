import React from "react";
import Card2 from "./Playcard/Card2";

function Play1() {
  const data2 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365247-uxlaktqfgt-portrait.jpg",
      title: "Aamne Saamne - Navrang ",
      name: "Navrang (Nagpur)",
      heading: "Vasantrao Deshpande Hall: Nagpur",
      subheading: "Marathi",
      content: "₹ 300 onwards",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00115260-smlttbbwas-portrait.jpg",
      title: "Aamne Saamne - ",
      name: "Marathi Play",
      heading: "Vasantrao Deshpande Hall: Nagpur",
      subheading: "Marathi",
      content: "₹ 300 onwards",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-44 ">
        {data2.map((item) => (
          <Card2
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
    </div>
  );
}

export default Play1;
