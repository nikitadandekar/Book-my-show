import React from "react";

function Premiere({
  Topic,
  heading,
  subheading,
  title,
  head,
  Honey,
  name,
  date,
  location,
  subtitle,
  para,
  desc,
  trend,
}) {
  return (
    <div className="bg-[rgb(49,49,72)] ">
      <div>
        <img
          className="relative left-80 cursor-pointer"
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
        ></img>
        <h1 className="font-sans text-[rgb(255,255,255)] font-bold text-[24px] leading-[1.17] pt-9 ml-80">
          {Topic}
        </h1>
        <h1 className="font-serif text-[rgb(255,255,255)] text-[14px] leading-[1.43] mt-2  ml-80">
          {subheading}
        </h1>

        <div className="flex ml-80 gap-7">
          <div>
            <img
              className="rounded-lg mt-3 w-60 "
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00363044-hxgnqxbdxd-portrait.jpg"
            ></img>
            <div className="pt-2 text-[rgb(255,255,255)] font-sans font-medium leading-[1.33] text-lg">
              {heading}
            </div>
            <div className="text-[rgb(255,255,255)] font-sans text-lg leading-6 font-normal">
              {title}
            </div>
          </div>
          <div>
            <img
              className="rounded-lg mt-3 w-60"
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00363608-yucjkdkglg-portrait.jpg"
            ></img>
            <div className="pt-2 text-[rgb(255,255,255)] font-sans font-medium leading-[1.33] text-lg">
              {head}
            </div>
            <div className="text-[rgb(255,255,255)] font-sans font-medium leading-[1.33] text-lg">
              {Honey}
            </div>
            <div className="text-[rgb(255,255,255)] font-sans text-lg leading-6 font-normal">
              {name}
            </div>
          </div>
          <div>
            <img
              className="rounded-lg mt-3 w-60"
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356168-szattyrjwz-portrait.jpg"
            ></img>
            <div className="pt-2 text-[rgb(255,255,255)] font-sans font-medium leading-[1.33] text-lg">
              {date}
            </div>
            <div className="text-[rgb(255,255,255)] font-sans text-lg leading-6 font-normal">
              {location}
            </div>
          </div>
          <div>
            <img
              className="rounded-lg mt-3 w-60"
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00352688-bqsmbbayrl-portrait.jpg"
            ></img>
            <div className="pt-2 text-[rgb(255,255,255)] font-sans font-medium leading-[1.33] text-lg">
              {subtitle}
            </div>
            <div className="text-[rgb(255,255,255)] font-sans text-lg leading-6 font-normal">
              {para}
            </div>
          </div>
          <div>
            <img
              className="rounded-lg mt-3 w-60"
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00362982-zhbnwfdwue-portrait.jpg"
            ></img>
            <div className="pt-2 text-[rgb(255,255,255)] font-sans font-medium leading-[1.33] text-lg">
              {desc}
            </div>
            <div className="text-[rgb(255,255,255)] font-sans text-lg leading-6 font-normal">
              {trend}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premiere;
