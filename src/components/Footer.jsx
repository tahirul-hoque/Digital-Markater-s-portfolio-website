import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Social Media</h2>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a href="https://www.instagram.com/urfahim69" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <p>Instagram</p>
          </a>
          <a href="https://x.com/urfahimex69" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <p>X</p>
          </a>
          <a href="https://pinterest.com/urfahim69" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <p>Pinterest</p>
          </a>
          <a href="https://web.facebook.com/fahmiduzzamanfahim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <p>Facebook</p>
          </a>
        </div>
        <div className="text-center">
          <a href="mailto:urfahim2025@gmail.com" className="block mb-2 hover:text-gray-400">urfahim2025@gmail.com</a>
          <a href="tel:01615939779" className="block hover:text-gray-400">01615939779</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
