import express, { Request, Response } from 'express';
import { Config } from '../config/config';
import Services from '../service/services';
import Handler from '../http/handler/handler';
import SolonaRoutes from '../http/routes/wallet';
import Routes from '../http/routes/routes';
import NFTService from '../service/nft';
import { Connection } from '@solana/web3.js';
import WalletService from '../service/wallet';
import NFTRoutes from '../http/routes/nft';
import { configDotenv } from 'dotenv';

export const Run = (config: Config): void => {
    const app = express();
    app.use(express.json());

    // Constants
    const network = config.solana.network.devnet
    const keypairBase64 = process.env.KEYPAIR

    // Solana Connection
    const connection = new Connection(network)

    // Service Implementation
    const walletService = new WalletService(connection)
    const nftService = new NFTService(connection, network, keypairBase64)
    const services = new Services(
        walletService,
        nftService,
    )

    // Handler Implementation
    const handler = new Handler(services)

    // Creation of Routes
    const solonaRoutes = new SolonaRoutes(handler)
    const nftRoutes = new NFTRoutes(handler)
    const routes = new Routes(
        app,
        solonaRoutes,
        nftRoutes,
    )

    // Implementation of Routers
    routes.init()

    // Start Server
    const port = config.http.port
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};
