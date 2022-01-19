import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export const Footer = () => (
  <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
    <div className="flex justify-center items-center justify-between flex-col md:flex-row">
      <div className="flex justify-center mb-4 md:mb-0 md:order-last">
        <a href="#!" className="mr-6 text-gray-600">
          <FaInstagram />
        </a>
        <a href="#!" className="mr-6 text-gray-600">
          <FaFacebookF />
        </a>
        <a href="#!" className="mr-6 text-gray-600">
          <FaTwitter />
        </a>
      </div>
      <p>© 2021 Copyright: NFT Prize</p>
    </div>
  </footer>
);
