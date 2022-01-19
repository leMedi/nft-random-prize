import { Section } from "./Section";
import T1 from '../tokens/1.jpg'
import T2 from '../tokens/2.jpg'
import T3 from '../tokens/3.jpg'
import T4 from '../tokens/4.jpg'
import T5 from '../tokens/5.jpg'
import T6 from '../tokens/6.jpg'
import T7 from '../tokens/7.jpg'
import T8 from '../tokens/8.jpg'
import T9 from '../tokens/9.jpg'
import T10 from '../tokens/10.jpg'
import T11 from '../tokens/11.jpg'
import T12 from '../tokens/12.jpg'

// const baseURL = 'https://gateway.pinata.cloud/ipfs/QmWFoH4vweitUL8LZZvwLmZiDSFwXJb37oM3URra7RvwZ9/';

const Token = ({ name, image, isMinted }) => (
  <div
    className="w-full m-auto max-w-sm sm:m-0 sm:max-w-none sm:w-1/2 md:w-1/3 xl:w-1/5 2xl:w-1/6 p-6 flex flex-col"
    style={{
      opacity: isMinted ? 0.3 : 1
    }}
  >
    <a href="#!">
      <img className="hover:grow hover:shadow-lg" alt={name} src={image} />
      <div className="pt-3 flex items-center justify-between">
        <p className={`${isMinted && 'line-through'}`}>{name}</p>
        {!isMinted ? <p className="text-sm text-gray-400">Available</p> : <p className="text-sm text-red-500">minted</p>}
      </div>
    </a>
  </div>
);

export const Collection = () => {
  return <Section title="Collection">
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <Token name="Token #001" image={T1}></Token>
      <Token name="Token #002" image={T2}></Token>
      <Token name="Token #003" image={T3}></Token>
      <Token name="Token #004" image={T4}></Token>

      <Token name="Token #005" image={T5}></Token>
      <Token name="Token #006" image={T6}></Token>
      <Token name="Token #007" image={T7}></Token>
      <Token name="Token #008" image={T8}></Token>

      <Token name="Token #009" image={T9}></Token>
      <Token name="Token #010" image={T10}></Token>
      <Token name="Token #011" image={T11}></Token>
      <Token name="Token #012" image={T12}></Token>

    </div>

    <div className="flex space-x-2 justify-center">
      <div>
        <button type="button" className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View Collection on Opensea</button>
      </div>
    </div>
  </Section>;
};
