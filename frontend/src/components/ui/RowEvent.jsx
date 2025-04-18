import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const RowEvent = () => {
  return (
    <div className="effect-fade-in ">
      <div className="px-[20px]">
        <div className="xl:gap-2 w-full h-[350px] mt-[1rem] bg-[#fedaa8] rounded-[1rem] relative flex gap-4 items-center">
          <div className="absolute top-0 bottom-0 left-0 w-[600px] rounded-tl-[1rem] rounded-bl-[1rem] overflow-hidden hero-behind"></div>
          <div className="flex-shrink-0 w-[350px] h-[350px] bg-[url('https://www.rophim.me/images/event_304/hero.webp')] bg-cover bg-[50%] relative z-10">
            <div className="w-[203px] h-[180px] bg-[url('https://www.rophim.me/images/event_304/vn-flag-full.gif')] bg-[50%] left-[48px] top-[-30px] transform rotate-[-23deg] absolute bg-cover"></div>
          </div>
          <div className="relative flex-shrink-0 z-30 flex flex-col gap-[1.5rem]">
            <img
              src="https://www.rophim.me/images/event_304/50y.webp"
              className="h-[200px] w-auto"
              alt=""
            />
            <div>
              <Link
                to="#"
                className="shadow-md z-40 relative w-full bg-white text-black border border-white text-[16px] gap-[0.6rem] py-[0.7rem] px-[1.5rem] rounded-[0.5rem] min-h-[50px] inline-flex font-medium items-center justify-between hover:opacity-90 transition-all"
              >
                <span className="text-center whitespace-normal">
                  Tìm hiểu về ngày 30/4
                </span>
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 pl-8 pr-0 flex-grow gap-8 relative z-30 px-4">
            <div className="flex flex-row  gap-4">
              <Link className="w-[80px] flex-shrink-0">
                <div className="shadow-md border-2 border-white w-full pb-[150%] h-0 relative rounded-[0.5rem] overflow-hidden block bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/300-0/0a3e225a0735ebe0685fef0c17af25d2.jpg"
                    alt="Chị Tư Hậu"
                    className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-between py-[1rem]">
                <h4 className="mb-[0.4rem] font-normal leading-[1.5]">
                  <Link title="Chị Tư Hậu">Chị Tư Hậu</Link>
                </h4>
                <div>
                  <Link className="inline-flex items-center font-medium justify-center rounded-[0.3rem] px-[0.7rem] py-[0.3rem] min-h-[30px] border border-[#362814] text-[0.9em] text-[#362814] gap-[0.5rem] bg-transparent">
                    <FaPlay color="#fd2400" />
                    <span>Xem phim</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row  gap-4">
              <Link className="w-[80px] flex-shrink-0">
                <div className="shadow-md border-2 border-white w-full pb-[150%] h-0 relative rounded-[0.5rem] overflow-hidden block bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/300-0/0a3e225a0735ebe0685fef0c17af25d2.jpg"
                    alt="Chị Tư Hậu"
                    className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-between py-[1rem]">
                <h4 className="mb-[0.4rem] font-normal leading-[1.5]">
                  <Link title="Chị Tư Hậu">Chị Tư Hậu</Link>
                </h4>
                <div>
                  <Link className="inline-flex items-center font-medium justify-center rounded-[0.3rem] px-[0.7rem] py-[0.3rem] min-h-[30px] border border-[#362814] text-[0.9em] text-[#362814] gap-[0.5rem] bg-transparent">
                    <FaPlay color="#fd2400" />
                    <span>Xem phim</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row  gap-4">
              <Link className="w-[80px] flex-shrink-0">
                <div className="shadow-md border-2 border-white w-full pb-[150%] h-0 relative rounded-[0.5rem] overflow-hidden block bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/300-0/0a3e225a0735ebe0685fef0c17af25d2.jpg"
                    alt="Chị Tư Hậu"
                    className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-between py-[1rem]">
                <h4 className="mb-[0.4rem] font-normal leading-[1.5]">
                  <Link title="Chị Tư Hậu">Chị Tư Hậu</Link>
                </h4>
                <div>
                  <Link className="inline-flex items-center font-medium justify-center rounded-[0.3rem] px-[0.7rem] py-[0.3rem] min-h-[30px] border border-[#362814] text-[0.9em] text-[#362814] gap-[0.5rem] bg-transparent">
                    <FaPlay color="#fd2400" />
                    <span>Xem phim</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row  gap-4">
              <Link className="w-[80px] flex-shrink-0">
                <div className="shadow-md border-2 border-white w-full pb-[150%] h-0 relative rounded-[0.5rem] overflow-hidden block bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/300-0/0a3e225a0735ebe0685fef0c17af25d2.jpg"
                    alt="Chị Tư Hậu"
                    className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-between py-[1rem]">
                <h4 className="mb-[0.4rem] font-normal leading-[1.5]">
                  <Link title="Chị Tư Hậu">Chị Tư Hậu</Link>
                </h4>
                <div>
                  <Link className="inline-flex items-center font-medium justify-center rounded-[0.3rem] px-[0.7rem] py-[0.3rem] min-h-[30px] border border-[#362814] text-[0.9em] text-[#362814] gap-[0.5rem] bg-transparent">
                    <FaPlay color="#fd2400" />
                    <span>Xem phim</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative xl:w-[60px] flex-shrink-0 h-full rounded-tr-[1rem] rounded-br-[1rem] overflow-hidden">
            <Link className="absolute top-0 left-0 right-0 bottom-0 bg-[#c9221a] flex justify-center items-center gap-4 text-white text-[1em]">
              <span className="md:hidden block">Xem thêm</span>
              <IoIosArrowForward size={24} className="font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowEvent;
