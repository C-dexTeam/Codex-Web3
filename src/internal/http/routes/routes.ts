import SolonaRoutes from "./solana";
import { Express } from 'express';

// This Class For Grouping Routes
class Routes {
    private app: Express;
    private solona: SolonaRoutes;

    constructor(app: Express, solonaRoutes: SolonaRoutes) {
        this.app = app; 
        this.solona = solonaRoutes;
    }

    init() {
        this.app.use('/solana', this.solona.init());
    }
}

export default Routes;
