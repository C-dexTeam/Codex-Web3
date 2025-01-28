import { Router, Request, Response } from 'express';
import  Handler from '../handler/handler'; 

// This Class For Specifig Routes
class WalletRoutes {
    private handler: Handler;

    constructor(handler: Handler) {
        this.handler = handler;
    }

    init(): Router {
        const router = Router();
        
        router.get('/', (req: Request, res: Response) => {
            this.handler.WalletHandler().Hello(req, res);
        });

        router.get('/balance/:walletAddress', (req: Request, res: Response) => {
            this.handler.WalletHandler().GetBalance(req, res)
        })

        return router;
    }
}

export default WalletRoutes;
