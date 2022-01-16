import { IoLogoReact } from "react-icons/io5";

const NavLink = ({title, link}) => (
  <li>
    <a
      className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
      href={link}
    >
      {title}
    </a>
  </li>
);

export const HeaderNav = () => (
  <nav id="header" className="w-full z-30 top-0 py-1">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
      <div>
        <a
          className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
          href="/#"
        >
          <IoLogoReact className="mr-2" />
          NFT Prize
        </a>
      </div>

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <NavLink title="Collection" link="#Collection" />
            <NavLink title="Utility" link="#Utility" />
            <NavLink title="FAQ" link="#FAQ" />
            <NavLink title="About" link="#About" />
          </ul>
        </nav>
      </div>
    </div>
  </nav>
);
