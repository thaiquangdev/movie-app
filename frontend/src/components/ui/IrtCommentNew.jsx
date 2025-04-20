import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const IrtCommentNew = () => {
  return (
    <Link className="flex flex-col justify-center h-[68px] gap-[0.2rem] py-[0.6rem] pr-[0.8rem] pl-[calc(30px+1.6rem)] rounded-[0.6rem] bg-[#0005] border border-transparent text-textBase">
      <div className="w-[30px] h-[30px] flex-shrink-0 absolute top-[18px] left-[0.8rem] rounded-[50%] overflow-hidden">
        <img
          src="https://www.rophim.me/images/avatars/pack1/05.jpg"
          alt=""
          className="absolute w-full h-full top-0 right-0 bottom-0 left-0 object-cover "
        />
      </div>
      <div className="text-[12px] line-clamp-1">
        <span>Thái Quang</span>
        Yeol oppa hình mẫu lý tưởng 😋
      </div>
      <div className="text-[12px] leading-[1.5] text-[#fff5] inline-flex items-center gap-1">
        <small>
          <FaPlay className="text-primary" />
        </small>
        <span className="line-clamp-1">Đừng cử động</span>
      </div>
    </Link>
  );
};

export default IrtCommentNew;
