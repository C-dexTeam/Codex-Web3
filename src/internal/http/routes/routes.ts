import WalletRoutes from "./wallet";
import { Express } from 'express';

// This Class For Grouping Routes
class Routes {
    private app: Express;
    private wallet: WalletRoutes;

    constructor(app: Express, walletRoutes: WalletRoutes) {
        this.app = app; 
        this.wallet = walletRoutes;
    }

    init() {
        this.app.use('/wallet', this.wallet.init());
    }
}

export default Routes;
