import React from "react";
import Card3 from "./Sportcard/Card3";
import Sport4 from "./Sport4";

function Sport3() {
  const data3 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337798-nkbcltfhgz-portrait.jpg",
      title: "Monthly Sudoku Challenge by ",
      name: " MALSAR",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Games",
      content: "₹ 79",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336144-wxfkkgfdcq-portrait.jpg",
      title: "All India Sudoku Championship ",
      name: " (AISC) - Winter 2023",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Games",
      content: "₹ 149",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363817-vhrlfheuxe-portrait.jpg",
      title: "ONLINE HOUSIE WITH ",
      name: " KASA KAI MUMBAI",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Games",
      content: "₹ 100",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337808-xbsqtrsucw-portrait.jpg",
      title: "Family Housie Night -",
      name: "  Dhanteras Special",
      heading: "",
      subcontent: "Watch on Zoom.",
      subheading: "Online Games",
      content: "₹ 99",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-40 ">
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
      <Sport4 />
    </div>
  );
}

export default Sport3;
