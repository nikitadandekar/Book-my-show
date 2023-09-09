import React from "react";

function Card2({ url, title, name, heading, subheading, content }) {
  return (
    <div className="">
      <img className="rounded-lg w-52 " src={url}></img>
      <div className="text-[18px] font-medium font-serif text-[rgb(0,0,0)] leading-[1.33] pt-3">
        {title}
      </div>
      <div className="text-[18px] font-medium font-serif text-[rgb(0,0,0)] leading-[1.33]">
        {name}
      </div>
      <div className="text-[14px] font-normal trxt-[rgb(102,102,102)">
        {heading}
      </div>
      <div className="text-[14px] font-normal trxt-[rgb(102,102,102)">
        {subheading}
      </div>
      <div className="text-[14px] font-normal trxt-[rgb(102,102,102)">
        {content}
      </div>
    </div>
  );
}

export default Card2;
