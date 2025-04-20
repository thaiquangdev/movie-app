import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import CardMovieLong from "./CardMovieLong";
import CustomSlider from "./CustomSlider";

const RowTopicList = () => {
  const movies = [...Array(10).keys()].map((i) => (
    <div>{<CardMovieLong key={i} />}</div>
  ));

  return (
    <div className="px-[20px]">
      <div className="rounded-[1rem] p-2 gap-2">
        <div>
          <div className="flex justify-between items-center gap-4 bg-transparent">
            <div className="flex flex-col w-[200px] relative z-30 pr-[1.5rem] pl-2 gap-6 flex-grow">
              <div
                className="font-bold text-[1.8em] tracking-[1px] 
             bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(103,65,150)_130%)] 
             bg-clip-text text-transparent"
              >
                Phim Hàn Quốc mới
              </div>
              <div>
                <Link className="inline-flex items-center gap-2 text-white">
                  <span>Xem toàn bộ</span>
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
            <div className="relative w-[calc(100%-200px)]">
              <CustomSlider
                items={movies}
                slidesPerView={3}
                spaceBetween={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowTopicList;
