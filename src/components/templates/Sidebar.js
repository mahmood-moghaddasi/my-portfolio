import React from "react";
import SidebarList from "../modules/SidebarList";
import Image from "next/image";
import home from "../../../public/icons/home-alt-svgrepo-com.svg";
import figma from "../../../public/icons/figma-svgrepo-com.svg";
import html from "../../../public/icons/file-html-svgrepo-com.svg";
import git from "../../../public/icons/git-svgrepo-com.svg";
import github from "../../../public/icons/github-142-svgrepo-com.svg";
import internet from "../../../public/icons/internet-svgrepo-com.svg";
import instagram from "../../../public/icons/insta-svgrepo-com.svg";
import js from "../../../public/icons/javascript-svgrepo-com.svg";
import linkedin from "../../../public/icons/linkedin-svgrepo-com.svg";
import mail from "../../../public/icons/mail-5-svgrepo-com.svg";
import nextjs from "../../../public/icons/nextjs-svgrepo-com.svg";
import phone from "../../../public/icons/phone-svgrepo-com.svg";
import react from "../../../public/icons/react-svgrepo-com.svg";
import tailwind from "../../../public/icons/tailwind-svgrepo-com.svg";
import telegram from "../../../public/icons/telegram-svgrepo-com.svg";

function Sidebar() {
  return (
    <div className="w-full h-auto bg-[#EEC0C0] pb-14 flex flex-col gap-40 items-center">
      <SidebarList title={"contact"}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={home} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">
            Shiraz , Iran
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={phone} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">
            +989179589395
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={mail} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">
            mahmood1380.mm@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={telegram} height={20} width={20} alt="home" />
          </div>
          <a
            className="text-[#414141] font-normal text-[20px]"
            href="https://t.me/mahmu0t"
          >
            https://t.me/mahmu0t
          </a>
        </div>
      </SidebarList>
      <SidebarList title={"follow me"}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={linkedin} height={20} width={20} alt="home" />
          </div>
          <a
            className="text-[#414141] font-normal text-[20px]"
            href="https://www.linkedin.com/in/mahmood-moqadac-4007a728a/"
          >
            Linkedin
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={instagram} height={20} width={20} alt="home" />
          </div>
          <a
            className="text-[#414141] font-normal text-[20px]"
            href="https://instagram.com/mahmu0t"
          >
            Instagram
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={github} height={20} width={20} alt="home" />
          </div>
          <a
            className="text-[#414141] font-normal text-[20px]"
            href="https://github.com/mahmood-moghaddasi"
          >
            GitHub
          </a>
        </div>
      </SidebarList>
      <SidebarList title={"tech skills"}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={js} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">JavaScript</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={html} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">HTML/CSS</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={react} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">React.js</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={nextjs} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">Next.js</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={git} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">Git/GitHub</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={tailwind} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">Tailwind</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <Image src={figma} height={20} width={20} alt="home" />
          </div>
          <p className="text-[#414141] font-normal text-[20px]">Figma</p>
        </div>
      </SidebarList>
    </div>
  );
}

export default Sidebar;
