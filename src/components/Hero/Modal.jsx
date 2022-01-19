import { AiOutlineClose } from "react-icons/ai";

export const TokenModal = ({ tokenId }) => (
  <div className="bg-white py-3 max-w-sm rounded-sm shadow-lg">
    <div className="relative flex justify-between items-start rounded-t">
      <h3 className="text-xl font-semibold text-gray-900 flex-1 text-center lg:text-2xl">
        Congradulation
      </h3>
      <button
        type="button"
        className="absolute right-0 text-gray-400 bg-transparent text-sm p-1.5 pr-3 inline-flex items-center"
        data-modal-toggle="defaultModal"
      >
        <AiOutlineClose />
      </button>
    </div>
    <div className="px-3">
      <p className="text-center leading-relaxed text-gray-400 mb-2">
        You are now the owner of
      </p>
      <img
        className="hover:grow hover:shadow-lg"
        alt="token"
        width="300"
        src={`https://gateway.pinata.cloud/ipfs/QmWFoH4vweitUL8LZZvwLmZiDSFwXJb37oM3URra7RvwZ9/${tokenId}.jpg`}
      />
      <p className="text-center font-semibold text-gray-900 mt-2">
        Token #{tokenId && tokenId.toString().padStart(4, "0")}
      </p>
    </div>
  </div>
);
