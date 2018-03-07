import Sha256 from './Sha256';

export default class Block {
    constructor(blockNumber, data, nonce) {
        this.BlockNumber = blockNumber || 0;
        this.Data = data || "";
        this.Nonce = nonce || 0;
    }

    get Hash(){
        let toHash = this.BlockNumber.toString() + this.Nonce.toString() + this.Data;
        return Sha256(toHash);
    }

    IsValid(){
        return this.Hash.startsWith("0000");
    }

    Mine() {
        this.Nonce = 0;
        while (!this.IsValid()){
            this.Nonce = this.Nonce + 1;
        }
    }
}