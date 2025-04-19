import React from "react";
import { Link } from "react-router-dom";
import {
  footerPolicyData,
  footerWebMovieData,
  socialData,
} from "../../utils/data";

const Footer = () => {
  return (
    <footer className="bg-[#0F111A] text-white">
      <div className="max-w-[1900px] w-full mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Left */}
          <div className="w-full lg:w-[70%]">
            {/* Slogan */}
            <div className="mb-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-sm py-2 px-4 rounded-full bg-[#78140f]">
                <img
                  src="https://www.rophim.me/images/vn_flag.svg"
                  alt="Vietnam"
                  className="w-5 h-5"
                />
                <span>Hoàng Sa & Trường Sa là của Việt Nam!</span>
              </div>
            </div>

            {/* Logo + social */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-10 mb-4">
              {/* Logo */}
              <Link to="/">
                <img
                  src="https://www.rophim.me/images/logo.svg"
                  alt="Rophim"
                  className="h-14"
                />
              </Link>

              {/* Telegram */}
              <Link
                to="https://t.me/rophimzone"
                target="_blank"
                title="Telegram"
                className="w-5 h-5"
              >
                <img
                  src="https://www.rophim.me/images/social/telegram-icon.svg"
                  alt="Telegram"
                  className="w-full h-full"
                />
              </Link>

              {/* Social icons */}
              <div className="flex gap-3 border-t lg:border-t-0 lg:border-l border-borderColor pt-4 lg:pt-0 lg:pl-6">
                {socialData.map((item) => (
                  <Link
                    key={item.id}
                    to={item.urlPath}
                    title={item.title}
                    className="w-10 h-10 rounded-full bg-bg2 flex items-center justify-center"
                  >
                    <img
                      src={item.urlIcon}
                      alt=""
                      className="w-[14px] h-[14px]"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Chính sách */}
            <div className="flex flex-wrap justify-center lg:justify-start mb-3 gap-4 text-sm">
              {footerPolicyData.map((item) => (
                <Link key={item.id} to={item.url} className="hover:underline">
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Liên kết web */}
            <div className="flex flex-wrap justify-center lg:justify-start mb-3 gap-4 text-sm">
              {footerWebMovieData.map((item) => (
                <Link key={item.id} to={item.url} className="hover:underline">
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Description */}
            <p className="text-textBase text-sm text-center lg:text-left mb-2">
              RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao
              miễn phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới
              khổng lồ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc,
              Thái Lan, Nhật Bản, Âu Mỹ… đa dạng thể loại.
            </p>
            <p className="text-textBase text-sm text-center lg:text-left">
              © 2024 RoPhim
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
