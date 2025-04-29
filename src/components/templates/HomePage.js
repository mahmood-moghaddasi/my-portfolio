import React from "react";
import Sidebar from "./Sidebar";
import ProfileSection from "../modules/ProfileSection";
import MainContent from "./MainContent";

function HomePage() {
  return (
    <div className="flex pt-10 pl-10 pr-20 gap-11 ">
      <aside className="w-[30%] h-full flex flex-col gap-20 items-center justify-center">
        <ProfileSection />
        <Sidebar />
      </aside>
      <main className="w-[70%] h-full ">
        <MainContent />
      </main>
    </div>
  );
}

export default HomePage;
