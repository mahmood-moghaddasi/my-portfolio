import Image from "next/image";
import React from "react";

function Section({ children, icon, title }) {
  return (
    <section className="flex flex-col gap-5">
      <header className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center">
          <Image src={icon} height={35} width={35} alt="home" />
        </div>
        <div className="w-full border-b-2">
          <h1 className="uppercase text-[32px] font-bold text-[#414141]">
            {title}
          </h1>
        </div>
      </header>
      <main className="flex flex-col gap-5">{children}</main>
    </section>
  );
}

export default Section;
