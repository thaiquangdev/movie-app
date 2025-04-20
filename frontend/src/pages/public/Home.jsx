import React from "react";
import Banner from "@components/ui/Banner";
import CardRowTopic from "@components/ui/CardRowTopic";
import RowEvent from "@components/ui/RowEvent";
import RowTopicList from "@components/ui/RowTopicList";
import TopDiscuss from "@components/ui/TopDiscuss";
import IrtTable from "@components/ui/IrtTable";
import CollectionRectangle from "@components/ui/CollectionRectangle";
import CollectionClipPath from "@components/ui/CollectionClipPath";
import CollectionAnime from "@components/ui/CollectionAnime";

const Home = () => {
  return (
    <div>
      {/* slide element */}
      <div className="">
        <Banner />
      </div>
      <div className="relative z-10 pt-0 pb-[10rem] min-h-[calc(100vh - 400px)] bg-bg">
        <div className="flex flex-col gap-[50px]">
          <CardRowTopic />
          <RowEvent />
          <RowTopicList />
          <RowTopicList />
          <RowTopicList />
          <div className="px-[20px] mx-auto w-full">
            <div className="flex mb-4 rounded-[1rem] border border-[#fff2] flex-col">
              <TopDiscuss />
              <IrtTable />
            </div>
          </div>
          <CollectionRectangle title={"Top 10 phim bộ hôm nay"} />
          <CollectionClipPath title={"Top 10 phim bộ hôm nay"} />
          <CollectionRectangle
            title={"Mãn Nhãn với Phim Chiếu Rạp"}
            view={true}
          />
          <CollectionRectangle title={"Tôi nhớ Disney của Ngày Xưa!!!"} />
          <CollectionClipPath title={"Top 10 phim lẻ hôm nay"} />
          <CollectionRectangle
            title={"Phim Thiếu Nhi mà Người Lớn Vẫn Thích Cày"}
          />
          <CollectionRectangle title={"Phim Sắp Tới Trên Rổ"} view={true} />
          <CollectionAnime />
          <CollectionRectangle title={"Điện Ảnh Hồng Kông ở Chỗ Này Này"} />
          <CollectionRectangle
            title={"Tôi Sợ Con Người Em Rồi Đó, nhưng Không Bằng Sợ Ma"}
          />
          <CollectionRectangle title={"Yêu Kiểu Mỹ"} />
          <CollectionRectangle title={"Đường về nhà là vào tim ta..."} />
          <CollectionRectangle title={"Giai Điệu Thanh Xuân"} />
          <CollectionRectangle title={"Xoắn Não Như Lakorn Thái"} view={true} />
          <CollectionRectangle title={"Phim Điện Ảnh Hàng Tuyển"} />
          <CollectionRectangle title={"Căng Não Cùng Tội Phạm"} />
          <CollectionRectangle title={"Phá Án Kiểu Hàn"} />
          <CollectionRectangle title={"Gia Đình của Chúng Mình"} />
          <CollectionRectangle title={"Điện Ảnh Chiều Thứ 7"} view={true} />
          <CollectionRectangle title={"Bắc Rạp Xem Phim Hàn"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
