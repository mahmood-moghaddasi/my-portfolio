import React from "react";
import Section from "../modules/Section";
import SectionContent from "../modules/SectionContent";
import person from "../../../public/icons/person-svgrepo-com.svg";
import work from "../../../public/icons/business-bag-svgrepo-com.svg";
import edu from "../../../public/icons/edu.svg";

function MainContent() {
  return (
    <div className="flex flex-col gap-[130px]">
      <Section icon={person} title={"about me"}>
        <p className="text-[20px] font-thin text-justify">
          Hi I'm a 23-year-old passionate web Developer with over 2 years of
          experience in building responsive and dynamic websites using modern
          web technologies. My experties lies in front-end development with a
          strong focus on HTML ,CSS,JavaScript and React. I specialize in
          creating visually appealing, high-performance websites and web
          applications that provide excellent user experiences.
        </p>
      </Section>
      <Section icon={edu} title={"education"}>
        <SectionContent
          title={"Computer Engineering - Shiraz University of Technology"}
          date="2022 - 2026"
          text={
            "Shiraz University of Technology (Sutech) is one of Iran’s leading institutions for higher education, known for its focus on innovation, research, and technical excellence. The Computer Engineering program at Sutech offers a robust curriculum that equips students with a deep understanding of computer science, software development, hardware systems, and advanced technologies."
          }
        />
      </Section>
      <SectionContent
        text={
          "I completed the Botostart Frontend Bootcamp, an intensive program designed to build expertise in modern web development. Through this bootcamp, I gained in-depth knowledge of JavaScript, React, and Next.js, focusing on creating dynamic, responsive, and user-friendly web applications."
        }
        title={"Botostart Front-End Bootcamp"}
        date={"2024 - 2025"}
      />
      <Section icon={work} title={"experience"}>
        <SectionContent
          title={"Torino - The Tour Booking Experience"}
          text={
            "Welcome to Torino, a seamless platform designed to help you reserve unforgettable tours with ease. Whether you're planning a cultural escape or an adventure-packed journey, Torino provides a simple and elegant booking process that puts your travel dreams within reach. With carefully curated tour options and a user-friendly interface, Torino ensures an effortless experience from browsing to booking, giving you the freedom to explore with confidence.Torino was built using Next.js for fast, server-side rendering and smooth navigation, ensuring high performance and scalability. We used Tailwind CSS for its utility-first approach, allowing us to create a clean, responsive, and customizable design. The result is a user-friendly platform that offers a seamless and enjoyable tour booking experience."
          }
          date={"2024 - 2025"}
          githubLink={"https://github.com/mahmood-moghaddasi/torino"}
        />
        <SectionContent
          text={
            "Mentoro is an online platform that allows students to easily book academic counseling appointments with advisors. Advisors can enter their available time slots, and students can reserve an appointment by entering their details and selecting a convenient time. This system is designed to streamline the appointment booking process, making it fast, easy, and entirely online without the need for in-person visits. The Mentoro project was developed by a team of students as part of a software development course. I was responsible for the front-end design of the project, ensuring a smooth and intuitive user interface. The platform was built using Next.js for high performance and fast page loading, while Tailwind CSS was used to create a clean, responsive, and visually appealing design. The goal of this project was to provide a user-friendly and efficient experience for booking academic counseling appointments online."
          }
          title={
            "Mentoro - Online Appointment Reservation System for Academic Counseling"
          }
          date={"2024 - 2025"}
          githubLink={"https://github.com/mahmood-moghaddasi/mentoro"}
        />
      </Section>
    </div>
  );
}

export default MainContent;
