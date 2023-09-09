import React from "react";

import Card5 from "./Activitiescard/Card5";
import Activities5 from "./Activities5";

function Activities4() {
  const data5 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365141-ztrsuryqmm-portrait.jpg",
      title: "Gametosa Creators ",
      name: "Meetup",
      heading: " ",
      subcontent: "Watch on Zoom.",

      subheading: "VR Gaming",
      content: "₹ 89",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00014607-uhzgszvchk-portrait.jpg",
      title: "Imagicaa ",
      name: "Theme Park",
      heading: " Imagica Theme",
      subcontent: " Park (Khopoli): Mumbai",

      subheading: "Theme parks",
      content: "₹ 1002 onwards",
    },
    {
      id: 3,
      img_url:
        " https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348438-wrybsqmlbr-portrait.jpg",
      title: "Book Buddies -",
      name: "Monthly Reading Challenge",
      heading: " ",
      subcontent: "Watch on Zoom.",

      subheading: "Writing Competitions",
      content: "₹ 69",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00359588-mnatqajnjr-portrait.jpg",
      title: "Sanjari Advents ",
      name: "Tour Package`s",
      heading: " ",
      subcontent: "Multiple Venues",

      subheading: "Adventure Parks",
      content: "₹ 16000 onwards",
    },
  ];
  return (
    <div>
      <div className="w-[95%] h-96 flex gap-6 mt-32 ">
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
      <Activities5 />
    </div>
  );
}

export default Activities4;
