import NFTRoutes from "./nft";
import WalletRoutes from "./wallet";
import { Express, Request, Response } from 'express';

// This Class For Grouping Routes
class Routes {
    private app: Express;
    private wallet: WalletRoutes;
    private nft: NFTRoutes

    constructor(app: Express, walletRoutes: WalletRoutes, nftRoutes: NFTRoutes) {
        this.app = app;
        this.wallet = walletRoutes;
        this.nft = nftRoutes
    }

    init() {
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Welcome to the Codex-Web3 API!");
        });

        console.log("Routes Initialized");
        this.app.use('/wallet', this.wallet.init());
        this.app.use('/nft', this.nft.init())
    }
}

export default Routes;
