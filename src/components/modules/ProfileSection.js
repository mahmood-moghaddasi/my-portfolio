import Image from "next/image";
import React from "react";
import profile from "../../../public/images/prof_9233-min.png";
function ProfileSection() {
  return (
    <header className="flex flex-col items-center w-full  text-center">
      <div className="bg-[#EEC0C0] w-64 h-64 flex items-center justify-center rounded-full overflow-hidden ">
        <div className=" w-60 h-60 rounded-full overflow-hidden">
          <Image
            src={profile}
            width={1100}
            height={1100}
            alt="profile"
            className="relative bottom-9"
          />
        </div>
      </div>
      <h1 className=" text-[32px] font-thin text-[#414141] mb-2">
        Mahmoud{" "}
        <span className="block font-semibold text-[#414141]">Moghadasi</span>
      </h1>
      <div className="w-20 h-[2px] bg-[#DBDBDB] "></div>
      <h3 className="text-[#AEAEAE] mt-2 uppercase font-thin">
        Front-End Web Developer
      </h3>
    </header>
  );
}

export default ProfileSection;
