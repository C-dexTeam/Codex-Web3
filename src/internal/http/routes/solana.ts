import { Router, Request, Response } from 'express';
import  Handler from '../handler/handler'; 

// This Class For Specifig Routes
class SolonaRoutes {
    private handler: Handler;

    constructor(handler: Handler) {
        this.handler = handler;
    }

    init(): Router {
        const router = Router();
        
        router.get('/', (req: Request, res: Response) => {
            this.handler.SolonaHandler().Hello(req, res);
        });

        return router;
    }
}

export default SolonaRoutes;
