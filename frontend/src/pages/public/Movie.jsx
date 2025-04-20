import React from "react";
import { RiColorFilterAiLine } from "react-icons/ri";
import Filter from "@components/ui/Filter";
import MovieList from "@components/ui/MovieList";

const Movie = () => {
  return (
    <div className="pt-[7rem] bg-bg xl:pt-[10rem] pb-[10rem] relative min-h-[calc(100vh-400px)]">
      <div className="flex flex-col gap-[50px]">
        <div className="px-[50px] w-full mx-auto max-w-[1900px] xl:px-[20px] relative">
          <div className="flex items-center justify-start gap-[1rem] relative min-h-[44px] mb-[1.2rem]">
            <div className="text-white w-[32px] h-[32px] xl:w-[30px] xl:h-[30px] flex-shrink-0 flex items-center justify-center">
              <RiColorFilterAiLine size={25} />
            </div>
            <h3 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-sm mr-4">
              Các chủ đề
            </h3>
          </div>

          {/* Fillter icons */}
          <Filter showFil={true} />

          {/* Data */}
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default Movie;
