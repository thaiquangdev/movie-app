import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomSlider = ({
  items,
  slidesPerView = 4,
  btnView = true,
  btnBgColor = false,
  spaceBetween = 14,
  direction = false,
  autoPlay = false,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Update navigation after swiper is rendered
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative text-white h-full">
      {btnView &&
        (direction ? (
          <>
            <button
              ref={prevRef}
              className={classnames(
                "absolute top-0 left-1/2 -translate-x-1/2 z-10 w-9 h-9 p-1 rounded-full shadow flex items-center justify-center",
                btnBgColor ? "bg-transparent" : "bg-white",
                isBeginning && "hidden"
              )}
            >
              <IoIosArrowBack className="rotate-[-90deg] text-black" />
            </button>
            <button
              ref={nextRef}
              className={classnames(
                "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-9 h-9 p-1 rounded-full shadow flex items-center justify-center",
                btnBgColor ? "bg-transparent" : "bg-white",
                isEnd && "hidden"
              )}
            >
              <IoIosArrowForward className="rotate-[-90deg] text-black" />
            </button>
          </>
        ) : (
          <>
            <button
              ref={prevRef}
              className={classnames(
                "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-2 rounded-full shadow flex items-center justify-center",
                btnBgColor ? "bg-transparent" : "bg-white",
                isBeginning && "hidden"
              )}
            >
              <IoIosArrowBack size={20} className="text-black" />
            </button>
            <button
              ref={nextRef}
              className={classnames(
                "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-2 rounded-full shadow flex items-center justify-center",
                btnBgColor ? "bg-transparent" : "bg-white",
                isEnd && "hidden"
              )}
            >
              <IoIosArrowForward size={20} className="text-black" />
            </button>
          </>
        ))}

      <Swiper
        modules={autoPlay ? [Navigation, Autoplay] : [Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        autoplay={
          autoPlay ? { delay: 3000, disableOnInteraction: false } : false
        }
        direction={direction ? "vertical" : "horizontal"}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="h-full"
      >
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>No items to display</SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
