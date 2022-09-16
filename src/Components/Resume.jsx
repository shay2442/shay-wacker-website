import React from "react";
import { Link } from "react-router-dom";

function Resume() {
  const Resume = "/ShayWackerResume.pdf";
  return (
    <div style={{ width: "1400px", height: "1000px"}}>

      <embed
        className="resume-pic"
        src="/ShayWackerResume.pdf"
        alt="logo"
        // height="500px"
        // width="400px"
      />
    </div>
  );
}

export default Resume;
