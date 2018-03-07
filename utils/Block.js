import Sha256 from './Sha256';

export default class Block {
    constructor(blockNumber, data, nonce, prevHash) {
        this.BlockNumber = blockNumber || 0;
        this.Data = data || "";
        this.Nonce = nonce || 0;
        this.PrevHash = prevHash || "";
        this.RefreshHash();
    }

    RefreshHash(){
        let toHash = this.BlockNumber.toString() + this.Nonce.toString() + this.Data + this.PrevHash;
        this.Hash = Sha256(toHash);
    }

    IsValid(){
        this.RefreshHash();
        return this.Hash.startsWith("0000");
    }

    Mine() {
        this.Nonce = 0;
        while (!this.IsValid()){
            this.Nonce = this.Nonce + 1;
        }
    }
}