import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Logo from "@/assets/dashboardHome/announcementsLogo.svg";
import useDragScroll from "./useDragScroll";
import { Announcement, useAnnouncement } from "@/services/announcement";

const Announcement: React.FC<{ announcement: Announcement }> = ({
  announcement,
}) => {
  return (
    <div className="p-2 text-light font-fredoka overflow-hidden">
      <div className="font-medium mobile:text-[18px] ipad:text-[18px] lg:text-[14px]">
        {announcement.id}
      </div>
      <div className="font-light mt-1 mobile:text-[14px] ipad:text-[14px] lg:text-[10px]">
        {announcement.pengumuman}
      </div>
      <div className="font-extralight mt-1 mobile:text-[12px] ipad:text-[12px] lg:text-[8px]">
        {announcement.tanggal_awal} - {announcement.tanggal_akhir}
      </div>
    </div>
  );
};

const AnnouncementsList: React.FC<{ announcements: Announcement[] }> = ({
  announcements,
}) => {
  const scrollRef = useDragScroll();

  return (
    <div
      className="w-full h-full overflow-hidden flex-col shadow-lg select-none
                        mobile:mt-6 mobile:mx-6 mobile:rounded-[1rem]
                        ipad:mt-6 ipad:mx-[8rem] ipad:rounded-[2rem]
                        lg:mt-0 lg:mx-0 lg:rounded-[2rem]"
    >
      <div
        className="flex p-4 items-center select-none bg-gray-5 mobile:rounded-t-[1rem] ipad:rounded-t-[2rem]
                            mobile:h-[5rem] ipad:h-[5rem] lg:h-[3rem]"
      >
        <img
          src={Logo}
          className="select-none mobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] lg:w-5 lg:h-5"
          alt="Announcements Logo"
        />
        <h2
          className="text-light font-fredoka mx-[1rem] select-none
                                mobile:text-[23px] ipad:text-[23px] lg:text-[1rem]"
        >
          Announcements
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 p-2 w-full bg-transparent_black overflow-auto custom-scroll no-scrollbar
                                            mobile:h-[85%] ipad:h-[90%] lg:h-[90%]"
        style={{ cursor: "grab" }}
      >
        {announcements.map((announcement) => (
          <Announcement key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const { data: announcements } = useAnnouncement();
  console.log(announcements);
  // const announcements: Announcement[] = [];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full h-full justify-center select-none">
        <AnnouncementsList announcements={announcements || []} />
      </div>
    </DndProvider>
  );
};

export default App;
