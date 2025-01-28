import express, { Request, Response } from 'express';
import { Config } from '../config/config';
import SolanaService from '../service/solona';
import Services from '../service/services';
import Handler from '../http/handler/handler';
import SolonaRoutes from '../http/routes/wallet';
import Routes from '../http/routes/routes';
import NFTService from '../service/nft';
import { Connection } from '@solana/web3.js';

export const Run = (config: Config): void => {
    const app = express();
    app.use(express.json());

    // Solana Connection
    const connection = new Connection(config.solana.network.devnet)

    // Service Implementation
    const solanaService = new SolanaService(connection)
    const nftService = new NFTService(connection)
    const services = new Services(
        solanaService,
        nftService
    )

    // Handler Implementation
    const handler = new Handler(services)

    // Creation of Routes
    const solonaRoutes = new SolonaRoutes(handler)
    const routes = new Routes(app, solonaRoutes)

    // Implementation of Routers
    routes.init()

    // Welcome Message
    app.get("/", (req: Request, res: Response) => {
        res.send("Welcome to the Codex-Web3 API!");
    });

    // Start Server
    const port = config.http.port
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};
