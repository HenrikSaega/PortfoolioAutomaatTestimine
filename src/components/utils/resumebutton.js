import React, { useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import '../styles/resume.css';

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="resume-button" onClick={() => setIsOpen(true)}>
        Resume
      </button>

      {isOpen && (
        <div className="model-overlay" onClick={() => setIsOpen(false)}>
          <div className="model-content" onClick={e => e.stopPropagation()}>
            <div className='buttons'>
                <a
                  download="resume_Henrik_Saega.pdf"
                  className="download-link"
                  aria-label="Download CV"
                  role="link"
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
