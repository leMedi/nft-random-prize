import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export const Footer = () => (
  <footer className="max-w-6xl mx-auto py-8 border-t border-gray-400">
    <div className="flex justify-center items-center justify-between flex-col md:flex-row">
      <div className="flex justify-center mb-4 md:mb-0 md:order-last">
        <a href="#!" className="mr-6 text-white">
          <FaInstagram />
        </a>
        <a href="#!" className="mr-6 text-white">
          <FaFacebookF />
        </a>
        <a href="#!" className="mr-6 text-white">
          <FaTwitter />
        </a>
      </div>
      <p>© 2021 Copyright: Aligaverse</p>
    </div>
  </footer>
);
