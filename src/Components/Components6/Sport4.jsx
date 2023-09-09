import React from "react";
import Card4 from "./Sportcard/Card4";
import Sport5 from "./Sport5";

function Sport4() {
  const data4 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343705-alqfgmtmwp-portrait.jpg",
      title: " 21 Days Walking ",
      name: " Challenge by MALSAR",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Sports",
      content: "₹ 99",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMSBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359941-twmemsmwdg-portrait.jpg",
      title: "Monthly Chess ",
      name: " challenge by Malsar",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Chess",
      content: "₹ 79",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312765-spgxbjcjsj-portrait.jpg",
      title: "Online Game- Santa's ",
      name: "Mysterious Escape ",
      heading: "",
      subcontent: "Online (Play From Home)",
      subheading: "E Sports",
      content: "₹ 999",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363816-rrfcrzxxxn-portrait.jpg",
      title: "ONLINE HOUSIE WITH  ",
      name: " KASA KAI MUMBAI",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Games",
      content: "₹ 109",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-40 ">
        {data4.map((item) => (
          <Card4
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
      <Sport5 />
    </div>
  );
}

export default Sport4;
