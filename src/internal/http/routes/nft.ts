import { Router, Request, Response } from 'express';
import  Handler from '../handler/handler'; 
import authMiddleware from '../middlewares/auth';

// This Class For Specifig Routes
class NFTRoutes {
    private handler: Handler;

    constructor(handler: Handler) {
        this.handler = handler;
    }

    init(): Router {
        const router = Router();

        router.post('/mint', authMiddleware,(req: Request, res: Response) => {
            this.handler.NFTHandler().MintNFT(req, res);
        });

        return router;
    }
}

export default NFTRoutes;
