import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
      <p>Have a question? Check out our <a href="/faq" className="text-green-500">FAQs</a> page or chat with us on Facebook or WhatsApp.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
      <p className="mt-4">Footer Sections</p>
    </footer>
  );
}

export default Footer;

