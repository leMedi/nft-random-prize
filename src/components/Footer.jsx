import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export const Footer = () => (
  <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
    <div className="flex justify-center items-center lg:justify-between">
      <p>© 2021 Copyright: NFT Prize</p>
      <div class="flex justify-center">
        <a href="#!" class="mr-6 text-gray-600">
          <FaInstagram />
        </a>
        <a href="#!" class="mr-6 text-gray-600">
          <FaFacebookF />
        </a>
        <a href="#!" class="mr-6 text-gray-600">
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);
