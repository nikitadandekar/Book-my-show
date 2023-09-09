import React from "react";

import Card6 from "./Activitiescard/Card6";
import Activities6 from "./Activities6";

function Activities5() {
  const data6 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00135510-gsffvjdgag-portrait.jpg",
      title: "The Hidden Hour - ",
      name: "Escape Games",
      heading: " ",
      subcontent: "Multiple Venues",
      subheading: "Escape Games",
      content: "₹ 199 onwards",
    },

    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00136913-qcpgxbhuuq-portrait.jpg",
      title: "Imagicaa - A Themed ",
      name: "Entertainment Destination",
      heading: " ",
      subcontent: "Multiple Venues",
      subheading: "Theme parks",
      content: "₹ 766 onwards",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-32 ">
        {data6.map((item) => (
          <Card6
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

export default Activities5;
