import NFTService from "./nft";
import SolanaService from "./solona";

class Services{
    private solana: SolanaService;
    private nft: NFTService;

    constructor(solanaService: SolanaService, nftService: NFTService){
        this.solana = solanaService
        this.nft = nftService
    }

    Services() : Services{
        return this
    }

    SolanaService(): SolanaService{
        return this.solana
    }

    NFTService(): NFTService{
        return this.nft
    }
}

export default Services