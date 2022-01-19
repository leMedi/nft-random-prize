import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
// import WalletConnect from "@walletconnect/web3-provider";
import { FaWallet } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

import { HeroTemplate } from "./Hero";
import { TokenModal } from "./Modal";
import Modal from "react-modal";

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  // providerOptions: {
  //   walletconnect: {
  //     package: WalletConnect,
  //     options: {
  //       qrcode: true,
  //       infuraId: "23mwrdtdrCqDYaqIMZ6MhbBdjYs",
  //       supportedChainIds: [43113, 43114],
  //     },
  //   },
  // },
});

function initWeb3(provider) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

export const Mint = () => {
  const [web3, setWeb3] = useState(null);
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [contract, setContract] = useState(null);
  const [minting, setMinting] = useState(false);
  const [tokenId, setTokenId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      console.log("cachedProvider", web3Modal.cachedProvider);
      onConnect();
    }
  }, []);

  const onConnect = async () => {
    const _provider = await web3Modal.connect();

    await _provider.enable();
    const _web3 = initWeb3(_provider);
    setProvider(_provider);
    setWeb3(_web3);
    setChainId(await _web3.eth.getChainId());

    const abi = require("../../contracts/RandomPrizeNFT.json");
    const Contract = new _web3.eth.Contract(
      abi,
      "0x080c313e03B97ed6edf31f68e1CcE5EA7ED0b342"
    );
    setContract(Contract);

    const totalSupply = await Contract.methods.totalSupply().call();
    console.log("totalSupply2", totalSupply);
    console.log("sel addr", _web3.currentProvider.selectedAddress);
  };

  const mint = async () => {
    setMinting(true);
    setError("");
    if (!contract) return;

    const to = web3.currentProvider.selectedAddress;
    const mintTx = contract.methods.mint(to).send({
      from: to,
      value: 100,
      // gas: 21000,
    });

    mintTx
      .on("error", function (error) {
        setError(error.message);
      })
      .on("transactionHash", function (transactionHash) {})
      .on("receipt", function (receipt) {
        console.log("receipt", receipt);
        contract.events.Minted(
          {
            filter: {
              recipient: to,
            },
            fromBlock: receipt.blockNumber,
            toBlock: receipt.blockNumber,
          },
          function (error, event) {
            if (error) {
              console.error(error);
              return;
            }
            console.log("minted", event, event.returnValues.tokenId);
            setTokenId(event.returnValues.tokenId);
          }
        );
      })
      .finally(() => setMinting(false));
  };

  console.log('chainId', chainId)
  const isCompatibleNetwork = chainId === 43113 || chainId === 43114;

  let content = (
    <div className="">
      <button
        onClick={mint}
        type="button"
        className="flex m-auto items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaWallet className="mr-2" />
        Mint My Random NFT
      </button>
      {error && (
        <p className="text-red-600 mt-2">
          <b>Error:</b> {error}
        </p>
      )}
    </div>
  );

  if (!web3 || !chainId)
    content = (
      <button
        onClick={onConnect}
        type="button"
        className="flex items-center px-6 py-2 border-2 border-gray-800 hover:text-gray-800 hover:bg-white font-medium text-md leading-tight uppercase rounded bg-black text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        <FaWallet className="mr-2" />
        Connect your wallet
      </button>
    );

  else if (!isCompatibleNetwork)
    content = (
      <p className="text-red-600">
        Network not support: Please switch to <b>Avalanche C-Chain</b> network and refresh
        the page
      </p>
    );

  else if (minting)
    content = (
      <div className="flex items-center px-6 py-2 text-gray-800 border-2 border-gray-400">
        <CgSpinner className="animate-spin mr-3 text-xl" />
        <p>Minting ...</p>
      </div>
    );

  return <>
    {content}
    <Modal
      isOpen={!!tokenId}
      onRequestClose={() => setTokenId(null)}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          border: 'none',
          background: 'none',
          maxWidth: '500px',
          transform: 'translate(-50%, -50%)',
        }
      }}
    >
      <TokenModal tokenId={tokenId} />
    </Modal>
  </>;
};

export const Hero = () => (
  <HeroTemplate>
    <Mint />
  </HeroTemplate>
);
