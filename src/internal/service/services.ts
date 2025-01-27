import SolanaService from "./solona";

class Services{
    private solana: SolanaService;

    constructor(solanaService: SolanaService){
        this.solana = solanaService
    }

    Services() : Services{
        return this
    }

    SolanaService(): SolanaService{
        return this.solana
    }
}

export default Services