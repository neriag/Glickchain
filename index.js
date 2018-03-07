import Blockchain from "./utils/Blockchain"

let chain = new Blockchain();
chain.AdBlock("Neriag");
chain.AdBlock("Is");
chain.AdBlock("A");
chain.AdBlock("Good");
chain.AdBlock("Man");

chain.Blocks.forEach((b) => console.log(b.Nonce));