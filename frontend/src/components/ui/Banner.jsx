import { Link } from "react-router-dom";
import { FaPlay, FaHeart } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import SwiperThumb from "./SwiperThumb";
import { bannersData } from "../../utils/data";

const Banner = () => {
  return (
    <div className="relative w-full h-[760px]">
      {/* Ảnh nền */}
      <img
        src="https://static.nutscdn.com/vimg/1920-0/8e877fb92ede7c3024b5d80afa80e0b3.jpg"
        alt="Daredevil"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient tối hai bên */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

      {/* Nội dung phía trên */}
      <div className="absolute top-[22%] left-7 z-10 text-white w-[600px]">
        <div className="mb-4 xl:block hidden">
          <Link to="#">
            <img
              src="https://static.nutscdn.com/vimg/0-260/88bfdafd3e73dce3992f92a55b7be962.png"
              alt=""
              className="max-w-[500px] max-h-[130px]"
            />
          </Link>
        </div>
        <h3 className="text-[2em] leading-[1.5] mb-2 font-bold xl:hidden">
          <Link to="#">Daredevil: Tái Xuất</Link>
        </h3>
        <h3 className="text-primaryText text-[1.1em] font-light mb-4">
          <Link to="#">Daredevil: Born Again</Link>
        </h3>
        <div className="flex items-center justify-start flex-wrap gap-[0.6rem] mb-[0.75rem]">
          <div className="bg-transparent border border-primary rounded-[0.33rem] text-white font-medium leading-[24px] text-[12px] px-[0.4rem] flex-shrink-0 inline-flex items-center before:content-['IMDb'] before:text-primary before:relative before:font-medium before:pr-[4px] before:text-[10px] before:leading-[1]">
            <span>8.4</span>
          </div>
          <div className="bg-white text-black font-medium flex overflow-hidden leading-[26px] px-2 flex-shrink-0 rounded-[0.33rem] items-center text-[12px]">
            <span>T18</span>
          </div>
          <div className="border border-white bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]">
            <span>2025</span>
          </div>
          <div className="border border-white bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]">
            <span>Phần 1</span>
          </div>
          <div className="border border-white bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]">
            <span>Tập 9</span>
          </div>
        </div>
        <div className="flex items-center justify-start flex-wrap gap-[0.6rem] mb-6">
          <Link
            to={"#"}
            className="bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]"
          >
            Chính Kịch
          </Link>
          <Link
            to={"#"}
            className="bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]"
          >
            Hình Sự
          </Link>
          <Link
            to={"#"}
            className="bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]"
          >
            Siêu Anh Hùng
          </Link>
          <Link
            to={"#"}
            className="bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]"
          >
            Marvel
          </Link>
        </div>
        <div className="text-[1em] leading-[1.6] text-white font-normal mb-8 line-clamp-3">
          Matt Murdock, một luật sư mù với khả năng đặc biệt, chiến đấu cho công
          lý thông qua công ty luật sầm uất của mình. Trong khi cựu trùm mafia
          Wilson Fisk theo đuổi những nỗ lực chính trị của riêng mình ở New
          York. Khi quá khứ của họ bắt đầu lộ diện, cả hai người đều thấy mình
          trên con đường va chạm không thể tránh khỏi.
        </div>
        <div className="flex items-center gap-8">
          <Link
            to={"#"}
            className="w-[70px] h-[70px] rounded-[50%] flex-shrink-0 flex items-center justify-center bg-primary text-primaryButtonText opacity-[0.95]"
          >
            <FaPlay size={28} />
          </Link>
          <div className="inline-flex items-center border-2 border-borderColor rounded-[30px] overflow-hidden hover:border-white">
            <Link className="h-[50px] min-w-[68px] flex items-center justify-center flex-col px-[0.2rem] gap-[0.3rem] relative hover:text-primaryText hover:bg-[#ffffff05]">
              <FaHeart size={20} />
            </Link>
            <Link className="h-[50px] min-w-[68px] flex items-center justify-center flex-col px-[0.2rem] gap-[0.3rem] border-l border-borderColor relative hover:text-primaryText hover:bg-[#ffffff05]">
              <AiFillInfoCircle size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Slice ảnh */}
      <div className="absolute w-[450px] right-[30px] bottom-[172px] text-white">
        <div className="flex items-center gap-1">
          {bannersData.map((item) => {
            return (
              <SwiperThumb
                key={item.id}
                title={item.title}
                thumbUrl={item.thumbUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
