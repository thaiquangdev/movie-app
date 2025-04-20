import React from "react";
import { Link } from "react-router-dom";

const CardActor = () => {
  return (
    <div className="relative rounded-[0.6rem] overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <Link className="w-full h-0 pb-[calc(100%+40px)] mask-image flex-shrink-0 overflow-hidden relative bg-bg2">
          <img
            src="https://image.tmdb.org/t/p/w500/pI6g1iVlUy7cUAZ6AspVXWq4kli.jpg"
            alt="Madonna"
            className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover"
          />
        </Link>
        <div className="py-3 px-2 mt-[-40px] relative z-[2]">
          <h4 className="line-clamp-2 text-[1.1em] font-medium mb-[0.4rem] leading-[1.5] text-white">
            Mandonna
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardActor;
