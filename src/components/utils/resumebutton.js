import React, { useState } from 'react';
import resumePDF from "../pics/resume_Henrik_Saega.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import '../styles/resume.css';

export default function ResumePopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="resume-button" onClick={() => setIsOpen(true)}>
        Resume
      </button>

      {isOpen && (
        <div className="model-overlay" onClick={() => setIsOpen(false)}>
          <div className="model-content" onClick={e => e.stopPropagation()}>
            <iframe
              src={`${resumePDF}#toolbar=0&navpanes=0`}
              title="CV"
              className="resume-iframe"
            />
            <div className='buttons'>
                <a
                  href={resumePDF}
                  download="resume_Henrik_Saega.pdf"
                  className="download-link"
                  onClick={e => e.stopPropagation()}
                >
                 <MdOutlineFileDownload color="white" size={40}/>
                </a>
                <button className="close-button" onClick={() => setIsOpen(false)}>
                  Close
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
