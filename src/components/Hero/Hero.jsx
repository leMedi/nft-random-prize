import {HeroCarousel} from './Carousel';

export const HeroTemplate = ({ children }) => {
  return (
    <div className="hero px-6 xl:px-0 py-16 mb-16">
      <div className="max-w-6xl text-white md:py-16 mx-auto">
        <div className="hero-wrapper grid grid-cols-1 xl:grid-cols-12 gap-2 items-center">
          <div className="hero-text col-span-6">
            <h1 className="uppercase font-black text-justify text-4xl sm:text-6xl leading-10">
              Welcome to  <br />
              THE <span className="text-purple-700">ALIGAVERSE</span>
            </h1>
            
            <p className="text-2xl leading-relaxed mt-8">
              The <span className="text-purple-700">ALIGAVERSE</span> is a private collection of NFTs-unique digital collectibles. The Apes, Cyborgs and Tycoons are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
            </p>

            <div className="get-app flex space-x-5 mt-10 justify-center">
              {children}
            </div>
          </div>

          <div className="col-span-6 mt-12 xl:mt-0 flex items-center justify-center xl:justify-end">
            <div className="max-w-sm">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
