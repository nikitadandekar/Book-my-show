import React from "react";
import Card5 from "./Sportcard/Card5";

function Sport5() {
  const data5 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311499-sncfjhqsql-portrait.jpg",
      title: "Online Game - Mission ",
      name: "  Black Terror",
      heading: "",
      subcontent: "Online (Play From Home)",
      subheading: "E Sports",
      content: "₹ 199",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-40 ">
        {data5.map((item) => (
          <Card5
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
    </div>
  );
}

export default Sport5;
