import React from "react";
import Filter4 from "./Filter4";
import Card1 from "./Activitiescard/Card1";
import Activities1 from "./Activities1";
import Activities6 from "./Activities6";

function Activities() {
  const data1 = [
    {
      id: 1,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364458-sfpeccdusw-portrait.jpg",
      title: "Spirited Secrets: ",
      name: "Ghost House Challenge",
      heading: " ",
      subcontent: "Watch on Zoom.",

      subheading: "Escape Games",
      content: "FREE",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358358-zltmjqsfat-portrait.jpg",
      title: "Explore Shimla - ",
      name: "Manali (5 Nights/6 Days)",
      heading: " Meeting Point:",
      subcontent: " Outside Delhi Airport",

      subheading: "Unique Tours",
      content: "₹ 27000 onwards",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312048-tzzydpymyf-portrait.jpg",
      title: "Kashi Prasad of ",
      name: "Baba Vishwanath",
      heading: "Online",
      subcontent: "Unique Tours",

      subheading: "",
      content: "₹ 599 onwards",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358947-ggmlxbtkhk-portrait.jpg",
      title: "Explore Shimla (2 ",
      name: "Nights/3 Days)",
      heading: " Meeting Point: Chandigarh ",
      subcontent: "Railway Station",

      subheading: "Unique Tours",
      content: "₹ 17000 onwards",
    },
  ];
  return (
    <div>
      <div className="flex justify-evenly bg-[rgb(245,245,245)] h-fit  w-screen pt-11">
        <Filter4 />
        <div className="mr-64 ml-8 w-[200%] mb-28">
          <h1 className="capitalize text-[rgb(51,51,51)] font-bold text-[24px] leading-6">
            Activities in Nagpur
          </h1>

          <div className="leading-4 text-[rgb(220,53,75)] text-[12px] pt-10 cursor-pointer font-normal flex gap-3 ">
            <button className="w-20 h-8 rounded-2xl bg-[rgb(255,255,255)] px-1 py-1">
              Unique Tours
            </button>
            <button className="w-28 h-8 rounded-2xl bg-[rgb(255,255,255)] px-1 py-1">
              Amusement Parks
            </button>
            <button className="w-14 h-8 rounded-2xl bg-[rgb(255,255,255)] px-1 py-1">
              Gaming
            </button>
            <button className="w-40 h-8 rounded-2xl bg-[rgb(255,255,255)] px-1 py-1">
              Quizzes and Competitions
            </button>
            <button className="w-20 h-8 rounded-2xl bg-[rgb(255,255,255)] px-1 py-1">
              Adventure
            </button>
            <button className="w-28 h-8 rounded-2xl bg-[rgb(255,255,255)] px-1 py-1">
              Tourist Attractions
            </button>
            <button className="w-32 h-8 rounded-2xl bg-[rgb(255,255,255)] px-1 py-1">
              Durga Puja Festival
            </button>
          </div>
          <div className="w-[95%] h-96 flex gap-6 mt-9 ">
            {data1.map((item) => (
              <Card1
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
          <Activities1 />
        </div>
      </div>
      <Activities6 />
    </div>
  );
}

export default Activities;
