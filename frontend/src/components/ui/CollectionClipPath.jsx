import React from "react";
import CardMovieClipPath from "./CardMovieClipPath";
import CustomSlider from "./CustomSlider";

const CollectionClipPath = (props) => {
  const movies = [...Array(10).keys()].map((i) => (
    <div>{<CardMovieClipPath key={i} index={i + 1} />}</div>
  ));
  return (
    <div className="animate-fadeInUp">
      <div className="px-[20px] mx-auto">
        <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[1.2rem]">
          <h2 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-md">
            {props.title}
          </h2>
        </div>
        <div>
          <CustomSlider
            items={movies}
            slidesPerView={5}
            spaceBetween={16}
            btnView={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionClipPath;
