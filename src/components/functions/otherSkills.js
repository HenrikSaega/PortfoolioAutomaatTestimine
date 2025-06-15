import React, { useState } from "react";
import "../styles/otherSkills.css";

const OtherSkillsToggle = () => {
  const [show, setShow] = React.useState(false);
  const toggleShow = () => setShow(prev => !prev);

  return (
    <div className="other-skills-toggle">
      <p onClick={toggleShow} className="no-select">
        {show ? "Hide Other Skills" : "Show Other Skills"}
      </p>

      {show && (
        <div className="other-skills-item-container">
                    <div className="other-skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"/>
                        <p className="no-select">Linux</p>
                    </div>
                    <div className="other-skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"/>
                        <p className="no-select">Node</p>
                    </div>
                    <div className="other-skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"/>
                        <p className="no-select">Postman</p>
                    </div>
                </div>
      )}
    </div>
  );
};

export default OtherSkillsToggle;