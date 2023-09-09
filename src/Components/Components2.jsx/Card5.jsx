import React from "react";

function Card4({ url, title, name, heading, subtitle }) {
  return (
    <div className=" mt-14">
      <img className="rounded-lg w-60    " src={url}></img>
      <div className="text-[rgb(34,34,34)] text-[18px] font-medium leading-snug text-ellipsis pt-2">
        {title}
      </div>
      <div className="text-[rgb(34,34,34)] text-[18px] font-medium leading-snug text-ellipsis pt-2">
        {name}
      </div>
      <div className="text-[16px] overflow-hidden leading-5 text-ellipsis text-[rgb(102,102,102)] pt-2">
        {heading}
      </div>
      <div>{subtitle}</div>
    </div>
  );
}

export default Card4;
