import './App.css';
import { About } from './components/About';
import { Section } from './components/Section';
import { HeaderNav } from './components/Nav';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Collection } from './components/Collection';
import { Hero } from './components/Hero';

function App() {
  return (
    <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <HeaderNav />
      <Hero />
      <Collection />
      <Section title="Utility">
        <p className="mt-8 mb-8">
          The Mystery Loops is a collection of 2,650 Non Fungible Tokens (NFT). They are part of the Solana Blockchain and hosted on Arweave. <br />
          Become a member of the club by owning a Mystery Loops. Mint the Diamond Mystery Loops and receive a Diamond Rolex ! Scroll down to discover multiple perks and crazy things about owning a Mystery Loops.
        </p>
      </Section>
      <FAQ />
      <About />
      <Footer />
    </div>
  );
}

export default App;
