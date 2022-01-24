import Typist from 'react-typist';
import HeroImage from './crocodile.png'
import {HeroCarousel} from './Carousel';

export const HeroTemplate = ({ children }) => {
  return (
    <div className="hero py-16 mb-16">
      <div className="max-w-6xl text-white md:py-16 mx-auto">
        <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
          <div className="hero-text col-span-6">
            <h1 className="uppercase font-black text-justify text-6xl md:text-6xl" style={{lineHeight: "3.5rem"}}>
              Welcome to  <br />
              THE <span className="text-purple-700">ALIGAVERSE</span>
            </h1>
            {/* <h1 className="flex flex-col text-4xl md:text-5xl" style={{lineHeight: "3.5rem"}}>
              Welcome to THE <span className="font-bold underline">ALIGAVERSE</span> for a chance to win a
              <Typist className="inline">
                <Typist.Delay ms={1000} />
                <span className="font-bold">AirPods Pro</span>
                <Typist.Backspace count={16} delay={500} />
                <span className="font-bold">iPad Pro</span>
                <Typist.Backspace count={16} delay={500} />
                <span className="font-bold">Macbook Air 2022</span>
              </Typist>
            </h1> */}
            <p className="text-2xl leading-relaxed mt-8">
              The <span className="text-purple-700">ALIGAVERSE</span> is a private collection of NFTs-unique digital collectibles. The Apes, Cyborgs and Tycoons are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
            </p>

            <div className="get-app flex space-x-5 mt-10 justify-center">
              {children}
            </div>
          </div>

          <div className="col-span-6 flex items-center justify-end">
            <div className="max-w-sm">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
