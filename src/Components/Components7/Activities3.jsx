import React from "react";
import Card4 from "./Activitiescard/Card4";
import Activities4 from "./Activities4";

function Activities3() {
  const data4 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00022344-sqmybjpkab-portrait.jpg",
      title: "Mumbai Filmcity Tour ",
      name: "with Bollywood Park",
      heading: "Gate No.1, Dadasaheb  ",
      subcontent: "Phalke Chitranagri: Mumbai",

      subheading: "Unique Tours",
      content: "₹ 999 onwards",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358945-fmwvkdbhmr-portrait.jpg",
      title: "Explore Manali ",
      name: "(3 Nights/4 Days)",
      heading: "Meeting Point:  ",
      subcontent: "Outside Delhi Airport",

      subheading: "Unique Tours",
      content: "₹ 17000 onwards",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312051-kuapxydmty-portrait.jpg",
      title: "Prasad from Ujjain ",
      name: "Shri Mahakaleshwar",
      heading: " ",
      subcontent: "Online",

      subheading: "Unique Tours",
      content: "₹ 17000 onwards",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359638-bkfledhdnq-portrait.jpg",
      title: "Explore Amritsar ",
      name: "(2 Nights/3 Days)",
      heading: "Outside Airport: ",
      subcontent: " Amritsar",

      subheading: "Unique Tours",
      content: "₹ 16000 onwards",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-32 ">
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
      <Activities4 />
    </div>
  );
}

export default Activities3;
