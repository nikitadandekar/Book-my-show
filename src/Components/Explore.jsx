import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Card5 from "./Components2.jsx/Card5";
import Home from "./Home";
const data5 = [
  {
    id: 1,
    img_url:
      " https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312049-ckvvzshyyn-portrait.jpg",
    title: "Maa Kamakhya Devi",
    name: "Prasad",
    heading: "Online ",
  },
  {
    id: 2,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364458-sfpeccdusw-portrait.jpg",
    title: "Spirited Secrets: Ghost ",
    name: "House Challenge",
    heading: "Watch on Zoom.",
  },
  {
    id: 3,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358358-zltmjqsfat-portrait.jpg",
    title: "Explore Shimla - Manali ",
    name: " (5 Nights/6 Days)",
    heading: "Meeting Point: Outside ",
    subtitle: "Delhi Airport",
  },
  {
    id: 4,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312048-tzzydpymyf-portrait.jpg",
    title: "Kashi Prasad of Baba ",
    name: "Vishwanath",
    heading: "Online ",
  },
  {
    id: 5,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNyBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358947-ggmlxbtkhk-portrait.jpg",
    title: "Explore Shimla (2  ",
    name: "Nights/3 Days)",
    heading: "Meeting Point: Outside ",
    subtitle: "Delhi Airport",
  },
  {
    id: 6,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363132-hkrlwenzls-portrait.jpg",
    title: "DUGGA DUGGA -  ",
    name: "VIRTUAL SAPTAMI DURGA PUJA PARIKRAMA",
    heading: "Watch on Zoom.",
  },
  {
    id: 7,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355866-cqlfxwauyc-portrait.jpg",
    title: "Samyog - Art Science ",
    name: " Gallery",
    heading: "Watch on Zoom.",
  },
  {
    id: 8,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310275-nxeasmrzgl-portrait.jpg",
    title: "Imagicaa Water Park ",
    name: "Imagica Water Park ",
    heading: "(Khopoli): Mumbai",
  },
  {
    id: 9,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312053-pxadtxklqz-portrait.jpg",
    title: "Ma Kali Prasad from ",
    name: "Kalighat",
    heading: "Online ",
  },
  {
    id: 10,
    img_url:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00064007-mhtvrvdfkr-portrait.jpg",
    title: "Meher Retreat - Day  ",
    name: "Picnic",
    heading: "Meher Retreat: Pune",
  },
];
function Explore({ Movies }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-[rgb(245,245,245)]">
      <div className="bg-[rgb(245,245,245)] w-[72%] ml-80 pt-14">
        <div className="flex justify-around  ">
          <div className="font-serif text-[rgb(51,51,51)] font-bold  text-[24px] leading-[1.17] relative right-64 top-8">
            Explore Fun Activites
          </div>

          <div className="text-[rgb(258,53,88)] leading=[1.43] font-sans relative left-56 top-8">
            {Movies}
          </div>
        </div>
        <div>
          <Carousel responsive={responsive}>
            {data5.map((item) => (
              <Card5
                url={item.img_url}
                title={item.title}
                name={item.name}
                heading={item.heading}
                subtitle={item.subtitle}
                key={item.id}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <Home />
    </div>
  );
}

export default Explore;
