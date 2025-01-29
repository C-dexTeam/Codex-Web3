import NFTService from "./nft";
import WalletService from "./wallet";

class Services {
    private wallet: WalletService;
    private nft: NFTService;

    constructor(
        walletService: WalletService,
        nftService: NFTService
    ) {
        this.wallet = walletService
        this.nft = nftService
    }

    Services(): Services {
        return this
    }

    WalletService(): WalletService {
        return this.wallet
    }

    NFTService(): NFTService {
        return this.nft
    }
}

export default Services