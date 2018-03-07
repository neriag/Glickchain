import Blockchain from "./Blockchain";


function validateBlockchainOffer(blockchainOffer, myCurrentBlockchain){
    if (!blockchain.isPrototypeOf(Array)){
        return false;
    }
    
    if (myCurrentBlockChain != undefined && !myCurrentBlockchain.isPrototypeOf(Blockchain)){
        throw "myCurrentBlockchain have to be from type Blockchain";
    }
    
    if (myCurrentBlockchain.Blocks.lengeth > blockchainOffer.lengeth){
        return false
    }
}