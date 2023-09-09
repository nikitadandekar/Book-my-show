import React from "react";

import Paragraph2 from "./Paragraph2";

function Movies4() {
  return (
    <div className="bg-[rgb(255,255,255)] h-16 w-screen">
      <div className="flex ml-80 pt-2 pb-2">
        <div className="text-[rgb(170,171,172)] cursor-pointer">Home ----</div>
        <div className="text-[rgb(170,171,172)] cursor-pointer">Movies</div>
      </div>
      <Paragraph2 />
    </div>
  );
}

export default Movies4;
