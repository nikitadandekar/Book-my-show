import React from "react";

function Icon() {
  return (
    <div className="bg-[rgb(51,51,56)] w-screen h-80 ">
      <div className="border-b-2 border-[rgb(102,102,102)] relative top-24"></div>
      <div className="relative top-20 left-[45%] ">
        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg"></img>
      </div>

      <div className="flex justify-center gap-7 pt-32 cursor-pointer">
        <i className="fa-brands fa-facebook  w-[40px] h-[40px] bg-[rgb(102,102,102)] hover:bg-slate-50 rounded-full p-3"></i>

        <i className="fa-brands fa-twitter  w-[40px] h-[35px] bg-[rgb(102,102,102)] hover:bg-slate-50 rounded-full p-3"></i>
        <i className="fa-brands fa-instagram  w-[40px] h-[40px] bg-[rgb(102,102,102)] hover:bg-slate-50 rounded-full p-3"></i>
        <i className="fa-brands fa-youtube  w-[40px] h-[40px] bg-[rgb(102,102,102)] hover:bg-slate-50 rounded-full p-3"></i>
        <i className="fa-brands fa-pinterest  w-[40px] h-[40px] bg-[rgb(102,102,102)] hover:bg-slate-50 rounded-full p-3"></i>
        <i className="fa-brands fa-linkedin  w-[40px] h-[40px] bg-[rgb(102,102,102)] hover:bg-slate-50 rounded-full p-3"></i>
      </div>
      <div className="text-[11px] text-[rgb(102,102,102)] pt-12 ">
        <div className="text-center">
          Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </div>
        <div className="text-center">
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </div>
      </div>
    </div>
  );
}

export default Icon;
