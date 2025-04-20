import React from "react";
import CardActor from "@components/ui/CardActor";

const Actors = () => {
  return (
    <div className="pt-[7rem] bg-bg xl:pt-[10rem] pb-[10rem] relative min-h-[calc(100vh-400px)]">
      <div className="flex flex-col gap-[50px]">
        <div className="px-[50px] w-full mx-auto max-w-[1900px] xl:px-[20px] relative">
          <div className="flex items-center justify-start gap-[1rem] relative min-h-[44px] mb-[1.2rem]">
            <h3 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-sm mr-4">
              Diễn viên
            </h3>
          </div>
          <div className="xl:grid-cols-6 xl:gap-[1.2rem] gap-x-4 grid">
            <CardActor />
            <CardActor />
            <CardActor />
            <CardActor />
            <CardActor />
            <CardActor />
            <CardActor />
            <CardActor />
            <CardActor />
            <CardActor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
