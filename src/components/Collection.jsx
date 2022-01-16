import { Section } from "./Section";

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
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <Token name="Token #001" image="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token name="Token #002" image="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token isMinted name="Token #003" image="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token name="Token #004" image="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>

      <Token name="Token #005" image="https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token isMinted name="Token #006" image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token isMinted name="Token #007" image="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token name="Token #008" image="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"></Token>

      <Token name="Token #009" image="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token isMinted name="Token #010" image="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token name="Token #011" image="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>
      <Token name="Token #012" image="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"></Token>

    </div>

    <div class="flex space-x-2 justify-center">
      <div>
        <button type="button" class="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View Collection on Opensea</button>
      </div>
    </div>
  </Section>;
};
