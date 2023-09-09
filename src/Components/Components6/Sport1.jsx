import React from "react";
import Card2 from "./Sportcard/Card2";
import Sport3 from "./Sport3";

function Sport1() {
  const data2 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339877-uygyrtckvl-portrait.jpg",
      title: "Samurai Sudoku ",
      name: " Championship by Malsar",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Games",
      content: "₹ 199",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348054-kguvwzufka-portrait.jpg",
      title: " All India Quick Chess ",
      name: "Championship",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Chess",
      content: "₹ 199 onwards",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354868-ejdhwlppta-portrait.jpg",
      title: "All India Blitz Chess ",
      name: " Championship",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Chess",
      content: "₹ 149 onwards",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340999-hzewlffagd-portrait.jpg",
      title: " Ludo Tournament by",
      name: " Malsar",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Games",
      content: "₹ 149 onwards",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-40 ">
        {data2.map((item) => (
          <Card2
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
      <Sport3 />
    </div>
  );
}

export default Sport1;
