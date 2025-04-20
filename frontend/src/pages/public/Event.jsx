import React from "react";
import CardMovieNormal from "../../components/ui/CardMovieNormal";

const Event = () => {
  return (
    <div className="bg-bg pt-[7rem] 2xl:pt-[10rem] pb-[10rem] min-h-[calc(100vh - 400px)]">
      <div className="bg-[#ff0000] bg-[url(https://www.rophim.me/images/event_304/gpmn-bg.webp)] bg-cover bg-position-[50%] bg-bg-no-repeat absolute top-0 right-0 left-0 bottom-0 h-[50vh] mask-image-event opacity-[0.5]"></div>
      <div className="flex flex-col gap-[50px]">
        <div className="max-w-[1300px] w-full px-[50px] mx-auto relative">
          <div className="mb-[3rem] gap-[4rem] justify-between flex">
            <div className="flex-shrink-0">
              <div className="w-[300px] h-[380px] relative overflow-hidden rotate-[-5deg]">
                <img
                  src="https://www.rophim.me/images/event_304/page-vn-flag.jpg"
                  alt=""
                  className="absolute w-full h-full top-0 right-0 left-0 bottom-0 object-cover"
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-2">
                <h3 className="leading-[1.5] 2xl:text-[2.2em] text-[1.5em] font-semibold text-white shadow-sm ">
                  Kỷ niệm 50 Năm Ngày Giải Phóng Miền Nam - Thống Nhất Đất Nước
                </h3>
              </div>
              <div className="">
                <h4 className="text-primaryText font-semibold leading-[1.5] text-[1.5em]">
                  30/04/1975 - 30/04/2025
                </h4>
                <div className="text-[15px] leading-[1.8] font-light text-[#d3d3d3]">
                  <p className="mb-4">
                    11 giờ 30 phút trưa 30/4/1975, cổng Dinh Độc Lập đã bị húc
                    đổ, lá cờ của Quân Giải phóng tung bay ngay tại tổng hành
                    dinh của chính quyền Sài Gòn trong niềm hân hoan, chờ đón
                    của cả dân tộc. Từ đây, miền Nam đã hoàn toàn giải phóng,
                    non sông Việt Nam thống nhất một dải. Đây là thắng lợi vĩ
                    đại nhất, kết thúc 30 năm chiến tranh lâu dài, gian khổ
                    chống ngoại xâm của dân tộc Việt Nam, mở ra một kỷ nguyên
                    mới - kỷ nguyên độc lập dân tộc và chủ nghĩa xã hội trên
                    toàn bộ Tổ quốc Việt Nam.
                  </p>
                  <p className="mb-4">
                    Chiến dịch Hồ Chí Minh đánh dấu bước ngoặt lớn trong lịch sử
                    dân tộc, đã hoàn thành trọn vẹn mục tiêu “Đánh cho Mỹ cút,
                    đánh cho ngụy nhào” như Chủ tịch Hồ Chí Minh đề ra; giải
                    phóng toàn bộ miền Nam, chấm dứt 21 năm chia cắt đất nước,
                    đưa đến sự thống nhất, độc lập, chủ quyền toàn vẹn lãnh thổ
                    của Việt Nam trên đất liền, vùng trời, vùng biển; đưa dân
                    tộc ta bước vào kỷ nguyên mới.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1300px] w-full px-[50px] mx-auto relative">
          <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[1.2rem]">
            <h3 className="text-[1.5em] 2xl:text-[1.8em] leading-[1.4] font-semibold text-white shadow-sm">
              Phim Lịch Sử
            </h3>
          </div>
          <div className="grid grid-cols-6 gap-4 2xl:gap-6">
            <CardMovieNormal />
            <CardMovieNormal />
            <CardMovieNormal />
            <CardMovieNormal />
            <CardMovieNormal />
            <CardMovieNormal />
            <CardMovieNormal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
