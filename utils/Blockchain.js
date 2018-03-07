import Block from './Block';

export default class Blockchain{
    constructor(){
        this.Blocks = [];
    }

     // What a beautiful name, I'm so Sharp!!!
    AdBlock(data){
        let blockNumber = this.Blocks.length + 1;
        let prevHash = "0000000000000000000000000000000000000000000000000000000000000000";
        if (blockNumber !== 1){
            prevHash = this.Blocks[this.Blocks.length - 1].Hash;
        }

        let newBlock = new Block(blockNumber, data, 0, prevHash);
        newBlock.Mine();
        this.Blocks.push(newBlock)
    }

    IsValid(){
        for (i = 0; i < this.Blocks.length; i++){
            
            if (i !== 0 && this.Blocks[i].prevHash != this.Blocks[i-1].Hash){
                return false; 
            }
            if (!this.Block.IsValid()){
                return false;
            }
        }
        return true;
    }
} 