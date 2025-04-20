import React from "react";
import Filter from "@components/ui/Filter";
import MovieList from "@components/ui/MovieList";
import { useParams } from "react-router-dom";

const MovieCountry = () => {
  const { country } = useParams();
  return (
    <div className="pt-[7rem] bg-bg xl:pt-[10rem] pb-[10rem] relative min-h-[calc(100vh-400px)]">
      <div className="flex flex-col gap-[50px]">
        <div className="px-[50px] w-full mx-auto max-w-[1900px] xl:px-[20px] relative">
          <div className="flex items-center justify-start gap-[1rem] relative min-h-[44px] mb-[1.2rem]">
            <h3 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-sm mr-4">
              Phim {country}
            </h3>
          </div>

          {/* Fillter icons */}
          <Filter showFil={false} />

          {/* Data */}
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default MovieCountry;
