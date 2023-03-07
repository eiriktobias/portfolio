import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "2 years",
    details: "Lorem ipsum osv",
  },
  {
    year: 2019,
    title: "Content Creator",
    duration: "1 year",
    details: "Her skal det stå masse god og nyttig info om denne jobben",
  },
  {
    year: 2017,
    title: "Content Creator",
    duration: "2 years",
    details: "Lorem ipsum osv slik at man finner noe wirkelig bra å skrive",
  },
  {
    year: 2015,
    title: "Content Creator",
    duration: "2 years",
    details: "Lorem ipsum, dolor sit amet og masse slikt",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-v-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
