import React, { useState } from 'react';
import "../styles/contactcopy.css"
import { AiOutlineMail } from "react-icons/ai";

const EmailCopy = () => {
  const [copied, setCopied] = useState(false);
  const email = 'henrik.saega@voco.ee';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div 
        className={`email-container ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
    >
        <AiOutlineMail className="email-icon" />
      <span>{copied ? 'Copied to Clipboard!' : email}</span>
    </div>
  );
};

export default EmailCopy;
