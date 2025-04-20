import React from "react";
import { FaFilter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  categoryData,
  CountryData,
  movieGenreData,
  rankData,
  sortData,
  versionData,
  yearOfManufureData,
} from "../../utils/FilterData";
import FilterElement from "./FilterElement";

const Filter = ({ showFil = false }) => {
  const [showFilter, setShowFilter] = React.useState(showFil);

  // Hàm xử lý mở đóng filter
  const handleViewFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div className="mb-8">
      <div
        onClick={handleViewFilter}
        className="pr-3 pl-2 h-[30px] text-white text-[1.1em] font-medium rounded-[0.3rem] inline-flex items-center gap-2 cursor-pointer"
      >
        <FaFilter
          className={showFilter ? "text-primary" : "text-white"}
          size={12}
        />
        <span>Bộ lọc</span>
      </div>
      {showFilter && (
        <div className="rounded-[0.75rem] border border-borderColor pt-[1rem] mt-[-15px] mb-[3rem]">
          <FilterElement title="Quốc gia" data={CountryData} />
          <FilterElement title="Loại phim" data={categoryData} />
          <FilterElement title="Xếp hạng" data={rankData} />
          <FilterElement title="Thể loại" data={movieGenreData} />
          <FilterElement title="Phiên bản" data={versionData} />
          <FilterElement title="Năm sản xuất" data={yearOfManufureData} />
          <FilterElement title="Sắp xếp" data={sortData} />
          <div className="flex items-start justify-between gap-8 px-4 py-6 border-b border-dashed border-borderColor">
            <div className="w-[120px] py-[0.3rem] text-right flex-shrink-0 font-medium text-white">
              &nbsp;
            </div>
            <div className="flex-grow">
              <button
                type="button"
                className="bg-primary text-primaryButtonText border border-borderColor rounded-[2rem] text-[14px] font-medium inline-flex items-center justify-center gap-2 py-2 px-[1.1rem] opacity-[1] min-h-[40px]"
              >
                Lọc kết quả
                <IoIosArrowRoundForward size={20} />
              </button>
              <button
                onClick={handleViewFilter}
                type="button"
                className="px-6 ml-2 border border-white bg-transparent rounded-[2rem] text-[14px] font-medium inline-flex items-center justify-center gap-2 py-2 opacity-[1] min-h-[40px]"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
