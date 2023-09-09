import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-[rgb(34,37,57)] h-11 cursor-pointer ">
      <div className="flex justify-around cursor-pointer">
        <div className="nav flex text-[rgb(255,255,255)] justify-between w-96 ml-16 text-sm  pt-4 mb-10 tracking-tight cursor-pointer ">
          {/* <a href="/">Movies</a>
          <a href="/">Stream</a>
          <a href="/">Events</a>
          <a href="/">Plays</a>
          <a href="/">Sports</a>
          <a href="/">Activities</a>
          <a href="/">Buzz</a> */}

          {/* <Link to={"Buzz"}>Buzz</Link> */}
          <Link to={"movies-nagpur"}>Movies</Link>
          <Link to={"plays-nagpur"}>Plays</Link>
          <Link to={"sports-nagpur"}>Sports</Link>
          <Link to={"activities-nagpur"}>Activities</Link>
          <a className="text-red-500 text-xs relative right-72 bottom-5">New</a>
        </div>
        <div className="nav flex text-[rgb(255,255,255)] justify-between w-96 text-sm pl-16 pt-4 mb-10 tracking-tight mr-7 cursor-pointer ">
          {/* <a href="/">ListYourShow</a>
          <a href="/">Corporates</a>
          <a href="/">Offer</a>
          <a href="/">Gift Cards</a>
          <a href="/"></a> */}

          <Link to={"list-your-show"}>ListYourShow</Link>
          <Link to={"voucher"}>Carporates</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
