import React from "react";

function SidebarList({ children, title }) {
  return (
    <div className="flex flex-col gap-4">
      <header className="bg-white w-[300px]  flex  justify-center h-10">
        <h1 className="text-[26px] uppercase font-bold text-[#414141]">
          {title}
        </h1>
      </header>
      <div className="flex flex-col gap-4 ">{children}</div>
    </div>
  );
}

export default SidebarList;
