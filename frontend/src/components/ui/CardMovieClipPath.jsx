import React from "react";
import { Link } from "react-router-dom";

const CardMovieClipPath = (props) => {
  return (
    <div className="w-full flex flex-col gap-3 pr-[16px] relative">
      <Link className="w-full pb-[150%] relative rounded-[0.5rem] overflow-hidden block bg-transparent group">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 group-hover:bg-primary"
          style={
            props.index % 2 === 0
              ? {
                  clipPath:
                    "polygon(5.761% 100%, 94.239% 100%, 94.239% 100%, 95.174% 99.95%, 96.06% 99.803%, 96.887% 99.569%, 97.642% 99.256%, 98.313% 98.87%, 98.889% 98.421%, 99.357% 97.915%, 99.706% 97.362%, 99.925% 96.768%, 100% 96.142%, 100% 3.858%, 100% 3.858%, 99.913% 3.185%, 99.662% 2.552%, 99.263% 1.968%, 98.731% 1.442%, 98.08% .984%, 97.328% .602%, 96.488% .306%, 95.577% .105%, 94.609% .008%, 93.6% .024%, 5.121% 6.625%, 5.121% 6.625%, 4.269% 6.732%, 3.468% 6.919%, 2.728% 7.178%, 2.058% 7.503%, 1.467% 7.887%, .962% 8.323%, .555% 8.805%, .253% 9.326%, .065% 9.88%, 0 10.459%, 0 96.142%, 0 96.142%, .075% 96.768%, .294% 97.362%, .643% 97.915%, 1.111% 98.421%, 1.687% 98.87%, 2.358% 99.256%, 3.113% 99.569%, 3.94% 99.803%, 4.826% 99.95%, 5.761% 100%)",
                }
              : {
                  clipPath:
                    "polygon(94.239% 100%, 5.761% 100%, 5.761% 100%, 4.826% 99.95%, 3.94% 99.803%, 3.113% 99.569%, 2.358% 99.256%, 1.687% 98.87%, 1.111% 98.421%, .643% 97.915%, .294% 97.362%, .075% 96.768%, 0 96.142%, 0 3.858%, 0 3.858%, .087% 3.185%, .338% 2.552%, .737% 1.968%, 1.269% 1.442%, 1.92% .984%, 2.672% .602%, 3.512% .306%, 4.423% .105%, 5.391% .008%, 6.4% .024%, 94.879% 6.625%, 94.879% 6.625%, 95.731% 6.732%, 96.532% 6.919%, 97.272% 7.178%, 97.942% 7.503%, 98.533% 7.887%, 99.038% 8.323%, 99.445% 8.805%, 99.747% 9.326%, 99.935% 9.88%, 100% 10.459%, 100% 96.142%, 100% 96.142%, 99.925% 96.768%, 99.706% 97.362%, 99.357% 97.915%, 98.889% 98.421%, 98.313% 98.87%, 97.642% 99.256%, 96.887% 99.569%, 96.06% 99.803%, 95.174% 99.95%, 94.239% 100%)",
                }
          }
        ></div>
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] z-30 flex justify-between items-stretch rounded-tl-[0.3rem] rounded-tr-[0.3rem] overflow-hidden shadow-md">
          <div className="flex-1 gap-[0.2rem] justify-center py-[0.2rem] px-2 text-[11px] font-normal bg-[#5e6070] text-white">
            PĐ.<strong>16</strong>
          </div>
          <div className="flex-1 gap-[0.2rem] justify-center py-[0.2rem] px-2 text-[11px] font-normal bg-[#2ca35d] text-white">
            TM.<strong>16</strong>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://static.nutscdn.com/vimg/400-0/f9197908357fe5ff6b4887a2752bf6ef.jpg"
            alt="..."
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover group-hover:w-[calc(100%-8px)] group-hover:h-[calc(100%-8px)] group-hover:top-[4px] group-hover:left-[4px] group-hover:opacity-[0.8] transition-all duration-200"
            style={
              props.index % 2 === 0
                ? {
                    clipPath:
                      "polygon(5.761% 100%, 94.239% 100%, 94.239% 100%, 95.174% 99.95%, 96.06% 99.803%, 96.887% 99.569%, 97.642% 99.256%, 98.313% 98.87%, 98.889% 98.421%, 99.357% 97.915%, 99.706% 97.362%, 99.925% 96.768%, 100% 96.142%, 100% 3.858%, 100% 3.858%, 99.913% 3.185%, 99.662% 2.552%, 99.263% 1.968%, 98.731% 1.442%, 98.08% .984%, 97.328% .602%, 96.488% .306%, 95.577% .105%, 94.609% .008%, 93.6% .024%, 5.121% 6.625%, 5.121% 6.625%, 4.269% 6.732%, 3.468% 6.919%, 2.728% 7.178%, 2.058% 7.503%, 1.467% 7.887%, .962% 8.323%, .555% 8.805%, .253% 9.326%, .065% 9.88%, 0 10.459%, 0 96.142%, 0 96.142%, .075% 96.768%, .294% 97.362%, .643% 97.915%, 1.111% 98.421%, 1.687% 98.87%, 2.358% 99.256%, 3.113% 99.569%, 3.94% 99.803%, 4.826% 99.95%, 5.761% 100%)",
                  }
                : {
                    clipPath:
                      "polygon(94.239% 100%, 5.761% 100%, 5.761% 100%, 4.826% 99.95%, 3.94% 99.803%, 3.113% 99.569%, 2.358% 99.256%, 1.687% 98.87%, 1.111% 98.421%, .643% 97.915%, .294% 97.362%, .075% 96.768%, 0 96.142%, 0 3.858%, 0 3.858%, .087% 3.185%, .338% 2.552%, .737% 1.968%, 1.269% 1.442%, 1.92% .984%, 2.672% .602%, 3.512% .306%, 4.423% .105%, 5.391% .008%, 6.4% .024%, 94.879% 6.625%, 94.879% 6.625%, 95.731% 6.732%, 96.532% 6.919%, 97.272% 7.178%, 97.942% 7.503%, 98.533% 7.887%, 99.038% 8.323%, 99.445% 8.805%, 99.747% 9.326%, 99.935% 9.88%, 100% 10.459%, 100% 96.142%, 100% 96.142%, 99.925% 96.768%, 99.706% 97.362%, 99.357% 97.915%, 98.889% 98.421%, 98.313% 98.87%, 97.642% 99.256%, 96.887% 99.569%, 96.06% 99.803%, 95.174% 99.95%, 94.239% 100%)",
                  }
            }
          />
        </div>
      </Link>
      <div className="pl-[66px] relative text-left flex flex-col gap-[0.2rem] min-h-[80px]">
        <div className="absolute left-0 top-0 w-[50px] overflow-visible leading-[1.1] text-center text-[4.2em] font-extrabold italic text-primary">
          2
        </div>
        <h4 className="font-normal leading-[1.5] text-white text-[0.875em] line-clamp-1">
          <Link title="Khi Cuộc Đời Cho Bạn Quả Quýt">
            Khi Cuộc Đời Cho Bạn Quả Quýt
          </Link>
        </h4>
        <div className="line-clamp-1 font-normal leading-[1.5] text-textBase text-[0.7em]">
          When Life Gives You Tangerines
        </div>
        <div>
          <div className="text-white text-[0.7em] whitespace-nowrap inline">
            T16
          </div>
          <div className="ml-[10px] pl-[10px] relative text-white text-[0.7em] whitespace-nowrap inline before:content-[''] before:w-[5px] before:h-[5px] before:inline-block before:bg-[#ffffff30] before:absolute before:left-[-3px] before:top-[calc(50%-3px)] before:rounded-[50%]">
            Phần 1
          </div>
          <div className="ml-[10px] pl-[10px] relative text-white text-[0.7em] whitespace-nowrap inline before:content-[''] before:w-[5px] before:h-[5px] before:inline-block before:bg-[#ffffff30] before:absolute before:left-[-3px] before:top-[calc(50%-3px)] before:rounded-[50%]">
            Tập 16
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovieClipPath;
