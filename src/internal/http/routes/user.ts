import { Router, Request, Response } from 'express';
import Handler from '../handler/handler';

// This Class For Specifig Routes
class UserRoutes {
    private handler: Handler;

    constructor(handler: Handler) {
        this.handler = handler;
    }

    init(): Router {
        const router = Router();

        router.get('/', (req: Request, res: Response) => {
            res.send("Welcome to the User Endpoint Lab API!");
        });

        router.get('/getNfts/:id', (req: Request, res: Response) => {
            this.handler.UserHandler().GetUserNFTs(req, res);
        });

        return router;
    }
}

export default UserRoutes;
