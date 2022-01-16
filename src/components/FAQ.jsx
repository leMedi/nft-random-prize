import { AccordionItem } from "./Accordion";
import { Section } from "./Section";

export const FAQ = () => (
  <Section title="FAQ">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <AccordionItem question="What is a NFT Prize ?">
        A nft prize is a unique piece of art designed by us and randomly generated with different attributes . From 111 attributes to 868 296 000 combinations, your nft prize will be unique in the world.
      </AccordionItem>
      <AccordionItem question="How many NFT Prize exist ?">
        NFT Prizes collection contains 1,000 unique pieces. You will be given full ownership of your NFT Prize NFT, including commercial usage rights.
      </AccordionItem>
      <AccordionItem question="How can I get a NFT Prize ?">
        To have a chance to get a NFT Prize, you will need to participate in the public mint on December 19 2021 at 20:00 CET. Mint price will be 1.5 SOL. You will be able to connect your wallet at the top of the site as soon as the timer is over. Be ready, because first come, first served.
      </AccordionItem>
    </div>
  </Section>
);
