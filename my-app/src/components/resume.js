import myResume from "./images/resume.pdf";

import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div>
        <a href={myResume}>View Resume</a>
      </div>

      <img className="resume_image" />
    </div>
  );
};

export default Resume;