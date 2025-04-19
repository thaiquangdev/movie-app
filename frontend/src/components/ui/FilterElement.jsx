import React from "react";

const FilterElement = (props) => {
  return (
    <div className="flex items-start justify-between gap-8 px-2 py-4 border-b border-dashed border-borderColor">
      <div className="w-[120px] py-[0.3rem] text-right text-[0.9em] flex-shrink-0 font-medium text-white">
        {props.title}:
      </div>
      <div className="flex flex-grow flex-wrap justify-start gap-2 text-[0.875em]">
        <div className="border border-[#fff3] text-primaryText opacity-[1] py-[0.3rem] px-[0.6rem] rounded-[0.4rem]">
          Tất cả
        </div>
        {props.data.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-transparent text-white opacity-[0.8] py-[0.3rem] px-[0.6rem] rounded-[0.4rem]"
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterElement;
