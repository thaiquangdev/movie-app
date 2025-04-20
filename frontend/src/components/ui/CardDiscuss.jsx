import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardDiscuss = () => {
  return (
    <div className="flex-shrink-0 block relative group">
      <div className="flex relative gap-4 items-stretch p-[1.2rem] rounded-[0.6rem] overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 right-0 opacity-50 group-hover:opacity-70">
          <img
            loading="lazy"
            src="https://static.nutscdn.com/vimg/300-0/1438de2d5f26c4725c726a492f0dc6dc.jpg"
            alt="Xem Phim Bác Sĩ Nhân Ái Vietsub HD Online - Rophim"
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="flex flex-col gap-3 relative z-20">
          <div className="border-2 border-transparent group-hover:border-white bg-transparent w-[50px] h-[50px] rounded-[50%] flex-shrink-0 overflow-hidden relative">
            <img
              src="https://www.rophim.me/images/avatars/pack1/05.jpg"
              alt=""
              className="absolute w-full h-full top-0 right-0 bottom-0 left-0 object-cover "
            />
          </div>
          <div className="flex flex-col gap-[0.4rem] text-[#fff9] flex-grow">
            <div className="flex justify-start items-center gap-[0.6rem] relative">
              <div className="whitespace-nowrap text-[1em] font-medium text-white">
                Thái Quang
              </div>
            </div>
            <div className="flex-grow text-[13px] text-[#fff8] h-[42px] mb-[3px] filter line-clamp-2">
              bo phim Han hay nhat toi tung xem, xem lai khoang 6 lan roi
            </div>
            <div className="relative text-[12px] mb-[0.5rem] items-center flex gap-4">
              <div className="inline-flex gap-[0.3rem] items-center">
                <FaArrowAltCircleUp />
                <span>1</span>
              </div>
              <div className="inline-flex gap-[0.3rem] items-center">
                <FaArrowAltCircleDown />
                <span>1</span>
              </div>
              <div className="inline-flex gap-[0.3rem] items-center">
                <FaMessage />
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50px] absolute z-20 top-[1.2rem] right-[1.2rem] flex-shrink-0">
          <Link className="block w-full pb-[150%] h-0 relative overflow-hidden bg-bg3 rounded-[0.3rem]">
            <img
              src="https://static.nutscdn.com/vimg/300-0/f5a9043258d2e68b154a826207b5de71.jpg"
              alt="Xem Phim Bác Sĩ Nhân Ái Vietsub HD Online - Rophim"
              className="absolute top-0 right-0 bottom-0 left-0 object-cover w-full h-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDiscuss;
