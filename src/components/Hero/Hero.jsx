import Typist from 'react-typist';
import HeroImage from './crocodile.png'

export const HeroTemplate = ({ children }) => {
  return (
    <div className="hero bg-gray-100 py-16 mb-16">
      <div className="container md:py-16 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="hero-text col-span-6 text-center">
            <h1 className="flex flex-col text-4xl md:text-5xl text-gray-900" style={{lineHeight: "3.5rem"}}>
              Buy One of our <span className="font-bold underline">Crocodiles</span> for a chance to win a
              <Typist className="inline">
                <Typist.Delay ms={1000} />
                <span className="font-bold">AirPods Pro</span>
                <Typist.Backspace count={16} delay={500} />
                <span className="font-bold">iPad Pro</span>
                <Typist.Backspace count={16} delay={500} />
                <span className="font-bold">Macbook Air 2022</span>
              </Typist>
            </h1>
            <p className="text-gray-800 text-base leading-relaxed mt-8">
              Token are minted randomly Lorem ipsum dolor sit. <b/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos maxime, accusamus dolorum laborum ea animi libero, aspernatur dolor nostrum consectetur quia saepe ex!
            </p>

            <div className="get-app flex space-x-5 mt-10 justify-center">
              {children}
            </div>
          </div>

          <div className="hero-image col-span-6 flex justify-center opacity-90">
            <img src={HeroImage} alt="hero-corodile" className="w-1/2 mt-6 md:m-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
