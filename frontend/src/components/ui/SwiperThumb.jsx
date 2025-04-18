import React from "react";

const SwiperThumb = (props) => {
  return (
    <div className="w-[70.8333px] mr-[5px] h-[45px] cursor-pointer relative border-3 border-transparent">
      <img
        src={props.thumbUrl}
        alt={props.title}
        className="w-full h-full object-cover bg-bg2"
      />
    </div>
  );
};

export default SwiperThumb;
