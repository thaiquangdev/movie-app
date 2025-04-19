import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaHeart, FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CollectionAnime = () => {
  return (
    <div className="effect-fade-in">
      <div className="px-[20px] mx-auto">
        <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[1.2rem]">
          <h2 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-md">
            Kho Tàng Anime Mới Nhất
          </h2>
          <div className="group">
            <Link className="h-[30px] w-[30px] rounded-[2rem] border border-[#fff5] text-[14px] text-white inline-flex items-center justify-center group-hover:w-auto group-hover:px-2 group-hover:text-primary transition-all duration-300">
              <span className="group-hover:block hidden">Xem thêm</span>
              <IoIosArrowForward size={20} />
            </Link>
          </div>
        </div>
        <div>
          <div className="2xl:h-[500px] h-[460px] rounded-[1.2rem] relative overflow-hidden">
            <div className="bg-bg3 absolute top-0 right-0 left-0 bottom-0 w-full h-full collection-anime">
              <div className="w-[calc(100%-500px)] h-full left-auto right-0 max-w-[1900px] absolute top-0 mask-gradient-left">
                <div className="relative w-full h-full">
                  <img
                    src="https://static.nutscdn.com/vimg/1920-0/95b77105879914d6ff8aa2bade0477e9.jpg"
                    alt="Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục!"
                    className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="h-full items-start max-w-[1900px] mx-auto overflow-hidden z-20 flex relative">
                <div className="2xl:p-[3rem] 2xl:max-w-[700px] p-8 max-w-[600px] w-full relative z-[5]">
                  <div>
                    <h3 className="text-[1.5em] mb-1 leading-[1.5] font-bold text-white shadow-sm line-clamp-1">
                      <Link title="Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục!">
                        Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào
                        Hầm Ngục!
                      </Link>
                    </h3>
                    <h3 className="text-[1em] font-light mb-4 text-primary">
                      <Link title="I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!">
                        I Left My A-Rank Party to Help My Former Students Reach
                        the Dungeon Depths!
                      </Link>
                    </h3>
                    <div className="flex items-center justify-start flex-wrap gap-[0.6rem] mb-[0.75rem]">
                      <div className="bg-transparent border border-primary rounded-[0.33rem] text-white font-medium leading-[24px] text-[12px] px-[0.4rem] flex-shrink-0 inline-flex items-center imdb-badge">
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
                        Anime
                      </Link>
                      <Link
                        to={"#"}
                        className="bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]"
                      >
                        Hoạt Hình
                      </Link>
                      <Link
                        to={"#"}
                        className="bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]"
                      >
                        Kỳ Ảo
                      </Link>
                      <Link
                        to={"#"}
                        className="bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]"
                      >
                        Phiêu Lưu
                      </Link>
                    </div>
                    <div className="text-[0.875em] leading-[1.6] text-white font-normal mb-8 lim-3">
                      Chán nản và không được tổ đội phiêu lưu của mình coi
                      trọng, pháp sư đỏ nọ quyết định hợp sức với một số học trò
                      cũ để chinh phục hầm ngục vĩ đại nhất thế giới.
                    </div>
                    <div className="flex items-center gap-8">
                      <Link
                        to={"#"}
                        className="w-[70px] h-[70px] rounded-[50%] flex-shrink-0 flex items-center justify-center bg-primary text-primaryButtonText opacity-[0.95]"
                      >
                        <FaPlay size={28} />
                      </Link>
                      <div className="inline-flex items-center border-2 border-borderColor rounded-[30px] overflow-hidden hover:border-white">
                        <Link className="h-[50px] min-w-[68px] flex items-center justify-center flex-col px-[0.2rem] gap-[0.3rem] relative text-white hover:text-primaryText hover:bg-[#ffffff05]">
                          <FaHeart size={20} />
                        </Link>
                        <Link className="h-[50px] min-w-[68px] flex items-center justify-center flex-col px-[0.2rem] gap-[0.3rem] border-l text-white border-borderColor relative hover:text-primaryText hover:bg-[#ffffff05]">
                          <AiFillInfoCircle size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slice ảnh thumb */}
          <div className="mx-auto mt-[-50px] max-w-[1200px] w-[calc(100%-32px)] relative z-[3] overflow-hidden">
            <div className="flex gap-4 items-stretch w-full h-full relative z-[1]">
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
              <div className=" bg-white flex-1 rounded-[0.6rem] overflow-hidden relative cursor-pointer border-[3px] border-transparent h-full ">
                <div className="w-full pb-[150%] h-0 relative rounded-[0.5] overflow-hidden bg-bg3">
                  <img
                    src="https://static.nutscdn.com/vimg/100-0/50b2961d0ee8d728d11eca80042c21e9.jpg"
                    alt="Xem Phim Tôi Rời Tổ Đội Hạng A Để Giúp Học Trò Cũ Tiến Sâu Vào Hầm Ngục! Vietsub HD Online - Rophim"
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionAnime;
