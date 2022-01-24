import { IoLogoReact } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const NavLink = ({title, link}) => (
  <li>
    <a
      className="inline-block hover:underline py-2 px-4"
      href={link}
    >
      {title}
    </a>
  </li>
);

export const HeaderNav = () => (
  <nav id="header" className="w-full z-30 top-0 py-1">
    <div className="max-w-6xl mx-auto flex flex-wrap items-center mt-0 py-3 text-white">
      <div>
        <a
          className="flex items-center tracking-wide no-underline hover:no-underline font-black text-3xl "
          href="/#"
        >
          <IoLogoReact className="mr-2" />
          Aligaverse
        </a>
      </div>
      
      <div
        className="hidden md:flex md:flex-1 md:items-center"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between font-medium text-base pt-4 md:pt-1 md:ml-4">
            <NavLink title="Collection" link="#Collection" />
            <NavLink title="Utility" link="#Utility" />
            <NavLink title="FAQ" link="#FAQ" />
            <NavLink title="About" link="#About" />
          </ul>
        </nav>
      </div>

      <div className="flex justify-center mb-4 md:mb-0 md:order-last">
        <a href="#!" className="mr-6">
          <FaInstagram />
        </a>
        <a href="#!" className="mr-6">
          <FaFacebookF />
        </a>
        <a href="#!" className="mr-6">
          <FaTwitter />
        </a>
      </div>

    </div>
  </nav>
);
