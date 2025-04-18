import React from "react";
import Banner from "@components/ui/Banner";
import CardRowTopic from "../../../components/ui/CardRowTopic";
import RowEvent from "../../../components/ui/RowEvent";

const Home = () => {
  return (
    <div className=" h-screen">
      {/* slide element */}
      <div className="">
        <Banner />
      </div>
      <div className="relative z-10 pt-0 pb-[10rem] min-h-[calc(100vh - 400px)] bg-bg">
        <div className="flex flex-col gap-[50px]">
          <CardRowTopic />
          <RowEvent />
        </div>
      </div>
    </div>
  );
};

export default Home;
