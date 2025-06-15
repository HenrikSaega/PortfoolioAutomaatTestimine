import React, { useState } from 'react';
import "../styles/contactcopy.css"
import { AiFillPhone } from "react-icons/ai";

const PhoneCopy = () => {
  const [copied, setCopied] = useState(false);
  const phone = '+372 5553 7416';

  const handleCopy = () => {
    navigator.clipboard.writeText(phone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div 
        className={`phone-container ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
    >
        <AiFillPhone  className="phone-icon" />
      <span>{copied ? 'Copied to Clipboard!' : phone}</span>
    </div>
  );
};

export default PhoneCopy;