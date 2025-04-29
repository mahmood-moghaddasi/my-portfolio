import React from "react";

function SectionContent({ title, date, text, githubLink, link }) {
  return (
    <article className="flex flex-col w-full">
      <header className="flex justify-between w-full items-center">
        <h2 className="text-[24px] text-[#414141] font-bold">{title}</h2>
        <span className="text-[20px] text-black font-normal">{date}</span>
      </header>
      <p className="text-[20px] font-thin text-justify">{text}</p>

      {githubLink && (
        <a className="font-semibold text-20px" href={`${githubLink}`}>
          {githubLink}
        </a>
      )}
      {link && (
        <a className="font-semibold text-20px" href={`${link}`}>
          {link}
        </a>
      )}
    </article>
  );
}

export default SectionContent;
