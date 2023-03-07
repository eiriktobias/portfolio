import React from "react";
import ProjectItem from "./ProjectItem";
import netflixImg from "../assets/netflix.jpeg";


const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor
        malesuada odio, sed viverra diam ultrices non. Nullam sed volutpat arcu.
        Maecenas lobortis ante vitae eros lacinia, sed cursus nibh molestie.
        Suspendisse sit amet tristique urna, non venenatis velit. Quisque tempus
        in odio quis luctus. Duis efficitur, risus et tincidunt placerat, nulla
        arcu lobortis ipsum, quis dapibus nibh neque eu libero. In eget enim
        quam. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Phasellus iaculis justo felis, quis
        semper nibh facilisis sed. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus
        fringilla neque, a fringilla tortor tincidunt vel. Sed tempus placerat
        pretium.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={netflixImg} title="Netflix" />
        <ProjectItem img={netflixImg} title="Netflix" />
        <ProjectItem img={netflixImg} title="Netflix" />
        <ProjectItem img={netflixImg} title="Netflix" />
      </div>
    </div>
  );
};

export default Projects;
