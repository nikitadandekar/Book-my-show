import React from "react";
import Card2 from "./Activitiescard/Card2";
import Activities2 from "./Activities2";

function Activities1() {
  const data2 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365296-afyqmwmvnn-portrait.jpg",
      title: "Current Affairs Quiz ",
      name: "",
      heading: " ",
      subcontent: "Watch on Zoom.",

      subheading: "Writing Competitions",
      content: "₹ 30",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363132-hkrlwenzls-portrait.jpg",
      title: "DUGGA DUGGA - VIRTUAL ",
      name: "SAPTAMI DURGA PUJA PARIKRAMA",
      heading: " ",
      subcontent: "Watch on Zoom.",

      subheading: "Durga Puja Festival",
      content: "₹ 399",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310275-bddldkbgqg-portrait.jpg",
      title: "Imagicaa Water Park",
      name: "",
      heading: " ",
      subcontent: "Imagicaa Water Park",

      subheading: "Theme Parks",
      content: "₹ 766 onwards",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312053-pxadtxklqz-portrait.jpg",
      title: "Ma Kali Prasad ",
      name: "from Kalighat",
      heading: " ",
      subcontent: "Online",

      subheading: "unquiue Tours",
      content: "₹ 599",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-32 ">
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
      <Activities2 />
    </div>
  );
}

export default Activities1;
